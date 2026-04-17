const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  moveTask
} = require("../services/task.service")

const create = async (req, res) => {
  try {
    const task = await createTask(req.params.columnId, req.body.title)
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getAll = async (req, res) => {
  try {
    const tasks = await getTasks(req.params.columnId)
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const update = async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body)
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const remove = async (req, res) => {
  try {
    await deleteTask(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const move = async (req, res) => {
  try {
    const { toColumnId, newOrder } = req.body

    const task = await moveTask(
      req.params.id,
      toColumnId,
      newOrder
    )

    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  create,
  getAll,
  update,
  remove,
  move
}