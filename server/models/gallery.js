import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "category"}
},{
    timestamps: true,
    versionKey: false,
});

const galleryModel = mongoose.model("gallery", gallerySchema);

export default galleryModel;