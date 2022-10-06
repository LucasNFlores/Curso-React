import Card from "./Card/Card";
import { useState, useEffect } from 'react';
import { getArticles } from "../../../mockAPI"

// este es un ejemplo de card con sus respectivos datos
function ItemList(props) {

    const [articulesList, setArticulesList] = useState([]);

    // Se llama a los datos del simulador de API usando useEffect para que se ejecute una unica vez
    useEffect(() => {
        getArticles().then((data) => {
            setArticulesList(data); // Se los guarda en la variable a cambiar de useState
        })
    }, []); // Se utiliza [] para indicar la cantidad de veces que se va a hacer

    return (
        <div>
            {articulesList.map((articule) => {
                return <Card
                    key={articule.id}
                    image={articule.image}
                    title={articule.title}
                    price={articule.price}
                    category={articule.category}
                    stock={articule.stock}
                />;
            })}
        </div>
    )
}
export default ItemList