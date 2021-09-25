$(document).ready(function () {
    $(`#addToCartBtn`).on(`click`, function () {
        window.location.href = "checkout.html"
    });

    $(`#checkOutBtn`).on(`click`, function () {
        window.location.href = "confirmation.html"
    });

    $(`.confirmation-body`).on(`click`, function () {
        window.location.href = "cart.html"
    });
})