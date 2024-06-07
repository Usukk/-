// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 타이핑 효과
const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 강우석입니다.";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

setInterval(typing, 200);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 3) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 2) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// 모달
const $modalBg = document.getElementsByClassName("modal-background");
const $btnOpen = document.getElementsByClassName("btn-open");
const $btnClose = document.getElementsByClassName("btn-close");

function modal(num) {
  $btnOpen[num].addEventListener("click", () => {
    $modalBg[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  $btnClose[num].addEventListener("click", () => {
    $modalBg[num].style.display = "none";
    document.body.style.overflow = "unset";
  });
}

for (let i = 0; i < $btnOpen.length; i++) {
  modal(i);
}

// 스크롤바
let scrollTop = 0;
let bar = document.getElementsByClassName("bar-ing")[0];

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);

//멀티 슬라이더
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;

let slideWidth = 300;
let slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next")

function moveSlide(num){
    // slide 가 움직일때 slide index가 1이면 -330px 2면 -660px
    slides.style.left = -num * 330 +'px';
    currentIdx = num;
}


nextBtn.addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작 방지

  if (currentIdx < slideCount - 3) {
      moveSlide(currentIdx + 1);
  } else {
      moveSlide(0);
  }

  console.log("Next button clicked", event); // 이벤트 객체 정보 로그 출력
});

prevBtn.addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작 방지

  if (currentIdx > 0) {
      moveSlide(currentIdx - 1);
  } else {
      moveSlide(slideCount - 3);
  }

  console.log("Previous button clicked", event); // 이벤트 객체 정보 로그 출력
});

//캔버스

window.onload = function() {
  var canvas = document.getElementById('footerCanvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    
      // 텍스트 그리기
      var text = '*과제 제출용 페이지입니다*'
      ctx.font = '15px Montserrat';
      ctx.fillStyle = '#6a75ca';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      var x= canvas.width/2;
      var y= canvas.height/2;
      ctx.fillText(text,x,y);
  }
};
