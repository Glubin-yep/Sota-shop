import api from "../http";
import { ProductType } from "../Types/ProductType";
//import { FileData } from "../Types/FileData";
//import AuthService from "./AuthService";

export default class ProductService {
  static async getAllProductForMainPage(
    amount: number
  ): Promise<ProductType[]> {
    try {
      //const user = AuthService.getCurrentUser();
      const response = await api.get<ProductType[]>(
        `/products/mainpage/${amount}`
      );
      return response.data;
    } catch (error) {
      console.error("Error while fetching files:", error);
      throw error;
    }
  }
}
