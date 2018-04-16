const router = require("express").Router();
const candidateRoutes = require("./candidateRoutes");
const hiringManagerRoutes = require("./hiringManagerRoutes");
const companyRoutes = require("./companyRoutes");

//API routes
// router.use("/candidate", candidateRoutes);
// router.use("/hiring-manager", hiringManagerRoutes);
// router.use("/company", companyRoutes);

module.exports = router;
