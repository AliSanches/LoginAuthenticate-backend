import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    console.log(req.headers);
    const header = req.headers.authorization;
    console.log(header);

    if (!header) {
      res.status(401).json("Unauthorized request");
      return;
    }

    const token = header.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, "configuracaoAplicacao");
    (req as any).user = decoded;

    next();
  } catch (err) {
    res.status(401).json("Unauthorized request");
  }
};

export default verifyJWT;
