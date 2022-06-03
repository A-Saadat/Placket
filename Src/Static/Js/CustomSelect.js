const $ = document;
function _id(id){
    return document.getElementById(id);
}

const Select = _id('customSelect');
const Options = _id('options');
const SelectOptions = $.querySelectorAll('.selectOptions');
const chevron = _id('chevron');
const body = $.body;

Select.addEventListener('click', e => {
    Options.style.visibility = "visible";
    Options.style.opacity = "1";
    Options.style.position = "relative";
})

body.addEventListener('click', e => {
    if(e.target.className != "selectOptions" && e.target.id !== "customSelect"){
        Options.style.opacity = "0";
        Options.style.visibility = "hidden";
        Options.style.position = "absolute";
    }
})

SelectOptions.forEach(el => {
    el.addEventListener('click', e => {
        Select.innerHTML = `${el.value} <i class="fa-solid fa-chevron-down"></i>`;
        Options.style.opacity = "0";
        Options.style.visibility = "hidden";
        Options.style.position = "absolute";
    })
});