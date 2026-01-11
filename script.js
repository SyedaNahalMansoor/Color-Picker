const input = document.getElementById("colorpallete");
const box = document.getElementById("colorBox");
const colorText = document.getElementById("colorValue");
input.addEventListener("input", function() {
const selectedColor = input.value;
box.style.backgroundColor = selectedColor;
colorText.textContent = "Selected Color: " + selectedColor;
});

 const colorInput = document.getElementById("colorInput");
    const colorBox = document.getElementById("colorBox");

    const rInput = document.getElementById("r");
    const gInput = document.getElementById("g");
    const bInput = document.getElementById("b");

    function hexToRGB(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    }

    colorInput.addEventListener("input", function () {
      const selectedColor = colorInput.value;
      colorBox.style.backgroundColor = selectedColor;

      const rgb = hexToRGB(selectedColor);
      rInput.value = rgb.r;
      gInput.value = rgb.g;
      bInput.value = rgb.b;
    });