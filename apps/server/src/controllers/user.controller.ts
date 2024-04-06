import { RequestHandler } from "express";
import { userModel as users } from "../models/user.model";

export const findUserByEmail: RequestHandler = async (req, res) => {
  const email: string = req.params.email;

  const user = await users.findOne({ email: email });

  if (!user) {
    res
      .status(404)
      .json({
        error: "user not found",
        message: "user with this email id not found",
      });
    return;
  }

  const { password, ...userWithoutPass } = user;

  res
    .status(200)
    .json({ user: (userWithoutPass as any)._doc, message: "user found" });
};
