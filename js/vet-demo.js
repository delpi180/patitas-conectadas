// =========================================================
// PANEL VETERINARIA · PAPITAS CONECTADAS (DEMO)
// - Manejo de pacientes en memoria
// - ID por paciente
// - Cálculo de estado por fecha
// - Filtros por estado
// - Registro rápido
// - Historial clínico y edición del plan actual
// - Envío de recordatorio (simulado)
// =========================================================

// Estado en memoria (demo)
let pacientes = [
  {
    id: 1,
    codigo: "PC-001",
    nombre: "Luna",
    tipo: "Perro",
    dueno: "María Torres",
    tratamiento: "Vacuna sextuple",
    peso: 7.8,
    proximoControl: "2025-11-28",
    notas: "Control de vacuna. Siguiente dosis en 10 días.",
    creado: "2025-11-15",
    historial: [
      {
        fecha: "2025-11-15",
        tipo: "Consulta inicial",
        detalle: "Revisión general, sin hallazgos graves. Se programa vacuna sextuple."
      },
      {
        fecha: "2025-11-18",
        tipo: "Vacuna",
        detalle: "Aplicación de primera dosis de vacuna sextuple."
      }
    ]
  },
  {
    id: 2,
    codigo: "PC-002",
    nombre: "Michi",
    tipo: "Gato",
    dueno: "Carlos Vega",
    tratamiento: "Desparasitación interna",
    peso: 4.2,
    proximoControl: "2025-11-20",
    notas: "Desparasitación, revisar heces y apetito.",
    creado: "2025-11-10",
    historial: [
      {
        fecha: "2025-11-10",
        tipo: "Consulta inicial",
        detalle: "Gato con leve pérdida de apetito, se indica desparasitación."
      }
    ]
  },
  {
    id: 3,
    codigo: "PC-003",
    nombre: "Rocky",
    tipo: "Perro",
    dueno: "Ana Rojas",
    tratamiento: "Post-operatorio (esterilización)",
    peso: 12.5,
    proximoControl: "2025-11-28",
    notas: "Revisar herida, retirar puntos si todo está OK.",
    creado: "2025-11-12",
    historial: [
      {
        fecha: "2025-11-12",
        tipo: "Cirugía",
        detalle: "Esterilización. Se envían cuidados post-operatorios al dueño."
      },
      {
        fecha: "2025-11-15",
        tipo: "Control",
        detalle: "Herida cicatrizando bien, sin signos de infección."
      }
    ]
  }
];

// Filtro actual por estado
let filtroEstado = "todos";
// Texto de búsqueda (ID, nombre de mascota o dueño)
let textoBusqueda = "";

// ------------------------------
// Funciones de utilidad
// ------------------------------

// Calcula el estado del paciente según la fecha de próximo control
function calcularEstado(fechaStr) {
  if (!fechaStr) return "Próximo";
  const hoy = new Date();
  const fecha = new Date(fechaStr + "T00:00:00");
  const diff = (fecha - hoy) / (1000 * 60 * 60 * 24); // diferencia en días

  if (diff >= 2) return "Próximo";
  if (diff >= 0) return "Al día";
  return "Atrasado";
}

// Devuelve el HTML del badge según el estado
function badgeEstado(estado) {
  if (estado === "Al día") {
    return '<span class="badge badge--aldia">Al día</span>';
  } else if (estado === "Próximo") {
    return '<span class="badge badge--proximo">Próximo</span>';
  } else {
    return '<span class="badge badge--atrasado">Atrasado</span>';
  }
}

// Formatea fecha a dd/mm/yyyy
function formatearFecha(fechaStr) {
  if (!fechaStr) return "—";
  const [year, month, day] = fechaStr.split("-");
  return `${day}/${month}/${year}`;
}

// Genera un código tipo PC-00X
function generarCodigoPaciente() {
  const numero = pacientes.length + 1;
  return "PC-" + String(numero).padStart(3, "0");
}

// ------------------------------
// Render de resumen (sidebar)
// ------------------------------
function actualizarResumen() {
  const sumActivos = document.getElementById("sum-activos");
  const sumAldia = document.getElementById("sum-aldia");
  const sumProximos = document.getElementById("sum-proximos");
  const sumAtrasados = document.getElementById("sum-atrasados");

  let cAldia = 0;
  let cProx = 0;
  let cAtr = 0;

  pacientes.forEach((p) => {
    const estado = calcularEstado(p.proximoControl);
    if (estado === "Al día") cAldia++;
    else if (estado === "Próximo") cProx++;
    else cAtr++;
  });

  const total = pacientes.length;

  if (sumActivos) sumActivos.textContent = total;
  if (sumAldia) sumAldia.textContent = cAldia;
  if (sumProximos) sumProximos.textContent = cProx;
  if (sumAtrasados) sumAtrasados.textContent = cAtr;
}

// ------------------------------
// Render de tabla de pacientes
// ------------------------------
function renderTabla() {
  const tbody = document.getElementById("patients-body");
  if (!tbody) return;

  if (pacientes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8">No hay pacientes registrados en esta demo. Usa el formulario de la derecha para agregar uno. 🐾</td>
      </tr>
    `;
    return;
  }

  const termino = textoBusqueda.trim().toLowerCase();

  const filas = pacientes
    .filter((p) => {
      // Filtro por estado
      const estado = calcularEstado(p.proximoControl);
      const cumpleEstado = filtroEstado === "todos" || estado === filtroEstado;

      // Filtro por texto (ID / mascota / dueño)
      const cumpleBusqueda =
        !termino ||
        (p.codigo && p.codigo.toLowerCase().includes(termino)) ||
        (p.nombre && p.nombre.toLowerCase().includes(termino)) ||
        (p.dueno && p.dueno.toLowerCase().includes(termino));

      return cumpleEstado && cumpleBusqueda;
    })
    .map((p) => {
      const estado = calcularEstado(p.proximoControl);
      return `
        <tr data-id="${p.id}">
          <td>${p.codigo || ""}</td>
          <td>${p.nombre}</td>
          <td>${p.tipo}</td>
          <td>${p.dueno}</td>
          <td>${p.tratamiento}</td>
          <td>${formatearFecha(p.proximoControl)}</td>
          <td>${badgeEstado(estado)}</td>
          <td>
            <button class="table-action-btn" data-action="control" data-id="${p.id}">
              ✔ Control realizado
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  tbody.innerHTML =
    filas ||
    `
      <tr>
        <td colspan="8">No hay pacientes que coincidan con el filtro y la búsqueda ingresada.</td>
      </tr>
    `;
}


// ------------------------------
// Render de detalle de paciente
// ------------------------------
function renderDetalle(paciente) {
  const empty = document.getElementById("detail-empty");
  const content = document.getElementById("detail-content");
  if (!empty || !content) return;

  if (!paciente) {
    empty.style.display = "block";
    content.style.display = "none";
    return;
  }

  empty.style.display = "none";
  content.style.display = "block";

  const estado = calcularEstado(paciente.proximoControl);

  // Historial renderizado
  const historialHTML =
    paciente.historial && paciente.historial.length
      ? paciente.historial
          .map(
            (h) => `
        <li class="history-item">
          <div class="history-meta">${formatearFecha(h.fecha)} · ${h.tipo}</div>
          <div class="history-text">${h.detalle}</div>
        </li>
      `
          )
          .join("")
      : `
      <li class="history-item">
        <div class="history-text">
          Aún no hay registros en el historial para esta mascota en la demo.
        </div>
      </li>
    `;

  // Contenido del detalle (datos + formularios)
  content.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="detail-name">${paciente.nombre} (${paciente.tipo})</div>
        <div class="detail-owner">👤 Dueño: ${paciente.dueno}</div>
        <div class="detail-id">🆔 Código paciente: ${paciente.codigo || "—"}</div>
      </div>
      <div class="detail-status">
        <span class="detail-label">Estado actual:</span>
        ${badgeEstado(estado)}
      </div>
    </div>

    <ul class="detail-list">
      <li>
        <span class="detail-label">Tratamiento actual:</span>
        ${paciente.tratamiento}
      </li>
      <li>
        <span class="detail-label">Peso registrado:</span>
        ${paciente.peso ? paciente.peso + " kg" : "No registrado"}
      </li>
      <li>
        <span class="detail-label">Próximo control:</span>
        ${formatearFecha(paciente.proximoControl)}
      </li>
      <li>
        <span class="detail-label">Notas del veterinario:</span>
        ${paciente.notas || "Sin notas en esta demo."}
      </li>
    </ul>

    <h3 class="detail-section-title">✏️ Plan actual (editable en la demo)</h3>
    <form id="edit-form" class="detail-edit-form">
      <div class="form__group">
        <label for="edit-treatment">🩺 Tratamiento actual</label>
        <input
          type="text"
          id="edit-treatment"
          value="${paciente.tratamiento}"
        />
      </div>
      <div class="form__row">
        <div class="form__group">
          <label for="edit-weight">⚖️ Peso (kg)</label>
          <input
            type="number"
            step="0.1"
            id="edit-weight"
            value="${paciente.peso != null ? paciente.peso : ""}"
          />
        </div>
        <div class="form__group">
          <label for="edit-nextControl">📅 Próximo control</label>
          <input
            type="date"
            id="edit-nextControl"
            value="${paciente.proximoControl || ""}"
          />
        </div>
      </div>
      <div class="form__group">
        <label for="edit-notes">📝 Notas / diagnóstico breve</label>
        <textarea id="edit-notes" rows="2">${paciente.notas || ""}</textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--full">
        💾 Guardar cambios del plan actual (demo)
      </button>
    </form>

    <h3 class="detail-section-title">📚 Historial de registros</h3>
    <ul class="history-list">
      ${historialHTML}
    </ul>

    <div class="history-form">
      <h4 class="detail-section-title">➕ Agregar nuevo registro al historial</h4>
      <form id="history-form">
        <div class="history-form-row">
          <div class="form__group">
            <label for="hist-type">Tipo de registro</label>
            <select id="hist-type">
              <option value="Control">Control</option>
              <option value="Vacuna">Vacuna</option>
              <option value="Tratamiento">Tratamiento</option>
              <option value="Recomendación">Recomendación</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div class="form__group">
            <label for="hist-date">Fecha</label>
            <input type="date" id="hist-date" />
          </div>
        </div>
        <div class="form__group">
          <label for="hist-detail">Detalle</label>
          <textarea
            id="hist-detail"
            rows="2"
            placeholder="Ej: Se revisó herida, todo cicatrizando bien."
          ></textarea>
        </div>
        <button type="submit" class="btn btn--secondary btn--full">
          ➕ Agregar al historial (demo)
        </button>
      </form>
    </div>

    <div class="reminder-row">
      <button type="button" id="btn-reminder" class="btn btn--ghost btn--full">
        📩 Enviar recordatorio al dueño (demo)
      </button>
      <p id="reminder-msg" class="reminder-message"></p>
    </div>

    <p class="card__note">
      *Toda la información mostrada es simulada para efectos del MVP de PAPITAS CONECTADAS.
    </p>
  `;

  // Configurar formularios y botón de recordatorio
  setupDetalleForms(paciente);
}

// ------------------------------
// Formularios dentro del detalle
// ------------------------------
function setupDetalleForms(paciente) {
  const editForm = document.getElementById("edit-form");
  const historyForm = document.getElementById("history-form");
  const reminderBtn = document.getElementById("btn-reminder");
  const reminderMsg = document.getElementById("reminder-msg");

  // Editar plan actual
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const t = document.getElementById("edit-treatment").value.trim();
      const wStr = document.getElementById("edit-weight").value;
      const nc = document.getElementById("edit-nextControl").value;
      const n = document.getElementById("edit-notes").value.trim();

      if (t) paciente.tratamiento = t;
      paciente.peso = wStr ? parseFloat(wStr) : null;
      if (nc) paciente.proximoControl = nc;
      paciente.notas = n;

      actualizarResumen();
      renderTabla();
      renderDetalle(paciente);
    });
  }

  // Agregar registro al historial
  if (historyForm) {
    historyForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const tipo = document.getElementById("hist-type").value || "Registro";
      let fecha = document.getElementById("hist-date").value;
      const detalle = document.getElementById("hist-detail").value.trim();

      if (!detalle) {
        return;
      }

      if (!fecha) {
        fecha = new Date().toISOString().slice(0, 10);
      }

      if (!paciente.historial) paciente.historial = [];

      paciente.historial.push({
        fecha,
        tipo,
        detalle
      });

      renderDetalle(paciente);
    });
  }

  // Enviar recordatorio (simulado)
  if (reminderBtn && reminderMsg) {
    reminderBtn.addEventListener("click", () => {
      const hoy = new Date().toLocaleDateString("es-PE");
      reminderMsg.textContent = `Mensaje de recordatorio enviado a ${paciente.dueno} (demo) el ${hoy}.`;
    });
  }
}

// ------------------------------
// Registro rápido (formulario principal)
// ------------------------------
function setupFormulario() {
  const form = document.getElementById("patient-form");
  const msg = document.getElementById("form-message");
  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("petName").value.trim();
    const tipo = document.getElementById("petType").value;
    const dueno = document.getElementById("ownerName").value.trim();
    const tratamiento = document.getElementById("treatmentType").value.trim();
    const pesoStr = document.getElementById("weight").value;
    const proximoControl = document.getElementById("nextControl").value;
    const notas = document.getElementById("notes").value.trim();

    if (!nombre || !tipo || !dueno || !tratamiento || !proximoControl) {
      msg.textContent =
        "Por favor completa los campos obligatorios (nombre, tipo, dueño, tratamiento y fecha).";
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      codigo: generarCodigoPaciente(),
      nombre,
      tipo,
      dueno,
      tratamiento,
      peso: pesoStr ? parseFloat(pesoStr) : null,
      proximoControl,
      notas,
      creado: new Date().toISOString().slice(0, 10),
      historial: [
        {
          fecha: new Date().toISOString().slice(0, 10),
          tipo: "Registro inicial",
          detalle: "Registro inicial del tratamiento en la demo del sistema."
        }
      ]
    };

    pacientes.push(nuevoPaciente);
    form.reset();
    msg.textContent = `Se registró el tratamiento demo de ${nombre}. Ya aparece en la tabla y en el resumen.`;

    actualizarResumen();
    renderTabla();
  });
}

// ------------------------------
// Tabla: click en filas y botón de control
// ------------------------------
function setupTablaEventos() {
  const tbody = document.getElementById("patients-body");
  if (!tbody) return;

  tbody.addEventListener("click", (e) => {
    const target = e.target;

    // 1) Click en botón "Control realizado"
    if (target.matches(".table-action-btn")) {
      const id = parseInt(target.getAttribute("data-id"), 10);
      const paciente = pacientes.find((p) => p.id === id);
      if (paciente) {
        // Simulamos que el siguiente control es en 7 días
        const hoy = new Date();
        const nuevaFecha = new Date(
          hoy.getTime() + 7 * 24 * 60 * 60 * 1000
        );
        const yyyy = nuevaFecha.getFullYear();
        const mm = String(nuevaFecha.getMonth() + 1).padStart(2, "0");
        const dd = String(nuevaFecha.getDate()).padStart(2, "0");
        paciente.proximoControl = `${yyyy}-${mm}-${dd}`;
      }
      actualizarResumen();
      renderTabla();
      return;
    }

    // 2) Click en fila para ver detalle
    const fila = target.closest("tr[data-id]");
    if (fila) {
      const id = parseInt(fila.getAttribute("data-id"), 10);
      const paciente = pacientes.find((p) => p.id === id);
      renderDetalle(paciente);
    }
  });
}

// ------------------------------
// Filtros por estado
// ------------------------------
function setupFiltros() {
  const btns = document.querySelectorAll(".filter-btn");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");

      const estado = btn.getAttribute("data-filter");
      filtroEstado = estado === "todos" ? "todos" : estado;

      renderTabla();
      renderDetalle(null);
    });
  });
}

// ------------------------------
// Buscador por ID / mascota / dueño
// ------------------------------
function setupBuscador() {
  const input = document.getElementById("search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    textoBusqueda = e.target.value;
    renderTabla();
    // Cuando cambias la búsqueda, limpiamos el detalle
    renderDetalle(null);
  });
}


// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  actualizarResumen();
  renderTabla();
  renderDetalle(null);
  setupFormulario();
  setupTablaEventos();
  setupFiltros();
  setupBuscador();
});
