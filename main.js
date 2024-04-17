
const submit = document.getElementById("submit");
const content = document.querySelector(".main-content");
const success = document.querySelector(".success");

const email = document.getElementById("email");
const error = document.querySelector(".error");

let dismiss = document.getElementById("dismiss");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.validity.valid && email.value.length > 0) {
        content.style.display = "none";
        success.style.display = "block";
    }
})

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        error.style.display = "none";
        email.style.borderColor = "green";
        email.style.color = "green";
    } else {
        error.style.display = "block";
        email.style.borderColor = "var(--Tomato)";
        email.style.color = "var(--Tomato)";
    }

})

dismiss.addEventListener("click", (e) => {
    content.style.display = "flex";
    success.style.display = "none";
})