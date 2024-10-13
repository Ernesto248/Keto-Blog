import React from "react";

const articulosRelacionados = [
  { id: 1, titulo: "Los 10 mejores alimentos compatibles con Keto" },
  { id: 2, titulo: "La dieta Keto y la pérdida de peso" },
  { id: 3, titulo: "Recetas fáciles para principiantes en la dieta Keto" },
];

export default function GettingStarted() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Comenzando con la dieta Keto
        </h1>
        <p className="text-gray-600">Publicado el 15 de mayo de 2023</p>
      </header>

      <p className="mb-6 text-lg">
        La dieta cetogénica, o dieta keto, ha ganado popularidad por sus
        posibles beneficios en la pérdida de peso y la salud en general. Esta
        dieta baja en carbohidratos y alta en grasas tiene como objetivo poner
        tu cuerpo en un estado metabólico llamado cetosis. Vamos a explorar los
        conceptos básicos de la dieta keto y cómo comenzar.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Qué es la dieta Keto?</h2>
        <p className="mb-4">
          La dieta keto es una dieta baja en carbohidratos y alta en grasas que
          reduce drásticamente la ingesta de carbohidratos y los reemplaza con
          grasas. Esta reducción de carbohidratos pone a tu cuerpo en un estado
          metabólico llamado cetosis, donde se vuelve muy eficiente en quemar
          grasa como fuente de energía.
        </p>
        <p className="mb-4">
          En una dieta keto, la ingesta de macronutrientes generalmente se ve
          así:
        </p>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                Macronutriente
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Porcentaje de calorías diarias
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Grasas</td>
              <td className="border border-gray-300 px-4 py-2">70-80%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Proteínas</td>
              <td className="border border-gray-300 px-4 py-2">20-25%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Carbohidratos
              </td>
              <td className="border border-gray-300 px-4 py-2">5-10%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Beneficios de la dieta Keto
        </h2>
        <p className="mb-4">
          La dieta keto se ha asociado con varios beneficios potenciales:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Pérdida de peso</li>
          <li>Mejora en la sensibilidad a la insulina</li>
          <li>Reducción de la inflamación</li>
          <li>Aumento de la energía y claridad mental</li>
          <li>Posibles efectos neuroprotectores</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Cómo empezar con la dieta Keto
        </h2>
        <p className="mb-4">
          Comenzar una dieta keto requiere planificación y dedicación. Aquí
          tienes algunos pasos para empezar:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Calcula tus necesidades de macronutrientes</li>
          <li>Abastécete de alimentos compatibles con keto</li>
          <li>Planifica tus comidas con antelación</li>
          <li>Mantente hidratado y complementa electrolitos</li>
          <li>Monitorea tu progreso y ajusta según sea necesario</li>
        </ol>
      </section>

      <blockquote className="border-l-4 border-green-500 pl-4 italic mb-8">
        "La clave para el éxito en la dieta keto es la consistencia y la
        paciencia. Tu cuerpo necesita tiempo para adaptarse a esta nueva forma
        de alimentarse."
      </blockquote>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
        <p className="mb-4">
          La dieta keto puede ser una forma efectiva de perder peso y mejorar la
          salud general para muchas personas. Sin embargo, es importante
          consultar con un profesional de la salud antes de comenzar cualquier
          dieta nueva, especialmente si tienes condiciones de salud
          preexistentes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Artículos Relacionados</h2>
        <ul className="list-disc pl-6">
          {articulosRelacionados.map((articulo) => (
            <li key={articulo.id} className="mb-2">
              <a
                href={`#articulo-${articulo.id}`}
                className="text-blue-600 hover:underline"
              >
                {articulo.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
