import { display6Projects } from '../../../src/scripts/displayProject.js';
import introClickHandler from '../../../src/scripts/introClick.js';
import quickEmail from '../../../src/scripts/quickEmail.js';

console.log('outside run');

const init = () => {
    console.log('this run inside');

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
