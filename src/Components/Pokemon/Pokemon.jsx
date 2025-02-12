import "./Pokemon.css"
function Pokemon({ name, image }) {
    return (
        <div className="pokemonCard">
            <h3>{name}</h3>
            <img className="image-height-width" src={image} alt={name} />
        </div>
    );
}

export default Pokemon;
