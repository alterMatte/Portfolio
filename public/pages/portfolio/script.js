import { display6Projects } from './displayProject.js';
import introClickHandler from './introClick.js';
import quickEmail from './quickEmail.js';

const init = () => {
    
    
    const main = document.getElementById('main');

    // Run functions
    display6Projects();
    introClickHandler();
    quickEmail();
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}