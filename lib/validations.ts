import { z } from "zod";

export const waitlistSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  school_name: z.string().min(2, "School name is required"),
  city: z.string().min(2, "City is required"),
  role: z.enum(["School Admin", "Principal", "Teacher", "Other"]),
  school_type: z.enum(["Government", "Private", "Semi-Private"]),
  student_count: z.enum(["<100", "100-500", "500-1000", "1000+"]),
  referral_source: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
