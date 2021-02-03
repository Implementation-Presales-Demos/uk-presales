import { PayByLink } from './components/pay-by-link.js';

let pblDataObj = {
  "countryCode": "GB",
  "merchantAccount": merchantAccount,
  "merchantName": demoSession.merchantName,
  "reference": "YOUR_PAYMENT_REFERENCE",
  "shopperEmail": "jamie.white@adyen.com",
  "amount": {
    "value": 4200,
    "currency": "GBP"
  },
};

let newPbl = new PayByLink(pblDataObj);

newPbl.getQRCode().then(function(qrCodeSvg) {
  $('#qr-code').append(qrCodeSvg);
});

Pusher.logToConsole = true;

let pusher = new Pusher('47e2eb4a3e296716c3fd', {
  cluster: 'eu'
});

var channel = pusher.subscribe('adyen-demo');

channel.bind('payment-success', function(data) {
  if (newPbl.data.reference == data.merchantReference) {
    alert(JSON.stringify(data));
  }
});
