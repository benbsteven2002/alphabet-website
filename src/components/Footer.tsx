import Link from "next/link";

const footerNav = {
  agency: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  learn: [
    { label: "SOS Club", href: "https://members.alphabetsocial.co.za", external: true },
    { label: "InstaKit", href: "https://members.alphabetsocial.co.za", external: true },
    { label: "Catalogue to Content", href: "https://members.alphabetsocial.co.za", external: true },
    { label: "Blog", href: "/blog" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com/alphabetsocial", external: true },
    { label: "Facebook", href: "https://facebook.com/alphabetsocial", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/company/alphabetsocial", external: true },
    { label: "TikTok", href: "https://tiktok.com/@alphabetsocial", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-indigo text-cotton">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight text-cotton">
              alphabet.
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cotton/70">
              Premium, results-driven marketing for established e-commerce brands.
              Based in South Africa, scaling globally.
            </p>
          </div>

          {/* Agency links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cotton/50">
              Agency
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.agency.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cotton/70 transition-colors hover:text-cotton"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cotton/50">
              Learn
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.learn.map((item) =>
                item.external ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cotton/70 transition-colors hover:text-cotton"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-cotton/70 transition-colors hover:text-cotton"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cotton/50">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cotton/70 transition-colors hover:text-cotton"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cotton/10 pt-8 sm:flex-row">
          <p className="text-xs text-cotton/50">
            &copy; {new Date().getFullYear()} Alphabet Social. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-cotton/50 transition-colors hover:text-cotton">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-cotton/50 transition-colors hover:text-cotton">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
