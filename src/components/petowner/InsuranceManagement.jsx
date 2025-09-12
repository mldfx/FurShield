import { useState, useEffect } from "react"
import {
  ChevronDown,
  Shield,
  Heart,
  Stethoscope,
  Phone,
  Check,
  Star,
  ArrowRight,
  Calculator,
  Users,
  Award, ArrowLeft
} from "lucide-react"
import "./InsuranceManagement.css"

export default function InsuranceManagement() {
  const [openFaq, setOpenFaq] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ pets: 0, claims: 0, satisfaction: 0 })

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setCounters({ pets: 50000, claims: 25000, satisfaction: 98 })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Do I need pet insurance?",
      answer:
        "Insurance isn't mandatory, but it helps manage unexpected costs and allows you to make treatment decisions based on care, not price.",
    },
    {
      question: "Can I use any veterinarian?",
      answer:
        "Most plans let you visit any licensed vet. If you want direct-billing or partner-network savings, check specific policy details.",
    },
    {
      question: "What about pre-existing conditions?",
      answer:
        "Pre-existing conditions are typically excluded. New conditions after coverage starts are handled per policy waiting periods.",
    },
  ]

  const planFeatures = [
    {
      icon: Shield,
      title: "Accident & Emergency",
      description: "Immediate care for injuries, sudden illnesses and accidents.",
      color: "red",
    },
    {
      icon: Heart,
      title: "Illness Coverage",
      description: "Covers infections, chronic and hereditary conditions (subject to terms).",
      color: "blue",
    },
    {
      icon: Stethoscope,
      title: "Wellness Plans",
      description: "Optional add-on for vaccines, dental checks and routine screenings.",
      color: "green",
    },
  ]

  return (
    <div className="insurance-container">
      <div className="insurance-wrapper">
        <div className="insurance-grid">
          <main className="insurance-main">
            {/* Hero Section */}
            <section className={`hero-section ${isVisible ? "visible" : ""}`}>
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <a href="/dashboard/pet-owner" className="insurance-return-link">
                    <div className="insurance-return-btn"> 
                        <ArrowLeft className="return-icon"/>
                        <p className="insurance-return-text">Back to Dashboard </p>
                    </div>
                </a>
                <div className="hero-badge">
                  <Shield className="hero-badge-icon" />
                  <span className="hero-badge-text">Care & Coverage</span>
                </div>
                <h1 className="hero-title">Pet Insurance — protect your pet, protect your wallet</h1>
                <p className="hero-description">
                  Straightforward plans for accidents, illnesses, and optional wellness care. Learn what's covered,
                  costs, and how claims work.
                </p>

                <div className="plan-features-grid">
                  {planFeatures.map((plan, index) => {
                    const Icon = plan.icon
                    return (
                      <div
                        key={index}
                        className={`plan-feature-card ${isVisible ? "visible" : ""}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className={`plan-feature-icon ${plan.color}`}>
                          <Icon className="icon" />
                        </div>
                        <h4 className="plan-feature-title">{plan.title}</h4>
                        <p className="plan-feature-description">{plan.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="stats-grid">
              {[
                { label: "Pets Protected", value: counters.pets, suffix: "+" },
                { label: "Claims Processed", value: counters.claims, suffix: "+" },
                { label: "Satisfaction Rate", value: counters.satisfaction, suffix: "%" },
              ].map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </section>

            {/* Coverage Sections */}
            <div className="coverage-grid">
              <section className="coverage-card">
                <div className="coverage-header">
                  <div className="coverage-icon green">
                    <Check className="icon" />
                  </div>
                  <h3 className="coverage-title">What's typically covered</h3>
                </div>
                <ul className="coverage-list">
                  {[
                    "Emergency surgery & hospitalization",
                    "Diagnostic imaging (X-ray/ultrasound)",
                    "Blood work & lab tests",
                    "Medications prescribed by your vet",
                    "Chronic condition management",
                    "Specialist referrals",
                  ].map((item, index) => (
                    <li key={index} className="coverage-item covered">
                      <Check className="coverage-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="coverage-card">
                <div className="coverage-header">
                  <div className="coverage-icon red">
                    <Shield className="icon" />
                  </div>
                  <h3 className="coverage-title">What's usually not covered</h3>
                </div>
                <ul className="coverage-list">
                  {[
                    "Pre-existing conditions",
                    "Elective cosmetic procedures",
                    "Breeding & pregnancy costs",
                    "Behavioral training unless specified",
                    "Routine grooming (unless wellness add-on)",
                    "Experimental treatments (case-by-case)",
                  ].map((item, index) => (
                    <li key={index} className="coverage-item not-covered">
                      <div className="coverage-x"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* How it Works */}
            <section className="how-it-works">
              <h3 className="section-title">How it works</h3>
              <div className="steps-grid">
                {[
                  {
                    step: "1",
                    title: "Visit",
                    description: "Bring your pet to any licensed veterinarian (our clinic or others).",
                  },
                  {
                    step: "2",
                    title: "Pay",
                    description:
                      "Most insurers reimburse you after you pay the vet bill; some offer direct-billing options.",
                  },
                  {
                    step: "3",
                    title: "Claim",
                    description: "Submit a claim online with your invoice — we can help with documents if needed.",
                  },
                  {
                    step: "4",
                    title: "Reimburse",
                    description: "Insurer pays according to your plan's reimbursement rate and deductible.",
                  },
                ].map((item, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{item.step}</div>
                    <h4 className="step-title">{item.title}</h4>
                    <p className="step-description">{item.description}</p>
                    {index < 3 && <ArrowRight className="step-arrow" />}
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Table Section */}
            <section className="pricing-section">
              <div className="pricing-header">
                <Calculator className="pricing-icon" />
                <h3 className="section-title">Sample pricing</h3>
              </div>
              <div className="table-wrapper">
                <table className="pricing-table">
                  <thead>
                    <tr className="table-header">
                      <th className="table-cell header">Plan</th>
                      <th className="table-cell header">Estimated monthly</th>
                      <th className="table-cell header">Deductible</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { plan: "Accident-Only", monthly: "$8–$20", deductible: "$100–$250" },
                      { plan: "Standard (Accident + Illness)", monthly: "$18–$40", deductible: "$100–$500" },
                      { plan: "Comprehensive + Wellness", monthly: "$30–$70", deductible: "$50–$400" },
                    ].map((row, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell plan-name">{row.plan}</td>
                        <td className="table-cell">{row.monthly}</td>
                        <td className="table-cell">{row.deductible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="pricing-note">
                These are illustrative ranges. Your quote depends on species, breed, age and location.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
              <h3 className="section-title">Frequently asked questions</h3>
              <div className="faq-list">
                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button onClick={() => toggleFaq(index)} className="faq-button">
                      <span className="faq-question">{faq.question}</span>
                      <ChevronDown className={`faq-chevron ${openFaq === index ? "open" : ""}`} />
                    </button>
                    <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>
                      <div className="faq-content">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-card">
              <div className="clinic-badge">
                <Award className="badge-icon" />
                <span className="badge-text">Clinic Partner</span>
              </div>
              <p className="sidebar-description">We work with trusted insurers to simplify claims and paperwork.</p>

              <div className="phone-info">
                <Phone className="phone-icon" />
                <span>Need help? Call: (555) 555-5555</span>
              </div>

              <div className="button-group">
                <button className="primary-button">Get a free quote</button>
                <button className="secondary-button">Compare plans</button>
              </div>

              <p className="help-text">
                Or{" "}
                <a href="#faq" className="help-link">
                  ask our team
                </a>{" "}
                to help choose the right plan for your pet.
              </p>

              <div className="partners-section">
                <div className="partners-header">
                  <Users className="partners-icon" />
                  <h4 className="partners-title">Partner insurers</h4>
                </div>
                <div className="partners-grid">
                  {["Provider A", "Provider B", "Provider C", "Provider D"].map((provider, index) => (
                    <div key={index} className="partner-item">
                      {provider}
                    </div>
                  ))}
                </div>
              </div>

              <div className="tips-section">
                <h4 className="tips-title">
                  <Star className="tips-icon" />
                  Quick tips
                </h4>
                <ul className="tips-list">
                  {[
                    "Start insurance young — lower premiums and fewer exclusions.",
                    "Compare reimbursement %, deductibles, and waiting periods.",
                    "Keep records of prior treatments for faster claims.",
                  ].map((tip, index) => (
                    <li key={index} className="tip-item">
                      <div className="tip-bullet"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}