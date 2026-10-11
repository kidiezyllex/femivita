import { Schema, models, model } from "mongoose";

const LandingPageSchema = new Schema(
  {
    header: { type: Object, required: true },
    hero: { type: Object, required: true },
    brandStory: { type: Object, required: true },
    dualAntiAging: { type: Object, required: true },
    productsSection: { type: Object, required: true },
    faqSection: { type: Object, required: true },
    ctaSection: { type: Object, required: true },
    footer: { type: Object },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "landing_pages" }
);

export const LandingPage = models.LandingPage || model("LandingPage", LandingPageSchema);
