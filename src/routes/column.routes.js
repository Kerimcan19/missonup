const express = require("express")
const controller = require("../controllers/column.controller")

const router = express.Router()

router.post("/:boardId", controller.create)
router.get("/:boardId", controller.getAll)
router.patch("/:id", controller.update)
router.delete("/:id", controller.remove)

module.exports = router