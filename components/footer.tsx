export function Footer() {
  return (
    <footer className="bg-primary text-background pt-14 pb-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-2">
          <div className="mb-4 w-6 h-6 bg-background rounded-full"></div>
          <h3 className="font-bold mb-2 text-sm">Brand Name</h3>
        </div>
        <p className="text-sm text-background/80 mb-8">
          Shop internationally, receive your items in Nigeria. Simply, safely,
          and transparently.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="#how-it-works"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            How it Works
          </a>
          <a
            href="#features"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            Features
          </a>
          <a
            href="#faqs"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            FAQs
          </a>
          <a
            href="#support"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            Contact Us
          </a>
          <a
            href="#track"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            Track Order
          </a>
          <a
            href="#terms"
            className="px-4 py-2 rounded-full border border-background/30 hover:bg-background/10"
          >
            Terms of Service
          </a>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 text-center text-xs">
        <p>&copy; 2025 YourPlatformName. All rights reserved.</p>
      </div>
    </footer>
  );
}
