import { useEffect, useReducer, useState } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
import { helpHttp } from "../helper/helpHttp";
import { Loader } from "../components/page/Loader";
import { Message } from "../components/page/Message";
import { CrudInitialState, CrudReducer } from "../reducers/reducer/CrudReducer";
import { TYPES } from "../reducers/actions/CrudActions";

export const Crud = () => {
  const [state, dispath] = useReducer(CrudReducer, CrudInitialState);
  const { datas } = state;
  const [error, setError] = useState(null); //
  const [loading, setLoading] = useState(false); //s
  const [dataToEdit, setDataToEdit] = useState(null);
  /**
   *  const [datas, setData] = useState({
    id: null,
    name: "",
    age: "",
    email: "",
  });
   */

  const api = helpHttp();
  const url = "http://localhost:5000/users";
  useEffect(() => {
    setLoading(true);
    api
      .get(url)
      .then((res) => {
       // setData(res);
        setError(null);

        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
      //  setData([]);
      });
    setLoading(false);
  }, [url]);
  const createData = (db) => {
    db.id = Date.now();
    api
      .post(url, { body: db })
      .then((res) => {
        console.log(res);
        dispath({
          type: TYPES.CREATE_DATA,
          payload: res,
        });
        //  setData([...datas, res]);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        //  setData([]);
      });
  };
  const updateData = (db) => {
    let endPoint = `${url}/${db.id}`;
    console.log(endPoint);
    api
      .put(endPoint, {
        body: db,
      })
      .then((res) => {
        console.log(res);
        // setData(datas.map((it) => (it.id === db.id ? db : it)));
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        //  setData([]);
      });
    //let newData = datas.map((it) => (it.id === db.id ? db : it));
    // setData(newData);
  };
  const deleteData = (id) => {
    let endPoint = `${url}/${id}`;
    api
      .del(endPoint)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        //  setData([]);
      });
    let deleteData = datas.filter((it) => it.id !== id);
    //setData(deleteData);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
        {/* Form */}
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {/* Table */}
        {loading && <Loader />}
        {error && (
          <Message
            error={`Error ${error.status} : ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {datas ? (
          <Table
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
      </div>
    </>
  );
};
