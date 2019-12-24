import React, {Component} from 'react'

const withLoader = (propValue, WrappedComponent) => {
  return class WithLoader extends Component {

    constructor(porps){
      super(porps)
    }

    render() {
      return this.props[propValue].length === 0
      ? <h1>Cargando....</h1>
      : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoader