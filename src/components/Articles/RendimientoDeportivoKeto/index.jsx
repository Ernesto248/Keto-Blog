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

export default function RendimientoDeportivoKeto() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Dieta keto en el rendimiento deportivo
        </h1>
        <p className="text-gray-600">Publicado el 15 de octubre de 2024</p>
      </header>
      <section className="mb-8">
        <img
          src="/articles/rendimiento-deportivo/rendimiento-deportivo-article.png" // Reemplaza con la URL de tu imagen
          alt="Rendimiento deportivo keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">
          La dieta cetogénica, o keto, ha ganado popularidad no solo entre
          aquellos que buscan perder peso, sino también entre los atletas y
          deportistas que buscan mejorar su rendimiento. Pero, ¿cómo afecta
          realmente esta dieta al rendimiento deportivo? A continuación,
          investigamos los efectos de la dieta keto en el desempeño de los
          atletas.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          La ciencia detrás de la dieta keto y el ejercicio
        </h2>
        <p className="mb-4">
          La dieta keto se basa en un consumo muy bajo de carbohidratos y alto
          en grasas, lo que lleva al cuerpo a un estado de cetosis. En cetosis,
          el cuerpo quema grasa en lugar de glucosa para obtener energía. Esto
          puede ser beneficioso para la pérdida de peso, pero el impacto en el
          rendimiento deportivo es más complejo.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Beneficios potenciales para los atletas
        </h2>
        <p className="mb-4">
          Algunos estudios han sugerido que la dieta keto puede tener varios
          beneficios para los atletas, especialmente en deportes de resistencia.
          Al adaptarse a quemar grasa como fuente principal de energía, los
          atletas pueden experimentar una mayor eficiencia energética y menos
          dependencia de los carbohidratos durante ejercicios prolongados.
          Además, la dieta keto puede ayudar a reducir la inflamación y acelerar
          la recuperación.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Desafíos y limitaciones</h2>
        <p className="mb-4">
          Sin embargo, la dieta keto no es adecuada para todos los tipos de
          deportes. En actividades de alta intensidad, donde el cuerpo
          normalmente depende de carbohidratos para obtener energía rápida, la
          falta de glucosa disponible puede limitar el rendimiento. Muchos
          atletas también reportan una disminución inicial en la fuerza y la
          potencia al adoptar la dieta keto, aunque estos efectos pueden
          disminuir a medida que el cuerpo se adapta.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Adaptación y personalización
        </h2>
        <p className="mb-4">
          Es importante que los atletas que consideran la dieta keto trabajen
          con nutricionistas y entrenadores para adaptar la dieta a sus
          necesidades específicas. La personalización puede incluir la
          incorporación de períodos estratégicos de consumo de carbohidratos
          (ciclado de carbohidratos) para apoyar entrenamientos intensos y
          competiciones.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Testimonios y estudios de caso
        </h2>
        <p className="mb-4">
          Varios atletas profesionales han adoptado la dieta keto y han
          reportado mejoras en su rendimiento y bienestar general. Sin embargo,
          es fundamental recordar que las experiencias individuales pueden
          variar y lo que funciona para un atleta puede no ser adecuado para
          otro.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
        <p className="mb-4">
          La dieta keto puede ofrecer beneficios significativos para algunos
          atletas, especialmente aquellos en deportes de resistencia. Sin
          embargo, también presenta desafíos y puede no ser la mejor opción para
          todos. La clave es la personalización y la adaptación, trabajando con
          profesionales de la salud y la nutrición para encontrar el equilibrio
          adecuado entre rendimiento y salud.
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
