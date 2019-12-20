import React from 'react'
import Cursos from './Cursos'

const cursosArray = [
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

const CourseGrid = () =>(
  <div className="ed-grid m-grid-4">
    {
      cursosArray.map(c => (
        <Cursos 
          key={c.id} 
          id= {c.id}
          title={c.titulo} 
          image={c.img} 
          precio= {c.precio} 
          profesor={c.profe}
        />
      ))
    }
  </div> 
)  

export default CourseGrid