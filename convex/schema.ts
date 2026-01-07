import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Contact form submissions log (optional, for tracking)
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    sentAt: v.number(),
  }).index("by_email", ["email"]),
});
