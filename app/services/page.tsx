"use client";

import { CheckCircle, Users, Target, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import StatsTiles from "../../components/StatsTiles";
import CTASection from "../../components/CTASection";
import FAQAccordion from "../../components/FAQAccordion";
import ServicesStickyBar from "../../components/ServicesStickyBar";

export default function ServicesPage() {
  const services = [
    {
      iconName: "Target",
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with proven strategies.",
      features: [
        "Funnel analysis and bottleneck identification",
        "A/B testing of key conversion elements",
        "Landing page optimization",
        "Checkout process streamlining",
        "User behavior tracking and insights"
      ],
      results: "AI-powered optimization with continuous learning and adaptation",
      timeframe: "2-4 weeks"
    },
    {
      iconName: "Users",
      title: "Lead Generation Systems",
      description: "Build predictable pipelines that generate qualified prospects.",
      features: [
        "Lead magnet creation and optimization",
        "Email capture form design",
        "Landing page development",
        "Lead scoring and qualification",
        "Automated follow-up sequences"
      ],
      results: "Intelligent lead scoring and automated nurture sequences",
      timeframe: "3-6 weeks"
    },
    {
      iconName: "Zap",
      title: "Marketing Automation",
      description: "Streamline your marketing with smart automation workflows.",
      features: [
        "Email automation sequences",
        "Customer journey mapping",
        "Behavioral trigger setup",
        "Segmentation strategies",
        "Performance tracking and optimization"
      ],
      results: "24/7 automated support with human-like interactions",
      timeframe: "4-8 weeks"
    },
    {
      iconName: "TrendingUp",
      title: "Growth Strategy & Analytics",
      description: "Data-driven strategies to scale your business effectively.",
      features: [
        "Growth metric identification and tracking",
        "Customer acquisition cost optimization",
        "Retention strategy development",
        "Revenue funnel analysis",
        "Competitive analysis and positioning"
      ],
      results: "Data-driven insights with advanced analytics and reporting",
      timeframe: "6-12 weeks"
    }
  ];

  const faqItems = [
    {
      question: "How quickly will I see results?",
      answer: "As a beta partner, you'll see immediate improvements in response times and availability. While we're still gathering data on long-term outcomes, our AI systems are designed for instant 24/7 coverage and sub-second response times."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "Our AI technology is industry-agnostic and can be trained on any business model. We're currently focusing on service-based businesses and e-commerce as our beta partners, but the underlying technology works across industries."
    },
    {
      question: "What's included in the free strategy call?",
      answer: "We'll analyze your current customer communication process, identify automation opportunities, and show you exactly how our AI would handle your typical customer interactions. It's a technical demonstration, not a sales pitch."
    },
    {
      question: "How much involvement is required from my team?",
      answer: "Minimal. We handle most of the work, but we'll need about 2-3 hours of your time each week for feedback and approvals. We believe in working with you, not just for you, so you understand every change we make."
    },
    {
      question: "What if I'm not technical?",
      answer: "Perfect! Our whole mission is making advanced AI accessible to non-technical business owners. We handle all the technical complexity - you just need to tell us about your business and we'll train the AI to represent you accurately."
    },
    {
      question: "Is this a proven system?",
      answer: "We're currently in beta, which means you'll get early access to cutting-edge AI technology at a significant discount. While we're still building our track record, our technology is built on proven AI models and we're confident in the capabilities."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 animated-grid"></div>
          <div className="absolute inset-0 bg-vignette"></div>
          <div className="relative container-section">
            <div className="mx-auto max-w-4xl text-center">
              <div className="page-header">
                <h1 className="">
                  Stop guessing.
                  <br />
                  <span className="text-cyan-400">Start converting.</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  We're building AI systems that automate customer communication for small businesses. Currently in beta — join early and help shape the future of business automation.
                </p>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book" className="btn-primary px-8 py-4 text-lg">
                  Join Our Beta Program
                </Link>
                <span className="text-slate-400 text-sm">
                  Limited spots • Free setup • Early access pricing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container-section">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-headline font-bold text-white mb-4">
                Technology Capabilities
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Built on cutting-edge AI, designed for the future of business automation
              </p>
            </div>
            <StatsTiles />
          </div>
        </section>

        {/* Services Section */}
        <section className="container-section">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-headline font-bold text-white mb-4">
                How Our AI Technology Works
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Four core systems that work together to automate your customer communication.
                Currently in beta with early access pricing.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="container-section bg-slate-800/30">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-headline font-bold text-white mb-6">
              Our Simple 3-Step Process
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              No complicated onboarding. No months of planning. We get started fast and show results even faster.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center card-surface p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Analyze</h3>
                <p className="text-slate-300">
                  We audit your current setup, identify the biggest opportunities, and create a clear action plan.
                </p>
              </div>
              
              <div className="text-center card-surface p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimize</h3>
                <p className="text-slate-300">
                  We implement proven improvements to your funnels, starting with the highest-impact changes first.
                </p>
              </div>
              
              <div className="text-center card-surface p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scale</h3>
                <p className="text-slate-300">
                  We build systems that keep working for you, so you can focus on running your business.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 card-surface">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="font-semibold text-green-400">30-Day Results Guarantee</span>
              </div>
              <p className="text-slate-300">
                If you don't see measurable improvements in your conversion rates within 30 days, 
                we'll refund your investment. That's how confident we are in our process.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container-section">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-headline font-bold text-white mb-4">
                Questions? We've Got Answers.
              </h2>
              <p className="text-slate-300 text-lg">
                Here are the most common questions we get from small business owners
              </p>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-section">
          <CTASection
            title="Ready to Stop Leaving Money on the Table?"
            description="Get your free 30-minute business teardown and discover exactly how to turn more visitors into customers."
            primaryButton={{
              text: "Book Your Free Teardown",
              href: "/book"
            }}
            secondaryButton={{
              text: "Learn About Our Process",
              href: "/about"
            }}
            badge="No sales pitch • Actionable insights • 30 minutes"
          />
        </section>
      </div>
      
      <ServicesStickyBar />
    </>
  );
}