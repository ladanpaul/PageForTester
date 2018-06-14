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



submit.addEventListener("click", () => {
  let validateEmail = email.value
  let validatePassword = password.value;
  if(firstName.value && lastName.value && email.value && password.value) {
    if(validateEmail.match(dot) || validatePassword.match(regWithUpperCase) || !validateEmail.match(dog) || !sendYoubike.checked || (password.value != confirmPassword.value)) {
      alert("Ошибка регистрации")
    } else {
      alert("Регистрация прошла успешно Катерина")
    }
  } else {
    alert("заполните все поля")
  }

})

