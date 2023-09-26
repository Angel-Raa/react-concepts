import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <Link to="/" className="text-white hover:underline mx-2">
          Home  
        </Link>
        <Link to="/about" className="text-white hover:underline mx-2">
          About
        </Link>
        <Link to="/contact" className="text-white hover:underline mx-2">
          Contact
        </Link>
      </nav>

    
    </>
  );
};
