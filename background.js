chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Get the URL of the active tab
    const url = tabs[0].url;
  
    // Fetch the title and favicon of the webpage
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getPageInfo,
        args: [url],
    });
});

function getPageInfo(url) {
    // Fetch the title of the webpage
    const title = document.title;

    // Fetch the favicon URL from the <link rel="icon"> tag
    const faviconElement = document.querySelector('link[rel="icon"]');
    const faviconURL = faviconElement ? faviconElement.href : null;

    // Send the title and favicon URL to the extension popup or other components
    chrome.runtime.sendMessage({ title, faviconURL });
}