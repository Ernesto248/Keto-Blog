import React from "react";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";

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
    review: false,
  },
  {
    id: 2,
    titulo: "Beneficios de la dieta keto",
    resumen:
      "Descubre los numerosos beneficios que puede aportar la dieta keto a tu salud, mejorando tu bienestar general y energía diaria.",
    fecha: "2024-08-05",
    imagenUrl: "beneficios.jpg",
    articleUrl: "/articles/beneficios",
    review: false,
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
    review: true,
  },
  {
    id: 4,
    titulo: "Mitos y Realidades de la Dieta Keto: Lo Que Necesitas Saber",
    resumen:
      "La dieta cetogénica ha tomado fuerza en los últimos años. A continuación, desmentimos algunos mitos comunes sobre esta dieta",
    fecha: "2024-10-10",
    imagenUrl: "articles/mitos.jpg",
    articleUrl: "/articles/mitos-realidades",
    review: false,
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
    review: true,
  },
  {
    id: 6,
    titulo: "Dieta keto vs. otras dietas: ¿Cuál es la mejor para perder peso?",
    resumen:
      "La dieta keto ha captado la atención de muchas personas en busca de resultados rápidos y efectivos. Sin embargo, no es la única opción",
    fecha: "2024-10-07",
    imagenUrl: "articles/keto-vs-dietas/keto-vs-dietas.png",
    articleUrl: "/articles/keto-vs-dietas",
    review: false,
  },
  {
    id: 7,
    titulo: "Keto en la cultura popular",
    resumen:
      "La dieta cetogénica, comúnmente conocida como keto, ha ganado una presencia significativa en la cultura popular",
    fecha: "2024-10-07",
    imagenUrl: "articles/cultura-pop/cultura-pop-article.png",
    articleUrl: "/articles/cultura-pop-keto",
    review: false,
  },
  {
    id: 8,
    titulo: "Dieta keto en el rendimiento deportivo",
    resumen:
      "La dieta keto ha ganado popularidad no solo entre aquellos que buscan perder peso, sino también entre los atletas",
    fecha: "2024-10-015",
    imagenUrl: "articles/rendimiento-deportivo/rendimiento-deportivo-keto.png",
    articleUrl: "/articles/rendimiento-deportivo-keto",
    review: false,
  },
  {
    id: 9,
    titulo: "Cómo Adaptar la Dieta Keto a tu Estilo de Vida Diario",
    resumen:
      "Con los ajustes correctos, puedes adaptar la dieta keto a tu estilo de vida diario sin grandes sacrificios.",
    fecha: "2024-10-09",
    imagenUrl: "articles/adaptar-keto/adaptar-keto.jpg",
    articleUrl: "/articles/adaptar-keto",
    review: false,
  },
  {
    id: 10,
    titulo: "Recetas Fáciles y Deliciosas para una Dieta Keto Exitosa",
    resumen:
      "¡Comer keto no tiene que ser aburrido! Aquí te compartimos tres recetas sencillas y deliciosas que te ayudarán a mantener el rumbo",
    fecha: "2024-10-08",
    imagenUrl: "articles/recetas/receta.jpg",
    articleUrl: "/articles/recetas-faciles",
    review: false,
  },
  {
    id: 11,
    titulo: "¿Es KetoMorfosis la Transformación que Estás Buscando?",
    resumen:
      "KetoMorfosis, un programa que promete una transformación integral en 30 días. Pero, ¿es realmente lo que dice ser?",
    fecha: "2024-10-17",
    imagenUrl: "/ketomorfosis/ketomorfosis.png",
    articleUrl: "/reviews/ketomorfosis",
    review: true,
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
            <div className="relative">
              <img
                src={publicacion.imagenUrl}
                alt={publicacion.titulo}
                className="w-full h-48 object-cover"
              />
              {publicacion.review && (
                <span className="flex absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-lg rounded">
                  <Star className="w-5 h-5 mr-1 mt-1" />
                  Review
                </span>
              )}
            </div>
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
