import React from "react";
import { NavLink } from "react-router-dom";

const articulosRelacionados = [
  {
    id: 1,
    url: "/reviews/keto-facil",
    titulo: "Método Keto Fácil",
  },
  {
    id: 3,
    url: "/reviews/mcn",
    titulo: "Plan Keto Personalizado de MCN: Tu Aliado en la Pérdida de Peso",
  },
  {
    id: 4,
    url: "/reviews/ketomorfosis",
    titulo: "KetoMorfosis",
  },
];

export default function KetoVsDietas() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Dieta keto vs. otras dietas: ¿Cuál es la mejor para perder peso?
        </h1>
        <p className="text-gray-600">Publicado el 15 de octubre de 2024</p>
      </header>
      <section className="mb-8">
        <img
          src="/articles/keto-vs-dietas/keto-vs-dietas.png"
          alt="Comparación de dietas"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">
          La búsqueda de la dieta perfecta para perder peso puede ser
          abrumadora, con una variedad de opciones que prometen resultados
          rápidos y efectivos. Entre las más populares se encuentra la dieta
          cetogénica, o keto, que compite con otras como la dieta paleo, la
          dieta mediterránea y las dietas bajas en grasas. ¿Cuál es realmente la
          mejor para perder peso?
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dieta keto</h2>
        <p className="mb-4">
          La dieta keto se basa en una ingesta muy baja de carbohidratos y alta
          en grasas. Este enfoque pone al cuerpo en un estado de cetosis, donde
          quema grasa en lugar de glucosa para obtener energía. Estudios han
          mostrado que esta dieta puede resultar en una pérdida de peso rápida,
          especialmente en las primeras semanas.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dieta paleo</h2>
        <p className="mb-4">
          La dieta paleo promueve el consumo de alimentos que habrían estado
          disponibles para los humanos prehistóricos, como carnes magras,
          pescado, frutas, verduras, nueces y semillas, excluyendo alimentos
          procesados, azúcares y lácteos. Este enfoque puede ser efectivo para
          la pérdida de peso debido a la eliminación de alimentos procesados y
          el enfoque en alimentos integrales.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dieta mediterránea</h2>
        <p className="mb-4">
          La dieta mediterránea enfatiza el consumo de frutas, verduras, granos
          integrales, pescado y grasas saludables como el aceite de oliva. Es
          conocida por sus beneficios para la salud cardiovascular y su enfoque
          equilibrado puede ayudar a la pérdida de peso de manera sostenible.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dietas bajas en grasas</h2>
        <p className="mb-4">
          Las dietas bajas en grasas se centran en reducir el consumo de grasas
          totales, especialmente las grasas saturadas y trans. Este tipo de
          dieta ha sido popular durante décadas y puede resultar en la pérdida
          de peso, aunque algunas personas encuentran que la falta de grasas
          puede dejarles con hambre y menos satisfechas.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Comparación y conclusión
        </h2>
        <p className="mb-4">
          No existe una única dieta "mejor" para la pérdida de peso, ya que la
          efectividad puede variar según el individuo. La dieta keto puede ser
          muy efectiva para la pérdida de peso rápida, pero puede ser difícil de
          mantener a largo plazo. La dieta paleo y la mediterránea promueven
          alimentos integrales y saludables, con la mediterránea destacándose
          por sus beneficios a largo plazo y su sostenibilidad. Las dietas bajas
          en grasas pueden ser útiles, pero deben planificarse cuidadosamente
          para evitar deficiencias nutricionales.
        </p>
        <p className="mb-4">
          Es esencial consultar con un profesional de la salud antes de comenzar
          cualquier dieta para asegurarse de que sea segura y adecuada para tus
          necesidades individuales.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Artículos relacionados</h2>
        <ul className="list-disc pl-6">
          {articulosRelacionados.map((articulo) => (
            <li key={articulo.id} className="mb-2">
              <NavLink
                to={articulo.url}
                className="text-blue-600 hover:underline"
              >
                {articulo.titulo}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
