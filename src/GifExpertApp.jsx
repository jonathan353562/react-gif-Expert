import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {
  //se crea una useState para que se puede pedir y cambiar las categorias pedidas por el usuario
  const [categories, setCategories] = useState(["One Punch"]);

  //se crea una funcion lambd que se encarga de recibir la categoria y verificar si esa categoria ya ha sido buscada por el usuario
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //y si no esta agregada se agrega a la lista de categorias pero solo añadiendola primero que las demas setCategoria
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*titulo*/}
      <h1>GiftExpert</h1>
      {/* input*/}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
      <button type="">Guardar</button>
    </>
  );
}

export default GifExpertApp;
