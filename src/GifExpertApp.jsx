import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // Para no repetir lineas iguales
    if (categories.includes(newCategory)) return;

    // Copiar el arreglo y añadir el otro valor
    setCategories([newCategory, ...categories]);

    // Segunda forma de hacerlo usando un callback
    // setCategories(cat => [...cat, 'Valorant'])

    // Si se desea poner de primer el item
    // setCategories(['Valorant', ...categories])
  };

//   console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories }

        onNewCategory={onAddCategory}
      />

      {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};

export default GifExpertApp;
