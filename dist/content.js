"use strict";
function filtrarSalas() {
    const salas = document.querySelectorAll('.RoomCardWrapper');
    salas.forEach(sala => {
        const pais = sala.querySelector("span.LobbyCountry");
        if ((pais === null || pais === void 0 ? void 0 : pais.getAttribute('title')) === "Argentina") {
            sala.style.display = 'none';
        }
    });
}
filtrarSalas();
const contenedor = document.querySelector('#lobbies-wrapper');
if (contenedor) {
    //cada vez q se haga un cambio (en este caso que se agregue una sala) se vuelve a llamar a la funcion
    const observer = new MutationObserver(() => {
        filtrarSalas();
    });
    observer.observe(contenedor, {
        childList: true,
        subtree: true
    });
}
