document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const processing = document.querySelector('.payment-processing');
    const payButtons = document.querySelectorAll('#gpay, #apay, #paypal, #pay24');
    const totalAmountElement = document.getElementById('total-amout');
    const successDelay = 1800;

    function showPaymentProcessing() {
        if (!overlay || !processing) return;

        overlay.style.display = 'block';
        processing.style.display = 'flex';

        const statusText = processing.querySelector('h3');
        if (statusText) {
            statusText.textContent = 'Зачекайте, виконується оплата...';
        }

        const existingButton = processing.querySelector('.add-too-cart-btn');
        if (existingButton) {
            existingButton.remove();
        }

        setTimeout(() => {
            if (!overlay || !processing) return;

            if (statusText) {
                statusText.textContent = 'Оплата пройшла успішно';
            }

            const homeButton = document.createElement('button');
            homeButton.className = 'home-btn';
            homeButton.textContent = 'на головну';
            homeButton.addEventListener('click', function () {
                window.location.href = 'index.html';
            });

            processing.appendChild(homeButton);
        }, successDelay);
    }

    if (totalAmountElement) {
        const total = sessionStorage.getItem('checkoutTotal');
        totalAmountElement.textContent = total ? `До сплати: ${total} грн` : 'До сплати: 0 грн';
        sessionStorage.removeItem('checkoutTotal');
    }

    payButtons.forEach(button => {
        button.addEventListener('click', showPaymentProcessing);
    });
});
