import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  workEmail: z
    .string()
    .email("Please provide a valid work email address")
    .max(150, "Email address is too long")
    .trim(),
  companyName: z
    .string()
    .min(2, "Company or organization name is required")
    .max(120, "Company name cannot exceed 120 characters")
    .trim(),
  projectType: z.string().min(1, "Please select a project category"),
  estimatedBudget: z.string().optional(),
  projectTimeline: z.string().optional(),
  projectDescription: z
    .string()
    .min(20, "Please provide at least 20 characters describing your project or challenges")
    .max(2500, "Project description cannot exceed 2500 characters")
    .trim(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to submit an inquiry",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
