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
      <GlassCard className="max-w-2xl mx-auto p-12 text-center border-success/20">
        <div className="w-20 h-20 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="text-success" size={40} />
        </div>
        <h2 className="text-3xl font-syne font-bold text-text-primary mb-4">
          You're on the list!
        </h2>
        <p className="text-text-secondary mb-8 leading-relaxed">
          We've sent a confirmation email to you. We'll reach out once your spot opens for the pilot program.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/917990680690"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-4 px-8 rounded-xl transition-all"
          >
            Join our WhatsApp Community <ArrowRight size={20} />
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
      </GlassCard>
    );
  }

  return (
    <GlassCard className="max-w-2xl mx-auto p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isLoading}
          glow
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} /> Submitting...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>

        <p className="text-center text-xs text-text-muted italic">
          By joining, you agree to participate in our alpha testing phase.
        </p>
      </form>
    </GlassCard>
  );
};

export default WaitlistForm;
