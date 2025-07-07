import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* FEELDX Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">FEELDX</h3>
            <p className="text-sm">
              Transforming infrastructure through innovative engineering
              solutions and technology integration.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Construction Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Technology Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sustainability Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Project Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>
                123 Innovation Drive
                <br />
                Suite 500
                <br />
                San Francisco, CA 94103
              </p>
              <p>+1 (555) 123-4567</p>
              <p>
                <a
                  href="mailto:info@feeldx.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@feeldx.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} FEELDX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
