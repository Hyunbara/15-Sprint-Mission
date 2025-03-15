/**
 *  모바일일 때, headerImg의 src를 변경하는 함수
 */

export const mobileChangeImg = () => {
  // 헤더 판다마켓 로고 태그
  const headerImg = document.querySelector(".headerImg");

  //브라우저 화면 너비가 모바일일때 (max-width: 767px 일 때)
  if (window.innerWidth <= 767) {
    headerImg.src = "/images/svg/mobile_logo.svg";
    headerImg.style.width = "103px";
    // headerImg.style.height = "51px";
  } else {
    headerImg.src = "/images/panda-market-logo.png";
    headerImg.style.width = "";
  }
};
