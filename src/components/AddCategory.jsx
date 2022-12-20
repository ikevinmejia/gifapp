import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Eliminar los espacios al inicio y final, asi mismo como indicando que hayan mas de un caracter
        if(inputValue.trim().length <= 1 ) return;

        // setCategories(cat => [ inputValue, ...cat])
        onNewCategory(inputValue.trim())


        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Buscar gif'
            value={inputValue}
            onChange={onInputChange}
         />
    </form>
  )
}

export default AddCategory