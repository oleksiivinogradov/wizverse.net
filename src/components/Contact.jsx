import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [subscribeEmail, setSubscribeEmail] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your application!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleSubscribeSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your subscription!');
        setSubscribeEmail('');
    };

    return (
        <section id="contacts" className="section contact-section">
            <div className="container">
                {/* CTA Section */}
                <div className="cta-wrapper">
                    <h2 className="text-gradient">Unleash your magic</h2>
                    <p className="cta-subtitle">Start your journey in Wizverse today</p>
                    <a href="https://app.wizverse.net/" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                        Play game
                    </a>
                </div>

                {/* Contact Form */}
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Contact us</h2>
                        <p>Let's work together to integrate innovative solutions and grow Wizverse.</p>
                        <div className="contact-email">
                            <a href="mailto:margarita@wizverse.net">margarita@wizverse.net</a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper card">
                        <form onSubmit={handleContactSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="subscription-wrapper card">
                    <h3>Join to cosmic universe</h3>
                    <p>Subscribe to stay updated with the latest news and updates</p>
                    <form onSubmit={handleSubscribeSubmit} className="subscription-form">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
