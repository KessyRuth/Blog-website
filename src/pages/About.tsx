
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import NewsletterSignup from '@/components/NewsletterSignup';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Mindful Blog";
  }, []);

  return (
    <Layout>
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">About Mindful Blog</h1>
            
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=400" 
              alt="Our workspace" 
              className="w-full h-auto object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-slate max-w-none">
              <p className="text-xl mb-6">
                Welcome to Mindful Blog, a space dedicated to exploring mindfulness, productivity, 
                and personal growth in our increasingly complex world.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                At Mindful Blog, we believe that the path to a more fulfilling life starts with intentionality
                and awareness. Our mission is to provide thoughtful content that inspires readers to live more 
                mindfully and purposefully, whether that's in their work, relationships, or personal development.
              </p>
              
              <h2>Our Story</h2>
              <p>
                Mindful Blog was founded in 2023 by a small team of writers and mindfulness practitioners who 
                wanted to share their insights and experiences with others on similar journeys. What started as 
                a small personal blog has grown into a community of readers and contributors all exploring what 
                it means to live with greater awareness.
              </p>
              
              <h2>Our Values</h2>
              <ul>
                <li><strong>Authenticity:</strong> We share real experiences and practical advice, not idealized versions of mindfulness.</li>
                <li><strong>Accessibility:</strong> We believe mindfulness should be approachable for everyone, regardless of background or experience.</li>
                <li><strong>Community:</strong> We value connection and learning from each other's unique perspectives.</li>
                <li><strong>Growth:</strong> We embrace the journey of continuous improvement and self-discovery.</li>
              </ul>
              
              <h2>Meet the Team</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium">Sarah Johnson</h3>
                <p className="text-blog-purple mb-2">Founder & Editor</p>
                <p className="text-muted-foreground">
                  Mindfulness practitioner with 10+ years of meditation experience. 
                  Loves hiking and exploring new tea varieties.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=150&h=150" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium">David Chen</h3>
                <p className="text-blog-purple mb-2">Content Strategist</p>
                <p className="text-muted-foreground">
                  Former tech worker turned mindfulness advocate. 
                  Passionate about helping others find balance in digital life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
    </Layout>
  );
};

export default About;
