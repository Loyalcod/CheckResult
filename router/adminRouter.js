const express = require("express");
const { registerAdmin, loginAdmin, refreshLoginAdmin, logOutAdmin } = require("../controllers/adminCrude");
const router = express.Router()

/* --------------------------------------------------------- admin create router -------------------------------------------------------- */
router.post("/",registerAdmin)

/* ------------------------------------------------------------ login router ------------------------------------------------------------ */
router.post('/login',loginAdmin)

/* ----------------------------------------------------- refresh login admin router ----------------------------------------------------- */
router.get('/refresh',refreshLoginAdmin)

/* ------------------------------------------------------------ logout router ----------------------------------------------------------- */
router.get("/logout",logOutAdmin)



module.exports = router;