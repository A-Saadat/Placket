const $ = document;
function _id(id){
    return $.getElementById(id);
}

const Select = _id('customSelect');
const Options = _id('options');
const SelectOptions = $.querySelectorAll('.selectOptions');
const chevron = $.querySelector('i[class*="chevron"]');
const body = $.body;
const makeAdsBtn = _id('makeAdsBtn');
const makeAdsModal = _id('makeAdsModal');
const darkBox = $.querySelector('.dark_box');


function showOptions(){
    Options.style.visibility = "visible";
    Options.style.opacity = "1";
    Options.style.position = "relative";
    chevron.style.transform = "rotate(180deg)";
}

function hideOptionsWithBody(e){
    if(e.target.className != "selectOptions" && e.target.id !== "customSelect"){
        Options.style.opacity = "0";
        Options.style.visibility = "hidden";
        Options.style.position = "absolute";
        chevron.style.transform = "rotate(0deg)";
    }
}

function hideOptions(){
    Select.innerHTML = el.value + chevron;
        Options.style.opacity = "0";
        Options.style.visibility = "hidden";
        Options.style.position = "absolute";
        chevron.style.transform = "rotate(0deg)";
}

Select.addEventListener('click', showOptions);
body.addEventListener('click', hideOptionsWithBody);
SelectOptions.forEach(el => el.addEventListener('click', hideOptions));

makeAdsBtn.addEventListener('click', () => {
    makeAdsModal.style.opacity = 1;
    makeAdsModal.style.visibility = "visible";
    makeAdsModal.style.transform = "translateY(0)";
    darkBox.style.display = "block";
    console.log('clicked');
})