import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  console.log("👨🏻‍💻 authorisation middleware");
  console.log("token value: ", req.headers.authorization);
  if (req.headers.authorization) {
    if (req.headers.authorization === "Bearer mysecrettoken") next();
    else
      res.status(403).json({
        status_code: 403,
        server_msg: "",
      });
  } else {
    res.status(403).json({
      status_code: 403,
      server_msg: "authorisation token is mandatory",
    });
  }
};
