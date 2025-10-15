import { useEffect, useState } from "react";
import { ArrowDown, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import * as Icons from "lucide-react";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTagline.length) {
          setDisplayText(currentTagline.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTagline.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
{/* Profile Picture with Soft Glow */}
<div className="flex justify-center">
  <img 
    src="/profile.png" 
    alt="Profile Picture" 
    className="w-28 h-28 rounded-full object-cover shadow-[0_0_20px_rgba(59,130,246,0.7)]"
  />
</div>




          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              {personalInfo.title}
            </h2>
          </div>

          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-primary font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-6 text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
<Button
  variant="outline"
  size="lg"
  className="font-semibold px-8 py-6 text-lg hover:bg-primary/10 transition-all duration-300"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Anas_Khan_CV.pdf"; // put the actual path of your resume
    link.download = "Anas_Khan_CV.pdf"; 
    link.click();
  }}
>
  Download Resume
</Button>

          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            {socialLinks.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as any;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
