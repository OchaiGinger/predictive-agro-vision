import { Link } from "react-router-dom"
import { siteContent } from "@/data/content"

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground border-t-2 border-charcoal">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="proActive.png"
                alt="PredictivePro Logo" 
                className="h-8 w-auto"
              />
              <div className="font-headline text-xl font-bold text-deep-green">
                PREDICTIVEPRO
              </div>
            </div>
            <p className="font-body text-sm text-charcoal-foreground/80">
              {siteContent.contact.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-label text-sm uppercase tracking-wider text-deep-green">
              Navigation
            </h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="font-body text-sm text-charcoal-foreground/80 hover:text-deep-green transition-colors block"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-body text-sm text-charcoal-foreground/80 hover:text-deep-green transition-colors block"
              >
                About Us
              </Link>
              <Link 
                to="/solutions" 
                className="font-body text-sm text-charcoal-foreground/80 hover:text-deep-green transition-colors block"
              >
                Solutions
              </Link>
              <Link 
                to="/team" 
                className="font-body text-sm text-charcoal-foreground/80 hover:text-deep-green transition-colors block"
              >
                Team & Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-label text-sm uppercase tracking-wider text-deep-green">
              Services
            </h3>
            <div className="space-y-2">
              {siteContent.services.slice(0, 4).map((service, index) => (
                <div key={index} className="font-body text-sm text-charcoal-foreground/80">
                  {service.title.replace(' & ', ' &\n')}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-label text-sm uppercase tracking-wider text-deep-green">
              Contact
            </h3>
            <div className="space-y-2">
              <div className="font-body text-sm text-charcoal-foreground/80">
                <div className="font-semibold">Email:</div>
                <div>{siteContent.contact.email}</div>
              </div>
              <div className="font-body text-sm text-charcoal-foreground/80">
                <div className="font-semibold">Phone:</div>
                <div>{siteContent.contact.phone}</div>
              </div>
              <div className="font-body text-sm text-charcoal-foreground/80">
                <div className="font-semibold">Office:</div>
                <div>{siteContent.contact.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/20 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-charcoal-foreground/60">
            © 2024 PredictivePro. All rights reserved. Transforming Agriculture Through Predictive Intelligence.
          </p>
        </div>
      </div>
    </footer>
  )
}