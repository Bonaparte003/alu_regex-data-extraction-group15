import { url_checker } from './url_regex.js';
import { time_checker } from './time_regex.js';
import { phone_checker } from './phone_regex.js'; 
import { email_checker } from './email_regex.js';
import { hashtag_checker } from './hashtag_regex.js';
import { html_tag_checker } from './html_tag_regex.js';
import { currency_checker } from './currency_regex.js';
import { credit_card_checker } from './credit_card_regex.js';
import { fetchData } from './api_fetcher.js';

const content = [
    { title: "URL CHECKER", text: "Check if the text contains valid URLs." },
    { title: "TIME CHECKER", text: "Check if the text contains valid time formats." },
    { title: "PHONE CHECKER", text: "Check if the text contains valid phone numbers." },
    { title: "EMAIL CHECKER", text: "Check if the text contains valid email addresses." },
    { title: "HASHTAG CHECKER", text: "Check if the text contains valid hashtags." },
    { title: "HTML TAGS CHECKER", text: "Check if the text contains valid HTML tags." },
    { title: "CURRENCY CHECKER", text: "Check if the text contains valid currency formats." },
    { title: "CREDIT CARD CHECKER", text: "Check if the text contains valid credit card numbers." }
];

const contentArea = document.getElementById('content-area');
const buttons = document.querySelectorAll('.button');

const checkerFunctions = {
    'url-button': url_checker,
    'time-button': time_checker,
    'phone-button': phone_checker,
    'email-button': email_checker,
    'hashtag-button': hashtag_checker,
    'html-button': html_tag_checker,
    'currency-button': currency_checker,
    'credit-button': credit_card_checker
};

function escapeHTML(html) {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

async function updateContent(index, checkerFunction) {
    if (!contentArea) {
        console.error('Content area div not found!');
        return;
    }

    contentArea.innerHTML = `
        <h2>${content[index].title}</h2>
        <p>Loading data...</p>
    `;

    try {
        const data = await fetchData("http://54.160.126.224/api");
        if (!data) throw new Error('Data not found!');

        const results = checkerFunction(data);
 
        console.log("Currency Matches Found:", results.length);
        // Escape the results before displaying them
        let resultsHTML = results.map(result => `<div class="result-container"><p>${escapeHTML(result)}</p></div>`).join('');
        
        contentArea.innerHTML = `
        <h2>${content[index].title}</h2>
        <p>${content[index].text}</p>
        ${resultsHTML}
        `;
    } catch (error) {
        contentArea.innerHTML = `
            <h2>${content[index].title}</h2>
            <p>Error fetching or processing data: ${error.message}</p>
        `;
        console.error('Error during updateContent:', error);
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const checkerFunction = checkerFunctions[button.id];
        const index = Object.keys(checkerFunctions).indexOf(button.id);
        if (checkerFunction) {
            updateContent(index, checkerFunction);
        } else {
            console.error('Invalid button ID:', button.id);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    updateContent(0, email_checker);
});

function createStartupOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'startup-overlay';
    
    const text = document.createElement('div');
    text.className = 'startup-text';
    text.innerHTML = 'Initializing Hacker Dashboard...';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progress = document.createElement('div');
    progress.className = 'progress';
    
    progressBar.appendChild(progress);
    overlay.appendChild(text);
    overlay.appendChild(progressBar);
    
    document.body.appendChild(overlay);
    
    return overlay;
}



function simulateStartup() {
    const overlay = createStartupOverlay();
    const text = overlay.querySelector('.startup-text');
    
    const steps = [
        'Bypassing security protocols...',
        'Establishing secure connection...',
        'Decrypting classified data...',
        'Accessing mainframe...',
        'Launch sequence initiated...'
    ];
    
    let stepIndex = 0;
    
    const textInterval = setInterval(() => {
        if (stepIndex < steps.length) {
            text.innerHTML = steps[stepIndex];
            text.classList.add('glitch-effect');
            setTimeout(() => text.classList.remove('glitch-effect'), 100);
            stepIndex++;
        } else {
            clearInterval(textInterval);
        }
    }, 600);
    
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.5s ease-in-out forwards';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 500);
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    simulateStartup();
    updateContent(3, email_checker);
});
