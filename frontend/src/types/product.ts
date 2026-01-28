export interface Product {
    id: string;          // unique id for react key / db
    name: string;
    category: string;
    price: number;
    quantity: number;
    value: number;       // price * quantity
};
