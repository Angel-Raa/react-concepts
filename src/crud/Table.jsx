/* eslint-disable react/prop-types */
import { TableRow } from "./TableRow";

export const Table = ({ datas, setDataToEdit, deleteData }) => {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Datos</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="table__header-cell px-4 py-2 text-align:center">
                Nombre
              </th>
              <th className="table__header-cell px-4 py-2 text-align:center">
                Edad
              </th>
              <th className="table__header-cell px-4 py-2 text-align:center">
                Email
              </th>
              <th className="table__header-cell px-4 py-2 text-align:center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.length > 0 ? (
              <TableRow
                datas={datas}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ) : (
              <tr className="table__empty-row">
                <td colSpan="4" className="text-center py-2">
                  No Hay Datos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
