import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact, socialLinks } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";
import * as Icons from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg">
          Let's discuss your next project or opportunity
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass-card p-8 hover-lift animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl text-white">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-white font-semibold py-6 text-lg hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="space-y-6 animate-slide-up delay-200">
          {/* Direct Contact */}
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-lg text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all hover:scale-105 group"
                  >
                    <Icon className={`w-5 h-5 ${social.color} transition-colors`} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability Status */}
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold">Currently Available</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              I'm open to discussing new opportunities, collaborations, and exciting projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Freelance", "Full-time", "Consulting", "Open Source"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
