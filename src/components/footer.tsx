import Link from "next/link";
import { Facebook, Instagram,Linkedin,Mail,MapPin,Phone,X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 max-w-full">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-5">
              <span className="text-3xl font-bold text-nexapurple-700"> NexaVerse </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md text-lg">
              The decentralized freelance platform powered by blockchain
              technology. Connect with global talent, secure payments through
              smart contracts, and earn rewards with NexaPoints.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">
                <X className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500" >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500" >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Platform</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/talent" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Find Talent </Link>
              </li>
              <li>
                <Link  href="/dashboard"  className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500" >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/connect-wallet" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500" >
                  Connect Wallet
                </Link>
              </li>
              <li>
                <Link href="/nexapoints" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500" >
                  NexaPoints
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"> Resources</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/help-center"className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Help Center</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Blog </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Tutorials</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">FAQ</Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Community </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"> Company </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500"> About Us</Link>
              </li>
              <li>
                <Link  href="/careers" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Careers</Link>
              </li>
              <li>
                <Link  href="/contact" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Terms of Service</Link>
              </li>
              <li>
                <Link  href="/privacy" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white"> Subscribe to our newsletter </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get the latest news, updates and job opportunities delivered to
                your inbox.
              </p>
              <div className="flex max-w-md gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-white dark:bg-gray-800"/>
                <Button className="bg-nexapurple-700 hover:bg-nexapurple-800">Subscribe</Button>
              </div>
            </div>
            <div className="space-y-4 lg:text-right">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white lg:text-right"> Contact Information </h3>
              <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">123 Blockchain Street, Crypto City, CC 12345</span>
              </div>
              <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">support@nexaverse.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} NexaWork. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500 text-sm">Terms</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500 text-sm">Privacy</Link>
            <Link href="/cookies" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500 text-sm">Cookies</Link>
            <Link href="/sitemap" className="text-gray-600 hover:text-nexapurple-700 dark:text-gray-400 dark:hover:text-nexapurple-500 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
