import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero(){
    
    const logos = [ "./bmw.svg", "./tata.svg", "./sony.svg"];
    const containerRef = useRef(null);
    const [ scrollWidth, setScrollWidth ] = useState(0);
    const controls = useAnimation();

    useEffect(() => {

        if( containerRef.current){

            const width = containerRef.current.scrollWidth / 2;
            setScrollWidth(width);
        }
    }, []);

    useEffect(() => {

        if( scrollWidth > 0){

            controls.start({
                x: ["0%", "-50%"],
                transition: { duration: 10, ease: "linear", repeat: Infinity }
            });
        }
    }, [scrollWidth, controls]);

    return (
    <section className="bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Part */}
      <div className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-center text-center px-8 lg:px-20">
        <div className="flex-1 flex items-center justify-center lg:justify-center mb-8 lg:mb-0">
          <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
        </div>

        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight lg:pb-8">
            <span className="block">Design</span>
            <span className="block">Transform</span>
            <span className="block">Accelerate</span>
          </h1>

          <p className="max-w-lg text-lg md:text-2xl font-medium text-black dark:text-white md:text-xl mt-4">
            Redefining user experiences through Behavioural Science & AI
          </p>
        </div>
      </div>

      <div className="py-8 lg:py-12 px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center">
        {/* Left block */}
        <div className="flex items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-left">
            Your trusted partner for design & UX
            </h2>
            <div className="hidden lg:block w-px h-10 bg-black dark:bg-white" />
        </div>

        {/* Right block: logos take remaining space */}
        <div className="flex-1 relative overflow-hidden h-12">
          <motion.div
            ref={containerRef}
            className="flex gap-12"
            animate={scrollWidth ? controls : {}}
          >
            {[...logos, ...logos, ...logos, ...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`logo-${i}`}
                className="px-8 h-12 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    );
}