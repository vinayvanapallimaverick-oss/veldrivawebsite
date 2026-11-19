import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the Veldriva website. Draft for review.",
  path: "/terms",
});

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      intro="These draft terms govern your use of the Veldriva website."
      sections={[
        { h: "1. Acceptance", p: ["By accessing veldriva.com you agree to these Terms of Use. If you do not agree, please do not use the website."] },
        { h: "2. Informational purposes", p: ["Content on this website is provided for general information only and does not constitute professional advice or an offer to provide services. Any engagement with Veldriva will be governed by a separate written agreement."] },
        { h: "3. Intellectual property", p: ["The website, its content, design and the Veldriva name and logo are owned by Veldriva or its licensors and are protected by applicable intellectual property laws. Third-party product names and trademarks belong to their respective owners, and their mention does not imply affiliation or endorsement."] },
        { h: "4. Acceptable use", p: ["You agree not to:", ["Interfere with or disrupt the website or its security", "Use automated means to scrape the site or submit spam", "Submit unlawful, harmful or misleading content", "Attempt to gain unauthorized access to any system"]] },
        { h: "5. Submissions", p: ["Information you submit through the contact form is handled in accordance with our Privacy Policy. Please do not submit confidential or sensitive personal information through the form."] },
        { h: "6. Disclaimer and limitation of liability", p: ["The website is provided “as is” without warranties of any kind, to the extent permitted by law. To the extent permitted by law, Veldriva is not liable for indirect or consequential damages arising from use of the website. [Counsel to review and tailor for US and Canadian jurisdictions.]"] },
        { h: "7. Third-party links", p: ["The website may link to third-party sites that we do not control. We are not responsible for their content or practices."] },
        { h: "8. Governing law", p: ["[Insert governing law and jurisdiction after legal review.]"] },
        { h: "9. Changes", p: ["We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms."] },
      ]}
    />
  );
}
