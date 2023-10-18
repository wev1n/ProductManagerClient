import { useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface AddProductFormProps {
  onAddProduct: (newProduct: IProduct) => void;
}

const AddProductForm = ({ onAddProduct }: AddProductFormProps) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    description: "",
    url: "",
    price: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      newProduct.name &&
      newProduct.sku &&
      newProduct.description &&
      newProduct.url &&
      newProduct.price !== 0
    ) {
      onAddProduct(newProduct);
      setNewProduct({
        name: "",
        sku: "",
        description: "",
        url: "",
        price: 0,
      });
    } else {
      alert("Vänligen fyll i alla fält.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center border-2 rounded-xl w-6/12 p-8">
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleInputChange}
        placeholder="Namn"
        className="input input-bordered w-full max-w-xs m-4"
      />
      <input
        type="text"
        name="sku"
        value={newProduct.sku}
        onChange={handleInputChange}
        placeholder="Sku"
        className="input input-bordered w-full max-w-xs m-4"
      />
      <input
        type="text"
        name="description"
        value={newProduct.description}
        onChange={handleInputChange}
        placeholder="Beskrivning"
        className="input input-bordered w-full max-w-xs m-4"
      />
      <input
        type="text"
        name="url"
        value={newProduct.url}
        onChange={handleInputChange}
        placeholder="Bild (URL)"
        className="input input-bordered w-full max-w-xs m-4"
      />
      <input
        type="number"
        name="price"
        value={newProduct.price !== 0 ? newProduct.price.toString() : ""}
        onChange={handleInputChange}
        placeholder="Pris"
        className="input input-bordered w-full max-w-xs m-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-2 rounded m-4 w-full max-w-xs"
      >
        Lägg till produkt
      </button>
    </form>
  );
};

export default AddProductForm;
