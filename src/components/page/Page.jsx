import React from 'react';
import './style.css'


function Menu(){

    return(
        <div className='container'>
            <div className='Sobre'>
                <h1>Sobre</h1>
            </div>
            
            <div className='experiencia'>
                <h1>Experiência</h1>
            </div>
            
            <div className='educacao'>
            <h1>Educação</h1>
            </div>

            <div className='skills'>
                <h1>Skills</h1>
            </div>

            <div className='premios'>
                <h1>Prêmios</h1>
            </div>
        </div>
    );

}

export default Menu