"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { ref, inView } = useSectionInView();
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = async (formData: any) => {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const { data, error } = await sendEmail(form);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:eno_rami@ymail.com">
          eno_rami@ymail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("senderEmail")}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          {...register("message")}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn isSubmitting={formState.isSubmitting} />
      </form>
    </motion.section>
  );
}
