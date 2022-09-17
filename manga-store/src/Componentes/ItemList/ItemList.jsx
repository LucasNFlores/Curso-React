import Card from "../Card/Card"

// este es un ejemplo de card con sus respectivos datos
function ItemList() {
    return (
        <div>
            <ul>
                <li>
                    <Card
                        image="https://otakuteca.com/images/books/cover/12956_TMOManga57fa9df9891b2.jpg"
                        title="Tales of Demons and Gods"
                        detail="Manwha"
                        price="800"
                    />
                </li>
            </ul>
        </div>
    )
}
export default ItemList