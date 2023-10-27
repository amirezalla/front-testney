// pages/terms-of-service.js
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div className="container-fluid code text-white pt-120 pb-50">
        <div className="container pt-120 pb-50">
            <div className="row">
            <Head>
        <title className="text-white text-center">IngressDefi/Terms of Service</title>
      </Head>

      <h1 className="textPink">Terms of Service</h1>

      <p>
        These terms of service govern your use of our NFT website. Please read these Terms carefully before using the Website.
      </p>

      <h2 className="textPink">Acceptance of Terms</h2>

      <p>
        By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Website.
      </p>

      <h2 className="textPink">Intellectual Property</h2>

      <p>
        All intellectual property rights in the Website and its content, including but not limited to text, graphics, images, logos, and software, are owned by us or our licensors. You may not reproduce, modify, distribute, or otherwise exploit any of the content without our prior written consent.
      </p>

      <h2 className="text-white">Ownership and Licensing of NFTs</h2>

      <p>
        NFTs (non-fungible tokens) available on our Website are owned and licensed by the respective creators. When you purchase an NFT, you acquire ownership rights specific to that NFT as outlined in the associated license. You may not reproduce, sell, distribute, or exploit NFTs without the necessary rights and permissions.
      </p>

      <h2 className="textPink">User Conduct</h2>

      <p >
        When using the Website, you agree to abide by the following rules of conduct:
      </p>

      <ul>
        <li>Do not engage in any unlawful or fraudulent activities.</li>
        <li>Do not violate the intellectual property rights of others.</li>
        <li>Do not engage in disruptive or harmful behavior towards other users.</li>
        <li>Do not attempt to interfere with the functioning of the Website.</li>
        <li>Do not use the Website for any commercial purposes without our consent.</li>
      </ul>

      <h2 className="textPink">Disclaimer of Warranty</h2>

      <p>
        The Website is provided on an "as is" and "as available" basis, without any warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of the content or services provided on the Website.
      </p>

      <h2 className="textPink">Limitation of Liability</h2>

      <p>
        To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website or the NFTs purchased through the Website.
      </p>

      <h2 className="textPink">Indemnification</h2>

      <p>
        You agree to indemnify and hold us harmless from any claims, damages, liabilities, or expenses arising out of your use of the Website or your violation of these Terms.
      </p>

      <h2 className="textPink">Termination</h2>

      <p>
        We reserve the right to terminate or suspend your access to the Website at any time, without prior notice or liability, for any reason whatsoever.
      </p>

      <h2 className="textPink">Changes to the Terms</h2>

      <p>
        We may revise these Terms at any time. The updated version will be effective upon posting on the Website. By continuing to use the Website, you agree to be bound by the revised Terms.
      </p>

      <h2 className="textPink">Contact Us</h2>

      <p>
        If you have any questions or concerns about these Terms, please contact us.
      </p>

            </div>
        </div>
      
    </div>
  );
};

export default TermsOfService;
