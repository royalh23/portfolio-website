import { useState } from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormData({name: "", email: "", subject: "", message: ""});
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };

    return (
        <main id="contact">
            <SectionTitle animationClassName="contact-title">
                Let's get in <span>touch</span>
            </SectionTitle>

            <section className="contact-container">
                <article className="contact-welcoming">
                    <h4>Do you have any questions or want to hire me? Feel free to get in touch!</h4>
                </article>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                            placeholder="John Doe"
                            required 
                            autoComplete="name"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            placeholder="john@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <input 
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value})}
                            placeholder="Looking to collaborate"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message"
                            rows={5} 
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <Button>Send</Button>
                </form>
            </section>
        </main>
    );
}
