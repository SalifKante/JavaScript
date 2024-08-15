"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*
const getCountryData = function (country, lang, curr) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    //   console.log(data);
    const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name"> ${data.name.common}</h3>
                <h4 class="country__region"> ${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  data.population / 1000000
                ).toFixed(1)} Million people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[`${lang}`]
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[`${curr}`].name
                }</p>
            </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("mali", "fra", "XOF");
getCountryData("usa", "eng", "USD");
getCountryData("senegal", "fra", "XOF");
getCountryData("germany", "deu", "EUR");
*/

const renderCountry = function (data, className = "") {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name"> ${data.name.common}</h3>
                <h4 class="country__region"> ${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  data.population / 1000000
                ).toFixed(1)} Million people</p>
                <p class="country__row"><span>🗣️</span>${
                  Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.values(data.currencies)[0].name
                }</p>
            </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, Errormsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${Errormsg} (${response.status})`);
    return response.json();
  });
};
/*
const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);

    //country #1
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
    //get border county #2
    const [border] = data.borders;
    console.log(border);

    if (!border) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${border}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2.flags.png);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbor("tunisia");
// getCountryAndNeighbor("usa");
// getCountryAndNeighbor("senegal");
// getCountryAndNeighbor("germany");
*/

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      const data = response.json();
      console.log(data);
      return data;
    })
    .then(function (data) {
      console.log(data[0]);
      renderCountry(data[0]);
    });
};
*/

// const getCountryData = function (country) {
//   //country #1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       console.log(neighbour);
//       if (!neighbour) throw new Error("No neighbour found");

//       //country #2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err.message} 💥💥💥💥`);
//       renderError(`Something went wrong  💥💥 ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  //country #1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      console.log(neighbour);

      if (!neighbour) throw new Error("No neighbour found");

      //country #2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err.message} 💥💥💥💥`);
      renderError(`Something went wrong  💥💥 ${err.message}. Try again!!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });

// getCountryData("maliiii");

console.log("-----------------Async-Await-----------------");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    if (!resGeo.ok) throw new Error("Problem Getting Position");
    //Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    console.log(res);
    if (!res.ok) throw new Error("Problem Getting country");

    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>console.log(res);
    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`Something went wrong ${err}`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};
console.log("1: We will get location");

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(() => console.log("3: Finished getting location"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log("3: Finished getting location");
})();

console.log("FIRST");
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.log(err.message);
// }

console.log("----------Running Promise in Parallel----------");
const get3Countries = async function (c1, c2, c3) {
  try {
    //     const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    //     const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    //     const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    //     console.log([data1.capital, data2.capital, data3.capital]);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (error) {
    console.error(error.message);
  }
};

get3Countries("russia", "canada", "mali");

console.log(
  "--------------Other Promise combinator:race, allSettled, and any--------------"
);

// Promise.race();

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();
