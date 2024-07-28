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