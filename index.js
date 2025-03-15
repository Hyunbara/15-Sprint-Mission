import { mobileChangeImg } from "./ui/mobile_changeImg.js";

document.addEventListener("DOMContentLoaded", () => {
  // 모바일 화면에서 로고 변경 함수 실행
  mobileChangeImg();

  window.addEventListener("resize", mobileChangeImg);
});
