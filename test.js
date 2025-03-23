const { JSDOM } = require('jsdom'); 

async function fetchGoogleDoc(url) {
    const response = await fetch(url);
    if (!response.ok) {
        console.error('Failed to fetch document', response.status);
        return;
    }
    const text = await response.text();

    // Use jsdom to parse the HTML content
    const dom = new JSDOM(text);
    const body = dom.window.document.querySelector('body');
    const paragraphs = body.querySelectorAll('p');
    const dataArray = [];
    
   for(let i; i<paragraphs.length; i++){
       console.log(paragraphs[i].textContent)
    // if(paragraphs[i].textContent === "0"){
    // }
   }
    console.log(dataArray)

}

// Replace with your Google Doc URL
const googleDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub';
fetchGoogleDoc(googleDocUrl);
