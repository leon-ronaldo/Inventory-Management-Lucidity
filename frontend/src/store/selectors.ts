import { type RootState } from "./store";

export const selectInventoryStats = (state: RootState) => {
    const products = state.inventory.products;

    const totalProducts = products.length;

    const totalStoreValue = products.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    );

    const outOfStockCount = products.filter(
        p => p.quantity === 0
    ).length;

    const categoryCount = new Set(
        products.map(p => p.category)
    ).size;

    return {
        totalProducts,
        totalStoreValue,
        outOfStockCount,
        categoryCount
    };
};
