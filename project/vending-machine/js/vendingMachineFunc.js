class VendingMachineFunc {
    constructor(){
        const vMachine = document.querySelector('.menu-area');
        this.balance = vMachine.querySelector('.money p');
        this.itemList = vMachine.querySelector('.menu-list');
        this.inputMoney = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+button');
        this.btnReturn = vMachine.querySelector('.money+button');
        this.btnGet =  vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.selected')

        const resultInfo = document.querySelector('.result-area');
        this.myMoney = resultInfo.querySelector('.money p');
        this.getList = resultInfo.querySelector('.get-item-list .selected');
        this.txtTotal = resultInfo.querySelector('.total-money');
    }
    
    setup(){
        this.bindEvents();
    }



    // 장바구니에 선택한 콜라의 목록을 생성
    stagedItemGenerator(target){
        const  stagedItem = document.createElement('li');
        stagedItem.classList.add('selected-item')

        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.img = target.dataset.img;
        stagedItem.dataset.price = target.dataset.price;
    
        stagedItem.innerHTML = `
        <div>
            <img src="./img/${target.dataset.img}" alt="">
            <span class="menu-name">${target.dataset.item}</span>
        </div>
        <strong>
            1
            <span class="a11y-hidden">개</span>
        </strong>
        `

        this.stagedList.append(stagedItem);
    }


    // 이벤트 붙이기
    bindEvents(){
        /**
         * 1. 입금 기능
         * 소지금 === 소지금 - 입금액
         * 잔액 === 잔액 + 입금액
         * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 경고창을 띄운다.
         * 입금액 인풋창을 초기화한다.
         *  */
        this.btnPut.addEventListener('click', () => {
            // 사용자 입력값
            const inputCost = parseInt(this.inputMoney.value);
            // 현재 소지금
            const myMoneyVal =  parseInt(this.myMoney.textContent.replaceAll(',',''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));


            if(inputCost){
                if(inputCost <= myMoneyVal && inputCost > 0){
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
    
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
                } else if((inputCost <= myMoneyVal && inputCost < 0)) {
                    alert("올바른 값을 입력하세요.")
                } else {
                    alert("소지금이 부족합니다.")
                }
            } else{
                alert("입금액을 입력하세요.")
            }
            this.inputMoney.value = null;
        })

        /**
         * 2. 거스름돈 반환 기능
         * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
         * 잔액창은 초기화 된다.
         */

        this.btnReturn.addEventListener('click', ()=>{
            // 현재 소지금
            const myMoneyVal =  parseInt(this.myMoney.textContent.replaceAll(',',''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

            if(balanceVal){
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + '원';

                this.balance.textContent = null;
            }
        });

        /**
         * 3. 자판기 메뉴 기능
         * 메뉴를 선택하면 잔액이 차감된다.
         * 선택한 메뉴가 장바구니 창에 추가된다.
         * 잔액이 부족하다면 "돈을 입금해주세요"라는 경고창이 뜬다.
         * data-count값이 0이면 button요소에 disabled 속성이 추가되고, 템플릿에 strong 태그가 추가된다.
         */

        const btnCola = this.itemList.querySelectorAll('button');

        btnCola.forEach((cola)=>{
            cola.addEventListener('click', (event)=>{
                // 현재 잔액
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''))
                // 클릭한 콜라의 가격
                const targetElPrice = parseInt(cola.dataset.price);

                // 장바구니 목록
                const stagedListItem = this.stagedList.querySelectorAll('li');

                let isStaged = false;

                // 콜라 선택 시 잔액 변경
                if(balanceVal >= targetElPrice){
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                    for(const item of stagedListItem) {
                        // 선택한 콜라가 이미 장바구니에 이미 존재할 경우
                        if(item.dataset.item === cola.dataset.item){
                            const itemTxt = item.querySelector('strong')
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
                            isStaged = true;
                            break;
                        }
                    }

                    //장바구니에 콜라 생성
                    if(!isStaged) {
                        this.stagedItemGenerator(cola);
                    }   

                    cola.dataset.count--;

                    // 콜라의 카운트가 0이라면
                    if(parseInt(cola.dataset.count) === 0){
                        cola.disabled = true;
                        cola.insertAdjacentHTML('afterbegin', '<strong class="soldout">품절</strong>')
                    }

                } else{
                    alert("잔액이 부족합니다. 돈을 더 입금해주세요.")
                }

            })
        })

        /**
         * 4.획득 버튼 기능
         * 획득 버튼을 누르면 선택한 음료수 목록이 음료 목록으로 이동한다.
         * 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트한다.
         */

        this.btnGet.addEventListener('click', ()=>{
            const itemStagedList = this.stagedList.querySelectorAll('li');
            const itemGetList = this.getList.querySelectorAll('li')
            let totalPrice = 0;

            // 장바구니 아이템을 획득 목록으로 이동하기

            for(const itemStaged of itemStagedList){
                let isStaged = false;
                for(const itemGet of itemGetList){
                    if(itemStaged.dataset.item === itemGet.dataset.item){
                        // 획득 목록의 콜라 카운트를 고른 개수만큼 증가
                        const itemTxt = itemGet.querySelector('strong')
                        itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);
                        isStaged = true;
                        break;
                    }
                }
                if(!isStaged){
                    this.getList.append(itemStaged);
                }
            }
            // 장바구니 목록 비우기
            this.stagedList.innerHTML = null;;

            // 총금액 계산하기
            this.getList.querySelectorAll('li').forEach((itemGet)=>{
                totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
            });

            this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(totalPrice)}원`;
        })

        
    }
}

export default VendingMachineFunc;