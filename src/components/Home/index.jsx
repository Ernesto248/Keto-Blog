import React from "react";

// Datos de ejemplo para las publicaciones del blog
const publicacionesBlog = [
  {
    id: 1,
    titulo: "Comenzando con la dieta Keto",
    resumen:
      "Aprende los conceptos básicos de la dieta cetogénica y cómo comenzar tu camino hacia una mejor salud.",
    fecha: "2024-10-02",
    imagenUrl: "keto1.jpg",
    articleUrl: "/articles/getting-started",
  },
  {
    id: 2,
    titulo: "Beneficios de la dieta keto",
    resumen:
      "Descubre los numerosos beneficios que puede aportar la dieta keto a tu salud, mejorando tu bienestar general y energía diaria.",
    fecha: "2024-08-05",
    imagenUrl: "keto_nombre.jpg",
    articleUrl: "/articles/beneficios",
  },
  // Otros artículos pueden ir aquí
];

export default function Home() {
  // Función para manejar la redirección al hacer clic en "Leer más"
  const handleLeerMas = (url) => {
    window.location.href = url;
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicacionesBlog.map((publicacion) => (
          <article
            key={publicacion.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={publicacion.imagenUrl}
              alt={publicacion.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {publicacion.titulo}
              </h2>
              <p className="text-gray-600 mb-4">{publicacion.resumen}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {publicacion.fecha}
                </span>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  onClick={() => handleLeerMas(publicacion.articleUrl)}
                >
                  Leer más
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
