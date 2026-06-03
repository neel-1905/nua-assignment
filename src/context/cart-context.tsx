import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContextType = {
  cart: any;
  setCart: Dispatch<SetStateAction<any>>;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { getItem, setItem } = useLocalStorage("cart");

  const [cart, setCart] = useState(
    () =>
      getItem() || {
        products: [],
      },
  );

  useEffect(() => {
    setItem(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }

  return context;
};
