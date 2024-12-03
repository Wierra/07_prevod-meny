const rateCZkEur = 24.47;
const rateCZkGbp = 28.09;
const rateCZkUsd = 24.81;
const rateCZkBtc = 478637;

const convertToCzk = (amount, currency) => {
  if (currency.toUpperCase() === "EUR") {
    return Math.round(amount * rateCZkEur);
  } else if (currency.toUpperCase() === "GBP") {
    return Math.round(amount * rateCZkGbp);
  } else if (currency.toUpperCase() === "USD") {
    return Math.round(amount * rateCZkUsd);
  } else if (currency.toUpperCase() === "BTC") {
    return Math.round(amount * rateCZkBtc);
  } else return null;
};


document.body.innerHTML += `<h2>Převod z eura do CZK</h2>`;
document.body.innerHTML += `${convertToCzk(268, "EUR").toLocaleString('CZK')} CZK`;

document.body.innerHTML += `<h2>Převod z Britské libry do CZK</h2>`;
document.body.innerHTML += `${convertToCzk(268, "GBP").toLocaleString('CZK')} CZK`;

document.body.innerHTML += `<h2>Převod z Amerického dolaru do CZK</h2>`;
document.body.innerHTML += `${convertToCzk(268, "USD").toLocaleString('CZK')} CZK`;

document.body.innerHTML += "<h2>Převod z Bitcoinu do CZK</h2>";
document.body.innerHTML += `${convertToCzk(268, "BTC").toLocaleString('CZK')} CZK`;