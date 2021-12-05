import { Response } from 'express';

export class JSONResponse {
  constructor(res: Response, success: boolean, statusCode: number, message: string, data?: any[]) {
    res.status(statusCode).json({ success, statusCode, message, data });
  }

  static InternalError(res: Response): void {
    new JSONResponse(res, false, 500, 'Internal error');
  }

  static Unauthorized(res: Response, message: string = 'Unauthorized'): void {
    new JSONResponse(res, false, 401, message, []);
  }

  static NotFound(res: Response, message: string = 'Not found'): void {
    new JSONResponse(res, false, 404, message, []);
  }

  static Bad(res: Response, message: string = 'Bad request'): void {
    new JSONResponse(res, false, 400, message, []);
  }

  static Ok(res: Response, message: string = 'OK', data: any[]): void {
    new JSONResponse(res, true, 200, message, data);
  }

  static created(res: Response, message: string = 'Created', data: any[]): void {
    new JSONResponse(res, true, 201, message, data);
  }
}
