// ===============================
// Função Recursiva: animação de texto digitado
// ===============================
function digitarTextoRecursivo(el, texto, i = 0) {
    if (i < texto.length) {
        el.innerHTML += texto[i];
        setTimeout(() => digitarTextoRecursivo(el, texto, i + 1), 35);
    }
}

// ===============================
// Efeito de pulsação nos cards
// ===============================
function pulsarCard(el, repeticoes) {
    if (repeticoes <= 0) return;

    el.classList.add("pulse");

    setTimeout(() => {
        el.classList.remove("pulse");
        setTimeout(() => pulsarCard(el, repeticoes - 1), 300);
    }, 300);
}

document.querySelectorAll(".card").forEach(card => pulsarCard(card, 2));

// ===============================
// Botão de voltar ao topo
// ===============================
const voltarTopo = document.createElement("button");
voltarTopo.id = "voltarTopo";
voltarTopo.textContent = "↑";
voltarTopo.style.cssText = `
    position: fixed;
    bottom: 15px;
    right: 15px;
    padding: 10px 15px;
    font-size: 22px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: none;
    background: #333;
    color: white;
`;
document.body.appendChild(voltarTopo);

window.addEventListener("scroll", () => {
    voltarTopo.style.display = window.scrollY > 200 ? "block" : "none";
});

voltarTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// Animação automática nos títulos
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    if (h1) {
        const texto = h1.innerText;
        h1.innerHTML = "";
        digitarTextoRecursivo(h1, texto);
    }
});
