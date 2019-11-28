import mongoose from "mongoose";
import Memo from "./memo.js";

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

export const startDB = ({
    user,
    pwd,
    url,
    db
  }) =>
  mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`);

export const models = {
  Memo
};