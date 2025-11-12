import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function ReturnPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header/>
    <section className="min-h-screen bg-white text-gray-800 pt-24 pb-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Return Policy
          </h1>
          <p className="text-gray-500">Last Updated: November 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-base leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Eligibility for Returns</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you are
              not happy with your order, you may return it under the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Items must be returned within <strong>7 days</strong> of delivery.</li>
              <li>
                The product must be <strong>unused, unworn, unwashed</strong>, and in its
                original packaging with all tags attached.
              </li>
              <li>
                Certain items such as <strong>innerwear, swimwear, and personalized
                products</strong> are not eligible for return due to hygiene reasons.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">2. Return Process</h2>
            <p>To initiate a return, please follow these simple steps:</p>
            <ul className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                <strong>Submit a Return Request –</strong> Contact our support team at{" "}
                <a
                  href="mailto:Stylepressdigital@gmail.com"
                  className="text-black font-medium underline"
                >
                  Stylepressdigital@gmail.com
                </a>{" "}
                with your order details and reason for return.
              </li>
              <li>
                <strong>Approval & Pickup –</strong> Once approved, we will arrange a pickup
                or provide the return shipping details.
              </li>
              <li>
                <strong>Refund/Replacement –</strong> After receiving and inspecting the
                returned item, we will process your refund or replacement within{" "}
                <strong>5-7 business days.</strong>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">3. Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Prepaid Orders –</strong> Refunds will be credited to the original
                payment method (credit/debit card, UPI, etc.).
              </li>
              <li>
                <strong>COD Orders –</strong> Refunds will be issued via bank transfer or
                store credit.
              </li>
              <li>
                <strong>Shipping Charges –</strong> Original shipping costs are
                non-refundable unless the return is due to a defective or wrong item.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">4. Exchange Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Exchanges are allowed only for <strong>size replacements</strong> of the same
                product.
              </li>
              <li>
                If the requested size is unavailable, a <strong>full refund</strong> or store
                credit will be provided.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">5. Damaged or Incorrect Items</h2>
            <p>
              If you receive a damaged, defective, or incorrect item, please notify us within{" "}
              <strong>24 hours of delivery</strong>. Share clear images of the product and
              packaging for faster resolution.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">6. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders can be canceled before shipment for a full refund.</li>
              <li>
                Once shipped, cancellations are not allowed. However, you may return the item
                after delivery as per the return policy.
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
            <p>
              For any return or refund-related queries, reach out to us:
            </p>
            <ul className="pl-1 mt-3 space-y-1">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:support@stylepress.in"
                  className="text-black font-medium underline"
                >
                  support@stylepress.in
                </a>
              </li>
              <li>📞 Phone: <strong>7291947541</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
