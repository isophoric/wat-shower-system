import { motion } from "motion/react";
import { 
  ChevronRight, 
  Menu, 
  X, 
  Droplets, 
  Accessibility, 
  ShieldCheck, 
  Recycle,
  Wrench
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      {/* Sony-style Header - Using Brand Accent */}
      <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${scrolled ? 'bg-brand-accent/95 py-2' : 'bg-brand-accent py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between text-brand-bg">
          <div className="flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="font-serif text-sm tracking-[0.2em] font-medium uppercase hover:opacity-80 transition-opacity">
              Wilson Adaptive Technologies
            </button>
            <div className="hidden lg:flex items-center gap-6">
              {['Home', 'Features', 'Materials', 'About'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[11px] font-semibold tracking-wider text-brand-bg/70 hover:text-brand-bg uppercase transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-brand-accent z-[99] flex flex-col p-8 gap-8 lg:hidden">
            {['Home', 'Features', 'Materials', 'About'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-lg font-medium text-brand-bg text-left uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section - Sony Immersion Style with Brand Colors */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-accent pt-[60px]">
          {/* Desktop/Mobile Background Handling Using input_file references */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source media="(max-width: 768px)" srcSet="input_file_3.png" />
              <img 
                src="input_file_2.png" 
                alt="WAT Shower Background" 
                className="w-full h-full object-cover opacity-70 contrast-125"
                referrerPolicy="no-referrer"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/80 via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 to-transparent lg:hidden" />
          </div>

          <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-xl text-center lg:text-left"
            >
              <motion.p variants={fadeIn} className="text-xs lg:text-[10px] font-bold tracking-[0.3em] text-brand-bg/60 mb-4 uppercase">
                WAT Adaptive Shower System
              </motion.p>
              <motion.h1 variants={fadeIn} className="text-3xl md:text-5xl lg:text-6xl font-semibold text-brand-bg leading-[1.05] mb-6">
                Open up a new world of digital dignity
              </motion.h1>
              <motion.p variants={fadeIn} className="text-sm md:text-base text-brand-bg/80 font-light leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Revolutionary accessibility meets modular innovation. Designed for individuals with mobility challenges to experience ultimate independence without compromise.
              </motion.p>
              <motion.button 
                variants={fadeIn}
                onClick={() => scrollTo('product')}
                className="group relative px-10 py-3 border border-brand-bg/40 text-brand-bg text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-bg hover:text-brand-accent transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Product Focus Section - Using brand-bg */}
        <section id="product" className="py-24 bg-brand-bg">
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="input_file_4.png" 
                alt="WAT Shower Unit" 
                className="max-w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-accent uppercase">WAT Shower System</h2>
                <p className="text-2xl font-light text-brand-accent italic">Price: TBD</p>
                <div className="h-px w-24 bg-brand-accent/30" />
              </div>

              <div className="space-y-8 text-brand-accent/80 leading-relaxed max-w-lg">
                <p>
                  The WAT shower greets you with a smooth, gently sloping entry that's kind to your feet and stable for walkers or shower chairs. 
                  Once inside, you're surrounded by soothing privacy curtains that empower you with autonomy and comfort.
                </p>
                <p className="font-medium text-brand-accent">
                  "Dignity by Design" is more than a philosophy—it's woven into every weld and curtain fold of our modular sanctuary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Accessibility size={20} />, text: "Roll-in Modular Access" },
                  { icon: <ShieldCheck size={20} />, text: "Anti-Scald Sensors" },
                  { icon: <Droplets size={20} />, text: "Quick 10min Setup" },
                  { icon: <Wrench size={20} />, text: "Tool-free Assembly" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-brand-accent/60">
                    <span className="text-brand-accent">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-brand-bg/50">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-xs font-bold tracking-[0.4em] text-brand-accent uppercase">Technical Excellence</h3>
              <p className="font-serif text-3xl lg:text-4xl font-medium text-brand-accent tracking-tight">Adaptive Precision</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-accent/10 border border-brand-accent/10 overflow-hidden">
              {[
                { 
                  title: "Modular Structure", 
                  desc: "Three robust support pillars constructed from corrosion-resistant aluminum serve as mounting points for assistive devices.",
                  icon: <Wrench />
                },
                { 
                  title: "Zero-Threshold", 
                  desc: "Low-profile, non-slip entry platform with integrated drainage channels eliminates trip hazards.",
                  icon: <Accessibility />
                },
                { 
                  title: "Dignity Enclosure", 
                  desc: "High-impact waterproof side panels paired with movable curtains for privacy and caregiver accessibility.",
                  icon: <ShieldCheck />
                },
                { 
                  title: "Smart Monitoring", 
                  desc: "Integrated temperature sensors and displays ensure a safe environment for every routine.",
                  icon: <Droplets />
                },
                { 
                  title: "Ergonomic Add-ons", 
                  desc: "Customizable grab bars and wall-mounted folding seats designed to support up to 350lbs.",
                  icon: <Accessibility />
                },
                { 
                  title: "Portable Link", 
                  desc: "Quick-connect system allows for setup within 80 feet of a standard faucet/drain configuration.",
                  icon: <Wrench />
                }
              ].map((feat, i) => (
                <div key={i} className="bg-brand-bg p-12 hover:bg-brand-accent/5 transition-colors group">
                  <div className="text-brand-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm font-bold tracking-[0.1em] text-brand-accent uppercase mb-4">{feat.title}</h4>
                  <p className="text-sm font-light text-brand-accent/70 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Table Section */}
        <section id="materials" className="py-24 bg-brand-bg">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.4em] text-brand-accent uppercase">Material Quality</h3>
                <p className="font-serif text-3xl font-medium text-brand-accent tracking-tight">Built to Last. Recyclable by Design.</p>
              </div>
              <p className="text-sm text-brand-accent/60 max-w-sm font-light">
                Every component is selected for its circular lifespan, ensuring durability for you and health for our planet.
              </p>
            </div>

            <div className="bg-brand-bg border border-brand-accent/20 rounded-sm shadow-sm overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-brand-accent/10">
                    <th className="px-8 py-6 text-xs font-bold tracking-widest uppercase text-brand-accent">Part</th>
                    <th className="px-8 py-6 text-xs font-bold tracking-widest uppercase text-brand-accent">Material</th>
                    <th className="px-8 py-6 text-xs font-bold tracking-widest uppercase text-brand-accent text-right">Sustainability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-accent/10 text-xs font-medium text-brand-accent/70">
                  {[
                    { part: "Walls", mat: "HDPE", reason: "♻️ 100% Recyclable, mold-resistant" },
                    { part: "Tub & Ramp", mat: "ABS Plastic", reason: "♻️ Recyclable, high-impact safety" },
                    { part: "Reservoir", mat: "PP", reason: "♻️ Recyclable, heat-stable" },
                    { part: "Structure (Poles)", mat: "Anodized Aluminum", reason: "♻️ Recyclable, rust-proof strength" },
                    { part: "Curtains", mat: "Recycled Polyester", reason: "♻️ Post-consumer waste fabric" },
                    { part: "Gaskets", mat: "Silicone / EPDM", reason: "🛡️ Durable leakage prevention" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-brand-accent/5 transition-colors">
                      <td className="px-8 py-4 font-bold text-brand-accent">{row.part}</td>
                      <td className="px-8 py-4">{row.mat}</td>
                      <td className="px-8 py-4 text-right italic">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* About & Mission Section */}
        <section id="about" className="py-24 bg-brand-bg">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 mb-24">
              <div className="space-y-8">
                <h3 className="text-xs font-bold tracking-[0.4em] text-brand-accent uppercase">Our Mission</h3>
                <p className="font-serif text-3xl font-medium text-brand-accent leading-tight">
                  "Dignity by Design" is our driving force.
                </p>
                <div className="space-y-6 text-base font-light text-brand-accent/70 leading-relaxed">
                  <p>
                    Wilson Adaptive Technologies (WAT) is a purpose-driven start-up committed to fostering independence, dignity, and an elevated quality of life. 
                    We transcend the conventional boundaries of assistive technology, pioneering groundbreaking quality and affordability.
                  </p>
                  <p>
                    Based in Detroit, we seamlessly integrate assistive devices into daily living environments, addressing bathroom hazards with empathy and engineering expertise.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden bg-brand-accent/10">
                <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-700" />
                <img 
                  src="https://images.unsplash.com/photo-1542312678-009139abb7b4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Innovation Lab" 
                  className="w-full h-full object-cover grayscale-[40%]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-12">
              <div className="h-px bg-brand-accent/10" />
              <div className="text-center">
                <h3 className="text-xs font-bold tracking-[0.4em] text-brand-accent uppercase mb-12 text-center">Executive Team</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {[
                  { 
                    name: "Late Ron Wilson", 
                    role: "Founder", 
                    img: "input_file_5.png",
                    bio: "A technical visionary who envisioned modular showers that could be set up anywhere to ensure safety and accessibility."
                  },
                  { 
                    name: "Wendy Wilson", 
                    role: "CEO", 
                    img: "input_file_6.png",
                    bio: "A committed steward of Ron's dream, fostering partnerships with research institutions to serve the local Detroit community and beyond."
                  },
                  { 
                    name: "Dr. Jared Grogan", 
                    role: "CRO", 
                    img: "input_file_7.png",
                    bio: "Our Managing Partner from Wayne State University, bridging academic research with practical applications to evolve WAT prototypes."
                  }
                ].map((person, i) => (
                  <div key={i} className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-brand-accent/20 grayscale hover:grayscale-0 transition-all duration-700">
                      <img 
                        src={person.img} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold tracking-widest text-brand-accent uppercase">{person.name}</h4>
                      <p className="text-[10px] font-bold text-brand-accent/60 uppercase tracking-widest">{person.role}</p>
                      <p className="text-xs font-light text-brand-accent/60 max-w-[200px] mx-auto leading-relaxed italic">
                        "{person.bio}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Partnership CTA */}
        <section className="bg-brand-accent py-20 px-6 text-brand-bg">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">Expand our impact globally.</h2>
              <p className="text-brand-bg/40 text-sm font-light uppercase tracking-[0.2em]">Catalyzing a shift in adaptive technology.</p>
            </div>
            <button className="px-8 py-3 bg-brand-bg text-brand-accent text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
              Contact Partnership
            </button>
          </div>
        </section>
      </main>

      {/* Sony-style Footer - Using Brand Accent */}
      <footer className="bg-brand-accent border-t border-brand-bg/5 py-16 px-6 text-brand-bg">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2">
            <h5 className="font-serif text-sm tracking-[0.2em] font-medium uppercase mb-8">WAT</h5>
            <p className="text-xs text-brand-bg/40 leading-relaxed max-w-xs font-light">
              Pioneering modular in-home hygiene systems. Proudly designed and researched in Detroit, Michigan.
            </p>
          </div>
          <div>
            <h6 className="text-[10px] font-bold tracking-[0.2em] text-brand-bg/80 uppercase mb-6">Product</h6>
            <div className="flex flex-col gap-4 text-xs font-medium text-brand-bg/40">
              <button onClick={() => scrollTo('hero')} className="text-left hover:text-brand-bg transition-colors">Overview</button>
              <button onClick={() => scrollTo('features')} className="text-left hover:text-brand-bg transition-colors">Technology</button>
              <button onClick={() => scrollTo('materials')} className="text-left hover:text-brand-bg transition-colors">Sustainability</button>
            </div>
          </div>
          <div>
            <h6 className="text-[10px] font-bold tracking-[0.2em] text-brand-bg/80 uppercase mb-6">Company</h6>
            <div className="flex flex-col gap-4 text-xs font-medium text-brand-bg/40 text-left">
              <button onClick={() => scrollTo('about')}  className="text-left hover:text-brand-bg transition-colors">About Us</button>
              <a href="#" className="hover:text-brand-bg transition-colors">News</a>
              <a href="#" className="hover:text-brand-bg transition-colors">Careers</a>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h6 className="text-[10px] font-bold tracking-[0.2em] text-brand-bg/80 uppercase mb-6">Connect</h6>
            <div className="flex flex-col gap-4 text-xs font-medium text-brand-bg/40">
              <a href="#" className="hover:text-brand-bg transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-bg transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-bg transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-brand-bg/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-bg/20 font-bold">
          <p>© 2026 Wilson Adaptive Technologies</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-bg/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-bg/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
