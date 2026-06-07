"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const WaitlistForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      role: "Teacher",
      school_type: "Private",
      student_count: "100-500",
    },
  });

  const onSubmit = async (data: WaitlistInput) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto p-12 md:p-16 text-center border border-glass-border bg-white rounded-[40px] shadow-sm">
        <div className="text-5xl mb-6">🎉</div>
        <h2 className="text-2xl font-serif font-bold text-text-primary mb-4">
          You're on the list!
        </h2>
        <p className="text-text-secondary mb-8 leading-relaxed font-sans max-w-sm mx-auto">
          We've received your application. Expect a WhatsApp or email from us within 48 hours. We review applications daily and prioritize schools in Gujarat.
        </p>
        <Link href="/" className="text-primary font-bold hover:underline underline-offset-4 transition-all">
          Back to home →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10 md:p-14 bg-white border border-glass-border rounded-[40px] shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
            Apply for Alpha Access
          </h2>
          <p className="text-lg text-text-secondary font-sans">
            Join the 50 pilot schools co-building the future of Bharat's classrooms.
          </p>
        </div>

        <div className="space-y-6">
          <Input
            label="Full Name"
            placeholder="Kandarp Trivedi"
            {...register("full_name")}
            error={errors.full_name?.message}
          />
          <Input
            label="School Email Address"
            type="email"
            placeholder="admin@shikshaksahayak.in"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="School Name"
            placeholder="Shree Vidhyalaya High School"
            {...register("school_name")}
            error={errors.school_name?.message}
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full shadow-2xl shadow-primary/20"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={20} /> Processing...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
          <p className="text-xs text-text-muted text-center mt-4 font-sans">
            We'll reach out within 48 hours on WhatsApp or email. Priority given to Gujarat schools.
          </p>
        </div>
      </form>
    </div>
  );
  );
};

export default WaitlistForm;
