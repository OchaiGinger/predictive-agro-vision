import { Link } from "react-router-dom"
import { Building2, CreditCard, Zap, Heart, ArrowRight, Phone, MapPin } from "lucide-react"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { BrutalistCard, BrutalistCardContent, BrutalistCardHeader, BrutalistCardTitle, BrutalistCardDescription } from "@/components/ui/brutalist-card"
import { siteContent } from "@/data/content"

export const Solutions = () => {
  return (
    <div className="min-h-screen">
      {/* Who We Serve */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Industries We Serve
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering diverse sectors with agricultural intelligence and predictive analytics solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Building2,
                title: "Government & Defense",
                description: "Regional agricultural planning, policy development, and food security assessment for government agencies and defense organizations."
              },
              {
                icon: CreditCard,
                title: "FinTech & Insurance",
                description: "Risk assessment models for agricultural loans, crop insurance products, and weather-based financial instruments."
              },
              {
                icon: Zap,
                title: "Smart Cities & Energy",
                description: "Microclimate analysis for urban planning, energy grid optimization based on agricultural demand patterns."
              },
              {
                icon: Heart,
                title: "Healthcare & Bioinformatics",
                description: "Environmental health monitoring, climate-based disease surveillance, and agricultural-health correlation studies."
              }
            ].map((industry, index) => (
              <BrutalistCard key={index} className="p-6 hover:shadow-glow-primary">
                <BrutalistCardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-deep-green text-background">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <BrutalistCardTitle className="text-xl">
                      {industry.title}
                    </BrutalistCardTitle>
                  </div>
                </BrutalistCardHeader>
                <BrutalistCardContent>
                  <BrutalistCardDescription className="text-muted-foreground">
                    {industry.description}
                  </BrutalistCardDescription>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-deep-green mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="font-body text-lg text-charcoal-foreground/80">
              Cutting-edge tools and frameworks driving agricultural innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteContent.technology.map((tech, index) => (
              <div 
                key={index}
                className="bg-card-charcoal text-card-charcoal-foreground p-4 border-2 border-deep-green text-center hover:bg-deep-green hover:text-background transition-all duration-300"
              >
                <div className="font-label text-xs uppercase tracking-wider">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Service Packages
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Flexible solutions tailored to your agricultural needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.packages.map((pkg, index) => (
              <BrutalistCard key={index} className="p-6 hover:shadow-glow-secondary">
                <BrutalistCardHeader>
                  <div className="mb-4">
                    <div className="font-label text-xs uppercase tracking-wider text-deep-green mb-2">
                      Package {index + 1}
                    </div>
                    <BrutalistCardTitle className="text-lg">
                      {pkg.name}
                    </BrutalistCardTitle>
                  </div>
                </BrutalistCardHeader>
                <BrutalistCardContent>
                  <BrutalistCardDescription className="text-muted-foreground mb-4">
                    {pkg.description}
                  </BrutalistCardDescription>
                  <BrutalistButton variant="ghost" size="sm" fullWidth asChild>
                    <Link to="/team#contact">Learn More</Link>
                  </BrutalistButton>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground">
                Secure the Future with PredictivePro
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Transform your agricultural operations with our cutting-edge predictive intelligence platform. Join hundreds of satisfied clients who have revolutionized their farming practices and maximized their yields.
              </p>
              <div className="space-y-4">
                {[
                  "Free agricultural assessment and consultation",
                  "Custom solution design for your specific needs", 
                  "Comprehensive training and ongoing support",
                  "Proven ROI with measurable results"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-deep-green"></div>
                    <span className="font-body text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-deep-green text-background p-8 border-2 border-charcoal shadow-brutalist">
              <div className="text-center space-y-6">
                <h3 className="font-headline text-2xl font-bold">
                  Ready to Get Started?
                </h3>
                <p className="font-body text-sm opacity-90">
                  Contact our team today for a free consultation and discover how PredictivePro can transform your agricultural operations.
                </p>
                <BrutalistButton variant="secondary" size="lg" fullWidth asChild>
                  <Link to="/team#contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </BrutalistButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="bg-charcoal text-charcoal-foreground border-t-2 border-charcoal">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-deep-green" />
              <div>
                <div className="font-label text-xs uppercase tracking-wider text-deep-green">
                  Call Us
                </div>
                <div className="font-body text-lg font-semibold">
                  {siteContent.contact.phone}
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-deep-green mt-1 flex-shrink-0" />
              <div>
                <div className="font-label text-xs uppercase tracking-wider text-deep-green">
                  Visit Us
                </div>
                <div className="font-body text-sm">
                  {siteContent.contact.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}