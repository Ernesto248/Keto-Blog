import React from "react";
import { NavLink } from "react-router-dom";

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
    imagenUrl: "beneficios.jpg",
    articleUrl: "/articles/beneficios",
  },
  {
    id: 3,
    titulo:
      "Método Keto Fácil: La Solución Rápida y Efectiva para Bajar de Peso",
    resumen:
      "Si estás buscando un enfoque práctico para iniciar la dieta keto, el Método Keto Fácil podría ser la solución que necesitas",
    fecha: "2024-10-13",
    imagenUrl: "kf/portada.png",
    articleUrl: "/reviews/keto-facil",
  },
  {
    id: 4,
    titulo: "Mitos y Realidades de la Dieta Keto: Lo Que Necesitas Saber",
    resumen:
      "La dieta cetogénica ha tomado fuerza en los últimos años. A continuación, desmentimos algunos mitos comunes sobre esta dieta",
    fecha: "2024-10-10",
    imagenUrl: "articles/mitos.jpg",
    articleUrl: "/articles/mitos-realidades",
  },
  {
    id: 5,
    titulo:
      "¡Descubre el Plan Keto Personalizado de MCN: Tu Aliado en la Pérdida de Peso!",
    resumen:
      "El Plan Keto Personalizado de My Custom Nutrition es la solución ideal si te has sentido abrumado o frustrado al iniciar la dieta keto sin ver resultados.",
    fecha: "2024-10-15",
    imagenUrl: "mcn/mcn.jpg",
    articleUrl: "/reviews/mcn",
  },
  // Otros artículos pueden ir aquí
];

export default function Home() {
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
                <NavLink
                  to={publicacion.articleUrl}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                  Leer más
                </NavLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
