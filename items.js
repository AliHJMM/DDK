const bestOffers = [
    {
      name: "Cabinet and Countertop Bundle",
      imageSrc: "../../images/cabinetbundel.jpg",
      oldPrice: "BHD1509.26",
      newPrice: "1056.48",
    },
    {
      name: "Stainless Steel Appliance Package",
      imageSrc: "../../images/package.jpg",
      oldPrice: "BHD943.28",
      newPrice: "754.63",
    },
    {
      name: "Modern Table Set",
      imageSrc: "../../images/modernTableSet.jpg",
      oldPrice: "BHD301.47",
      newPrice: "226.39",
    },
  ];

  const limitedOffers = [
    {
      name: "Smart Kitchen Upgrade",
      imageSrc: "../../images/smartbundle.jpg",
      oldPrice: "BHD1131.94",
      newPrice: "712.70",
    },
    {
      name: "Luxury Appliance Package",
      imageSrc: "../../images/lluxxury.webp",
      oldPrice: "BHD1886.57",
      newPrice: "1020.60",
    },
    {
      name: "Compact Space-Saving Kitchen Solution",
      imageSrc: "../../images/space saving.jpg",
      oldPrice: "BHD679.16",
      newPrice: "319.16",
    },
  ];

  const clearanceSales = [
    {
      name: "Vintage Kitchen Cabinet Set",
      imageSrc: "../../images/vintageca.jpeg",
      oldPrice: "BHD943.26",
      newPrice: "475.26",
    },
    {
      name: "Stainless Steel Range Hood",
      imageSrc: "../../images/rangehood.jpg",
      oldPrice: "BHD339.58",
      newPrice: "139.58",
    },
    {
      name: "Transitional Dining room",
      imageSrc: "../../images/transitionaldinig.webp",
      oldPrice: "BHD1124.67",
      newPrice: "924.67",
    },
  ];

  let count = 0;
function generateOffersProducts(product) {
  count++;
  return `
      <div class="col-md-4 lolo">
        <div class="card">
          <img class="card-img-top img-fluid offers-img" src="${product.imageSrc}" data-bs-target="#offers-${count}" data-bs-toggle="modal">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="item-body">
              <span>
                <span class="old-price">${product.oldPrice}</span>
                BHD<strong class="new-price">${product.newPrice}</strong>
              </span>
              <a class="btn btn-outline-success" onclick="addToCart(this)">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    `;
}
function generateOffers(products) {
    return products.map(generateOffersProducts).join("");
  }

  const bestOffersContainer = document.querySelector(
    ".best-offers.container .offers-container"
  );
  const limitedOffersContainer = document.querySelector(
    ".limited-offers.container .offers-container"
  );
  const clearanceSalesContainer = document.querySelector(
    ".clearance-offers.container .offers-container"
  );
  
bestOffersContainer.innerHTML = generateOffers(bestOffers);
limitedOffersContainer.innerHTML = generateOffers(limitedOffers);
clearanceSalesContainer.innerHTML = generateOffers(clearanceSales);
const contemporaryDesigns = [
    {
      title: "Embrace California Style",
      imageSrc: "../../images/california.webp",
      price: 12099,
    },
    {
      title: "Plant a Tree",
      imageSrc: "../../images/tree.webp",
      price: 11999,
    },
    {
      title: "Central",
      imageSrc: "../../images/central.webp",
      price: 8999,
    },
    {
      title: "Caroline Andreoni Interior",
      imageSrc: "../../images/caroline.webp",
      price: 13967,
    },
    {
      title: "Embrace Minimalism",
      imageSrc: "../../images/embrace.webp",
      price: 7985,
    },
    {
      title: "Supersize the Skylight",
      imageSrc: "../../images/super.webp",
      price: 10673,
    },
  ];

  const modernDesigns = [
    {
      title: "Galley-style kitchen",
      imageSrc: "../../images/galley.webp",
      price: 9694,
    },
    {
      title: "L-shaped kitchen",
      imageSrc: "../../images/lshaped.webp",
      price: 8498,
    },
    {
      title: "Two-Tone Cabinetry",
      imageSrc: "../../images/twotone.webp",
      price: 10593,
    },
    {
      title: "Andreoni Interior Design",
      imageSrc: "../../images/andreoni.webp",
      price: 8433,
    },
    {
      title: "Accent With Gold",
      imageSrc: "../../images/accent.webp",
      price: 11846,
    },
    {
      title: "Leanne Ford Interiors",
      imageSrc: "../../images/leanne.webp",
      price: 9975,
    },
  ];

  const traditionalDesigns = [
    {
      title: "Victorian-era style",
      imageSrc: "../../images/victoria.webp",
      price: 10734,
    },
    {
      title: "Bright White Traditional Kitchen",
      imageSrc: "../../images/white.webp",
      price: 11573,
    },
    {
      title: "Traditional Lighting",
      imageSrc: "../../images/tradi.webp",
      price: 11854,
    },
    {
      title: "Glass-Front Kitchen",
      imageSrc: "../../images/glass.webp",
      price: 8538,
    },
    {
      title: "the Outside In",
      imageSrc: "../../images/outside.webp",
      price: 12788,
    },
    {
      title: "Farmhouse Kitchen Island",
      imageSrc: "../../images/farmhouse.webp",
      price: 11436,
    },
  ];

  const transitionalDesigns = [
    {
      title: "White Transitional Kitchen",
      imageSrc: "../../images/whitetrans.webp",
      price: 8462,
    },
    {
      title: "Open-Concept Transitional Kitchens",
      imageSrc: "../../images/opencons.webp",
      price: 11398,
    },
    {
      title: "Transitional Kitchen Lighting",
      imageSrc: "../../images/tranlgh.webp",
      price: 7844,
    },
    {
      title: "arch-interior",
      imageSrc: "../../images/arch-interior.webp",
      price: 9356,
    },
    {
      title: "The mix Transitional",
      imageSrc: "../../images/Themix.jpg",
      price: 7754.63,
    },
    {
      title: "Naturat Transitional Kitchen",
      imageSrc: "../../images/yiyi.webp",
      price: 9632,
    },
  ];

  function generateKitchens(kitchen) {
    return `
    <div class="col-md-4">
            <div class="card">
              <img class="card-img-top img-fluid offers-img" src="${kitchen.imageSrc}" >
              <div class="card-body">
                <h5 class="card-title">${kitchen.title}</h5>
                <div class="item-body">
                  <span>
                    BHD<strong class="new-price">${kitchen.price}</strong>
                  </span>
                  <a class="btn btn-outline-success" onclick="addToCart(this)">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
    `;
  }

  function generateKitchenStyles(kitchens) {
    return kitchens.map(generateKitchens).join("");
  }
  
  const contemporaryContainer = document.querySelector(".contemporary-div");
const modernContainer = document.querySelector(".modern-div");
const traditionalContainer = document.querySelector(".traditional-div");
const transitionalContainer = document.querySelector(".transitional-div");

contemporaryContainer.innerHTML =
  `<h2 id="ContemporaryDesign">Contemporary Designs</h2>` +
  generateKitchenStyles(contemporaryDesigns);
  modernContainer.innerHTML =
  `<h2 id="ModernDesign">Modern Designs</h2>` +
  generateKitchenStyles(modernDesigns);
  traditionalContainer.innerHTML =
  `<h2 id="TraditionalDesign">Traditional Designs</h2>` +
  generateKitchenStyles(traditionalDesigns);
  transitionalContainer.innerHTML =
  `<h2 id="TransitionalDesign">Transitional Designs</h2>` +
  generateKitchenStyles(transitionalDesigns);