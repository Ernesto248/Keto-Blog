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

export default function RecetasFaciles() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Recetas Fáciles y Deliciosas para una Dieta Keto Exitosa
        </h1>
        <p className="text-gray-600">Publicado el 15 de octubre de 2024</p>
      </header>

      <section className="mb-8">
        <img
          src="/articles/recetasketo.jpg" // Reemplaza con la URL de tu imagen
          alt="Recetas Keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">
          ¡Comer keto no tiene que ser aburrido! Aquí te compartimos tres
          recetas sencillas y deliciosas que te ayudarán a mantener el rumbo en
          tu dieta cetogénica.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Huevos Revueltos con Aguacate 🥑
        </h2>
        <p className="mb-4">
          Los huevos son un clásico en la dieta keto, y esta receta es perfecta
          para un desayuno rápido y nutritivo.
        </p>
        <img
          src="/articles/recetas/receta-1.jpg" // Reemplaza con la URL de tu imagen
          alt="Recetas Keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Ingredientes:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 huevos 🥚</li>
          <li>1 cucharada de mantequilla 🧈</li>
          <li>1 aguacate en rodajas 🥑</li>
          <li>Sal y pimienta al gusto 🧂</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instrucciones:</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>En una sartén a fuego medio, derrite la mantequilla 🧈.</li>
          <li>Bate los huevos y viértelos en la sartén.</li>
          <li>
            Cocina los huevos mientras los revuelves suavemente hasta que estén
            listos.
          </li>
          <li>
            Sirve los huevos en un plato y coloca las rodajas de aguacate 🥑 por
            encima.
          </li>
          <li>Agrega sal y pimienta 🧂 al gusto.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Pizza Keto con Base de Coliflor 🍕
        </h2>
        <p className="mb-4">
          ¿Echas de menos la pizza en la dieta keto? Esta versión saludable
          utiliza coliflor para la base y es perfecta para disfrutar sin culpa.
        </p>
        <img
          src="/articles/recetas/pizza-coliflor.jpg" // Reemplaza con la URL de tu imagen
          alt="Recetas Keto"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">Ingredientes:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 coliflor rallada 🌿</li>
          <li>1 taza de queso mozzarella 🧀</li>
          <li>1 huevo 🥚</li>
          <li>Salsa de tomate (sin azúcar) 🍅</li>
          <li>Ingredientes al gusto (pepperoni, champiñones 🍄, aceitunas)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instrucciones:</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>Precalienta el horno a 200°C (400°F) 🔥.</li>
          <li>
            Ralla la coliflor y cocínala en el microondas durante 5-8 minutos.
          </li>
          <li>
            Mezcla la coliflor cocida con el queso mozzarella 🧀 y el huevo 🥚
            hasta obtener una masa.
          </li>
          <li>
            Extiende la mezcla en una bandeja para hornear formando un círculo
            delgado.
          </li>
          <li>Hornea durante 15-20 minutos o hasta que esté dorada.</li>
          <li>Agrega la salsa de tomate 🍅 y los ingredientes deseados.</li>
          <li>
            Vuelve a hornear por otros 5-10 minutos hasta que el queso esté
            derretido.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Bombas de Grasa de Chocolate y Mantequilla de Maní 🍫
        </h2>
        <p className="mb-4">
          Estas bombas de grasa son el snack ideal para esos momentos en los que
          necesitas algo dulce, pero sin salirte de la cetosis.
        </p>
        <img
          src="/articles/recetas/receta-3.jpg" // Reemplaza con la URL de tu imagen
          alt="Recetas Keto"
          className="w-full h-auto mb-4 rounded-lg mx-auto"
        />
        <h3 className="text-xl font-semibold mb-2">Ingredientes:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1/2 taza de mantequilla de maní 🥜 (sin azúcar)</li>
          <li>2 cucharadas de cacao en polvo 🍫</li>
          <li>2 cucharadas de aceite de coco 🥥</li>
          <li>Edulcorante sin azúcar al gusto (eritritol o stevia)</li>
          <li>Extracto de vainilla (opcional) 🌿</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instrucciones:</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            Mezcla la mantequilla de maní 🥜, cacao en polvo 🍫, aceite de coco
            🥥 y edulcorante hasta obtener una mezcla homogénea.
          </li>
          <li>Si deseas, añade unas gotas de extracto de vainilla 🌿.</li>
          <li>
            Forma pequeñas bolitas con la mezcla y colócalas en una bandeja.
          </li>
          <li>
            Enfría en el congelador durante 30 minutos o hasta que estén firmes
            ❄️.
          </li>
        </ol>
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
