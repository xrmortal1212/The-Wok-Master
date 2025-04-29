document.addEventListener('DOMContentLoaded', function() {
    // Select all add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    
    // Add event listeners to each button
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find the quantity controls within the same card
            const card = this.closest('.food-card');
            const quantityControls = card.querySelector('.quantity-controls');
            
            // Hide the add to cart button and show quantity controls
            this.classList.add('d-none');
            quantityControls.classList.remove('d-none');
        });
    });
    
    // Handle quantity controls for all cards
    document.querySelectorAll('.food-card').forEach(card => {
        const decreaseBtn = card.querySelector('.decrease-qty');
        const increaseBtn = card.querySelector('.increase-qty');
        const quantityDisplay = card.querySelector('.quantity');
        
        let quantity = 1;
        
        if (decreaseBtn && increaseBtn && quantityDisplay) {
            decreaseBtn.addEventListener('click', function() {
                if (quantity > 1) {
                    quantity--;
                    quantityDisplay.textContent = quantity;
                }
            });
            
            increaseBtn.addEventListener('click', function() {
                quantity++;
                quantityDisplay.textContent = quantity;
            });
        }
    });
});
 
// Add this script to show modal when cart icon is clicked
document.getElementById('cartIcon').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('orderSummaryModal'));
    modal.show();
  });