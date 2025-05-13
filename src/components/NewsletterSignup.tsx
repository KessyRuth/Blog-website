import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast("You've been subscribed to our newsletter.");
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-blog-light-gray">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-semibold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Join our newsletter to get the latest blog posts and insights delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
