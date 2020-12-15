import React from 'react'
import useSelect from '../hooks/useSelect'
import Nav from './Nav'

const Header = ({setCategory}) => {

    const options = [
        { value: 'general', name: 'General'},
        { value: 'entertainment', name: 'Espectaculos'},
        { value: 'technology', name: 'Tecnologia'},
        { value: 'sports', name: 'Deportes'},
        { value: 'science', name: 'Ciencia'},
        { value: 'health', name: 'Salud'},
        { value: 'business', name: 'Negocios'}
    ]

    const [ option, SelectOption] = useSelect(options[0].value, options)
    return (
        <>  
            <Nav />
            <div className="d-flex row flex-column align-items-center bg-dark pt-4 pb-4">
                <h2 className="title text text-white">Busca las noticias</h2>
                <h2 className="title text text-white">mas relevantes de Argentina</h2>
            </div> 
            <form onSubmit={(e) =>{e.preventDefault(); setCategory(option)}} className="row bg-warning d-flex justify-content-center pt-3 pb-3">
                <SelectOption />
                <button className="btn btn-danger btn-sm border"><i className="fas fa-search"></i></button>
            </form>
        </>
    )
}

export default Header
