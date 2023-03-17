import React, { useState } from 'react'

const PokemonFiltro = ({ setLimit }) => {

    const [filtroStyle, setFiltroStyle] = useState({ display: 'none' });
    const [select, setSelect] = useState()

    const handleChange = (e) => {
        setLimit(
            e.target.name
        )
    }
    console.log(select)

    const handleOpen = () => {
        setFiltroStyle({ display: 'block' });
    }

    const handleClose = () => {
        setFiltroStyle({ display: 'none' });
    }

  return (
    <div>
        <div className={`filtro`}>
            <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16">
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <p>Filtrar</p>
        </div>
        <section onClick={handleClose} className='elementos' style={filtroStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>

            <div className='filter-by-type'>
				<span>Tipo</span>

				<div className='group-type'>
					<input
						type='checkbox'
						name='grass'
						id='grass'
                        onChange={handleChange}
					/>
					<label htmlFor='grass'>Planta</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='fire'
						id='fire'
                        onChange={handleChange}
					/>
					<label htmlFor='fire'>Fuego</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='bug'
						id='bug'
                        onChange={handleChange}
					/>
					<label htmlFor='bug'>Bicho</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='fairy'
						id='fairy'
                        onChange={handleChange}
					/>
					<label htmlFor='fairy'>Hada</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='dragon'
						id='dragon'
                        onChange={handleChange}
					/>
					<label htmlFor='dragon'>Dragón</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='shadow'
						id='shadow'
                        onChange={handleChange}
					/>
					<label htmlFor='shadow'>Fantasma</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='ground'
						id='ground'
                        onChange={handleChange}
					/>
					<label htmlFor='ground'>Tierra</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='normal'
						id='normal'
                        onChange={handleChange}
					/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='psychic'
						id='psychic'
                        onChange={handleChange}
					/>
					<label htmlFor='psychic'>Psíquico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='steel'
						id='steel'
                        onChange={handleChange}
					/>
					<label htmlFor='steel'>Acero</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='dark'
						id='dark'
                        onChange={handleChange}
					/>
					<label htmlFor='dark'>Siniestro</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='electric'
						id='electric'
                        onChange={handleChange}
					/>
					<label htmlFor='electric'>Eléctrico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='fighting'
						id='fighting'
                        onChange={handleChange}
					/>
					<label htmlFor='fighting'>Lucha</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='flying'
						id='flying'
                        onChange={handleChange}
					/>
					<label htmlFor='flying'>Volador</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='ice'
						id='ice'
                        onChange={handleChange}
					/>
					<label htmlFor='ice'>Hielo</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='poison'
						id='poison'
                        onChange={handleChange}
					/>
					<label htmlFor='poison'>Veneno</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='rock'
						id='rock'
                        onChange={handleChange}
					/>
					<label htmlFor='rock'>Roca</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						name='water'
						id='water'
                        onChange={handleChange}
					/>
					<label htmlFor='water'>Agua</label>
				</div>
			</div>
        </section>
    </div>
  )
}

export default PokemonFiltro