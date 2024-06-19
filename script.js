paypal.Buttons({
    style: {
        color: 'blue',
        shape: 'pill',
        label: 'pay'
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01' // Cambia esto por el valor de tu producto
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            document.getElementById('paymentLink').style.display = 'block';
        });
    },
    onError: function(err) {
        console.error('An error occurred:', err);
    }
}).render('#paypal-button-container');
