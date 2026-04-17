import prisma from "../prisma/prismaClient.js";

// BOARD OLUŞTUR
export const createBoard = async (req, res) => {
  try {
    const { title } = req.body;

    const board = await prisma.board.create({
      data: {
        title,
        members: {
          create: {
            userId: req.user.userId,
            role: "OWNER"
          }
        } 
      }
    });

    res.json(board);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// USER'IN BOARD'LARI
export const getBoards = async (req, res) => {
  try {
    const boards = await prisma.board.findMany({
      where: {
        members: {
          some: {
            userId: req.user.userId
          }
        }
      },
      include: {
        columns: true
      }
    });

    res.json(boards);
  } catch (err) {
    res.status(500).json(err.message);
  }
};