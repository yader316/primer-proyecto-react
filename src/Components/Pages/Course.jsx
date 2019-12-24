import React from 'react'

const CursesArray = [
  {
    'id': 1,
    'titulo': 'Programación orientada a objetos con Go',
    'img': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
    'precio': '250',
    'profe': 'Yader Mendoza'  
  },
  {
    'id': 2,
    'titulo': 'Git desde cero',
    'img': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/git-desde-cero-1.png',
    'precio': '100',
    'profe': 'Tasilany Mendoza' 
  },
  {
    'id': 3,
    'titulo': 'Angular desde cero',
    'img': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png',
    'precio': '200',
    'profe': 'Gaudy Boniche' 
  },
  {
    'id': 4,
    'titulo': 'HTML desde cero',
    'img': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
    'precio': '50',
    'profe': 'Alejandra Balmaceda' 
  }
]
const Course = ({ match }) => {

  const cursoActual = CursesArray.filter(c => c.id === parseInt(match.params.id))[0]
  
  return (
    <div className="ed-grid m-grid-3">
      {
        cursoActual ? (
        <>
          <h1 className="m-cols-3"> {cursoActual.titulo}</h1>
          <img src={cursoActual.img} alt={cursoActual.titulo} className="m-cols-1"/>  
          <p className="m-cols-2">profesor: {cursoActual.profe}</p>
        </>  
        ) : 
          <h1>el curso no existe</h1>
      }
    </div>
  )
}

export default Course