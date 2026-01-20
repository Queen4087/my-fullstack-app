import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContactContainer = styled.section`
  padding: 100px 50px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 20px;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.slate};
  font-size: 1.1rem;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.fonts.primary};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.green};
  padding: 18px 28px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 20px;
  transition: all 0.3s ease;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transGreen};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  color: ${({ success, theme }) => success ? theme.colors.green : 'red'};
  font-size: 0.9rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <ContactContainer id="contact">
      <Subtitle>05. What's Next?</Subtitle>
      <Title>Get In Touch</Title>
      <Text>
        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </Text>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Name</Label>
          <Input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        <InputGroup>
          <Label>Message</Label>
          <TextArea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        <SubmitButton type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Say Hello'}
        </SubmitButton>
      </Form>
      
      {status === 'success' && <Message success>Message sent successfully!</Message>}
      {status === 'error' && <Message>Something went wrong. Please try again.</Message>}
    </ContactContainer>
  );
};

export default Contact;
