const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is ${currentTime}`;

chrome.storage.sync.get(["name"], (res) => {
  nameElement.textContent = res.name;
});
