/* ====================
   Eclipse Lunar Hub JS
   ==================== */

const scripts = [
  { name:"Tarefas SP", desc:"Script oficial SP.", status:"offline", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/tarefas" },
  { name:"Expansão Noturna", desc:"Expansão estudantil.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/expansao" },
  { name:"Leia SP", desc:"Leitura SP.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/leiasp" },
  { name:"Khan Academy", desc:"Khan estudos.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/khan" },
  { name:"Alura", desc:"Alura cursos.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/alura" },
  { name:"Redação SP", desc:"Redações.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/redacao" },
  { name:"Prepara SP", desc:"Preparação SP.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/preparasp" },

  /* ======================
     ✅ APOSTILAS ADICIONADO
     ====================== */
  { name:"Apostilas", desc:"Livro do estudante — material completo.", status:"online", updated:"02/12/2025", url:"https://crimsonzerohub.xyz/livrodoestudante" }
];

const grid = document.getElementById("scripts-grid");

/* Build cards */
function render(filter="all") {
  grid.innerHTML = "";
  scripts.filter(s => filter==="all" || s.status===filter)
         .forEach(s => grid.appendChild(buildCard(s)));
}

/* Create card */
function buildCard(s) {
  const div = document.createElement("div");
  div.className = "script-card";

  div.innerHTML = `
    <div>
      <h3 class="script-title">
        <span class="status-dot ${s.status}"></span>
        ${s.name}
      </h3>
      <p class="script-desc">${s.desc}</p>
      <p class="script-update">Atualizado: ${s.updated}</p>
    </div>
  `;

  div.addEventListener("click", () => {
    if (s.status === "online") {
      window.open(s.url, "_blank");
    } else {
      openModal(s.name);
    }
  });

  return div;
}

/* Filter system */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

/* Modal */
const modal = document.getElementById("offlineModal");
const modalClose = document.getElementById("modalClose");

function openModal(scriptName) {
  document.getElementById("modalTitle").innerText = scriptName + " está offline";
  document.getElementById("modalMsg").innerText = "Este script está temporariamente indisponível.";
  modal.style.display = "flex";
}

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Discord button */
document.getElementById("discordBtn").addEventListener("click", () => {
  window.open("https://discord.gg/Utjewneu3J", "_blank");
});

/* Typewriter Title */
const title = "Eclipse Lunar Hub";
let idx = 0;

function typeWriter() {
  if (idx < title.length) {
    document.getElementById("typed-title").textContent += title[idx];
    idx++;
    setTimeout(typeWriter, 70);
  }
}

/* Loader */
window.onload = () => {
  typeWriter();
  setTimeout(() => {
    document.getElementById("loader-overlay").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader-overlay").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
      render();
    }, 400);
  }, 800);
};