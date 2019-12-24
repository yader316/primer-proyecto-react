import React from 'react'
import "../styles/styles.scss"
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cursos/:id" component={Course}/>
      <Route path="/cursos" component={Courses}/>
      <Route path="/historial" component={History}/>
      <Route path="/formulario" component={() => <Form name="pagina de contacto"/>}/>
      <Route path="/usuarios" component={Users}/>
      <Route component={() => (
        <div className="ed-grid">
          <h1> Error 404</h1>
          <span>pagina no encontrada</span>
        </div>
      )}/>
    </Switch>
  </Router>
)
        
export default App;
