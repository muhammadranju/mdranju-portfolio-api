const router = require("express").Router();

const authRoutes = require("./auth.routes/auth.routes");
const projectRoutes = require("./project.routes/project.routes");
const aboutRoutes = require("./about.routes/about.routes");
const contactRoutes = require("./contact.routes/contact.routes");
const settingRoutes = require("./setting.routes/setting.routes");
const teamRoutes = require("./team.routes/team.routes");

// router.use("/auth", (req, res) => {
//   res.status(200).json({ message: "Hello Auth" });
// });

router.use("/auth", authRoutes);
router.use("/project", projectRoutes);
router.use("/about", aboutRoutes);
router.use("/contact", contactRoutes);
router.use("/setting", settingRoutes);
router.use("/team", teamRoutes);

module.exports = router;
