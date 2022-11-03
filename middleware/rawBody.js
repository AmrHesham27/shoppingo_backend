const RawBodyMiddleware = (req, res, next) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const rawBody = Buffer.concat(body);
    req["rawBody"] = rawBody;
    switch (req.header("content-type")) {
      case "application/json":
        req.body = JSON.parse(rawBody.toString());
        break;
      default:
    }
    next();
  });
  req.on("error", () => {
    res.sendStatus(400);
  });
};

module.exports = RawBodyMiddleware;
