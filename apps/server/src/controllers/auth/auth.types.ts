import { ObjectId } from "mongoose"

export interface AuthRegisterBodyType {
  name: string,
  email: string,
  password: string
}

export interface userType {
  _id: ObjectId,
  name: string,
  email: string,
  password: string
}[]