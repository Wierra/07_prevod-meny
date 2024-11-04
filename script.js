const rateCzkEur = 24.47
const rateCzkGbp = 28.09
const rateCzkUsd = 24.81
const rateCzkBtc = 478637

const convertToCzk = (amount, currency) => {
    if (currency.toUpperCase() === "EUR") {
        return Math.round(amount * rateCzkEur)
    } else if (currency.toUpperCase() === "GBP") {
        return Math.round(amount*rateCzkGbp)
    } else if (currency.toUpperCase() === "USD") {
        return Math.round(amount*rateCzkUsd)
    } else if (currency.toUpperCase() === "BTC") {
        return Math.round(amount*rateCzkBtc)
    } else return null
}

document.body.innerHTML += "<h2>Převod z eura do CZK</h2>"
document.body.innerHTML += `${convertToCzk(268, "EUR")} CZK`

document.body.innerHTML += "<h2>Převod z Britské libry do CZK</h2>"
document.body.innerHTML += `${convertToCzk(268, "GBP")} CZK`

document.body.innerHTML += "<h2>Převod z Amerického dolaru do CZK</h2>"
document.body.innerHTML += `${convertToCzk(268, "USD")} CZK`

document.body.innerHTML += "<h2>Převod z Bitcoinu do CZK</h2>"
document.body.innerHTML += `${convertToCzk(268, "BTC")} CZK`