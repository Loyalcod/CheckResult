const express = require("express")
const { createClass, getClass, getOneClass, updateClass, deleteClass } = require("../controllers/studentClassCrude")
const router = express.Router()



/* --------------------------------------------------------- create class router -------------------------------------------------------- */
router.post('/',createClass)

/* ---------------------------------------------------------- get class router ---------------------------------------------------------- */
router.get('/',getClass)

/* ---------------------------------------------------------- one class router ---------------------------------------------------------- */
router.get("/:classId",getOneClass)

/* --------------------------------------------------------- update class router -------------------------------------------------------- */
router.patch("/:classId",updateClass)

/* ---------------------------------------------------------- del class router ---------------------------------------------------------- */
router.delete("/:classId",deleteClass)




module.exports = router;