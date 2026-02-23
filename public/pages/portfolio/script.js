import { display6Projects } from '../../../src/scripts/displayProject.js';
import introClickHandler from '../../../src/scripts/introClick.js';
import quickEmail from '../../../src/scripts/quickEmail.js';

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