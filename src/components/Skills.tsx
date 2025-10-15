import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { skills } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    Object.keys(skills)
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-lg">
          My technical toolkit for building amazing applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, data], index) => {
          const isExpanded = expandedCategories.includes(category);
          return (
            <div
              key={category}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`text-3xl p-3 rounded-lg bg-gradient-to-br ${data.color}`}>
                    <span className="block">{data.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleCategory(category)}
                  className="hover:bg-muted"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Button>
              </div>

              {isExpanded && (
                <div className="space-y-2 animate-fade-in">
                  {data.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              )}

              {!isExpanded && (
                <div className="flex flex-wrap gap-2">
                  {data.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {data.technologies.length > 3 && (
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      +{data.technologies.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
