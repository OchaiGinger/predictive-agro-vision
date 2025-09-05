import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { BrutalistCard, BrutalistCardContent, BrutalistCardHeader, BrutalistCardTitle, BrutalistCardDescription } from "@/components/ui/brutalist-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteContent } from "@/data/content"

export const TeamContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in real implementation this would connect to a backend
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll be in touch soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Team Grid */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the agricultural technology experts driving innovation across Nigeria and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.team.map((member, index) => (
              <BrutalistCard key={index} className="p-6 hover:shadow-glow-primary">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <img 
                    src={member.image}
                    alt={member.alt}
                    className="w-32 h-32 object-cover border-2 border-charcoal mx-auto md:mx-0 flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="space-y-3 text-center md:text-left">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="font-label text-sm text-deep-green uppercase tracking-wider">
                        {member.title}
                      </p>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Full Testimonials */}
      <section id="testimonials" className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-deep-green mb-4">
              Client Success Stories
            </h2>
            <p className="font-body text-lg text-charcoal-foreground/80">
              Transforming Nigerian agriculture one farm at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.testimonials.map((testimonial, index) => (
              <BrutalistCard key={index} variant="charcoal" className="p-6 h-full">
                <BrutalistCardContent className="h-full flex flex-col">
                  <blockquote className="font-body text-sm leading-relaxed text-charcoal-foreground/90 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-headline text-base font-bold text-deep-green">
                      {testimonial.author}
                    </div>
                    <div className="font-label text-xs text-charcoal-foreground/70 uppercase tracking-wider">
                      {testimonial.title}
                    </div>
                    <div className="font-body text-xs text-charcoal-foreground/60 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="font-body text-lg text-muted-foreground">
                  Ready to transform your agricultural operations? Contact our team for a free consultation and discover how PredictivePro can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-deep-green text-background">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-label text-sm uppercase tracking-wider text-deep-green">
                      Phone
                    </div>
                    <div className="font-body text-lg">
                      {siteContent.contact.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-deep-green text-background">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-label text-sm uppercase tracking-wider text-deep-green">
                      Office Address
                    </div>
                    <div className="font-body text-sm leading-relaxed">
                      {siteContent.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-deep-green text-background">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-label text-sm uppercase tracking-wider text-deep-green">
                      Email
                    </div>
                    <div className="font-body text-lg">
                      info@predictivepro.ng
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <BrutalistCard className="p-8">
              <BrutalistCardHeader>
                <BrutalistCardTitle className="text-2xl">
                  Request a Free Agricultural Assessment
                </BrutalistCardTitle>
                <BrutalistCardDescription>
                  Fill out the form below and our experts will contact you within 24 hours
                </BrutalistCardDescription>
              </BrutalistCardHeader>
              <BrutalistCardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-label text-xs uppercase tracking-wider text-foreground block mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 border-charcoal focus:border-deep-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-label text-xs uppercase tracking-wider text-foreground block mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-charcoal focus:border-deep-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="font-label text-xs uppercase tracking-wider text-foreground block mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-2 border-charcoal focus:border-deep-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="font-label text-xs uppercase tracking-wider text-foreground block mb-2">
                      Tell us about your agricultural needs *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-2 border-charcoal focus:border-deep-green resize-none"
                      placeholder="Describe your current challenges, goals, and how PredictivePro can help..."
                    />
                  </div>

                  <BrutalistButton type="submit" size="lg" fullWidth>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </BrutalistButton>
                </form>
              </BrutalistCardContent>
            </BrutalistCard>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-deep-green text-background border-t-2 border-charcoal">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold">
              {siteContent.contact.tagline}
            </h2>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their agricultural operations with our cutting-edge predictive intelligence platform.
            </p>
            <BrutalistButton variant="secondary" size="lg" asChild>
              <a href="#contact">
                Schedule Free Assessment
              </a>
            </BrutalistButton>
          </div>
        </div>
      </section>
    </div>
  )
}