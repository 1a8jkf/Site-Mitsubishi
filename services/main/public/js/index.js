const desktopImages = [
  "assets/images/banner-site-test.png",
  "assets/images/banner-site-test2.png",
  "assets/images/8199.png",
  "assets/images/3960.jpeg",
];

const mobileImages = [
  "assets/images/mobile1.jpeg",
  "assets/images/mobile2.jpeg",
  "assets/images/mobile3.jpeg",
  "assets/images/mobile2.jpeg",
];

const isMobile = window.innerWidth <= 768;
const imagePaths = isMobile ? mobileImages : desktopImages;

const duration = 5000;
let current = 0;
let images = [];
let progressBars = [];

function createCarrousel(imagesList) {
  const container = document.querySelector(".carrousel-div");
  const carrousel = document.createElement("div");
  carrousel.className = "carrousel";

  imagesList.forEach((path, i) => {
    const img = document.createElement("img");
    img.src = path;
    img.className = "carrousel-image";
    if (i === 0) img.classList.add("active");
    carrousel.appendChild(img);
  });

  const indicators = document.createElement("div");
  indicators.className = "progress-indicators";

  imagesList.forEach(() => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";

    const progress = document.createElement("div");
    progress.className = "progress";

    indicator.appendChild(progress);
    indicators.appendChild(indicator);
  });

  carrousel.appendChild(indicators);
  container.appendChild(carrousel);

  images = carrousel.querySelectorAll(".carrousel-image");
  progressBars = carrousel.querySelectorAll(".progress");
}

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    progressBars[i].style.transition = "none";
    progressBars[i].style.width = "0%";
  });

  setTimeout(() => {
    progressBars[index].style.transition = `width ${duration}ms linear`;
    progressBars[index].style.width = "100%";
  }, 50);
}

function startCarousel() {
  showImage(current);
  setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
  }, duration);
}

window.addEventListener("load", () => {
  createCarrousel(imagePaths);
  startCarousel();
});

let lastScrollTop = 0;
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const cars = [
  {
    img: "assets/images/Eclipse Cross/HPE/HPE.webp",
    title: "HPE",
    price: "R$123.456,78",
  },
  {
    img: "assets/images/Eclipse Cross/HPE/HPE ONIX PEARL.webp",
    title: "OULANDER",
    price: "R$123.456,78",
  },
  {
    img: "assets/images/Eclipse Cross/HPE BLACK/HPE BLACK CONCRETE SPOT.webp",
    title: "HPE BLACK",
    price: "R$123.456,78",
  },
  {
    img: "assets/images/Eclipse Cross/HPE BLACK 4x4/HPE BLACK 4x4 PRETO ONIX PEARL.webp",
    title: "HPE BLACK 4x4",
    price: "R$234.567,89",
  },
  {
    img: "assets/images/Eclipse Cross/HPE BLACK 4x4/HPE BLACK 4x4 PRETO ONIX PEARL.webp",
    title: "NOVA TRITON",
    price: "R$123.456,78",
  },
  {
    img: "assets/images/Eclipse Cross/HPE BLACK 4x4/HPE BLACK 4x4 PRETO ONIX PEARL.webp",
    title: "TRITON SPORT",
    price: "R$234.567,89",
  },
  {
    img: "assets/images/Eclipse Cross/HPE BLACK 4x4/HPE BLACK 4x4 PRETO ONIX PEARL.webp",
    title: "ASX TURBO",
    price: "R$198.765,43",
  },
];

const carouselItems = document.getElementById("carousel-items");

cars.forEach((car) => {
  const card = document.createElement("div");
  card.className = "carousel-item-div";
  card.innerHTML = `
            <div class="carousel-item-header">
                <img src="${car.img}" alt="${car.title}">
            </div>
            <div class="carousel-item-body">
                <h1>${car.title}</h1>
                <p>A partir de</p>
                <h2>${car.price}</h2>
            </div>
            `;
  carouselItems.appendChild(card);
});

let currentIndex = 0;

const isMobil = window.innerWidth <= 768;
const visibleCards = isMobil ? 1 : 3;
const cardWidth = isMobil ? window.innerWidth : 380 + 50;
const totalItems = cars.length;
const maxIndex = totalItems - visibleCards;

function updateCarousel() {
  const offset = -(currentIndex * cardWidth);
  carouselItems.style.transform = `translateX(${offset}px)`;
}

document.querySelector(".carousel-btn.left").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

document.querySelector(".carousel-btn.right").addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

const carros = [
  "Eclipse Cross Sport",
  "Eclipse Cross Motorsports",
  "L200 Triton GL",
  "L200 Triton GLS",
  "L200 Triton Sport GLS Plus",
  "Nova Triton",
  "Outlander",
  "Pajero Sport",
];

const select = document.getElementById("select-veiculo");

carros.forEach((carro) => {
  const option = document.createElement("option");
  option.value = carro.toLowerCase().replace(/\s+/g, "-");
  option.textContent = carro;
  select.appendChild(option);
});

const vendas = document.getElementById("vendas");
const posVendas = document.getElementById("pos-vendas");

vendas.addEventListener("change", () => {
  if (vendas.checked) {
    posVendas.disabled = true;
  } else {
    posVendas.disabled = false;
  }
});

posVendas.addEventListener("change", () => {
  if (posVendas.checked) {
    vendas.disabled = true;
  } else {
    vendas.disabled = false;
  }
});

function toggleMobileMenu(icon) {
  icon.classList.toggle("active");
  const menu = document.getElementById("mobileMenu");
  const logo = document.querySelector(".main-header-logo");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    logo.src = "assets/images/logos/logo-preta.png";
  } else {
    logo.src = "assets/images/logos/logo-vermelha.png";
  }
}

const locationSelect = document.getElementById("locationSelect");
const mapFrame = document.getElementById("mapFrame");
const locationTitle = document.getElementById("locationTitle");
const locationAddress = document.getElementById("locationAddress");

const locations = {
  foz: {
    title: "Fancar Foz do Iguaçu",
    address:
      "Endereço: Av. Costa e Silva, 1165 - Foz do Iguaçu - PR, 85845-000",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.269225102445!2d-54.58818828458129!3d-25.516198741228436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457a6a43cf6aa05%3A0xb401f17f9c2b6e39!2sAv.%20Costa%20e%20Silva%2C%201165%20-%20Parque%20Pres.%20I%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085845-000!5e0!3m2!1spt-BR!2sbr!4v1750879876543!5m2!1spt-BR!2sbr",
  },
  umuarama: {
    title: "Fancar Umuarama",
    address: "Endereço: Av. Paraná, 8110 - Zona III, Umuarama - PR, 87502-000",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.834552312503!2d-53.29465358497437!3d-23.75776726881809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d157950d0a09%3A0xf58c791f9dfc89ad!2sAv.%20Paran%C3%A1%2C%208110%20-%20Zona%20III%2C%20Umuarama%20-%20PR%2C%2087502-000!5e0!3m2!1sen!2sbr!4v1750875336406!5m2!1sen!2sbr",
  },
};

locationSelect.addEventListener("change", function () {
  const selected = locationSelect.value;
  if (locations[selected]) {
    mapFrame.src = locations[selected].map;
    locationTitle.textContent = locations[selected].title;
    locationAddress.textContent = locations[selected].address;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => banner.classList.add("show"), 300);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.remove("show");
  });

  rejectBtn.addEventListener("click", () => {
    window.close();
    location.href = "https://google.com";
  });
});

const vehicles = [
  {
    img: "assets/images/mitsubishi-eclipse-cross-1.5-mivec-turbo-gasolina-hpe-cvt-wmimagem13160126120.jpg",
    marca: "MITSUBISHI",
    modelo: "ECLIPSE CROSS 1.5 MIVEC TURBO GASOLINA HPE CVT",
    ano: "2023/2024",
    km: "14.864",
    cidade: "Foz do Iguaçu - PR",
    preco: "245.900,00",
  },
  {
    img: "assets/images/mitsubishi-pajero-sport-2.4-16v-mivec-turbo-diesel-hpe-awd-automatico-wmimagem10555169137.jpg",
    marca: "MITSUBISHI",
    modelo:
      "MITSUBISHI PAJERO SPORT 2.4 16V MIVEC TURBO DIESEL HPE AWD AUTOMÁTICO",
    ano: "2022/2023",
    km: "20.000",
    cidade: "Curitiba - PR",
    preco: "84.990,00",
  },
  {
    img: "assets/images/YJ55kizFPj7n7tQYyqf0jm6FQOsPgVot.jpg",
    marca: "MITSUBISHI",
    modelo: "L200 TRITON 2.4 16V TURBO DIESEL SPORT HPE-S CD 4P 4X4 AUTOMÁTICO",
    ano: "2022/2023",
    km: "20.000",
    cidade: "Curitiba - PR",
    preco: "84.990,00",
  },
];

let currentIndexMain = 0;

function renderCards() {
  const slider = document.getElementById("cardSlider");
  slider.innerHTML = vehicles
    .map(
      (v) => `
            <div class="mobile-retangular-card">
            <div class="mobile-retangular-card-header">
                <img src="${v.img}" alt="Imagem do carro">
            </div>
            <div class="mobile-retangular-card-body">
                <b>${v.marca}</b>
                <h1>${v.modelo}</h1>
                <div class="mobile-retangular-card-body-icons-div">
                <div class="mobile-retangular-card-body-icon">
                    <img src="assets/icons/date.png" alt="Ano">
                    <p>${v.ano}</p>
                </div>
                <div class="mobile-retangular-card-body-icon">
                    <img src="assets/icons/gauge.png" alt="KM">
                    <p>${v.km}</p>
                </div>
                </div>
                <div class="mobile-retangular-card-body-location-div">
                <img src="assets/icons/location.png" alt="Localização">
                <p>${v.cidade}</p>
                </div>
                <div class="mobile-retangular-card-body-price-div">
                <h2>${v.preco}</h2>
                <button>Ver mais</button>
                </div>
            </div>
            </div>
        `
    )
    .join("");

  updateSlide();
}

function updateSlide() {
  const slider = document.getElementById("cardSlider");
  slider.style.transform = `translateX(-${currentIndexMain * 100}%)`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndexMain = (currentIndexMain - 1 + vehicles.length) % vehicles.length;
  updateSlide();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndexMain = (currentIndexMain + 1) % vehicles.length;
  updateSlide();
});

renderCards();
