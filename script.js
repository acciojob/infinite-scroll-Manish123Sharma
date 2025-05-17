const list = document.getElementById("infi-list");
let itemCount = 1;

// Function to add items
function addItems(count = 10) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Scroll event on the scrollable list container
list.addEventListener("scroll", () => {
  const buffer = 10; // pixel threshold before exact bottom
  const nearBottom =
    list.scrollTop + list.clientHeight >= list.scrollHeight - buffer;

  if (nearBottom) {
    addItems(2); // Add 2 more items
  }
});
