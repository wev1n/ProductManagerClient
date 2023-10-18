import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="text-white bg-gray-800 box-border p-0 m-0">
      <Navbar />
      <main className="flex h-screen justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;
