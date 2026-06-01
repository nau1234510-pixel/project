document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const clearCartButton = document.getElementById('clear-cart-btn');
    const checkoutButton = document.getElementById('checkout-btn');

    function getCart() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('cart='));
        if (cookie) {
            try {
                return JSON.parse(decodeURIComponent(cookie.split('=')[1] || '')) || [];
            } catch (error) {
                console.warn('Не вдалося прочитати cookie cart:', error);
            }
        }

        try {
            const local = localStorage.getItem('cart');
            return local ? JSON.parse(local) : [];
        } catch (error) {
            return [];
        }
    }

    function saveCart(cart) {
        const value = JSON.stringify(cart);
        document.cookie = `cart=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 30}`;

        try {
            localStorage.setItem('cart', value);
        } catch (error) {
            // ignore
        }
    }

    function formatPrice(price) {
        return `${price} грн`;
    }

    function renderCart() {
        const cart = getCart();

        if (!cart.length) {
            cartItemsContainer.innerHTML = `<p>Кошик порожній.</p>`;
            cartSummary.innerHTML = '';
            updateCartButtons(false);
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h2>${item.name}</h2>
                    <p>Ціна: ${formatPrice(item.price)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-qty" data-id="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <p>Сума: ${formatPrice(item.price * item.quantity)}</p>
                    <button class="call-btn remove-item-btn" data-id="${item.id}">Видалити</button>
                </div>
            </div>
        `).join('');

        cartSummary.innerHTML = `
            <p><strong>Загальна сума:</strong> ${formatPrice(total)}</p>
        `;
        updateCartButtons(true);
    }

    checkoutButton?.addEventListener('click', () => {
        const cart = getCart();
        if (!cart.length) {
            alert('Кошик порожній. Додайте товари перед оформленням.');
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        sessionStorage.setItem('checkoutTotal', total.toString());
        window.location.href = 'order.html';
    });

    function removeItem(id) {
        const cart = getCart().filter(item => item.id !== Number(id));
        saveCart(cart);
        renderCart();
    }

    function updateCartButtons(hasItems) {
        if (clearCartButton) {
            clearCartButton.disabled = !hasItems;
        }
        if (checkoutButton) {
            checkoutButton.disabled = !hasItems;
        }
    }

    function updateQuantity(id, delta) {
        const cart = getCart();
        const item = cart.find(item => item.id === Number(id));
        if (!item) return;

        item.quantity += delta;

        if (item.quantity <= 0) {
            removeItem(id);
            return;
        }

        saveCart(cart);
        renderCart();
    }

    cartItemsContainer.addEventListener('click', event => {
        const increaseButton = event.target.closest('.increase-qty');
        const decreaseButton = event.target.closest('.decrease-qty');
        const removeButton = event.target.closest('.remove-item-btn');

        if (increaseButton) {
            updateQuantity(increaseButton.dataset.id, 1);
            return;
        }

        if (decreaseButton) {
            updateQuantity(decreaseButton.dataset.id, -1);
            return;
        }

        if (removeButton) {
            removeItem(removeButton.dataset.id);
        }
    });

    clearCartButton?.addEventListener('click', () => {
        saveCart([]);
        renderCart();
    });

    renderCart();
});
