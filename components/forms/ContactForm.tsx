"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactInput } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      reset();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-16 text-center border border-success/20 bg-success/5 rounded-[40px]">
        <div className="w-20 h-20 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="text-success" size={40} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
          Message Sent!
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed font-sans">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <h2 className="text-3xl font-serif font-bold text-text-primary mb-10">
        Send us a message
      </h2>
      <Input
        label="Your Name"
        placeholder="Enter your name"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Subject"
        placeholder="How can we help?"
        {...register("subject")}
        error={errors.subject?.message}
      />
      <Textarea
        label="Message"
        placeholder="Tell us more about your inquiry..."
        {...register("message")}
        error={errors.message?.message}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full shadow-2xl shadow-primary/20"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} /> Sending...
          </>
        ) : (
          <>
            <Send className="mr-2" size={20} /> Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
