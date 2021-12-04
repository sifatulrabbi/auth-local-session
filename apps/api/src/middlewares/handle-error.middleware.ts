import { Request, Response, NextFunction } from 'express';

export function handleErrors(
  err: Types.Exception,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err) {
    console.log(err);
    const { stack, message, statusCode, ...rest } = err;
    res.status(err.statusCode).json({
      success: false,
      message: err.message ? err.message : err,
      data: [],
    });
  }

  req.on('error', (err) => {
    console.log(err);
    res.status(500).json({ success: false, message: err });
  });

  next();
}
