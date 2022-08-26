'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  let [curr] = Object.values(data.currencies);
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${curr.name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('ukraine');
// getCountryAndNeighbour('usa');

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (responce) {
//       console.log(responce);
//       return responce.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(responce => {
//       console.log(responce);

//       if (!responce.ok)
//         throw new Error(`Country not found, ${responce.status}`);
//       return responce.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'assdfds';

//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(responce => {
//       if (!responce.ok)
//         throw new Error(`Country not found, ${responce.status}`);
//       return responce.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) {
        throw new Error('No neighbour found');
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function (e) {
  getCountryData('ukraine');
});

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 999999999; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 🏆');
//     } else {
//       reject(new Error('You lost your money 😢'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// ?Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �
// !PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// !PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// const imgContainer = document.querySelector('.images');
// let newImg;

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     newImg = document.createElement('img');
//     newImg.src = imgPath;
//     newImg.addEventListener('load', function () {
//       imgContainer.append(newImg);
//       resolve(newImg);
//     });
//     newImg.addEventListener('error', () =>
//       reject(new Error('Image not found'))
//     );
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('Img 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Img 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     console.log('Img 3 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.log(err);
//   });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // // Reverse geocoding
    // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    // const dataGeo = await resGeo.json();
    // if (!resGeo.ok) throw new Error('Problem getting location data');

    // (Country Data)
    //  Promise with then
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
      console.log(res)
    );
    // if (!res.ok) throw new Error('Problem getting country ');

    // Promise with async await
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 🕵️‍♀️`);
    renderError(`Something went wrong 👷‍♀️ ${err.message}`);
  }
};
// whereAmI('ukraine');
// console.log('First');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log(`3: Finished getting location`);
});

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'ukraine');

// Promise.race()
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]);

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// ? Coding Challenge #3

// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  let newImg;
  return new Promise((resolve, reject) => {
    newImg = document.createElement('img');
    newImg.src = imgPath;
    newImg.addEventListener('load', function () {
      imgContainer.append(newImg);
      resolve(newImg);
    });
    newImg.addEventListener('error', () =>
      reject(new Error('Image not found'))
    );
  });
};
// Part 2
// const imgArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// Part 1
// const loadNPause = async function () {
//   try {
//     // Load img 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Img 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load img 2
//     img = await createImage('img/img-2.jpg');
//     console.log('Img 2 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load img 3
//     img = await createImage('img/img-3.jpg');
//     console.log('Img 3 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch {
//     console.error(err);
//   }
// };
// loadNPause();

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('Img 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Img 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     console.log('Img 3 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     newImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.log(err);
//   });
