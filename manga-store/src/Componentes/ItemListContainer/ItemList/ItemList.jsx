import Card from "../../Card/Card";
import { useState, useEffect } from 'react';
import { getArticles } from "../../../mockAPI"

// este es un ejemplo de card con sus respectivos datos
function ItemList(props) {

    const { articuleList, setCountArticules } = useState([]);

    // Se llama a los datos del simulador de API
    useEffect(
        () => {
            getArticles().then((data) => {
                console.log("getArticulos")
                // Se los guarda en la variable a cambiar de useState
                setCountArticules(data);
            })
        }, []

        // Se utiliza [] para indicar la cantidad de veces que se va a hacer
    )

    return (
        <div>
            {articuleList.map(curso => {
                return <Card title={curso.title} img={curso.img} category={curso.category}
                    stock={curso.stock} />
            })}
        </div>
    )
}
export default ItemList