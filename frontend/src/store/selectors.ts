import { type RootState } from "./store";

export const selectInventoryStats = (state: RootState) => {
    const products = state.products.products;

    const totalProducts = products.length;

    const totalStoreValue = products.reduce(
        (sum: number, p: { price: number; quantity: number }) => sum + p.price * p.quantity,
        0
    );

    const outOfStockCount = products.filter(
        (p: { quantity: number }) => p.quantity === 0
    ).length;

    const categoryCount = new Set(
        products.map((p: { category: string }) => p.category)
    ).size;

    return {
        totalProducts,
        totalStoreValue,
        outOfStockCount,
        categoryCount
    };
};
