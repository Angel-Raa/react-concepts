import { useParams, useNavigate } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const findProduct = (id) => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
      },
    ];

    // Convierte productId a un número antes de la comparación
    const numericId = parseInt(id, 10);

    return products.find((product) => product.id === numericId);
  }

  const product = findProduct(productId);
  const handlerGoBack = () => {
    navigate(-1);
  
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <div>
          <h3>{ product}</h3>
        </div>
        <button onClick={handlerGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back</button>
      </div>
    </>
  );
};


