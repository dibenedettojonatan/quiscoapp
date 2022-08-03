import { useState, useEffect } from "react"
import Image from "next/image"
import useQuisco from "../hooks/useQuisco"
import {formatearDinero} from '../helpers/index'

const ModalProducto = () => {
    const {producto, handleChangeModal, handleAgregarPedido, pedido} = useQuisco()
    const [cantidad, setCantidad]= useState(1)
    const [edicion, setEdicion] = useState(false)
    useEffect(() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)){

            const pedidoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(pedidoEdicion.cantidad)
        }
    },[producto, pedido])

  return (
    <div className=" flex  gap-10  ">
        <div className="md:w-1/3">
            <Image 
             width={300}
             height={400}
             alt={`Imagen producto ${producto.nombre}`}
             src={`/assets/img/${producto.imagen}.jpg`}
             className="rounded"
            />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end ">
                <butto onClick={handleChangeModal}>
                    <svg    xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                    >
                        <path   strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </butto>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p 
                className="mt-5 font-black lg:text-5xl text-4xl text-amber-500 "
            >
                    {formatearDinero(producto.precio)}
            </p>
            <div className="flex gap-4 mt-5">
                <button 
                    type="button"
                    onClick={()=>{
                        if(cantidad <= 1 ) return
                        setCantidad(cantidad - 1 )
                    }}
                >
                    <svg    xmlns="http://www.w3.org/2000/svg" 
                            className="h-7 w-7" fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            strokeWidth={2}
                    >
                        <path   strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                </button>
                <p className="text-3xl">{cantidad}</p>
                <butto
                     type="button"
                     onClick={()=>{
                        if(cantidad >= 5 ) return
                         setCantidad(cantidad + 1 )
                     }}
                >
                    <svg   xmlns="http://www.w3.org/2000/svg" 
                            className="h-7 w-7" fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                    >
                        <path   strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                </butto>
            </div>
            <butto
                type="button"
                className="
                        bg-indigo-600 
                        hover:bg-indigo-800 
                        text-white
                          px-5 py-2 mt-5  font-bold uppercase 
                          rounded 
                          cursor-pointer"
                onClick={() => handleAgregarPedido({... producto, cantidad})}
            >
               {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
            </butto>
        </div>
    </div>
  )
}

export default ModalProducto