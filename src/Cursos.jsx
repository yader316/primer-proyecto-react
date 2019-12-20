import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Cursos = ({id,title, image, precio, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt="{title}" />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg" alt="profesor" />
            </div>
          </div>
          <span className="small">{`Prof.: ${profesor}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">{`${precio} USD`}</a>
      </div>
    </div>
  </article>
)

Cursos.prototype = {
  title: PropTypes.string,
  image: PropTypes.string,
  precio: PropTypes.string,
  profesor: PropTypes.string
}

Cursos.defaultProps = {
  title: 'No se encontro titulo 1',
  image: 'data:image/jpeg;base64,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',
  precio: '--',
  profesor: ''
}

export default Cursos