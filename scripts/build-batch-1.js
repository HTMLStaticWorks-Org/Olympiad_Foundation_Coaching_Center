const fs = require('fs');
const path = require('path');
const { wrapHtml, rootDir } = require('./common');

// ============================================================================
// 1. HOME PAGE 1 (index.html)
// ============================================================================
function generateIndex() {
  const content = `
  <!-- HERO SECTION: Split Editorial Composition -->
  <section class="hero-h1">
    <img src="images/image-17.png" alt="Spacious university-style coaching classroom background" class="hero-h1-bg">
    <div class="hero-h1-overlay"></div>
    <div class="hero-h1-pattern"></div>
    <div class="container hero-h1-grid">
      <div class="hero-h1-copy">
        <div class="demo-badge">PREMIER OLYMPIAD FOUNDATION COACHING • GRADES 1 TO 10</div>
        <h1>Master Concepts. Excel in <span>National & Global Olympiads</span></h1>
        <p class="lead">
          Pragyan Olympiad Academy provides structured, concept-first foundation coaching in Mathematics (IMO, PRMO), Science (NSO, IJSO), Logical Reasoning, and English (IEO) for students in Grades 1 to 10. We cultivate analytical inquiry and competitive excellence from the ground up.
        </p>
        <div class="btn-group">
          <a href="programs.html" class="btn btn-primary">Explore Olympiad Programs →</a>
          <a href="contact.html" class="btn btn-outline">Book Free Diagnostic Test</a>
        </div>
        <div class="hero-meta-strip">
          <div class="hero-meta-item"><span class="hero-meta-dot"></span> Structured Grade 1–10 Syllabi</div>
          <div class="hero-meta-item"><span class="hero-meta-dot"></span> 85+ Olympiad Mentors</div>
          <div class="hero-meta-item"><span class="hero-meta-dot"></span> Weekly Diagnostic Analytics</div>
        </div>
      </div>
      <div class="hero-h1-visual">
        <div class="hero-accent-block"></div>
        <div class="hero-main-img-wrap">
          <img src="images/image-1.png" alt="Students collaborating with Olympiad exam books in academic library" loading="eager">
        </div>
        <div class="floating-stat-card">
          <div>
            <div class="floating-stat-val">1,240+</div>
            <div class="floating-stat-label">National & State Medals</div>
          </div>
          <div class="floating-stat-divider" style="border-left:1px solid rgba(255,255,255,0.18); padding-left:18px;">
            <div class="floating-stat-val">99.4%</div>
            <div class="floating-stat-label">Parent Satisfaction Index</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: Academic Excellence at a Glance -->
  <section class="stats-band">
    <div class="container">
      <div class="stats-grid-4">
        <div class="stat-block">
          <div class="stat-number">14,800<span class="stat-accent">+</span></div>
          <div class="stat-title">Students Trained</div>
          <div class="stat-caption">Across primary and secondary foundation batches</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">1,240<span class="stat-accent">+</span></div>
          <div class="stat-title">Olympiad Achievers</div>
          <div class="stat-caption">Gold, Silver, Bronze & Merit ranks in IMO, NSO & IEO</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">85<span class="stat-accent">+</span></div>
          <div class="stat-title">Expert Mentors</div>
          <div class="stat-caption">IIT, IISc and university alumni educators</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">18<span class="stat-accent">+</span></div>
          <div class="stat-title">Years of Excellence</div>
          <div class="stat-caption">Continuously refining concept-first pedagogy</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: Our Academic Philosophy -->
  <section class="section section-soft">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">PEDAGOGICAL FOUNDATION</span>
        <h2 style="margin-top:10px;">Developing Conceptual Clarity Over Rote Learning</h2>
        <p style="margin-top:16px;">
          Competitive Olympiad examinations like IMO, NSO, and PRMO do not test memory; they evaluate structural mathematical thinking, hypothesis testing, and the ability to solve unfamiliar problems under time pressure.
        </p>
        <p style="margin-top:12px;">
          Our academic model moves students systematically through intuition, visualization, mathematical proofs, and timed practice, ensuring that foundational concepts remain crystalline for life.
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>First-Principles Thinking</h4>
            <p>Deconstructing complex multi-step problems into fundamental arithmetic, geometric, and scientific laws.</p>
          </div>
          <div class="pillar-item">
            <h4>Pattern Recognition</h4>
            <p>Cultivating acute perceptual instincts to identify underlying algebraic and non-verbal logic structures.</p>
          </div>
          <div class="pillar-item">
            <h4>Diagnostic Precision</h4>
            <p>Weekly granular tracking identifies knowledge gaps before they impact competitive performance.</p>
          </div>
          <div class="pillar-item">
            <h4>Exam Temperament</h4>
            <p>Building composed examination psychology through simulated full-length Olympiad environments.</p>
          </div>
        </div>
        <div style="margin-top:24px;">
          <a href="methodology.html" class="btn btn-outline btn-sm">Discover Our Teaching Methodology →</a>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-4.png" alt="Faculty demonstrating linear equation principles on whiteboard in seminar room">
          <div class="editorial-caption-bar">
            <span>Faculty-Led Conceptual Derivation</span>
            <small style="color:var(--orange);">Linear Systems & Functional Models</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: Explore Our Olympiad Programs (STRICT 4 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">TARGETED CURRICULA</span>
          <h2>Explore Our Four Olympiad Programs</h2>
          <p>Carefully calibrated training modules designed to prepare young scholars for prestigious national and international competitions.</p>
        </div>
        <a href="programs.html" class="btn btn-outline btn-sm">View Comprehensive Catalogue →</a>
      </div>

      <div class="grid-2x2">
        <!-- Card 1: Mathematics -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-13.png" alt="Students solving geometry problems with compass and angle tools at desk">
          </div>
          <div class="program-card-body">
            <h3>Mathematics Olympiad</h3>
            <p>Master number theory, combinatorial puzzles, coordinate geometry, and algebraic equations tested in IMO, PRMO, and NMTC.</p>
            <div class="tag-row">
              <span class="topic-tag">Arithmetic & Proofs</span>
              <span class="topic-tag">Euclidean Geometry</span>
              <span class="topic-tag">Combinatorics</span>
            </div>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700; color:var(--text-muted);">Eligibility: Grades 1–10</span>
              <a href="mathematics.html" class="btn-link">Explore Mathematics Program →</a>
            </div>
          </div>
        </article>

        <!-- Card 2: Science -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 3 – 10</span>
            <img src="images/image-52.png" alt="Students conducting hands-on electronics and STEM experiment with mentor">
          </div>
          <div class="program-card-body">
            <h3>Science Olympiad</h3>
            <p>Hands-on experimental physics, fundamental chemistry reactions, and biological systems for NSO, NSEJS, and IJSO.</p>
            <div class="tag-row">
              <span class="topic-tag">Mechanics & Optics</span>
              <span class="topic-tag">Chemical Bonding</span>
              <span class="topic-tag">Cellular Biology</span>
            </div>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700; color:var(--text-muted);">Eligibility: Grades 3–10</span>
              <a href="science.html" class="btn-link">Explore Science Program →</a>
            </div>
          </div>
        </article>

        <!-- Card 3: Reasoning -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-5.png" alt="Intense student collaborative problem-solving on reasoning challenge paper">
          </div>
          <div class="program-card-body">
            <h3>Logical Reasoning & Aptitude</h3>
            <p>Systematic deduction, spatial rotation, syllogisms, coding-decoding, and verbal logic essential for high-percentile ranks.</p>
            <div class="tag-row">
              <span class="topic-tag">Matrix Puzzles</span>
              <span class="topic-tag">Spatial Relations</span>
              <span class="topic-tag">Critical Deduction</span>
            </div>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700; color:var(--text-muted);">Eligibility: Grades 1–10</span>
              <a href="reasoning.html" class="btn-link">Explore Reasoning Program →</a>
            </div>
          </div>
        </article>

        <!-- Card 4: English -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-14.png" alt="Young students reading and discussing Olympiad curriculum book together">
          </div>
          <div class="program-card-body">
            <h3>English Olympiad (IEO)</h3>
            <p>Advanced lexical acquisition, contextual grammar nuance, critical reading comprehension, and communicative reasoning.</p>
            <div class="tag-row">
              <span class="topic-tag">Grammar Mastery</span>
              <span class="topic-tag">Lexical Depth</span>
              <span class="topic-tag">Analytical Reading</span>
            </div>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700; color:var(--text-muted);">Eligibility: Grades 1–10</span>
              <a href="english.html" class="btn-link">Explore English Program →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 5: The Foundation Learning Journey (Connected Timeline) -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">ROADMAP TO EXCELLENCE</span>
        <h2>The 5-Stage Foundation Learning Journey</h2>
        <p>A proven, structured academic sequence taking students from foundational understanding to composed Olympiad readiness.</p>
      </div>

      <div class="journey-track">
        <div class="journey-node">
          <div class="journey-step-circle">01</div>
          <h4>Concept Building</h4>
          <p>Unpacking core principles through visual derivations and teacher-guided inquiry.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">02</div>
          <h4>Guided Practice</h4>
          <p>Solving graded problem sets with step-by-step mentor feedback on methodology.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">03</div>
          <h4>Mock Assessments</h4>
          <p>Timed, exam-calibrated test papers mirroring actual Olympiad competition constraints.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">04</div>
          <h4>Performance Analysis</h4>
          <p>Granular metric breakdown of question accuracy, speed, and conceptual blind spots.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">05</div>
          <h4>Olympiad Readiness</h4>
          <p>Strategic test temperament, shortcut verification, and national competition mastery.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 6: Meet Our Academic Achievers (STRICT 4 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">MEASURABLE STUDENT OUTCOMES</span>
          <h2>Meet Our Academic Achievers</h2>
          <p>Celebrating young scholars who transformed disciplined practice into national podium finishes.</p>
        </div>
        <a href="results.html" class="btn btn-outline btn-sm">View Full Results & Medals →</a>
      </div>

      <div class="grid-2x2">
        <!-- Achiever 1 -->
        <div class="achiever-card">
          <div class="achiever-photo">
            <img src="images/image-57.png" alt="Aarav Sharma receiving citation certificate at school ceremony">
          </div>
          <div class="achiever-content">
            <span class="achiever-rank">All-India Rank 04 • Gold Medalist</span>
            <h3 style="margin-top:4px;">Aarav Sharma</h3>
            <div class="achiever-meta">International Mathematics Olympiad (IMO) • Grade 6</div>
            <p style="font-size:0.88rem; margin-top:8px;">
              "Pragyan's geometry visualization sessions taught me to break down non-standard polygons that typically baffle middle schoolers."
            </p>
          </div>
        </div>

        <!-- Achiever 2 -->
        <div class="achiever-card">
          <div class="achiever-photo">
            <img src="images/image-58.png" alt="Ananya Sen receiving gold medal with IEO certificate">
          </div>
          <div class="achiever-content">
            <span class="achiever-rank">International Rank 02 • Trophy</span>
            <h3 style="margin-top:4px;">Ananya Sen</h3>
            <div class="achiever-meta">International English Olympiad (IEO) • Grade 8</div>
            <p style="font-size:0.88rem; margin-top:8px;">
              "The vocabulary etymology modules gave me confidence to analyze convoluted comprehension passages in half the regular time."
            </p>
          </div>
        </div>

        <!-- Achiever 3 -->
        <div class="achiever-card">
          <div class="achiever-photo">
            <img src="images/image-59.png" alt="Riddhi Verma receiving honor medal on academic stage">
          </div>
          <div class="achiever-content">
            <span class="achiever-rank">State Rank 01 • Silver Medalist</span>
            <h3 style="margin-top:4px;">Riddhi Verma</h3>
            <div class="achiever-meta">National Science Olympiad (NSO) • Grade 5</div>
            <p style="font-size:0.88rem; margin-top:8px;">
              "Doing real hands-on circuit experiments in the lab made the physics electromagnetism questions simple and intuitive."
            </p>
          </div>
        </div>

        <!-- Achiever 4 -->
        <div class="achiever-card">
          <div class="achiever-photo">
            <img src="images/image-60.png" alt="Pragyan student delegation celebrating with winning trophies">
          </div>
          <div class="achiever-content">
            <span class="achiever-rank">Zonal Championship Trophy</span>
            <h3 style="margin-top:4px;">Pragyan Foundation Cohort</h3>
            <div class="achiever-meta">National Talent Search & PRMO Delegation • Grade 10</div>
            <p style="font-size:0.88rem; margin-top:8px;">
              "Over 92% of our batch qualified for Stage 2 competitive Olympiads, establishing record institutional performance."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 7: Why Parents Choose Our Academy (6 Icon-Based Benefits, Non-Card) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">INSTITUTIONAL MERIT</span>
        <h2>Why Parents Choose Our Academy</h2>
        <p>A structured academic ecosystem designed to nurture intellectual curiosity, discipline, and measurable performance.</p>
      </div>

      <div class="benefits-icon-grid">
        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h4>Concept-Based Learning</h4>
            <p>We eradicate formula cramming through visual derivations and fundamental principles from day one.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h4>Experienced Faculty</h4>
            <p>Mentored exclusively by subject specialists with proven track records in national Olympiad training.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <h4>Grade-Wise Curriculum</h4>
            <p>Custom pedagogies tailored specifically for primary (1–3), middle (4–6), and secondary (7–10) stages.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div>
            <h4>Regular Assessments</h4>
            <p>Bi-weekly topic evaluations and monthly full-length benchmark tests calibrated to national percentiles.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <h4>Individual Tracking</h4>
            <p>Digital analytics track accuracy, speed per question, and conceptual weaknesses for each enrolled scholar.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div>
            <h4>Parent Progress Updates</h4>
            <p>Structured monthly reports and personalized parent-educator conferences to align home and academy efforts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 8: Our Teaching Environment (Asymmetric Gallery) -->
  <section class="section">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
          <h2>Inside Our Teaching Environment</h2>
          <p>Step inside our purpose-built coaching halls, doubt resolution clinics, and student counseling centers.</p>
        </div>
        <a href="about.html" class="btn btn-outline btn-sm">Explore Academic Facilities →</a>
      </div>

      <div class="asymmetric-gallery">
        <div class="gallery-tile gallery-tile-tall">
          <img src="images/image-17.png" alt="Spacious university-style coaching classroom with faculty addressing students">
          <div class="gallery-caption">
            <span>Modern Lecture Theater</span>
            <strong>Tiered High-Engagement Academic Lecture Amphitheater</strong>
          </div>
        </div>
        <div class="gallery-right-stack">
          <div class="gallery-tile gallery-tile-sub">
            <img src="images/image-16.png" alt="Dedicated teacher helping individual student at study desk">
            <div class="gallery-caption">
              <span>Personalized Support</span>
              <strong>Desk-Side Doubt Resolution Session</strong>
            </div>
          </div>
          <div class="gallery-tile gallery-tile-sub">
            <img src="images/image-18.png" alt="Parent academic counseling desk with institute counselors">
            <div class="gallery-caption">
              <span>Parent Partnership</span>
              <strong>Academic Counseling & Admissions Center</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 9: Parent Testimonials (Interactive Spotlight) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">PARENT PERSPECTIVE</span>
        <h2>Trusted by Parents Across the Country</h2>
        <p>Honest feedback on how our structured Olympiad training elevated their child's academic confidence.</p>
      </div>

      <div class="testimonial-stage">
        <div class="testimonial-spotlight">
          <div>
            <div class="testimonial-quote-mark">“</div>
            <p class="testimonial-quote-text" id="spotlightQuote">
              Pragyan transformed the way my son looks at mathematics. He stopped dreading word problems and now participates enthusiastically in regional math camps. The faculty treats every doubt with genuine academic respect.
            </p>
          </div>
          <div class="testimonial-author-row">
            <div>
              <strong style="display:block; font-size:1.05rem;" id="spotlightAuthor">Dr. Meenakshi Sundaram</strong>
              <span style="font-size:0.84rem; color:var(--text-on-dark-muted);" id="spotlightMeta">Parent of Rohan (Grade 7 Olympiad Scholar)</span>
            </div>
            <div class="demo-badge">Verified Parent Testimonial</div>
          </div>
        </div>

        <div class="testimonial-selector-list">
          <button class="testimonial-tab is-active" data-quote="Pragyan transformed the way my son looks at mathematics. He stopped dreading word problems and now participates enthusiastically in regional math camps. The faculty treats every doubt with genuine academic respect." data-author="Dr. Meenakshi Sundaram" data-meta="Parent of Rohan (Grade 7 Olympiad Scholar)">
            <div>
              <strong>Dr. Meenakshi Sundaram</strong>
              <span>Parent of Grade 7 Student</span>
            </div>
            <span style="color:var(--orange); font-weight:800;">→</span>
          </button>

          <button class="testimonial-tab" data-quote="The weekly diagnostic analytics gave us complete visibility into Diya's logical reasoning progress. Unlike ordinary coaching classes, Pragyan focuses on depth, speed techniques, and conceptual clarity." data-author="Rajeshwar Rao" data-meta="Parent of Diya (Grade 5 Silver Medalist)">
            <div>
              <strong>Rajeshwar Rao</strong>
              <span>Parent of Grade 5 Student</span>
            </div>
            <span style="color:var(--orange); font-weight:800;">→</span>
          </button>

          <button class="testimonial-tab" data-quote="My daughter used to be intimidated by physics numericals in middle school. The practical experiments and visual diagrams in Pragyan's Science Olympiad module completely shifted her perspective." data-author="Sunita Chawla" data-meta="Parent of Kriti (Grade 8 NSO Achiever)">
            <div>
              <strong>Sunita Chawla</strong>
              <span>Parent of Grade 8 Student</span>
            </div>
            <span style="color:var(--orange); font-weight:800;">→</span>
          </button>

          <button class="testimonial-tab" data-quote="The discipline and analytical habits instilled here extend far beyond Olympiad exams. It reflects directly in my son's school performance and his critical thinking skills." data-author="Vikramaditya Pant" data-meta="Parent of Shaurya (Grade 10 Scholar)">
            <div>
              <strong>Vikramaditya Pant</strong>
              <span>Parent of Grade 10 Student</span>
            </div>
            <span style="color:var(--orange); font-weight:800;">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 10: Final Admission CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">ENROLLMENT ADMISSIONS 2026–27</span>
          <h2 style="margin-top:8px;">Begin Your Child's Journey to Academic Mastery</h2>
          <p style="max-width:620px;">
            Schedule an academic diagnostic evaluation today to identify your child's Olympiad aptitude and place them in the optimal grade-wise training cohort.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Diagnostic Evaluation →</a>
          <a href="grades.html" class="btn btn-outline-light">Explore Grade Pathways</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Where Young Minds Become Achievers', 'home', content);
}

// ============================================================================
// 2. HOME PAGE 2 (home-2.html) — STUDENT LEARNING & RESULTS EXPERIENCE
// ============================================================================
function generateHome2() {
  const content = `
  <!-- HERO SECTION: High-Impact Hero with Dynamic Bright/Dark Styling -->
  <section class="hero-h2">
    <img src="images/image-15.png" alt="University lecture hall filled with attentive students during Olympiad session" class="hero-h2-bg">
    <div class="hero-h2-overlay"></div>
    <div class="container hero-h2-inner">
      <div class="hero-h2-copy">
        <div class="demo-badge">INTERACTIVE LEARNING & PRACTICE ENVIRONMENT</div>
        <h1>Build Deep Conceptual Clarity.<br> Master Competitive <span>Olympiads</span>.</h1>
        <p class="lead">
          Experience an intensive, results-oriented academic environment where students in Grades 1 to 10 develop analytical intuition, practice with real competition test papers, and steadily conquer national Olympiad benchmarks.
        </p>
        <div class="btn-group">
          <a href="programs.html" class="btn btn-primary">Explore Learning Programs →</a>
          <a href="practice-tests.html" class="btn btn-outline hero-h2-secondary-btn">Attempt Practice Tests</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: The Learning Experience (Full-Width Editorial Split) -->
  <section class="section section-soft">
    <div class="container editorial-split-reverse">
      <div class="editorial-img-box">
        <img src="images/image-19.png" alt="Faculty member illustrating biological structures on classroom board">
        <div class="editorial-caption-bar">
          <span>In-Depth Conceptual Unpacking</span>
          <small style="color:var(--orange);">Visual Biology & Scientific Laws</small>
        </div>
      </div>
      <div>
        <span class="eyebrow">STUDENT-CENTERED PEDAGOGY</span>
        <h2 style="margin-top:10px;">From Foundational Concepts to Multi-Stage Proofs</h2>
        <p style="margin-top:14px;">
          Real competitive mastery is not an accident of innate talent; it is the natural consequence of disciplined methodology. At Pragyan, students are trained to dissect problems methodically rather than rushing toward quick guesses.
        </p>
        <p style="margin-top:12px;">
          Every lesson connects theory with rigorous application: students first understand the underlying axiom, explore edge cases with peers, and then solve complex past Olympiad problems under teacher mentorship.
        </p>
        <div class="pedagogy-feature-list">
          <div class="pedagogy-feature-card">
            <div class="pedagogy-check-badge">✓</div>
            <div>
              <strong>Structured Problem Deconstruction</strong>
              <p>Teaching students to isolate variables and identify symmetries before applying algorithms.</p>
            </div>
          </div>
          <div class="pedagogy-feature-card">
            <div class="pedagogy-check-badge">✓</div>
            <div>
              <strong>Instant Correction & Alternative Solutions</strong>
              <p>Mentors showcase at least 2 distinct approaches to solve every challenging question.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: Subject Exploration (STRICT 6 TILES - Distinct from Home 1 Cards) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">COMPREHENSIVE CURRICULUM MODULES</span>
        <h2>Explore Our Six Learning Modules</h2>
        <p>A rigorous multidimensional framework training students across numerical, empirical, logical, and verbal disciplines.</p>
      </div>

      <div class="module-grid-6">
        <div class="module-tile">
          <span class="module-num">MODULE 01</span>
          <h3>Mathematics</h3>
          <p>Algebra, Euclidean geometry, modular arithmetic, number theory, and advanced combinatorial counting for IMO & PRMO.</p>
          <a href="mathematics.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>

        <div class="module-tile">
          <span class="module-num">MODULE 02</span>
          <h3>Science</h3>
          <p>Experimental kinematics, chemical equations, cellular biology, and environmental sciences calibrated for NSO and IJSO.</p>
          <a href="science.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>

        <div class="module-tile">
          <span class="module-num">MODULE 03</span>
          <h3>Logical Reasoning</h3>
          <p>Pattern deduction, mirror reflections, series completion, Venn representations, and multi-variable logic puzzles.</p>
          <a href="reasoning.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>

        <div class="module-tile">
          <span class="module-num">MODULE 04</span>
          <h3>English Olympiad</h3>
          <p>Contextual vocabulary, grammatical syntax rules, reading comprehension rhetoric, and verbal fluency for IEO.</p>
          <a href="english.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>

        <div class="module-tile">
          <span class="module-num">MODULE 05</span>
          <h3>Analytical Thinking</h3>
          <p>Mathematical modeling, data interpretation, critical argument evaluation, and cross-subject deduction skills.</p>
          <a href="methodology.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>

        <div class="module-tile">
          <span class="module-num">MODULE 06</span>
          <h3>Problem Solving</h3>
          <p>Strategic elimination, backwards deduction, heuristic reasoning, and speed optimizations under exam constraints.</p>
          <a href="practice-tests.html" class="btn-link" style="margin-top:auto;">Explore Module →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: Inside Our Classrooms (Layered Photographic Composition) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">AUTHENTIC CLASSROOM EXPERIENCES</span>
          <h2>Inside Our Active Learning Classrooms</h2>
          <p>Take an inside look at actual instructional sessions, smartboard demonstrations, and peer discussions.</p>
        </div>
        <a href="faculty.html" class="btn btn-outline btn-sm">Meet Our Educators →</a>
      </div>

      <!-- Modern 3D Coverflow Card Slider -->
      <div class="modern-card-slider-wrapper">
        <button type="button" class="slider-nav-btn slider-prev-btn" aria-label="Previous Classroom Slide">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div class="modern-card-slider-stage" id="classroomCardSlider">
          <div class="slider-card" data-index="0">
            <img src="images/image-23.png" alt="Interactive Smartboard Demonstration">
            <div class="slider-card-overlay">
              <span class="slider-card-badge">DIGITAL RIGOR</span>
              <h3>Interactive Smartboard Sessions</h3>
              <p>Visualizing geometric proofs & coordinate planes in real-time</p>
            </div>
          </div>

          <div class="slider-card" data-index="1">
            <img src="images/image-24.png" alt="Faculty Live Algorithmic Demonstration">
            <div class="slider-card-overlay">
              <span class="slider-card-badge">FACULTY MENTORSHIP</span>
              <h3>Live Problem Deconstruction</h3>
              <p>Senior IIT alumni mentors breaking down complex multi-tier lemmas</p>
            </div>
          </div>

          <div class="slider-card" data-index="2">
            <img src="images/image-26.png" alt="Peer Collaboration Seminar Circle">
            <div class="slider-card-overlay">
              <span class="slider-card-badge">COLLEGIATE SEMINAR</span>
              <h3>Peer Collaborative Circles</h3>
              <p>Solving multi-stage past Olympiad papers in focused scholar cohorts</p>
            </div>
          </div>

          <div class="slider-card" data-index="3">
            <img src="images/image-4.png" alt="Whiteboard Formula Derivations">
            <div class="slider-card-overlay">
              <span class="slider-card-badge">AXIOMATIC BOARDWORK</span>
              <h3>First-Principles Whiteboard Derivations</h3>
              <p>Cultivating deep theoretical intuition without memorization shortcuts</p>
            </div>
          </div>

          <div class="slider-card" data-index="4">
            <img src="images/image-18.png" alt="Attentive Lecture Classroom">
            <div class="slider-card-overlay">
              <span class="slider-card-badge">ACADEMIC FOCUS</span>
              <h3>High-Perception Lecture Cohorts</h3>
              <p>Dedicated question rounds with personalized doubt clearance</p>
            </div>
          </div>
        </div>

        <button type="button" class="slider-nav-btn slider-next-btn" aria-label="Next Classroom Slide">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <!-- Pagination Dots -->
      <div class="slider-pagination-dots" id="classroomSliderDots">
        <button class="slider-dot is-active" data-slide="0" aria-label="Go to slide 1"></button>
        <button class="slider-dot" data-slide="1" aria-label="Go to slide 2"></button>
        <button class="slider-dot" data-slide="2" aria-label="Go to slide 3"></button>
        <button class="slider-dot" data-slide="3" aria-label="Go to slide 4"></button>
        <button class="slider-dot" data-slide="4" aria-label="Go to slide 5"></button>
      </div>
    </div>
  </section>

  <!-- SECTION 5: How Students Improve (Interactive Progress Journey) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">STRUCTURED GROWTH CYCLE</span>
        <h2>How Students Improve Over Time</h2>
        <p>Click each developmental stage below to inspect our proven student progression mechanism.</p>
      </div>

      <div class="progress-stage-tabs">
        <button class="progress-stage-btn is-active" data-heading="Stage 1: Understand Core Concepts" data-text="Students deconstruct textbook formulas into intuitive geometric and arithmetic realities. Mentors eliminate rote memorization by walking students through the mathematical origins of every theorem." data-metric="100% Axiomatic Clarity">
          <span class="stage-step">STEP 01</span>
          <strong>Understand Concepts</strong>
        </button>

        <button class="progress-stage-btn" data-heading="Stage 2: Solve Practice Questions" data-text="Scholars progress through graded problem sets classified by cognitive difficulty: Level 1 (Fundamentals), Level 2 (Olympiad Standard), and Level 3 (National Tier Challenges)." data-metric="400+ Graded Questions / Subject">
          <span class="stage-step">STEP 02</span>
          <strong>Solve Practice</strong>
        </button>

        <button class="progress-stage-btn" data-heading="Stage 3: Attempt Mock Tests" data-text="Students sit for timed simulated examinations replicating the exact layout, question density, and negative marking rules of competitions like IMO, NSO, and PRMO." data-metric="Simulated Exam Rigor">
          <span class="stage-step">STEP 03</span>
          <strong>Attempt Mock Tests</strong>
        </button>

        <button class="progress-stage-btn" data-heading="Stage 4: Identify Weak Areas" data-text="Our diagnostic engine pinpoints the precise sub-topics where accuracy drops under time pressure, distinguishing calculation slips from fundamental misunderstandings." data-metric="Granular Topic Heatmaps">
          <span class="stage-step">STEP 04</span>
          <strong>Identify Weak Areas</strong>
        </button>

        <button class="progress-stage-btn" data-heading="Stage 5: Improve Accuracy" data-text="Targeted remedial doubt sessions and curated correction workbooks retrain student instincts on high-yield, error-prone patterns." data-metric="+35% Precision Rate">
          <span class="stage-step">STEP 05</span>
          <strong>Improve Accuracy</strong>
        </button>

        <button class="progress-stage-btn" data-heading="Stage 6: Achieve Better Results" data-text="Scholars enter the examination hall with calm composure, rapid recognition of core patterns, and the confidence to rank in top national percentiles." data-metric="Top 1% Percentile Ranks">
          <span class="stage-step">STEP 06</span>
          <strong>Achieve Results</strong>
        </button>
      </div>

      <div class="progress-stage-detail">
        <div class="stage-detail-content">
          <span class="stage-detail-badge">METHODOLOGICAL HIGHLIGHT</span>
          <h3 id="stageHeading" style="margin-top:8px;">Stage 1: Understand Core Concepts</h3>
          <p id="stageText" style="margin-top:12px;">
            Students deconstruct textbook formulas into intuitive geometric and arithmetic realities. Mentors eliminate rote memorization by walking students through the mathematical origins of every theorem.
          </p>
        </div>
        <div class="stage-outcome-box">
          <span class="outcome-label">TARGET OUTCOME</span>
          <strong id="stageMetric" class="outcome-metric">100% Axiomatic Clarity</strong>
          <span class="outcome-sub">Benchmark Validated</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 6: Our Assessment Framework -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">OBJECTIVE EVALUATION</span>
        <h2>Our 5-Tier Assessment Framework</h2>
        <p>Continuous diagnostic measurements ensure every student's learning trajectory is tracked with precision.</p>
      </div>

      <div class="table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Assessment Tier</th>
              <th>Evaluation Frequency</th>
              <th>Primary Objective</th>
              <th>Feedback Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Diagnostic Benchmark</strong></td>
              <td>At Enrollment & Term Start</td>
              <td>Baseline skill mapping & appropriate cohort placement</td>
              <td>12-page comprehensive aptitude breakdown report</td>
            </tr>
            <tr>
              <td><strong>Chapter Mastery Quiz</strong></td>
              <td>End of Each Topic</td>
              <td>Verify retention of axioms, definitions & direct derivations</td>
              <td>Instant auto-scored digital feedback with explanations</td>
            </tr>
            <tr>
              <td><strong>Weekly Timed Drills</strong></td>
              <td>Every Saturday</td>
              <td>Develop speed, question triage, and calculation precision</td>
              <td>Classroom rank board & peer percentile statistics</td>
            </tr>
            <tr>
              <td><strong>All-India Mock Olympiads</strong></td>
              <td>Monthly (Sundays)</td>
              <td>Replicate national examination pressure & negative marking</td>
              <td>National percentile rank & subject accuracy heatmap</td>
            </tr>
            <tr>
              <td><strong>Final Sprint Simulator</strong></td>
              <td>3 Weeks Prior to Olympiads</td>
              <td>Full-scale past paper tests under strict invigilation</td>
              <td>1-on-1 mentor strategy session & formula recap</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- SECTION 7: Learning Resources Preview (STRICT 4 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">CURATED STUDY MATERIAL</span>
          <h2>Learning Resources Preview</h2>
          <p>Access our proprietary worksheets, practice question banks, and authentic Olympiad mock test papers.</p>
        </div>
        <a href="resources.html" class="btn btn-primary btn-sm">Browse All Resources →</a>
      </div>

      <div class="grid-2x2">
        <!-- Resource 1 -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Mathematics Series</span>
            <img src="images/image-50.png" alt="Students writing advanced math equations on blackboard">
          </div>
          <div class="program-card-body">
            <h3>Advanced Mathematics Worksheets</h3>
            <p>Comprehensive problem sets covering polynomial roots, coordinate geometry, Euclidean proofs, and modular number theory.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; color:var(--text-muted); font-weight:700;">Grades 4–10 • PDF Ready</span>
              <a href="resources.html" class="btn-link">Access Mathematics Vault →</a>
            </div>
          </div>
        </article>

        <!-- Resource 2 -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Science Series</span>
            <img src="images/image-63.png" alt="Students working in laboratory with microscope and glassware">
          </div>
          <div class="program-card-body">
            <h3>Science Practice Question Sets</h3>
            <p>Experimental questions focusing on Newtonian motion, chemical equilibria, cellular genetics, and optics principles.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; color:var(--text-muted); font-weight:700;">Grades 3–10 • Practical Sets</span>
              <a href="resources.html" class="btn-link">Access Science Question Sets →</a>
            </div>
          </div>
        </article>

        <!-- Resource 3 -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Aptitude Series</span>
            <img src="images/image-54.png" alt="Students in floor discussion circle solving reasoning puzzles">
          </div>
          <div class="program-card-body">
            <h3>Logical Reasoning Question Sets</h3>
            <p>Categorized non-verbal matrices, cube foldings, sequence predictions, syllogistic logic, and spatial pattern drills.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; color:var(--text-muted); font-weight:700;">Grades 1–10 • Daily Challenges</span>
              <a href="resources.html" class="btn-link">Access Reasoning Challenges →</a>
            </div>
          </div>
        </article>

        <!-- Resource 4 -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Exam Simulation</span>
            <img src="images/image-8.png" alt="Student solving IMO mock paper late at study desk under lamp">
          </div>
          <div class="program-card-body">
            <h3>Olympiad Mock Examination Papers</h3>
            <p>Full-length papers modeled after official IMO, NSO, and PRMO formats with step-by-step scoring keys and video solutions.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; color:var(--text-muted); font-weight:700;">20 Past Papers • Solved</span>
              <a href="practice-tests.html" class="btn-link">Attempt Mock Exam Simulator →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 8: Student Performance Showcase -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">ACADEMIC DATA</span>
        <h2>Student Performance Showcase</h2>
        <p>Measurable academic trajectory based on student diagnostic cohorts over a 6-month Olympiad training cycle.</p>
      </div>

      <div class="kpi-grid-4">
        <div class="kpi-widget">
          <div class="kpi-val">+34.8%</div>
          <div class="kpi-lbl">Average Score Improvement</div>
          <div class="progress-track"><div class="progress-fill" style="width:78%;"></div></div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">91.4%</div>
          <div class="kpi-lbl">Concept Retention Index</div>
          <div class="progress-track"><div class="progress-fill" style="width:91%;"></div></div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">48 Sec</div>
          <div class="kpi-lbl">Average Time Per Question</div>
          <div class="progress-track"><div class="progress-fill" style="width:65%;"></div></div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">98.2%</div>
          <div class="kpi-lbl">School Math & Science Grade A+</div>
          <div class="progress-track"><div class="progress-fill" style="width:98%;"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 9: Parent and Student Experiences (Alternating Testimonials) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">COMMUNITY VOICES</span>
        <h2>Parent and Student Experiences</h2>
        <p>Demonstrating how rigorous academic mentorship builds genuine enthusiasm for lifelong learning.</p>
      </div>

      <div class="testimonial-grid-2x2">
        <div class="alt-testimonial-card card-light">
          <div class="testimonial-card-top">
            <div class="star-rating" aria-label="5 out of 5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="demo-badge">Verified Parent Feedback</span>
          </div>
          <p class="testimonial-quote">
            "The difference between school tuitions and Pragyan is night and day. My daughter wasn't simply told formulas; she was shown why circles behave the way they do and how to find shortcuts in coordinate geometry. She secured Zonal Rank 3 in IMO."
          </p>
          <div class="testimonial-footer">
            <div class="testimonial-author-avatar avatar-orange">AM</div>
            <div>
              <strong class="author-name">Anirban Mukherjee</strong>
              <span class="author-role">Father of Tanya (Grade 9 Scholar)</span>
            </div>
          </div>
        </div>

        <div class="alt-testimonial-card card-dark">
          <div class="testimonial-card-top">
            <div class="star-rating" aria-label="5 out of 5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="demo-badge badge-invert">Student Reflection</span>
          </div>
          <p class="testimonial-quote">
            "I used to get stuck on lengthy question statements in the Science Olympiad. The teachers here trained me to extract the governing physical law within five seconds. It made solving the IJSO Stage 1 paper feel natural."
          </p>
          <div class="testimonial-footer">
            <div class="testimonial-author-avatar avatar-dark">SV</div>
            <div>
              <strong class="author-name">Siddharth V.</strong>
              <span class="author-role">Student Scholar (Grade 10 · IJSO Stage 1)</span>
            </div>
          </div>
        </div>

        <div class="alt-testimonial-card card-dark">
          <div class="testimonial-card-top">
            <div class="star-rating" aria-label="5 out of 5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="demo-badge badge-invert">Parent Testimonial</span>
          </div>
          <p class="testimonial-quote">
            "What impressed us most was the weekly diagnostic feedback. We didn't have to guess how Arjun was preparing; the analytics showed exact accuracy speeds by topic. He qualified PRMO on his very first attempt."
          </p>
          <div class="testimonial-footer">
            <div class="testimonial-author-avatar avatar-dark">KN</div>
            <div>
              <strong class="author-name">Kavya Nair</strong>
              <span class="author-role">Mother of Arjun (Grade 7 PRMO Qualifier)</span>
            </div>
          </div>
        </div>

        <div class="alt-testimonial-card card-light">
          <div class="testimonial-card-top">
            <div class="star-rating" aria-label="5 out of 5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="demo-badge">Olympiad Medalist</span>
          </div>
          <p class="testimonial-quote">
            "The peer problem-solving circles here are unmatched. Discussing three different proof techniques for a single number theory puzzle made me fall in love with pure mathematics. Proud to represent our academy at NMTC!"
          </p>
          <div class="testimonial-footer">
            <div class="testimonial-author-avatar avatar-orange">RM</div>
            <div>
              <strong class="author-name">Rohan Mehra</strong>
              <span class="author-role">NMTC National Finalist (Grade 8)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 10: Admissions and Enrollment -->
  <section class="section section-soft">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">ENROLLMENT INVITATION</span>
          <h2 style="margin-top:8px;">Ready to Elevate Your Academic Trajectory?</h2>
          <p style="max-width:620px;">
            Join thousands of enthusiastic young learners who have transformed their competitive problem-solving skills at Pragyan Olympiad Academy.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Admission Consultation →</a>
          <a href="dashboard.html" class="btn btn-outline-light">Explore Student Demo Portal</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Student Learning & Results Experience', 'home-2', content);
}

// ============================================================================
// 3. ABOUT US PAGE (about.html)
// ============================================================================
function generateAbout() {
  const content = `
  <!-- PAGE HERO -->
  <section class="page-hero">
    <img src="images/image-20.png" alt="Modern academic lecture amphitheater and smart learning facility at Pragyan Olympiad Academy" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>About Institution</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">INSTITUTIONAL HERITAGE & MISSION</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">About Pragyan: 18 Years of Olympiad Excellence</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Established in 2008, Pragyan Olympiad Academy has set the gold standard in foundational coaching for competitive Mathematics (IMO, PRMO), Science (NSO, IJSO), and Reasoning examinations across India.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 2: Our Story -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">OUR GENESIS</span>
        <h2 style="margin-top:10px;">Founded on the Belief That Conceptual Depth Unlocks Genius</h2>
        <p style="margin-top:14px;">
          Pragyan Olympiad Academy was established by a cohort of passionate educators and Olympiad medalists who recognized a profound void in traditional school tutoring: students were memorizing formulas without understanding their axiomatic elegance.
        </p>
        <p style="margin-top:12px;">
          Over the past 18 years, our academy has evolved from a single seminar classroom in South Delhi into a nationally respected institution with over 14,800 scholars trained. Our alumni today study at top technological institutes and universities worldwide.
        </p>
        <div style="margin-top:20px; padding:18px 20px; border-radius:var(--radius-md); background-color:var(--bg-soft); border-left:3px solid var(--orange);">
          <strong style="display:block; color:var(--black);">Institutional Motto:</strong>
          <span style="font-style:italic; color:var(--text-muted); font-size:0.92rem;">"Prajnaanam Brahma" — Consciousness and Analytical Insight is the Highest Excellence.</span>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-27.png" alt="Mentor in blue plaid shirt actively answering student question in classroom">
          <div class="editorial-caption-bar">
            <span>Classroom Interactive Discourse</span>
            <small style="color:var(--orange);">Active Inquiry Pedagogy</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: Vision and Mission (Two Distinct Editorial Panels) -->
  <section class="section section-soft">
    <div class="container">
      <div class="grid-2x2" style="gap:32px;">
        <div class="vision-card">
          <span class="eyebrow">STRATEGIC VISION</span>
          <h3 style="margin-top:8px;">Our Vision</h3>
          <p style="margin-top:12px; line-height:1.7;">
            To be India's premier academic center for young scholars, recognized internationally for nurturing rigorous scientific inquiry, mathematical elegance, and ethical competitive leadership from early childhood through secondary education.
          </p>
        </div>
        <div class="mission-card">
          <span class="eyebrow" style="color:var(--orange);">OPERATIONAL MISSION</span>
          <h3 style="margin-top:8px;">Our Mission</h3>
          <p style="margin-top:12px; line-height:1.7;">
            To empower students with robust conceptual foundations, critical thinking frameworks, and examination composure through passionate mentorship, verified diagnostic analytics, and inspiring educational environments.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: Our Educational Philosophy -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">CORE PRINCIPLES</span>
        <h2>Conceptual Learning Over Rote Memorization</h2>
        <p>How our pedagogical values differ fundamentally from conventional coaching mills and rote-learning tuition centers.</p>
      </div>

      <div class="grid-3x2">
        <div class="pillar-item">
          <h4>Axiomatic First Steps</h4>
          <p>Every mathematical or scientific concept is derived from intuitive foundational axioms before shorthand formulas are introduced.</p>
        </div>
        <div class="pillar-item">
          <h4>Socratic Questioning</h4>
          <p>Educators guide students toward discovering solutions rather than spoon-feeding pre-packaged answers.</p>
        </div>
        <div class="pillar-item">
          <h4>Multi-Disciplinary Synthesis</h4>
          <p>Connecting algebra with geometry and physics with calculus so students see the unifying beauty of scientific thought.</p>
        </div>
        <div class="pillar-item">
          <h4>Failure as a Diagnostic</h4>
          <p>Errors in practice tests are celebrated as vital diagnostic indicators, showing precisely what cognitive step was missed.</p>
        </div>
        <div class="pillar-item">
          <h4>Cognitive Age Calibration</h4>
          <p>Curricula are carefully tailored to developmental stages: concrete manipulation for primary, formal proofs for secondary.</p>
        </div>
        <div class="pillar-item">
          <h4>Psychological Fortitude</h4>
          <p>Students practice meditation, time pacing, and emotional regulation to handle competitive exam hall pressure calmly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: Academic Expertise & SECTION 6: Milestones Timeline -->
  <section class="section section-soft">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">OUR PROGRESSION</span>
        <h2 style="margin-top:10px;">Eighteen Years of Institutional Milestones</h2>
        <p style="margin-top:14px; margin-bottom:28px;">
          From humble beginnings to an institution trusted by thousands of ambitious families across India.
        </p>

        <div class="timeline-list">
          <div class="timeline-entry">
            <span class="timeline-year">2008 — FOUNDATION</span>
            <h4 style="margin-top:4px;">Academy Established in New Delhi</h4>
            <p style="font-size:0.88rem;">Inaugurated with 35 students and two specialized faculty in Mathematics and Natural Sciences.</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">2012 — FIRST IMO PODIUM</span>
            <h4 style="margin-top:4px;">National Olympiad Breakthrough</h4>
            <p style="font-size:0.88rem;">Pragyan scholars bagged 4 Zonal Gold Medals in the International Mathematics Olympiad (IMO).</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">2017 — EXPANSION & STEM LAB</span>
            <h4 style="margin-top:4px;">Launch of Experimental Science Center</h4>
            <p style="font-size:0.88rem;">Introduced hands-on lab apparatus, robotics foundation kits, and digital interactive lecture boards.</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">2022 — DIGITAL DIAGNOSTICS</span>
            <h4 style="margin-top:4px;">Proprietary Learning Analytics</h4>
            <p style="font-size:0.88rem;">Launched student portal providing granular question-level speed and accuracy analytics for parents.</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">2026 — PRESENT DAY</span>
            <h4 style="margin-top:4px;">1,240+ All-India Medals & Growing</h4>
            <p style="font-size:0.88rem;">Consistently leading competitive foundation rankings with scholars across Grades 1 through 10.</p>
          </div>
        </div>
      </div>

      <div>
        <span class="eyebrow">FACULTY EXCELLENCE</span>
        <h2 style="margin-top:10px;">Pedagogical Authority Across Disciplines</h2>
        <p style="margin-top:14px;">
          Our academic council brings together former Olympiad trainers, university professors, and PhD scholars who share an unwavering dedication to mentoring young minds.
        </p>
        <div style="margin-top:22px; display:flex; flex-direction:column; gap:16px;">
          <div style="background-color:var(--white); padding:20px; border-radius:var(--radius-md); border:1px solid var(--grey-light);">
            <strong style="color:var(--orange-deep);">Mathematics Department:</strong>
            <p style="font-size:0.88rem; margin-top:4px;">Led by former national Olympiad camp mentors specializing in combinatorial proofs, number theory, and PRMO/RMO training.</p>
          </div>
          <div style="background-color:var(--white); padding:20px; border-radius:var(--radius-md); border:1px solid var(--grey-light);">
            <strong style="color:var(--orange-deep);">Science & Physics Department:</strong>
            <p style="font-size:0.88rem; margin-top:4px;">Staffed by experimental physicists and chemistry educators dedicated to conceptual lab demonstrations and IJSO syllabus mastery.</p>
          </div>
          <div style="background-color:var(--white); padding:20px; border-radius:var(--radius-md); border:1px solid var(--grey-light);">
            <strong style="color:var(--orange-deep);">Mental Ability & Reasoning Council:</strong>
            <p style="font-size:0.88rem; margin-top:4px;">Cognitive scientists and puzzle architects training students in rapid pattern classification and spatial transformation.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 7: Teaching Infrastructure (STRICT 4 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">STATE-OF-THE-ART PREMISES</span>
        <h2>Teaching Infrastructure Designed for Focused Scholarship</h2>
        <p>Explore our ergonomic learning spaces designed to facilitate intense concentration, peer discussion, and modern digital instruction.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Study Facility</span>
            <img src="images/image-28.png" alt="Quiet study cubicle library with student carrels and focused scholars">
          </div>
          <div class="program-card-body">
            <h3>Individual Study Cubicle Library</h3>
            <p>Sound-dampened private study carrels with ergonomic seating and reference literature for intense revision.</p>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Instruction Hall</span>
            <img src="images/image-29.png" alt="Digital high-tech classroom with white individual student desks">
          </div>
          <div class="program-card-body">
            <h3>Digital Smart Classroom</h3>
            <p>High-resolution projection and individual white desks configured for interactive problem-solving seminars.</p>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Parent & Student Hub</span>
            <img src="images/image-39.png" alt="Modern welcoming academic reception and student counseling lounge">
          </div>
          <div class="program-card-body">
            <h3>Academic Counseling Lounge</h3>
            <p>Comfortable consultation suites where mentors review diagnostic performance reports with parents.</p>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Mathematics Lab</span>
            <img src="images/image-21.png" alt="Faculty member at digital smartboard explaining geometry theorems">
          </div>
          <div class="program-card-body">
            <h3>Interactive Mathematics Studio</h3>
            <p>Touchscreen digital blackboards where educators visualize dynamic geometry tangents and algebraic functions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 8: Our Commitment to Students (6 Compact Icon-Based Benefits) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">OUR PROMISE</span>
        <h2>Our Institutional Commitment to Every Enrolled Scholar</h2>
        <p>Six foundational pillars that govern our mentorship, student care, and educational integrity.</p>
      </div>

      <div class="benefits-icon-grid">
        <div class="benefit-row">
          <div class="benefit-icon-box">01</div>
          <div>
            <h4>Zero Compromise on Quality</h4>
            <p>Every lecture is delivered by verified subject educators, never junior assistants or inexperienced tutors.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">02</div>
          <div>
            <h4>Absolute Transparency</h4>
            <p>Parents receive unmodified test scores, attendance logs, and question-by-question timing breakdowns.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">03</div>
          <div>
            <h4>Individual Pace Accommodation</h4>
            <p>Scholars who need deeper reinforcement in a particular chapter receive dedicated one-on-one desk support.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">04</div>
          <div>
            <h4>No Rote Memorization</h4>
            <p>We forbid unproven formula memorization; every technique taught is grounded in mathematical proofs.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">05</div>
          <div>
            <h4>Safe & Inspiring Environment</h4>
            <p>Premises feature biometric access, full camera surveillance, and supportive academic counselors.</p>
          </div>
        </div>

        <div class="benefit-row">
          <div class="benefit-icon-box">06</div>
          <div>
            <h4>Lifelong Scientific Temper</h4>
            <p>We nurture intellectual confidence that stays with scholars through higher studies and research careers.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 9 & 10: Leadership CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">GET STARTED</span>
          <h2 style="margin-top:8px;">Experience the Pragyan Academic Difference</h2>
          <p style="max-width:620px;">
            Speak directly with our academic deans and discover how our grade-wise coaching can ignite your child's passion for mathematics and science.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book an Academic Consultation →</a>
          <a href="faculty.html" class="btn btn-outline-light">Meet Faculty Team</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('About Our Institution', 'about', content);
}

// ============================================================================
// 4. OUR PROGRAMS PAGE (programs.html)
// ============================================================================
function generatePrograms() {
  const content = `
  <!-- PAGE HERO -->
  <section class="page-hero">
    <img src="images/image-2.png" alt="Students writing competitive Olympiad foundation test paper in classroom" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Programs Catalogue</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">COMPREHENSIVE FOUNDATION TRACKS (GRADES 1 TO 10)</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">Olympiad Coaching Programs (Grades 1 to 10)</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Explore our structured Olympiad training curriculum spanning Mathematics, Natural Sciences, Logical Reasoning, and English, systematically mapped for Grades 1 through 10.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 2: Program Introduction -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">CURRICULUM ARCHITECTURE</span>
        <h2>Why Olympiad Foundation Training Matters</h2>
        <p>
          Standard school curricula typically emphasize procedural repetition and descriptive answers. In contrast, national and international Olympiads challenge a student's cognitive depth, speed, intuition, and multi-step deduction.
        </p>
        <p style="margin-top:12px;">
          Our programs bridge this critical divide. By introducing competitive problem-solving early, we instill mathematical agility, scientific skepticism, and confident examination habits that benefit school exams, Board results, and future competitive milestones like JEE, NEET, and NTSE.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 3: Subject Program Catalogue (STRICT 6 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">SIX ACADEMIC TRACKS</span>
        <h2>Our Subject Program Catalogue</h2>
        <p>Each program features dedicated textbooks, weekly assessments, and diagnostic feedback.</p>
      </div>

      <div class="grid-3x2">
        <!-- Prog 1: Math -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-9.png" alt="Passionate mathematics mentor demonstrating algebra equations on blackboard">
          </div>
          <div class="program-card-body">
            <h3>Mathematics Olympiad</h3>
            <p>Rigorous training for IMO, PRMO, NMTC, and Kangourou Sans Frontières with emphasis on number theory and Euclidean proofs.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–10</span>
              <a href="mathematics.html" class="btn-link">Explore Mathematics Syllabus →</a>
            </div>
          </div>
        </article>

        <!-- Prog 2: Science -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 3 – 10</span>
            <img src="images/image-55.png" alt="Science teacher performing live physics demonstration for students">
          </div>
          <div class="program-card-body">
            <h3>Science Olympiad</h3>
            <p>Preparation for NSO, NSEJS, and IJSO covering mechanics, thermodynamics, chemical reaction stoichiometry, and genetics.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 3–10</span>
              <a href="science.html" class="btn-link">Explore Science Syllabus →</a>
            </div>
          </div>
        </article>

        <!-- Prog 3: Reasoning -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-12.png" alt="Students writing reasoning aptitude test in structured classroom">
          </div>
          <div class="program-card-body">
            <h3>Logical Reasoning</h3>
            <p>Mastery over mental ability, non-verbal spatial reasoning, coding-decoding, syllogisms, and algorithmic thinking.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–10</span>
              <a href="reasoning.html" class="btn-link">Explore Reasoning Syllabus →</a>
            </div>
          </div>
        </article>

        <!-- Prog 4: English -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 10</span>
            <img src="images/image-38.png" alt="Students in group discussion reading English Olympiad materials">
          </div>
          <div class="program-card-body">
            <h3>English Olympiad</h3>
            <p>Lexical acquisition, grammar syntax, reading speed, and contextual reasoning for the International English Olympiad (IEO).</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–10</span>
              <a href="english.html" class="btn-link">Explore English Syllabus →</a>
            </div>
          </div>
        </article>

        <!-- Prog 5: STEM Robotics -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 5 – 9</span>
            <img src="images/image-53.png" alt="Students assembling robotics circuit board and sensors with instructor">
          </div>
          <div class="program-card-body">
            <h3>STEM & Practical Science</h3>
            <p>Applied robotics, sensor logic, circuit assembly, and empirical science workshops complementing theoretical Olympiad study.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 5–9</span>
              <a href="science.html" class="btn-link">Explore Science Track →</a>
            </div>
          </div>
        </article>

        <!-- Prog 6: Competitive Sprint -->
        <article class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 8 – 10</span>
            <img src="images/image-33.png" alt="Exam hall with invigilator supervising competitive test session">
          </div>
          <div class="program-card-body">
            <h3>Competitive Olympiad Sprint</h3>
            <p>Intensive timed test series, previous 15-year papers review, and time-triage strategy for PRMO, NSEJS, and Stage 2 exams.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 8–10</span>
              <a href="practice-tests.html" class="btn-link">Attempt Mock Test Series →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 4 & 5: Grade-Based Learning Structure & Compatibility Matrix -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">GRADE MATRIX</span>
        <h2>Subject and Grade Compatibility Matrix</h2>
        <p>Review how our programs align across Grade 1 through Grade 10 developmental milestones.</p>
      </div>

      <div class="table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Developmental Stage</th>
              <th>Grade Band</th>
              <th>Core Focus Areas</th>
              <th>Target Competitions</th>
              <th>Weekly Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Foundation Stage</strong></td>
              <td>Grades 1 – 3</td>
              <td>Number play, shape properties, visual patterns & vocabulary</td>
              <td>IMO Level 1, NSO Level 1, IEO</td>
              <td>4.0 Hours</td>
            </tr>
            <tr>
              <td><strong>Development Stage</strong></td>
              <td>Grades 4 – 6</td>
              <td>Fractions, prime factors, scientific laws, spatial rotations</td>
              <td>IMO, NSO, UIEO, NMTC Primary</td>
              <td>6.0 Hours</td>
            </tr>
            <tr>
              <td><strong>Advanced Foundation</strong></td>
              <td>Grades 7 – 8</td>
              <td>Algebraic proofs, coordinate geometry, mechanics, chemistry</td>
              <td>PRMO, NMTC Sub-Junior, NSO Level 2</td>
              <td>8.0 Hours</td>
            </tr>
            <tr>
              <td><strong>Competitive Preparation</strong></td>
              <td>Grades 9 – 10</td>
              <td>Calculus concepts, combinatorics, NSEJS, NTSE & IJSO</td>
              <td>RMO, INMO, NSEJS, IJSO, NTSE</td>
              <td>10.0 Hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- SECTION 9 & 10: Parent Guidance & FAQ Accordion -->
  <section class="section">
    <div class="container">
      <div class="editorial-split">
        <div>
          <span class="eyebrow">GUIDANCE FOR PARENTS</span>
          <h2 style="margin-top:10px;">How to Choose the Right Olympiad Track</h2>
          <p style="margin-top:14px;">
            Every child exhibits unique cognitive inclinations. While some thrive on abstract numerical proofs, others shine when visualizing mechanical systems or reading complex literature.
          </p>
          <p style="margin-top:12px;">
            We recommend all new applicants sit for our <strong>Pragyan Diagnostic Evaluation</strong>. This 90-minute assessment pinpoints whether a single-subject specialization (e.g. Pure Mathematics) or our balanced 4-Subject Foundation Track is optimal for their stage.
          </p>
          <div style="margin-top:24px;">
            <a href="grades.html" class="btn btn-primary btn-sm">Explore Grade-Wise Roadmaps →</a>
          </div>
        </div>

        <div>
          <span class="eyebrow">COMMON QUESTIONS</span>
          <h3 style="margin-top:10px; margin-bottom:18px;">Frequently Asked Questions</h3>
          <div class="accordion" data-single="true">
            <div class="accordion-item is-open">
              <button class="accordion-trigger">
                Will Olympiad coaching interfere with school exams?
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <div class="accordion-panel">
                No. In fact, our curriculum deepens school syllabus concepts. Over 96% of our enrolled students consistently secure A+ grades in school mathematics and science tests because their conceptual foundation is far superior.
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger">
                At what age or grade should a student start?
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <div class="accordion-panel">
                We enroll children as early as Grade 1. In primary stages (Grades 1–3), the emphasis is purely on cognitive play, puzzles, and curiosity, creating fearless learners early on.
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger">
                How often are parent progress reviews held?
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <div class="accordion-panel">
                Parents receive automated monthly diagnostic report cards via the student portal and can book 1-on-1 counseling conferences with faculty mentors after each major benchmark assessment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 11: CTA -->
  <section class="section section-soft">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">APPLY TODAY</span>
          <h2 style="margin-top:8px;">Enroll in the Upcoming Foundation Cohort</h2>
          <p style="max-width:620px;">
            Seats are strictly capped at 25 students per cohort to guarantee personalized desk-side attention.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Apply for Diagnostic Test →</a>
          <a href="grades.html" class="btn btn-outline-light">Select Your Grade Pathway</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Our Programs Directory', 'programs', content);
}

// Write to files
fs.writeFileSync(path.join(rootDir, 'index.html'), generateIndex());
fs.writeFileSync(path.join(rootDir, 'home-2.html'), generateHome2());
fs.writeFileSync(path.join(rootDir, 'about.html'), generateAbout());
fs.writeFileSync(path.join(rootDir, 'programs.html'), generatePrograms());

console.log('Successfully generated index.html, home-2.html, about.html, programs.html');

