export const formatAmount = (amount: number) => {
  const fixedAmount = (amount / 1000).toFixed(1);
  if (amount >= 1000000) {
    return fixedAmount + "m";
  }
  if (amount >= 1000) {
    return fixedAmount + "k";
  }

  return amount;
};
