/**
 *  0303 hyun
 * @param {input태그의 id} inputId
 * @param {i 태그 자신} iconElement
 */
function togglePasswordVisibility(inputId, iconElement) {
  let passwordInput = document.getElementById(inputId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconElement.classList.remove("fa-eye"); // 눈 뜬 모양
    iconElement.classList.add("fa-eye-slash"); // 슬래시 눈 모양
  } else {
    passwordInput.type = "password";
    iconElement.classList.remove("fa-eye-slash"); // 슬래시 눈 모양
    iconElement.classList.add("fa-eye"); // 눈 뜬 모양
  }
}

//  index.html로 이동
const goHomepage = () => {
  window.location.href = "/index.html";
};
