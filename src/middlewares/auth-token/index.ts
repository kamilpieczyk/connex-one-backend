import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    if (req.headers.authorization === "mysecrettoken") next();
    else res.status(403);
  } else {
    res.status(403);
  }
};
