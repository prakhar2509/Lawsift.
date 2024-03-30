import mongoose, { Aggregate, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const userDataSchema = new Schema({
    summary : {
        type: String
    },
    strength : {
        type : String
    },
    weakness : {
        type : String
    },
    percent : {
        type :String
    },

},{timestamps: true})

userDataSchema.plugin(mongooseAggregatePaginate)

export const UserData = mongoose.model('UserData', userDataSchema, 'userdatas')
