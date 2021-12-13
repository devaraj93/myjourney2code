export const rolledValue = (diceValue) => {
  console.log(diceValue);
  return { type: "DICE_ROLLED", payload: diceValue };
};
