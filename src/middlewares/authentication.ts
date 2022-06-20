import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export class Auth {
  async authMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const token = request.headers.authorization;

    if (!token) {
      return response.status(403).send({
        error: "Você precisa de um token secreto pra acessar a API.",
      });
    }

    const pass = String(process.env.TOKEN_ASSIGN);

    const parts = token.split(" ");

    const [scheme, tokenValid] = parts;
    jwt.verify(tokenValid, pass, (err, decoded) => {
      if (err) {
        return response
          .status(403)
          .send({ error: "Teu token não é válido." });
      }
      response.locals.decodedToken = decoded;
    });

    return next();
  }
}
