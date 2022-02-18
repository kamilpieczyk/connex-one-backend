import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const response = {
    properties: {
      epoch: {
        description: Date.now(),
        type: "number",
      },
    },
    required: ["epoch"],
    type: "object",
  };

  res.status(200).json(response);
};
