import React, {useState,useEffect} from 'react'
import axios from 'axios'
import useCourse from '../CustomHooks/useCourse'

const Course = ({ match }) => {

  const [comment, setComment] = useState("Sin Comentarios")

  const course = useCourse(match.params.id)
  const myComment = e =>{
    setComment(e.target.value)
  }

  return (
    <div className="ed-grid m-grid-3">
      {
        course ? (
        <div className="ed-grid">
          <div className="l-block">
            <h1 className="m-cols-3"> {course.titulo}</h1>
            <img src={course.img} alt={course.titulo} className="m-cols-1"/>  
            <p className="m-cols-2">profesor: {course.profe}</p>
          </div>
          <div>
            <h2>Escribe tu comentario</h2> 
            <input type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}/>
            <p>{comment}</p>
          </div>
        </div>  
        ) : 
          <h1>el curso no existe</h1>
      }
    </div>
  )
}

export default Course