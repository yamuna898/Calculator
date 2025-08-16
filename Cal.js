let history = {};
// EVALUATION--------------------------------------
let input = document.querySelector("input");
let eqBtn = document.querySelector("#done");
let ans = 0;
input.addEventListener("change", () => {
    console.log("you gave us : ", input.value);
    eqBtn.addEventListener("click", () => {
        ans = eval(input.value);
        console.log("Answer : ", ans);
        history[input.value] = ans;
        input.value = ans;
        setTimeout(() => {
            input.value = "";
        }, 2000);
    });
});

//click to display menu----------------------------
let menu = document.querySelector("#menuIcon");
let menuClose = document.querySelector("#menuClose");
menu.addEventListener("click", () => {
    console.log("you clicked to OPEN menu ");
});
menuClose.addEventListener("click", () => {
    console.log("you clicked to CLOSE menu ");
});

//click to display setting------------------------
let setting = document.querySelector("#settingIcon");
let settingClose = document.querySelector("#settingClose");
setting.addEventListener("click", () => {
    console.log("you clicked to OPEN setting ");
});
settingClose.addEventListener("click", () => {
    console.log("you clicked to CLOSE setting ");
});
