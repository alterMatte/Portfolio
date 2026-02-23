
const loading = document.getElementById('loading');
const label = document.querySelector('label[for="loading"]');

const redirect = () =>{

    setTimeout(() => {
        loading.style.display = 'none';
        label.textContent = 'Redirecting...';
        setTimeout(() => {
            window.location.href = './public/pages/portfolio/portfolio.html';
        }, 1500);
    }, 3000);
} 

redirect();