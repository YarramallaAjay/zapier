import { Response } from "express";
import { Status } from "@repo/types/dist/Status";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const response = (
  res: Response,
  code: number,
  message: string,
  data: any={} ,
  error: any={}
) => {
  if(error && error instanceof PrismaClientKnownRequestError){
    return res.status(500).json({
      message,
      status:Status.FAILED,
      data:{},
      error:error
    })
  }
  return res.status(code).json({
    message,
    status: code < 400 ? Status.SUCCESS : Status.FAILED,
    data,
    error,
  });
};
