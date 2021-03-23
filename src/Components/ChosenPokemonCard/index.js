import { Container } from "./styles"

const ChosenPokemonCard = ({pokemon}) => {
    return (
        <Container>
            <img src={pokemon.sprite} alt=""/>
            <strong>{pokemon.name}</strong>
            <div className="types">
                {pokemon.types.map((type, index) => (
                    <span key={index} style={{backgroundColor: `var(--${type.type.name})`}}>{type.type.name}</span>
                ))}
            </div>
            <div className="height-weight">

            </div>
            <strong>Stats</strong>
            {pokemon.stats.map((stat, index) => (
                <div key={index} className="stat">
                    <span>{stat.stat.name}</span>
                    <strong>{stat.base_stat}</strong>
                </div>
            ))}
        </Container>
    )
}

export default ChosenPokemonCard
