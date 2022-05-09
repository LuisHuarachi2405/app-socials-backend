import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: 'get users'
  })
}

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    msg: 'get users'
  })
}

export const createUser = (req: Request, res: Response) => {
  const { body } = req

  res.json({
    msg: 'create User',
    body
  })
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