function filtrarSalas() {
    const salas = document.querySelectorAll<HTMLElement>('.RoomCardWrapper'); 

    salas.forEach(sala => {
        const pais = sala.querySelector("span.LobbyCountry");
        //modificar el pais segun la necesidad
        if (pais?.getAttribute('title') === "Argentina") {
            sala.style.display = 'none';
        }
    });
}

filtrarSalas();

const contenedor = document.querySelector('#lobbies-wrapper');

if (contenedor) {
  const observer = new MutationObserver(() => { 
    filtrarSalas();
  });

  observer.observe(contenedor, {
    childList: true,
    subtree: true
  });
}