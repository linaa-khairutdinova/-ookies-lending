document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const links = document.querySelectorAll(".menu-item > a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}

const button = document.querySelectorAll(".products-items .button")
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    }
}

const prices = document.getElementsByClassName("products-item-price")
document.getElementById("change-currency").onclick = function (e) {
    const currentCurency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurency === "$") {
        newCurrency = "₴"
        coefficient = 30;
    } else if (currentCurency === "₴") {
        newCurrency = "€";
        coefficient = 1;
    } else if (currentCurency === "€") {
        newCurrency = "¥";
        coefficient = 7;
    }
    e.target.innerText = newCurrency
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency
    }
}


const product = document.getElementById("product")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach(item => {
            item.value = ""
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    }
}