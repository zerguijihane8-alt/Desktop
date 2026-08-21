// Sélection des éléments principaux
const totalElement = document.querySelector('.total-price'); // À adapter selon votre HTML

function updateTotalPrice() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent);
    const quantity = parseInt(item.querySelector('.item-quantity').textContent);
    total += price * quantity;
  });
  totalElement.textContent = total.toFixed(2) + ' €';
}

// Gestion des boutons + et -
document.querySelectorAll('.btn-plus').forEach(button => {
  button.addEventListener('click', (e) => {
    const qtySpan = e.target.closest('.cart-item').querySelector('.item-quantity');
    qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
    updateTotalPrice();
  });
});

document.querySelectorAll('.btn-minus').forEach(button => {
  button.addEventListener('click', (e) => {
    const qtySpan = e.target.closest('.cart-item').querySelector('.item-quantity');
    let currentQty = parseInt(qtySpan.textContent);
    if (currentQty > 1) {
      qtySpan.textContent = currentQty - 1;
      updateTotalPrice();
    }
  });
});

// Suppression d'un article
document.querySelectorAll('.btn-delete').forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.closest('.cart-item').remove();
    updateTotalPrice();
  });
});

// Bouton Cœur (Aimer)
document.querySelectorAll('.btn-heart').forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('liked'); // Change la couleur via CSS
  });
});
