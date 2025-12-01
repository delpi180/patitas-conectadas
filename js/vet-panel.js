// =========================================================
// PAPITAS CONECTADAS · PANEL VETERINARIA (SIMULACIÓN)
// =========================================================

const db = {
  patients: [
    {
      id: 1,
      code: "PC-001",
      name: "Luna",
      ownerName: "María Torres",
      species: "Perro",
      breed: "Labrador Retriever",
      ageYears: 2.3,
      weightKg: 22.5,
      sizeCategory: "Grande",
      photo: "luna.jpg",
      status: "EN_CURSO",
      treatment: { name: "Vacuna sextuple", progress: 60 },
      nextAppointment: {
        date: "2025-11-28",
        time: "10:30",
        type: "Vacuna 2da dosis"
      },
      clinicalHistory: [
        {
          date: "2025-11-15",
          tag: "Vacuna",
          summary: "Aplicada 1ra dosis sin reacción."
        },
        {
          date: "2025-10-20",
          tag: "Control",
          summary: "Chequeo general, activa y saludable."
        }
      ]
    },
    {
      id: 2,
      code: "PC-002",
      name: "Michi",
      ownerName: "Carlos Vega",
      species: "Gato",
      breed: "Siames",
      ageYears: 1.8,
      weightKg: 4.2,
      sizeCategory: "Pequeño",
      photo: "michi.jpg",
      status: "EN_CURSO",
      treatment: { name: "Desparasitación interna", progress: 40 },
      nextAppointment: {
        date: "2025-11-30",
        time: "17:00",
        type: "Control post-desparasitación"
      },
      clinicalHistory: [
        {
          date: "2025-11-10",
          tag: "Desparasitación",
          summary: "Dosis inicial aplicada."
        }
      ]
    },
    {
      id: 3,
      code: "PC-003",
      name: "Rocky",
      ownerName: "Ana Rojas",
      species: "Perro",
      breed: "Pitbull",
      ageYears: 3.1,
      weightKg: 28.4,
      sizeCategory: "Mediano",
      photo: "rocky.jpg",
      status: "EN_CURSO",
      treatment: { name: "Post-operatorio esterilización", progress: 80 },
      nextAppointment: {
        date: "2025-11-27",
        time: "18:00",
        type: "Revisión de herida"
      },
      clinicalHistory: [
        {
          date: "2025-11-12",
          tag: "Cirugía",
          summary: "Esterilización sin complicaciones."
        },
        {
          date: "2025-11-15",
          tag: "Control",
          summary: "Cicatrización adecuada."
        }
      ]
    },
    {
      id: 4,
      code: "PC-004",
      name: "Kira",
      ownerName: "Luis Ramírez",
      species: "Perro",
      breed: "Shih Tzu",
      ageYears: 0.6,
      weightKg: 3.1,
      sizeCategory: "Pequeño",
      photo: "kira.jpg",
      status: "EN_CURSO",
      treatment: { name: "Plan de vacunas cachorros", progress: 30 },
      nextAppointment: {
        date: "2025-11-29",
        time: "09:00",
        type: "Vacuna parvovirus"
      },
      clinicalHistory: [
        {
          date: "2025-11-05",
          tag: "Vacuna",
          summary: "Primera vacuna polivalente aplicada."
        }
      ]
    },
    {
      id: 5,
      code: "PC-005",
      name: "Simba",
      ownerName: "Elena Cruz",
      species: "Gato",
      breed: "Maine Coon",
      ageYears: 4.0,
      weightKg: 6.8,
      sizeCategory: "Mediano",
      photo: "simba.jpg",
      status: "COMPLETADO",
      treatment: { name: "Vacuna antirrábica anual", progress: 100 },
      nextAppointment: {
        date: "2026-11-10",
        time: "11:30",
        type: "Refuerzo antirrábico"
      },
      clinicalHistory: [
        {
          date: "2025-11-02",
          tag: "Vacuna",
          summary: "Antirrábica aplicada sin incidentes."
        }
      ]
    },
    {
      id: 6,
      code: "PC-006",
      name: "Coco",
      ownerName: "Diego Flores",
      species: "Perro",
      breed: "Poodle",
      ageYears: 5.2,
      weightKg: 9.7,
      sizeCategory: "Pequeño",
      photo: "coco.jpg",
      status: "EN_CURSO",
      treatment: { name: "Tratamiento dermatológico", progress: 45 },
      nextAppointment: {
        date: "2025-11-26",
        time: "16:00",
        type: "Control de piel"
      },
      clinicalHistory: [
        {
          date: "2025-11-08",
          tag: "Consulta",
          summary: "Dermatitis por pulgas, se inicia medicación."
        }
      ]
    },
    {
      id: 7,
      code: "PC-007",
      name: "Nala",
      ownerName: "Rosa Medina",
      species: "Gato",
      breed: "Persa",
      ageYears: 2.1,
      weightKg: 3.8,
      sizeCategory: "Pequeño",
      photo: "nala.jpg",
      status: "SIN_TRATAMIENTO",
      treatment: null,
      nextAppointment: null,
      clinicalHistory: [
        {
          date: "2025-10-18",
          tag: "Control",
          summary: "Revisión general, se sugiere plan de vacunas."
        }
      ]
    },
    {
      id: 8,
      code: "PC-008",
      name: "Toby",
      ownerName: "José Herrera",
      species: "Perro",
      breed: "Beagle",
      ageYears: 3.9,
      weightKg: 12.5,
      sizeCategory: "Mediano",
      photo: "toby.jpg",
      status: "EN_CURSO",
      treatment: { name: "Plan obesidad canina", progress: 25 },
      nextAppointment: {
        date: "2025-11-29",
        time: "19:00",
        type: "Control de peso"
      },
      clinicalHistory: [
        {
          date: "2025-11-03",
          tag: "Consulta",
          summary: "Sobrepeso moderado, se inicia dieta."
        }
      ]
    },
    {
      id: 9,
      code: "PC-009",
      name: "Max",
      ownerName: "Carolina López",
      species: "Perro",
      breed: "Golden Retriever",
      ageYears: 6.4,
      weightKg: 31.0,
      sizeCategory: "Grande",
      photo: "max.jpg",
      status: "EN_CURSO",
      treatment: { name: "Desparasitación externa", progress: 50 },
      nextAppointment: {
        date: "2025-11-25",
        time: "15:00",
        type: "Revisión de piel"
      },
      clinicalHistory: [
        {
          date: "2025-11-07",
          tag: "Desparasitación",
          summary: "Aplicada pipeta antipulgas."
        }
      ]
    },
    {
      id: 10,
      code: "PC-010",
      name: "Lucy",
      ownerName: "Patricia Soto",
      species: "Perro",
      breed: "Chihuahua",
      ageYears: 7.1,
      weightKg: 2.9,
      sizeCategory: "Pequeño",
      photo: "lucy.jpg",
      status: "COMPLETADO",
      treatment: { name: "Limpieza dental", progress: 100 },
      nextAppointment: null,
      clinicalHistory: [
        {
          date: "2025-11-09",
          tag: "Procedimiento",
          summary: "Limpieza dental exitosa."
        }
      ]
    }
  ],

  appointments: [
    {
      id: 1,
      dateTime: "2025-11-28T10:30:00",
      petId: 1,
      type: "Vacuna sextuple - 2da dosis",
      status: "PROGRAMADA"
    },
    {
      id: 2,
      dateTime: "2025-11-27T18:00:00",
      petId: 3,
      type: "Revisión de herida",
      status: "PROGRAMADA"
    },
    {
      id: 3,
      dateTime: "2025-11-30T17:00:00",
      petId: 2,
      type: "Control post-desparasitación",
      status: "PROGRAMADA"
    },
    {
      id: 4,
      dateTime: "2025-11-29T09:00:00",
      petId: 4,
      type: "Vacuna parvovirus",
      status: "PROGRAMADA"
    }
  ],

  campaigns: [
    {
      id: 1,
      name: "Recordatorio de vacunas atrasadas",
      target: "Pacientes con esquema incompleto",
      channel: "WhatsApp",
      active: true
    },
    {
      id: 2,
      name: "Plan saludable senior",
      target: "Pacientes mayores de 7 años",
      channel: "SMS",
      active: true
    }
  ],

  inventory: [
    {
      id: 1,
      name: "Vacuna sextuple",
      category: "Vacunas",
      stock: 24,
      price: 75.0,
      active: true
    },
    {
      id: 2,
      name: "Vacuna antirrábica",
      category: "Vacunas",
      stock: 30,
      price: 65.0,
      active: true
    },
    {
      id: 3,
      name: "Desparasitante interno",
      category: "Medicamentos",
      stock: 40,
      price: 35.0,
      active: true
    },
    {
      id: 4,
      name: "Desparasitante externo",
      category: "Medicamentos",
      stock: 35,
      price: 32.0,
      active: true
    },
    {
      id: 5,
      name: "Consulta general",
      category: "Servicios",
      stock: null,
      price: 60.0,
      active: true
    }
  ],

  sales: [
    {
      id: 1,
      date: "2025-11-01",
      petId: 1,
      concept: "Consulta general",
      amount: 60.0,
      category: "Servicios"
    },
    {
      id: 2,
      date: "2025-11-02",
      petId: 5,
      concept: "Vacuna antirrábica",
      amount: 65.0,
      category: "Vacunas"
    },
    {
      id: 3,
      date: "2025-11-03",
      petId: 8,
      concept: "Consulta obesidad canina",
      amount: 60.0,
      category: "Servicios"
    },
    {
      id: 4,
      date: "2025-11-07",
      petId: 9,
      concept: "Desparasitación externa",
      amount: 35.0,
      category: "Medicamentos"
    },
    {
      id: 5,
      date: "2025-11-09",
      petId: 10,
      concept: "Limpieza dental",
      amount: 120.0,
      category: "Servicios"
    }
  ]
};

// === utilidades ===
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function formatDateTime(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

function formatMoney(amount) {
  return `S/ ${amount.toFixed(2)}`;
}

function getPatientById(id) {
  return db.patients.find((p) => p.id === id) || null;
}

function getNextId(items) {
  if (!items.length) return 1;
  return Math.max(...items.map((i) => i.id)) + 1;
}

// ofertas personalizadas
function getPersonalizedOffer(patient, totalSpent) {
  const t = patient.treatment;
  const species = patient.species || "";

  if (!t) {
    return "Invitar a un chequeo preventivo con 10% de descuento en consulta general.";
  }
  if (t.progress < 50) {
    return `Recordatorio para completar el tratamiento "${t.name}" con 15% de descuento en la próxima cita.`;
  }
  if (t.progress >= 100 && totalSpent > 200) {
    return `Aplicar cupón PAPITASVIP: 20% de descuento en baño medicado o limpieza dental.`;
  }
  if (species === "Gato") {
    return "Oferta: 10% de descuento en arena sanitaria y alimento felino premium.";
  }
  if (species === "Perro") {
    return "Oferta: combo de baño medicado + corte de uñas con precio preferencial.";
  }
  return "Enviar recomendación personalizada de control anual y vacunación.";
}

// ===== modal genérico =====
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalForm = document.getElementById("modal-form");
const modalClose = document.getElementById("modal-close");
const modalCancel = document.getElementById("modal-cancel");

let modalState = { mode: null, payload: null };

function openModal(mode, payload = null) {
  modalState.mode = mode;
  modalState.payload = payload;
  buildModalContent(mode, payload);
  modalOverlay.classList.add("modal-overlay--open");
}

function closeModal() {
  modalOverlay.classList.remove("modal-overlay--open");
  modalForm.innerHTML = "";
  modalState = { mode: null, payload: null };
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalCancel) modalCancel.addEventListener("click", closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function buildModalContent(mode, payload) {
  modalForm.innerHTML = "";

  if (mode === "newPatient") {
    modalTitle.textContent = "Registrar nuevo paciente";
    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Nombre de la mascota *</label>
        <input name="name" required />
      </div>
      <div class="modal-field">
        <label>Nombre del dueño *</label>
        <input name="ownerName" required />
      </div>
      <div class="modal-field">
        <label>Especie *</label>
        <input name="species" placeholder="Perro, Gato..." required />
      </div>
      <div class="modal-field">
        <label>Raza</label>
        <input name="breed" placeholder="Labrador, Siames, etc." />
      </div>
      <div class="modal-field">
        <label>Edad (años)</label>
        <input type="number" min="0" step="0.1" name="ageYears" placeholder="Ej: 2.5" />
      </div>
      <div class="modal-field">
        <label>Peso (kg)</label>
        <input type="number" min="0" step="0.1" name="weightKg" placeholder="Ej: 8.2" />
      </div>
      <div class="modal-field">
        <label>Tamaño</label>
        <input name="sizeCategory" placeholder="Pequeño, mediano, grande..." />
      </div>
      <div class="modal-field">
        <label>Código interno</label>
        <input name="code" placeholder="PC-011, etc." />
      </div>
      <div class="modal-field">
        <label>Nombre de archivo de foto</label>
        <input name="photo" placeholder="luna.jpg (en img/pets)" />
      </div>
    `;
  }

  if (mode === "newAppointment") {
    modalTitle.textContent = "Registrar nueva cita";
    const options = db.patients
      .map(
        (p) => `<option value="${p.id}">${p.name} · ${p.ownerName}</option>`
      )
      .join("");

    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Mascota *</label>
        <select name="petId" required>
          <option value="">Selecciona una mascota...</option>
          ${options}
        </select>
      </div>
      <div class="modal-field">
        <label>Fecha *</label>
        <input type="date" name="date" required />
      </div>
      <div class="modal-field">
        <label>Hora *</label>
        <input type="time" name="time" required />
      </div>
      <div class="modal-field">
        <label>Tipo de cita *</label>
        <input name="type" placeholder="Vacuna, Control, etc." required />
      </div>
    `;
  }

  if (mode === "addHistory" && payload) {
    modalTitle.textContent = `Nueva nota para ${payload.name}`;
    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Etiqueta *</label>
        <input name="tag" placeholder="Vacuna, Control, Cirugía..." required />
      </div>
      <div class="modal-field">
        <label>Resumen / detalle *</label>
        <textarea name="summary" required></textarea>
      </div>
    `;
  }

  if (mode === "newCampaign") {
    modalTitle.textContent = "Nueva campaña";
    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Nombre de la campaña *</label>
        <input name="name" required />
      </div>
      <div class="modal-field">
        <label>Segmento objetivo *</label>
        <input name="target" placeholder="Pacientes con vacunas atrasadas..." required />
      </div>
      <div class="modal-field">
        <label>Canal *</label>
        <select name="channel" required>
          <option value="WhatsApp">WhatsApp</option>
          <option value="SMS">SMS</option>
          <option value="Email">Email</option>
        </select>
      </div>
    `;
  }

  if (mode === "newProduct") {
    modalTitle.textContent = "Nuevo producto / servicio";
    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Nombre *</label>
        <input name="name" required />
      </div>
      <div class="modal-field">
        <label>Categoría *</label>
        <input name="category" placeholder="Vacunas, Medicamentos, Servicios..." required />
      </div>
      <div class="modal-field">
        <label>Precio (S/)*</label>
        <input type="number" step="0.01" min="0" name="price" required />
      </div>
      <div class="modal-field">
        <label>Stock (vacío si es servicio)</label>
        <input type="number" min="0" name="stock" />
      </div>
    `;
  }
}

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(modalForm).entries());

  switch (modalState.mode) {
    case "newPatient":
      saveNewPatient(data);
      break;
    case "newAppointment":
      saveNewAppointment(data);
      break;
    case "addHistory":
      saveNewHistory(data);
      break;
    case "newCampaign":
      saveNewCampaign(data);
      break;
    case "newProduct":
      saveNewProduct(data);
      break;
  }
  closeModal();
});

// ===== navegación secciones =====
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".section");

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");

      navItems.forEach((b) => b.classList.remove("nav-item--active"));
      btn.classList.add("nav-item--active");

      sections.forEach((s) => {
        const id = s.id.replace("section-", "");
        s.classList.toggle("section--active", id === section);
      });
    });
  });
}

// ===== dashboard =====
function renderDashboard() {
  const totalPatients = db.patients.length;
  const today = new Date().toISOString().slice(0, 10);

  const todayAppointments = db.appointments.filter((a) => {
    const date = a.dateTime.slice(0, 10);
    return date === today && a.status === "PROGRAMADA";
  });

  const riskTreatments = db.patients.filter(
    (p) => p.treatment && p.treatment.progress < 50
  );

  const monthStr = new Date().toISOString().slice(0, 7);
  const monthSales = db.sales.filter((s) => s.date.startsWith(monthStr));
  const monthIncome = monthSales.reduce((sum, s) => sum + s.amount, 0);

  const elPatients = document.getElementById("dash-patients");
  const elToday = document.getElementById("dash-today-appointments");
  const elRisk = document.getElementById("dash-risk-treatments");
  const elIncome = document.getElementById("dash-month-income");

  if (elPatients) elPatients.textContent = totalPatients;
  if (elToday) elToday.textContent = todayAppointments.length;
  if (elRisk) elRisk.textContent = riskTreatments.length;
  if (elIncome) elIncome.textContent = formatMoney(monthIncome);

  const upcomingList = document.getElementById("dash-upcoming-list");
  if (upcomingList) {
    const upcoming = db.appointments
      .filter((a) => a.status === "PROGRAMADA")
      .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
      .slice(0, 5);

    upcomingList.innerHTML = upcoming.length
      ? upcoming
          .map((a) => {
            const p = getPatientById(a.petId);
            return `
              <li>
                <strong>${p ? p.name : "Paciente"}</strong> ·
                ${formatDateTime(a.dateTime)} · ${a.type}
              </li>
            `;
          })
          .join("")
      : "<li>No hay próximas citas.</li>";
  }

  const alertsList = document.getElementById("dash-alerts-list");
  if (alertsList) {
    alertsList.innerHTML = riskTreatments.length
      ? riskTreatments
          .map(
            (p) => `
          <li>
            <strong>${p.name}</strong> (${p.ownerName}) ·
            Tratamiento: ${p.treatment.name} · Avance: ${p.treatment.progress}%
          </li>
        `
          )
          .join("")
      : "<li>No hay tratamientos en riesgo.</li>";
  }

  const chartAppt = document.getElementById("chart-appointments");
  if (chartAppt) {
    const counts = { PROGRAMADA: 0, REALIZADA: 0, CANCELADA: 0 };
    db.appointments.forEach((a) => {
      if (counts[a.status] !== undefined) counts[a.status] += 1;
    });
    const maxVal = Math.max(
      counts.PROGRAMADA,
      counts.REALIZADA,
      counts.CANCELADA,
      1
    );

    chartAppt.innerHTML = `
      <div class="chart__bars">
        ${["PROGRAMADA", "REALIZADA", "CANCELADA"]
          .map((key) => {
            const h = (counts[key] / maxVal) * 100;
            const label =
              key === "PROGRAMADA"
                ? "Prog."
                : key === "REALIZADA"
                ? "Realiz."
                : "Cancel.";
            return `
              <div class="chart__bar">
                <div class="chart__bar-fill" style="height:${h || 5}%"></div>
                <div class="chart__bar-label">${label}</div>
                <div class="chart__bar-value">${counts[key]}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  const chartSales = document.getElementById("chart-sales");
  if (chartSales) {
    const bySpecies = {};
    db.patients.forEach((p) => {
      if (!bySpecies[p.species]) bySpecies[p.species] = 0;
      bySpecies[p.species] += 1;
    });
    const speciesKeys = Object.keys(bySpecies);
    const maxVal = Math.max(...speciesKeys.map((k) => bySpecies[k]), 1);

    chartSales.innerHTML = `
      <div class="chart__bars">
        ${speciesKeys
          .map((sp) => {
            const h = (bySpecies[sp] / maxVal) * 100;
            return `
              <div class="chart__bar">
                <div class="chart__bar-fill" style="height:${h || 5}%"></div>
                <div class="chart__bar-label">${sp}</div>
                <div class="chart__bar-value">${bySpecies[sp]}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }
}

// ===== pacientes =====
let patientsSearchText = "";
let patientsFilterStatus = "all";
let selectedPatient = null;

function renderPatientsTable() {
  const tbody = document.getElementById("patients-table-body");
  if (!tbody) return;

  const term = patientsSearchText.trim().toLowerCase();

  const filtered = db.patients.filter((p) => {
    const matchesText =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.ownerName.toLowerCase().includes(term) ||
      (p.code && p.code.toLowerCase().includes(term));

    let status = p.status || "SIN_TRATAMIENTO";
    if (!p.treatment) status = "SIN_TRATAMIENTO";

    const matchesStatus =
      patientsFilterStatus === "all" || status === patientsFilterStatus;

    return matchesText && matchesStatus;
  });

  if (!filtered.length) {
    tbody.innerHTML =
      '<tr><td colspan="9">No se encontraron pacientes con los filtros actuales.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered
    .map((p) => {
      const status = p.status || "SIN_TRATAMIENTO";
      const badgeClass =
        status === "EN_CURSO"
          ? "badge--status-warning"
          : status === "COMPLETADO"
          ? "badge--status-ok"
          : "badge--status-danger";

      const progress = p.treatment ? p.treatment.progress : 0;
      const treatmentName = p.treatment
        ? p.treatment.name
        : "Sin tratamiento activo";

      const speciesBreed = p.breed
        ? `${p.species} · ${p.breed}`
        : p.species || "—";

      const ageText =
        typeof p.ageYears === "number"
          ? `${p.ageYears.toFixed(1)} años`
          : "—";

      return `
        <tr data-id="${p.id}">
          <td>${p.code || ""}</td>
          <td>${p.name}</td>
          <td>${p.ownerName}</td>
          <td>${speciesBreed}</td>
          <td>${ageText}</td>
          <td>${treatmentName}</td>
          <td>${progress}%</td>
          <td><span class="badge ${badgeClass}">${status}</span></td>
          <td>
            <button class="btn btn--ghost btn--xs" data-action="view">Ver detalle</button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function setupPatientsInteractions() {
  const searchInput = document.getElementById("patients-search");
  const statusSelect = document.getElementById("patients-filter-status");
  const tbody = document.getElementById("patients-table-body");
  const detail = document.getElementById("patient-detail");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      patientsSearchText = e.target.value;
      renderPatientsTable();
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      patientsFilterStatus = e.target.value;
      renderPatientsTable();
    });
  }

  if (tbody) {
    tbody.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action='view']");
      const row = e.target.closest("tr[data-id]");
      if (!row || !btn) return;
      const id = parseInt(row.getAttribute("data-id"), 10);
      const p = getPatientById(id);
      if (!p) return;
      selectedPatient = p;
      renderPatientDetail(p);
    });
  }

  if (detail) {
    detail.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='add-history']");
      if (!btn || !selectedPatient) return;
      openModal("addHistory", selectedPatient);
    });
  }
}

function renderPatientDetail(p) {
  const container = document.getElementById("patient-detail");
  if (!container) return;

  container.classList.remove("patient-detail--empty");

  const progress = p.treatment ? p.treatment.progress : 0;
  const treatmentName = p.treatment
    ? p.treatment.name
    : "Sin tratamiento activo";
  const nextText = p.nextAppointment
    ? `${formatDate(p.nextAppointment.date)} · ${p.nextAppointment.time} · ${
        p.nextAppointment.type
      }`
    : "Sin próxima cita registrada.";

  const historyItems =
    p.clinicalHistory && p.clinicalHistory.length
      ? p.clinicalHistory
          .map(
            (h) => `
        <li>
          <span class="history-meta">${formatDate(h.date)} · ${h.tag}</span><br/>
          <span>${h.summary}</span>
        </li>
      `
          )
          .join("")
      : "<li>No hay entradas en la historia clínica.</li>";

  const ageText =
    typeof p.ageYears === "number"
      ? `${p.ageYears.toFixed(1)} años`
      : "No registrado";
  const weightText =
    typeof p.weightKg === "number"
      ? `${p.weightKg.toFixed(1)} kg`
      : "No registrado";
  const sizeText = p.sizeCategory || "No registrado";
  const breedText = p.breed || "No registrado";
  const photoFile = p.photo || "default.png";
  const photoPath = `img/pets/${photoFile}`;

  container.innerHTML = `
    <div class="patient-detail__header">
      <div class="patient-detail__header-left">
        <img
          src="${photoPath}"
          alt="Foto de ${p.name}"
          class="patient-photo"
          onerror="this.src='img/pets/default.png'"
        />
        <div>
          <div class="patient-detail__title">${p.name} (${p.species || "Sin especie"})</div>
          <div class="patient-detail__meta">
            Dueño: ${p.ownerName} · Código: ${p.code || "—"}
          </div>
        </div>
      </div>
      <div>
        <span class="patient-detail__tag">Historia clínica digital</span>
      </div>
    </div>

    <div class="patient-detail__body">
      <div class="detail-block">
        <h4>Ficha del paciente</h4>
        <p><strong>Raza:</strong> ${breedText}</p>
        <p><strong>Edad:</strong> ${ageText}</p>
        <p><strong>Peso:</strong> ${weightText}</p>
        <p><strong>Tamaño:</strong> ${sizeText}</p>
      </div>

      <div class="detail-block">
        <h4>Tratamiento actual</h4>
        <p>${treatmentName}</p>
        <div class="progress-bar">
          <div class="progress-bar__fill" style="width: ${Math.min(
            Math.max(progress, 0),
            100
          )}%"></div>
        </div>
        <p class="progress-text">Avance estimado: ${progress}%</p>

        <h4 style="margin-top:0.6rem;">Próxima cita</h4>
        <p>${nextText}</p>
      </div>

      <div class="detail-block">
        <h4>Historia clínica</h4>
        <ul class="patient-detail__history-list list">
          ${historyItems}
        </ul>
        <button class="btn btn--secondary btn--xs" data-action="add-history" style="margin-top:0.4rem;">
          ➕ Agregar entrada
        </button>
      </div>
    </div>
  `;
}

function saveNewPatient(data) {
  const newPatient = {
    id: getNextId(db.patients),
    code: data.code || "",
    name: data.name.trim(),
    ownerName: data.ownerName.trim(),
    species: data.species.trim() || "Perro",
    breed: (data.breed || "").trim(),
    ageYears: data.ageYears ? parseFloat(data.ageYears) : null,
    weightKg: data.weightKg ? parseFloat(data.weightKg) : null,
    sizeCategory: (data.sizeCategory || "").trim(),
    photo: (data.photo || "default.png").trim(),
    status: "SIN_TRATAMIENTO",
    treatment: null,
    nextAppointment: null,
    clinicalHistory: []
  };
  db.patients.push(newPatient);

  renderPatientsTable();
  renderFollowup();
  renderDashboard();
}

function saveNewHistory(data) {
  if (!selectedPatient) return;
  const todayStr = new Date().toISOString().slice(0, 10);
  selectedPatient.clinicalHistory = selectedPatient.clinicalHistory || [];
  selectedPatient.clinicalHistory.unshift({
    date: todayStr,
    tag: data.tag.trim(),
    summary: data.summary.trim()
  });
  renderPatientDetail(selectedPatient);
}

// ===== citas =====
function renderAppointments() {
  const tbody = document.getElementById("appointments-table-body");
  const filterSelect = document.getElementById("appointments-filter-status");
  if (!tbody || !filterSelect) return;

  const selectedStatus = filterSelect.value;

  const rows = db.appointments
    .filter((a) => selectedStatus === "ALL" || a.status === selectedStatus)
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    .map((a) => {
      const p = getPatientById(a.petId);
      let badgeClass = "badge--status-warning";
      if (a.status === "REALIZADA") badgeClass = "badge--status-ok";
      if (a.status === "CANCELADA") badgeClass = "badge--status-danger";

      return `
        <tr data-id="${a.id}">
          <td>${formatDateTime(a.dateTime)}</td>
          <td>${p ? p.name : "Paciente"}</td>
          <td>${p ? p.ownerName : ""}</td>
          <td>${a.type}</td>
          <td><span class="badge ${badgeClass}">${a.status}</span></td>
          <td>
            <button class="btn btn--secondary btn--xs" data-action="done">Realizada</button>
            <button class="btn btn--ghost btn--xs" data-action="cancel">Cancelar</button>
          </td>
        </tr>
      `;
    })
    .join("");

  tbody.innerHTML =
    rows ||
    '<tr><td colspan="6">No hay citas con los filtros seleccionados.</td></tr>';
}

function setupAppointmentsInteractions() {
  const select = document.getElementById("appointments-filter-status");
  const tbody = document.getElementById("appointments-table-body");

  if (select) {
    select.addEventListener("change", renderAppointments);
  }

  if (tbody) {
    tbody.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const row = btn.closest("tr[data-id]");
      if (!row) return;

      const id = parseInt(row.getAttribute("data-id"), 10);
      const appt = db.appointments.find((a) => a.id === id);
      if (!appt) return;

      const action = btn.getAttribute("data-action");
      if (action === "done") {
        appt.status = "REALIZADA";

        const p = getPatientById(appt.petId);
        if (p && p.treatment) {
          p.treatment.progress = Math.min(p.treatment.progress + 20, 100);
          if (p.treatment.progress >= 100) p.status = "COMPLETADO";
        }

        db.sales.push({
          id: getNextId(db.sales),
          date: appt.dateTime.slice(0, 10),
          petId: appt.petId,
          concept: appt.type,
          amount: 60.0,
          category: "Servicios"
        });
      } else if (action === "cancel") {
        appt.status = "CANCELADA";
      }

      renderAppointments();
      renderPatientsTable();
      renderFollowup();
      renderSales();
      renderDashboard();
    });
  }
}

function saveNewAppointment(data) {
  const petId = parseInt(data.petId, 10);
  const pet = getPatientById(petId);
  if (!pet) return;

  const date = data.date;
  const time = data.time;
  const type = data.type.trim();
  const dateTime = `${date}T${time}:00`;

  const newAppointment = {
    id: getNextId(db.appointments),
    dateTime,
    petId,
    type,
    status: "PROGRAMADA"
  };

  db.appointments.push(newAppointment);

  const newDate = new Date(dateTime);
  if (
    !pet.nextAppointment ||
    new Date(`${pet.nextAppointment.date}T${pet.nextAppointment.time}:00`) >
      newDate
  ) {
    pet.nextAppointment = { date, time, type };
  }

  renderAppointments();
  renderFollowup();
  renderDashboard();
}

// ===== seguimiento =====
function renderFollowup() {
  const tbody = document.getElementById("followup-table-body");
  if (!tbody) return;

  const rows = db.patients
    .filter((p) => !!p.treatment)
    .map((p) => {
      const progress = p.treatment.progress;
      const next = p.nextAppointment
        ? `${formatDate(p.nextAppointment.date)} · ${p.nextAppointment.time}`
        : "—";

      let statusLabel = "EN_CURSO";
      let badgeClass = "badge--status-warning";
      if (progress >= 100) {
        statusLabel = "COMPLETADO";
        badgeClass = "badge--status-ok";
      } else if (progress < 40) {
        statusLabel = "EN_RIESGO";
        badgeClass = "badge--status-danger";
      }

      return `
        <tr data-id="${p.id}">
          <td>${p.name}</td>
          <td>${p.ownerName}</td>
          <td>${p.treatment.name}</td>
          <td>${next}</td>
          <td>${progress}%</td>
          <td><span class="badge ${badgeClass}">${statusLabel}</span></td>
        </tr>
      `;
    })
    .join("");

  tbody.innerHTML =
    rows ||
    '<tr><td colspan="6">No hay tratamientos activos en esta simulación.</td></tr>';
}

function setupFollowupInteractions() {
  const tbody = document.getElementById("followup-table-body");
  const detail = document.getElementById("followup-detail");
  if (!tbody || !detail) return;

  tbody.addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-id]");
    if (!row) return;
    const id = parseInt(row.getAttribute("data-id"), 10);
    const p = getPatientById(id);
    if (!p) return;
    renderFollowupDetail(p);
  });
}

function renderFollowupDetail(p) {
  const container = document.getElementById("followup-detail");
  if (!container) return;

  container.classList.remove("followup-detail--empty");

  const progress = p.treatment ? p.treatment.progress : 0;
  const nextText = p.nextAppointment
    ? `${formatDate(p.nextAppointment.date)} · ${p.nextAppointment.time} · ${
        p.nextAppointment.type
      }`
    : "Sin próxima cita registrada.";

  const purchases = db.sales.filter((s) => s.petId === p.id);
  const totalSpent = purchases.reduce((sum, s) => sum + s.amount, 0);
  const points = Math.round(totalSpent);
  const offer = getPersonalizedOffer(p, totalSpent);

  const purchasesList = !purchases.length
    ? "<li>Este paciente aún no tiene compras registradas.</li>"
    : purchases
        .map(
          (s) => `
        <li>
          <span class="history-meta">${formatDate(s.date)}</span><br/>
          <span>${s.concept} · ${formatMoney(s.amount)}</span>
        </li>
      `
        )
        .join("");

  container.innerHTML = `
    <div class="followup-detail__header">
      <div>
        <div class="followup-detail__title">${p.name} (${p.species})</div>
        <div class="followup-detail__meta">
          Dueño: ${p.ownerName}
        </div>
      </div>
      <div>
        <span class="patient-detail__tag">Seguimiento automatizado</span>
      </div>
    </div>

    <div class="followup-detail__body">
      <div class="detail-block">
        <h4>Tratamiento actual</h4>
        <p>${p.treatment ? p.treatment.name : "Sin tratamiento activo"}</p>
        <div class="progress-bar">
          <div class="progress-bar__fill" style="width:${Math.min(
            Math.max(progress, 0),
            100
          )}%"></div>
        </div>
        <p class="progress-text">Avance: ${progress}%</p>

        <h4 style="margin-top:0.6rem;">Próxima cita</h4>
        <p>${nextText}</p>

        <h4 style="margin-top:0.6rem;">Oferta personalizada sugerida</h4>
        <p class="progress-text">${offer}</p>
      </div>

      <div class="detail-block">
        <h4>Historial de compras y puntos</h4>
        <ul class="list">
          ${purchasesList}
        </ul>
        <p class="progress-text" style="margin-top:0.4rem;">
          Total consumido: ${formatMoney(totalSpent)} ·
          Puntos acumulados estimados: ${points}
        </p>
      </div>
    </div>
  `;
}

// ===== campañas =====
function renderCampaigns() {
  const list = document.getElementById("campaigns-active-list");
  if (!list) return;

  const active = db.campaigns.filter((c) => c.active);

  list.innerHTML = active.length
    ? active
        .map(
          (c) => `
      <li>
        <strong>${c.name}</strong><br/>
        <span class="history-meta">Objetivo: ${c.target} · Canal: ${c.channel}</span>
      </li>
    `
        )
        .join("")
    : "<li>No hay campañas activas.</li>";
}

function saveNewCampaign(data) {
  const campaign = {
    id: getNextId(db.campaigns),
    name: data.name.trim(),
    target: data.target.trim(),
    channel: data.channel,
    active: true
  };
  db.campaigns.push(campaign);
  renderCampaigns();
}

// ===== inventario =====
function renderInventory() {
  const tbody = document.getElementById("inventory-table-body");
  if (!tbody) return;

  const rows = db.inventory
    .map((item) => {
      const stockText =
        item.stock === null || item.stock === undefined ? "Servicio" : item.stock;
      const statusClass = item.active
        ? "badge--status-ok"
        : "badge--status-danger";
      const statusLabel = item.active ? "Activo" : "Inactivo";

      return `
        <tr>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${stockText}</td>
          <td>${formatMoney(item.price)}</td>
          <td><span class="badge ${statusClass}">${statusLabel}</span></td>
        </tr>
      `;
    })
    .join("");

  tbody.innerHTML =
    rows || '<tr><td colspan="5">No hay productos en inventario.</td></tr>';
}

function saveNewProduct(data) {
  const price = parseFloat(data.price);
  const stock =
    data.stock && data.stock.trim() !== "" ? parseInt(data.stock, 10) : null;

  const product = {
    id: getNextId(db.inventory),
    name: data.name.trim(),
    category: data.category.trim(),
    price,
    stock,
    active: true
  };

  db.inventory.push(product);
  renderInventory();
}

// ===== ventas =====
function renderSales() {
  const summaryList = document.getElementById("sales-summary-list");
  const latestList = document.getElementById("sales-latest-list");
  if (!summaryList || !latestList) return;

  const totalsByCategory = {};
  db.sales.forEach((s) => {
    if (!totalsByCategory[s.category]) {
      totalsByCategory[s.category] = 0;
    }
    totalsByCategory[s.category] += s.amount;
  });

  const totalIncome = db.sales.reduce((sum, s) => sum + s.amount, 0);
  const totalCount = db.sales.length;
  const avgTicket = totalCount ? totalIncome / totalCount : 0;

  const summaryItems = [
    `<li><strong>Ingresos totales:</strong> ${formatMoney(totalIncome)}</li>`,
    `<li><strong>Tickets registrados:</strong> ${totalCount}</li>`,
    `<li><strong>Ticket promedio:</strong> ${formatMoney(avgTicket)}</li>`,
    ...Object.keys(totalsByCategory).map(
      (cat) =>
        `<li><strong>${cat}:</strong> ${formatMoney(totalsByCategory[cat])}</li>`
    )
  ];

  summaryList.innerHTML = summaryItems.join("");

  const sortedSales = [...db.sales].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latest = sortedSales.slice(0, 8);

  latestList.innerHTML = latest.length
    ? latest
        .map((s) => {
          const p = getPatientById(s.petId);
          return `
        <li>
          <strong>${formatDate(s.date)}</strong> · ${s.concept}<br/>
          <span class="history-meta">
            Paciente: ${p ? p.name : ""} · ${formatMoney(s.amount)} · ${s.category}
          </span>
        </li>
      `;
        })
        .join("")
    : "<li>No hay ventas registradas.</li>";
}

// ===== init =====
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  renderDashboard();
  renderPatientsTable();
  setupPatientsInteractions();
  renderAppointments();
  setupAppointmentsInteractions();
  renderFollowup();
  setupFollowupInteractions();
  renderCampaigns();
  renderInventory();
  renderSales();

  const btnNewPatient = document.getElementById("btn-new-patient");
  const btnNewAppointment = document.getElementById("btn-new-appointment");
  const btnNewCampaign = document.getElementById("btn-new-campaign");
  const btnNewProduct = document.getElementById("btn-new-product");

  if (btnNewPatient)
    btnNewPatient.addEventListener("click", () => openModal("newPatient"));

  if (btnNewAppointment)
    btnNewAppointment.addEventListener("click", () =>
      openModal("newAppointment")
    );

  if (btnNewCampaign)
    btnNewCampaign.addEventListener("click", () => openModal("newCampaign"));

  if (btnNewProduct)
    btnNewProduct.addEventListener("click", () => openModal("newProduct"));
});
