import type { Product } from "../types/product.types";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const { getItem, setItem } = useLocalStorage("cart");

  const cart = getItem() || { products: [] };

  const getProductStock = (id: string, size: string) => {
    const stock =
      cart?.products?.find((item) => item.id === id && item.size === size)
        ?.quantity || 0;

    return stock;
  };

  const getAvailableStock = (
    productId: string,
    size: string,
    stock: number,
  ) => {
    const quantityInCart = getProductStock(productId, size);

    return stock - quantityInCart;
  };

  const addToCart = ({
    product,
    quantity,
    size,
    stock,
  }: {
    product: Product;
    size: any;
    quantity: number;
    stock: number;
  }) => {
    const existingItem = cart.products.find(
      (item) => item.id === product.id && item.size === size,
    );

    const availableStock = stock - getProductStock(product.id, size);

    if (quantity > availableStock) {
      return alert("Not enough stock available");
    }

    if (existingItem) {
      setItem({
        ...cart,
        products: cart.products.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      });
    } else {
      setItem({
        ...cart,
        products: [
          ...cart.products,
          {
            ...product,
            quantity,
            size,
          },
        ],
      });
    }
  };

  return {
    cart,
    addToCart,
    getProductStock,
    getAvailableStock,
  };
};
