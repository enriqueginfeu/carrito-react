import { useState } from "react"
import { Header } from "./components/Header"
import { ListaProductos } from "./components/ListaProductos"


function App() {
  
  const [productos, setProductos] = useState([])
  const [total, setTotal] = useState(0)
  const [contadorProductos, setContadorProductos] = useState(0)

  return (
    <>
      <Header 
        productos={productos}
        setProductos={setProductos}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setContadorProductos={setContadorProductos}
      />
      <ListaProductos 
        productos={productos}
        setProductos={setProductos}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setContadorProductos={setContadorProductos}
      />
    </>
  )
}

export default App
