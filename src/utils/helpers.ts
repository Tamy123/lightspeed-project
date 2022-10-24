export const getPrice = (val: number, qty: number) => {
    return (Number(val) * qty).toFixed(2);
};
