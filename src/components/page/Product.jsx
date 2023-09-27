import { Link } from "react-router-dom";

export const Product = () => {
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
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <table className="table-auto border rounded">
          <thead className="thead-dark">
            <tr>
              <th className="px-4 py-2 text-white font-bold">ID</th>
              <th className="px-4 py-2 text-white font-bold">Name</th>
              <th className="px-4 py-2 text-white font-bold">Price</th>
            </tr>
          </thead>
          <tbody className="tbody-stripes">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <Link to={`/products/${product.id}`} className="px-4 py-2 text-center">{product.id}</Link>
                <td className="px-4 py-2 text-center">{product.name}</td>
                <td className="px-4 py-2 text-center">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
