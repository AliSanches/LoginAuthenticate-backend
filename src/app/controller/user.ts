const UserService = require("../services/user");

import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  const dataUser = req.body;

  const dao = new UserService();

  const response = await dao.register(dataUser);

  res.status(201).json(response);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const dao = new UserService();

  const response = await dao.login(email, password);

  console.log(response);

  res.status(200).json(response);
}

export async function welcome(req: Request, res: Response) {
  const { id } = req.params;

  const dao = new UserService();

  const response = await dao.welcome(+id);

  console.log(response);

  res.status(200).json(response);
}
