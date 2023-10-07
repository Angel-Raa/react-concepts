import { useContext } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
import CrudContext from "../context/CrudContext";
import { Loader } from "../../components/page/Loader";
import { Message } from "../../components/page/Message";

export const Crud = () => {
  const { loading, error } = useContext(CrudContext);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">CRUD con Context Api</h1>
        {/* Form */}
        <Form />
        {/*  */}

        {/* Table */}
        {loading && <Loader />}
        {error && (
          <Message
            error={`Error ${error.status} : ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        <Table />
      </div>
    </>
  );
};
