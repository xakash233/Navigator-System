"use client"

import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const CounterForm = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Email!")
    }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="company" name="company" placeholder="Company" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="city" name="city" placeholder="City" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <select className="form-control" id="service" name="service" required>
                                <option value="">Service Needed*</option>
                                <option value="amc">AMC / Infrastructure Support</option>
                                <option value="engineering">Software / Web Engineering</option>
                                <option value="cloud">Cloud Services</option>
                                <option value="partnership">Partnership / Vendor</option>
                                <option value="other">Other</option>
                            </select>
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Message *" required autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane" /> Get in Touch
                        </button>
                    </div>
                </div>

                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>

                <div className="col-lg-12 mt-3">
                    <p className="small text-muted">
                        By submitting this form, you agree to our Terms and Privacy Policy.
                    </p>
                </div>
            </form>
        </>
    );
};

export default CounterForm;