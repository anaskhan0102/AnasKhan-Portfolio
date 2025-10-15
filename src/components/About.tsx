import { personalInfo } from "@/data/portfolioData";
import { Code2, Rocket, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-muted-foreground text-lg">Get to know who I am and what I do</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Bio */}
        <div className="space-y-6 animate-slide-up">
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="glass-card p-3 rounded-lg">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Full-Stack PHP Laravel Enthusiast
                </h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 hover-lift">
              <Rocket className="w-10 h-10 text-primary mb-3" />
              <h4 className="font-bold text-lg mb-2">Mission</h4>
              <p className="text-sm text-muted-foreground">
                Building scalable SaaS platforms that perform
              </p>
            </div>
            <div className="glass-card p-6 hover-lift">
              <Heart className="w-10 h-10 text-primary mb-3" />
              <h4 className="font-bold text-lg mb-2">Passion</h4>
              <p className="text-sm text-muted-foreground">
                Clean code and innovative solutions
              </p>
            </div>
          </div>
        </div>

        {/* Right: Interests & Daily Fuel */}
        <div className="space-y-6 animate-slide-up delay-200">
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Life Beyond Code</h3>
            <div className="space-y-4">
              {personalInfo.interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                >
                  <span className="text-3xl">{interest.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Daily Fuel</h3>
            <div className="space-y-4">
              {personalInfo.dailyFuel.map((fuel, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                >
                  <span className="text-3xl">{fuel.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg">{fuel.title}</h4>
                    <p className="text-sm text-muted-foreground">{fuel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
