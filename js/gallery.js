const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


// Знаходимо елемент gallery
const gallery = document.querySelector('.gallery');

// робимо буфер для додавання елементу одним кроком
const fragment = document.createDocumentFragment();

// запускаєм цикл для додавання картинок
for (const image of images) {

  // Створюємо новий елемент <li>
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  // Створюємо новий елемент <a>
  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  // Створюємо новий елемент <img>
  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.dataset.source = image.original;
  img.alt = image.description;
  img.width = 360;

  // Додаємо <img> до <a>
  link.appendChild(img);

  // Додаємо <a> до <li>
  listItem.appendChild(link);

  // Додаємо <li> до фрагмента
  fragment.appendChild(listItem);
  
}

// Додаємо фрагмент до gallery
gallery.appendChild(fragment);


// Забороняємо стандартну поведінку посилання при кліку
const links = document.querySelectorAll('.gallery-link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});



// створюємо модальне вікно і підключаєм нашу картинку 
gallery.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('gallery-image')) {
    const linkOriginal = target.dataset.source;

    const imageAlt = target.alt

    
    // Створюємо HTML-код для модального вікна
    
      const instance = basicLightbox.create(`
        <img src="${linkOriginal}" width="1112" height="640" alt="${imageAlt}" />
      `);
      instance.show();
  }
});
