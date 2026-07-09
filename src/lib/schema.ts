// Shared zod schemas — used by both the React form islands (client validation)
// and the /api/* endpoint stubs (server validation). Written in zod 3 syntax.

import { z } from "zod";

// --- Multi-step inquiry (contact page) -------------------------------------
export const inquiryFormSchema = z.object({
  // Step 1 — trip basics
  primaryMonth: z.string().min(1, "Pick a primary month"),
  alternateMonth: z.string().optional(),
  duration: z.enum(["3-5", "6-8", "9-12", "13+"], {
    required_error: "Pick a trip length",
  }),
  adults: z.number().int().min(1, "At least 1 adult").max(20),
  children: z.number().int().min(0).max(20),

  // Step 2 — interests
  interests: z.array(z.string()).min(1, "Pick at least one interest"),

  // Step 3 — style & budget
  style: z.enum(["Budget", "Mid-range", "Luxury", "Family"], {
    required_error: "Pick a style",
  }),
  budgetUsd: z.number().min(500).max(20000),

  // Step 4 — contact
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  country: z.string().min(2, "Pick your country"),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

// --- Server-side inquiry payload (lenient — accepts both the multi-step form
//     and the shorter tour-sidebar inquiry) ---------------------------------
export const inquiryApiSchema = z.object({
  // Multi-step form
  primaryMonth: z.string().optional(),
  alternateMonth: z.string().optional(),
  duration: z.string().optional(),
  adults: z.coerce.number().optional(),
  children: z.coerce.number().optional(),
  interests: z.array(z.string()).optional(),
  style: z.string().optional(),
  budgetUsd: z.coerce.number().optional(),
  fullName: z.string().optional(),
  email: z.string().email().optional(),
  country: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),

  // Tour sidebar inquiry
  name: z.string().optional(),
  month: z.string().optional(),
  group: z.string().optional(),
  tourSlug: z.string().optional(),

  source: z.string().optional(),
});

// --- Newsletter ------------------------------------------------------------
export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

// --- Chat launcher ---------------------------------------------------------
export const chatStartSchema = z.object({
  message: z.string().min(1).max(2000),
  name: z.string().optional(),
});
