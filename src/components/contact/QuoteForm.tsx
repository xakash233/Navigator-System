
"use client"
import React, { useState } from 'react';
import Link from "next/link";

const QuoteFormV1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        service: 'Server Maintenance & Support',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your request. We will get back to you shortly!');
    };

    return (
        <div className="contact-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="contact-form-style-one heading-less text-center">
                            <h2 className="title mb-30">Request a Quote & Tailored Plan</h2>
                            <p className="mb-40">Let’s discuss your uptime goals or project build. Fill out the form below and our team will contact you with a customized proposal.</p>
                            <form className="contact-form contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" onChange={handleChange} required />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" onChange={handleChange} required />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" onChange={handleChange} required />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="company" name="company" placeholder="Company Name" type="text" onChange={handleChange} />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="city" name="city" placeholder="City" type="text" onChange={handleChange} />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select className="form-control" id="service" name="service" onChange={handleChange}>
                                                <option value="Server Maintenance & Support">Server Maintenance & Support</option>
                                                <option value="AMC Services">AMC Services</option>
                                                <option value="Network Maintenance">Network Maintenance</option>
                                                <option value="Data Center Solutions">Data Center Solutions</option>
                                                <option value="IT Operations Management">IT Operations Management</option>
                                                <option value="Helpdesk / FMS">Helpdesk / FMS</option>
                                                <option value="Website Development">Website Development</option>
                                                <option value="UI/UX Design">UI/UX Design</option>
                                                <option value="Branding & Strategy">Branding & Strategy</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                                                <option value="SEO & SEM">SEO & SEM</option>
                                                <option value="Software Development">Software Development</option>
                                                <option value="Cloud Services">Cloud Services</option>
                                                <option value="AI / Automation">AI / Automation</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="message" name="message" placeholder="Tell us about your requirements *" onChange={handleChange} required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Get a Quote <i className="fa fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg"></div>
                                </div>
                            </form>
                            <p className="mt-20" style={{ fontSize: '14px', color: '#777' }}>
                                By submitting this form, you agree to our <Link href="/terms-conditions">Terms</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteFormV1;
