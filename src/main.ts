import "./style.css";
import confetti from "canvas-confetti";

interface SorteoState {
  allNames: string[];
  remainingNames: string[];
  drawnNames: string[];
  currentDrawn: string | null;
}

const state: SorteoState = {
  allNames: [],
  remainingNames: [],
  drawnNames: [],
  currentDrawn: null,
};

// 🎁 Premio
const PRIZE =
  "☕🥐 Un desayuno por semana durante 1 año";

// ⏳ Countdown
let countdownValue: number | null = null;
let isDrawing = false;

// 🎉 Confetti
function launchConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
      return;
    }

    confetti({
      particleCount: 20,
      spread: 360,
      startVelocity: 30,
      ticks: 80,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  }, 200);
}

// Cargar nombres desde JSON
async function loadNames() {
  try {
    const response = await fetch("/names.json");

    const data = await response.json();

    // usernames manteniendo duplicados
    const usernames = data.map(
      (item: any) => item.username
    );

    state.allNames = usernames;

    state.remainingNames = [...state.allNames];

    render();
  } catch (error) {
    console.error("Error cargando nombres:", error);

    showError(
      "Error al cargar el archivo de nombres"
    );
  }
}

// 🎲 Sortear
async function drawName() {
  if (isDrawing) return;

  if (state.remainingNames.length === 0) {
    showError("No hay más nombres para sortear");
    return;
  }

  isDrawing = true;

  // Countdown 3...2...1
  for (let i = 3; i >= 1; i--) {
    countdownValue = i;

    render();

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
  }

  countdownValue = null;

  const randomIndex = Math.floor(
    Math.random() * state.remainingNames.length
  );

  state.currentDrawn =
    state.remainingNames[randomIndex];

  state.drawnNames.push(state.currentDrawn);

  state.remainingNames.splice(randomIndex, 1);

  launchConfetti();

  isDrawing = false;

  render();
}

// 🔄 Reset
function resetDraw() {
  state.currentDrawn = null;

  state.drawnNames = [];

  state.remainingNames = [...state.allNames];

  countdownValue = null;

  render();
}

// ❌ Error
function showError(message: string) {
  const app = document.querySelector("#app");

  if (app) {
    const errorDiv = document.createElement("div");

    errorDiv.className = "error-toast";

    errorDiv.textContent = message;

    app.appendChild(errorDiv);

    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
}

// 🎨 Render
function render() {
  const app = document.querySelector("#app");

  if (!app) return;

  app.innerHTML = `
    <div class="app-container">

      <div class="content-wrapper">

        <!-- Header -->
        <div class="header">

          <div class="header-icon">
            ✨
          </div>

          <h1 class="main-title">
            Sorteo: Nuestra Esencia
          </h1>

        </div>

        <!-- Main -->
        <div class="main-grid">

          <!-- Draw -->
          <div class="draw-section">

            <div class="card">

              <!-- Winner -->
              <div class="winner-section">

                <h2 class="section-title">
                  🎁 Ganador Actual
                </h2>

                <div class="winner-box">

                  ${
                    countdownValue
                      ? `
                        <div class="countdown">
                          ${countdownValue}
                        </div>
                      `
                      : state.currentDrawn
                      ? `
                        <div>

                          <p class="winner-label">
                            🎉 ¡Ganaste!
                          </p>

                          <p class="winner-name">
                            @${state.currentDrawn}
                          </p>

                        </div>
                      `
                      : `
                        <p class="empty-text">
                          Presiona "Sortear"
                        </p>
                      `
                  }

                </div>

              </div>

              <!-- Prize -->
              <div class="stats-centered">

                <p class="stat-label big-label">
                  🎁 Premio
                </p>

                <p class="prize-text">
                  ${PRIZE}
                </p>

                <p class="winner-count">
                  Ganadores sorteados:
                  ${state.drawnNames.length}
                </p>

              </div>

              <!-- Buttons -->
              <div class="buttons-container">

                <button
                  id="drawBtn"
                  class="primary-button"
                  ${
                    state.remainingNames.length === 0 ||
                    isDrawing
                      ? "disabled"
                      : ""
                  }
                >
                  🎲 Sortear
                </button>

                <button
                  id="resetBtn"
                  class="secondary-button"
                >
                  🔄 Reiniciar
                </button>

              </div>

            </div>

          </div>

          <!-- History -->
          <div>

            <div class="card history-card">

              <h2 class="section-title">
                👑 Ganadores
              </h2>

              <div class="history-box">

                ${
                  state.drawnNames.length > 0
                    ? state.drawnNames
                        .map(
                          (name, index) => `
                            <div class="winner-item">

                              <span class="winner-index">
                                ${index + 1}
                              </span>

                              <span class="winner-item-name">
                                @${name}
                              </span>

                            </div>
                          `
                        )
                        .join("")
                    : `
                      <p class="empty-history">
                        Sin ganadores aún...
                      </p>
                    `
                }

              </div>

            </div>

          </div>

        </div>

        <!-- Footer -->
        <div class="footer">
          ✨ Nuestra Esencia 2026
        </div>

      </div>

    </div>
  `;

  // Events
  const drawBtn =
    document.querySelector("#drawBtn");

  const resetBtn =
    document.querySelector("#resetBtn");

  if (drawBtn) {
    drawBtn.addEventListener("click", drawName);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetDraw);
  }
}

// 🚀 Init
loadNames();