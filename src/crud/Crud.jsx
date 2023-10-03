import { useEffect, useState } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
import { helpHttp } from "../helper/helpHttp";
import { Loader } from "../components/page/Loader";
import { Message } from "../components/page/Message";

export const Crud = () => {
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
        setError(null)

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

    setData([...datas, db]);
  };
  const updateData = (db) => {
    let newData = datas.map((it) => (it.id === db.id ? db : it));
    setData(newData);
  };
  const deleteData = (id) => {
    let deleteData = datas.filter((it) => it.id !== id);
    setData(deleteData);
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
        {loading && <Loader/>}
        {error && <Message error={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
        <Table
          datas={datas}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      
      </div>
    </>
  );
};
