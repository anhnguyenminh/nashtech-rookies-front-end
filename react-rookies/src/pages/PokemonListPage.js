import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokemonListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isSortByName, setIsSortByName] = useState(false);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
            console.log('response = ', response);
            setIsLoading(false);
            setPokemons(response.data.results);
        })
    }, []);

    console.log('searchText ', searchText);

    const pokemonsFilter = pokemons.filter(pokemon => pokemon.name.toLowerCase().
    includes(searchText.toLowerCase()))

    const pokemonsSorted = isSortByName ? pokemonsFilter.sort((pokemon1, pokemon2) => {
        if (pokemon1.name < pokemon2.name) return -1;
        if (pokemon1.name > pokemon2.name) return 1;
        return 0;
    }) : pokemonsFilter;

    if (isLoading) return <h1>Loading</h1>
    return (
        <div>
            <input style={{margin: 25}} placeholder="Search pokemon" type="text" value={searchText}
                   onChange={evt => setSearchText(evt.target.value)}/>
            <button onClick={ () => setIsSortByName(true)}>
                Sort by name
            </button>
            {pokemonsFilter.length === 0 && <div>'No found'</div>}

            <div className="pokemons-list">
                {pokemonsFilter.map(pokemon => (
                    <div key={pokemon.name}>
                        <div>Name: {pokemon.name}</div>
                        <div>Url: {pokemon.url}</div>
                        <div>--------------------------</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonListPage;