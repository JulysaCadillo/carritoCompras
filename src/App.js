import React, { Component } from 'react';
import './App.css';

const productos=[
  {
    id:1,
    nombre:'menestras',
    precio:3,
    imagen:null
  },
  {
    id:2,
    nombre:'leche',
    precio:2.3,
    imagen:null
  },
  {
    id:3,
    nombre:'fruta',
    precio:1.5,
    imagen:null,
  },
  {
    id:4,
    nombre:'pollo',
    precio:12,
    imagen:null
  }
]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: "",
      listaProductos:[]
    }
  }

  onChangeText = (event) => {
    console.log(event.target.value)
    this.setState({newProduct:event.target.value})
  }

  enviarFormulario = (event) => {
    event.preventDefault(); // cuando das enter no se refresca
    const {newProduct,listaProductos}=this.state;
    const productoEncontrado=this.buscarProductoPorNombre(newProduct);
    if(productoEncontrado!=null){
      listaProductos.push(productoEncontrado);
      this.setState({listaProductos:listaProductos,newProduct:''});
    }else{
      alert('no se encontro el producto '+newProduct);
  }
    }
    //const listaTareas=[];
    buscarProductoPorNombre=(nombre)=> {
      let productoEncontrado=null;
      for(let i=0;i<productos.length;i++){
        const producto=productos[i];
        if(producto.nombre==nombre){
          productoEncontrado=producto;
          break;
        }
      }
return productoEncontrado;
    }

   

  render() {
    const {newProduct,listaProductos}=this.state;
    let total=0.0;
    for(let index =0; index<listaProductos.length;index++){
    const producto=listaProductos[index];
    total += producto.precio;
  }

    return (
      <div className="container">
        <h1 className="title">Carrito compras <span aria-label="emoji" role="img">🔥</span></h1>
        <form onSubmit={this.enviarFormulario}>
          <input value={newProduct} type="text" className="new-task" onChange={this.onChangeText} />
        </form>
        <div>
          <h3 className="title">{"total: "+total}</h3>
        </div>
        <h2 className="test-label">{newProduct}</h2>
        {listaProductos.map((task)=>(   //map. permite recorrer una lista

          <div className="task-container">
            <h3 className="task">{task.nombre}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;