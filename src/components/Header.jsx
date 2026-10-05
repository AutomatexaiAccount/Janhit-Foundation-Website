"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <div className={styles.topbarContact}>
            <a href="mailto:janhitfoundation@gmail.com">
              <span>📧 janhitfoundation@gmail.com</span>
            </a>
            <a href="tel:0121-4302021">
              <span>📞 0121-4302021</span>
            </a>
          </div>
          <div className={styles.topbarMessage}>
            <p>🤝 Are you ready to help them? Lets become a volunteer!</p>
          </div>
          <div className={styles.topbarSocial}>
            {/* Social links can be added here */}
          </div>
        </div>
      </div>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img src="/janhit-logo.jpeg" alt="Janhit Foundation Logo" height="60" style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)', fontFamily: 'var(--font-nunito)' }}>Janhit Foundation</span>
            </Link>
          </div>
          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div className={styles.overlay}></div>
          )}
          
          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
            <div className={styles.mobileNavHeader} style={{ position: 'relative', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/janhit-logo.jpeg" alt="Janhit Foundation Logo" height="40" style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
                <span style={{ fontSize: '19px', fontWeight: 'bold', color: 'var(--primary-color)', fontFamily: 'var(--font-nunito)', paddingTop: '5px' }}>Janhit Foundation</span>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)} style={{ position: 'absolute', right: '20px' }}>×</button>
            </div>
            
            <div className={styles.mobileHelpline}>
              <span className={styles.statusDot}></span> 24/7 Helpline: <strong>+91 4302021</strong>
            </div>

            <ul className={styles.navLinks}>
              <li><Link href="/">Home <span>›</span></Link></li>
              
              <li className={`${styles.hasDropdown} ${openSubmenu === 'about' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('about')}>
                  <span>About Us</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/about-us/who-we-are">Who We Are?</Link></li>
                  <li><Link href="/about-us/founder">Founder</Link></li>
                  <li><Link href="/about-us/director">Director</Link></li>
                  <li><Link href="/about-us/history">History</Link></li>
                  <li><Link href="/about-us/location">Location</Link></li>
                  <li><Link href="/about-us/vacancies">Vacancies</Link></li>
                </ul>
              </li>
              
              <li className={`${styles.hasDropdown} ${openSubmenu === 'programs' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('programs')}>
                  <span>Programs</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/programs/sustainable-agriculture">Sustainable Agriculture</Link></li>
                  <li><Link href="/programs/women-rights">Women Rights Protection</Link></li>
                  <li><Link href="/programs/water-conservation">Water Conservation & Awareness</Link></li>
                  <li><Link href="/programs/child-rights">Child Rights Protection</Link></li>
                  <li><Link href="/programs/environment">Environment</Link></li>
                  <li><Link href="/programs/gyan-ashram">Gyan Ashram</Link></li>
                  <li><Link href="/programs/give-as-you-earn">Give as you earn</Link></li>
                  <li><Link href="/programs/my-clean-meerut">My Clean Meerut</Link></li>
                </ul>
              </li>

              <li className={`${styles.hasDropdown} ${openSubmenu === 'achievements' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('achievements')}>
                  <span>Achievements</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/achievements/awards">Awards</Link></li>
                  <li><Link href="/achievements/organic-aaharam">Organic Aaharam</Link></li>
                  <li><Link href="/achievements/agriculture-innovation">Agriculture Innovation</Link></li>
                  <li><Link href="/achievements/rainwater-harvesting">Rainwater Harvesting</Link></li>
                </ul>
              </li>

              <li><Link href="/events">Events <span>›</span></Link></li>
              <li><Link href="/partners">Partners <span>›</span></Link></li>
              
              <li className={`${styles.hasDropdown} ${openSubmenu === 'resources' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('resources')}>
                  <span>Resources</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/resources/news-media">News & Media</Link></li>
                  <li><Link href="/resources/newsletter">Newsletter</Link></li>
                  <li><Link href="/resources/downloads">Downloads</Link></li>
                  <li><Link href="/resources/gallery">Gallery</Link></li>
                </ul>
              </li>

              <li><Link href="/janhit-gallery">Janhit Gallery <span>›</span></Link></li>
              <li><Link href="/get-involved">Get Involved <span>›</span></Link></li>
              <li><Link href="/contact-us">Contact Us <span>›</span></Link></li>
            </ul>
          </nav>
          <div className={styles.actions}>
             <div className={styles.callUs}>
                <span>Call Us Now</span>
                <a href="tel:0121-4302021"><strong>0121-4302021</strong></a>
             </div>
          </div>
          <button className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </header>
    </>
  );
}
