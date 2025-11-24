import React from "react";

function Footer() {
  return (
    <footer className="mt-16 text-gray-200 bg-gray-900">
      <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid w-12 h-14 place-items-center">
              <img src="/sr2edge-web-logo.svg" alt="SR2Edge Logo" />
            </div>
            <div className="grid h-12 w-28 place-items-center">
              <img src="/sr2edge-text-logo.svg" alt="SR2Edge Logo" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            We promise we’ll get back to you promptly – your gifting needs are
            always on our minds!
          </p>
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="#" className="hover:text-emerald-400">
              Facebook
            </a>
            <a href="#" className="hover:text-emerald-400">
              Twitter
            </a>
            <a href="#" className="hover:text-emerald-400">
              Instagram
            </a>
            <a href="#" className="hover:text-emerald-400">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Contact Us",
              "Delivery Policy",
              "FAQ’s",
              "Privacy Policy",
              "Return Policy",
            ].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-emerald-400">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            {["Shop", "Blog News", "New Arrivals", "Keywords", "Sitemap"].map(
              (l) => (
                <li key={l}>
                  <a href="#" className="hover:text-emerald-400">
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Need Help</h3>
          <ul className="space-y-3 text-sm">
            <li> (+91)-044 - 42658359</li>
            <li> Mon – Fri: 9:00am - 20:00pm</li>
            <li> Sat: 11:00 – 15:00</li>
            <li> info@sr2edge.com</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-sm text-center text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} SR2 Edge. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
