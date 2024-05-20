"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Upon graduating from high school with a specialization in{" "}
        <span className="font-medium">Restaurant Management</span>, I chose to
        follow my passion for programming. I enrolled in a BeCode coding
        bootcamp, where I studied{" "}
        <span className="font-medium">full-stack web development</span>. What I
        enjoy most about programming is solving problems; there's nothing quite
        like the satisfaction of finding a solution to a challenging issue.
        <br />
        <br />
        My interests lie in programming languages and frameworks such as{" "}
        <span className="font-medium">
          React, Vite, Next.js, Node.js, JavaScript, and Tailwind CSS
        </span>
        . I am particularly excited to delve deeper into TypeScript, which
        motivated me to create this portfolio using it. I am constantly seeking
        to learn new technologies.
        <br />
        <br />
        Currently, I am looking for an internship lasting up to three months,
        followed by a<br />{" "}
        <span className="font-medium">
          full-time positions a Junior Full Stack Developer.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I often find myself
        thinking about future projects and daydreaming about their
        possibilities. However, I also enjoy playing video games, watching
        movies and documentaries, and exploring new topics. I believe that as a
        developer, continuous learning is essential, and I am enthusiastic about
        staying open-minded, motivated, and dedicated to my growth.
      </p>
    </motion.section>
  );
}
