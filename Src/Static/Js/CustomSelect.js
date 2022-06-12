const $ = document;
function _id(id){
    return $.getElementById(id);
}
const body = $.body;
const makeAdsBtn = _id('makeAdsBtn');
const makeAdsModal = _id('makeAdsModal');
const darkBox = $.querySelector('.dark_box');
const nextPageBtn = _id('nextPageBtn')
const loadSpin = _id('loadSpin');
const allFormInputs = $.querySelectorAll('form input');
const textarea = $.querySelector('textarea');

function showModal(){
    makeAdsModal.style.opacity = 1;
    makeAdsModal.style.visibility = "visible";
    makeAdsModal.style.transform = "translateY(0)";
    darkBox.style.display = "block";
}

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

function prevPage(e){
    e.preventDefault();
    _id('form2').style.display = "none";
    _id('form1').style.display = "flex";
    _id('form1').style.visibility = "visible";
    _id('form1').style.opacity = "1";
}

function customSelect(num){
    let select = _id(`customSelect${num}`);
    let option = _id(`selectOption${num}`);
    let selectOption = $.querySelectorAll(`.selectOptions${num}`);
    let chevron = $.querySelector(`[data-id = chevron${num}]`);
    
    select.addEventListener('click', e => {
        option.style.visibility = "visible";
        option.style.opacity = "1";
        option.style.position = "relative";
        chevron.style.transform = "rotate(180deg)";
    })
    selectOption.forEach(opt => {
        opt.addEventListener('click', e => {
            select.innerHTML = opt.value;
            console.log(chevron)
            option.style.opacity = "0";
            option.style.visibility = "hidden";
            option.style.position = "absolute";
            chevron.style.transform = "rotate(0deg)";
        })
    })
}


function nextPage(e){
    e.preventDefault();
    let isValid = true;
    let required = $.querySelectorAll('[data-required]');
    let inputAlert = $.querySelectorAll('[data-alert]')
    
    required.forEach((el, idx) => {
        if (el.value === '' || el.value === null) {
            inputAlert[idx].style.display = "block";
            el.style.border = '2px solid red';
            isValid = false;
        } else{
            inputAlert[idx].style.display = "none";
            el.style.border = 'none';
        }
    })
    
    if(isValid === true){
        _id('form1').style.opacity = "0";
        _id('form1').style.visibility = "hidden";
        _id('form1').style.display = "none";
        loadSpin.style.opacity = "1";
        loadSpin.style.visibility = "visible";
        console.log(loadSpin)
        
        setTimeout(e => {
            loadSpin.style.opacity = "0";
            loadSpin.style.visibility = "invisible";

            _id('form2').style.visibility = "visible";
            _id('form2').style.opacity = "1";
            _id('form2').style.display = "flex";
            
            
        }, 1000)
    }
}

function closeModal(e){
    makeAdsModal.style.opacity = "0";
    makeAdsModal.style.visibility = "0";
    makeAdsModal.style.transform = "translateY(-100%)";
    darkBox.style.display = "none";
}

function successAlert(e){
    e.preventDefault();
    swal({
        title: 'آگهی ثبت شد',
        text: 'آگهی شما پس از بررسی، در سایت قرار میگیرد',
        icon: 'success',
        button: "باشه"
    })
    .then(value => {
        console.log('it work')
        allFormInputs.forEach(el => {
            el.value = '';
            textarea.value = '';
            closeModal();
            prevPage(e);
        })
    });
} 

for(let i = 1; i <= 3; i++)
    uploudimg(i);
customSelect(1);
customSelect(2);

makeAdsBtn.addEventListener('click', showModal);
nextPageBtn.addEventListener('click', nextPage);
_id('prevPageBtn').addEventListener('click', prevPage);
_id('submitAd').addEventListener('click', successAlert);
_id('modalClose').addEventListener('click', closeModal)
darkBox.addEventListener('click', closeModal)
