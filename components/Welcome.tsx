import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="w-full">
      <div className="md:w-full md:h-screen flex flex-col md:flex-row justify-around my-10 md:my-0 space-y-8 md:space-y-0">
        <div className="text-center md:text-left flex flex-col justify-center md:space-y-1">
          <h1 className="mb-3 sm:text-xl md:text-3xl font-bold">Welcome!</h1>
          <h1 className="sm:text-lg md:text-3xl">I am</h1>
          <h1 className="sm:text-lg md:text-3xl">Hemant Kanoujia</h1>
        </div>
        <div className="flex flex-row md:flex-col justify-center">
          <Image
            src="/photo.png"
            alt="Hemant"
            width={400}
            height={200}
            className="rounded-full p-5 md:p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
