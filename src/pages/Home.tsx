import { Link } from "react-router-dom"
import { ArrowRight, Satellite, Leaf, TrendingUp, Users } from "lucide-react"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { BrutalistCard, BrutalistCardContent, BrutalistCardHeader, BrutalistCardTitle } from "@/components/ui/brutalist-card"
import { siteContent } from "@/data/content"
import heroImage from "/assets/hero-sat-farm.jpg"

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  {siteContent.hero.headline}
                </h1>
                <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {siteContent.hero.subheadline}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <BrutalistButton size="lg" asChild>
                  <Link to="/solutions">
                    {siteContent.hero.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </BrutalistButton>
                <BrutalistButton variant="secondary" size="lg" asChild>
                  <Link to="/team#contact">{siteContent.hero.secondaryCta}</Link>
                </BrutalistButton>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 order-first lg:order-last">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Nigerian farmland satellite overlay - advanced agricultural technology"
                  className="w-full h-64 lg:h-80 object-cover shadow-brutalist border-2 border-charcoal"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep-green/10 to-deep-blue/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Overview Block */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-headline text-2xl lg:text-3xl font-bold text-deep-green">
              {siteContent.mission.title}
            </h2>
            <p className="font-body text-lg leading-relaxed text-charcoal-foreground/90">
              {siteContent.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key Capabilities
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Transforming agriculture through cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.capabilities.map((capability, index) => {
              const icons = [Satellite, Leaf, TrendingUp, Users]
              const Icon = icons[index]
              
              return (
                <BrutalistCard key={index} className="p-6 hover:shadow-glow-primary">
                  <BrutalistCardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-deep-green text-background">
                        <Icon className="h-6 w-6" />
                      </div>
                      <BrutalistCardTitle className="text-lg">
                        {capability.title}
                      </BrutalistCardTitle>
                    </div>
                  </BrutalistCardHeader>
                  <BrutalistCardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="font-headline text-xl font-bold text-deep-green">
                        {capability.metric}
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </BrutalistCardContent>
                </BrutalistCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leadership Excellence
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Meet our team of agricultural technology experts
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <BrutalistCard className="p-6">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <img 
                    src={siteContent.team[0].image}
                    alt={siteContent.team[0].alt}
                    className="w-24 h-24 object-cover border-2 border-charcoal"
                  />
                  <div className="text-center md:text-left space-y-2">
                    <h3 className="font-headline text-xl font-bold text-foreground">
                      {siteContent.team[0].name}
                    </h3>
                    <p className="font-label text-sm text-deep-green">
                      {siteContent.team[0].title}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {siteContent.team[0].bio}
                    </p>
                  </div>
                </div>
              </BrutalistCard>
            </div>

            <div className="text-center mt-8">
              <BrutalistButton variant="secondary" asChild>
                <Link to="/team">Meet the Full Team</Link>
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-deep-green mb-4">
              Client Success Stories
            </h2>
            <p className="font-body text-lg text-charcoal-foreground/80">
              Hear from our satisfied clients across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {siteContent.testimonials.slice(0, 2).map((testimonial, index) => (
              <BrutalistCard key={index} variant="charcoal" className="p-6">
                <BrutalistCardContent>
                  <blockquote className="font-body text-sm leading-relaxed text-charcoal-foreground/90 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-headline text-base font-bold text-deep-green">
                      {testimonial.author}
                    </div>
                    <div className="font-label text-xs text-charcoal-foreground/70">
                      {testimonial.title}
                    </div>
                    <div className="font-body text-xs text-charcoal-foreground/60">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <BrutalistButton variant="secondary" asChild>
              <Link to="/team#testimonials">Read More Testimonials</Link>
            </BrutalistButton>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-deep-green text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {siteContent.metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="font-headline text-2xl lg:text-3xl font-bold">
                  {metric.value}
                </div>
                <div className="font-label text-xs uppercase tracking-wider opacity-90">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}