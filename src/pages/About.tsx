import { Shield, Zap, RefreshCw, Award } from "lucide-react"
import { BrutalistCard, BrutalistCardContent, BrutalistCardHeader, BrutalistCardTitle, BrutalistCardDescription } from "@/components/ui/brutalist-card"
import { siteContent } from "@/data/content"

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Intro Block */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold text-foreground">
              Pioneering Agricultural Intelligence Through Advanced Analytics
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We are at the forefront of a paradigm shift in agriculture, moving from reactive farming practices to predictive, data-driven agricultural systems. Our mission is to empower farmers, agricultural businesses, and government agencies with the tools and insights needed to optimize crop yields, minimize risks, and ensure food security for Nigeria and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Services */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-deep-green mb-4">
              Our Advanced Services
            </h2>
            <p className="font-body text-lg text-charcoal-foreground/80">
              Comprehensive agricultural intelligence solutions powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.services.map((service, index) => (
              <BrutalistCard key={index} variant="charcoal" className="p-6">
                <BrutalistCardHeader>
                  <BrutalistCardTitle className="text-deep-green text-lg">
                    {service.title}
                  </BrutalistCardTitle>
                </BrutalistCardHeader>
                <BrutalistCardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-body text-sm text-charcoal-foreground/90 flex items-start">
                        <span className="text-deep-green mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground">
                From Satellite & Edge → ML Engine → Dashboard
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Our platform integrates multi-source data fusion from satellites, drones, and IoT sensors with advanced machine learning algorithms. The API-first architecture ensures seamless integration with existing agricultural systems while providing real-time insights through intuitive dashboards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-deep-green"></div>
                  <span className="font-label text-sm">Multi-source Data Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-deep-blue"></div>
                  <span className="font-label text-sm">Real-time ML Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-deep-green"></div>
                  <span className="font-label text-sm">API-first Architecture</span>
                </div>
              </div>
            </div>

            {/* Platform Diagram */}
            <div className="bg-secondary p-8 border-2 border-charcoal">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                role="img"
                aria-label="PredictivePro platform architecture diagram"
              >
                <title>Platform Architecture Flow</title>
                
                {/* Satellite/Drone */}
                <rect x="20" y="20" width="80" height="40" fill="hsl(var(--deep-green))" />
                <text x="60" y="40" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  SATELLITE
                </text>
                <text x="60" y="52" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  & DRONE
                </text>

                {/* Field IoT */}
                <rect x="20" y="80" width="80" height="40" fill="hsl(var(--deep-blue))" />
                <text x="60" y="100" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  FIELD IoT
                </text>
                <text x="60" y="112" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  SENSORS
                </text>

                {/* Data Ingest */}
                <rect x="140" y="50" width="80" height="40" fill="hsl(var(--charcoal))" />
                <text x="180" y="70" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  DATA
                </text>
                <text x="180" y="82" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  INGEST
                </text>

                {/* ML Engine */}
                <rect x="260" y="50" width="80" height="40" fill="hsl(var(--deep-green))" />
                <text x="300" y="70" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  ML ENGINE
                </text>
                <text x="300" y="82" textAnchor="middle" fill="white" fontSize="8" fontFamily="var(--font-label)">
                  CNN/RNN/ENSEMBLE
                </text>

                {/* Dashboard */}
                <rect x="260" y="140" width="80" height="40" fill="hsl(var(--deep-blue))" />
                <text x="300" y="160" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  DASHBOARD
                </text>
                <text x="300" y="172" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-label)">
                  & ALERTS
                </text>

                {/* Arrows */}
                <path d="M 100 40 L 135 70" stroke="hsl(var(--charcoal))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 100 100 L 135 70" stroke="hsl(var(--charcoal))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 220 70 L 255 70" stroke="hsl(var(--charcoal))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 300 90 L 300 135" stroke="hsl(var(--charcoal))" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Arrow marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--charcoal))" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why PredictivePro */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-deep-green mb-4">
              Why Choose PredictivePro
            </h2>
            <p className="font-body text-lg text-charcoal-foreground/80">
              Industry-leading capabilities that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Robust Data Security",
                description: "API-first architecture with enterprise-grade security and data protection"
              },
              {
                icon: Zap,
                title: "Zero-Trust Integration", 
                description: "Seamless integration with existing systems through secure, validated endpoints"
              },
              {
                icon: RefreshCw,
                title: "Continuous Model Training",
                description: "Real-time model validation and continuous retraining for optimal accuracy"
              },
              {
                icon: Award,
                title: "Compliance & Standards",
                description: "Adherence to international agricultural and environmental standards"
              }
            ].map((item, index) => (
              <BrutalistCard key={index} variant="charcoal" className="p-6 text-center">
                <BrutalistCardHeader>
                  <div className="mx-auto p-3 bg-deep-green text-background w-fit mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <BrutalistCardTitle className="text-deep-green text-lg">
                    {item.title}
                  </BrutalistCardTitle>
                </BrutalistCardHeader>
                <BrutalistCardContent>
                  <BrutalistCardDescription className="text-charcoal-foreground/80">
                    {item.description}
                  </BrutalistCardDescription>
                </BrutalistCardContent>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-deep-green text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="font-headline text-2xl lg:text-3xl font-bold mb-4">
              Our Technology Stack
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {siteContent.technology.map((tech, index) => (
              <div 
                key={index}
                className="font-label text-xs uppercase tracking-wider bg-background/10 text-background px-4 py-2 border border-background/20"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}