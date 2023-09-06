class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector(".menu-list");
        }

        async setup(){
            const response = await this.loadData();
            this.colaFactory(response);
        }

        async loadData() {
        try {
            const response = await fetch("./items.json");

            if (!response.ok) {
            throw new Error("HTTP ERROR : " + response.status);
            }

            return await response.json();
        } catch (error) {
            console.error(
            "콜라데이터를 로딩하는 중에 문제가 발생했습니다. : " + error
            );
        }
    }

    colaFactory(data) {
        const docFrag = new DocumentFragment();

        data.forEach((el) => {
            const item = document.createElement("li");
            

            const itemTemplate = `<button type="button" 
            class="menu"
            data-item="${el.name}"
            data-count="${el.count}"
            data-price="${el.cost}"
            data-img="${el.img}">
                <img src="./img/${el.img}" alt="${el.name}">
                <span class="menu-name">${el.name}</span>
                <strong class="price">${el.cost}원</strong>
            </button>`;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });

        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;
