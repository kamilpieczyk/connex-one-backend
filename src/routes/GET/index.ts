import { Request, Response } from "express";

import time from "./time";

export interface GETRoute {
  route: string;
  func: (req: Request, res: Response) => any;
}

const GET: GETRoute[] = [{ route: "/time", func: time }];

export default GET;
