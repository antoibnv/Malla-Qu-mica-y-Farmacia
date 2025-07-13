const dependencias = {
  "Química General I": ["Química General II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Biología Celular y Molecular": ["Bioquímica General y Molecular", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Morfología Humana I": ["Morfología Humana II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Matemática I": ["Matemática II", "Física aplicada a las Cs. Farmacéuticas", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Introducción a la Farmacia y las Ciencias I": ["Introducción a la Farmacia y las Ciencias II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Aprendizaje Eficiente": ["Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Química General II": ["Química Analítica Cualitativa y Cuantitativa", "Química Orgánica Farmacéutica I", "Fisicoquímica Farmacéutica", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Bioquímica General y Molecular": ["Introducción a la intervención Farmacológica I", "Taller de Formación Farmacéutica (HITO I)", "Elementos inmunes de la terapéutica", "Genética y Genómica Farmacéutica", "Práctica Profesional"],
  "Morfología Humana II": ["Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Matemática II": ["Bioestadística Farmacéutica", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Física aplicada a las Cs. Farmacéuticas": ["Fisicoquímica Farmacéutica", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Introducción a la Farmacia y las Ciencias II": ["Taller de Iniciación Farmacéutica", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Inglés I": ["Inglés II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Química Analítica Cualitativa y Cuantitativa": ["Análisis Instrumental para Cs Farmacéuticas", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Química Orgánica Farmacéutica I": ["Química Orgánica Farmacéutica II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Introducción a la intervención Farmacológica I": ["Introducción a la intervención Farmacológica II", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Bioestadística Farmacéutica": ["Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Fisicoquímica Farmacéutica": ["Análisis Instrumental para Cs Farmacéuticas", "Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Taller de Iniciación Farmacéutica": ["Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Inglés II": ["Taller de Formación Farmacéutica (HITO I)", "Práctica Profesional"],
  "Análisis Instrumental para Cs Farmacéuticas": ["Análisis de Medicamentos", "Práctica Profesional"],
  "Química Orgánica Farmacéutica II": ["Bioquímica Clínica", "Práctica Profesional"],
  "Introducción a la intervención Farmacológica II": ["Fundamentos de salud alterada y Fármacos I", "Farmacología I", "Práctica Profesional"],
  "Elementos inmunes de la terapéutica": ["Fundamentos de Microbiología y Bacteriología", "Práctica Profesional"],
  "Genética y Genómica Farmacéutica": ["Fundamentos de salud alterada y Fármacos I", "Farmacología I", "Práctica Profesional"],
  "Taller de Formación Farmacéutica (HITO I)": ["Práctica Profesional"],
  "Análisis de Medicamentos": ["Práctica Profesional"],
  "Bioquímica Clínica": ["Farmacoquímica I", "Práctica Profesional"],
  "Fundamentos de salud alterada y Fármacos I": ["Fundamentos de Salud Alterada y Fármacos II", "Práctica Profesional"],
  "Fundamentos de Microbiología y Bacteriología": ["Microbiología y Parasitología", "Práctica Profesional"],
  "Farmacología I": ["Farmacognosia", "Farmacología II", "Práctica Profesional"],
  "Farmacoquímica I": ["Farmacoquímica II", "Práctica Profesional"],
  "Farmacognosia": ["Tecnología Farmacéutica I", "Práctica Profesional"],
  "Fundamentos de Salud Alterada y Fármacos II": ["Iniciación a la Farmacia Clínica", "Práctica Profesional"],
  "Microbiología y Parasitología": ["Iniciación a la Farmacia Clínica", "Práctica Profesional"],
  "Relaciones Interpersonales": ["Gestión Farmacéutica", "Práctica Profesional"],
  "Farmacología II": ["Toxicología", "Iniciación a la Farmacia Clínica", "Práctica Profesional"],
  "Ética Cristiana": ["Práctica Profesional"],
  "Farmacoquímica II": ["Práctica Profesional"],
  "Toxicología": ["Farmacia Clínica I", "Práctica Profesional"],
  "Tecnología Farmacéutica I": ["Tecnología Farmacéutica II", "Práctica Profesional"],
  "Gestión Farmacéutica": ["Práctica Profesional"],
  "Iniciación a la Farmacia Clínica": ["Nutrición Clínica", "Biofarmacia y Farmacocinética Clínica", "Farmacia Clínica I", "Práctica Profesional"],
  "Certificación I": ["Práctica Profesional"],
  "Nutrición Clínica": ["Farmacia Asistencial", "Práctica Profesional"],
  "Electivo I": ["Electivo II", "Práctica Profesional"],
  "Tecnología Farmacéutica II": ["Farmacia Asistencial", "Práctica Profesional"],
  "Diseño Computacional": ["Práctica Profesional"],
  "Biofarmacia y Farmacocinética Clínica": ["Farmacia Clínica II", "Práctica Profesional"],
  "Farmacia Clínica I": ["Farmacia Clínica II", "Práctica Profesional"],
  "Legislación Farmacéutica": ["Práctica Profesional"],
  "Electivo II": ["Electivo III", "Práctica Profesional"],
  "Farmacia Asistencial": ["Farmacovigilancia – Farmacoeconomía", "Atención Farmacéutica", "Práctica Profesional"],
  "Manejo de Bases de Datos en Ciencias Farmacéuticas": ["Práctica Profesional"],
  "Asuntos Regulatorios": ["Práctica Profesional"],
  "Farmacia Clínica II": ["Farmacia Clínica III", "Atención Farmacéutica", "Práctica Profesional"],
  "Certificación II": ["Práctica Profesional"],
  "Electivo III": ["Práctica Profesional"],
  "Farmacovigilancia – Farmacoeconomía": ["Práctica Profesional"],
  "Farmacia Clínica III": ["Práctica Profesional"],
  "Atención Farmacéutica": ["Práctica Profesional"],
  "Metodología de Proyectos": ["Práctica Profesional"],
  "Certificación III": ["Práctica Profesional"]
};

const semestres = {
  "I Semestre": ["Química General I", "Biología Celular y Molecular", "Morfología Humana I", "Matemática I", "Introducción a la Farmacia y las Ciencias I", "Aprendizaje Eficiente"],
  "II Semestre": ["Química General II", "Bioquímica General y Molecular", "Morfología Humana II", "Matemática II", "Física aplicada a las Cs. Farmacéuticas", "Introducción a la Farmacia y las Ciencias II", "Inglés I"],
  "III Semestre": ["Química Analítica Cualitativa y Cuantitativa", "Química Orgánica Farmacéutica I", "Introducción a la intervención Farmacológica I", "Bioestadística Farmacéutica", "Fisicoquímica Farmacéutica", "Taller de Iniciación Farmacéutica", "Inglés II"],
  "IV Semestre": ["Análisis Instrumental para Cs Farmacéuticas", "Química Orgánica Farmacéutica II", "Introducción a la intervención Farmacológica II", "Elementos inmunes de la terapéutica", "Genética y Genómica Farmacéutica", "Taller de Formación Farmacéutica (HITO I)"],
  "V Semestre": ["Análisis de Medicamentos", "Bioquímica Clínica", "Fundamentos de salud alterada y Fármacos I", "Fundamentos de Microbiología y Bacteriología", "Epidemiología y Salud Pública", "Farmacología I", "Introducción a la Fe"],
  "VI Semestre": ["Farmacoquímica I", "Farmacognosia", "Fundamentos de Salud Alterada y Fármacos II", "Microbiología y Parasitología", "Relaciones Interpersonales", "Farmacología II", "Ética Cristiana"],
  "VII Semestre": ["Farmacoquímica II", "Toxicología", "Tecnología Farmacéutica I", "Gestión Farmacéutica", "Iniciación a la Farmacia Clínica", "Certificación I"],
  "VIII Semestre": ["Nutrición Clínica", "Electivo I", "Tecnología Farmacéutica II", "Diseño Computacional", "Biofarmacia y Farmacocinética Clínica", "Farmacia Clínica I", "Legislación Farmacéutica"],
  "IX Semestre": ["Electivo II", "Farmacia Asistencial", "Manejo de Bases de Datos en Ciencias Farmacéuticas", "Asuntos Regulatorios", "Farmacia Clínica II", "Certificación II"],
  "X Semestre": ["Electivo III", "Farmacovigilancia – Farmacoeconomía", "Farmacia Clínica III", "Atención Farmacéutica", "Metodología de Proyectos", "Certificación III"],
  "XI Semestre": ["Práctica Profesional"]
};
const aprobados = new Set();

function isDesbloqueado(ramo) {
  const prerequisitos = Object.entries(dependencias).filter(
    ([req, deps]) => deps.includes(ramo)
  ).map(([req]) => req);
  return prerequisitos.every(req => aprobados.has(req));
}

function toggleAprobado(ramo, element) {
  if (!isDesbloqueado(ramo)) return;

  if (aprobados.has(ramo)) {
    aprobados.delete(ramo);
    element.classList.remove("aprobado");
  } else {
    aprobados.add(ramo);
    element.classList.add("aprobado");
  }

  actualizar();
  guardarProgreso();
}

function actualizar() {
  document.querySelectorAll(".ramo").forEach(el => {
    const ramo = el.dataset.ramo;

    if (aprobados.has(ramo)) {
      el.classList.add("aprobado");
      el.classList.remove("bloqueado");
    } else if (!isDesbloqueado(ramo)) {
      el.classList.add("bloqueado");
      el.classList.remove("aprobado");
    } else {
      el.classList.remove("bloqueado", "aprobado");
    }
  });
}

function guardarProgreso() {
  localStorage.setItem("ramosAprobados", JSON.stringify(Array.from(aprobados)));
}

function cargarProgreso() {
  const data = localStorage.getItem("ramosAprobados");
  if (data) {
    const lista = JSON.parse(data);
    lista.forEach(ramo => aprobados.add(ramo));
  }
}

function render() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  Object.entries(semestres).forEach(([semestre, ramos]) => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach(ramo => {
      const el = document.createElement("div");
      el.className = "ramo";
      el.textContent = ramo;
      el.dataset.ramo = ramo;
      el.addEventListener("click", () => toggleAprobado(ramo, el));
      columna.appendChild(el);
    });

    container.appendChild(columna);
  });

  actualizar();
}

// Inicia
cargarProgreso();
render();
