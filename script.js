//your JS code here. If required.
const inputBtn = document.querySelector("input");
const colorSelect = document.getElementById("colorSelect");
inputBtn.addEventListener("click", () => {
  const selectedIndex = colorSelect.selectedIndex; 
  if (selectedIndex !== -1) colorSelect.remove(selectedIndex);
});