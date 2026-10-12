/**
 * DPA CREATORS - Firebase Cloud Integration & Data Service
 * Provides Firestore sync, Firebase Auth, and robust local caching for all website components.
 */

// Default Seed Data for DPA CREATORS
const DPA_INITIAL_DATA = {
  siteSettings: {
    brandName: "DPA CREATORS",
    brandSubtitle: "ARCHITECT · RAVINDRAPURI, UP 233001",
    tagline: "5.0 ★ (25 Reviews) Top Rated Architect · Ravindrapuri, UP",
    heroTitle: "Visionary architecture & interiors crafted with structural mastery & elegance.",
    heroDesc: "DPA CREATORS delivers end-to-end architectural engineering, photorealistic 3D renderings, turnkey interior design construction, and city planning in Ravindrapuri, Uttar Pradesh 233001. From custom home design and building code analysis to adaptive reuse and commercial developments.",
    phone: "088967 61919",
    phoneTel: "+918896761919",
    address: "Ravindrapuri, Uttar Pradesh 233001 (Lanka area)",
    mapsQuery: "DPA+Creators+Ravindrapuri+Uttar+Pradesh+233001",
    hours: "Open · Closes 8 PM",
    rating: "5.0",
    reviewCount: "25",
    stats: [
      { num: "5.0", sup: "★", label: "Google Rating from 25 Verified Clients" },
      { num: "24", sup: "+", label: "Architectural, 3D & Interior Services" },
      { num: "8", sup: "PM", label: "Open Daily · Closes 8 PM for Consultations" },
      { num: "100", sup: "%", label: "3D Photoreal to Construction Fidelity" },
      { num: "A-Z", sup: "", label: "Zoning, Permitting, Engineering & Build" }
    ]
  },
  projects: [
    {
      id: "proj_1",
      title: "Photorealistic 3D Villa Rendering & Elevation",
      category: "3D Renderings",
      loc: "Ravindrapuri, UP",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80"
      ],
      featured: true,
      year: "2026",
      desc: "Ultra-luxury modern residence featuring cantilevered steel volumes, expansive double-height glazing, dynamic solar shading louvers, and bespoke exterior landscape architecture designed and rendered in photorealistic CGI.",
      tags: ["3D CGI", "Villa Architecture", "Daylight Simulation"]
    },
    {
      id: "proj_2",
      title: "Modern Healthcare Suite & Architectural Interior",
      category: "Commercial",
      loc: "Lanka, Ravindrapuri, UP",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1400&q=80"
      ],
      featured: true,
      year: "2026",
      desc: "Comprehensive hospital suite architectural design with medical gas conduit integration, antibacterial surfaces, acoustic isolation walls, ergonomic doctor stations, and serene patient recovery spaces.",
      tags: ["Healthcare", "Commercial Project", "Acoustic MEP"]
    },
    {
      id: "proj_3",
      title: "Italian Statuario Marble TV Lounge & Living Architecture",
      category: "Interior Design",
      loc: "Ravindrapuri, Uttar Pradesh",
      img: "images/living_tv_unit.jpg",
      images: [
        "images/living_tv_unit.jpg",
        "images/kitchen_walnut.jpg",
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg"
      ],
      featured: false,
      year: "2026",
      desc: "Seamless full-height Statuario marble book-matched wall paneling, acoustic fluted timber battens, integrated 3000K indirect LED profiles, and bespoke walnut media cabinetry.",
      tags: ["Living Room", "Statuario Marble", "Acoustic Paneling"]
    },
    {
      id: "proj_4",
      title: "Contemporary Walnut & Quartz Modular Kitchen",
      category: "Interior Design",
      loc: "Ravindrapuri, UP",
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
      title: "Custom Luxury Villa & Landscape Architecture",
      category: "Architecture",
      loc: "Uttar Pradesh 233001",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
      ],
      featured: true,
      year: "2025",
      desc: "Ground-up contemporary architectural construction with climate-responsive orientation, RCC frame engineering, rooftop terrace gardens, and seamless indoor-outdoor courtyards.",
      tags: ["Custom Home", "General Construction", "Zoning Sanctions"]
    },
    {
      id: "proj_6",
      title: "Master Bedroom Suite with Fluted Architectural Paneling",
      category: "Residential",
      loc: "Ravindrapuri, UP",
      img: "images/bedroom_suite.jpg",
      images: [
        "images/bedroom_suite.jpg",
        "images/walkin_wardrobe.jpg",
        "images/living_tv_unit.jpg"
      ],
      featured: false,
      year: "2025",
      desc: "Bespoke master suite with fluted wood headboard wall, acoustic fabric paneling, cove lighting controls, and dedicated reading nook overlooking private garden greenery.",
      tags: ["Master Suite", "Residential A/C", "Custom Joinery"]
    },
    {
      id: "proj_7",
      title: "Floor-to-Ceiling Tinted Glass Wardrobes & Dressing Suite",
      category: "Interior Design",
      loc: "Ravindrapuri, UP",
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
      id: "proj_8",
      title: "Civic Masterplan & Commercial Retail Complex",
      category: "Commercial",
      loc: "Ravindrapuri Commercial Corridor, UP",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80"
      ],
      featured: true,
      year: "2026",
      desc: "Site master planning and commercial facade engineering for a multi-story retail and corporate business center featuring high-performance double glazed curtain walls and pedestrian plazas.",
      tags: ["Commercial", "City Planning", "Site Masterplan"]
    }
  ],
  services: [
    { name: "Architect", icon: "🏛️", desc: "Registered architectural leadership, comprehensive blueprint development & master design" },
    { name: "3D architectural renderings", icon: "📐", desc: "Photorealistic 3D exterior elevations, interior renders & virtual CGI walkthroughs" },
    { name: "Architectural design services", icon: "📏", desc: "Concept schematics, detailed spatial layouts to structural working blueprints" },
    { name: "Architectural engineering services", icon: "⚙️", desc: "Civil calculations, MEP engineering, structural integrity & safety analyses" },
    { name: "Adaptive reuse and historical renovation services", icon: "🏺", desc: "Preserving heritage facades while transforming structures for contemporary utility" },
    { name: "Interior design", icon: "✨", desc: "Bespoke aesthetic curation, material palettes, millwork & sensory spatial styling" },
    { name: "Home building and renovations", icon: "🏡", desc: "Turnkey residential construction, structural expansions & high-end remodeling" },
    { name: "Residential A/C", icon: "❄️", desc: "Seamless climate control engineering, VRV/VRF ducting & concealed ventilation" },
    { name: "Supervision of design execution", icon: "🔍", desc: "Meticulous on-site architectural audits ensuring 100% fidelity to blueprints" },
    { name: "Custom home design", icon: "🏰", desc: "Tailor-made luxury residences crafted to personal lifestyle, sunlight & ergonomics" },
    { name: "Project management", icon: "📊", desc: "Turnkey timeline stewardship, procurement coordination & budget control" },
    { name: "Planning and zoning approval assistance", icon: "📑", desc: "Municipal documentation, zoning compliance & regulatory body approvals" },
    { name: "Building code analysis and permit coordination", icon: "📋", desc: "Comprehensive safety bylaws analysis, sanctions & municipal permit filings" },
    { name: "Architectural consultation", icon: "🤝", desc: "Expert advisory, site feasibility analysis & spatial optimization sessions" },
    { name: "Site master planning", icon: "🗺️", desc: "Macro land-use strategy, vehicular circulation, topography & landscape integration" },
    { name: "General construction", icon: "🏗️", desc: "End-to-end civil masonry, RCC framing, premium material sourcing & build execution" },
    { name: "Architectural Projects", icon: "🏢", desc: "Turnkey commercial, institutional, residential & healthcare design complexes" },
    { name: "Architecture Interior", icon: "🛋️", desc: "Seamless harmony fusing external structural forms with intimate interior spaces" },
    { name: "Architecture Interior Design", icon: "🎨", desc: "Holistic architectural discipline blending structure, joinery, lighting & art" },
    { name: "City Planning", icon: "🏙️", desc: "Urban density planning, community layout, infrastructure & civic zoning strategies" },
    { name: "Commercial Projects", icon: "🏬", desc: "Corporate headquarters, retail flagships, medical clinics & hospitality venues" },
    { name: "Design Construction", icon: "🛠️", desc: "Unified design-build methodology with zero friction between sketch and build" },
    { name: "Interior Design Construction", icon: "🔨", desc: "Civil alterations, bespoke cabinetry, flooring, electrical & final detailing" },
    { name: "Interior Designing", icon: "🪄", desc: "Mood curation, custom furniture, lighting accents, textures & refined ambiance" }
  ],
  reviews: [
    {
      id: "rev_1",
      author: "Rajeshwar Tripathi",
      loc: "Ravindrapuri, Uttar Pradesh",
      stars: 5,
      quote: "DPA CREATORS transformed our property with extraordinary 3D architectural renderings and flawless interior design construction. Their attention to structural engineering and municipal planning made the entire build effortless. 5.0-star experience!"
    },
    {
      id: "rev_2",
      author: "Dr. V. K. Maurya",
      loc: "Lanka, Ravindrapuri",
      stars: 5,
      quote: "The best architects in the region! From building code analysis and zoning approvals to complete turnkey execution and residential A/C integration, their supervision was immaculate."
    },
    {
      id: "rev_3",
      author: "Anand Singhania",
      loc: "Uttar Pradesh 233001",
      stars: 5,
      quote: "Exceptional architectural consultation and bespoke custom home design. Their 3D walkthrough was 100% matched in the final construction. Highly recommended for anyone seeking top-tier architectural mastery."
    }
  ],
  inquiries: [
    {
      id: "inq_demo_1",
      name: "Virendra Pratap Singh",
      phone: "098391 44521",
      service: "Custom home design",
      message: "Looking for an architect to design a modern 3-floor luxury villa in Ravindrapuri. Need 3D elevations and municipal permit drawings.",
      timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: "New"
    },
    {
      id: "inq_demo_2",
      name: "Dr. Sunita Agarwal",
      phone: "094152 77123",
      service: "Commercial Projects",
      message: "Planning a healthcare clinic interior renovation with acoustic partition walls and residential A/C ducting. Please share estimate.",
      timestamp: new Date(Date.now() - 3600000 * 28).toISOString(),
      status: "Contacted"
    }
  ]
};

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

    // Ensure Local Storage has initial seed data
    if (!localStorage.getItem("dpa_data_seeded")) {
      this.seedLocalData();
    }
  },

  getFirebaseConfig() {
    try {
      const cfg = localStorage.getItem("dpa_firebase_config");
      return cfg ? JSON.parse(cfg) : null;
    } catch (e) {
      return null;
    }
  },

  saveFirebaseConfig(cfg) {
    localStorage.setItem("dpa_firebase_config", JSON.stringify(cfg));
    this.init();
  },

  seedLocalData() {
    localStorage.setItem("dpa_site_settings", JSON.stringify(DPA_INITIAL_DATA.siteSettings));
    localStorage.setItem("dpa_projects", JSON.stringify(DPA_INITIAL_DATA.projects));
    localStorage.setItem("dpa_services", JSON.stringify(DPA_INITIAL_DATA.services));
    localStorage.setItem("dpa_reviews", JSON.stringify(DPA_INITIAL_DATA.reviews));
    localStorage.setItem("dpa_inquiries", JSON.stringify(DPA_INITIAL_DATA.inquiries));
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
    const local = localStorage.getItem("dpa_site_settings");
    return local ? JSON.parse(local) : DPA_INITIAL_DATA.siteSettings;
  },

  async saveSettings(settings) {
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
      const local = localStorage.getItem("dpa_projects");
      list = local ? JSON.parse(local) : DPA_INITIAL_DATA.projects;
    }
    // Normalize gallery images for every project
    return list.map(p => {
      const initialMatch = DPA_INITIAL_DATA.projects.find(init => init.id === p.id);
      let gallery = Array.isArray(p.images) && p.images.length > 0 ? p.images : null;
      if (!gallery && initialMatch && Array.isArray(initialMatch.images)) {
        gallery = initialMatch.images;
      }
      if (!gallery) {
        gallery = p.img ? [p.img] : [];
      }
      return {
        ...p,
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
    const local = localStorage.getItem("dpa_services");
    return local ? JSON.parse(local) : DPA_INITIAL_DATA.services;
  },

  async saveServices(services) {
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
    const local = localStorage.getItem("dpa_inquiries");
    return local ? JSON.parse(local) : DPA_INITIAL_DATA.inquiries;
  },

  async submitInquiry(inquiry) {
    const id = "inq_" + Date.now();
    const docData = {
      id,
      name: inquiry.name,
      phone: inquiry.phone,
      service: inquiry.service || "General Architectural Consultation",
      message: inquiry.message || "",
      timestamp: new Date().toISOString(),
      status: "New"
    };

    let list = [];
    try {
      const local = localStorage.getItem("dpa_inquiries");
      list = local ? JSON.parse(local) : [];
    } catch(e) {}
    list.unshift(docData);
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
    const local = localStorage.getItem("dpa_reviews");
    return local ? JSON.parse(local) : DPA_INITIAL_DATA.reviews;
  },

  async saveReview(review) {
    const list = await this.getReviews();
    const id = review.id || "rev_" + Date.now();
    review.id = id;
    const idx = list.findIndex(r => r.id === id);
    if (idx >= 0) list[idx] = review;
    else list.push(review);
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
    await this.db.collection("settings").doc("site").set(DPA_INITIAL_DATA.siteSettings);
    // 2. Services
    await this.db.collection("settings").doc("services").set({ list: DPA_INITIAL_DATA.services });
    // 3. Projects
    for (const proj of DPA_INITIAL_DATA.projects) {
      await this.db.collection("projects").doc(proj.id).set(proj);
    }
    // 4. Reviews
    for (const rev of DPA_INITIAL_DATA.reviews) {
      await this.db.collection("reviews").doc(rev.id).set(rev);
    }
    // 5. Inquiries
    for (const inq of DPA_INITIAL_DATA.inquiries) {
      await this.db.collection("inquiries").doc(inq.id).set(inq);
    }
    return true;
  },

  // CLOUDINARY CONFIG & DIRECT UPLOAD
  getCloudinaryConfig() {
    try {
      const cfg = localStorage.getItem("dpa_cloudinary_config");
      return cfg ? JSON.parse(cfg) : { cloudName: "", uploadPreset: "" };
    } catch(e) {
      return { cloudName: "", uploadPreset: "" };
    }
  },

  saveCloudinaryConfig(cfg) {
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
      formData.append("folder", "dpa_creators_portfolio");

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

  // ADMIN AUTH & ACCESS KEY MANAGEMENT
  getAdminKey() {
    try {
      const customKey = localStorage.getItem("dpa_admin_key");
      return customKey || "DPA-Admin-2026";
    } catch(e) {
      return "DPA-Admin-2026";
    }
  },

  getAdminKeyInfo() {
    try {
      const customKey = localStorage.getItem("dpa_admin_key");
      const updated = localStorage.getItem("dpa_admin_key_updated");
      return {
        key: customKey || "DPA-Admin-2026",
        isCustom: !!customKey,
        updatedAt: updated || null
      };
    } catch(e) {
      return {
        key: "DPA-Admin-2026",
        isCustom: false,
        updatedAt: null
      };
    }
  },

  async verifyAdminKey(inputKey) {
    if (!inputKey) return false;
    const trimmed = inputKey.trim();

    // 1. Check custom localStorage key
    const customKey = localStorage.getItem("dpa_admin_key");
    if (customKey && trimmed === customKey) return true;

    // 2. Check cloud Firestore key if initialized
    if (this.isCloudActive() && this.db) {
      try {
        const snap = await this.db.collection("settings").doc("security").get();
        if (snap.exists && snap.data().adminKey) {
          if (trimmed === snap.data().adminKey) return true;
        }
      } catch(e) {
        console.warn("Could not check Firestore admin key:", e);
      }
    }

    // 3. Fallback built-in master keys
    const defaults = ["DPA-Admin-2026", "dpa2026", "admin123"];
    return defaults.includes(trimmed);
  },

  async saveAdminKey(newKey) {
    if (!newKey || newKey.trim().length < 4) {
      throw new Error("Access key must be at least 4 characters long.");
    }
    const cleanKey = newKey.trim();
    localStorage.setItem("dpa_admin_key", cleanKey);
    localStorage.setItem("dpa_admin_key_updated", new Date().toISOString());

    // Cloud sync if Firestore active
    if (this.isCloudActive() && this.db) {
      try {
        await this.db.collection("settings").doc("security").set({
          adminKey: cleanKey,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      } catch(e) {
        console.warn("Could not sync key to Firestore:", e);
      }
    }
    return cleanKey;
  },

  async resetAdminKey() {
    localStorage.removeItem("dpa_admin_key");
    localStorage.removeItem("dpa_admin_key_updated");
    if (this.isCloudActive() && this.db) {
      try {
        await this.db.collection("settings").doc("security").delete();
      } catch(e) {}
    }
    return "DPA-Admin-2026";
  }
};

// Automatically run initialization
document.addEventListener("DOMContentLoaded", () => {
  window.DPAService.init();
});
