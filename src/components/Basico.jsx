/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import data from "../data/data.js";
import { useState } from "react";

export const Basico = () => {
  return (
    <>
      <div className="p-4 bg-blue-500 text-white rounded"></div>
    </>
  );
};

export const ProductoTabla = () => {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre del Producto</th>
            <th className="px-4 py-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Producto 1</td>
            <td className="border px-4 py-2">$10</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Producto 2</td>
            <td className="border px-4 py-2">$20</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const Counter = () => {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="p-4 bg-blue-500 text-white rounded">
        <p className="text-lg font-bold">Estado : {counter}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => setCounter(counter + 1)}
        >
          Agregar
        </button>
      </div>
    </>
  );
};

export const Condicional = () => {
  const [session, setSession] = useState(true);
  return (
    <>
      <div>
        <h2>Renderizado condicional </h2>
        {session ? <Sign /> : <Login />}
      </div>
    </>
  );
};

const Sign = () => {
  return (
    <>
      <h1>Sign</h1>
    </>
  );
};

const Login = () => {
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export const Elementos = () => {
  const seasons = ["Primavera", "Verano", "Otoño", "Invierno"];
  console.log(data);
  return (
    <>
      <div>
        <h1>Renderizado de Elementos</h1>
        <ol>
          {seasons.map((season) => (
            <li key={season}>{season}</li>
          ))}
        </ol>
        <ElementoList />
      </div>
    </>
  );
};

const ElementoList = () => {
  return (
    <>
      <div>
        {data.map((it) => (
          <ul key={it.id}>
            <li>{it.name}</li>
            <a href={it.web} target="_blank" rel="noopener noreferrer">
              {it.web}
            </a>
          </ul>
        ))}
      </div>
    </>
  );
};

export const Eventos = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleClickMin = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <div className="bg-gray-700 p-4">
        <h1 className="text-2xl font-bold mb-2">
          Eventos & Binding con React JS
        </h1>
        <p className="mb-4">Contador : {counter}</p>
        <nav className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Suma +1
          </button>
          <button
            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleClickMin}
          >
            Resta -1
          </button>
        </nav>
      </div>
    </>
  );
};

export const EventosNativos = () => {
  const handlerSaludar = (e, msg) => {
    alert("Hola Mundo");
    console.log(e.target);
    alert(msg);
  };
  return (
    <>
      <div>
        <h1>Eventos Nativos, Sintéticos & Personalizados</h1>

        <button className="bg-slate-500 rounded hover:bg-blue-400"
        onClick={(e) => handlerSaludar(e, "Mensaje desde eventos")}>Saludar</button>
      </div>
    </>
  );
};


export const Comunicacion = () => {
  const [counter, setCounter] = useState(0);
  const incrementar = () => {
    setCounter(counter + 1);
  
  }
  return (
    <>
      <div>
        <h1>Comunicación entre componentes</h1>
        <h3>{counter}</h3>
        <Hijo msg="Hola Mundo"  incrementar={incrementar}/>
      </div>
    </>
  );
}

const Hijo = ({ msg, incrementar }) => {
  return(
    <>
    <div>
      <h1>{msg}</h1>
      <button className="bg-slate-500 rounded hover:bg-blue-400" onClick={incrementar}>Sumar</button>
    </div>
    </>
  )

}


export const CicloDeVida = () => {
  console.log(0, "El Componente se ha inicializado")
  return (
    <>
    <div>
      <h1>Ciclo de Vida</h1>
    
    </div>
    </>
  )
}



export const Apis = ( ) => {
  const [data, setData] = useState([])
  return (
    <>
     <div>
      <h1>Apis</h1>
    
    </div>
    
    </>
  )
}







