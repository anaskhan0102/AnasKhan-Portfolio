import { Heart, Code2 } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import * as Icons from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{personalInfo.name}</h3>
            <p className="text-muted-foreground">
              {personalInfo.title}
            </p>
            <p className="text-sm text-muted-foreground">
              Building scalable web solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Skills", "Expertise", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-3 rounded-lg hover:scale-110 transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground italic">
            <Code2 className="w-5 h-5 text-primary" />
            <p className="text-center">
              "Code is poetry written in logic. Every line tells a story of problem-solving and innovation."
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>and</span>
              <span>☕</span>
              <span>Coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
