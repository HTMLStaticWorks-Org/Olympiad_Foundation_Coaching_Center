const fs = require('fs');
const path = require('path');
const { wrapHtml, rootDir } = require('./common');

// ============================================================================
// 10. RESULTS & ACHIEVEMENTS (results.html)
// ============================================================================
function generateResults() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-31.png" alt="Full examination auditorium during national Olympiad testing session" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Results & Achievements</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">VERIFIED ALL-INDIA RANKINGS & PODIUMS</span>
        <h1 style="color:var(--white); margin-top:8px;">Olympiad Results, Medals & All-India Ranks</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Review our students' verified podium achievements, All-India ranks, and competitive medals in IMO, NSO, IEO, and PRMO.
        </p>
        <div style="margin-top:20px; display:flex; justify-content:center;">
          <span class="demo-badge">All Student Achievement Data Validated for Demonstration</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ACHIEVEMENT STATS SECTION (LOCATED CLEARLY BELOW HERO WITH VISIBLE SPACING) -->
  <section class="section results-stats-section">
    <div class="container">
      <div class="results-stats-panel">
        <div class="stats-grid-4">
          <div class="stat-block">
            <div class="stat-number">128<span class="stat-accent"></span></div>
            <div class="stat-title">Gold Medals</div>
            <div class="stat-caption">National & International Olympiad Tier 1</div>
          </div>
          <div class="stat-block">
            <div class="stat-number">315<span class="stat-accent"></span></div>
            <div class="stat-title">Silver & Bronze Medals</div>
            <div class="stat-caption">State and Zonal competitive honors</div>
          </div>
          <div class="stat-block">
            <div class="stat-number">42<span class="stat-accent"></span></div>
            <div class="stat-title">Top 10 All-India Ranks</div>
            <div class="stat-caption">In Mathematics, Science, and Reasoning</div>
          </div>
          <div class="stat-block">
            <div class="stat-number">98.6<span class="stat-accent">%</span></div>
            <div class="stat-title">Qualification Ratio</div>
            <div class="stat-caption">Of enrolled scholars qualified for Stage 2</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3 & 4: MAIN RESULTS DIRECTORY (STRICT 6 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">PODIUM ACHIEVERS 2025–26</span>
        <h2>Top Olympiad Rank Holders</h2>
        <p>Representative student achievement profiles demonstrating structured preparation excellence.</p>
      </div>

      <div class="grid-3x2">
        <!-- Achiever Card 1 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">All-India Rank 01 • Gold Medal</span>
            <h3 style="margin-top:8px;">Kavya Krishnan</h3>
            <div class="achiever-meta">International Mathematics Olympiad (IMO) • Grade 8</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Secured 100% raw score in Level 1 and International Gold in Level 2. Mentored in advanced number theory and Euclidean proofs.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">Score: 60/60 • Level 2</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>

        <!-- Achiever Card 2 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">International Rank 03 • Bronze</span>
            <h3 style="margin-top:8px;">Aditya Vikram</h3>
            <div class="achiever-meta">National Science Olympiad (NSO) • Grade 9</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Cleared IJSO Stage 1 and qualified for the National Physics Camp. Excelled in experimental kinematics and optics derivations.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">Score: 58/60 • NSO Stage 2</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>

        <!-- Achiever Card 3 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">Zonal Rank 01 • Trophy</span>
            <h3 style="margin-top:8px;">Tanvi Deshmukh</h3>
            <div class="achiever-meta">International English Olympiad (IEO) • Grade 6</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Demonstrated flawless reading comprehension pacing and achieved full marks in the Achievers Section with advanced syntax mastery.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">Score: 50/50 • IEO Final</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>

        <!-- Achiever Card 4 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">All-India Rank 05 • Gold Medal</span>
            <h3 style="margin-top:8px;">Devansh Singhal</h3>
            <div class="achiever-meta">PRMO & Pre-Regional Math Olympiad • Grade 10</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Solved 28 out of 30 advanced PRMO proof problems. Received special certificate of mathematical merit from the regional board.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">PRMO Stage 2 Qualifier</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>

        <!-- Achiever Card 5 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">State Rank 02 • Silver Medal</span>
            <h3 style="margin-top:8px;">Meera Nambiar</h3>
            <div class="achiever-meta">National Talent Search & Mental Ability • Grade 7</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Achieved 99.8 percentile in Mental Ability Test (MAT) with rapid figure matrix deconstruction and spatial cube folding.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">Score: 98/100 • MAT</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>

        <!-- Achiever Card 6 -->
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="achiever-rank">All-India Rank 07 • Medalist</span>
            <h3 style="margin-top:8px;">Ishaan Agarwal</h3>
            <div class="achiever-meta">NSEJS (Junior Science Olympiad) • Grade 10</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              Qualified for INJSO Stage 2 national evaluation. Special recognition for organic mechanism accuracy in multi-step reactions.
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">INJSO National Camp</span>
              <span class="demo-badge">Verified Score</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 5 & 6: SUBJECT-WISE RESULTS WITH PHOTOGRAPHIC EVIDENCE -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">DISCIPLINE ANALYSIS</span>
        <h2>Subject-Wise Performance Breakdown</h2>
        <p>Real coaching classroom sessions driving our exceptional national qualifying percentiles.</p>
      </div>

      <div class="editorial-split" style="margin-bottom:44px;">
        <div>
          <span class="eyebrow">PHYSICAL SCIENCES</span>
          <h3 style="margin-top:8px;">Physics & Astronomy Olympiad Triumphs</h3>
          <p style="margin-top:12px;">
            Our science scholars undergo extensive lecture demonstrations connecting theoretical mechanics, gravitational orbits, and ray optics with rigorous mathematical models.
          </p>
          <div style="margin-top:18px; padding:16px; border-radius:var(--radius-sm); background-color:var(--white); border-left:3px solid var(--orange);">
            <strong>NSO Level 2 Qualification Rate: 94.2%</strong>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Over 180 scholars qualified for national merit certificates in the 2025–26 academic cycle.</p>
          </div>
        </div>
        <div>
          <div class="editorial-img-box">
            <img src="images/image-62.png" alt="Physics educator illustrating orbital velocity and trajectory formulas on digital panel">
            <div class="editorial-caption-bar">
              <span>Mechanics & Gravitation Class</span>
              <small style="color:var(--orange);">NSO Stage 2 Training</small>
            </div>
          </div>
        </div>
      </div>

      <div class="editorial-split-reverse">
        <div>
          <div class="editorial-img-box">
            <img src="images/image-64.png" alt="Mathematics educator teaching coordinate geometry and tangent lines on interactive digital board">
            <div class="editorial-caption-bar">
              <span>Coordinate Geometry Lecture</span>
              <small style="color:var(--orange);">PRMO / IMO Proofs</small>
            </div>
          </div>
        </div>
        <div>
          <span class="eyebrow">PURE MATHEMATICS</span>
          <h3 style="margin-top:8px;">Mathematics Olympiad Benchmark Records</h3>
          <p style="margin-top:12px;">
            From elementary arithmetic progressions in Grade 4 to coordinate geometry proofs in Grade 10, our scholars consistently outperform national averages.
          </p>
          <div style="margin-top:18px; padding:16px; border-radius:var(--radius-sm); background-color:var(--white); border-left:3px solid var(--black);">
            <strong>IMO Zonal Podium Rate: 88.6%</strong>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">Students achieve top 100 ranks across Delhi-NCR, Maharashtra, and Karnataka zones.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 7: Student Achievement Gallery Showcase -->
  <section class="section">
    <div class="container">
      <div class="editorial-split">
        <div>
          <span class="eyebrow">NATIONAL EXAMINATION SIMULATION</span>
          <h2 style="margin-top:10px;">The Crucible of Rigorous Practice</h2>
          <p style="margin-top:14px;">
            Behind every gold medal lies hundreds of hours spent in simulated competitive examination halls, developing unwavering focus, timing discipline, and the ability to verify calculations methodically.
          </p>
          <div style="margin-top:24px;">
            <a href="success-stories.html" class="btn btn-primary btn-sm">Read Full Success Stories →</a>
          </div>
        </div>
        <div>
          <div class="editorial-img-box">
            <img src="images/image-32.png" alt="Tiered lecture amphitheater filled with scholars writing competitive mock Olympiad exam">
            <div class="editorial-caption-bar">
              <span>Full-Scale All-India Mock Session</span>
              <small style="color:var(--orange);">Exam Composure Simulator</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section-soft">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">JOIN THE HONORS ROLL</span>
          <h2 style="margin-top:8px;">Become Our Next National Olympiad Achiever</h2>
          <p style="max-width:620px;">
            Enroll in our foundation batches and let our seasoned faculty guide you toward your own competitive breakthrough.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Apply for Admissions →</a>
          <a href="dashboard.html" class="btn btn-outline-light">Student Dashboard</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Results & Achievements', 'results', content);
}

// ============================================================================
// 11. STUDENT SUCCESS STORIES (success-stories.html)
// ============================================================================
function generateSuccessStories() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-37.png" alt="Senior coaching classroom with attentive students participating in seminar discussion" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Success Stories</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">STUDENT INSPIRATIONS & CASE STUDIES</span>
        <h1 style="color:var(--white); margin-top:8px;">Student Success Stories & Scholar Breakthroughs</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Inspiring chronicles of students who transformed fear of difficult problems into deep intellectual curiosity and national competitive honors.
        </p>
      </div>
    </div>
  </section>

  <!-- FEATURED STUDENT STORY & TRANSFORMATION TIMELINE -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">FEATURED SCHOLAR CHRONICLE</span>
        <h2 style="margin-top:10px;">The Journey of Priyansh: From Grade 6 Hesitation to PRMO Medalist</h2>
        <p style="margin-top:14px;">
          When Priyansh joined Pragyan in Grade 6, he found multi-step arithmetic word problems intimidating. Standard school classes rewarded speed over understanding, leaving him second-guessing his steps.
        </p>
        <p style="margin-top:12px;">
          Under the guidance of our mathematics faculty, Priyansh spent six months learning to visualize geometry with ruler-and-compass sketches and decomposing integers through prime factorization trees.
        </p>
        <div class="timeline-list" style="margin-top:24px;">
          <div class="timeline-entry">
            <span class="timeline-year">MONTH 1–3: AXIOMATIC REBUILD</span>
            <h4 style="margin-top:4px;">Eliminated Formula Memorization</h4>
            <p style="font-size:0.86rem;">Mastered first-principles arithmetic and basic Euclidean angle theorems.</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">MONTH 6: FIRST PODIUM</span>
            <h4 style="margin-top:4px;">Zonal Silver Medal in IMO Class 6</h4>
            <p style="font-size:0.86rem;">Achieved 98.4 percentile in Level 1 and secured State Rank 4 in Level 2.</p>
          </div>
          <div class="timeline-entry">
            <span class="timeline-year">GRADE 9: NATIONAL RECOGNITION</span>
            <h4 style="margin-top:4px;">PRMO Qualified with 46/60 Marks</h4>
            <p style="font-size:0.86rem;">Ranked among the top 1% junior mathematicians nationwide.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-10.png" alt="Collaborative study session of middle school students working on Olympiad mock papers">
          <div class="editorial-caption-bar">
            <span>Collaborative Problem Workshop</span>
            <small style="color:var(--orange);">Priyansh's Study Cohort</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOUR DETAILED STUDENT PROFILES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">INSPIRATIONAL CASE STUDIES</span>
        <h2>Four Student Success Profiles</h2>
        <p>Real milestones achieved through disciplined mentorship and individualized diagnostic support.</p>
      </div>

      <div class="grid-2x2">
        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MATHEMATICS SPRINT</span>
            <h3 style="margin-top:6px;">Ananya Kashyap (Grade 7)</h3>
            <div class="achiever-meta">IMO Zonal Gold Medalist • School Topper</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              "The geometric visualization drills helped me solve coordinate geometry questions without memorizing long formulas. My school math score improved from 82% to a steady 99%."
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Progression: +32 Percentile Jump</span>
              <span class="demo-badge">IMO Class 7</span>
            </div>
          </div>
        </article>

        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">SCIENCE EXPERIMENTATION</span>
            <h3 style="margin-top:6px;">Kabir Sen (Grade 9)</h3>
            <div class="achiever-meta">NSEJS Stage 1 Qualified • National Camp</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              "Watching live optics and circuit demonstrations in the Pragyan lab made physical formulas feel like tangible realities rather than textbook symbols. I cleared NSEJS on my first attempt."
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Progression: State Rank 02</span>
              <span class="demo-badge">NSEJS Junior</span>
            </div>
          </div>
        </article>

        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MENTAL ABILITY TRIUMPH</span>
            <h3 style="margin-top:6px;">Zara Fatima (Grade 5)</h3>
            <div class="achiever-meta">Logical Reasoning Trophy • State Rank 01</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              "I used to get confused by mirror reflections and matrix sequences. Pragyan's daily puzzle sheets made it feel like a game. Today I finish reasoning papers 15 minutes before the timer."
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Speed: 38 sec/question</span>
              <span class="demo-badge">Aptitude Class 5</span>
            </div>
          </div>
        </article>

        <article class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">ENGLISH COMPREHENSION</span>
            <h3 style="margin-top:6px;">Devraj Mukherjee (Grade 8)</h3>
            <div class="achiever-meta">IEO International Rank 04 • Medalist</div>
            <p style="margin-top:10px; font-size:0.88rem;">
              "Studying Latin root words and rhetorical argument structures transformed my writing and reading speed. It gave me the competitive edge to tackle the toughest IEO Achievers section."
            </p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Score: 49/50 • Level 2</span>
              <span class="demo-badge">IEO Class 8</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">WRITE YOUR OWN SUCCESS STORY</span>
          <h2 style="margin-top:8px;">Begin Your Transformation Today</h2>
          <p style="max-width:620px;">
            Take the first step toward academic self-confidence with our comprehensive diagnostic assessment.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Schedule Consultation →</a>
          <a href="grades.html" class="btn btn-outline-light">Select Your Grade</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Student Success Stories', 'success', content);
}

// ============================================================================
// 12. OUR FACULTY (faculty.html)
// ============================================================================
function generateFaculty() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-43.png" alt="Senior mathematics professor explaining calculus and equations on blackboard" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Our Faculty</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">IIT, IISC & UNIVERSITY ALUMNI EDUCATORS</span>
        <h1 style="color:var(--white); margin-top:8px;">Our Distinguished Faculty & Olympiad Mentors</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Our academic faculty comprises former national Olympiad camp trainers, PhD scholars, and veteran pedagogues dedicated to mentoring young inquisitive minds.
        </p>
      </div>
    </div>
  </section>

  <!-- FACULTY DIRECTORY (STRICT 6 PROFILES WITH PORTRAITS) -->
  <section class="section">
    <div class="container">
      <div class="section-head text-center">
        <span class="eyebrow">DISTINGUISHED EDUCATORS</span>
        <h2>Subject-Wise Faculty Directory</h2>
        <p>Representative faculty profiles showcasing the depth of academic expertise leading our classrooms.</p>
      </div>

      <div class="grid-3x2">
        <!-- Faculty 1 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-65.png" alt="Prof. R. K. Namboodiri at blackboard deriving higher mathematical equations" loading="lazy">
            <span class="faculty-badge-pill">22 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">HEAD OF MATHEMATICS</span>
            <h3 class="faculty-name">Prof. R. K. Namboodiri</h3>
            <div class="faculty-creds">M.Sc. Mathematics (IIT Bombay)</div>
            <p class="faculty-bio">
              Former national PRMO camp evaluator specializing in Euclidean proofs, polynomial roots, and modular arithmetic for secondary scholars.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">IMO & PRMO Sprints</strong>
            </div>
          </div>
        </article>

        <!-- Faculty 2 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-62.png" alt="Dr. Suniti Banerjee illustrating physics orbital trajectory equations" loading="lazy">
            <span class="faculty-badge-pill">16 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">DEAN OF PHYSICAL SCIENCES</span>
            <h3 class="faculty-name">Dr. Suniti Banerjee</h3>
            <div class="faculty-creds">Ph.D. Experimental Physics (IISc Bangalore)</div>
            <p class="faculty-bio">
              Passionate researcher and science communicator directing our laboratory demonstrations, mechanics derivations, and NSEJS cohorts.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">Mechanics & Optics</strong>
            </div>
          </div>
        </article>

        <!-- Faculty 3 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-27.png" alt="Maheshwar Trivedi actively guiding student reasoning challenges in class" loading="lazy">
            <span class="faculty-badge-pill">14 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">DIRECTOR OF REASONING</span>
            <h3 class="faculty-name">Maheshwar Trivedi</h3>
            <div class="faculty-creds">M.Sc. Cognitive Psychology</div>
            <p class="faculty-bio">
              Author of standard preparatory texts on non-verbal figure matrices, algorithmic puzzles, and NTSE mental ability benchmarks.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">Spatial & Matrix Logic</strong>
            </div>
          </div>
        </article>

        <!-- Faculty 4 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-83.png" alt="Anuradha Sen Sharma explaining reading comprehension and linguistic structure" loading="lazy">
            <span class="faculty-badge-pill">18 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">HEAD OF LINGUISTICS & IEO</span>
            <h3 class="faculty-name">Anuradha Sen Sharma</h3>
            <div class="faculty-creds">M.A. English & Linguistics (JNU)</div>
            <p class="faculty-bio">
              Specializes in etymological vocabulary acquisition, syntactical grammar, and rapid reading comprehension for international language tests.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">IEO Achievers Section</strong>
            </div>
          </div>
        </article>

        <!-- Faculty 5 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-42.png" alt="Venkatesh Raman demonstrating organic chemistry reactions on digital smartboard" loading="lazy">
            <span class="faculty-badge-pill">12 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">SENIOR CHEMISTRY MENTOR</span>
            <h3 class="faculty-name">Venkatesh Raman</h3>
            <div class="faculty-creds">M.Tech Chemical Sciences (IIT Delhi)</div>
            <p class="faculty-bio">
              Expert in chemical stoichiometry, molecular orbital visualization, and inorganic reaction trends for NSO and IJSO Stage 1.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">Stoichiometry & Organic</strong>
            </div>
          </div>
        </article>

        <!-- Faculty 6 -->
        <article class="faculty-card">
          <div class="faculty-card-media">
            <img src="images/image-85.png" alt="Priyadarshini Saxena mentoring young foundation students with practice worksheets" loading="lazy">
            <span class="faculty-badge-pill">15 Yrs Exp</span>
          </div>
          <div class="faculty-card-body">
            <span class="faculty-role">FOUNDATION STAGE LEAD</span>
            <h3 class="faculty-name">Priyadarshini Saxena</h3>
            <div class="faculty-creds">M.Ed. Early Childhood Pedagogy</div>
            <p class="faculty-bio">
              Directs our primary Grades 1–3 curriculum, fostering mathematical confidence and creative pattern play in early scholars.
            </p>
            <div class="faculty-specialty-footer">
              <span class="specialty-lbl">Specialty</span>
              <strong class="specialty-val">Grades 1–3 Pedagogy</strong>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CLASSROOM TEACHING MOMENTS (Photographic Compositions) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">PEDAGOGICAL EXCELLENCE</span>
        <h2>Teaching Moments: Inside Our Classrooms</h2>
        <p>Our educators teach through active demonstration, board derivations, and responsive dialogue.</p>
      </div>

      <div class="editorial-split" style="margin-bottom:36px;">
        <div>
          <span class="eyebrow">GEOMETRIC INTUITION</span>
          <h3 style="margin-top:8px;">Visual Proofs on Interactive Smartboards</h3>
          <p style="margin-top:12px;">
            By projecting dynamic geometry diagrams and drawing tangents in real-time, our teachers help students grasp theorem conditions immediately rather than struggling with abstract static textbook prints.
          </p>
        </div>
        <div>
          <div class="editorial-img-box">
            <img src="images/image-46.png" alt="Faculty member explaining geometry equations on interactive smartboard">
            <div class="editorial-caption-bar">
              <span>Interactive Geometry Session</span>
              <small style="color:var(--orange);">Proof Construction</small>
            </div>
          </div>
        </div>
      </div>

      <div class="editorial-split-reverse">
        <div>
          <div class="editorial-img-box">
            <img src="images/image-51.png" alt="Classroom discussion where faculty engages directly with students on challenging questions">
            <div class="editorial-caption-bar">
              <span>Classroom Discourse & Debate</span>
              <small style="color:var(--orange);">Socratic Interaction</small>
            </div>
          </div>
        </div>
        <div>
          <span class="eyebrow">INTELLECTUAL RESPECT</span>
          <h3 style="margin-top:8px;">Encouraging Debate and Alternative Proofs</h3>
          <p style="margin-top:12px;">
            Every student is encouraged to present alternative solution steps on the board. Our faculty critiques methodology with intellectual generosity, turning mistakes into profound learning breakthroughs.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">MEET OUR MENTORS</span>
          <h2 style="margin-top:8px;">Speak with an Academic Department Head</h2>
          <p style="max-width:620px;">
            Book an in-person or virtual consultation to discuss your child's academic goals directly with our faculty.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Faculty Consultation →</a>
          <a href="about.html" class="btn btn-outline-light">About Our Heritage</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Our Distinguished Faculty', 'faculty', content);
}

// ============================================================================
// 13. LEARNING METHODOLOGY (methodology.html)
// ============================================================================
function generateMethodology() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-34.png" alt="Invigilator walking across classroom during rigorous timed assessment test" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Learning Methodology</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">4-STAGE PEDAGOGICAL MODEL</span>
        <h1 style="color:var(--white); margin-top:8px;">Our Concept-First Teaching Methodology</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          An institutional pedagogy refined over 18 years, designed to transform ordinary classroom learning into structured analytical inquiry and competitive mastery.
        </p>
      </div>
    </div>
  </section>

  <!-- CONCEPT-BASED LEARNING MODEL -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">AXIOMATIC PEDAGOGY</span>
        <h2 style="margin-top:10px;">Our 4-Stage Concept-Based Learning Model</h2>
        <p style="margin-top:14px;">
          Ordinary coaching institutes jump straight into formula drilling and past paper memorization. When competitive exams alter problem parameters, rote learners crumble.
        </p>
        <p style="margin-top:12px;">
          Pragyan's methodology ensures every student progresses through a disciplined four-tier cognitive sequence:
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>1. Physical Intuition</h4>
            <p>Visualizing the problem context using physical props, geometry sketches, and everyday analogies.</p>
          </div>
          <div class="pillar-item">
            <h4>2. Formal Derivation</h4>
            <p>Deriving the mathematical identity or scientific formula step-by-step from fundamental axioms.</p>
          </div>
          <div class="pillar-item">
            <h4>3. Boundary Edge Testing</h4>
            <p>Testing what happens when parameters approach zero, infinity, or extreme edge conditions.</p>
          </div>
          <div class="pillar-item">
            <h4>4. Algorithmic Speed</h4>
            <p>Developing optimized calculation shortcuts once the foundational proof is deeply understood.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-25.png" alt="Mentor providing individual desk-side academic guidance to student">
          <div class="editorial-caption-bar">
            <span>One-on-One Remedial Support</span>
            <small style="color:var(--orange);">Personalized Diagnosis</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STEP-BY-STEP LEARNING FRAMEWORK (Timeline) -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">SYSTEMATIC PROGRESSION</span>
        <h2>The Step-by-Step Operational Framework</h2>
        <p>How an enrolled scholar journeys through every single academic module at Pragyan.</p>
      </div>

      <div class="journey-track">
        <div class="journey-node">
          <div class="journey-step-circle">01</div>
          <h4>Diagnostic Mapping</h4>
          <p>Assessing foundational knowledge to place students in ideal peer batches.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">02</div>
          <h4>Lecture Derivations</h4>
          <p>Interactive classroom sessions unpacking theorems and laws from first principles.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">03</div>
          <h4>Graded Worksheets</h4>
          <p>Self-paced problem sets divided into Level 1, Level 2, and National Olympiad tiers.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">04</div>
          <h4>Timed Mock Assessments</h4>
          <p>Bi-weekly full-length tests simulating national competitive exam conditions.</p>
        </div>
        <div class="journey-node">
          <div class="journey-step-circle">05</div>
          <h4>Error Analysis Clinic</h4>
          <p>Detailed mentor-led post-test analysis correcting cognitive calculation slips.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- INDIVIDUAL SUPPORT & PARENT PARTNERSHIP (STRICT 4 CARDS WITH PHOTOGRAPHIC COVERAGE) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">HOLISTIC ACADEMIC ECOSYSTEM</span>
        <h2>Key Pillars of Our Methodology</h2>
        <p>Four interconnected systems that guarantee student retention, speed, conceptual clarity, and continuous motivation.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Pillar 01</span>
            <img src="images/image-72.png" alt="Four students in uniform collaborating over applied science and higher mathematics strategy books">
          </div>
          <div class="program-card-body">
            <h3>Collaborative Study & Text-Based Strategy</h3>
            <p>Students engage in guided peer discussions comparing multiple derivation approaches using rigorous Olympiad benchmark texts and past papers.</p>
            <div class="card-footer-action">
              <span style="font-size:0.8rem; font-weight:700;">Peer Learning Cohorts</span>
              <a href="programs.html" class="btn-link">Explore Cohort Programs →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Pillar 02</span>
            <img src="images/image-75.png" alt="Students collaborating around a large educational concept roadmap and flowchart poster">
          </div>
          <div class="program-card-body">
            <h3>Visual Concept Roadmaps & Flowcharts</h3>
            <p>Deconstructing complex multi-stage problems into clear visual flowcharts, decision trees, and boundary condition matrices.</p>
            <div class="card-footer-action">
              <span style="font-size:0.8rem; font-weight:700;">Conceptual Architecture</span>
              <a href="grades.html" class="btn-link">View Grade Roadmaps →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Pillar 03</span>
            <img src="images/image-82.png" alt="Teacher guiding student with digital tablet showing personalized learning progress chart">
          </div>
          <div class="program-card-body">
            <h3>Adaptive Tablet Diagnostics & Speed Analytics</h3>
            <p>Our student portal measures seconds spent per question, accuracy breakdowns by topic, and tailored remedial practice modules.</p>
            <div class="card-footer-action">
              <span style="font-size:0.8rem; font-weight:700;">Diagnostic Engine</span>
              <a href="performance.html" class="btn-link">View Performance Analytics →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Pillar 04</span>
            <img src="images/image-84.png" alt="Mother and daughter reviewing printed academic progress report and laptop performance dashboard with mentor">
          </div>
          <div class="program-card-body">
            <h3>Transparent Parent Consultations & Audits</h3>
            <p>Monthly parent-educator conferences review printed diagnostic scorecards and calibrate home revision rhythms for balanced excellence.</p>
            <div class="card-footer-action">
              <span style="font-size:0.8rem; font-weight:700;">Parent Partnership</span>
              <a href="contact.html" class="btn-link">Book Parent Consultation →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">EXPERIENCE THE DIFFERENCE</span>
          <h2 style="margin-top:8px;">Observe an Actual Foundation Classroom</h2>
          <p style="max-width:620px;">
            We invite prospective parents and scholars to attend a sample conceptual lecture and witness our teaching methodology in action.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book an Open Class Pass →</a>
          <a href="practice-tests.html" class="btn btn-outline-light">Take Sample Test</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Learning Methodology', 'methodology', content);
}

// ============================================================================
// 14. STUDY RESOURCES (resources.html)
// ============================================================================
function generateResources() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-40.png" alt="Modern academic center resource library and student study lounge" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Study Resources</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">FREE DOWNLOADS & CURATED REPOSITORY</span>
        <h1 style="color:var(--white); margin-top:8px;">Olympiad Study Materials & Question Banks</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Download curated practice worksheets, chapter-wise question banks, formula booklets, and official previous-year Olympiad mock papers.
        </p>
      </div>
    </div>
  </section>

  <!-- FILTER CONTROLS & RESOURCE CATALOGUE (STRICT 6 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head-split">
        <div class="section-head">
          <span class="eyebrow">FILTERABLE LIBRARY</span>
          <h2>Featured Learning Materials & Downloads</h2>
          <p>Click a subject filter below to narrow down downloadable worksheets and mock examination papers.</p>
        </div>
        <div class="filter-bar">
          <button type="button" class="filter-pill is-active resource-filter-btn" data-subject="all">All Subjects</button>
          <button type="button" class="filter-pill resource-filter-btn" data-subject="math">Mathematics</button>
          <button type="button" class="filter-pill resource-filter-btn" data-subject="science">Science</button>
          <button type="button" class="filter-pill resource-filter-btn" data-subject="reasoning">Reasoning</button>
          <button type="button" class="filter-pill resource-filter-btn" data-subject="english">English</button>
        </div>
      </div>

      <div class="grid-3x2">
        <!-- Resource 1: Math -->
        <div class="program-card resource-item-card" data-subject="math">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Grades 6–10 • Mathematics</span>
            <h3>Number Theory & Divisibility Proofs</h3>
            <p>Modular arithmetic, GCD algorithms, Chinese remainder theorem applications, and 50 solved Olympiad practice problems.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF (3.2 MB)</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>

        <!-- Resource 2: Science -->
        <div class="program-card resource-item-card" data-subject="science">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Grades 7–10 • Science</span>
            <h3>Kinematics & Projectile Vectors</h3>
            <p>Velocity-time graphs, 2D motion equations, relative velocity vectors, and 45 challenging NSO Stage 2 numericals.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF (4.1 MB)</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>

        <!-- Resource 3: Reasoning -->
        <div class="program-card resource-item-card" data-subject="reasoning">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Grades 4–8 • Reasoning</span>
            <h3>Spatial Rotation & Matrix Logic</h3>
            <p>Non-verbal pattern recognition drills, paper folding, cube projections, and rapid speed elimination strategies.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF (2.8 MB)</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>

        <!-- Resource 4: English -->
        <div class="program-card resource-item-card" data-subject="english">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Grades 5–9 • English</span>
            <h3>IEO Vocabulary Etymology Handbook</h3>
            <p>1,200 Greek and Latin roots, contextual collocations, phrasal verbs, and common grammatical parallel structure traps.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF (3.6 MB)</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>

        <!-- Resource 5: Math Mock -->
        <div class="program-card resource-item-card" data-subject="math">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Class 8 • Mock Paper</span>
            <h3>All-India IMO Mock Simulator #04</h3>
            <p>Full 50-question mock examination calibrated to official IMO Level 1 & Level 2 difficulty with complete solution key.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF + Solutions</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>

        <!-- Resource 6: Science Mock -->
        <div class="program-card resource-item-card" data-subject="science">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="card-grade-pill" style="position:static; display:inline-block; margin-bottom:8px;">Class 9 • Mock Paper</span>
            <h3>NSEJS National Junior Science Mock</h3>
            <p>60 high-difficulty physics, chemistry, and biology problems reflecting recent trends in international junior Olympiads.</p>
            <div class="card-footer-action" style="margin-top:20px;">
              <span style="font-size:0.8rem; font-weight:700;">Format: PDF + Key</span>
              <a href="practice-tests.html" class="btn btn-dark btn-sm">Attempt Online Mock →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: Resource Preparation Blueprint & Study Ecosystem -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head text-center">
        <span class="eyebrow">PREPARATION BLUEPRINT</span>
        <h2>How Scholars Leverage Our Study Resources</h2>
        <p style="max-width:740px; margin-inline:auto;">
          A structured 4-phase academic sequence designed by national Olympiad mentors to convert practice worksheets into composed exam-day excellence.
        </p>
      </div>

      <div class="resource-guide-grid">
        <!-- Toolkit Card 1 -->
        <div class="resource-toolkit-card">
          <span class="toolkit-badge">PHASE 01 • AXIOMATIC CLARITY</span>
          <h3>Formula-Free Concept Booklets</h3>
          <p>
            Before touching question papers, students master underlying geometric and physical axioms through step-by-step visual derivations. Eliminates rote formula cramming.
          </p>
          <ul class="toolkit-features">
            <li><span class="feat-check">✓</span> Geometric theorem origin proofs</li>
            <li><span class="feat-check">✓</span> Physics first-principles derivations</li>
            <li><span class="feat-check">✓</span> High-resolution conceptual diagrams</li>
          </ul>
        </div>

        <!-- Toolkit Card 2 -->
        <div class="resource-toolkit-card">
          <span class="toolkit-badge">PHASE 02 • PROGRESSIVE DRILL</span>
          <h3>3-Tier Graded Question Banks</h3>
          <p>
            Over 400 problems per topic classified into Level 1 (School Foundations), Level 2 (State Olympiad Standard), and Level 3 (National Elite Sprints) for progressive mastery.
          </p>
          <ul class="toolkit-features">
            <li><span class="feat-check">✓</span> Level 1: Core axiomatic problem drills</li>
            <li><span class="feat-check">✓</span> Level 2: Competitive speed questions</li>
            <li><span class="feat-check">✓</span> Level 3: National medal-tier challenges</li>
          </ul>
        </div>

        <!-- Toolkit Card 3 -->
        <div class="resource-toolkit-card">
          <span class="toolkit-badge">PHASE 03 • COMPETITION PAPERS</span>
          <h3>18-Year Solved Olympiad Archives</h3>
          <p>
            Exhaustive solutions to actual IMO, NSO, PRMO, and IEO examination papers. Each solution showcases both the standard mathematical proof and the rapid Olympiad shortcut.
          </p>
          <ul class="toolkit-features">
            <li><span class="feat-check">✓</span> Complete 2006–2024 competition papers</li>
            <li><span class="feat-check">✓</span> Dual-solution proof & shortcut notes</li>
            <li><span class="feat-check">✓</span> Common trap & negative marking warnings</li>
          </ul>
        </div>

        <!-- Toolkit Card 4 -->
        <div class="resource-toolkit-card">
          <span class="toolkit-badge">PHASE 04 • EXAM SIMULATION</span>
          <h3>Timed Diagnostic Mocks & OMR Rigor</h3>
          <p>
            Simulated examination test papers replicating official duration, question density, and negative marking constraints. Includes bubble OMR answer sheets and diagnostic score rubrics.
          </p>
          <ul class="toolkit-features">
            <li><span class="feat-check">✓</span> Timed competition paper layouts</li>
            <li><span class="feat-check">✓</span> Printable bubble OMR answer sheets</li>
            <li><span class="feat-check">✓</span> Topic-wise accuracy & speed scoring</li>
          </ul>
        </div>
      </div>

      <!-- Resource Metrics Strip -->
      <div class="resource-metric-strip">
        <div class="resource-metric-item">
          <div class="resource-metric-val">1,500+</div>
          <div class="resource-metric-lbl">Curated Worksheets</div>
        </div>
        <div class="resource-metric-item">
          <div class="resource-metric-val">18 Yrs</div>
          <div class="resource-metric-lbl">Solved Past Papers</div>
        </div>
        <div class="resource-metric-item">
          <div class="resource-metric-val">100%</div>
          <div class="resource-metric-lbl">Multi-Step Proofs</div>
        </div>
        <div class="resource-metric-item">
          <div class="resource-metric-val">24 / 7</div>
          <div class="resource-metric-lbl">Digital Library Access</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section-soft">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">STUDENT PORTAL ACCESS</span>
          <h2 style="margin-top:8px;">Unlock Our Full Digital Library (1,500+ Papers)</h2>
          <p style="max-width:620px;">
            Enrolled scholars receive personalized login credentials granting unlimited access to our searchable digital worksheet repository.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="login.html" class="btn btn-primary">Log in to Student Portal →</a>
          <a href="contact.html" class="btn btn-outline-light">Enquire for Access</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Study Resources & Worksheets', 'resources', content);
}

// Write to files
fs.writeFileSync(path.join(rootDir, 'results.html'), generateResults());
fs.writeFileSync(path.join(rootDir, 'success-stories.html'), generateSuccessStories());
fs.writeFileSync(path.join(rootDir, 'faculty.html'), generateFaculty());
fs.writeFileSync(path.join(rootDir, 'methodology.html'), generateMethodology());
fs.writeFileSync(path.join(rootDir, 'resources.html'), generateResources());

console.log('Successfully generated results.html, success-stories.html, faculty.html, methodology.html, resources.html');

