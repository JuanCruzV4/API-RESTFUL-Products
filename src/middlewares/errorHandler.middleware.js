export const errorHandler404 = (req, res, next) => {
  res.status(404).json({ error: "Not found" });
};

export  const errorHandler500 = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Internal Error" });
}
