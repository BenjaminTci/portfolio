let checkbox = document.querySelector('#switchMobile');
let desktopContent = document.querySelector('.desktopVersion');
let mobileContent = document.querySelector('.mobileVersion');

checkbox.addEventListener('change', () =>{
    switchDisplay();
});

function switchDisplay(){
    if (checkbox.checked) {
        desktopContent.style.display = "none";
        mobileContent.style.display = "flex";
    }else {
        desktopContent.style.display = "flex";
        mobileContent.style.display = "none";
    }
}
window.addEventListener('load', function() {
    if (this.screen.width < 992) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    switchDisplay()
})