import { useContext } from "react";
import CrudContext from "../context/CrudContext";

/* eslint-disable react/prop-types */
export const TableRow = () => {
  const { datas, setDataToEdit, deleteData } = useContext(CrudContext);
  return (
    <>
      {datas.map((data) => (
        <tr key={data.id} className="table__row">
          <td className="table__cell px-4 py-2">{data.name}</td>
          <td className="table__cell px-4 py-2">{data.age}</td>
          <td className="table__cell px-4 py-2">{data.email}</td>
          <td className="table__cell px-4 py-2 cursor-pointer">
            <button
              onClick={() => setDataToEdit(data)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => deleteData(data.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md"
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
