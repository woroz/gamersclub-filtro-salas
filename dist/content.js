"use strict";
var _a, _b, _c;
function filtrarSalas(paisSeleccionado) {
    const salas = document.querySelectorAll('.RoomCardWrapper');
    salas.forEach(sala => {
        var _a;
        const pais = sala.querySelector("span.LobbyCountry");
        const titulo = (_a = pais === null || pais === void 0 ? void 0 : pais.getAttribute('title')) === null || _a === void 0 ? void 0 : _a.trim();
        if (!paisSeleccionado) {
            sala.style.display = '';
        }
        else if (titulo === paisSeleccionado) {
            sala.style.display = '';
        }
        else {
            sala.style.display = 'none';
        }
    });
}
let paisActual = undefined;
filtrarSalas();
const contenedor = document.querySelector('#lobbies-wrapper');
if (contenedor) {
    let timeout = null;
    const observer = new MutationObserver(() => {
        if (timeout)
            clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            filtrarSalas(paisActual);
        }, 1);
    });
    observer.observe(contenedor, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style', 'title']
    });
}
const panel = document.createElement("div");
panel.id = "filtro-panel";
panel.innerHTML = `
  <div id="filtro-header" style="
    cursor: move;
    background: #2d2d2d;
    color: white;
    padding: 6px 10px;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
  ">Filtro</div>
  <div id="filtro-opciones" style="
    background: rgba(20,20,20,0.9);
    color: white;
    padding: 8px;
    border-radius: 0 0 10px 10px;
    text-align: center;
  ">
    <img src="https://flagcdn.com/w40/ar.png" id="bandera-ar" title="Argentina" style="cursor:pointer;margin:0 5px;border-radius:4px;">
    <img src="https://flagcdn.com/w40/br.png" id="bandera-br" title="Brasil" style="cursor:pointer;margin:0 5px;border-radius:4px;">
    <br>
    <button id="mostrar-todo" style="margin-top:6px;background:#444;border:none;color:white;padding:5px 10px;border-radius:6px;cursor:pointer;"> Mostrar todo</button>
  </div>
`;
panel.style.position = "fixed";
panel.style.top = "100px";
panel.style.right = "20px";
panel.style.width = "150px";
panel.style.zIndex = "9999";
panel.style.borderRadius = "10px";
panel.style.boxShadow = "0 2px 10px rgba(0,0,0,0.4)";
panel.style.userSelect = "none";
document.body.appendChild(panel);
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
const header = document.getElementById("filtro-header");
header.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = panel.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        e.preventDefault();
        panel.style.left = `${e.clientX - offsetX}px`;
        panel.style.top = `${e.clientY - offsetY}px`;
        panel.style.right = "auto";
    }
});
document.addEventListener("mouseup", () => {
    isDragging = false;
});
(_a = document.getElementById("bandera-ar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    paisActual = "Argentina";
    filtrarSalas(paisActual);
});
(_b = document.getElementById("bandera-br")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    paisActual = "Brasil";
    filtrarSalas(paisActual);
});
(_c = document.getElementById("mostrar-todo")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    paisActual = undefined;
    filtrarSalas();
});
