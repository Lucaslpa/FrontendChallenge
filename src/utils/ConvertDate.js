export const ConvertDate = (date) => {
  const convertedDate = new Date(date).toLocaleDateString();
  return convertedDate;
};
