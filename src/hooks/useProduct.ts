import { useEffect, useState } from "react";
import { getProduct } from "../services/product.service";

export function useProduct(id: string) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}
