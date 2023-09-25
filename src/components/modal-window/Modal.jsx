/* eslint-disable react/prop-types */

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <>
       {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white w-96 p-4 rounded shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
