import { Schema, models, model } from "mongoose";

const StoryPageSchema = new Schema(
  {
    storyBanner: { type: Object, required: true },
    storyDetails: { type: Object, required: true },
    missionPromise: { type: Object, required: true },
    storyCombo: { type: Object, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "story_pages" }
);

export const StoryPage = models.StoryPage || model("StoryPage", StoryPageSchema);
