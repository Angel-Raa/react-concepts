import { useForm } from "../hook/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationsForm = (form) => {
  let error = {};
  if (!form.name.trim()) {
    error.name = "El nombre es requerido";
  } else if (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name)) {
    error.name = "El nombre no es válido";
  }

  if (!form.email.trim()) {
    error.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    error.email = "El email no es válido";
  }
  if (!form.subject) {
    error.subject = "El asunto es requerido";
  }
  if (!form.comments) {
    error.comments = "El comentario es requerido";
  } isPending,
    response,
  return error;
};

export const Form = () => {
  const {
    form,
    isPending,
    response,
    error,
    handleChange,
    handleReset,
    handleSubmit,
    handlerBlur,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Validación de Formularios</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Escribe tu nombre"
              name="name"
              value={form.name}
              required
              className="border border-gray-300 rounded focus:border-black focus:ring focus:ring-blue-300 invalid:border-red-500 w-full px-3 py-2"
              onBlur={(e) => handlerBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {error.name && (
              <div className="text-red-500 text-sm">
                <code>{error.name}</code>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Escribe tu email"
              name="email"
              value={form.email}
              required
              className="border border-gray-300 rounded focus:border-black focus:ring focus:ring-blue-300 invalid:border-red-500 w-full px-3 py-2"
              onBlur={(e) => handlerBlur(e)}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.email && (
            <div className="text-red-500 text-sm">
              <code>{error.email}</code>
            </div>
          )}
          <div>
            <label htmlFor="subject" className="block text-gray-600">
              Asunto a tratar
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Asunto a tratar"
              name="subject"
              value={form.subject}
              required
              className="border border-gray-300 rounded focus:border-black focus:ring focus:ring-blue-300 invalid:border-red-500 w-full px-3 py-2"
              onBlur={(e) => handlerBlur(e)}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.subject && (
            <div className="text-red-500 text-sm">
              <code>{error.subject}</code>
            </div>
          )}
          <div>
            <label htmlFor="comments" className="block text-gray-600">
              Comentarios
            </label>
            <textarea
              id="comments"
              name="comments"
              cols="50"
              rows="5"
              placeholder="Escribe tus comentarios"
              value={form.comments}
              className="border border-gray-300 rounded focus:border-black focus:ring focus:ring-blue-300 invalid:border-red-500 w-full px-3 py-2"
              onBlur={(e) => handlerBlur(e)}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          {error.comments && (
            <div className="text-red-500 text-sm">
              <code>{error.comments}</code>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              value="Enviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
