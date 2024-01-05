let text = new SplitType("#FinestGSAP");

const timeline = gsap.timeline({ defaults: { duration: 1 } });

const texts = ["finest.", "best.", "greatest."];

let i = 0;

timeline
  .from(".FigmaIcon", { y: "-100%" })
  .fromTo(".Heading", { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
  .fromTo(
    ".char",
    {
      y: "100%",
    },
    {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.3,
    }
  )
  .fromTo(".Last", { opacity: "0" }, { opacity: "1" });
