import api from "../http";
import { UserInfoType } from "../Types/UserInfoType";

export default class UserService {
  static async getUserInfo(): Promise<UserInfoType> {
    try {
      const response = await api.get<UserInfoType>(`/users/info`);
      return response.data;
    } catch (error) {
      console.error("Error while fetching files:", error);
      throw error;
    }
  }
}
