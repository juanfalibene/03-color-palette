document.addEventListener("DOMContentLoaded", () => {
  const paletteContainer = document.getElementById("paletteContainer");
  const colorValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const PALETTE_SIZE = 6;

  const btnUpdate = document.getElementById("btnUpdate");

  btnUpdate.addEventListener("click", () => {
    updatePalette();
  });

  const createPalette = () => {
    for (let i = 0; i < PALETTE_SIZE; i++) {
      const paletteElement = document.createElement("div");
      paletteElement.classList.add("paletteItem");
      paletteContainer.appendChild(paletteElement);
    }
    updatePalette();
  };

  const colorize = (element, paletteColors, index) => {
    let color = "#";
    // invertir y mantener el orden de %
    let colorPercent = (PALETTE_SIZE - 1 - index) * 20;
    for (let i = 0; i < 6; i++) {
      // numero al azar entre 0 y 1, multiplicado x el largo del array (Math.floor para quitar decimales)
      const randomElement =
        colorValues[Math.floor(Math.random() * colorValues.length)];
      // sumar a color los 5 valores
      color += randomElement;
    }

    // cambiar colores
    element.style.backgroundColor = color;
    element.innerHTML = `<span class='color-hex'>${color}</span>`;

    // almacenar en array
    paletteColors.push(`${color + 50} ${colorPercent}%`);
  };

  const updatePalette = () => {
    // array vacio Body bg
    const paletteColors = [];
    for (let i = 0; i < paletteContainer.children.length; i++) {
      colorize(paletteContainer.children[i], paletteColors, i);
    }

    // cambiar el Body bg
    const bodyBgColor = `linear-gradient(90deg, ${paletteColors
      .reverse()
      .join(", ")})`;
    console.log(paletteColors, bodyBgColor);
    document.querySelector(".container").style.background = bodyBgColor;
    document.querySelector(".colorSample").style.background = bodyBgColor;
  };

  createPalette();
});
