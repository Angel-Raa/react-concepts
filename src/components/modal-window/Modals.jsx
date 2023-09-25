import { useModal } from "../../hook/useModal";
import { Modal } from "./Modal";

export const Modals = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  return (
    <>
      <div >
        <h2>Modales</h2>
        <button onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Abrir
        </button>
        <Modal isOpen={isOpen } closeModal={closeModal}>
          <h2>Contenido de la ventana modal</h2>
        </Modal>
      </div>
    </>
  );
};
