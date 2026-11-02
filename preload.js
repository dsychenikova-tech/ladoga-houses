window.addEventListener('load', function() {
  // Список всех важных картинок, которые нужно тихо подгрузить в фоне
  const allImages = [
    "house1/main.jpg", "house2/main.jpg",
    "house1/1.jpg", "house1/2.jpg", "house1/3.PNG", "house1/4.jpg", "house1/5.jpg",
    "house2/1.jpg", "house2/2.jpg", "house2/3.jpg", "house2/4.jpg", "house2/5.jpg"
  ];

  // Фоновая предзагрузка в кэш браузера
  allImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
