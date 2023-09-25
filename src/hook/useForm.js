import { useState } from "react";
import { helpHttp } from "../helper/helpHttp";

export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState({});
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validationsForm(form));
    if (Object.keys(error).length === 0) {
      setIsPending(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/angelagueror23@gmail.com", {
          body: form,
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setIsPending(false);
          setResponse(res);
          setForm(initialForm);
        });
    } else {
      return;
    }
  };
  const handleReset = (e) => {};
  const handlerBlur = (e) => {
    handleChange(e);
    setError(validationsForm(form));
  };

  return {
    form,
    isPending,
    response,
    error,
    handleChange,
    handleReset,
    handleSubmit,
    handlerBlur,
  };
};
