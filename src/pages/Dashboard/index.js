import PokemonCard from '../../Components/PokemonCard';
import {Container} from './styles';
import pokemonData from '../../data/pokemon.json';

const Dashboard = () => {

    const pokemons = pokemonData.data;

    return (
        <Container>
            {pokemons.map((pokemon, index) => (
                <PokemonCard pokemon={pokemon}/>
            ))}
            {/* <PokemonCard pokemon={bulbasaur} /> */}
        </Container>
    )
}

export default Dashboard;
