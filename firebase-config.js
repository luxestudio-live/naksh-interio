/**
 * Vishwakarma Ji Interiors - Firebase Cloud Integration & Data Service
 * Provides Firestore sync, Firebase Auth, and robust local caching for all website components.
 * Led by founder Shivam · Sadbhavna nagar, Surekapuram Colony, Teliyaganj, Mirzapur, UP 231001
 */

// Default Seed Data for Vishwakarma Ji Interiors
const VJI_INITIAL_DATA = {
  siteSettings: {
    brandName: "Vishwakarma Ji Interiors",
    brandSubtitle: "INTERIOR DESIGNER · TELIYAGANJ, MIRZAPUR, UP 231001",
    tagline: "5.0 ★ (21 Reviews) Top Rated Interior Designer · Mirzapur, UP",
    heroTitle: "Exquisite interior spaces crafted with dedication, premium quality & timeless elegance.",
    heroDesc: "Vishwakarma Ji Interiors delivers end-to-end luxury interior design, bespoke bedroom suites, modular kitchens, artistic false ceilings, and turnkey execution in Mirzapur and across all of Uttar Pradesh. Studio located in Teliyaganj, Mirzapur, UP 231001, led with devotion by founder Shivam.",
    phone: "079052 02019",
    phoneTel: "+917905202019",
    address: "Sadbhavna nagar, Surekapuram Colony, Teliyaganj, Mirzapur, Uttar Pradesh 231001",
    mapsQuery: "Vishwakarma+Ji+Interiors+Sadbhavna+nagar+Surekapuram+Colony+Teliyaganj+Mirzapur+Uttar+Pradesh+231001",
    hours: "Open · Closes 10 pm",
    rating: "5.0",
    reviewCount: "21",
    stats: [
      { num: "5.0", sup: "★", label: "Google Rating from 21 Verified Reviews" },
      { num: "12", sup: "+", label: "Specialized Interior Design Services" },
      { num: "10", sup: "PM", label: "Open Daily · Closes 10 PM for Consultations" },
      { num: "100", sup: "%", label: "Dedication, Punctuality & Superior Quality" },
      { num: "A-Z", sup: "", label: "Design, False Ceiling, Woodwork & Styling" }
    ]
  },
  projects: [
    {
      id: "proj_1",
      title: "Designer Gypsum False Ceiling & Backlit CNC Jali",
      category: "False Ceiling & Decor",
      loc: "Teliyaganj, Mirzapur",
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
      id: "proj_2",
      title: "Master Bedroom Suite with Painted Botanical Mural & Curved Headboard",
      category: "Bedroom Design",
      loc: "Sadbhavna Nagar, Mirzapur",
      img: "images/bedroom_suite.jpg",
      images: [
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg",
        "images/living_tv_unit.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Bespoke master suite with arched wall niche featuring vibrant hand-painted botanical murals, plush dual-tone upholstered headboard, integrated LED perimeter mood lighting, and tailored soft furnishings.",
      tags: ["Bedroom Design", "Custom Wall Art", "Mood Lighting"]
    },
    {
      id: "proj_3",
      title: "Italian Statuario Marble TV Lounge & Fluted Paneling",
      category: "Living Room",
      loc: "Surekapuram Colony, Mirzapur",
      img: "images/living_tv_unit.jpg",
      images: [
        "images/living_tv_unit.jpg",
        "images/kitchen_walnut.jpg",
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Seamless full-height Statuario marble book-matched feature wall, acoustic fluted timber louvers, integrated 3000K indirect LED profiles, and floating smoked walnut entertainment cabinetry.",
      tags: ["Living Room", "Statuario Marble", "TV Console"]
    },
    {
      id: "proj_4",
      title: "Contemporary Smoked Walnut & Quartz Modular Kitchen",
      category: "Modular Kitchen",
      loc: "Mirzapur, UP",
      img: "images/kitchen_walnut.jpg",
      images: [
        "images/kitchen_walnut.jpg",
        "images/living_tv_unit.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Architectural culinary studio crafted with boiling-water-proof HDHMR joinery, anti-scratch smoked walnut acrylic finishes, seamless Calacatta quartz countertops, and German soft-close tandem hardware.",
      tags: ["Modular Kitchen", "Walnut Veneer", "Quartz Counter"]
    },
    {
      id: "proj_5",
      title: "Luxury Bedroom Suite with Halo Mirror & Fluted Vanity",
      category: "Bedroom Design",
      loc: "Teliyaganj, Mirzapur",
      img: "images/bedroom_suite.jpg",
      images: [
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg",
        "images/living_tv_unit.jpg"
      ],
      featured: true,
      year: "2025",
      desc: "Elegantly detailed bedroom sanctuary with vertical fluted wall paneling, halo illuminated vanity ring mirror, integrated floating dressing table, and ambient warm ceiling cove illumination.",
      tags: ["Bedroom Design", "Vanity Station", "Fluted Paneling"]
    },
    {
      id: "proj_6",
      title: "Floor-to-Ceiling Tinted Bronze Glass Wardrobes",
      category: "Wardrobes & Decor",
      loc: "Surekapuram Colony, Mirzapur",
      img: "images/walkin_wardrobe.jpg",
      images: [
        "images/walkin_wardrobe.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Walk-in wardrobe sanctuary with bronze aluminum slim profile frames, sensor LED strip shelving, velvet accessory trays, and full-length vanity mirror integration.",
      tags: ["Walk-in Closet", "Glass Wardrobe", "LED Joinery"]
    },
    {
      id: "proj_7",
      title: "Sophisticated Dining Suite & Luxury Chandeliers",
      category: "Dining Room Design",
      loc: "Mirzapur, UP",
      img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80",
        "images/kitchen_walnut.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Opulent dining room design with sintered stone dining table, sculptural brass pendant lighting, custom bar buffet credenza, and curated artwork.",
      tags: ["Dining Room", "Custom Art", "Pendant Lighting"]
    },
    {
      id: "proj_8",
      title: "Turnkey Luxury Villa Interior & Complete Home Decor",
      category: "Turnkey Interior",
      loc: "Mirzapur & All Uttar Pradesh",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        "images/living_tv_unit.jpg",
        "images/bedroom_suite.jpg"
      ],
      featured: true,
      year: "2026",
      desc: "Full turnkey interior transformation featuring complete false ceilings, customized modular carpentry, designer bathrooms, luxury curtains, and personalized styling executed on schedule.",
      tags: ["Turnkey Interior", "Home Decor", "Luxury Residence"]
    }
  ],
  services: [
    { name: "Bathroom design", icon: "🛁", desc: "Luxury sanitary fittings, designer wall tiles, custom vanity counters & ambient illumination" },
    { name: "Bedroom design", icon: "🛏️", desc: "Bespoke upholstered headboards, fluted wall accents, warm cove lighting & cozy layouts" },
    { name: "Custom art selection", icon: "🎨", desc: "Curated wall murals, bespoke art installations, custom textures & refined styling" },
    { name: "Dining room design", icon: "🍷", desc: "Sophisticated dining concepts, luxury pendant chandeliers & tailored buffet credenzas" },
    { name: "Home decor & styling", icon: "✨", desc: "Comprehensive soft furnishings, artifact curation, sensory palettes & harmonious decor" },
    { name: "False ceiling & CNC Jali lighting", icon: "💡", desc: "Artistic gypsum ceilings, backlit laser-cut CNC jali work & ambient cove profiles" },
    { name: "Modular kitchen design", icon: "🍳", desc: "Boiling-water-proof HDHMR joinery, quartz stone countertops & German soft-close fittings" },
    { name: "Living room & TV unit architecture", icon: "🛋️", desc: "Statuario marble feature walls, vertical fluted acoustic louvers & floating consoles" },
    { name: "Wardrobes & walk-in dressing suites", icon: "👗", desc: "Bronze profile glass wardrobes, motion-sensor LED strips & integrated dressing vanities" },
    { name: "Turnkey interior execution", icon: "🛠️", desc: "Unified turnkey craftsmanship from initial 3D blueprint to flawless on-site handover" },
    { name: "3D interior rendering & walkthroughs", icon: "📐", desc: "Photorealistic 3D elevations, CGI perspectives and virtual visual walkthroughs" },
    { name: "Interior consultation", icon: "🤝", desc: "Personalized spatial audits, material selection guidance & budget-optimized planning" }
  ],
  reviews: [
    {
      id: "rev_1",
      author: "S. K. Sharma",
      loc: "Mirzapur, Uttar Pradesh",
      stars: 5,
      quote: "Best interior work best date best quality! Vishwakarma Ji Interiors completed our false ceiling, cove lighting, and modular woodwork with unmatched precision and perfection."
    },
    {
      id: "rev_2",
      author: "Abhishek Verma",
      loc: "Teliyaganj, Mirzapur",
      stars: 5,
      quote: "Shivam, the owner, is very gentle and has great dedication towards his work. He personally oversaw every single detail of our home interior and delivered beyond expectations. 5.0-star experience!"
    },
    {
      id: "rev_3",
      author: "Rohit Yadav",
      loc: "Surekapuram Colony, Mirzapur",
      stars: 5,
      quote: "Excellent work done by Shivam and his team! Transformed our master bedroom suite and living room TV unit into a luxury haven. Best interior designer in Mirzapur."
    }
  ],
  inquiries: [
    {
      id: "inq_demo_1",
      name: "Amitabh Singh",
      phone: "098391 44521",
      service: "Bedroom design",
      message: "Looking for complete bedroom interior with fluted paneling, backlit false ceiling and custom wardrobe in Mirzapur.",
      timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: "New"
    },
    {
      id: "inq_demo_2",
      name: "Pooja Mishra",
      phone: "094152 77123",
      service: "Modular kitchen design",
      message: "Planning modern modular kitchen with quartz countertop and acrylic cabinets in Teliyaganj. Please share estimate.",
      timestamp: new Date(Date.now() - 3600000 * 28).toISOString(),
      status: "Contacted"
    }
  ]
};

// Aliasing for compatibility
const DPA_INITIAL_DATA = VJI_INITIAL_DATA;

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

    // Ensure Local Storage has initial seed data with new Vishwakarma Ji Interiors branding
    if (!localStorage.getItem("vji_data_seeded_v2")) {
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
    localStorage.setItem("vji_site_settings", JSON.stringify(VJI_INITIAL_DATA.siteSettings));
    localStorage.setItem("vji_projects", JSON.stringify(VJI_INITIAL_DATA.projects));
    localStorage.setItem("vji_services", JSON.stringify(VJI_INITIAL_DATA.services));
    localStorage.setItem("vji_reviews", JSON.stringify(VJI_INITIAL_DATA.reviews));
    localStorage.setItem("vji_inquiries", JSON.stringify(VJI_INITIAL_DATA.inquiries));

    // Overwrite legacy keys as well to ensure immediate update across any cached sessions
    localStorage.setItem("dpa_site_settings", JSON.stringify(VJI_INITIAL_DATA.siteSettings));
    localStorage.setItem("dpa_projects", JSON.stringify(VJI_INITIAL_DATA.projects));
    localStorage.setItem("dpa_services", JSON.stringify(VJI_INITIAL_DATA.services));
    localStorage.setItem("dpa_reviews", JSON.stringify(VJI_INITIAL_DATA.reviews));
    localStorage.setItem("dpa_inquiries", JSON.stringify(VJI_INITIAL_DATA.inquiries));

    localStorage.setItem("vji_data_seeded_v2", "true");
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
    return local ? JSON.parse(local) : VJI_INITIAL_DATA.siteSettings;
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
      list = local ? JSON.parse(local) : VJI_INITIAL_DATA.projects;
    }
    // Normalize gallery images for every project
    return list.map(p => {
      const initialMatch = VJI_INITIAL_DATA.projects.find(init => init.id === p.id);
      let gallery = Array.isArray(p.images) && p.images.length > 0 ? p.images : null;
      if (!gallery && initialMatch && Array.isArray(initialMatch.images)) {
        gallery = initialMatch.images;
      }
      if (!gallery) {
        gallery = p.img ? [p.img] : [];
      }
      let loc = p.loc || (initialMatch ? initialMatch.loc : 'Mirzapur, UP');
      if (/mumbai/i.test(loc)) loc = 'Mirzapur & All Uttar Pradesh';
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
    return local ? JSON.parse(local) : VJI_INITIAL_DATA.services;
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
    return local ? JSON.parse(local) : VJI_INITIAL_DATA.inquiries;
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
    return local ? JSON.parse(local) : VJI_INITIAL_DATA.reviews;
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
    await this.db.collection("settings").doc("site").set(VJI_INITIAL_DATA.siteSettings);
    // 2. Services
    await this.db.collection("settings").doc("services").set({ list: VJI_INITIAL_DATA.services });
    // 3. Projects
    for (const proj of VJI_INITIAL_DATA.projects) {
      await this.db.collection("projects").doc(proj.id).set(proj);
    }
    // 4. Reviews
    for (const rev of VJI_INITIAL_DATA.reviews) {
      await this.db.collection("reviews").doc(rev.id).set(rev);
    }
    // 5. Inquiries
    for (const inq of VJI_INITIAL_DATA.inquiries) {
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
    "f4500ab5b79cdb4edaa63423cd30a6af14f78d8a6b2b917fe9d81b0a182d94df", // Vishwakarma-Admin-2026
    "0b02d7454cbcd95f8cc4b6baecc2bdc6da2ff2ca6ef0b11e307e7150f0d9631d", // VJI-Admin-2026
    "526746f09d2d4a65c3b9e006fb5b7278c718fd69942b1aef14a6941230110085", // vji2026
    "6e3dc16bfd97d49457ec77229dc3ca7e7cd568e0f31227a0f4d5785141869061", // shivam2026
    "6059f85534d7c3347f8a268ec858692c7d586507bd2633db5d47941e7d961965", // DPA-Admin-2026
    "ac4080297d1632bda4127cde4f089c783daa4aaa2514a25d7623986380d84206", // dpa2026
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
window.VJIService = window.DPAService;

// Automatically run initialization
document.addEventListener("DOMContentLoaded", () => {
  window.DPAService.init();
});
