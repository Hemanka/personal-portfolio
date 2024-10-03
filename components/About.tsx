"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const title_ref = useRef(null);
  const title_inView = useInView(title_ref, { once: true, amount: 1 });

  const first_para_ref = useRef(null);
  const first_para_inView = useInView(first_para_ref, {
    once: true,
    amount: 0.6,
  });
  const second_para_ref = useRef(null);
  const second_para_inView = useInView(second_para_ref, {
    once: true,
    amount: 0.6,
  });

  return (
    <section id="about" className="pt-1">
      <div className="m-10">
        <motion.div
          ref={title_ref}
          initial={{ y: -50, opacity: 0 }}
          animate={title_inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
        >
          <h1 className="px-1 md:px-10 mt-3 mb-1 md:mb-7 md:mt-10 text-3xl md:text-5xl font-bold">
            About
          </h1>
        </motion.div>

        <motion.div
          ref={first_para_ref}
          initial={{ y: 50, opacity: 0 }}
          animate={first_para_inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
        >
          <p className="mt-3 pl-1 md:pl-10 md:w-3/5 w-auto leading-7">
            Hello! I am Heamnt Kanoujia, a rising senior at University of
            Central Flordia majoring in Computer Science. My CS journey started
            in high school, where I took my first programming class. It was
            something that started off as a casual interest but quickly turned
            into a passion.
          </p>
        </motion.div>

        <motion.div
          ref={second_para_ref}
          initial={{ y: 50, opacity: 0 }}
          animate={second_para_inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
        >
          <p className="mt-3 pl-1 md:pl-10 md:w-3/5 w-auto leading-7">
            Currently, I am working getting my bachelors degree in Computer
            Science. I have taken courses in Data Structures, Algorithms, and
            Software Engineering. I have also worked on various projects that
            have helped me gain experience in different languages and
            frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
