const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});
exports.requireAuth = async (req, res, next) => {
  try {
    // const token = req.cookies.jwt;
    const query = req.query;
    let { token } = query;
    token = token.split(" ")[1];

    console.log("token in server", token)
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          throw new Error("'Not Authorized'");
        }
        req.id = decodedToken.id;
        next();
      });
    } else {
      throw new Error("'Not Authorized'");
    }
  } catch (err) {
    res.status(401).json({ msg: err.message });
  }
};
