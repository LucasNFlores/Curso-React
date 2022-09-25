import "./ItemListContainer.css"

function ItemListContainer(props) {
    return (
        <section className="ItemlistContainer">
            <h2>{props.greeting}</h2>
            <div className="carrusel"></div>
        </section>
    )
}

export default ItemListContainer