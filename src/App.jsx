import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { pokemones, allPokemones } from "./feactures/PokemonSlice";
import PokemonList from './components/PokemonList';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ElementosFiltros from './components/ElementosFiltros';

function App() {

  const [name, setName] = useState('');
  const [limit, setLimit] = useState('');
  const [existe, setExiste] = useState(false);

  const inicio = 0
  const dispatch = useDispatch();

  const fetchApi = async() => {
    setExiste(true)
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json();

      if(name == ''){

        const datos = data.results.map(async(item) => {
          const res = await fetch(item.url)
          const data = await res.json()
          return data
        })
    
        const resultados = await Promise.all(datos)
        dispatch(pokemones(resultados));

      }else{
        dispatch(pokemones(data))
      }
      
    } catch (error) {
      console.log(error)
    }finally{
      setExiste(false)
    }

  }

  const fetchFilter = async() => {
    setExiste(true)
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${limit}`)
      const data = await res.json()

      const datos = data.pokemon.map(async(item) => {
        const res = await fetch(item.pokemon.url)
        const data = await res.json()
        return data
      })

      const resultados = await Promise.all(datos)
      dispatch(allPokemones(resultados));
      
    } catch (error) {
      console.log(error)
    }finally{
      setExiste(false)
    }

  }

  const updateLimite = (valor) => {
    // dispatch(updateLimit(valor))
    setLimit(limit + valor)
  }

  useEffect(() => {
    fetchApi()
  }, [name])

  useEffect(() => {
    if(limit !== ''){
      fetchFilter();
    }
  }, [limit])

  if(existe){
    return <Loading />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar  setName={setName} setLimit={setLimit} />} >
            <Route index element={<PokemonList updateLimite={updateLimite} name={name} limit={limit} setLimit={setLimit} />} />
            <Route path='data/:id' element={<ElementosFiltros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
