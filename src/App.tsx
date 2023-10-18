import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "./interfaces/IProduct";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootPage from "./pages/RootPage";
import AddProductForm from "./components/AddProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onAddProduct = (newProduct: IProduct) => {
    axios
      .post("https://localhost:8000/products", newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
      })
      .catch((error) => {
        console.error("Error adding a new product:", error);
      });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route
          index
          element={
            <ProductTable products={products} setProducts={setProducts} />
          }
        ></Route>
        <Route
          path="AddProductForm"
          element={<AddProductForm onAddProduct={onAddProduct} />}
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
