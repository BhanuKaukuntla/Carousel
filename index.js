const requestUrl =
      'https://api.unsplash.com/search/photos?query=london&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    const buttons = document.querySelector('.buttons');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    async function getNewImage() {
      let randomNumber = Math.floor(Math.random() * 10);
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let allImages = data.results[randomNumber];
          return allImages.urls.regular;
        });
    }

    // getNewImage();

    buttons.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    });

    window.onload = function(){
      buttons.click();
    }

setTimeout(function(){
//   buttons.click();
  window.location.reload(1);
}, 5000);