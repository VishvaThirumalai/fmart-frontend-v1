import React, { useState, useEffect, useRef } from "react";
import "./ContactPage.css";
import MarLogo from "../assets/images/MarLogo.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    priority: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    updateBusinessHours();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 200);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".feature-card").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition =
        "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const updateBusinessHours = () => {
    const day = new Date().getDay();
    const hoursItems = document.querySelectorAll(".hours-item");

    hoursItems.forEach((item) => {
      item.style.background = "transparent";
      item.style.borderRadius = "0";
    });

    let currentDayIndex = -1;
    if (day >= 1 && day <= 5) currentDayIndex = 0;
    else if (day === 6) currentDayIndex = 1;
    else if (day === 0) currentDayIndex = 2;

    if (currentDayIndex >= 0 && hoursItems[currentDayIndex]) {
      hoursItems[currentDayIndex].style.background =
        "rgba(45, 212, 191, 0.1)";
      hoursItems[currentDayIndex].style.borderRadius = "12px";
      hoursItems[currentDayIndex].style.padding = "1rem";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "priority",
      "subject",
      "message",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        errors[field] = true;
      }
    });

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = true;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const serviceId = "service_unaq8eo";
      const templateId = "template_mxh7ehr";
      const publicKey = "OklvZgYXEHrFEx3iv";

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setShowSuccess(true);

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        priority: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error("EMAIL ERROR:", error);
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const getInputClassName = (field) => {
    let className = "form-control";
    if (fieldErrors[field]) className += " error";
    else if (formData[field]) className += " success";
    return className;
  };

  return (
    <div className="contact-page">
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-shield-alt"></i>
            Trusted by 50,000+ customers
          </div>

          <h1 className="hero-title">Get in Touch</h1>

          <p className="hero-subtitle">
            Have questions about your order, need help with our app,
            or want to provide feedback? We are here 24/7.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="contact-grid">
          {/* CONTACT FORM */}
          <div className="contact-form">
            <div className="form-header">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form and we’ll reply within 24 hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    className={getInputClassName("firstName")}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    className={getInputClassName("lastName")}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className={getInputClassName("email")}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Priority *</label>
                  <select
                    name="priority"
                    className={getInputClassName("priority")}
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="low">Low - General Inquiry</option>
                    <option value="medium">Medium - Order Issue</option>
                    <option value="high">High - Urgent Support</option>
                    <option value="critical">
                      Critical - Payment Issue
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className={getInputClassName("subject")}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  className={getInputClassName("message")}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${
                  isSubmitting ? "loading" : ""
                } ${showSuccess ? "success" : ""}`}
              >
                {isSubmitting
                  ? "Sending..."
                  : showSuccess
                  ? "Message Sent!"
                  : "Send Message"}
              </button>

              {showSuccess && (
                <div className="success-message show">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>

            <div className="contact-card">
            <h3>Call Us</h3>
            <a href="tel:+917092980042">
              +91 70929 80042
            </a>
          </div>


            <div className="contact-card">
              <h3>Email Support</h3>
              <a
                href="vishva2730@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard("freshmart@gmail.com");
                }}
              >
                vishva2730@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
