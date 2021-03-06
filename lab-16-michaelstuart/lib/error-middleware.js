// eslint-disable-next-line
module.exports = (err, req, res, next) => {

  if (err.message.toLowerCase().includes('required')) return res.sendStatus(400);

  if (err.message.toLowerCase().includes('server failed')) return res.sendStatus(409);

  if (err.message.toLowerCase().includes('unauthorized')) return res.sendStatus(401);

  /* istanbul ignore next */
  if (err.message.toLowerCase().includes('bad request')) return res.sendStatus(400);

  res.sendStatus(500);
};
