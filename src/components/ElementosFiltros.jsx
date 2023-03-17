import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
const ElementosFiltros = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState([]);

  const fetchData = async() => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos = await res.json();
    setPokemon(datos);
    console.log(datos);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Link className='ir' to={'/'}>Ir al inicio</Link>
    <div className='container main-pokemon'>
        <div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon?.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon?.sprites?.other?.dream_world?.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{pokemon?.name}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon?.types?.map(type => (
									<span key={type?.type?.name} className={`${type?.type?.name}`}>
										{type?.type?.name}
									</span>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon?.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon?.weight}KG</span>
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[0]?.base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[1]?.base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[2]?.base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[3]?.base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[4]?.base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats?.[5]?.base_stat}
								</span>
							</div>
						</div>
					</div>
    </div>
    </>
  )
}

export default ElementosFiltros