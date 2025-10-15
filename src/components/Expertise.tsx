import { expertise } from "@/data/portfolioData";

export default function Expertise() {
  return (
    <section id="expertise" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Laravel Mastery
        </h2>
        <p className="text-muted-foreground text-lg">
          Core expertise in building robust Laravel applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 hover-lift animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className={`${item.color} p-6 rounded-2xl text-white text-4xl shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
