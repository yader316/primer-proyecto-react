import React from 'react'
//  para crear un formulario ya no creamos una funcion si no una clase
// creando componentes de clases
class Form  extends React.Component {
  constructor(props) { 
    super(props)  
    
    this.state = {
      name: "",
      email: ""
    }

    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)

  }

  changeName(e){
    this.setState({
      name: e.target.value
    })
  }
  changeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  render() {
    return(
      <div className="ed-grid">
        <h1>Formulario {this.props.name} </h1>
        <form id="elemento">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label htmlFor="">Nombre Completo</label>
              <input 
                type="text" 
                onChange={this.changeName}/>
            </div>
            <div className="form__item">
              <label htmlFor="">Correo Electronico</label>
              <input 
                type="text"
                onChange={ this.changeEmail}/>
            </div>
            {/* <div className="form__item">
              <input type="submit" className="button full" value="Enviar"/>
            </div> */}
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.name}`}</h2>
          <span>{`Tu correo es: ${this.state.email}`}</span>
        </div>
      </div>
    )
  }
}
  
export default  Form