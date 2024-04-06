import { RequestHandler } from "express";
// import { genSalt, hash } from "bcrypt";
import { userModel as user } from "../../models/user.model";
import { AuthRegisterBodyType, userType } from "./auth.types";
import { Secret, sign } from "jsonwebtoken";

export const handleSignUp: RequestHandler = async (req, res) => {
  const { name, email, password }: AuthRegisterBodyType = req.body;

  const duplicateUser = await user.find({ email: email });

  if (duplicateUser.length) {
    res.status(409).json({
      error: "duplicate user",
      message: "an user is already register with this email id",
    });

    return;
  }

  // const hashedPassword = genSalt(10)
  //   .then((salt) => hash(password, salt))
  //   .catch((err) => {
  //     console.log("fail to hash the password due to\n", err);
  //     res.status(500).send("internal server error")
  //   });

  user
    .create({
      name,
      email,
      password,
    })
    .then((user) =>
      res.json({ user: user, message: "user registered successfully" })
    )
    .catch((err) => {
      console.log("fail to register user due to\n", err);
      res.status(500).send("internal server error");
    });
};

export const handleLogin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const registerUser: any = await user.findOne({ email: email });

  if (!registerUser) {
    res
      .status(404)
      .json({
        error: "user not found",
        message: "user with this email id not found",
      });
    return;
  }  

  if (password === registerUser.password) {
    const token: string = sign(
      {
        _id: registerUser._id,
        name: registerUser.name,
        email: registerUser.email,
      },
      process.env.SECRETE_KEY as Secret,
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, {
        maxAge: 3600000,
        httpOnly: true,
      })
      .status(200)
      .send({token: token, message: "user Login successfully"});
  } else
    res
      .status(401)
      .json({ error: "incorrect password", message: "password didn't match" });
};
