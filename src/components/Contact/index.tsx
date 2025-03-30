import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Footer';
import {
  ContactPage,
  ContactContent,
  ContactHeader,
  ContactGrid,
  ContactFormSection,
  FormLabel,
  FormControl,
  FormControlTextarea,
  SubmitButton,
  ContactInfoSection,
  InfoCard,
  SocialLinks,
  SocialIconWrapper,
  AdditionalInfo,
  AlertWrapper,
} from './styles';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real implementation, this would send data to a backend
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setShowError(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const socialLinks = [
    { url: 'https://discord.gg/7K2MAqYJrQ', network: 'discord' },
    { url: 'https://medium.com/@Bentleyblockchain', network: 'medium' },
    { url: 'https://www.linkedin.com/company/bentley-blockchain-association/', network: 'linkedin' },
    { url: 'https://twitter.com/BentleyBBA', network: 'twitter' },
  ];

  return (
    <ContactPage>
      <ContactContent>
        <ContactHeader>
          <h1>Contact Us</h1>
          <p>Get in touch with the Bentley Blockchain Association</p>
        </ContactHeader>

        {showSuccess && (
          <AlertWrapper>
            <div
              style={{
                color: 'green',
                backgroundColor: '#d4edda',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              Thank you for your message! We'll get back to you soon.
            </div>
          </AlertWrapper>
        )}

        {showError && (
          <AlertWrapper>
            <div
              style={{
                color: 'red',
                backgroundColor: '#f8d7da',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              There was an error sending your message. Please try again later.
            </div>
          </AlertWrapper>
        )}

        <ContactGrid>
          <ContactFormSection>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <FormLabel>Subject</FormLabel>
                <FormControl
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <FormLabel>Message</FormLabel>
                <FormControlTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message here..."
                  required
                />
              </div>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          </ContactFormSection>

          <ContactInfoSection>
            <InfoCard>
              <h3>Connect With Us</h3>
              <p>Join our community and stay updated with the latest news and events.</p>

              <SocialLinks>
                {socialLinks.map((link, index) => (
                  <SocialIconWrapper key={index}>
                    <SocialIcon
                      url={link.url}
                      network={link.network}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: 40, height: 40 }}
                    />
                  </SocialIconWrapper>
                ))}
              </SocialLinks>

              <AdditionalInfo>
                <h4>Location</h4>
                <p>
                  Bentley University
                  <br />
                  175 Forest Street
                  <br />
                  Waltham, MA 02452
                </p>

                <h4>Email</h4>
                <p>
                  <a href="mailto:bentleyblockchain@gmail.com">bentleyblockchain@gmail.com</a>
                </p>
              </AdditionalInfo>
            </InfoCard>
          </ContactInfoSection>
        </ContactGrid>
      </ContactContent>
      <Footer />
    </ContactPage>
  );
};

export default Contact;