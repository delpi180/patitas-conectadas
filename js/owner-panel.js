// ============================================
// PAPITAS CONECTADAS · PANEL DUEÑO (DEMO)
// Más dinámico: registrar mascotas, reservar servicios, vet detalle
// ============================================

// "Base de datos" simulada para el demo
const ownerDb = {
  owner: {
    id: 1,
    name: "María Torres",
    email: "maria.demo@papitas.com",
    points: 320,
    mainPetId: 1
  },

  vets: [
    {
      id: 1,
      name: "Veterinaria Mauricci",
      distanceKm: 1.2,
      city: "Trujillo",
      rating: 4.8,
      isFavorite: true,
      benefits: [
        "Historia clínica digital completa",
        "Recordatorios por WhatsApp",
        "Uso de puntos PAPITAS"
      ]
    },
    {
      id: 2,
      name: "Veterinaria El Guerrero",
      distanceKm: 3.5,
      city: "Trujillo",
      rating: 4.5,
      isFavorite: true,
      benefits: [
        "Vacunas y cirugías con seguimiento",
        "Descuentos por tratamientos completos",
        "Marketplace de productos"
      ]
    },
    {
      id: 3,
      name: "Clínica Vet Vida Feliz",
      distanceKm: 5.0,
      city: "La Esperanza",
      rating: 4.3,
      isFavorite: false,
      benefits: [
        "Servicios de grooming",
        "Paquetes senior para mascotas mayores",
        "Acepta puntos PAPITAS"
      ]
    }
  ],

  pets: [
    {
      id: 1,
      name: "Luna",
      species: "Perro",
      breed: "Labrador Retriever",
      ageYears: 2.3,
      weightKg: 22.5,
      sizeCategory: "Grande",
      photo: "luna.jpg",
      mainVetId: 1,
      treatment: {
        name: "Plan de vacunas cachorros completivo",
        progress: 70
      },
      nextAppointment: {
        dateTime: "2025-11-28T10:30:00",
        vetId: 1,
        reason: "Vacuna sextuple 2da dosis"
      },
      history: [
        {
          date: "2025-11-15",
          type: "Vacuna",
          vetId: 1,
          summary: "Primera dosis de vacuna sextuple, sin reacción adversa."
        },
        {
          date: "2025-10-20",
          type: "Control",
          vetId: 1,
          summary: "Revisión general. Se detecta excelente condición física."
        }
      ]
    },
    {
      id: 2,
      name: "Michi",
      species: "Gato",
      breed: "Siames",
      ageYears: 1.8,
      weightKg: 4.2,
      sizeCategory: "Pequeño",
      photo: "michi.jpg",
      mainVetId: 2,
      treatment: {
        name: "Desparasitación interna y externa",
        progress: 40
      },
      nextAppointment: {
        dateTime: "2025-11-30T17:00:00",
        vetId: 2,
        reason: "Control post-desparasitación"
      },
      history: [
        {
          date: "2025-11-10",
          type: "Desparasitación",
          vetId: 2,
          summary: "Dosis inicial de desparasitación interna."
        }
      ]
    }
  ],

  appointments: [
    // próximas
    {
      id: 1,
      petId: 1,
      vetId: 1,
      dateTime: "2025-11-28T10:30:00",
      status: "PROGRAMADA",
      reason: "Vacuna sextuple 2da dosis"
    },
    {
      id: 2,
      petId: 2,
      vetId: 2,
      dateTime: "2025-11-30T17:00:00",
      status: "PROGRAMADA",
      reason: "Control post-desparasitación"
    },
    // pasadas
    {
      id: 3,
      petId: 1,
      vetId: 1,
      dateTime: "2025-11-15T09:30:00",
      status: "REALIZADA",
      reason: "Vacuna sextuple 1ra dosis"
    },
    {
      id: 4,
      petId: 2,
      vetId: 2,
      dateTime: "2025-11-10T16:00:00",
      status: "REALIZADA",
      reason: "Desparasitación interna"
    }
  ],

  // Marketplace extendido: más opciones por vet
  marketplace: [
    {
      id: 1,
      vetId: 1,
      name: "Vacuna sextuple",
      type: "Servicio",
      price: 75.0,
      description: "Esquema de vacuna sextuple con registro digital y recordatorio."
    },
    {
      id: 2,
      vetId: 1,
      name: "Baño medicado",
      type: "Servicio",
      price: 45.0,
      description: "Baño para piel sensible con productos hipoalergénicos."
    },
    {
      id: 3,
      vetId: 1,
      name: "Consulta general",
      type: "Servicio",
      price: 60.0,
      description: "Revisión completa, peso, temperatura y plan de salud."
    },
    {
      id: 4,
      vetId: 2,
      name: "Desparasitante interno",
      type: "Producto",
      price: 35.0,
      description: "Desparasitación interna según peso de la mascota."
    },
    {
      id: 5,
      vetId: 2,
      name: "Kit dental mascota",
      type: "Producto",
      price: 40.0,
      description: "Cepillo + pasta dental especial para perros y gatos."
    },
    {
      id: 6,
      vetId: 2,
      name: "Baño y corte de uñas",
      type: "Servicio",
      price: 55.0,
      description: "Baño estándar con corte de uñas y limpieza de oídos."
    },
    {
      id: 7,
      vetId: 3,
      name: "Paquete Senior",
      type: "Servicio",
      price: 150.0,
      description: "Chequeo completo para mascotas mayores (analíticas + control)."
    },
    {
      id: 8,
      vetId: 3,
      name: "Grooming completo",
      type: "Servicio",
      price: 80.0,
      description: "Baño, corte de pelo, uñas y limpieza de oídos."
    }
  ],

  points: {
    current: 320,
    movements: [
      {
        date: "2025-11-15",
        concept: "Vacuna sextuple Luna",
        points: +75
      },
      {
        date: "2025-11-10",
        concept: "Desparasitación Michi",
        points: +40
      },
      {
        date: "2025-10-25",
        concept: "Canje de shampoo medicado",
        points: -30
      }
    ],
    rules: [
      "Ganas 1 punto por cada S/ 1 consumido en veterinarias afiliadas.",
      "Puedes canjear puntos por baños, vacunas o productos seleccionados.",
      "Los puntos son compartidos entre todas tus mascotas.",
      "Los puntos se pueden usar en cualquier veterinaria afiliada a PAPITAS CONECTADAS."
    ]
  }
};

// =========================================
// UTILIDADES
// =========================================

function findVetById(id) {
  return ownerDb.vets.find((v) => v.id === id) || null;
}

function findPetById(id) {
  return ownerDb.pets.find((p) => p.id === id) || null;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = d.getFullYear();
  return `${dd}/${mm}/${yy}`;
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yy} ${hh}:${min}`;
}

function formatMoney(amount) {
  return `S/ ${amount.toFixed(2)}`;
}

function getNextId(items) {
  if (!items.length) return 1;
  return Math.max(...items.map((i) => i.id)) + 1;
}

// recomendaciones simples según edad y progreso
function buildRecommendations(pet) {
  const recs = [];
  if (!pet) return recs;

  recs.push(`💉 Mantén el plan de vacunas al día para ${pet.name}.`);

  if (pet.treatment && pet.treatment.progress < 50) {
    recs.push(
      `📆 Completa el tratamiento "${pet.treatment.name}" para evitar retrocesos en la salud de ${pet.name}.`
    );
  }
  if (pet.ageYears > 5) {
    recs.push(
      `🧓 ${pet.name} es una mascota senior, se recomienda un chequeo general cada 6 meses.`
    );
  } else {
    recs.push(
      `⚽ ${pet.name} aún es joven, aprovecha para incluir rutinas de ejercicio diarias.`
    );
  }

  if (pet.species === "Perro") {
    recs.push("🦷 Programa una limpieza dental anual para prevenir sarro.");
  } else if (pet.species === "Gato") {
    recs.push("🏠 Revisa el arenero y agua fresca diariamente para tu gato.");
  }

  return recs;
}

// =========================================
// MODAL (registro mascota / reservar servicio)
// =========================================

const modalOverlay = document.getElementById("modal-overlay-owner");
const modalTitle = document.getElementById("modal-owner-title");
const modalForm = document.getElementById("modal-owner-form");
const modalClose = document.getElementById("modal-owner-close");
const modalCancel = document.getElementById("modal-owner-cancel");

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

  if (mode === "newPet") {
    modalTitle.textContent = "Registrar nueva mascota";
    const vetOptions = ownerDb.vets
      .map((v) => `<option value="${v.id}">${v.name}</option>`)
      .join("");

    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Nombre de la mascota *</label>
        <input name="name" required />
      </div>
      <div class="modal-field">
        <label>Especie *</label>
        <select name="species" required>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div class="modal-field">
        <label>Raza</label>
        <input name="breed" placeholder="Labrador, Siames, etc." />
      </div>
      <div class="modal-field">
        <label>Edad (años)</label>
        <input type="number" step="0.1" min="0" name="ageYears" placeholder="Ej: 2.5" />
      </div>
      <div class="modal-field">
        <label>Peso (kg)</label>
        <input type="number" step="0.1" min="0" name="weightKg" placeholder="Ej: 8.2" />
      </div>
      <div class="modal-field">
        <label>Tamaño</label>
        <input name="sizeCategory" placeholder="Pequeño, mediano, grande..." />
      </div>
      <div class="modal-field">
        <label>Veterinaria principal</label>
        <select name="mainVetId">
          <option value="">Selecciona una veterinaria...</option>
          ${vetOptions}
        </select>
      </div>
      <div class="modal-field">
        <label>Nombre de archivo de foto</label>
        <input name="photo" placeholder="luna.jpg (en img/pets)" />
      </div>
    `;
  }

  if (mode === "reserveService" && payload) {
    const vet = findVetById(payload.vetId);
    const petOptions = ownerDb.pets
      .map((p) => `<option value="${p.id}">${p.name}</option>`)
      .join("");

    modalTitle.textContent = `Reservar ${payload.serviceName}`;
    modalForm.innerHTML = `
      <div class="modal-field">
        <label>Mascota *</label>
        <select name="petId" required>
          <option value="">Selecciona una mascota...</option>
          ${petOptions}
        </select>
      </div>
      <div class="modal-field">
        <label>Tipo de reserva *</label>
        <select name="reserveType" required>
          <option value="Cita de control">Cita de control</option>
          <option value="Baño">Baño</option>
          <option value="Emergencia">Emergencia</option>
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
        <label>Veterinaria</label>
        <input value="${vet ? vet.name : ""}" disabled />
      </div>
      <div class="modal-field">
        <label>Notas adicionales</label>
        <textarea name="notes" placeholder="Ej: mi mascota es un poco nerviosa..."></textarea>
      </div>
    `;
  }
}

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(modalForm).entries());

  switch (modalState.mode) {
    case "newPet":
      saveNewPet(data);
      break;
    case "reserveService":
      saveNewReservation(data, modalState.payload);
      break;
  }

  closeModal();
});

// =========================================
// NAVEGACIÓN
// =========================================

function setupNavigation() {
  const navItems = document.querySelectorAll(".owner-nav__item");
  const sections = document.querySelectorAll(".owner-section");

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");

      navItems.forEach((b) =>
        b.classList.remove("owner-nav__item--active")
      );
      btn.classList.add("owner-nav__item--active");

      sections.forEach((s) => {
        const id = s.id.replace("section-", "");
        s.classList.toggle("owner-section--active", id === section);
      });
    });
  });
}

// =========================================
// DASHBOARD
// =========================================

function renderDashboard() {
  const owner = ownerDb.owner;
  const mainPet = findPetById(owner.mainPetId);

  const elOwnerName = document.getElementById("owner-name");
  const elOwnerPointsLabel = document.getElementById("owner-points-label");
  const elMainPetName = document.getElementById("dashboard-main-pet-name");
  const elMainPetVet = document.getElementById("dashboard-main-pet-vet");
  const elNextAppt = document.getElementById("dashboard-next-appointment");
  const elProgress = document.getElementById("dashboard-treatment-progress");
  const elTreatmentLabel = document.getElementById("dashboard-treatment-label");
  const elPoints = document.getElementById("dashboard-points");
  const elRecs = document.getElementById("dashboard-recommendations");
  const elFavVets = document.getElementById("dashboard-fav-vets");

  if (elOwnerName) elOwnerName.textContent = owner.name;
  if (elOwnerPointsLabel)
    elOwnerPointsLabel.textContent = `⭐ ${ownerDb.points.current} puntos`;

  if (mainPet) {
    if (elMainPetName)
      elMainPetName.textContent = `${mainPet.name} ${
        mainPet.species === "Perro" ? "🐶" : "🐱"
      }`;

    const vet = findVetById(mainPet.mainVetId);
    if (elMainPetVet)
      elMainPetVet.textContent = `Veterinaria principal: ${
        vet ? vet.name : "No asignada"
      }`;

    if (mainPet.nextAppointment && elNextAppt) {
      const vetAppt = findVetById(mainPet.nextAppointment.vetId);
      elNextAppt.textContent = `${formatDateTime(
        mainPet.nextAppointment.dateTime
      )} · ${mainPet.nextAppointment.reason} · ${
        vetAppt ? vetAppt.name : ""
      }`;
    } else if (elNextAppt) {
      elNextAppt.textContent = "Sin próximas citas registradas.";
    }

    const progress = mainPet.treatment ? mainPet.treatment.progress : 0;
    if (elProgress)
      elProgress.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    if (elTreatmentLabel) {
      elTreatmentLabel.textContent = mainPet.treatment
        ? `${mainPet.treatment.name} · ${progress}% de avance`
        : "Sin tratamiento activo";
    }
  }

  if (elPoints) {
    elPoints.textContent = `⭐ ${ownerDb.points.current} puntos`;
  }

  if (elRecs) {
    const recs = mainPet ? buildRecommendations(mainPet) : [];
    elRecs.innerHTML = recs.length
      ? recs.map((r) => `<li>${r}</li>`).join("")
      : "<li>No hay recomendaciones por ahora.</li>";
  }

  if (elFavVets) {
    const favs = ownerDb.vets.filter((v) => v.isFavorite);
    elFavVets.innerHTML = favs.length
      ? favs
          .map(
            (v) => `
        <li>
          ⭐ <strong>${v.name}</strong><br/>
          <span class="owner-card__meta">
            ${v.city} · ${v.distanceKm.toFixed(1)} km · ${v.rating.toFixed(1)}★
          </span>
        </li>
      `
          )
          .join("")
      : "<li>Aún no has marcado veterinarias favoritas.</li>";
  }
}

// =========================================
// MIS MASCOTAS
// =========================================

let selectedPet = null;

function renderPetsCards() {
  const container = document.getElementById("pets-card-container");
  if (!container) return;

  container.innerHTML = ownerDb.pets
    .map((p) => {
      const vet = findVetById(p.mainVetId);
      const progress = p.treatment ? p.treatment.progress : 0;
      const ageText = `${p.ageYears.toFixed(1)} años`;

      return `
        <article class="pet-card" data-id="${p.id}">
          <img
            src="img/pets/${p.photo}"
            alt="Foto de ${p.name}"
            class="pet-card__photo"
            onerror="this.src='img/pets/default.png'"
          />
          <div class="pet-card__info">
            <h3 class="pet-card__name">${p.name}</h3>
            <p class="pet-card__meta">
              ${p.species} · ${p.breed}<br/>
              ${ageText} · ${p.weightKg.toFixed(1)} kg
            </p>
            <p class="pet-card__meta">
              Vet: ${vet ? vet.name : "Sin asignar"}
            </p>
            <span class="pet-card__tag">${
              p.treatment
                ? `Tratamiento: ${p.treatment.name}`
                : "Sin tratamiento activo"
            }</span>
            <div class="progress-bar" style="margin-top:0.25rem;">
              <div class="progress-bar__fill" style="width:${Math.min(
                Math.max(progress, 0),
                100
              )}%"></div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupPetsInteractions() {
  const container = document.getElementById("pets-card-container");
  const btnNewPet = document.getElementById("btn-new-pet");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".pet-card");
    if (!card) return;
    const id = parseInt(card.getAttribute("data-id"), 10);
    const pet = findPetById(id);
    if (!pet) return;
    selectedPet = pet;
    renderPetDetail(pet);
  });

  if (btnNewPet) {
    btnNewPet.addEventListener("click", () => openModal("newPet"));
  }
}

function renderPetDetail(pet) {
  const container = document.getElementById("pet-detail");
  if (!container) return;

  container.classList.remove("pet-detail--empty");

  const vet = findVetById(pet.mainVetId);
  const ageText = `${pet.ageYears.toFixed(1)} años`;
  const weightText = `${pet.weightKg.toFixed(1)} kg`;
  const sizeText = pet.sizeCategory || "No registrado";
  const progress = pet.treatment ? pet.treatment.progress : 0;
  const treatmentName = pet.treatment
    ? pet.treatment.name
    : "Sin tratamiento activo";
  const nextText = pet.nextAppointment
    ? `${formatDateTime(pet.nextAppointment.dateTime)} · ${
        pet.nextAppointment.reason
      }`
    : "Sin próxima cita agendada.";

  const historyItems =
    pet.history && pet.history.length
      ? pet.history
          .map((h) => {
            const vetH = findVetById(h.vetId);
            return `
          <li>
            <span class="owner-card__meta">
              ${formatDate(h.date)} · ${h.type} · ${
              vetH ? vetH.name : "Veterinaria"
            }
            </span><br/>
            <span>${h.summary}</span>
          </li>
        `;
          })
          .join("")
      : "<li>No hay entradas en la historia clínica.</li>";

  const recs = buildRecommendations(pet);

  container.innerHTML = `
    <div class="pet-detail__header">
      <div>
        <div class="pet-detail__title">${pet.name} (${pet.species})</div>
        <p class="pet-detail__meta">
          Raza: ${pet.breed} · Edad: ${ageText} · Peso: ${weightText} · Tamaño: ${sizeText}<br/>
          Veterinaria principal: ${vet ? vet.name : "Sin asignar"}
        </p>
      </div>
      <div>
        <span class="badge badge--ok">Historia clínica digital</span>
      </div>
    </div>

    <div class="pet-detail__body">
      <div class="pet-detail-block">
        <h4>Tratamiento y seguimiento</h4>
        <p><strong>Tratamiento actual:</strong> ${treatmentName}</p>
        <div class="progress-bar">
          <div class="progress-bar__fill" style="width:${Math.min(
            Math.max(progress, 0),
            100
          )}%"></div>
        </div>
        <p class="pet-detail__meta">Avance: ${progress}%</p>

        <h4 style="margin-top:0.5rem;">Próxima cita</h4>
        <p class="pet-detail__meta">${nextText}</p>

        <h4 style="margin-top:0.5rem;">Recomendaciones</h4>
        <ul class="owner-list">
          ${recs.map((r) => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <div class="pet-detail-block">
        <h4>Historia clínica</h4>
        <ul class="owner-list pet-detail-history">
          ${historyItems}
        </ul>
      </div>
    </div>
  `;
}

function saveNewPet(data) {
  const newPet = {
    id: getNextId(ownerDb.pets),
    name: data.name.trim(),
    species: data.species,
    breed: (data.breed || "").trim() || "Sin raza registrada",
    ageYears: data.ageYears ? parseFloat(data.ageYears) : 0,
    weightKg: data.weightKg ? parseFloat(data.weightKg) : 0,
    sizeCategory: (data.sizeCategory || "").trim() || "No registrado",
    photo: (data.photo || "default.png").trim(),
    mainVetId: data.mainVetId ? parseInt(data.mainVetId, 10) : null,
    treatment: null,
    nextAppointment: null,
    history: []
  };

  ownerDb.pets.push(newPet);

  // si no hay mascota principal, la nueva pasa a ser principal
  if (!ownerDb.owner.mainPetId) {
    ownerDb.owner.mainPetId = newPet.id;
  }

  renderPetsCards();
  renderDashboard();
}

// =========================================
// CITAS
// =========================================

function renderAppointments() {
  const upcomingList = document.getElementById("appointments-upcoming");
  const pastList = document.getElementById("appointments-past");
  if (!upcomingList || !pastList) return;

  const now = new Date();

  const upcoming = ownerDb.appointments.filter(
    (a) => new Date(a.dateTime) >= now
  );
  const past = ownerDb.appointments.filter(
    (a) => new Date(a.dateTime) < now
  );

  upcoming.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
  past.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

  upcomingList.innerHTML = upcoming.length
    ? upcoming
        .map((a) => {
          const pet = findPetById(a.petId);
          const vet = findVetById(a.vetId);
          return `
        <li>
          <strong>${pet ? pet.name : "Mascota"}</strong><br/>
          <span class="owner-card__meta">
            ${formatDateTime(a.dateTime)} · ${a.reason}<br/>
            ${vet ? vet.name : ""}
          </span>
        </li>
      `;
        })
        .join("")
    : "<li>No hay citas próximas.</li>";

  pastList.innerHTML = past.length
    ? past
        .map((a) => {
          const pet = findPetById(a.petId);
          const vet = findVetById(a.vetId);
          return `
        <li>
          <strong>${pet ? pet.name : "Mascota"}</strong><br/>
          <span class="owner-card__meta">
            ${formatDateTime(a.dateTime)} · ${a.reason}<br/>
            ${vet ? vet.name : ""} · ${
              a.status === "REALIZADA" ? "✅ Realizada" : a.status
            }
          </span>
        </li>
      `;
        })
        .join("")
    : "<li>Todavía no tienes citas anteriores registradas.</li>";
}

// =========================================
// VETERINARIAS
// =========================================

let selectedVet = null;

function renderVets() {
  const container = document.getElementById("vets-list");
  const pointsVets = document.getElementById("points-vets");
  if (!container) return;

  container.innerHTML = ownerDb.vets
    .map((v) => {
      const favTag = v.isFavorite ? "⭐ Favorita" : "Vet afiliada";
      const benefits = v.benefits.map((b) => `<li>${b}</li>`).join("");
      return `
        <article class="vet-card" data-id="${v.id}">
          <h3 class="vet-card__name">${v.name}</h3>
          <p class="vet-card__meta">
            📍 ${v.city} · ${v.distanceKm.toFixed(1)} km<br/>
            ⭐ ${v.rating.toFixed(1)} / 5.0
          </p>
          <span class="vet-card__tag">${favTag}</span>
          <ul class="owner-list" style="margin-top:0.4rem;">
            ${benefits}
          </ul>
        </article>
      `;
    })
    .join("");

  if (pointsVets) {
    pointsVets.innerHTML = ownerDb.vets
      .map(
        (v) => `
      <li>
        <strong>${v.name}</strong> · ${v.city} · Acepta puntos PAPITAS.
      </li>
    `
      )
      .join("");
  }
}

function setupVetsInteractions() {
  const container = document.getElementById("vets-list");
  const detail = document.getElementById("vet-detail");
  if (!container || !detail) return;

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".vet-card");
    if (!card) return;
    const id = parseInt(card.getAttribute("data-id"), 10);
    const vet = findVetById(id);
    if (!vet) return;
    selectedVet = vet;
    renderVetDetail(vet);
  });

  detail.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='reserve-service']");
    if (!btn || !selectedVet) return;

    const serviceName = btn.getAttribute("data-service-name");
    openModal("reserveService", {
      vetId: selectedVet.id,
      serviceName
    });
  });
}

function renderVetDetail(vet) {
  const container = document.getElementById("vet-detail");
  if (!container) return;

  container.classList.remove("vet-detail--empty");

  const vetServices = ownerDb.marketplace.filter(
    (m) => m.vetId === vet.id
  );

  const servicesHtml = vetServices.length
    ? vetServices
        .map(
          (s) => `
      <li>
        <strong>${s.name}</strong> · ${s.type} · ${formatMoney(s.price)}<br/>
        <span class="vet-detail__meta">${s.description}</span><br/>
        <button class="btn btn--secondary" data-action="reserve-service" data-service-name="${s.name}">
          📅 Reservar
        </button>
      </li>
    `
        )
        .join("")
    : "<li>Esta veterinaria aún no tiene servicios registrados en el marketplace.</li>";

  container.innerHTML = `
    <h3 class="vet-detail__title">${vet.name}</h3>
    <p class="vet-detail__meta">
      📍 ${vet.city} · ${vet.distanceKm.toFixed(1)} km · ⭐ ${vet.rating.toFixed(
    1
  )} / 5.0
    </p>

    <h4>Servicios y productos disponibles</h4>
    <ul class="owner-list">
      ${servicesHtml}
    </ul>

    <p class="vet-detail__meta" style="margin-top:0.4rem;">
      Puedes usar tus puntos PAPITAS en esta veterinaria para obtener descuentos en servicios seleccionados.
    </p>
  `;
}

// =========================================
// MARKETPLACE
// =========================================

function renderMarketplaceFilter() {
  const select = document.getElementById("marketplace-filter-vet");
  if (!select) return;

  const options = ownerDb.vets
    .map((v) => `<option value="${v.id}">${v.name}</option>`)
    .join("");

  select.insertAdjacentHTML("beforeend", options);

  select.addEventListener("change", renderMarketplace);
}

function renderMarketplace() {
  const container = document.getElementById("marketplace-list");
  const select = document.getElementById("marketplace-filter-vet");
  if (!container || !select) return;

  const filterVet = select.value;

  const items = ownerDb.marketplace.filter(
    (m) => filterVet === "ALL" || String(m.vetId) === filterVet
  );

  container.innerHTML = items.length
    ? items
        .map((item) => {
          const vet = findVetById(item.vetId);
          return `
        <article class="market-card">
          <h3 class="market-card__title">${item.name}</h3>
          <p class="market-card__meta">
            ${item.type} · ${vet ? vet.name : ""}
          </p>
          <p class="market-card__meta">${item.description}</p>
          <p class="market-card__price">${formatMoney(item.price)}</p>
          <p class="owner-card__meta">
            💡 Simulación: puedes reservar este servicio desde la sección de "Veterinarias".
          </p>
        </article>
      `;
        })
        .join("")
    : "<p>No hay productos disponibles para este filtro.</p>";
}

// =========================================
// PUNTOS
// =========================================

function renderPoints() {
  const summary = document.getElementById("points-summary");
  const rulesList = document.getElementById("points-rules");
  const movList = document.getElementById("points-movements");
  const ownerPoints = ownerDb.points.current;

  if (summary) {
    summary.textContent = `Actualmente tienes ⭐ ${ownerPoints} puntos disponibles. 
Los puntos se generan automáticamente según tus consumos en veterinarias afiliadas.`;
  }

  if (rulesList) {
    rulesList.innerHTML = ownerDb.points.rules
      .map((r) => `<li>${r}</li>`)
      .join("");
  }

  if (movList) {
    movList.innerHTML = ownerDb.points.movements
      .map((m) => {
        const sign = m.points > 0 ? "+" : "";
        const badgeClass =
          m.points > 0 ? "badge--ok" : m.points < 0 ? "badge--danger" : "badge--warn";
        return `
        <li>
          <span class="owner-card__meta">
            ${formatDate(m.date)} · ${m.concept}
          </span><br/>
          <span class="badge ${badgeClass}">${sign}${m.points} pts</span>
        </li>
      `;
      })
      .join("");
  }
}

// =========================================
// GUARDAR RESERVA
// =========================================

function saveNewReservation(data, payload) {
  const petId = parseInt(data.petId, 10);
  const vetId = payload.vetId;
  const pet = findPetById(petId);
  const vet = findVetById(vetId);
  if (!pet || !vet) return;

  const dateTime = `${data.date}T${data.time}:00`;
  const reason = `${payload.serviceName} · ${data.reserveType}`;

  ownerDb.appointments.push({
    id: getNextId(ownerDb.appointments),
    petId,
    vetId,
    dateTime,
    status: "PROGRAMADA",
    reason
  });

  // Actualizar próxima cita de esa mascota (si es la más cercana)
  const apptDate = new Date(dateTime);
  if (
    !pet.nextAppointment ||
    new Date(pet.nextAppointment.dateTime) > apptDate
  ) {
    pet.nextAppointment = {
      dateTime,
      vetId,
      reason
    };
  }

  // Sumar puntos simulados
  ownerDb.points.current += 10;
  ownerDb.points.movements.unshift({
    date: data.date,
    concept: `Reserva: ${reason} (${vet.name})`,
    points: +10
  });

  renderAppointments();
  renderDashboard();
  renderPoints();
}

// =========================================
// INIT
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  renderDashboard();
  renderPetsCards();
  setupPetsInteractions();
  renderAppointments();
  renderVets();
  setupVetsInteractions();
  renderMarketplaceFilter();
  renderMarketplace();
  renderPoints();
});
