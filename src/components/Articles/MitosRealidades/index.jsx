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

export default function MitosRealidades() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Mitos y Realidades de la Dieta Keto: Lo Que Necesitas Saber
        </h1>
        <p className="text-gray-600">Publicado el 14 de octubre de 2024</p>
      </header>

      <section className="mb-8">
        <img
          src="/articles/fotomitos.jpg" // Reemplaza con la URL de tu imagen
          alt="Dieta Keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">
          La dieta cetogénica ha tomado fuerza en los últimos años. A
          continuación, desmentimos algunos mitos comunes sobre esta dieta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 1: La dieta keto es solo una moda pasajera
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> La dieta keto no es nueva. Fue desarrollada
          en los años 1920 como tratamiento para la epilepsia y ha sido
          utilizada durante décadas con fines terapéuticos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 2: Solo se pierde peso por la pérdida de agua
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Aunque al principio se pierde agua, la
          pérdida de peso a largo plazo en keto se debe a la quema de grasa
          debido a la cetosis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 3: Comer muchas grasas es malo para el corazón
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Las grasas saludables, como las que se
          encuentran en el aguacate 🥑 y el aceite de oliva, pueden mejorar los
          niveles de colesterol.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 4: No puedes comer frutas en la dieta keto
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Algunas frutas bajas en carbohidratos, como
          las fresas 🍓 y las frambuesas, son compatibles con la dieta keto en
          porciones moderadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 5: La cetosis es peligrosa
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Cetosis y cetoacidosis son procesos
          diferentes. La cetosis es un estado metabólico natural seguro para la
          mayoría de las personas saludables.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 6: La dieta keto no es sostenible a largo plazo
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Muchas personas encuentran la dieta keto
          sostenible a largo plazo si la adaptan a sus necesidades personales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 7: Puedes comer cualquier tipo de grasa
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> En la dieta keto, es importante centrarse
          en grasas saludables y evitar las grasas trans o procesadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 8: Solo sirve para bajar de peso
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> La dieta keto también tiene beneficios para
          el control de la diabetes, la resistencia a la insulina y otros
          problemas de salud.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 9: No puedes hacer ejercicio en keto
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Con el tiempo, muchas personas encuentran
          que tienen más energía y resistencia para el ejercicio mientras siguen
          la dieta keto.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Mito 10: La dieta keto es igual para todos
        </h2>
        <p className="mb-4">
          <strong>Realidad:</strong> Cada persona puede necesitar una versión
          diferente de la dieta keto según sus necesidades y su nivel de
          actividad física.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
        <p className="mb-4">
          La dieta keto ofrece muchos beneficios, pero también está rodeada de
          mitos. Con información adecuada y personalización, puedes disfrutar de
          sus ventajas sin caer en los malentendidos.
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
