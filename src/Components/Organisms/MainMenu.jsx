import React from 'react'
import {NavLink} from 'react-router-dom'

const MainMenu = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <a href="/">
          <img src="https://ed.team/static/images/logo.svg" alt="" className="main-logo"/>
        </a>
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
        <nav className="main-menu" id="main-menu">
          <ul>
            <li><NavLink exact to='/' activeClassName="activo">Inico</NavLink></li>
            <li><NavLink to='/cursos' activeClassName="activo">Cursos</NavLink></li>
            <li><NavLink to='/formulario' activeClassName="activo">Formulario</NavLink></li>
            <li><NavLink to='/Usuarios' activeClassName="activo">Usuarios</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu">

        </div>
      </div>
    </div>
  </header>
)

export default MainMenu