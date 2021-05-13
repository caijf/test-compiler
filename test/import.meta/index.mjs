(async () => {
  const response = await fetch(new URL("../logo.svg", import.meta.url));
  const blob = await response.blob();
  console.log("import.meta: ", import.meta);
  const size = import.meta?.scriptElement?.dataset.size || 300;

  const image = new Image();
  image.src = URL.createObjectURL(blob);
  image.width = image.height = size;

  document.body.appendChild(image);
})();