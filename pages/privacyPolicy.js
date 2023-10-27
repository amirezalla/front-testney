// pages/privacy-policy.js

import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  return (
    <div className='container-fluid text-white pt-120 pb-50 code'>
        <div className='container pt-120'>
            <div className='row'>
            <Head>
        <title className='text-white'>IngressDefi/Privacy Policy</title>
      </Head>
      <h1 className='text-white'>Privacy Policy</h1>

      <p>
        This is the privacy policy for our website. It outlines how we collect,
        use, and protect your personal information when you use our services.
        Please read this policy carefully to understand how we handle your data.
      </p>

      <h2 className='text-white'>Information We Collect</h2>

      <p>
        We may collect various types of information from you when you use our
        website, including:
      </p>

      <ul>
        <li>Personal information (e.g., name, email address, contact details)</li>
        <li>Usage data (e.g., IP address, browser type, device information)</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2 className='text-white'>How We Use Your Information</h2>

      <p>
        We may use the information we collect for the following purposes:
      </p>

      <ul>
        <li>Provide and maintain our services</li>
        <li>Improve and personalize user experience</li>
        <li>Analyze usage and trends to enhance website functionality</li>
        <li>Communicate with you and respond to inquiries</li>
        <li>Send newsletters, promotions, and marketing materials (with your consent)</li>
      </ul>

      <h2 className='text-white'>Information Sharing and Disclosure</h2>

      <p>
        We may share your information in the following situations:
      </p>

      <ul>
        <li>With service providers and third-party vendors who assist in operating our website and providing services</li>
        <li>To comply with legal obligations or protect against potential fraud</li>
        <li>With your consent or at your direction</li>
      </ul>

      <h2 className='text-white'>Security</h2>

      <p>
        We take appropriate measures to protect your information from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed as completely secure.
      </p>

      <h2 className='text-white'>Changes to This Privacy Policy</h2>

      <p>
        We may update our privacy policy from time to time. Any changes will be posted on this page, and the revised version will be effective immediately upon posting.
      </p>

      <h2 className='text-white'>Contact Us</h2>

      <p>
        If you have any questions or concerns about our privacy policy, please contact us.
      </p>

            </div>


              </div>

    </div>
  );
};

export default PrivacyPolicy;
