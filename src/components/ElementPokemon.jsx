import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ElementPokemon() {
    const elemenPokemones = useSelector(state => state.pokemon.allPoke)
    console.log(elemenPokemones)
  return (
    <div className='card-list-pokemon'>
        {
            elemenPokemones.map((item) => (
                <Link to={`data/${item?.id}`} className='contenCard' key={item?.id}>
                    <div className='contenImg'>
                        <img src={item?.sprites?.other?.dream_world?.front_default} alt={item?.name} />
                    </div>

                    <div className='card-info'>
                        <span className='pokemon-id'>N° {item?.id}</span>
                        <h3>{item?.name}</h3>
                        <div className="card-types">
                            {item?.types.map(type => (
                                <span key={type.type.name} className={type.type.name}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default ElementPokemon