const router = require("express").Router();
// const authRoutes = require("./auth/auth.route");
// const projectRoutes = require("./project/project.route");

router.use("/auth", (req, res) => {
  res.status(200).json({ message: "Hello Auth" });
});
// routes.use("/project", projectRoutes);

module.exports = router;
