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
      <div className="max-w-3xl mx-auto p-16 md:p-24 text-center border border-success/20 bg-success/5 rounded-[60px] shadow-sm">
        <div className="w-24 h-24 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-10">
          <CheckCircle2 className="text-success" size={48} />
        </div>
        <h2 className="text-4xl font-serif font-bold text-text-primary mb-6 leading-tight">
          You're on the list!
        </h2>
        <p className="text-xl text-text-secondary mb-12 leading-relaxed font-sans max-w-lg mx-auto">
          We've sent a confirmation email to you. We'll reach out once your spot opens for the pilot program.
        </p>
        <div className="flex flex-col gap-6">
          <a
            href="https://wa.me/917990680690"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl shadow-green-500/20 active:scale-95"
          >
            Join our WhatsApp Community <ArrowRight size={22} />
          </a>
          <Button
            variant="ghost"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
          >
            Submit another application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-12 md:p-20 bg-white border border-glass-border rounded-[60px] shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
            School Information
          </h2>
          <p className="text-lg text-text-secondary">
            Tell us about your school and how we can help Bharat's classrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Full Name"
            placeholder="John Doe"
            {...register("full_name")}
            error={errors.full_name?.message}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="john@school.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Phone Number (Optional)"
            placeholder="+91 98765 43210"
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Input
            label="School Name"
            placeholder="Bright Future Academy"
            {...register("school_name")}
            error={errors.school_name?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="City"
            placeholder="Ahmedabad"
            {...register("city")}
            error={errors.city?.message}
          />
          <Select
            label="Your Role"
            options={[
              { label: "School Admin", value: "School Admin" },
              { label: "Principal", value: "Principal" },
              { label: "Teacher", value: "Teacher" },
              { label: "Other", value: "Other" },
            ]}
            {...register("role")}
            error={errors.role?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Select
            label="School Type"
            options={[
              { label: "Private", value: "Private" },
              { label: "Government", value: "Government" },
              { label: "Semi-Private", value: "Semi-Private" },
            ]}
            {...register("school_type")}
            error={errors.school_type?.message}
          />
          <Select
            label="Student Count (Approx)"
            options={[
              { label: "<100", value: "<100" },
              { label: "100-500", value: "100-500" },
              { label: "500-1000", value: "500-1000" },
              { label: "1000+", value: "1000+" },
            ]}
            {...register("student_count")}
            error={errors.student_count?.message}
          />
        </div>

        <Select
          label="How did you hear about us?"
          options={[
            { label: "Social Media", value: "Social Media" },
            { label: "Word of Mouth", value: "Word of Mouth" },
            { label: "Search", value: "Search" },
            { label: "Other", value: "Other" },
          ]}
          {...register("referral_source")}
          error={errors.referral_source?.message}
        />

        <Textarea
          label="Message / Questions (Optional)"
          placeholder="Anything else you'd like to share?"
          {...register("message")}
          error={errors.message?.message}
        />

        <div className="pt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full shadow-2xl shadow-primary/20"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={20} /> Submitting...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </div>

        <p className="text-center text-sm text-text-muted italic">
          By joining, you agree to participate in our alpha testing phase and share honest feedback.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
