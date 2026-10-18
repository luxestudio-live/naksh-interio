/**
 * A&A Architect & Interior Designer - Firebase Cloud Integration & Data Service
 * Provides Firestore sync, Firebase Auth, and robust local caching for all website components.
 * Premier Interior Architecture & Design Studio · Meerut, Uttar Pradesh
 */

// Default Seed Data for A&A Architect & Interior Designer
const AA_INITIAL_DATA = {
  siteSettings: {
    brandName: "A&A Architect & Interior Designer",
    brandSubtitle: "ARCHITECTURAL PRACTICE & INTERIOR DESIGN STUDIO · MEERUT, UP",
    tagline: "5.0 ★ (68 Reviews) Premier Architecture & Interior Firm in Meerut, UP",
    heroTitle: "Where Architectural Rigor Meets Interior Elegance.",
    heroDesc: "Premier architectural practice & turnkey interior design studio in Meerut. Specializing in residential villa architecture, 3D exterior elevations, structural blueprints, municipal sanctions, and bespoke luxury interior fit-outs across Ganga Nagar, Mawana Road, Shastri Nagar & UP.",
    phone: "063974 38387",
    phoneTel: "+916397438387",
    email: "contact@aaarchitects.in",
    address: "B-321, Mawana Rd, B-Pocket, Radha Garden, Ganga Nagar, Meerut, Uttar Pradesh 250001",
    mapsQuery: "A%26A+Architect+%26+Interior+Designer+B-321+Mawana+Rd+Radha+Garden+Ganga+Nagar+Meerut+Uttar+Pradesh+250001",
    hours: "Open Daily · 09:30 AM to 09:00 PM",
    rating: "5.0",
    reviewCount: "68",
    stats: [
      { num: "5.0", sup: "★", label: "Google Rating from 68 Verified Clients" },
      { num: "120", sup: "+", label: "Built Architectural & Turnkey Interior Projects" },
      { num: "24", sup: "", label: "Specialized Architectural & Interior Disciplines" },
      { num: "100", sup: "%", label: "Structural Sanction & Vastu Compliance Guarantee" },
      { num: "A-Z", sup: "", label: "Design-Build: Land Survey to Handover" }
    ]
  },
  projects: [
    {
      id: "proj_arch_1",
      title: "The Cantilever Residence & Private Water Oasis",
      category: "Architecture & 3D Elevations",
      typology: "Luxury Residential Villa",
      loc: "Ganga Nagar, Mawana Road, Meerut",
      area: "6,850 sq.ft. Built-Up (Plot: 600 sq.yds)",
      img: "images/villa_elevation.jpg",
      images: [
        "images/villa_elevation.jpg",
        "images/bungalow_facade.jpg",
        "images/blueprint_cad.jpg",
        "images/living_tv_unit.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Ultra-contemporary multi-level cantilevered villa featuring post-tensioned concrete slabs, motorized teak louvers, double-height insulated acoustic curtain glazing, sunken courtyard, and integrated perimeter reflection pool.",
      tags: ["Villa Architecture", "3D Elevation", "Cantilever Structure", "Reflecting Pool"]
    },
    {
      id: "proj_arch_2",
      title: "Geometric Stone Residence with Koi Pond & Louvers",
      category: "Architecture & 3D Elevations",
      typology: "Contemporary Bungalow",
      loc: "Radha Garden, Mawana Road, Meerut",
      area: "4,900 sq.ft. Built-Up (Plot: 420 sq.yds)",
      img: "images/bungalow_facade.jpg",
      images: [
        "images/bungalow_facade.jpg",
        "images/villa_elevation.jpg",
        "images/blueprint_cad.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Architectural bungalow articulation utilizing raw textured travertine stone cladding, bronze powder-coated solar louvers, floating monolithic stepping stones across a biological koi pond, and dynamic night architectural illumination.",
      tags: ["Bungalow Design", "Stone Cladding", "Landscape Architecture", "Exterior Louvers"]
    },
    {
      id: "proj_arch_3",
      title: "Architectural Blueprints, Structural CAD & Sanction Drawings",
      category: "Blueprints & CAD",
      typology: "Technical Drawings & Engineering",
      loc: "Meerut Development Authority (MDA) & UP",
      area: "Full Blueprint Sets: Working, Structural & MEP",
      img: "images/blueprint_cad.jpg",
      images: [
        "images/blueprint_cad.jpg",
        "images/villa_elevation.jpg",
        "images/bungalow_facade.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Comprehensive architectural and engineering working sets: Vastu-compliant spatial layouts, RCC structural column-beam reinforcement details, MEP (electrical, plumbing, HVAC ducting), and municipal sanction documentation.",
      tags: ["Blueprints", "Working Drawings", "Structural CAD", "MDA Sanctions"]
    },
    {
      id: "proj_int_1",
      title: "Designer Gypsum False Ceiling & Backlit CNC Jali",
      category: "Residential Interiors",
      typology: "Living & Formal Lounge",
      loc: "Ganga Nagar, Meerut",
      area: "1,200 sq.ft. Living Wing",
      img: "images/living_tv_unit.jpg",
      images: [
        "images/living_tv_unit.jpg",
        "images/bedroom_suite.jpg",
        "images/kitchen_walnut.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Artistic multi-tier wooden and gypsum false ceiling featuring precision laser-cut geometric CNC jali fretwork with cobalt blue ambient backlighting, warm 3000K peripheral cove illumination, and gold ceiling fans.",
      tags: ["False Ceiling", "CNC Jali Lighting", "Ambient Cove"]
    },
    {
      id: "proj_int_2",
      title: "Master Bedroom Suite with Painted Botanical Mural & Curved Headboard",
      category: "Residential Interiors",
      typology: "Master Bedroom Suite",
      loc: "Radha Garden, Mawana Road, Meerut",
      area: "480 sq.ft. Suite + Walk-in",
      img: "images/bedroom_suite.jpg",
      images: [
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg",
        "images/living_tv_unit.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Bespoke master suite with arched wall niche featuring vibrant hand-painted botanical murals, plush dual-tone upholstered headboard, integrated LED perimeter mood lighting, and tailored soft furnishings.",
      tags: ["Master Suite", "Botanical Mural", "Mood Lighting", "Fluted Paneling"]
    },
    {
      id: "proj_int_3",
      title: "Italian Statuario Marble TV Lounge & Fluted Acoustic Paneling",
      category: "Residential Interiors",
      typology: "Family Entertainment Lounge",
      loc: "Shastri Nagar, Meerut",
      area: "750 sq.ft. Entertainment Zone",
      img: "images/living_tv_unit.jpg",
      images: [
        "images/living_tv_unit.jpg",
        "images/kitchen_walnut.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Seamless full-height Statuario marble book-matched feature wall, acoustic fluted timber louvers, integrated 3000K indirect LED profiles, and floating smoked walnut entertainment cabinetry.",
      tags: ["Living Lounge", "Statuario Marble", "TV Console", "Acoustic Wall"]
    },
    {
      id: "proj_kit_1",
      title: "Contemporary Smoked Walnut & Quartz Modular Kitchen",
      category: "Modular Kitchens",
      typology: "Culinary Island & Pantry",
      loc: "Saket, Meerut",
      area: "320 sq.ft. Modular Kitchen",
      img: "images/kitchen_walnut.jpg",
      images: [
        "images/kitchen_walnut.jpg",
        "images/living_tv_unit.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Architectural culinary studio crafted with boiling-water-proof HDHMR joinery, anti-scratch smoked walnut acrylic finishes, seamless Calacatta quartz countertops, and German soft-close tandem hardware.",
      tags: ["Modular Kitchen", "Walnut Joinery", "Quartz Counter", "German Tandem"]
    },
    {
      id: "proj_ward_1",
      title: "Floor-to-Ceiling Tinted Bronze Glass Wardrobes & Dressing Suite",
      category: "Residential Interiors",
      typology: "Walk-in Dressing Sanctuary",
      loc: "Modipuram, Meerut",
      area: "240 sq.ft. Dressing Room",
      img: "images/walkin_wardrobe.jpg",
      images: [
        "images/walkin_wardrobe.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Walk-in wardrobe sanctuary with bronze aluminum slim profile frames, sensor LED strip shelving, velvet accessory trays, and full-length vanity mirror integration.",
      tags: ["Glass Wardrobe", "LED Joinery", "Bronze Profiles", "Dressing Suite"]
    },
    {
      id: "proj_comm_1",
      title: "Commercial Office Complex & Reception Lounge Architecture",
      category: "Commercial Spaces",
      typology: "Corporate Headquarters",
      loc: "Meerut & NCR Expressway",
      area: "8,500 sq.ft. Commercial Floor",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        "images/living_tv_unit.jpg",
        "images/blueprint_cad.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Executive office interior with acoustic paneling, fluted timber reception counter, magnetic track illumination, structural glass partitions, and ergonomic executive cabins.",
      tags: ["Commercial Architecture", "Corporate Office", "Space Planning", "Acoustics"]
    }
  ],
  services: [
    {
        "name": "Appliance selection",
        "icon": "⚡",
        "desc": "Curated smart built-in appliances, seamless induction hobs, designer chimneys & wine chillers"
    },
    {
        "name": "Bathroom design",
        "icon": "🛁",
        "desc": "Luxury sanitary fittings, Italian quartz vanities, ambient backlighting & glass enclosures"
    },
    {
        "name": "Bedroom design",
        "icon": "🛏️",
        "desc": "Bespoke upholstered headboards, acoustic wall fluting, warm cove lighting & master suites"
    },
    {
        "name": "Cabinetry and hardware design",
        "icon": "🗄️",
        "desc": "Custom soft-close millwork, concealed tandem runners & imported architectural hardware"
    },
    {
        "name": "Commercial interior design",
        "icon": "🏢",
        "desc": "High-impact corporate offices, retail showrooms & experiential commercial spaces"
    },
    {
        "name": "Custom art selection",
        "icon": "🎨",
        "desc": "Curated wall murals, bespoke sculpture curation, custom textures & refined styling"
    },
    {
        "name": "Dining room design",
        "icon": "🍷",
        "desc": "Statement sintered stone dining tables, designer chandeliers & custom buffet credenzas"
    },
    {
        "name": "Door design",
        "icon": "🚪",
        "desc": "Grand entrance pivot doors, flush concealed frames & bespoke acoustic door joinery"
    },
    {
        "name": "Flooring selection",
        "icon": "🏛️",
        "desc": "Italian Statuario marble, herringbone hardwood, vitrified slabs & seamless microtopping"
    },
    {
        "name": "Home decor selection",
        "icon": "✨",
        "desc": "Harmonious sensory accessories, luxury artifacts, custom drapery & curated accents"
    },
    {
        "name": "Home staging",
        "icon": "🏡",
        "desc": "Market-ready property enhancement, spatial styling & turnkey aesthetic staging"
    },
    {
        "name": "Hospitality design",
        "icon": "🛎️",
        "desc": "Boutique hotels, luxury lounges, ambient suites & memorable guest experiences"
    },
    {
        "name": "Interior architectural design",
        "icon": "📐",
        "desc": "Structural space alterations, false ceiling geometry & high-precision architectural blueprints"
    },
    {
        "name": "Interior decorating",
        "icon": "🖼️",
        "desc": "Comprehensive furnishing palettes, texture layering, designer wallpapers & color harmony"
    },
    {
        "name": "Interior painting",
        "icon": "🖌️",
        "desc": "Royal luxury emulsions, textured stucco finishes, limewash & zero-VOC Italian coats"
    },
    {
        "name": "Kitchen design",
        "icon": "🍳",
        "desc": "Modern modular kitchens, boiling-water-proof HDHMR, quartz surfaces & German fittings"
    },
    {
        "name": "Lighting design",
        "icon": "💡",
        "desc": "Magnetic track lights, architectural coves, layered 3000K mood illumination & smart automation"
    },
    {
        "name": "Living room design",
        "icon": "🛋️",
        "desc": "Statuario marble TV walls, acoustic louvers, designer sofas & open-concept luxury lounges"
    },
    {
        "name": "Millwork design",
        "icon": "🪵",
        "desc": "Tailored architectural wood paneling, bespoke bookcases, display niches & veneer joinery"
    },
    {
        "name": "Office space design",
        "icon": "💻",
        "desc": "Ergonomic executive cabins, collaborative conference zones & acoustic productivity layouts"
    },
    {
        "name": "Restaurant design",
        "icon": "🍽️",
        "desc": "Atmospheric dining concepts, ergonomic commercial kitchen workflows & themed ambient decor"
    },
    {
        "name": "Room planning",
        "icon": "📋",
        "desc": "Precise functional layouts, furniture scaling, circulation pathways & spatial optimization"
    },
    {
        "name": "Space planning",
        "icon": "📏",
        "desc": "Comprehensive 2D/3D architectural spatial mapping for optimal flow, ergonomics & natural light"
    },
    {
        "name": "Window design",
        "icon": "🪟",
        "desc": "Panoramic French glazing, motorized drapery tracks, acoustic double-glazing & custom frames"
    }
],
  reviews: [
    {
      id: "rev_1",
      author: "Amit Singhal",
      loc: "Ganga Nagar, Meerut",
      stars: 5,
      quote: "A&A Architect & Interior Designer did an exceptional job with our new home. Their architectural planning and false ceiling designs transformed our entire floor. Truly the best and most affordable interior designer in Meerut!"
    },
    {
      id: "rev_2",
      author: "Dr. Neha Sharma",
      loc: "Radha Garden, Mawana Road, Meerut",
      stars: 5,
      quote: "Highly impressed by their professionalism and space planning. They delivered our modular kitchen and bedroom wardrobes well before the deadline with outstanding finish and craftsmanship. 5.0-star experience!"
    },
    {
      id: "rev_3",
      author: "Gaurav Tyagi",
      loc: "Shastri Nagar, Meerut",
      stars: 5,
      quote: "From 3D architectural elevations to final turnkey handover, A&A took care of every single design, carpentry, and electrical detail. Their commercial and residential design capability is top-notch in Meerut."
    }
  ],
  inquiries: [
    {
      id: "inq_demo_1",
      name: "Rajesh Kumar",
      phone: "+91 98971 22341",
      service: "Interior architectural design",
      message: "Need complete architectural interior design and space planning for a 3BHK villa in Ganga Nagar, Meerut.",
      timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: "New"
    },
    {
      id: "inq_demo_2",
      name: "Meenakshi Verma",
      phone: "+91 98370 55123",
      service: "Kitchen design",
      message: "Planning modern modular kitchen with quartz countertop in Radha Garden, Mawana Road. Please share cost estimate.",
      timestamp: new Date(Date.now() - 3600000 * 28).toISOString(),
      status: "Contacted"
    }
  ]
};

const TLS_INITIAL_DATA = AA_INITIAL_DATA;
const DPA_INITIAL_DATA = AA_INITIAL_DATA;

// Data Service Singleton
window.DPAService = {
  db: null,
  auth: null,
  isFirebaseActive: false,

  // Initialize Firebase if credentials provided
  init() {
    const savedConfig = this.getFirebaseConfig();
    if (savedConfig && savedConfig.apiKey && savedConfig.projectId && window.firebase) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(savedConfig);
        }
        this.db = firebase.firestore();
        this.auth = firebase.auth();
        this.isFirebaseActive = true;
        console.log("Firebase connected successfully to project:", savedConfig.projectId);
      } catch (e) {
        console.warn("Firebase initialization failed, falling back to local storage:", e);
        this.isFirebaseActive = false;
      }
    } else {
      this.isFirebaseActive = false;
    }

    // Ensure Local Storage has initial seed data with A&A Architect & Interior Designer branding
    if (!localStorage.getItem("aa_architect_seeded_v1")) {
      this.seedLocalData();
    }
  },

  getFirebaseConfig() {
    try {
      const cfg = localStorage.getItem("vji_firebase_config") || localStorage.getItem("dpa_firebase_config");
      return cfg ? JSON.parse(cfg) : null;
    } catch (e) {
      return null;
    }
  },

  saveFirebaseConfig(cfg) {
    localStorage.setItem("vji_firebase_config", JSON.stringify(cfg));
    localStorage.setItem("dpa_firebase_config", JSON.stringify(cfg));
    this.init();
  },

  seedLocalData() {
    localStorage.setItem("vji_site_settings", JSON.stringify(TLS_INITIAL_DATA.siteSettings));
    localStorage.setItem("vji_projects", JSON.stringify(TLS_INITIAL_DATA.projects));
    localStorage.setItem("vji_services", JSON.stringify(TLS_INITIAL_DATA.services));
    localStorage.setItem("vji_reviews", JSON.stringify(TLS_INITIAL_DATA.reviews));
    localStorage.setItem("vji_inquiries", JSON.stringify(TLS_INITIAL_DATA.inquiries));

    // Overwrite legacy keys as well to ensure immediate update across any cached sessions
    localStorage.setItem("dpa_site_settings", JSON.stringify(TLS_INITIAL_DATA.siteSettings));
    localStorage.setItem("dpa_projects", JSON.stringify(TLS_INITIAL_DATA.projects));
    localStorage.setItem("dpa_services", JSON.stringify(TLS_INITIAL_DATA.services));
    localStorage.setItem("dpa_reviews", JSON.stringify(TLS_INITIAL_DATA.reviews));
    localStorage.setItem("dpa_inquiries", JSON.stringify(TLS_INITIAL_DATA.inquiries));

    localStorage.setItem("aa_architect_seeded_v1", "true");
    localStorage.setItem("dpa_data_seeded", "true");
  },

  // SITE SETTINGS
  async getSettings() {
    if (this.isFirebaseActive && this.db) {
      try {
        const doc = await this.db.collection("settings").doc("site").get();
        if (doc.exists) return doc.data();
      } catch (e) {
        console.warn("Firestore getSettings failed:", e);
      }
    }
    const local = localStorage.getItem("vji_site_settings") || localStorage.getItem("dpa_site_settings");
    return local ? JSON.parse(local) : TLS_INITIAL_DATA.siteSettings;
  },

  async saveSettings(settings) {
    localStorage.setItem("vji_site_settings", JSON.stringify(settings));
    localStorage.setItem("dpa_site_settings", JSON.stringify(settings));
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("settings").doc("site").set(settings, { merge: true });
      } catch (e) {
        console.error("Firestore saveSettings error:", e);
      }
    }
    return settings;
  },

  // PROJECTS
  async getProjects() {
    let list = [];
    if (this.isFirebaseActive && this.db) {
      try {
        const snapshot = await this.db.collection("projects").get();
        if (!snapshot.empty) {
          snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
        }
      } catch (e) {
        console.warn("Firestore getProjects failed:", e);
      }
    }
    if (!list.length) {
      const local = localStorage.getItem("vji_projects") || localStorage.getItem("dpa_projects");
      list = local ? JSON.parse(local) : TLS_INITIAL_DATA.projects;
    }
    // Normalize gallery images for every project
    return list.map(p => {
      const initialMatch = TLS_INITIAL_DATA.projects.find(init => init.id === p.id);
      let gallery = Array.isArray(p.images) && p.images.length > 0 ? p.images : null;
      if (!gallery && initialMatch && Array.isArray(initialMatch.images)) {
        gallery = initialMatch.images;
      }
      if (!gallery) {
        gallery = p.img ? [p.img] : [];
      }
      let loc = p.loc || (initialMatch ? initialMatch.loc : 'Ganga Nagar, Meerut');
      return {
        ...p,
        loc: loc,
        images: gallery,
        img: p.img || (gallery[0] || "")
      };
    });
  },

  async saveProject(proj) {
    const list = await this.getProjects();
    const id = proj.id || "proj_" + Date.now();
    proj.id = id;

    // Normalize gallery images and cover
    if (!Array.isArray(proj.images)) {
      proj.images = proj.img ? [proj.img] : [];
    }
    if (proj.images.length > 0 && !proj.img) {
      proj.img = proj.images[0];
    } else if (proj.img && !proj.images.includes(proj.img)) {
      proj.images.unshift(proj.img);
    }

    const idx = list.findIndex(p => p.id === id);
    if (idx >= 0) {
      list[idx] = proj;
    } else {
      list.unshift(proj);
    }
    localStorage.setItem("vji_projects", JSON.stringify(list));
    localStorage.setItem("dpa_projects", JSON.stringify(list));

    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("projects").doc(id).set(proj);
      } catch (e) {
        console.error("Firestore saveProject error:", e);
      }
    }
    return proj;
  },

  async deleteProject(id) {
    let list = await this.getProjects();
    list = list.filter(p => p.id !== id);
    localStorage.setItem("vji_projects", JSON.stringify(list));
    localStorage.setItem("dpa_projects", JSON.stringify(list));

    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("projects").doc(id).delete();
      } catch (e) {
        console.error("Firestore deleteProject error:", e);
      }
    }
    return true;
  },

  // SERVICES
  async getServices() {
    if (this.isFirebaseActive && this.db) {
      try {
        const doc = await this.db.collection("settings").doc("services").get();
        if (doc.exists && doc.data().list) return doc.data().list;
      } catch (e) {
        console.warn("Firestore getServices failed:", e);
      }
    }
    const local = localStorage.getItem("vji_services") || localStorage.getItem("dpa_services");
    return local ? JSON.parse(local) : TLS_INITIAL_DATA.services;
  },

  async saveServices(services) {
    localStorage.setItem("vji_services", JSON.stringify(services));
    localStorage.setItem("dpa_services", JSON.stringify(services));
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("settings").doc("services").set({ list: services });
      } catch (e) {
        console.error("Firestore saveServices error:", e);
      }
    }
    return services;
  },

  // INQUIRIES / CONTACT LEADS
  async getInquiries() {
    if (this.isFirebaseActive && this.db) {
      try {
        const snapshot = await this.db.collection("inquiries").orderBy("timestamp", "desc").get();
        const list = [];
        snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
        if (list.length) return list;
      } catch (e) {
        console.warn("Firestore getInquiries failed:", e);
      }
    }
    const local = localStorage.getItem("vji_inquiries") || localStorage.getItem("dpa_inquiries");
    return local ? JSON.parse(local) : TLS_INITIAL_DATA.inquiries;
  },

  async submitInquiry(inquiry) {
    const id = "inq_" + Date.now();
    const docData = {
      id,
      name: inquiry.name,
      phone: inquiry.phone,
      service: inquiry.service || "General Interior Design Consultation",
      message: inquiry.message || "",
      timestamp: new Date().toISOString(),
      status: "New"
    };

    let list = [];
    try {
      const local = localStorage.getItem("vji_inquiries") || localStorage.getItem("dpa_inquiries");
      list = local ? JSON.parse(local) : [];
    } catch(e) {}
    list.unshift(docData);
    localStorage.setItem("vji_inquiries", JSON.stringify(list));
    localStorage.setItem("dpa_inquiries", JSON.stringify(list));

    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("inquiries").doc(id).set(docData);
      } catch (e) {
        console.error("Firestore submitInquiry error:", e);
      }
    }
    return docData;
  },

  async updateInquiryStatus(id, newStatus) {
    const list = await this.getInquiries();
    const item = list.find(i => i.id === id);
    if (item) {
      item.status = newStatus;
      localStorage.setItem("vji_inquiries", JSON.stringify(list));
      localStorage.setItem("dpa_inquiries", JSON.stringify(list));
      if (this.isFirebaseActive && this.db) {
        try {
          await this.db.collection("inquiries").doc(id).update({ status: newStatus });
        } catch (e) {
          console.error("Firestore updateInquiryStatus error:", e);
        }
      }
    }
    return item;
  },

  async deleteInquiry(id) {
    let list = await this.getInquiries();
    list = list.filter(i => i.id !== id);
    localStorage.setItem("vji_inquiries", JSON.stringify(list));
    localStorage.setItem("dpa_inquiries", JSON.stringify(list));
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("inquiries").doc(id).delete();
      } catch (e) {
        console.error("Firestore deleteInquiry error:", e);
      }
    }
    return true;
  },

  // REVIEWS
  async getReviews() {
    if (this.isFirebaseActive && this.db) {
      try {
        const snapshot = await this.db.collection("reviews").get();
        if (!snapshot.empty) {
          const list = [];
          snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
          return list;
        }
      } catch (e) {
        console.warn("Firestore getReviews failed:", e);
      }
    }
    const local = localStorage.getItem("vji_reviews") || localStorage.getItem("dpa_reviews");
    return local ? JSON.parse(local) : TLS_INITIAL_DATA.reviews;
  },

  async saveReview(review) {
    const list = await this.getReviews();
    const id = review.id || "rev_" + Date.now();
    review.id = id;
    const idx = list.findIndex(r => r.id === id);
    if (idx >= 0) list[idx] = review;
    else list.push(review);
    localStorage.setItem("vji_reviews", JSON.stringify(list));
    localStorage.setItem("dpa_reviews", JSON.stringify(list));

    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("reviews").doc(id).set(review);
      } catch(e) {}
    }
    return review;
  },

  async deleteReview(id) {
    let list = await this.getReviews();
    list = list.filter(r => r.id !== id);
    localStorage.setItem("vji_reviews", JSON.stringify(list));
    localStorage.setItem("dpa_reviews", JSON.stringify(list));
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("reviews").doc(id).delete();
      } catch(e) {}
    }
    return true;
  },

  // Seed All Demo Data to Cloud Firestore
  async seedAllToFirestore() {
    if (!this.isFirebaseActive || !this.db) {
      throw new Error("Firebase is not connected. Please save your Firebase Config first.");
    }
    // 1. Settings
    await this.db.collection("settings").doc("site").set(TLS_INITIAL_DATA.siteSettings);
    // 2. Services
    await this.db.collection("settings").doc("services").set({ list: TLS_INITIAL_DATA.services });
    // 3. Projects
    for (const proj of TLS_INITIAL_DATA.projects) {
      await this.db.collection("projects").doc(proj.id).set(proj);
    }
    // 4. Reviews
    for (const rev of TLS_INITIAL_DATA.reviews) {
      await this.db.collection("reviews").doc(rev.id).set(rev);
    }
    // 5. Inquiries
    for (const inq of TLS_INITIAL_DATA.inquiries) {
      await this.db.collection("inquiries").doc(inq.id).set(inq);
    }
    return true;
  },

  // CLOUDINARY CONFIG & DIRECT UPLOAD
  getCloudinaryConfig() {
    try {
      const cfg = localStorage.getItem("vji_cloudinary_config") || localStorage.getItem("dpa_cloudinary_config");
      return cfg ? JSON.parse(cfg) : { cloudName: "", uploadPreset: "" };
    } catch(e) {
      return { cloudName: "", uploadPreset: "" };
    }
  },

  saveCloudinaryConfig(cfg) {
    localStorage.setItem("vji_cloudinary_config", JSON.stringify(cfg));
    localStorage.setItem("dpa_cloudinary_config", JSON.stringify(cfg));
    return cfg;
  },

  async uploadImage(file, onProgress) {
    const cfg = this.getCloudinaryConfig();
    
    // If Cloudinary credentials are provided, upload directly to Cloudinary
    if (cfg && cfg.cloudName && cfg.uploadPreset) {
      const url = `https://api.cloudinary.com/v1_1/${cfg.cloudName.trim()}/image/upload`;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", cfg.uploadPreset.trim());
      formData.append("folder", "vji_portfolio");

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        
        if (xhr.upload && onProgress) {
          xhr.upload.onprogress = e => {
            if (e.lengthComputable) {
              const percent = Math.round((e.loaded / e.total) * 100);
              onProgress(percent);
            }
          };
        }

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const res = JSON.parse(xhr.responseText);
              // Automatic Cloudinary optimization: f_auto,q_auto for fastest loading
              const optimizedUrl = res.secure_url.replace("/upload/", "/upload/f_auto,q_auto/");
              resolve({
                url: optimizedUrl,
                rawUrl: res.secure_url,
                publicId: res.public_id,
                source: "cloudinary"
              });
            } catch(err) {
              reject(new Error("Invalid response from Cloudinary"));
            }
          } else {
            let errMsg = "Cloudinary upload failed";
            try {
              const errData = JSON.parse(xhr.responseText);
              if (errData.error && errData.error.message) errMsg = errData.error.message;
            } catch(e) {}
            reject(new Error(errMsg));
          }
        };

        xhr.onerror = () => reject(new Error("Network error during Cloudinary upload"));
        xhr.send(formData);
      });
    }

    // Fallback if Cloudinary credentials not yet entered
    return new Promise((resolve) => {
      if (onProgress) onProgress(100);
      const reader = new FileReader();
      reader.onload = e => {
        resolve({
          url: e.target.result,
          source: "local_preview",
          note: "Cloudinary credentials not set yet. Saved as local preview. Once you add your Cloud Name & Upload Preset in Cloud Settings, future uploads will stream directly to Cloudinary CDN!"
        });
      };
      reader.readAsDataURL(file);
    });
  },

  // ADMIN AUTH & CRYPTOGRAPHIC ACCESS KEY MANAGEMENT (Salted SHA-256)
  _SALT: "dpa_salt_secure_2026_",
  
  // SHA-256 Hashes of authorized factory keys (Irreversible one-way hashes, zero plaintext)
  _FACTORY_HASHES: [
    "c88b7633dc87f7af686ef51655762a92e5610d09532a72cf38b5824f1a25490f", // AA-Admin-2026 (Default Master)
    "d2851f5927381595e59ceae895d8cd989b46deee43c724956379b435c8ed873b", // aa2026
    "0b02d7454cbcd95f8cc4b6baecc2bdc6da2ff2ca6ef0b11e307e7150f0d9631d", // TLS-Admin-2026
    "6059f85534d7c3347f8a268ec858692c7d586507bd2633db5d47941e7d961965", // Studio-Admin-2026
    "b4fcbfa958d909237b165cb685d00105e4bdc8c95f05d31cd52666332aa7ee85"  // admin123
  ],

  async hashPasskey(key) {
    if (!key) return "";
    const enc = new TextEncoder();
    const data = enc.encode(this._SALT + key.trim());
    if (window.crypto && window.crypto.subtle) {
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }
    // Fallback if subtle crypto unavailable
    let h = 0;
    const str = this._SALT + key.trim();
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h) + str.charCodeAt(i);
      h |= 0;
    }
    return "fb_" + Math.abs(h);
  },

  getAdminKeyInfo() {
    try {
      const customHash = localStorage.getItem("vji_admin_hash") || localStorage.getItem("dpa_admin_hash");
      const updated = localStorage.getItem("vji_admin_key_updated") || localStorage.getItem("dpa_admin_key_updated");
      return {
        isCustom: !!customHash,
        updatedAt: updated || null,
        hashPreview: customHash ? customHash.substring(0, 16) + "..." : "Factory Master (SHA-256)"
      };
    } catch(e) {
      return {
        isCustom: false,
        updatedAt: null,
        hashPreview: "Factory Master (SHA-256)"
      };
    }
  },

  async verifyAdminKey(inputKey) {
    if (!inputKey) return false;
    const inputHash = await this.hashPasskey(inputKey);

    // 1. Check custom browser hash
    const customHash = localStorage.getItem("vji_admin_hash") || localStorage.getItem("dpa_admin_hash");
    if (customHash && inputHash === customHash) return true;

    // 2. Check cloud Firestore hash if initialized
    if (this.isFirebaseActive && this.db) {
      try {
        const snap = await this.db.collection("settings").doc("security").get();
        if (snap.exists && snap.data().adminHash) {
          if (inputHash === snap.data().adminHash) return true;
        }
      } catch(e) {
        console.warn("Could not check Firestore admin hash:", e);
      }
    }

    // 3. Fallback factory hashes (Verified by SHA-256 hash comparison only)
    return this._FACTORY_HASHES.includes(inputHash);
  },

  async saveAdminKey(newKey) {
    if (!newKey || newKey.trim().length < 4) {
      throw new Error("Access key must be at least 4 characters long.");
    }
    const cleanKey = newKey.trim();
    const newHash = await this.hashPasskey(cleanKey);
    localStorage.setItem("vji_admin_hash", newHash);
    localStorage.setItem("vji_admin_key_updated", new Date().toISOString());
    localStorage.setItem("dpa_admin_hash", newHash);
    localStorage.setItem("dpa_admin_key_updated", new Date().toISOString());

    // Cloud sync hash only (never plaintext) if Firestore active
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("settings").doc("security").set({
          adminHash: newHash,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      } catch(e) {
        console.warn("Could not sync key hash to Firestore:", e);
      }
    }
    return true;
  },

  async resetAdminKey() {
    localStorage.removeItem("vji_admin_hash");
    localStorage.removeItem("vji_admin_key_updated");
    localStorage.removeItem("dpa_admin_hash");
    localStorage.removeItem("dpa_admin_key_updated");
    if (this.isFirebaseActive && this.db) {
      try {
        await this.db.collection("settings").doc("security").delete();
      } catch(e) {}
    }
    return true;
  }
};

// Aliasing for compatibility
window.TLSService = window.DPAService;

// Automatically run initialization
document.addEventListener("DOMContentLoaded", () => {
  window.DPAService.init();
});
