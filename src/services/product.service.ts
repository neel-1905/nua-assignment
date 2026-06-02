import { API_BASE_URL } from "../constants";

export async function getProduct(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
