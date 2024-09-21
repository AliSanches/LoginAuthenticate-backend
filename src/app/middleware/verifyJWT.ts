import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const header = req.headers["authorization"];

    if (!header) {
      res.status(401).json("Unauthorized request");
      return;
    }

    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, "configuracaoAplicacao");
    req.body.id = decoded;

    next();
  } catch (err) {
    res.status(401).json("Unauthorized request");
  }
};

export default verifyJWT;
