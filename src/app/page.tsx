"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import { UtensilsCrossed, Heart, ChefHat, Star, Calendar, Facebook, Instagram, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="aurora"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Krokodilo Bombardino"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461721553-s95l9o5c.jpg"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="Welcome to Krokodilo Bombardino"
          description="Experience exquisite Italian cuisine in an elegant atmosphere where tradition meets contemporary gastronomy. Discover our carefully crafted menu featuring authentic recipes and the finest ingredients."
          tag="Fine Dining Restaurant"
          tagIcon={UtensilsCrossed}
          kpis={[
            { value: "25+ Years", label: "Culinary Excellence" },
            { value: "4.9/5", label: "Guest Satisfaction" },
            { value: "100%", label: "Fresh Ingredients" }
          ]}
          buttons={[
            { text: "Reserve Your Table", href: "#contact" },
            { text: "View Menu", href: "#features" }
          ]}
          globePosition="right"
          className="min-h-screen"
          containerClassName="py-20"
          titleClassName="text-5xl font-light"
          descriptionClassName="text-lg leading-relaxed"
        />
      </div>

      <div id="about" data-section="about">
        <AboutShowcase
          title="Our Story"
          description="Since 1999, Krokodilo Bombardino has been a beacon of Italian culinary excellence. Founded by Chef Marco Bombardino and his family, our restaurant represents a passion for authentic Italian cuisine, warm hospitality, and creating unforgettable dining experiences."
          tag="Heritage & Tradition"
          tagIcon={Heart}
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          leftItem={{
            title: "Authentic Recipes",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461723359-b8dnm29s.jpg",
            imageAlt: "Chef Marco Bombardino preparing authentic Italian dishes"
          }}
          rightItem={{
            title: "Premium Ingredients",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461724779-632obm01.jpg",
            imageAlt: "Fresh premium Italian ingredients"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461722534-4bgngwwt.jpg"
          centerImageAlt="Elegant dining room at Krokodilo Bombardino"
          buttons={[
            { text: "Learn More About Us", href: "#features" }
          ]}
          containerClassName="py-24"
          titleClassName="text-4xl font-light"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThirteen
          title="Our Menu Highlights"
          description="Each dish is carefully prepared by our award-winning chefs using only the finest ingredients imported directly from Italy and sourced locally."
          tag="Culinary Expertise"
          tagIcon={ChefHat}
          features={[
            {
              id: "01",
              title: "Antipasti",
              description: "Begin your journey with our selection of traditional Italian starters, featuring cured meats, fresh mozzarella, and seasonal vegetables prepared with authentic recipes."
            },
            {
              id: "02",
              title: "Pasta Dishes",
              description: "Handmade pasta prepared daily, served with classic sauces like pappardelle al cinghiale and fettuccine ai funghi. Each dish celebrates the art of Italian pasta-making."
            },
            {
              id: "03",
              title: "Main Courses",
              description: "Prime cuts of meat and fresh seafood, grilled to perfection and served with seasonal accompaniments. Experience the depth of Italian main course traditions."
            },
            {
              id: "04",
              title: "Dolci",
              description: "Indulge in our authentic Italian desserts including tiramisu, panna cotta, and seasonal fruit preparations. Sweet conclusions to your dining experience."
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          containerClassName="py-24"
          textBoxTitleClassName="text-4xl font-light"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Discover why diners return to Krokodilo Bombardino time and time again for exceptional food, impeccable service, and unforgettable memories."
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sofia Rossi",
              handle: "@sophiaitalian",
              testimonial: "The most authentic Italian dining experience I have ever had outside of Italy. Every dish was perfection, and the hospitality was warmth itself.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461728213-79rk9mz3.jpg",
              imageAlt: "Sofia Rossi"
            },
            {
              id: "2",
              name: "Marco Benedetti",
              handle: "@marcolovestofood",
              testimonial: "Krokodilo Bombardino sets the standard for fine Italian dining. The passion in every plate and the knowledge of the staff is truly exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461729025-vnhoywa2.jpg",
              imageAlt: "Marco Benedetti"
            },
            {
              id: "3",
              name: "Angela Moretti",
              handle: "@angeladines",
              testimonial: "A gem in the city! The ambiance, the wine selection, and most importantly the food - everything was simply divine. Highly recommend for special occasions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461729822-5za2oa6p.jpg",
              imageAlt: "Angela Moretti"
            },
            {
              id: "4",
              name: "Luca Ferrari",
              handle: "@lucaferrari",
              testimonial: "Visited for my anniversary and it was unforgettable. The chef's recommendations were spot-on and the service was attentive without being intrusive.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461730826-ggmelo0x.jpg",
              imageAlt: "Luca Ferrari"
            },
            {
              id: "5",
              name: "Giulia Lombardi",
              handle: "@giulialombardi",
              testimonial: "The handmade pasta is absolutely incredible. You can taste the quality and care in every bite. This is where I bring my most important guests.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461731656-3vtg11ma.jpg",
              imageAlt: "Giulia Lombardi"
            },
            {
              id: "6",
              name: "Antonio Russo",
              handle: "@antoniolovesitaly",
              testimonial: "Finally found a restaurant that understands Italian cuisine. The flavors transport you straight to Tuscany. Will definitely be returning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765461732243-elq8h9z1.jpg",
              imageAlt: "Antonio Russo"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
          containerClassName="py-24"
          textBoxTitleClassName="text-4xl font-light"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about reservations, our menu, dietary accommodations, and dining experience."
          faqs={[
            {
              id: "1",
              title: "Do you accept reservations?",
              content: "Yes, we strongly recommend reservations, especially for dinner service and weekends. You can reserve through our contact form or call us directly. We also maintain a limited table capacity for walk-ins based on availability."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. We accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us of your restrictions when making a reservation, and our chefs will create a special menu tailored to your needs."
            },
            {
              id: "3",
              title: "What is your wine selection like?",
              content: "Our wine list features over 150 selections, primarily Italian wines from renowned regions. Our sommelier can recommend pairings for any course. We also offer wine by the glass options."
            },
            {
              id: "4",
              title: "Do you have private dining options?",
              content: "Yes, we offer private dining rooms perfect for special occasions, business meetings, or large gatherings. Please contact us to discuss your specific requirements and availability."
            },
            {
              id: "5",
              title: "What are your hours of operation?",
              content: "We are open Tuesday through Thursday 5:00 PM - 10:00 PM, Friday and Saturday 5:00 PM - 11:00 PM, and Sunday 5:00 PM - 9:00 PM. We are closed Mondays. Holiday hours may vary."
            },
            {
              id: "6",
              title: "Do you offer catering services?",
              content: "Yes, we provide catering for events and special occasions. Our team can create customized menus for your guest count and preferences. Please reach out for catering inquiries and pricing."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          containerClassName="py-24"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Reserve Your Table"
          ctaDescription="Experience culinary excellence at Krokodilo Bombardino. Reserve your table for an unforgettable dining experience."
          ctaButton={{
            text: "Book Reservation",
            href: "tel:+1-555-123-4567"
          }}
          ctaIcon={Calendar}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I contact the restaurant?",
              content: "You can reach us by phone at +1 (555) 123-4567 or via email at info@krokodilo-bombardino.com. Our team is available Tuesday-Sunday from 10:00 AM to close."
            },
            {
              id: "2",
              title: "What is your cancellation policy?",
              content: "We require 24-hour notice for cancellations. Cancellations made less than 24 hours before your reservation may incur a charge. Please call us if you need to modify your reservation."
            },
            {
              id: "3",
              title: "Do you have a dress code?",
              content: "We recommend smart casual attire. Jacket preferred for gentlemen during dinner service. We want you to be comfortable, so creative self-expression is welcome."
            },
            {
              id: "4",
              title: "Where are you located?",
              content: "Krokodilo Bombardino is located at 1234 Culinary Avenue, Downtown District. Ample parking is available. We are conveniently located near public transportation and major thoroughfares."
            }
          ]}
          containerClassName="py-24"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Krokodilo Bombardino"
          copyrightText="© 2025 Krokodilo Bombardino. All rights reserved. Fine Italian Dining Excellence since 1999."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/krokodilo-bombardino",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/krokodilo-bombardino",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Phone,
              href: "tel:+1-555-123-4567",
              ariaLabel: "Call us"
            }
          ]}
          containerClassName="py-16"
        />
      </div>
    </ThemeProvider>
  );
}