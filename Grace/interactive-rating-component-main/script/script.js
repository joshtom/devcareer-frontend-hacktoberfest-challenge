const Result = document.getElementById('result');

const content = document.querySelectorAll('.value');
content.forEach( content => {
    content.addEventListener('click', function(){

        Result.innerHTML = content.innerHTML;
    });
});

// switch pages
const Submit = document.getElementById('submit');
const Thanks = document.getElementById('thanks');
const Home = document.getElementById('home');

const thankYouPage = () => {
    if (Submit.id == 'submit'){
        Thanks.classList.add('show');
        Thanks.classList.remove('hide');
        Home.classList.remove('show');
        Home.classList.add('hide');
    }
}
Submit.addEventListener('click', thankYouPage);

const home = ()=>{
    Thanks.classList.remove('show');
    Thanks.classList.add('hide')
    Home.classList.remove('hide');
    Home.classList.add('show');
}