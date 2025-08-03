import React from 'react';
import { Link } from 'react-router-dom';
import { Factory } from 'lucide-react';
import { socialLinks, navLinks, footerInfo, aboutUsContent } from '@/lib/data'; // Import footerInfo and aboutUsContent

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <Factory className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {footerInfo.registrationName} {/* Use registrationName */}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {/* This description can be kept or made dynamic if needed */}
              Your comprehensive support hub for fashion and manufacturing
              small-business owners. Fostering innovation, growth, and community.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>{footerInfo.address}</p> {/* Use footerInfo.address */}
              <p>사무실: {footerInfo.officePhone}</p> {/* Use specific phone numbers */}
              <p>재단실: {footerInfo.cuttingRoomPhone}</p>
              <p>패턴실: {footerInfo.patternRoomPhone}</p>
              <p>이메일: <a href={`mailto:${footerInfo.email}`} className="hover:text-primary transition-colors">{footerInfo.email}</a></p> {/* Use footerInfo.email */}
              <p>대표자: {footerInfo.representative}</p> {/* Add representative */}
              <p>회사명: {footerInfo.companyName}</p> {/* Add company name */}
            </address>
          </div>

          {/* Map Placeholder */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Location</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-border">
              {/* Placeholder for embedded map - will be dynamic on About Us page */}
              <iframe
                src={aboutUsContent.contact.mapEmbedUrl} // Still using aboutUsContent for map URL
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          {footerInfo.copyright} {/* Use footerInfo.copyright */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
