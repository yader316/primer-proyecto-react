import React from 'react'
import "./styles/styles.scss"
import Cursos from './Cursos'
import Banner from './Banner'
import Formulario from './Formulario'

// const cursosArray = [
//   {
//     'titulo': 'Programación orientada a objetos con Go',
//     'img': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
//     'precio': '250',
//     'profe': 'Yader Mendoza'  
//   },
//   {
//     'titulo': 'Git desde cero',
//     'img': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/git-desde-cero-1.png',
//     'precio': '100',
//     'profe': 'Tasilany Mendoza' 
//   },
//   {
//     'titulo': 'Angular desde cero',
//     'img': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png',
//     'precio': '200',
//     'profe': 'Gaudy Boniche' 
//   },
//   {
//     'titulo': 'HTML desde cero',
//     'img': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
//     'precio': '50',
//     'profe': 'Alejandra Balmaceda' 
//   }
// ]

const App = () => (
  <>
    <Banner/>  
    <Formulario/>  

    {/* <div className="ed-grid m-grid-3">
      {
        cursosArray.map(c => <Cursos title={c.titulo} image={c.img} precio= {c.precio} profesor={c.profe}/>)
      }
    </div> */}
  </>
)

export default App;
