import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 23, 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText size={24} className="text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DataFronteira Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye size={24} className="text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                      <li>Register for an account or request our services</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Contact us through our website or email</li>
                      <li>Participate in surveys or provide feedback</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you visit our website, we may automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device identifiers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lock size={24} className="text-primary" />
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website usage and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email delivery.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:hi@datafronteira.com" className="text-primary hover:underline">hi@datafronteira.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> <a href="mailto:hi@datafronteira.com" className="text-primary hover:underline">hi@datafronteira.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+2347041300104" className="text-primary hover:underline">+234 704 130 0104</a></p>
                  <p><strong>Address:</strong> Abuja, Nigeria</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
