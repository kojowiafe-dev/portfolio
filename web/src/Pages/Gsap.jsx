import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once at the top level
gsap.registerPlugin(ScrollTrigger);

const Animate = () => {
  gsap.defaults({ ease: "none", duration: 2 });

  // Create a context to help with cleanup
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.from(".panel1", { yPercent: 100 })
      .from(".panel2", { xPercent: -100 })
      .from(".panel3", { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  });

  return ctx;
};

const Gsap = () => {
  useEffect(() => {
    const ctx = Animate();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section className="container relative max-w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
          <div className="bg-gray-100 col-span-1 h-full items-center flex justify-center">
            First
          </div>
          <div className="bg-gray-700 col-span-1 h-full flex items-center justify-center">
            Second
          </div>
        </div>
        <div className="panel1 absolute inset-0 flex items-center justify-center bg-red-500">
          Panel 1
        </div>
        <div className="panel2 absolute inset-0 flex items-center justify-center bg-blue-500">
          Panel 2
        </div>
        <div className="panel3 absolute inset-0 flex items-center justify-center bg-green-500">
          Panel 3
        </div>
      </section>
    </>
  );
};

export default Gsap;
