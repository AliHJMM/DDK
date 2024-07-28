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