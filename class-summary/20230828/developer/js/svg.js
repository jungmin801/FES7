const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// path 전체 길이 구하기
const pathLength = path.getTotalLength();

// dash의 길이와 공백
path.style.strokeDasharray = `${pathLength} ${pathLength}`;


// dash의 시작점
path.style.strokeDashoffset = pathLength;


// console.log('clientHeight', document.documentElement.clientHeight)
// console.log('scrollHeight', document.documentElement.scrollHeight)

function scrollHandler(){
//현재 스크롤 위치
const scrollTop = document.documentElement.scrollTop;

//전체 스크롤 길이
const scrollHeight = document.documentElement.scrollHeight;

//뷰포트의 높이
const clientHeight = document.documentElement.clientHeight;

//스크롤의 위치 => %
//스크롤top은 가장 마지막 뷰포트에서 최상단의 위치이기 때문에, 뷰포트 하나만큼의 크기를 제외해줘야한다.
const scrollPercentage = scrollTop / (scrollHeight - clientHeight) 

// 스크롤 위치에 따라 그려질 선의 길이
const drawLength = pathLength * scrollPercentage;

// 시작은 pathLength -> 마지막은 0

path.style.strokeDashoffset = pathLength - drawLength;


//button opacity
openBtn.style.opacity = scrollPercentage;
if(scrollPercentage > 0.8){
    openBtn.disabled = false;
} else { 
    openBtn.disabled = true;
}

}

window.addEventListener('scroll',scrollHandler)