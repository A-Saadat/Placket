const $ = document;
function _id(id){
    return $.getElementById(id);
}

const Select = $.querySelectorAll('[data-select]');
const Options = $.querySelectorAll('[data-option]');
const SelectOptions = $.querySelectorAll('.selectOptions');
const chevron = $.querySelector('i[class*="chevron"]');
const body = $.body;
const makeAdsBtn = _id('makeAdsBtn');
const makeAdsModal = _id('makeAdsModal');
const darkBox = $.querySelector('.dark_box');
const nextPageBtn = _id('nextPageBtn')
const loadSpin = _id('loadSpin');

function showModal(){
    makeAdsModal.style.opacity = 1;
    makeAdsModal.style.visibility = "visible";
    makeAdsModal.style.transform = "translateY(0)";
    darkBox.style.display = "block";
}

let isSelect = 1;

Select.forEach((el, idx) => {
    el.addEventListener('click', e => {
        Options[idx].style.visibility = "visible";
        Options[idx].style.opacity = "1";
        Options[idx].style.position = "relative";
        chevron.style.transform = "rotate(180deg)";
        console.log('open')
        SelectOptions.forEach(opt => opt.addEventListener('click', e => {
            Select[idx].innerHTML = opt.value + chevron;
            Options[idx].style.opacity = "0";
            Options[idx].style.visibility = "hidden";
            Options[idx].style.position = "absolute";
            chevron.style.transform = "rotate(0deg)";
            console.log('close')
        }));
    })
})

let cnt = 0;

function uploudimg(num){
    let Adimg = $.getElementById(`uploudImg${num}`);
    let icon = Adimg.nextElementSibling.firstElementChild;
    let infoText = icon.nextElementSibling.firstElementChild;
    let infoIcon = icon.nextElementSibling.lastElementChild;

    Adimg.addEventListener('change', e => {
        icon.className = 'fas fa-check text-2xl';
        infoText.innerHTML = 'عکس آپلود شد';
        infoIcon.remove();
    })
}

for(let i = 1; i <= 3; i++)
    uploudimg(i);

function nextPage(e){
    e.preventDefault();
    let isValid = true;
    let required = $.querySelectorAll('[data-required]');
    let inputAlert = $.querySelectorAll('[data-alert]')

    required.forEach((el, idx) => {
        if (el.value === ''){
            inputAlert[idx].style.display = "block";
            el.style.border = '2px solid red';
            isValid = false;
        }
    })

    if(isValid === true){
        _id('form1').remove();
        loadSpin.style.opacity = "1";
        loadSpin.style.visibility = "visible";
        console.log(loadSpin)

        setTimeout(e => {
            loadSpin.style.opacity = "0";
            loadSpin.style.visibility = "invisible";

            _id('form2').style.visibility = "visible";
            _id('form2').style.opacity = "1";

        }, 3000)
    }
}

makeAdsBtn.addEventListener('click', showModal);
nextPageBtn.addEventListener('click', nextPage);
