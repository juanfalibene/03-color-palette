document.addEventListener("DOMContentLoaded", () => {
  const palleteContainer = document.getElementById("palleteContainer");
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
  const PALLETE_SIZE = 6;

  const btnUpdate = document.getElementById("btnUpdate");

  btnUpdate.addEventListener("click", () => {
    updatePallete();
  });

  const createPallete = () => {
    for (let i = 0; i < PALLETE_SIZE; i++) {
      const palleteElement = document.createElement("div");
      palleteElement.classList.add("palleteItem");
      palleteContainer.appendChild(palleteElement);
    }
    updatePallete();
  };

  const colorize = (element, palleteColors, index) => {
    let color = "#";
    // invertir y mantener el orden de %
    let colorPercent = (PALLETE_SIZE - 1 - index) * 20;
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
    palleteColors.push(`${color} ${colorPercent}%`);
  };

  const updatePallete = () => {
    // array vacio Body bg
    const palleteColors = [];
    for (let i = 0; i < palleteContainer.children.length; i++) {
      colorize(palleteContainer.children[i], palleteColors, i);
    }

    // cambiar el Body bg
    const bodyBgColor = `linear-gradient(0deg, ${palleteColors
      .reverse()
      .join(", ")})`;
    document.querySelector("body").style.background = bodyBgColor;
    const sampleBgColor = `radial-gradient(circle, ${palleteColors.join(
      ", "
    )})`;
    document.querySelector(".colorSample").style.background = sampleBgColor;
  };

  createPallete();
});
