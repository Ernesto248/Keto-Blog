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
];

export default function AdaptarKeto() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Cómo Adaptar la Dieta Keto a tu Estilo de Vida Diario
        </h1>
        <p className="text-gray-600">Publicado el 9 de octubre de 2024</p>
      </header>

      <section className="mb-8">
        <img
          src="/articles/adaptar-keto/adaptacion.png" // Reemplaza con la URL de tu imagen
          alt="Adaptar la dieta keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">
          La dieta keto es famosa por su capacidad para ayudar a perder peso y
          mejorar la salud. Sin embargo, muchos piensan que es difícil de
          mantener en el día a día. ¿La realidad? Con los ajustes correctos,
          puedes adaptar la dieta keto a tu estilo de vida diario sin grandes
          sacrificios. Aquí te explicamos cómo hacerlo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Planifica tus comidas con anticipación
        </h2>
        <p className="mb-4">
          Una de las claves para mantenerte en la dieta keto es la
          planificación. Dedica un día de la semana para organizar tus comidas.
          Asegúrate de tener siempre a mano alimentos bajos en carbohidratos
          como aguacates, nueces, carnes y verduras verdes. Esto evitará que
          caigas en la tentación de opciones no keto cuando estás apurado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Encuentra opciones keto fuera de casa
        </h2>
        <p className="mb-4">
          Comer fuera no tiene por qué ser un problema. Muchos restaurantes
          ofrecen opciones bajas en carbohidratos o permiten personalizar los
          platos. Opta por ensaladas con proteínas, elimina los panes y pide
          aderezos con base de aceite de oliva o aguacate. Incluso en fast food
          puedes elegir hamburguesas sin pan o wraps bajos en carbohidratos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Mantén snacks keto a mano
        </h2>
        <p className="mb-4">
          Evitar los carbohidratos puede ser difícil cuando tienes hambre y
          estás fuera de casa. Llevar snacks keto como nueces, semillas, queso o
          barras bajas en carbohidratos puede ser una salvación en esos
          momentos. Estos snacks no solo te ayudarán a mantenerte en cetosis,
          sino que también te darán energía entre comidas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Haz ajustes para situaciones sociales
        </h2>
        <p className="mb-4">
          Las reuniones sociales pueden ser un desafío, pero con un poco de
          preparación puedes adaptarte. Informa a tus amigos o familiares sobre
          tu dieta, y si es posible, lleva un platillo keto para compartir. En
          fiestas o reuniones, busca opciones de proteínas, ensaladas y evita
          alimentos como pan, pasta o postres con azúcar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Mantén un balance y sé flexible
        </h2>
        <p className="mb-4">
          Adaptar la dieta keto no significa que tengas que ser estricto el 100%
          del tiempo. Permítete cierta flexibilidad en ocasiones especiales o
          cuando sientas que lo necesitas. Lo importante es que vuelvas a tu
          plan keto después de esos momentos. Mantener una mentalidad flexible
          ayudará a que la dieta sea más sostenible a largo plazo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
        <p className="mb-4">
          La dieta keto puede integrarse fácilmente en tu vida diaria con un
          poco de planificación y flexibilidad. Al hacer pequeños ajustes y
          mantenerte preparado, puedes disfrutar de los beneficios de la dieta
          sin sentir que estás haciendo grandes sacrificios.
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
