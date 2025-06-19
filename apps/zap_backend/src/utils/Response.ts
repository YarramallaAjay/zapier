import { Response } from "express";

export const Apiresponse = {
  success: (res: Response, data: any, message: string = 'Success', status: number = 200) => {
    return res.status(status).json({
      success: true,
      message,
      data
    });
  },
  error: (res: Response, message: string = 'Error', status: number = 400, error:any) => {
    
    return res.status(status).json({
      success: false,
      message, 
      error
    });
  }
};
