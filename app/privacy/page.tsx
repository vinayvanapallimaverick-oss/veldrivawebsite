import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Veldriva collects, uses and protects personal information submitted through veldriva.com. Draft for review.",
  path: "/privacy",
});

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro="This draft explains how Veldriva handles personal information collected through this website."
      sections={[
        { h: "1. Who we are", p: ["Veldriva (“Veldriva”, “we”, “us”) provides digital transformation and technology consulting services to organizations in the United States and Canada. [Insert legal entity name, registered address and privacy contact before publication.]"] },
        { h: "2. Information we collect", p: ["We collect information you choose to provide through our contact form:", ["Full name, business email address and company name", "Country and service of interest", "Project details and any other information you include in your message", "Your consent confirmation"], "Our hosting provider may process technical data such as IP address and request metadata in server logs for security and reliability. This website does not currently use advertising or analytics cookies. [Update this section if analytics or other tools are added.]"] },
        { h: "3. How we use information", p: ["We use the information to respond to your inquiry, to evaluate and discuss potential engagements, to protect the website against spam and abuse, and to meet legal obligations."] },
        { h: "4. Legal bases and consent", p: ["We process your inquiry on the basis of your consent and our legitimate interest in responding to business inquiries. In Canada, we aim to obtain meaningful consent consistent with applicable privacy law, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial laws. [Counsel to confirm applicable laws.]"] },
        { h: "5. Sharing", p: ["We share information only with service providers that help us operate the website and handle inquiries (for example hosting and email delivery providers), and where required by law. We do not sell personal information. [Confirm and list actual providers.]"] },
        { h: "6. International transfers and retention", p: ["Our service providers may process information in the United States, Canada or other countries. We retain inquiry information only as long as needed for the purposes described above or as required by law. [Define retention period.]"] },
        { h: "7. Your rights", p: ["Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal information, to withdraw consent, and to complain to a regulator. This may include rights under US state privacy laws (such as California) and Canadian privacy laws. To exercise your rights, contact us using the details below."] },
        { h: "8. Security", p: ["We use reasonable administrative, technical and organizational safeguards, including encrypted connections (HTTPS), to protect personal information. No method of transmission is completely secure."] },
        { h: "9. Children", p: ["This website is intended for business audiences and is not directed to children."] },
        { h: "10. Changes and contact", p: ["We may update this policy and will post the revised version here. Questions about this policy or requests to exercise your rights can be sent to info@veldriva.com or through our contact page."] },
      ]}
    />
  );
}
