import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ElementPokemon from './ElementPokemon';
import PokemonFiltro from './PokemonFiltro';

const PokemonList = ({ updateLimite, name, limit, setLimit }) => {
    const pokemones = useSelector(state => state.pokemon.pokemon);
    console.log(pokemones)

  return (
    <div className='conte'>
    <PokemonFiltro setLimit={setLimit} />
    <section className='card-list-pokemon'>
        {
            limit !== '' ? (
                <ElementPokemon />
            ):
            name !== '' ? (
            <Link to={`/data/${pokemones.id}`} className='contenCard' key={pokemones.id}>
                    <div className='contenImg'>
                        <img src={pokemones?.sprites?.other?.dream_world?.front_default} alt="" />
                    </div>

                    <div className='card-info'>
                        <span className='pokemon-id'>N° {pokemones?.id}</span>
                        <h3>{pokemones?.name}</h3>
                        <div className="card-types">
                            {pokemones && pokemones.types && pokemones.types.map(type => (
                                <span key={type.type.name} className={type.type.name}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
            </Link> ):(
            pokemones.map(item => (
                <Link to={`/data/${item.id}`} className='contenCard' key={item.id}>
                    <div className='contenImg'>
                        <img src={item.sprites.other.dream_world.front_default} alt="" />
                    </div>

                    <div className='card-info'>
                        <span className='pokemon-id'>N° {item.id}</span>
                        <h3>{item.name}</h3>
                        <div className="card-types">
                            {item.types.map(type => (
                                <span key={type.type.name} className={type.type.name}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))
            )
        }
    </section>
    </div>
  )
}

export default PokemonList