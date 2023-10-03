export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatMoney = (amount: number) => (amount / 100).toFixed(2);
