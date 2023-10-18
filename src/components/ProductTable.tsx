import React, { useState } from "react";
import ProductRow from "./ProductRow";
import { IProduct } from "../interfaces/IProduct";
import axios from "axios";

interface ProductTableProps {
  products: IProduct[];
  setProducts: (value: React.SetStateAction<IProduct[]>) => void;
}

const ProductTable = ({ products, setProducts }: ProductTableProps) => {
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);

  const handleDelete = async (sku: string) => {
    try {
      await axios.delete(`https://localhost:8000/products/${sku}`);
      setProducts(products.filter((product) => product.sku !== sku));
    } catch (error) {
      console.error("Error deleting the product:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://localhost:8000/products?name=${searchName}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  return (
    <div className="overflow-x-auto w-10/12 border-2 rounded-xl p-8">
      <div>
        <input
          type="text"
          placeholder="Sök produkt"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-500 text-white mx-3"
        >
          Sök
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Image (URL)</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0
            ? searchResults.map((product) => (
                <ProductRow
                  key={product.sku}
                  product={product}
                  onDelete={handleDelete}
                />
              ))
            : products.map((product) => (
                <ProductRow
                  key={product.sku}
                  product={product}
                  onDelete={handleDelete}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
