import "./ItemListContainer.css"
import FlexWrapper from "./FlexWrapper/FlexWrapper.jsx"

function ItemListContainer(props) {

    return (
        <section className="ItemlistContainer">
            <h2>{props.greeting}</h2>
            <FlexWrapper />
        </section>
    )
}

export default ItemListContainer
