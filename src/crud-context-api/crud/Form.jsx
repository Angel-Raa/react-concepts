/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
  id: null,
  name: "",
  age: "",
  email: "",
};

// eslint-disable-next-line no-unused-vars
export const Form = () => {
  const { dataToEdit, setDataToEdit, createData, updateData } =
    useContext(CrudContext);
  const [form, setForm] = useState(initialForm);
  const handlerChange = (e) => {
    console.log("Handler Change");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handlerSubmit = (e) => {
    e.preventDefault(); //Previene que se recargue la pagina
    if (!form.name || !form.age || !form.email) {
      alert("Complete todos los campos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handlerReset();
  };

  const handlerReset = (e) => {
    console.log("Handler Reset");
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <>
      {/* Form */}

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          {dataToEdit ? "Update User" : "Add New User"}
        </h1>
        <form onSubmit={(e) => handlerSubmit(e)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handlerChange}
            value={form.name}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={handlerChange}
            value={form.age}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handlerChange}
            value={form.email}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <div className="flex space-x-4">
            <input
              type="submit"
              value="Enviar"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            />
            <input
              onClick={handlerReset}
              type="reset"
              value="Reset"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
};
