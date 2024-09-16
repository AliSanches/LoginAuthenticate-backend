const UserService = require("../services/user");

import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  const dataUser = req.body;

  const dao = new UserService();

  const response = await dao.register(dataUser);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(204).json();
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const dao = new UserService();

  const response = await dao.login(email, password);

  console.log(response);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(401).json(response);
  }
}
