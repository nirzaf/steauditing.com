import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SEO page="contact" />
      <Contact />
    </div>
  );
}
