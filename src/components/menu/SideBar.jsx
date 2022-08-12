import React from 'react';
import './style.css'
import Gato from './gato.jpg'

function Menu(){

    return(
        <div className='menu'>
            <div className="sideBar">
                <img id="option" src={Gato} alt={Gato} />
                <a id="option" href="#sobre">Sobre</a>
                <a id="option" href="#experiencia">Experiência</a>
                <a id="option" href="#educacao">Educação</a>
                <a id="option" href="#skills">Skills</a>
                <a id="option" href="#premios">Prêmios</a>
            </div>
        </div>
    );

}

export default Menu