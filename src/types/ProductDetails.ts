import { Category } from "./Category.enums";

interface LaptopDetails {
  id: number;
  CPU: string;
  RAM: number;
  ROM: number;
  video_card: string;
  VRAM: number;
  refresh_rate: number;
}

interface ComputerDetails {
  id: number;
  CPU: string;
  RAM: number;
  ROM: number;
  video_card: string;
  RAM_version: string;
}

interface SmartphoneDetails {
  id: number;
  camera: string;
  RAM: number;
  ROM: number;
  batteryCapacity: number;
  refresh_rate: number;
  sim_slot: number;
}

interface SoftwareDetails {
  id: number;
  term_of_the_license: string;
  type: number;
  Number_of_users: number;
}

interface AccessoriesDetails {
  id: number;
  compatibility: string;
  type: string;
}

interface SmartHomeDetails {
  id: number;
  type_conection: string;
  wireless_standart: string;
  compatibility: string;
}

interface TVDetails {
  id: number;
  screenResolution: string;
  smartTV: boolean;
  matrix_type: string;
  OS: string;
}

interface KitchenDetails {
  id: number;
  origin: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  price: string;
  discount: number;
  brand: string;
  category: Category;
  photoURL: string;
  rating: number;
  laptopDetails?: LaptopDetails | null;
  computerDetails?: ComputerDetails | null;
  smartphoneDetails?: SmartphoneDetails | null;
  softwareDetails?: SoftwareDetails | null;
  accessoriesDetails?: AccessoriesDetails | null;
  smartHomeDetails?: SmartHomeDetails | null;
  tvDetails?: TVDetails | null;
  kitchenDetails?: KitchenDetails | null;
}
