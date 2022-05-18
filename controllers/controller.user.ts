import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json({
    msg: 'get users',
    users: users
  })
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await User.findOne({ where: { id: parseInt(id) } });

  res.json({
    msg: 'get user from ' + id,
    user: user
  })
}

export const createUser = async (req: Request, res: Response) => {
  const { body } = req

  try {

    const user = new User(body)
    await user.save()

    res.json({
      msg: 'create User',
      user
    })
  } catch (e) {
    console.log(e);
    
    res.status(500).json({
      msg: 'error create user',
    })
  }
}

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req

  res.json({
    msg: 'update User',
    body
  })
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params


  res.json({
    msg: 'create User',
    id
  })
}