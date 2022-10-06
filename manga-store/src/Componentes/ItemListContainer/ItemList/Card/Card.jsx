import "./Card.css"

function Card(props) {
    return (
        <section className="card" key={props.id}>
            <div className="card-image">
                <img src={props.image} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{props.title}</h2>
                <h4>$ {props.price}</h4>
                <h4>{props.category}</h4>
                <h4>Cant. disponible: {props.stock}</h4>
            </div>
            <button text={`Lee ${props.title}`} />
        </section>
    )
}

export default Card;