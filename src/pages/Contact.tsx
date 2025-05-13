import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Mindful Blog";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast("Message sent! We'll get back to you as soon as possible.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Contact Us</h1>
            
            <div className="mb-10">
              <p className="text-lg mb-4">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you!
              </p>
              <p className="text-muted-foreground">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-serif font-medium mb-4">Other Ways to Reach Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@mindfulgblog.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-muted-foreground hover:text-blog-purple">Twitter</a>
                      <a href="#" className="text-muted-foreground hover:text-blog-purple">Instagram</a>
                      <a href="#" className="text-muted-foreground hover:text-blog-purple">LinkedIn</a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Monday to Friday: 9am - 5pm (PST)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Frequently Asked Questions</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blog-purple hover:underline">Can I contribute an article?</a>
                    </li>
                    <li>
                      <a href="#" className="text-blog-purple hover:underline">Do you offer coaching sessions?</a>
                    </li>
                    <li>
                      <a href="#" className="text-blog-purple hover:underline">Where can I find your resources?</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
