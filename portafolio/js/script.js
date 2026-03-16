console.log("JS conectado correctamente ");

const botonBuscar = document.getElementById("btnBuscarHero");
const inputBusqueda = document.getElementById("inputBusqueda");
const selectMunicipio = document.getElementById("selectMunicipio");
const items = [

  // ===== PRODUCTOS =====
  {
    categoria: "Producto",
    proveedor: "Centro Comercial Oviedo",
    ubicacion: "El Poblado, Medellín",
    municipio: "Medellín",
    descripcion: "Tienda multimarca (regalos, accesorios, moda)",
    calificacion: 4.6,
    resenas: 41018,
    direccion: "Cra. 43A #6s-15, El Poblado, Medellín"
  },
  {
    categoria: "Producto",
    proveedor: "The House Technology",
    ubicacion: "Laureles – Estadio, Medellín",
    municipio: "Medellín",
    descripcion: "Tienda de tecnología y cámaras",
    calificacion: 4.9,
    resenas: 1554,
    direccion: "Cra. 68A #43-28, Laureles – Estadio, Medellín"
  },
  {
    categoria: "Producto",
    proveedor: "Olala Tiendas",
    ubicacion: "La Candelaria, Medellín",
    municipio: "Medellín",
    descripcion: "Tienda de artículos y vajillas",
    calificacion: 4.6,
    resenas: 274,
    direccion: "Cra. 49 #52-134, La Candelaria, Medellín"
  },
  {
    categoria: "Producto",
    proveedor: "La Bodega",
    ubicacion: "Centro Textil Molino Viejo, Medellín",
    municipio: "Medellín",
    descripcion: "Tienda de ropa / moda",
    calificacion: 4.4,
    resenas: 163,
    direccion: "Calle 49 #56-15, Centro Textil Molino Viejo, Medellín"
  },
  {
    categoria: "Producto",
    proveedor: "Deportes Regol | Almacén Deportivo",
    ubicacion: "La Candelaria, Medellín",
    municipio: "Medellín",
    descripcion: "Tienda de artículos deportivos",
    calificacion: 4.5,
    resenas: 468,
    direccion: "Cra. 49 #45-95, La Candelaria, Medellín"
  },

  // ===== SERVICIOS =====
  {
    categoria: "Servicio",
    proveedor: "Plomería Express",
    ubicacion: "Medellín",
    municipio: "Medellín",
    descripcion: "Servicio de plomería a domicilio",
    calificacion: 4.8,
    resenas: 1200,
    contacto: "300-123-4567"
  },
  {
    categoria: "Servicio",
    proveedor: "Electricista Rápido",
    ubicacion: "Medellín",
    municipio: "Medellín",
    descripcion: "Servicio de electricidad a domicilio",
    calificacion: 4.7,
    resenas: 950,
    contacto: "300-987-6543"
  },
  {
    categoria: "Servicio",
    proveedor: "Jardinería Verde",
    ubicacion: "Medellín",
    municipio: "Medellín",
    descripcion: "Servicio de jardinería y mantenimiento de áreas verdes",
    calificacion: 4.6,
    resenas: 500,
    contacto: "300-555-1234"
  },
  {
    categoria: "Servicio",
    proveedor: "Colombia VIP Services",
    ubicacion: "El Poblado, Medellín",
    municipio: "Medellín",
    descripcion: "Organización de eventos / party planner",
    calificacion: 4.7,
    resenas: 58,
    direccion: "Cra. 41 #9-60, El Poblado, Medellín"
  },
  {
    categoria: "Servicio",
    proveedor: "Medellin City Services",
    ubicacion: "El Poblado, Medellín",
    municipio: "Medellín",
    descripcion: "Agencia de viajes / servicios turísticos",
    calificacion: 4.5,
    resenas: 89,
    direccion: "Cra. 38 #9 A-26, El Poblado, Medellín"
  },
  {
    categoria: "Servicio",
    proveedor: "Top 10 Tours in Medellin",
    ubicacion: "Parque Lleras, El Poblado",
    municipio: "Medellín",
    descripcion: "Operador turístico / tours",
    calificacion: 4.8,
    resenas: 54,
    direccion: "Parque Lleras, El Poblado, Medellín"
  },
  {
    categoria: "Servicio",
    proveedor: "Medellin VIP",
    ubicacion: "Medellín Centro",
    municipio: "Medellín",
    descripcion: "Agencia de tours / viajes",
    calificacion: 4.9,
    resenas: 470,
    direccion: "Cra. 43A #1A Sur-69, Medellín"
  },
  {
    categoria: "Servicio",
    proveedor: "Arkadia Shopping Center",
    ubicacion: "Belén, Medellín",
    municipio: "Medellín",
    descripcion: "Centro comercial (servicios múltiples: tiendas, entretenimiento)",
    calificacion: 4.7,
    resenas: 22763,
    direccion: "Cra. 70 #1-141, Belén, Medellín"
  }

];
const resultsContainer = document.querySelector(".results-container");

botonBuscar.addEventListener("click", function() {
    console.log("Botón buscar presionado en el hero");
    const texto =  normalizarTexto(inputBusqueda.value.trim());
    const municipio = selectMunicipio.value;

    const resultadosFiltrados = items.filter(item => {

        const proveedor = normalizarTexto(item.proveedor);
        const descripcion = normalizarTexto(item.descripcion);
        const ubicacion = normalizarTexto(item.ubicacion);
        const categoria = normalizarTexto(item.categoria);

        const coincideTexto =
            proveedor.includes(texto) ||
            descripcion.includes(texto) ||
            ubicacion.includes(texto) ||
            categoria.includes(texto);

        const coincideMunicipio =
            municipio === "" || item.municipio === municipio;

        return coincideTexto && coincideMunicipio; 
});

    renderItems(resultadosFiltrados);
});

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function renderItems(lista) {

    // Limpiar contenido anterior
    resultsContainer.innerHTML = "";

    lista.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <p><strong>Categoría:</strong> ${item.categoria}</p>
            <p><strong>Proveedor:</strong> ${item.proveedor}</p>
            <p><strong>Ubicación:</strong> ${item.ubicacion}</p>
            <p><strong>Descripción:</strong> ${item.descripcion}</p>
            <p><strong>Calificación:</strong> ⭐ ${item.calificacion} (${item.resenas} reseñas)</p>
            ${item.direccion ? `<p><strong>Dirección:</strong> ${item.direccion}</p>` : ""}
            ${item.contacto ? `<p><strong>Contacto:</strong> ${item.contacto}</p>` : ""}
        `;

        resultsContainer.appendChild(card);
    });
}
renderItems(items);