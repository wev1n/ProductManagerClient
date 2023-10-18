import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-8 flex justify-evenly items-center bg-gray-900 border-b-2">
      <Link to="/" className="text-3xl font-bold">
        Table
      </Link>
      <Link to="/AddProductForm" className="text-3xl font-bold">
        Form
      </Link>
    </nav>
  );
};

export default Navbar;
