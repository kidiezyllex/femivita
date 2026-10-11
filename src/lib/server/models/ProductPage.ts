import { Schema, models, model, Schema as MongooseSchema } from "mongoose";

const ProductPageSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    badge: { type: String },
    tags: { type: [String], default: [] },
    pricing: { type: Object, required: true },
    galleryImages: { type: [String], default: [] },
    bundleItems: { type: [MongooseSchema.Types.Mixed], default: [] },
    suitability: { type: String, required: true },
    uses: { type: [String], default: [] },
    keyIngredients: { type: [MongooseSchema.Types.Mixed], default: [] },
    ingredientsDetail: { type: [MongooseSchema.Types.Mixed], default: [] },
    usageSteps: { type: [MongooseSchema.Types.Mixed], default: [] },
    reviews: { type: [MongooseSchema.Types.Mixed], default: [] },
    ratingValue: { type: String, default: "4.9" },
    ratingCount: { type: String, default: "" },
    usageInstructionBanner: { type: Object },
    upsellBanner: { type: Object },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "product_pages" }
);

export const ProductPage = models.ProductPage || model("ProductPage", ProductPageSchema);
