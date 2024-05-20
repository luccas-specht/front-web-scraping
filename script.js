let fake = [];

function fetchData(callback) {
  fetch('http://localhost:3000', { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback({ data });
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayData({ data }) {
  const mainDiv = document.querySelector('#main-div');

  data.forEach((element) => {
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapper-product');

    const aTag = document.createElement('a');
    aTag.classList.add('link-style');

    const imgTag = document.createElement('img');
    const spanTagDesc = document.createElement('span');
    const spanTagPrice = document.createElement('span');

    aTag.href = element.URL;
    imgTag.alt = 'product image';
    imgTag.src = `${element.image}`;
    spanTagDesc.textContent = element.description;
    spanTagPrice.textContent = element.price;

    aTag.appendChild(imgTag);
    aTag.appendChild(spanTagDesc);
    aTag.appendChild(spanTagPrice);

    divWrapper.appendChild(aTag);
    mainDiv.appendChild(divWrapper);
  });
}

(() => {
  fetchData((updatedFake) => {
    console.log(updatedFake);
    displayData(updatedFake);
  });
})();
