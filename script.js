const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

const message = "You are using " + browserName + " version " + browserVersion;

document.getElementById("browser-info").innerText = message;

