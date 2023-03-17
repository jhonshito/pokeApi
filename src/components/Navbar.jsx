import React from 'react'
import logo from '../logos/Pokédex_logo.png'
import { Outlet, Link } from "react-router-dom";
import FormPokemon from './FormPokemon';

const Navbar = ({ setName, setLimit }) => {
  return (
    <>
        <header>
            <Link className='logo'>
                <img src={logo} alt="Este es el logo" />
            </Link>
            <FormPokemon setName={setName} setLimit={setLimit} />
        </header>
        <Outlet />
    </>
  )
}

export default Navbar