let total = 0;
    let modalBody;
    let modalFooter;

    $(document).ready(function() {
      modalBody = $(".cart-modal-body");
      modalFooter = $(".cart-modal-footer");
    });

    function applyDiscount() {
      var discount = 0;

      // Check if the total is eligible for a discount
      if (total >= 1000 && total < 2000) {
        discount = 0.1; // 10% discount
      } else if (total >= 2000) {
        discount = 0.2; // 20% discount
      }

      // Calculate discounted prices
      var discountedTotal = total * (1 - discount);
      var discountAmount = total * discount;

      // Update the discount-related elements in the modal
      var discountElements = `
        <span><b>Discount:</b></span>
        <span>
          <h6>(${discount*100}%) ${discountAmount.toFixed(2)} BHD      </h6>
        </span>
        <span><b>Total:</b></span>
        <span>
          <h6>${discountedTotal.toFixed(2)} BHD</h6>
        </span>
      `;

      // Append the discount information to the existing modalFooter
      modalFooter.html(discountElements);
    }

    function addToCart(button) {
      var cardBody = $(button).closest('.card-body');
      var newPriceElement = cardBody.find('.item-body').find(".new-price");
      var price = parseFloat(newPriceElement.text().trim());
      var name = cardBody.find(".card-title").text().trim();
      total += price;
      alert("Item added to cart.");

      if (modalBody.text().trim() === 'Your Cart Is Empty') {
        modalBody.empty();
      }

      var itemDiv = `
        <div class="cart-items">
          <span>${name}</span>
          <span>
            <strong>${price.toFixed(2)} BHD</strong>
            <button class="btn-close delete-item" onclick="deleteItem(this)"></button>
          </span>
        </div>
      `;

      var totalDiv = `
        <div class="cart-total">
          <span>Total before discount:</span>
          <span>
            <h6><strong>${total.toFixed(2)} BHD</strong></h6>
          </span>
        </div>
      `;

      // Append the item to the modalBody
      modalBody.append(itemDiv);

      // Update the total and apply the discount
      modalFooter.html(totalDiv);
      applyDiscount();

      // Append the Checkout button
      appendCheckoutButton();
    }

    function deleteItem(button) {
      var itemDiv = $(button).closest('.cart-items');
      var priceElement = itemDiv.find('strong');
      var price = parseFloat(priceElement.text());
      itemDiv.remove();

      // Update total and apply the discount
      total -= price;
      modalFooter.find('strong').text(total);
      applyDiscount();

      // Append the Checkout button
      appendCheckoutButton();

      // If there are no items left, show 'Your Cart Is Empty' message
      if ($('.cart-items').length === 0) {
        modalBody.text('Your Cart Is Empty');
        modalFooter.html("");
      }
    }

    function appendCheckoutButton() {
      var checkoutButton = '<a href="payment.html" class="btn btn-success">Checkout</a>';
      modalFooter.append(checkoutButton);
    }