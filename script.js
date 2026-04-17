let currentWeight = 0;

//color palette is used instead of random color generation because of the UX consistency
function generateColor() {
  const color_palette = [
    "#ff69b4cb",
    "#ff85c2c4",
    "#ff99ccba",
    "#ff4da698",
    "#ffb6d9d3",
    "#fffebebc",
    "#b9e6ffbe",
    "#c2f8c5d3",
    "#9ac8e1c0",
  ];

  return color_palette[Math.floor(Math.random() * color_palette.length)];
}

function generateRandomWeight() {
  return Math.floor(Math.random() * 10) + 1;
}

//size of the cursor is calculated according to the weight
function updateCursorSize(newCursor) {
  const circle_size = Math.log(currentWeight + 1) * 30;
  newCursor.style.width = `${circle_size}px`;
  newCursor.style.height = `${circle_size}px`;
}

function initNextWeight() {
  const nextWeightElement = document
    .getElementById("next-weight")
    .querySelector(".info-text");

  if (!nextWeightElement) return;

  currentWeight = generateRandomWeight();
  nextWeightElement.textContent = `${currentWeight} kg`;
}

//cursor changes to a circle when it comes to the seesaw area
function changeCursor() {
  const seesaw = document.querySelector(".seesaw");
  const newCursor = document.createElement("div");
  newCursor.className = "cursor-circle";
  document.body.appendChild(newCursor);

  newCursor.style.backgroundColor = generateColor();

  updateCursorSize(newCursor);

  seesaw.addEventListener("mouseenter", () => {
    document.body.style.cursor = "none";
    newCursor.style.display = "block";
  });

  seesaw.addEventListener("mouseleave", () => {
    document.body.style.cursor = "default";
    newCursor.style.display = "none";
  });

  seesaw.addEventListener("mousemove", (e) => {
    newCursor.style.left = `${e.x}px`;
    newCursor.style.top = `${e.y}px`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initNextWeight();
  changeCursor();
});
