import { useState } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
const initialDb = [
  {
    id: 1,
    name: "Rick",
    age: 30,
    email: "rick.gmail.com",
  },
  {
    id: 2,
    name: "Morty",
    age: 15,
    email: "morty.gmail.com",
  },
  {
    id: 3,
    name: "Beth",
    age: 30,
    email: "beth.gmail.com",
  },
];
export const Crud = () => {
  const [datas, setData] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (db) => {
    db.id = Date.now();
    setData([...datas, db]);
  };
  const updateData = (db) => {
    let newData = datas.map((it) => it.id === db.id ? db : it);
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
        <Table
          datas={datas}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </>
  );
};
