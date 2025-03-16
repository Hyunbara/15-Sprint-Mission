// input 태그의 focus 이벤트

// 이메일, 패스워드 input 요소들.
const emailInput = document.querySelector("#form-email");
const passwordInput = document.querySelector("#form-password");

// 에러 메세지를 담은 p태그 요소들.
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

// 이메일 유효성 검사 패턴
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 로그인 버튼 (login.html)
const loginBtn = document.querySelector("#btn-login");

let isEmailValid = false;
let isPasswordValid = false;

// 이메일 유효성 검사 함수
const emailCheck = () => {
  // 이메일 값 공백 제거 후 가져오기.
  const emailValue = emailInput.value.trim();
  isEmailValid = false;

  if (emailValue === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    isEmailValid = true;
  }

  loginBtnToggle();
};

// 패스워드 유효성 검사 함수
const passwordCheck = () => {
  const passwordValue = passwordInput.value.trim();
  isPasswordValid = false;

  if (passwordValue === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
    isPasswordValid = true;
  }

  loginBtnToggle();
};

// 이메일, 패스워드 유효성 검사에 따른 로그인 버튼 활성화 함수
const loginBtnToggle = () => {
  if (isEmailValid && isPasswordValid) {
    loginBtn.style.backgroundColor = "#3578e5";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
};

// 이메일 요소 focusout 이벤트
emailInput.addEventListener("focusout", emailCheck);

// 패스워드 요소 focusout 이벤트
passwordInput.addEventListener("focusout", passwordCheck);

// 로그인 버튼 요소 초기 상태 설정
loginBtn.style.cursor = "not-allowed";
loginBtn.disabled = true;
