//toggle red border and icon for failed input element
//make sure all inputs are filled out
// email address must contain .com or .net or .org to be valid

//when the claim your free trial button is clicked - validate the inputs
let input = document.querySelectorAll("input");
let alertText = document.querySelectorAll("small");
let alertIcon = document.querySelectorAll(".alert-img");
let btn = document.getElementById("trial-btn");
let outline = document.querySelectorAll(".input--wrap");

for (let i = 0; i < input.length; i++) {
    input[i].value = "";
}

btn.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
        if (!input[2].value.includes("@")) {
            alertText[2].classList.add("display");
            alertIcon[2].classList.add("display");

            outline[2].classList.add("color");
        }

        if (input[i].value == "") {
            alertText[i].classList.add("display");
            alertIcon[i].classList.add("display");

            outline[i].classList.add("color");
        } else {
            alertText[i].classList.remove("display");
            alertIcon[i].classList.remove("display");

            outline[i].classList.remove("color");
        }
    }
});

console.log(input[2]);
