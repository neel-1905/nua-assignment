import { useCartContext } from "../context/cart-context";
import type { Product } from "../types/product.types";

export const useCart = () => {
  const { cart, setCart } = useCartContext();

  const getProductStock = (id: string, size: string) => {
    const stock =
      cart?.products?.find((item: any) => item.id === id && item.size === size)
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
    color,
  }: {
    product: Product;
    size: any;
    quantity: number;
    stock: number;
    color: string;
  }) => {
    const existingItem = cart.products.find(
      (item: any) => item.id === product.id && item.size === size,
    );

    const availableStock = stock - getProductStock(product.id, size);

    if (quantity > availableStock) {
      return alert("Not enough stock available");
    }

    if (existingItem) {
      setCart({
        ...cart,
        products: cart.products.map((item: any) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      });
    } else {
      setCart({
        ...cart,
        products: [
          ...cart.products,
          {
            ...product,
            quantity,
            size,
            color,
          },
        ],
      });
    }
  };

  const incrementQuantity = (
    productId: number,
    size: string,
    stock: number,
  ) => {
    setCart({
      ...cart,

      products: cart.products.map((item: any) => {
        if (item.id === productId && item.size === size) {
          if (item.quantity >= stock) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    });
  };

  const decrementQuantity = (productId: number, size: string) => {
    setCart({
      ...cart,

      products: cart.products
        .map((item: any) =>
          item.id === productId && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item: any) => item.quantity > 0),
    });
  };

  const removeItemFromCart = (productId: number, size: string) => {
    setCart({
      ...cart,

      products: cart.products.filter(
        (item: any) => !(item.id === productId && item.size === size),
      ),
    });
  };

  return {
    cart,
    addToCart,
    getProductStock,
    getAvailableStock,
    removeItemFromCart,
    decrementQuantity,
    incrementQuantity,
  };
};
