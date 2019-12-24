import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-4">
    { 
      courses.map(c => (
        <CourseCard 
          key={c.id} 
          id= {c.id}
          title={c.titulo} 
          image={c.img} 
          precio= {c.precio} 
          professor={c.profe}
        />
      ))
    }
  </div>
)

export default withLoader("courses",CourseGrid) 