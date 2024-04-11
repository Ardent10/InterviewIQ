import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  
  const authHeader: string | undefined = req.headers["authorization"];

  if (authHeader) {
    const token: string | undefined = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC_KEY!, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not Authenticated!");
  }
};

const verifyTokenAndAuthorization = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("Operation Not allowed!");
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization };
