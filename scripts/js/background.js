// Function to get all tab information
function getTabInformation() {
    console.log("hello from background.js, cocks!!")
    chrome.tabs.query({}, (tabs) => {
        const tabData = tabs.map(tab => ({
            title: tab.title,
            url: tab.url,
            id: tab.id,
            windowId: tab.windowId,
            favIconUrl: tab.favIconUrl,
            status: tab.status // 'loading' or 'complete'
        }));

        // Send tab data to the popup or to your categorization function
        console.log(tabData);
        // You can store this data, send it to your AI model, etc.
    });
}

// Listen for when the extension icon is clicked
chrome.action.onClicked.addListener(getTabInformation);

// function getPageInfo(url) {
//     // Fetch the title of the webpage
//     const title = document.title;

//     // Fetch the favicon URL from the <link rel="icon"> tag
//     const faviconElement = document.querySelector('link[rel="icon"]');
//     const faviconURL = faviconElement ? faviconElement.href : null;

//     // Send the title and favicon URL to the extension popup or other components
//     chrome.runtime.sendMessage({ title, faviconURL });
// }