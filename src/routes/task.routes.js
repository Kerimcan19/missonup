const express = require("express")
const controller = require("../controllers/task.controller")

const router = express.Router()

router.post("/:columnId", controller.create)
router.get("/:columnId", controller.getAll)
router.patch("/:id", controller.update)
router.delete("/:id", controller.remove)

// 🔥 move endpoint
router.patch("/:id/move", controller.move)

module.exports = router