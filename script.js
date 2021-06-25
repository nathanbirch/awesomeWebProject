function loadImage() {
  // create html element
  let img = document.createElement('img');
  // retrieve user url
  img.src = document.querySelector('#favoritePicture').value;
  // put image on page
  img.classList.add('normalSizedImage');
  //   document.getElementById('userImage').appendChild(img);

  let secondButton = document.getElementById('loadImageButton');
  //   secondButton.parentNode.insertBefore(img, secondButton.nextSibling);
  secondButton.after(img);
}
