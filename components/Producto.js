import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuisco from "../hooks/useQuisco"


const Producto = ({producto}) => {
  const {handlSetProducto, handleChangeModal} = useQuisco()
  const { nombre, imagen, precio} = producto
  return (
    <div className="border p-3 rounded">
      <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen platillo ${nombre}`}
            width={400}
            height={500}
            className="rounded"
      />
      <div className="lg:p-5 " >
          <h3 className="lg:text-2xl font-bold">{nombre}</h3>
          <p className="mt-5 font-black lg:text-4xl text-2xl text-amber-500">
            {formatearDinero(precio)}
          </p>
          
          <button type="button" 
          className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full  mt-5 p-3 
                        uppercase rounded-md font-bold "
            onClick={() => {
              handleChangeModal()
              handlSetProducto(producto) 
            }}
          > 
            Agregar
          </button>
      </div>

    </div>
  )
}

export default Producto

