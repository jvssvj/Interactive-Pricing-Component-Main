let pageviewsDom = document.querySelector('#pageviews-span');
let priceDom = document.querySelector('#price-span');
let slider = document.querySelector('#slider');
let switchBtn = document.querySelector('#switch-btn');
let discount = 0.25;

function showInfos() {
    slider.addEventListener('input', function () {
        let sliderValue = parseInt(slider.value);
        let priceValue = 0;

        if (sliderValue === 1) {
            pageviewsDom.textContent = '10';
            priceValue = 8;
        } else if (sliderValue === 2) {
            pageviewsDom.textContent = '50';
            priceValue = 12;
        } else if (sliderValue === 3) {
            pageviewsDom.textContent = '100';
            priceValue = 16;
        } else if (sliderValue === 4) {
            pageviewsDom.textContent = '500';
            priceValue = 24;
        } else if (sliderValue === 5) {
            pageviewsDom.textContent = '1';
            document.querySelector('.pageviews p').textContent = 'm pageviews';
            priceValue = 36;
        } else {
            document.querySelector('.pageviews p').textContent = 'k pageviews';
        }

        let discountedPrice;
        if (switchBtn.checked) {
            discountedPrice = priceValue - priceValue * discount;
        } else {
            discountedPrice = priceValue;
        }
        priceDom.textContent = discountedPrice.toFixed(2);
    });
}

showInfos();

switchBtn.addEventListener('click', () => {
    let sliderValue = parseInt(slider.value);
    let priceValue = 0;

    if (sliderValue === 1) {
        priceValue = 8;
    } else if (sliderValue === 2) {
        priceValue = 12;
    } else if (sliderValue === 3) {
        priceValue = 16;
    } else if (sliderValue === 4) {
        priceValue = 24;
    } else if (sliderValue === 5) {
        priceValue = 36;
    }

    let discountedPrice;
    if (switchBtn.checked) {
        discountedPrice = priceValue - priceValue * discount;
    } else {
        discountedPrice = priceValue;
    }
    priceDom.textContent = discountedPrice.toFixed(2);
});