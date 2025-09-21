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
      results: "Typically see 25-40% improvement in conversion rates within 30 days",
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
      results: "Average 3x increase in qualified leads per month",
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
      results: "Save 15+ hours per week while improving customer engagement",
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
      results: "Achieve 20-50% reduction in customer acquisition costs",
      timeframe: "6-12 weeks"
    }
  ];

  const faqItems = [
    {
      question: "How quickly will I see results?",
      answer: "Most clients see initial improvements within 2-4 weeks. We focus on quick wins first - like optimizing your highest-traffic pages - while building longer-term growth systems. Our 30-day guarantee means if you don't see measurable progress, you get your money back."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "Yes! Our strategies work across industries because we focus on fundamental conversion principles. Whether you're in e-commerce, SaaS, professional services, or local business, the core principles of turning visitors into customers remain the same."
    },
    {
      question: "What's included in the free teardown?",
      answer: "In your 30-minute session, we'll analyze your current funnel, identify the biggest conversion bottlenecks, and give you 2-3 specific improvements you can implement immediately. No sales pitch - just actionable insights you can use whether you work with us or not."
    },
    {
      question: "How much involvement is required from my team?",
      answer: "Minimal. We handle most of the work, but we'll need about 2-3 hours of your time each week for feedback and approvals. We believe in working with you, not just for you, so you understand every change we make."
    },
    {
      question: "What if I'm not technical?",
      answer: "Perfect! Most of our clients aren't technical. We handle all the implementation and explain everything in plain English. You'll understand what we're doing and why, without needing to know the technical details."
    },
    {
      question: "Can you guarantee specific results?",
      answer: "We guarantee you'll see measurable improvements within 30 days, or you get your money back. While we can't predict exact numbers (every business is different), our typical clients see 25-40% improvements in their key metrics."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="relative px-6 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-display font-bold tracking-tight text-white">
                Stop guessing.
                <br />
                <span className="text-cyan-400">Start converting.</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
                We help small businesses turn more visitors into customers using proven strategies. 
                No complicated tech, no endless meetings - just results you can measure.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book"
                  className="rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all duration-200"
                >
                  Get Your Free Business Teardown
                </Link>
                <span className="text-slate-400 text-sm">
                  30 minutes • No sales pitch • Actionable insights
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-headline font-bold text-white mb-4">
                Typical Results for Small Businesses
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Here's what businesses like yours typically see when they stop leaving money on the table
              </p>
            </div>
            <StatsTiles />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-headline font-bold text-white mb-4">
                How We Help Small Businesses Grow
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                We focus on four key areas that drive real results. No fluff, no buzzwords - 
                just proven strategies that work for businesses at your stage.
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
        <section className="py-16 px-6 lg:px-8 bg-slate-800/50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-headline font-bold text-white mb-6">
              Our Simple 3-Step Process
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              No complicated onboarding. No months of planning. We get started fast and show results even faster.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Analyze</h3>
                <p className="text-slate-300">
                  We audit your current setup, identify the biggest opportunities, and create a clear action plan.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimize</h3>
                <p className="text-slate-300">
                  We implement proven improvements to your funnels, starting with the highest-impact changes first.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scale</h3>
                <p className="text-slate-300">
                  We build systems that keep working for you, so you can focus on running your business.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-700/50 rounded-xl border border-slate-600">
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
        <section className="py-16 px-6 lg:px-8">
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
        <section className="py-16 px-6 lg:px-8">
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