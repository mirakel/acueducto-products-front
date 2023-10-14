export interface Product {
  id: number;
  title: string;
  image_url: string;
  brand_id?: number;
  description?: string;
  price: number;
  created_at?: string;
  updated_at?: string;
  brand: string;
}
