let darkmode = localStorage.getItem("darkmode");
let themeSwitch = document.getElementId("swotch=theme");
const enableDarkmode = ()=> {
document.body.classList.add("dark-mode")
localStorage.setItem("darkmode", "active");
};
const disableDarkmode = ()=> {
document.body.classList.remove("darkmode");
localStorage.setItem("darkmode", null);
};

if (darkmode==="active") enableDarkmode();

themeSwitch.addEventListener("click",() =>{
    darkmode = localStorage.getItem("darkmode");
    darkmode !=="active" ? enableDarkmode (): disableDarkMode();
});







