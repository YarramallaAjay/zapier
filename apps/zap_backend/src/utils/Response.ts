import { Response } from "express";
import { Status } from "@repo/types/src/Status";

export const response = (
  res: Response,
  code: number,
  message: string,
  data: any = {},
  error: any = null
) => {
  return res.status(code).json({
    message,
    status: code < 400 ? Status.SUCCESS : Status.FAILED,
    data,
    error,
  });
};
