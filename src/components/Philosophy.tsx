import { personalInfo } from "@/data/portfolioData";
import { BookOpen, Coffee, Briefcase } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My Philosophy
        </h2>
        <p className="text-muted-foreground text-lg">
          What drives me as a developer
        </p>
      </div>

      {/* Quote */}
      <div className="glass-card p-8 md:p-12 mb-12 hover-lift animate-fade-in">
        <div className="flex items-start gap-4">
          <BookOpen className="w-12 h-12 text-primary flex-shrink-0" />
          <blockquote className="text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
            "{personalInfo.philosophy}"
          </blockquote>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Interests */}
        <div className="glass-card p-8 hover-lift animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl text-white">
              <span className="text-2xl">🏏</span>
            </div>
            <h3 className="text-2xl font-bold">Interests</h3>
          </div>
          <div className="space-y-4">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{interest.icon}</span>
                  <h4 className="font-semibold">{interest.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Fuel */}
        <div className="glass-card p-8 hover-lift animate-slide-up delay-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl text-white">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Daily Fuel</h3>
          </div>
          <div className="space-y-4">
            {personalInfo.dailyFuel.map((fuel, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{fuel.icon}</span>
                  <h4 className="font-semibold">{fuel.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{fuel.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="glass-card p-8 hover-lift animate-slide-up delay-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl text-white">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Open For</h3>
          </div>
          <div className="space-y-4">
            {personalInfo.availability.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-semibold">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Currently accepting new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
