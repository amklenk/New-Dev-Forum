const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const bugRoutes = require("./bug-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/bugs", bugRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
