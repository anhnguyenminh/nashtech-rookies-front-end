import {useEffect, useState} from "react";
import axios from "axios";

const PokemonPage = () => {
    const [currentPokemonId, setCurrentPokemonId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({
        id: null,
        name: null,
        height: null,
        weight: null,
        image: null
    });

    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Pokemon Page";
    }, []);

    useEffect(() => {
            setIsLoading(true);
            let didCancel;
            axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
                .then(response => {
                    if (!didCancel) {
                        setPokemon({
                            id: response.data.id,
                            name: response.data.name,
                            height: response.data.height,
                            weight: response.data.weight,
                            image: response.data.sprites.front_default
                        })
                        setIsLoading(false);
                    }
                })
                .catch(error => {
                    // handle error
                    setError('Something went wrong');
                    setIsLoading(false);
                    console.log(error);
                })

            return () => {
                didCancel = true;
            }
        }, [currentPokemonId]
    )

    console.log('error = ', error);
    console.log('isLoading = ', isLoading);
    if(!isLoading && error) return <div style={{color: 'red'}}>{error}</div>
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setCurrentPokemonId(currentPokemonId - 1)
                    }}>Previous
                </button>
                <button
                    onClick={() => {
                        setCurrentPokemonId(currentPokemonId + 1)
                    }}>Next
                </button>
            </div>

            {!isLoading && (
                <div>
                    <div>Pokemon ID: {pokemon.id}</div>
                    <div>Pokemon name: {pokemon.name}</div>
                    <div>Pokemon weight: {pokemon.weight}</div>
                    <div>Pokemon height: {pokemon.height}</div>
                    <img src={pokemon.image} alt=""/>
                </div>
            )}

        </div>
    )


}
export default PokemonPage;