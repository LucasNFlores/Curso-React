import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList.jsx"

function ItemListContainer(props) {

    return (
        <section className="ItemlistContainer">
            <h2>{props.greeting}</h2>
            <ItemList />

        </section>
    )
}

export default ItemListContainer
