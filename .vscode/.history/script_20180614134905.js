const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const submit = document.getElementById("submit")
const dot = /(\w+\.\w+@)/gi
// const dog = /[@]/
const regWithUpperCase = /[A-Z]+/g

const sendYoubike = document.getElementById("send-youbike");

setTimeout(() => {
  document.getElementsByClassName("body")[0].style.fontSize = "15px";
  setTimeout(() => {
    document.getElementsByClassName("body")[0].style.fontSize = "14px";
  },3);
}, 2000)

submit.addEventListener("click", () => {
  let validateEmail = email.value
  let validatePassword = password.value;
  if(firstName.value && email.value && password.value) {
    if(validateEmail.match(dot) || validatePassword.match(regWithUpperCase) || !sendYoubike.checked || (password.value != confirmPassword.value)) {
      alert("Ошибка регистрации, возможно ваша почта katerina93@bigmir.net?")
    } else {
      alert("Регистрация прошла успешно, Виталина")
    }
  } else {
    alert("Заполните все поля")
  }

})

