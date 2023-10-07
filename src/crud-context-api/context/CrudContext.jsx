/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { helpHttp } from "../../helper/helpHttp";

const CrudContext = createContext();
const CrudProvider = ({ children }) => {
  const [error, setError] = useState(null); //
  const [loading, setLoading] = useState(false); //s
  const [datas, setData] = useState({
    id: null,
    name: "",
    age: "",
    email: "",
  });
  const [dataToEdit, setDataToEdit] = useState(null);
  const api = helpHttp();
  const url = "http://localhost:5000/users";
  useEffect(() => {
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        setData(res);
        setError(null);

        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        setData([]);
      });
    setLoading(false);
  }, [url]);
  const createData = (db) => {
    db.id = Date.now();
    api
      .post(url, { body: db })
      .then((res) => {
        console.log(res);
        setData([...datas, res]);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        setData([]);
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
        setData(datas.map((it) => (it.id === db.id ? db : it)));
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
        setData([]);
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
        setData([]);
      });
    let deleteData = datas.filter((it) => it.id !== id);
    setData(deleteData);
  };
  const data = {
    datas,
    error,
    loading,
    dataToEdit,
    setDataToEdit,
    createData,
    updateData,
    deleteData,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
