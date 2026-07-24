const { rateLimit, MINUTE } = require("express-rate-limit");

const createLimiter = ({ limit }) => {
  return rateLimit({
    windowMs: 15 * MINUTE,
    limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    ipv6Subnet: 56,
  });
};

module.exports = createLimiter;
