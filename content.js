chrome.tabs.onCreated.addListener((tab) => {
  // Detect if it's a new tab
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.update(tab.id, {
      url: chrome.runtime.getURL("sai.html")
    });
  }
});
