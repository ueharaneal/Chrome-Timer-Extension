const inputElement = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", () => {
  const name = inputElement.value;
  chrome.storage.sync.set(
    {
      name: name,
    },
    () => {
      console.log(`Name set to ${name}`);
    }
  );
});
chrome.storage.sync.get(["name"], (res) => {
  inputElement.value = res.name;
});
