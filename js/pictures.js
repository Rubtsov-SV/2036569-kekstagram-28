import {getPictures} from './data.js';
import {addBigPicture, deleteComments} from './full-photo.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const patternPhoto = getPictures();

const renderPhoto = () => {
  const patternPhotoFragment = document.createDocumentFragment();

  patternPhoto.forEach((post) => {
    const photo = pictureTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = post.url;
    photo.querySelector('.picture__likes').textContent = post.likes;
    photo.querySelector('.picture__comments').textContent = post.comments.length;
    patternPhotoFragment.appendChild(photo);
    photo.addEventListener('click', () => {
      deleteComments();
      addBigPicture(post);
    });
  });
  pictures.appendChild(patternPhotoFragment);
};

renderPhoto();


