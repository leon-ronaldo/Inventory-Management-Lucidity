export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  value: number;
  enabled: boolean;
  disabled?: boolean;
  created_at?: string;
  updated_at?: string;
}
