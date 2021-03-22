import { Container } from "./styles"
import BgCard from '../../assets/bg-card.svg';

const PokemonCard = ({pokemon}) => {
    return (
        <Container style={{backgroundColor: `var(--${pokemon.types[0].type.name})`}}>
            <img className="bg-card" src={BgCard} alt=""/>
            <div>
                <div>
                    <strong>#1</strong>
                    <span>{pokemon.name}</span>
                    {pokemon.types.map((type, index) => 
                        <span key={index}>{type.type.name}</span>
                    )}
                </div>
                <img src={pokemon.sprite} alt="pokemon-sprite"/>
            </div>
        </Container>
    )
}

export default PokemonCard
