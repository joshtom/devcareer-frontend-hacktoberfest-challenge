const result = document.querySelector('#result');
const submit = document.querySelector('#submit');
const thanks = document.querySelector('.thanks');
const homePage = document.querySelector('.home');
const warn = document.querySelector('.warn');
const back = document.querySelector('.back');
const Content = document.querySelectorAll('input[name="rates"]');

warn.style.display = 'none';
submit.addEventListener('click', function(){
    Content.forEach( content => {
        if(content.checked){
            const rate = content.value;
            result.innerHTML = rate;
            warn.style.display = 'none';
        }            
    });
    if(result.innerHTML){
        thanks.style.display = 'block';
        homePage.style.display = 'none';
    }
    else{
        warn.style.display = 'block';
        warn.innerHTML = 'Please pick a rating';
    }
});

back.addEventListener('click', () => {
    if(thanks.style.display == 'block'){
        thanks.style.display = 'none';
        homePage.style.display = 'flex';
    }
})