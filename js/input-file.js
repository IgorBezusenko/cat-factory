const images = [];
function image_select() {
  const image = document.getElementById("gallery-photo-add").files;
  for (let i = 0; i < image.length; i++) {
    images.push({
      name: image[i].name,
      url: URL.createObjectURL(image[i]),
      file: image[i],
    });
  }
  document.getElementById("add-product-form").reset();
  document.getElementById("gallery_container").innerHTML = image_show();
}

function image_show() {
  let image = "";
  images.forEach((i) => {
    image += `
     <div class="gallery__item">
                  <span class="gallery__item_close" onclick="image_delete(${images.indexOf(
                    i
                  )})"><img src="./img/add-product/plus-green.svg" alt="plus"></span>
                  <img src="${i.url}" alt="image" />
                </div>
    `;
  });
  return image;
}

function image_delete(e) {
  images.splice(e, 1);
  document.getElementById("gallery_container").innerHTML = image_show();
}
