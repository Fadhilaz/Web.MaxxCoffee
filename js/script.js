function initCarousel () {
    const drinks = document.querySelector(".drinks-carousel");

    for (let i = 0; i < 5; i++) {
        const drinksCarousel = document
            .querySelector(".drinks-corousel-slide")
            .cloneNode(true);

        drinks.appendChild(drinksCarousel);
    }
}

initCarousel ();

// From reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tableName = document.querySelector("#table_name").value;
    const tableSize = document.querySelector("#table_capacity").value;
    const date = document.querySelector("#order_date").value;
    const order = document.querySelector("#order").value;

    const orderText = `Halo, saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName} pada tanggal/waktu ${date}

    Order : 
    ${order || "*Pesan ditempat"}
    `;

    window.location.replace(`https://wa.me/34613220205?text=${orderText}`);
});

// Hamburger icon animation
const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNavigation.classList.toggle("menu-active");
})