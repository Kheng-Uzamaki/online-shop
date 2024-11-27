import { isValidObjectId } from "mongoose";

function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.objectId)) {
    res.status(404);
    throw new Error(`Invalid objectId of:${req.params.id}`);
  }
  next();
}

export default checkObjectId;
