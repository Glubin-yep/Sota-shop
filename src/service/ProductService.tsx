import api from "../http";
import { ProductDetails } from "../Types/ProductDetails";
import { ProductType } from "../Types/ProductType";
//import { FileData } from "../Types/FileData";
//import AuthService from "./AuthService";

export default class ProductService {
  static async getAllProductForMainPage(
    amount: number
  ): Promise<ProductType[]> {
    try {
      const response = await api.get<ProductType[]>(
        `/products/mainpage/${amount}`
      );
      return response.data;
    } catch (error) {
      console.error("Error while fetching files:", error);
      throw error;
    }
  }

  static async getProductByID(id: string): Promise<ProductDetails> {
    try {
      const response = await api.get<ProductDetails>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error while fetching files:", error);
      throw error;
    }
  }
}
