import React from 'react'
//  para crear un formulario ya no creamos una funcion si no una clase
// creando componentes de clases
class Formulario  extends React.Component {
  constructor(props) { 
    super(props)  
    
    this.state = {
      nombre: "",
      correo: ""
    }

    this.cambiarNombre = this.cambiarNombre.bind(this)
    this.cambiarCorreo = this.cambiarCorreo.bind(this)

  }

  cambiarNombre(e){
    this.setState({
      nombre: e.target.value
    })
  }
  cambiarCorreo(e){
    this.setState({
      correo: e.target.value
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
                onChange={this.cambiarNombre}/>
            </div>
            <div className="form__item">
              <label htmlFor="">Correo Electronico</label>
              <input 
                type="text"
                onChange={ this.cambiarCorreo}/>
            </div>
            {/* <div className="form__item">
              <input type="submit" className="button full" value="Enviar"/>
            </div> */}
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.nombre}`}</h2>
          <span>{`Tu correo es: ${this.state.correo}`}</span>
        </div>
      </div>
    )
  }
}
  
export default  Formulario