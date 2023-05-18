import React from 'react';
import '../hojas-de-estilo/Planets.css';

//vamos a utilizar componentes funcionales
function Planets() {
  return (
    <div className='contenedor-planets'>
      <img className='imagen-testimonio' src={require('../img/planet-jupyter-white.jpg')} alt='jupiter'/> 
      <div className='contenedor-texto-planeta'>
        <p className='nombre-planeta'>Jupiter</p>
        <p className='ubicacion-planeta'>Ubicacion en el sistema solar</p>
        <p className='descripcion-planeta'>Júpiter, el gigante gaseoso del sistema solar, es el quinto planeta a partir del Sol y el más grande de todos. Con un diámetro de más de 143.000 kilómetros, podría albergar a más de 1.300 planetas del tamaño de la Tierra en su interior. Su imponente atmósfera está compuesta principalmente de hidrógeno y helio, con fascinantes características como bandas nubosas y la Gran Mancha Roja, una tormenta gigante que ha perdurado durante siglos. Júpiter tiene más de 70 lunas conocidas, siendo las cuatro principales llamadas Galileanas: Ío, Europa, Ganimedes y Calisto. Su tamaño y belleza lo convierten en un objeto de fascinación para los científicos y entusiastas de la astronomía.</p>
      </div> 
    </div>
  );
}
//exportando el componente explicitamente
export default Planets;

//existen dos tipos de importacion

