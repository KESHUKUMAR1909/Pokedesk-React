import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon({ id, name, image }) {
    return (
        <Link to={`/Pokemon/${id}`}>
            <div className="pokemonCard">
                <h3>{name}</h3>
                <img className="image-height-width" src={image} alt={name} />
            </div>
        </Link>
    );
}

export default Pokemon;
