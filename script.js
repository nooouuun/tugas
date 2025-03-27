document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const destinasi = getQueryParam("wisata");
    let harga = 0;

    if (destinasi) {
        switch (destinasi) {
            case "Gunung Bromo":
                harga = 20000;
                break;
            case "Tumpak Sewu":
                harga = 15000;
                break;
            case "Ranu Regulo":
                harga = 19000;
                break;
        }

        const totalContainer = document.querySelector("#total-info");
        if (totalContainer) {
            totalContainer.textContent = `Destinasi: ${destinasi} - Total Harga: Rp ${harga}`;
        }
    }
});
