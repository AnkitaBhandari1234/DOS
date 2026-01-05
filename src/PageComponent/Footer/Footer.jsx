import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(#26224A,#1D1A34)] text-[#C8C6E3] pt-20">
      <div className="px-14 grid grid-cols-4 gap-12 pb-16">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Clarity
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering students with job-ready IT skills through hands-on
            training and expert mentorship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
          <ul className="space-y-3 text-sm">
            <li>MERN Stack Development</li>
            <li>React & Next.js</li>
            <li>Python & Data Science</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-[#524DD3]/20 flex items-center justify-center hover:bg-[#524DD3] transition-all">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#524DD3]/20 flex items-center justify-center hover:bg-[#524DD3] transition-all">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#524DD3]/20 flex items-center justify-center hover:bg-[#524DD3] transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Clarity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
