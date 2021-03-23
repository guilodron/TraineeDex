import PokemonCard from '../../Components/PokemonCard';
import {Container} from './styles';
import pokemonData from '../../data/pokemon.json';
import ChosenPokemonCard from '../../Components/ChosenPokemonCard';
import { useState } from 'react';

const Dashboard = () => {

    const pokemons = pokemonData.data;
    const [chosenPokemon, setChosenPokemon] = useState(pokemons[0]);

    const handlePokemonClick = (index) => {
        setChosenPokemon(pokemons[index]);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Container>
            <div className="chosen">
                <ChosenPokemonCard pokemon={chosenPokemon}/>
            </div>
            
            <div className="pokemons">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} onClick={() => handlePokemonClick(index)} pokemon={pokemon} index={index} />
                ))}
            </div>
            {/* <PokemonCard pokemon={bulbasaur} /> */}
        </Container>
    )
}

export default Dashboard;
