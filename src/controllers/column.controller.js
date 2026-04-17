const {
  createColumn,
  getColumns,
  updateColumn,
  deleteColumn
} = require("../services/column.service")

const create = async (req, res) => {
  try {
    const column = await createColumn(req.params.boardId, req.body.title)
    res.json(column)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getAll = async (req, res) => {
  try {
    const columns = await getColumns(req.params.boardId)
    res.json(columns)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const update = async (req, res) => {
  try {
    const column = await updateColumn(req.params.id, req.body.title)
    res.json(column)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const remove = async (req, res) => {
  try {
    await deleteColumn(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  create,
  getAll,
  update,
  remove
}