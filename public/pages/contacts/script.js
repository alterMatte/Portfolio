
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const github = document.getElementById('github');

const myEmail = 'msyafiqfirdaus99@gmail.com';
const myPhone = '+6010-2101077';
const myGithub = 'alterMatte';

let defaultEmail = '';
let defaultPhone = '';
let defaultGithub = '';

email.addEventListener('mouseenter', () => {
    defaultEmail = email.innerText;
    email.innerText = myEmail;
});

email.addEventListener('mouseleave', () => {
    email.innerText = defaultEmail;
});

phone.addEventListener('mouseenter', () => {
    defaultPhone = phone.innerText;
    phone.innerText = myPhone;
});

phone.addEventListener('mouseleave', () => {
    phone.innerText = defaultPhone;
});

github.addEventListener('mouseenter', () => {
    defaultGithub = github.innerText;
    github.innerText = myGithub;
});

github.addEventListener('mouseleave', () => {
    github.innerText = defaultGithub;
});