import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsOfService() {
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
                <Scale className="text-primary" size={32} />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services of DataFronteira Ltd ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access our services. These Terms apply to all visitors, users, and others who access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-primary" />
                  Description of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DataFronteira Ltd provides data analytics, data management, business intelligence, and consulting services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Data analytics and insights</li>
                  <li>Data management solutions</li>
                  <li>Predictive modeling and forecasting</li>
                  <li>Data governance and quality management</li>
                  <li>Reporting and visualization</li>
                  <li>Data strategy consulting</li>
                  <li>Training and support services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Acceptable Use</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Use our services in any way that violates any applicable law or regulation</li>
                      <li>Infringe upon the rights of others</li>
                      <li>Transmit any malicious code, viruses, or harmful data</li>
                      <li>Attempt to gain unauthorized access to our systems or networks</li>
                      <li>Interfere with or disrupt our services or servers</li>
                      <li>Use our services to collect or store personal data about other users</li>
                      <li>Impersonate any person or entity</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, and software, are owned by DataFronteira Ltd and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our content without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Client Data and Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We understand the sensitive nature of your data and are committed to maintaining confidentiality:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>We will treat all client data as confidential</li>
                  <li>We will not disclose client data to third parties without consent, except as required by law</li>
                  <li>We implement appropriate security measures to protect client data</li>
                  <li>Clients retain ownership of their data</li>
                  <li>We will return or destroy client data upon request or termination of services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Service Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Specific services may be governed by separate service agreements or statements of work that detail the scope, deliverables, timelines, and fees. In the event of a conflict between these Terms and a specific service agreement, the service agreement shall prevail.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle size={24} className="text-primary" />
                  Disclaimers and Limitations of Liability
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Availability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We strive to provide reliable services but do not guarantee that our services will be uninterrupted, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No Warranties</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, DataFronteira Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms for our services will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Fees are due as specified in the service agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use our services will cease immediately. We may also terminate services in accordance with the terms of specific service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless DataFronteira Ltd and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
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
