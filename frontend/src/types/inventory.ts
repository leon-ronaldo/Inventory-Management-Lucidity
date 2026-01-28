import type { Product } from "./product";

export interface Inventory {
    products: Product[];
    totalProducts: number;
    totalStoreValue: number;
    outOfStockCount: number;
    categoryCount: number;
}
