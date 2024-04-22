function localeDateFormat(date) {
  const formatedDate = new Date(date).toLocaleDateString();
  return formatedDate;
}