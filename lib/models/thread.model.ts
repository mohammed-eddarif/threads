import mongoose from "mongoose";
import { date, string } from "zod";

const threadSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      parentId: {
        type: String,
      },
      children: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Thread",
        },
      ],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;

//a tread can have multiple thread comments , and a comment can have thread comments on it too

// thread
//     -> thread comm1 
//     -> thread comm2 
//         -> thread comm21