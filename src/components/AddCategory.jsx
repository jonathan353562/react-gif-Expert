import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //se crea la funcion lambda para guardar en un state lo que vaya escribiendo el usuario
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //este if se usa para saber si un input del usuario es de menos de 1 letra no pueda ingresar ese valor
    if (inputValue.trim().length <= 1) return;

    //esto se hace para que el input se borre cuando se manda el submit
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(ev) => onInputChange(ev)}
      />
      <ol></ol>
    </form>
  );
};

export default AddCategory;
