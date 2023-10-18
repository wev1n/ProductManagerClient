import { IProduct } from "../interfaces/IProduct";

interface ProductRowProps {
  product: IProduct;
  onDelete: (sku: string) => void;
}

const ProductRow = ({ product, onDelete }: ProductRowProps) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.sku}</td>
      <td>{product.description}</td>
      <td>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          {product.url}
        </a>
      </td>
      <td>{product.price}</td>
      <td
        onClick={() => onDelete(product.sku)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
