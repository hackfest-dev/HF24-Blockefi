import { RequestHandler } from "express";
import { JwtPayload, Secret, verify } from "jsonwebtoken";
import { userModel as users } from "../models/user.model";

export const authUser: RequestHandler = async (req, res, next) => {
  const token: string | undefined = req.cookies.token || req.headers.authorization?.split(" ")[1]

  if (!token) {
    res.status(401).send("User not authorized")
    return
  }

  const decoded: string | JwtPayload = verify(token, process.env.SECRETE_KEY as Secret);

  const user = await users.findOne({ email: (decoded as any).email })

  if (user) {
    (req as any).user = user
    next()
  } else res.status(401).json({message: "unauthorized user"})
}