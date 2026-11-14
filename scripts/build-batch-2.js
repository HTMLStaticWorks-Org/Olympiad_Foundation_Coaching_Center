const fs = require('fs');
const path = require('path');
const { wrapHtml, rootDir } = require('./common');

// ============================================================================
// 5. MATHEMATICS OLYMPIAD DETAIL (mathematics.html)
// ============================================================================
function generateMathematics() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-45.png" alt="Faculty demonstrating geometry tangents and circumcircle equations on digital smartboard" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="programs.html">Programs</a>
          <span class="breadcrumb-sep">/</span>
          <span>Mathematics Olympiad</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">SPECIALIZED FOUNDATION PROGRAM • GRADES 1 TO 10</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">Mathematics Olympiad Foundation (IMO & PRMO)</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Cultivating numerical intuition, geometric proofs, and advanced analytical problem-solving for IMO, PRMO, NMTC, and AMC 8/10.
        </p>
        <div style="margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <span class="demo-badge">Target: IMO • PRMO • NMTC • AMC 8/10</span>
          <span class="demo-badge">Eligibility: Grades 1 – 10</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM OVERVIEW & WHAT STUDENTS WILL LEARN -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">CURRICULUM DEPTH</span>
        <h2 style="margin-top:10px;">Beyond Standard School Arithmetic</h2>
        <p style="margin-top:14px;">
          Mathematics Olympiads do not test simple computation; they require students to construct rigorous proofs, discern symmetries, and apply non-standard problem-solving heuristics.
        </p>
        <p style="margin-top:12px;">
          Our Mathematics Olympiad Program is structured into four foundational pillars: Number Theory, Euclidean & Coordinate Geometry, Advanced Algebra & Polynomials, and Combinatorics.
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>Modular Arithmetic</h4>
            <p>Divisibility rules, Diophantine equations, Euler totient theorem, and prime factorization algorithms.</p>
          </div>
          <div class="pillar-item">
            <h4>Geometric Insight</h4>
            <p>Congruence, cyclicity of quadrilaterals, Stewart's theorem, and Menelaus & Ceva proofs.</p>
          </div>
          <div class="pillar-item">
            <h4>Algebraic Identities</h4>
            <p>Polynomial roots, Vieta's relations, Cauchy-Schwarz inequalities, and recursive functions.</p>
          </div>
          <div class="pillar-item">
            <h4>Combinatorics</h4>
            <p>Pigeonhole principle, permutations with constraints, inclusion-exclusion, and invariant principles.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-49.png" alt="Math mentor conducting dedicated doubt clearing session at whiteboard with geometric proofs">
          <div class="editorial-caption-bar">
            <span>Focused Doubt Clinic</span>
            <small style="color:var(--orange);">Step-by-Step Proof Verification</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SAMPLE PRACTICE QUESTIONS (Interactive Widget) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">INTERACTIVE EVALUATION</span>
        <h2>Try a Sample Olympiad Mathematics Question</h2>
        <p>Test your conceptual mathematical deduction with this authentic IMO foundation challenge.</p>
      </div>

      <div class="sample-quiz-box" style="max-width:820px; margin:0 auto;">
        <span class="eyebrow" style="color:var(--orange);">QUESTION CHALLENGE</span>
        <h3 style="margin-top:8px; font-size:1.15rem;">
          Let n be a positive integer such that (n + 1)! + (n + 2)! = n! × 440. What is the value of n?
        </h3>
        <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
          Hint: Factor out the common term n! from the left hand side.
        </p>

        <div class="quiz-options">
          <button type="button" class="quiz-opt-btn" data-correct="false">(A)  n = 16</button>
          <button type="button" class="quiz-opt-btn" data-correct="true">(B)  n = 19</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(C)  n = 21</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(D)  n = 23</button>
        </div>

        <div class="quiz-feedback" data-explanation="Factoring: n![(n+1) + (n+1)(n+2)] = n![(n+1)(1 + n + 2)] = n!(n+1)(n+3). Dividing both sides by n! yields (n+1)(n+3) = 440 = 20 × 22. Thus n + 1 = 20, which gives n = 19."></div>
      </div>
    </div>
  </section>

  <!-- CORE STUDY AREAS (STRICT 4 CARDS WITH COMPLETE PHOTOGRAPHIC COVERAGE) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">INSTRUCTIONAL MODULES</span>
        <h2>Core Study Areas in Mathematics Olympiad</h2>
        <p>Four specialized academic tracks that students master throughout the academic year.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Track 1</span>
            <img src="images/image-47.png" alt="Mathematics instructor solving algebra problem on whiteboard">
          </div>
          <div class="program-card-body">
            <h3>Algebra & Quadratic Systems</h3>
            <p>Mastering Vieta's formulas, symmetric polynomial expansions, AM-GM inequalities, and functional equations.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Prerequisite: Basic Arithmetic</span>
              <a href="contact.html" class="btn-link">Enroll in Algebra Track →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Track 2</span>
            <img src="images/image-56.png" alt="Students writing blackboard proofs collaboratively in group study session">
          </div>
          <div class="program-card-body">
            <h3>Euclidean Geometry & Proofs</h3>
            <p>Exploring power of a point, cyclic quadrilaterals, homothety, circumcircles, and collinearity theorems.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Prerequisite: Plane Geometry</span>
              <a href="contact.html" class="btn-link">Enroll in Geometry Track →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Track 3</span>
            <img src="images/image-68.png" alt="Higher mathematics lecture hall with chalkboard derivations of Pochhammer symbols and special series">
          </div>
          <div class="program-card-body">
            <h3>Elementary Number Theory & Special Series</h3>
            <p>Fermat's Little Theorem, Wilson's Theorem, Chinese Remainder Theorem, and prime distribution patterns for PRMO and NMTC.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 6–10</span>
              <a href="resources.html" class="btn-link">Access Number Theory Worksheets →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Track 4</span>
            <img src="images/image-66.png" alt="Student taking timed Olympiad math examination under faculty mentor supervision">
          </div>
          <div class="program-card-body">
            <h3>Combinatorics & Timed Problem Sprints</h3>
            <p>Bijection principles, recurrence relations, Catalan numbers, Ramsey theory fundamentals, and timed contest strategies.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 7–10</span>
              <a href="practice-tests.html" class="btn-link">Attempt Combinatorics Mock Drills →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MASTERCLASS DERIVATIONS SPOTLIGHT -->
  <section class="section section-soft">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">PROOF ARCHITECTURE</span>
        <h2 style="margin-top:10px;">Axiomatic Derivations & Boardwork</h2>
        <p style="margin-top:14px;">
          At Pragyan, mathematical excellence is never reduced to mechanical formula recall. Our senior faculty lead step-by-step whiteboard derivations, showing scholars how higher calculus, polynomial limits, and modular identities emerge from first principles.
        </p>
        <p style="margin-top:12px;">
          Students learn how to construct watertight proofs, anticipate edge cases, and articulate their reasoning with mathematical clarity demanded by RMO, INMO, and AMC 10/12 examiners.
        </p>
        <div class="grid-2x2" style="margin-top:20px; gap:16px;">
          <div style="background:var(--white); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--orange);">
            <strong style="color:var(--black); font-size:0.92rem;">Rigor & Formal Proofs</strong>
            <p style="font-size:0.82rem; margin-top:4px;">Menelaus, Ceva, Cauchy-Schwarz, and Vieta proofs derived in class.</p>
          </div>
          <div style="background:var(--white); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--black);">
            <strong style="color:var(--black); font-size:0.92rem;">Error Analysis Clinics</strong>
            <p style="font-size:0.82rem; margin-top:4px;">Weekly line-by-line review of mock solutions and logical shortcuts.</p>
          </div>
        </div>
        <div style="margin-top:24px;">
          <a href="contact.html" class="btn btn-primary btn-sm">Schedule Math Faculty Consultation →</a>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-65.png" alt="Senior mathematics mentor at whiteboard deriving polynomial limits and integral calculus equations">
          <div class="editorial-caption-bar">
            <span>Faculty Proof Derivation</span>
            <small style="color:var(--orange);">IMO & PRMO Foundation</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ADMISSIONS CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <span class="eyebrow" style="color:var(--orange);">MATHEMATICS COHORT</span>
          <h2 style="margin-top:8px;">Enroll in the Upcoming Math Olympiad Batch</h2>
          <p style="max-width:620px;">
            Take our specialized Math Olympiad Diagnostic Test to evaluate your current problem-solving tier.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Math Diagnostic Test →</a>
          <a href="practice-tests.html" class="btn btn-outline-light">Try Practice Mock</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Mathematics Olympiad Program', 'math', content);
}

// ============================================================================
// 6. SCIENCE OLYMPIAD DETAIL (science.html)
// ============================================================================
function generateScience() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-42.png" alt="Faculty demonstrating organic chemistry aromatic benzene reaction on digital smartboard" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="programs.html">Programs</a>
          <span class="breadcrumb-sep">/</span>
          <span>Science Olympiad</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">SPECIALIZED FOUNDATION PROGRAM • GRADES 3 TO 10</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">Science Olympiad Foundation (NSO & IJSO)</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Empirical physics, reaction chemistry, and biological systems training designed for NSO, NSEJS, IJSO, and Kishore Vaigyanik benchmarks.
        </p>
        <div style="margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <span class="demo-badge">Target: NSO • NSEJS • IJSO • ANCQ</span>
          <span class="demo-badge">Eligibility: Grades 3 – 10</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM OVERVIEW & LAB METHODOLOGY -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">SCIENTIFIC RIGOR</span>
        <h2 style="margin-top:10px;">Rooted in Scientific Deduction and Empirical Inquiry</h2>
        <p style="margin-top:14px;">
          Science Olympiads test deep qualitative reasoning alongside quantitative problem-solving. A successful competitor cannot merely state formulas; they must predict physical behaviors, balance reaction dynamics, and trace cellular processes.
        </p>
        <p style="margin-top:12px;">
          At Pragyan, students examine live experimental rigs, dissect circuit behavior, and understand macroscopic phenomena from subatomic and molecular perspectives.
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>Experimental Kinematics</h4>
            <p>Analyzing acceleration, projectile vectors, friction thresholds, and work-energy equivalence.</p>
          </div>
          <div class="pillar-item">
            <h4>Chemical Dynamics</h4>
            <p>Atomic structure, stoichiometry, gas laws, redox reactions, and acid-base equilibria.</p>
          </div>
          <div class="pillar-item">
            <h4>Organismal Biology</h4>
            <p>Cellular respiration, Mendelian genetics, human physiology, and ecological nutrient cycles.</p>
          </div>
          <div class="pillar-item">
            <h4>Data Interpretation</h4>
            <p>Extracting empirical constants from scatter plots, phase diagrams, and calibration graphs.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-22.png" alt="Science teacher illustrating human digestive system on digital smartboard in lecture hall">
          <div class="editorial-caption-bar">
            <span>Human Physiology & Anatomy</span>
            <small style="color:var(--orange);">Interactive Smart Display</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SAMPLE PRACTICE QUESTIONS (Interactive Widget) -->
  <section class="section section-soft">
    <div class="container">
      <div class="sample-quiz-box" style="max-width:820px; margin:0 auto;">
        <span class="eyebrow" style="color:var(--orange);">SCIENCE OLYMPIAD CHALLENGE</span>
        <h3 style="margin-top:8px; font-size:1.15rem;">
          A convex lens of focal length 15 cm forms a real image of magnification 2. If the lens is replaced by another convex lens of focal length 30 cm without changing the object position, what is the new magnification?
        </h3>
        <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
          Target: NSO Stage 2 / NSEJS Physics Module
        </p>

        <div class="quiz-options">
          <button type="button" class="quiz-opt-btn" data-correct="false">(A)  m = 1.0 (Virtual)</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(B)  m = 1.5 (Real)</button>
          <button type="button" class="quiz-opt-btn" data-correct="true">(C)  m = 4.0 (Virtual)</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(D)  m = 2.5 (Real)</button>
        </div>

        <div class="quiz-feedback" data-explanation="Initial real image has m = -v/u = -2, so v = 2u (with u negative: u = -x, v = +2x). By lens formula 1/v - 1/u = 1/f => 1/(2x) + 1/x = 3/(2x) = 1/15, so x = 22.5 cm (object at u = -22.5 cm). With new lens f = +30 cm, 1/v = 1/f + 1/u = 1/30 - 1/22.5 = 1/30 - 2/45 = (3 - 4)/90 = -1/90, so v = -90 cm. Magnification m = v/u = (-90)/(-22.5) = +4.0 (virtual, erect)."></div>
      </div>
    </div>
  </section>

  <!-- LABORATORY & EXPERIMENTAL TRAINING FACILITIES (STRICT 4 CARDS) -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">EMPIRICAL INVESTIGATION</span>
        <h2>Experimental Laboratory & Empirical Science Facilities</h2>
        <p>Four specialized practical learning tracks where theoretical science translates into tangible observation and measurement.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Chemistry Lab</span>
            <img src="images/image-69.png" alt="Students in white coats performing titration chemistry experiments with test tubes and burners">
          </div>
          <div class="program-card-body">
            <h3>Volumetric Titration & Analytical Chemistry</h3>
            <p>Hands-on acid-base neutralization, redox titrations, qualitative salt analysis, and stoichiometric reaction monitoring.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 7–10</span>
              <a href="contact.html" class="btn-link">Book Chemistry Lab Tour →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Physics Dynamics</span>
            <img src="images/image-70.png" alt="Physics laboratory apparatus with pulley stands, masses, and acceleration dynamics rigs">
          </div>
          <div class="program-card-body">
            <h3>Kinematics, Pulleys & Rotational Dynamics</h3>
            <p>Empirical verification of Newton's laws, Atwood machines, rotational moment of inertia, and spring-mass oscillations.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 6–10</span>
              <a href="contact.html" class="btn-link">Book Physics Lab Tour →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Biology Cytology</span>
            <img src="images/image-71.png" alt="Biology cytology laboratory with teacher guiding students using compound binocular microscope">
          </div>
          <div class="program-card-body">
            <h3>Cell Biology, Histology & Optical Microscopy</h3>
            <p>Examining plant stomata, animal mitosis stages, osmosis dynamics, and enzymatic digestion under high magnification.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 5–10</span>
              <a href="contact.html" class="btn-link">Book Biology Lab Tour →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Vector Physics</span>
            <img src="images/image-67.png" alt="Physics professor demonstrating vector mechanics and trajectory equations on blackboard">
          </div>
          <div class="program-card-body">
            <h3>Theoretical Mechanics & Vector Decomposition</h3>
            <p>In-depth board derivations of free-body diagrams, projectile trajectories, centrifugal acceleration, and orbital mechanics.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 8–10</span>
              <a href="contact.html" class="btn-link">Book Mechanics Workshop →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOUR PROGRAM MODULES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">THEORETICAL DEPTH</span>
        <h2>Four Specialized Modules in Science Olympiad</h2>
        <p>A rigorous curriculum preparing scholars for international science talent searches.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Physics Track</span>
            <img src="images/image-41.png" alt="Physics faculty explaining projectile motion trajectories on smart screen">
          </div>
          <div class="program-card-body">
            <h3>Mechanics, Optics & Thermodynamics</h3>
            <p>From Newton's laws to ray optics, wave interference, thermal conduction, and electric circuits.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 6–10</span>
              <a href="contact.html" class="btn-link">Enroll in Physics Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Chemistry Track</span>
            <img src="images/image-61.png" alt="Students in chemistry and physics lecture hall taking notes">
          </div>
          <div class="program-card-body">
            <h3>Inorganic, Organic & Analytical Chemistry</h3>
            <p>Mastering chemical reactions, acid-base indicators, periodic periodicity, and carbon compounds.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 7–10</span>
              <a href="contact.html" class="btn-link">Enroll in Chemistry Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">BIOLOGY TRACK</span>
            <h3 style="margin-top:6px;">Cellular Genetics & Physiology</h3>
            <p>Cell organelle biochemistry, enzyme kinetics, human circulatory & neural anatomy, and botanical biology.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 5–10</span>
              <a href="resources.html" class="btn-link">Access Biology Worksheets →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">EXPERIMENTAL TRACK</span>
            <h3 style="margin-top:6px;">Scientific Inquiry & Lab Data</h3>
            <p>Error analysis, significant figures, calorimeter measurements, and hypothesis testing methods.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 3–10</span>
              <a href="resources.html" class="btn-link">Access Lab Question Sets →</a>
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
          <span class="eyebrow" style="color:var(--orange);">SCIENCE ENROLLMENT</span>
          <h2 style="margin-top:8px;">Ignite Your Scientific Curiosity Today</h2>
          <p style="max-width:620px;">
            Schedule a diagnostic test to evaluate your understanding of physics, chemistry, and biological principles.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Science Diagnostic →</a>
          <a href="resources.html" class="btn btn-outline-light">Download Practice Papers</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Science Olympiad Program', 'science', content);
}

// ============================================================================
// 7. LOGICAL REASONING DETAIL (reasoning.html)
// ============================================================================
function generateReasoning() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-3.png" alt="Young elementary students taking logical reasoning and mental aptitude paper" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="programs.html">Programs</a>
          <span class="breadcrumb-sep">/</span>
          <span>Logical Reasoning</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">COGNITIVE APTITUDE PROGRAM • GRADES 1 TO 10</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">Logical Reasoning & Mental Ability Coaching</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Mastery over non-verbal spatial reasoning, algorithmic sequences, syllogisms, and puzzle deconstruction for NTSE, Olympiads, and competitive entrance tests.
        </p>
        <div style="margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <span class="demo-badge">Target: Olympiad Aptitude • NTSE Stage 1 & 2</span>
          <span class="demo-badge">Eligibility: Grades 1 – 10</span>
        </div>
      </div>
    </div>
  </section>

  <!-- OVERVIEW & METHODOLOGY -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">COGNITIVE MASTERY</span>
        <h2 style="margin-top:10px;">The Key Differentiator in Competitive Percentiles</h2>
        <p style="margin-top:14px;">
          In modern Olympiads, nearly 25% to 35% of the overall score is determined by the Logical Reasoning section. Students with extraordinary subject knowledge often forfeit top national ranks due to slow or inaccurate spatial deduction.
        </p>
        <p style="margin-top:12px;">
          Our specialized Mental Ability curriculum systematically develops visual decomposition, algorithmic thinking, and rapid pattern detection across both verbal and non-verbal domains.
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>Non-Verbal Spatial</h4>
            <p>Cube folding, mirror reflections, paper cutting, dot situation problems, and figure matrices.</p>
          </div>
          <div class="pillar-item">
            <h4>Verbal Deduction</h4>
            <p>Syllogistic logic, blood relations, seating arrangements, and statement-assumption pairs.</p>
          </div>
          <div class="pillar-item">
            <h4>Mathematical Puzzles</h4>
            <p>Number grids, cryptarithmetic, operator substitution, and time-speed-distance brainteasers.</p>
          </div>
          <div class="pillar-item">
            <h4>Speed & Pacing</h4>
            <p>Developing sub-30-second triage strategies to eliminate distractor options rapidly.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-48.png" alt="Students sitting around seminar table actively solving word puzzle math challenges">
          <div class="editorial-caption-bar">
            <span>Collaborative Puzzle Workshop</span>
            <small style="color:var(--orange);">Multi-Variable Deduction</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HANDS-ON LOGIC WORKSHOPS & PUZZLE SOLVING -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">TACTILE PROBLEM SOLVING</span>
        <h2>Hands-On Logic Workshops & Concrete Puzzles</h2>
        <p>Before abstract formulas, students manipulate physical matchsticks, topological mazes, and geometric tiles to train deductive reasoning.</p>
      </div>

      <!-- Workshop 1: Matchstick Equations -->
      <div class="editorial-split" style="margin-bottom:48px;">
        <div>
          <span class="eyebrow">LATERAL OPERATOR LOGIC</span>
          <h3 style="margin-top:8px;">Matchstick Transformations & Lateral Invariants</h3>
          <p style="margin-top:12px;">
            Matchstick puzzles challenge assumptions. In challenges such as transforming <code>5 + 5 + 5 = 550</code> with a single stroke, scholars learn to look beyond standard arithmetic rules and view symbols as geometric entities that can be altered to form valid equations (turning a '+' into a '4' to make <code>545 + 5 = 550</code>).
          </p>
          <p style="margin-top:10px;">
            This builds cognitive flexibility, breaking the habit of rigid calculation and encouraging outside-the-box analytical deduction.
          </p>
          <div style="margin-top:16px;">
            <span class="demo-badge">Skills: Lateral Thinking • Geometric Reinterpretation • Operator Inversion</span>
          </div>
        </div>
        <div>
          <div class="editorial-img-box">
            <img src="images/image-73.png" alt="Matchstick equation puzzle table showing 5+5+5=550 challenge with notebook and pencil">
            <div class="editorial-caption-bar">
              <span>Matchstick Equation Workshop</span>
              <small style="color:var(--orange);">Operator Transformation</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Workshop 2: Maze Deduction -->
      <div class="editorial-split-reverse">
        <div>
          <div class="editorial-img-box">
            <img src="images/image-74.png" alt="Elementary students with pencils solving printed maze and labyrinth spatial deduction worksheets">
            <div class="editorial-caption-bar">
              <span>Labyrinth Graph Traversal</span>
              <small style="color:var(--orange);">Spatial Path Optimization</small>
            </div>
          </div>
        </div>
        <div>
          <span class="eyebrow">TOPOLOGICAL SEARCH</span>
          <h3 style="margin-top:8px;">Maze Navigation & Algorithmic Pruning</h3>
          <p style="margin-top:12px;">
            Young minds tackle printed labyrinth grids to intuitively understand graph traversal, forward-pruning of dead ends, and recursive backtracking.
          </p>
          <p style="margin-top:10px;">
            Instead of wandering randomly, students learn to inspect the exit first, work backward from target nodes, and identify branching factors—the exact algorithmic principles underpinning modern computer science and Olympiad combinatorics.
          </p>
          <div style="margin-top:16px;">
            <span class="demo-badge">Skills: Graph Theory Intuition • Reverse Deduction • Dead-End Pruning</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SAMPLE QUESTION -->
  <section class="section">
    <div class="container">
      <div class="sample-quiz-box" style="max-width:820px; margin:0 auto;">
        <span class="eyebrow" style="color:var(--orange);">REASONING PUZZLE</span>
        <h3 style="margin-top:8px; font-size:1.15rem;">
          In a certain code language, if "OLYMPIAD" is written as "QNATORKF", how will "GENIUS" be written in that same code language?
        </h3>
        <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
          Hint: Inspect the position shift for alternating letters.
        </p>

        <div class="quiz-options">
          <button type="button" class="quiz-opt-btn" data-correct="true">(A)  IGPKWU</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(B)  IFPKVT</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(C)  JGQLXV</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(D)  IGOKWT</button>
        </div>

        <div class="quiz-feedback" data-explanation="Pattern: Every letter is shifted forward by +2 positions in the English alphabet: G(+2)=I, E(+2)=G, N(+2)=P, I(+2)=K, U(+2)=W, S(+2)=U. Thus, GENIUS becomes IGPKWU."></div>
      </div>
    </div>
  </section>

  <!-- FOUR MODULES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">CURRICULUM BREAKDOWN</span>
        <h2>Four Key Pillars of Logical Reasoning</h2>
        <p>A systematic progression from perceptual patterns to formal deductive reasoning.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">PILLAR 01</span>
            <h3 style="margin-top:6px;">Visual & Non-Verbal Logic</h3>
            <p>Series completion, analogy of geometric figures, rule detection, embedded figures, and water images.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–10</span>
              <a href="contact.html" class="btn-link">Explore Non-Verbal Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">PILLAR 02</span>
            <h3 style="margin-top:6px;">Analytical Seating & Ordering</h3>
            <p>Circular table seating, linear rankings, direction sense tests, and family tree relation mapping.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 4–10</span>
              <a href="contact.html" class="btn-link">Explore Seating & Ordering Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">PILLAR 03</span>
            <h3 style="margin-top:6px;">Cryptarithmetic & Number Grids</h3>
            <p>Alphametic puzzles, magic squares, matrix logic, missing number matrices, and balance beam puzzles.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 3–10</span>
              <a href="contact.html" class="btn-link">Explore Number Grids Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">PILLAR 04</span>
            <h3 style="margin-top:6px;">Critical Deduction & Syllogisms</h3>
            <p>Venn diagram representation, formal syllogisms, truth-teller liar puzzles, and condition evaluation.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 6–10</span>
              <a href="contact.html" class="btn-link">Explore Syllogisms Module →</a>
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
          <span class="eyebrow" style="color:var(--orange);">APTITUDE EVALUATION</span>
          <h2 style="margin-top:8px;">Assess Your Child's Mental Ability</h2>
          <p style="max-width:620px;">
            Discover how quickly your child identifies patterns and solves non-verbal puzzles with our 45-minute aptitude assessment.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book Reasoning Test →</a>
          <a href="practice-tests.html" class="btn btn-outline-light">Try Free Practice Test</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Logical Reasoning Program', 'reasoning', content);
}

// ============================================================================
// 8. ENGLISH OLYMPIAD DETAIL (english.html)
// ============================================================================
function generateEnglish() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-6.png" alt="Elementary students learning grammar in classroom with teacher" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="programs.html">Programs</a>
          <span class="breadcrumb-sep">/</span>
          <span>English Olympiad</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">LINGUISTIC EXCELLENCE • GRADES 1 TO 10</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">English Olympiad Coaching (IEO Foundation)</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Cultivating rich lexical precision, complex syntactical grammar, and critical reading comprehension for national and international English competitions.
        </p>
        <div style="margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <span class="demo-badge">Target: IEO • UIEO • SpellBee International</span>
          <span class="demo-badge">Eligibility: Grades 1 – 10</span>
        </div>
      </div>
    </div>
  </section>

  <!-- OVERVIEW & METHODOLOGY -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">PRECISION COMMUNICATION</span>
        <h2 style="margin-top:10px;">Beyond Conversational Fluency: Academic Mastery</h2>
        <p style="margin-top:14px;">
          The International English Olympiad (IEO) tests nuanced grammar mechanics, contextual word nuance, idioms, rhetorical structures, and the ability to interpret multi-layered narrative prose under tight time constraints.
        </p>
        <p style="margin-top:12px;">
          Our program approaches the English language with the same analytical rigor as mathematics. Students study word roots (Greek and Latin etymology), syntax trees, phrasal collocations, and formal logical rhetoric.
        </p>
        <div class="pillar-list">
          <div class="pillar-item">
            <h4>Etymological Roots</h4>
            <p>Decoding prefixes, roots, and suffixes to unlock the meaning of unfamiliar vocabulary instantly.</p>
          </div>
          <div class="pillar-item">
            <h4>Syntactical Grammar</h4>
            <p>Subject-verb agreement, subjunctive mood, dangling modifiers, and subtle tense shifts.</p>
          </div>
          <div class="pillar-item">
            <h4>Speed Comprehension</h4>
            <p>Skimming for thesis statements, identifying author tone, and extracting implicit evidence.</p>
          </div>
          <div class="pillar-item">
            <h4>Verbal Reasoning</h4>
            <p>Sentence completion, paragraph jumbles, logical coherence, and contextual register.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="editorial-img-box">
          <img src="images/image-44.png" alt="Digital classroom projection session with mentor lecturing on linguistic structure">
          <div class="editorial-caption-bar">
            <span>Syntactical Grammar Analysis</span>
            <small style="color:var(--orange);">Interactive Projection Lecture</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LINGUISTIC COMPETITIONS & PRACTICAL MODULES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">APPLIED LINGUISTICS</span>
        <h2>Linguistic Competitions & Practical Modules</h2>
        <p>Four experiential training environments designed to build competitive poise, broad literary vocabulary, and analytical comprehension.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Competition Stage</span>
            <img src="images/image-78.png" alt="Official Spelling Bee competition stage with timer display and student contestants on podium">
          </div>
          <div class="program-card-body">
            <h3>National Spelling Bee & Phonetic Accuracy</h3>
            <p>Mastering phoneme-grapheme correspondences, Latin and Greek etymological roots, and stage composure under timed countdowns.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 2–9</span>
              <a href="contact.html" class="btn-link">View Spelling Bee Training →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Reading Circles</span>
            <img src="images/image-77.png" alt="Students engrossed in reading competition sitting comfortably with books in library lounge">
          </div>
          <div class="program-card-body">
            <h3>Literary Immersion & Speed Reading Circles</h3>
            <p>Deep-dive reading sessions analyzing classic literature, author tone, thematic foreshadowing, and rhetorical nuance.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 3–10</span>
              <a href="resources.html" class="btn-link">View Curated Reading Lists →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Early Phonics</span>
            <img src="images/image-76.png" alt="Teacher explaining story structure and narrative elements on interactive smartboard">
          </div>
          <div class="program-card-body">
            <h3>Interactive Narrative Architecture & Story Grammar</h3>
            <p>Deconstructing narrative arcs, protagonist goals, plot tension, and sensory adjectives using smartboard visualizations.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–4</span>
              <a href="contact.html" class="btn-link">View Primary Story Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Advanced Syntax</span>
            <img src="images/image-83.png" alt="Faculty member in red saree explaining reading comprehension passage and grammar syntax on screen">
          </div>
          <div class="program-card-body">
            <h3>Socratic Textual Analysis & IEO Achievers Track</h3>
            <p>Targeted coaching for the high-weightage IEO Achievers section, covering subjunctive verbs, inversion, and complex clause parsing.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Grades 6–10</span>
              <a href="contact.html" class="btn-link">Enroll in IEO Achievers Track →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SAMPLE QUESTION -->
  <section class="section">
    <div class="container">
      <div class="sample-quiz-box" style="max-width:820px; margin:0 auto;">
        <span class="eyebrow" style="color:var(--orange);">IEO LINGUISTIC CHALLENGE</span>
        <h3 style="margin-top:8px; font-size:1.15rem;">
          Choose the correct sentence that demonstrates flawless grammatical parallel structure:
        </h3>
        <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
          Target: International English Olympiad (IEO) Class 8 Achievers Section
        </p>

        <div class="quiz-options">
          <button type="button" class="quiz-opt-btn" data-correct="false">(A)  The mentor advised the scholar to revise proofs, practicing formulas, and to sleep well.</button>
          <button type="button" class="quiz-opt-btn" data-correct="true">(B)  The mentor advised the scholar to revise proofs, to practice formulas, and to rest well.</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(C)  The mentor advised the scholar revising proofs, to practice formulas, and resting well.</button>
          <button type="button" class="quiz-opt-btn" data-correct="false">(D)  The mentor advised the scholar for revision of proofs, practice formulas, and resting.</button>
        </div>

        <div class="quiz-feedback" data-explanation="Parallel structure requires all items in a coordinate series to share the exact same grammatical form. Option B maintains consistent infinitive structures: 'to revise...', 'to practice...', 'and to rest...'. All other choices incorrectly mix infinitives with gerunds or prepositional phrases."></div>
      </div>
    </div>
  </section>

  <!-- FOUR MODULES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">CURRICULUM BREAKDOWN</span>
        <h2>Four Core Dimensions of English Olympiad</h2>
        <p>Comprehensive training covering all sections of international and national language tests.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MODULE 01</span>
            <h3 style="margin-top:6px;">Word Power & Etymology</h3>
            <p>Greek and Latin prefixes, homophones, collocations, idiomatic expressions, and foreign loan phrases.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 1–10</span>
              <a href="contact.html" class="btn-link">Explore Word Power Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MODULE 02</span>
            <h3 style="margin-top:6px;">Grammar & Syntax Mastery</h3>
            <p>Active and passive voice conversions, indirect speech, prepositions, determiners, and conditional clauses.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 3–10</span>
              <a href="contact.html" class="btn-link">Explore Syntax & Grammar Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MODULE 03</span>
            <h3 style="margin-top:6px;">Reading Comprehension & Tone</h3>
            <p>Inferential analysis, authorial attitude, central theme identification, and literary rhetorical devices.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 2–10</span>
              <a href="contact.html" class="btn-link">Explore Comprehension Module →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-body" style="padding-top:28px;">
            <span class="eyebrow">MODULE 04</span>
            <h3 style="margin-top:6px;">Spoken & Written Expression</h3>
            <p>Situational dialog completion, formal letter etiquette, paragraph connectors, and sentence rearrangement.</p>
            <div class="card-footer-action" style="margin-top:28px;">
              <span style="font-size:0.83rem; font-weight:700;">Grades 4–10</span>
              <a href="contact.html" class="btn-link">Explore Expression Module →</a>
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
          <span class="eyebrow" style="color:var(--orange);">ENROLLMENT</span>
          <h2 style="margin-top:8px;">Elevate Your Child's Linguistic Precision</h2>
          <p style="max-width:620px;">
            Book an English diagnostic evaluation and join our cohort of high-scoring International English Olympiad scholars.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Book English Diagnostic →</a>
          <a href="resources.html" class="btn btn-outline-light">Download English Sample</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('English Olympiad Program', 'english', content);
}

// ============================================================================
// 9. GRADE-WISE LEARNING (grades.html)
// ============================================================================
function generateGrades() {
  const content = `
  <!-- PAGE HERO -->
  <section class="page-hero">
    <img src="images/image-11.png" alt="Primary students in school uniforms taking grade-calibrated Olympiad assessment" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="programs.html">Programs</a>
          <span class="breadcrumb-sep">/</span>
          <span>Grade-Wise Learning</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">STRUCTURED DEVELOPMENTAL ROADMAPS</span>
        <h1 style="color:#FFFFFF; margin-top:8px;">Grade-Wise Learning Pathways (Grades 1 to 10)</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Tailored pedagogical stages designed to match cognitive readiness, from playful concrete patterns in early primary years to rigorous mathematical proofs in secondary grades.
        </p>
      </div>
    </div>
  </section>

  <!-- INTERACTIVE GRADE SELECTOR STRIP -->
  <section class="section section-soft" style="padding-bottom:28px;">
    <div class="container">
      <div class="section-head" style="margin-bottom:24px;">
        <span class="eyebrow">SELECT A GRADE</span>
        <h2>Choose Your Child's Current Grade</h2>
        <p>Click any grade button below to immediately view the corresponding developmental stage and curriculum track.</p>
      </div>

      <div class="grade-pills-row">
        <button type="button" class="grade-pill-btn is-active" data-stage="stage-foundation">Grade 1</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-foundation">Grade 2</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-foundation">Grade 3</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-development">Grade 4</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-development">Grade 5</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-development">Grade 6</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-advanced">Grade 7</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-advanced">Grade 8</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-competitive">Grade 9</button>
        <button type="button" class="grade-pill-btn" data-stage="stage-competitive">Grade 10</button>
      </div>
    </div>
  </section>

  <!-- FOUR DEVELOPMENTAL STAGE PANELS -->
  <section class="section">
    <div class="container" style="display:flex; flex-direction:column; gap:48px;">
      
      <!-- STAGE 1: Foundation Stage (Grades 1–3) -->
      <div id="stage-foundation" class="grade-stage-panel">
        <div class="editorial-split">
          <div>
            <div class="demo-badge">DEVELOPMENTAL STAGE 01</div>
            <h2 style="margin-top:10px;">Foundation Stage: Grades 1 – 3</h2>
            <p style="margin-top:14px;">
              <strong>Cognitive Focus:</strong> Intuitive number sense, concrete geometric manipulation, observational science, and playful non-verbal patterns.
            </p>
            <p style="margin-top:12px;">
              At this stage, we deliberately avoid pressurized exam environments. Classes are highly interactive and tactile, using tangible blocks, balance scales, and story-based puzzles to establish an instinctive love for discovery.
            </p>
            <div class="grid-2x2" style="margin-top:20px; gap:16px;">
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--orange);">
                <strong>Subjects Covered:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">Math Intuition, Science Curiosities, Pattern Play, Early English</p>
              </div>
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--black);">
                <strong>Target Competitions:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">IMO Level 1, NSO Level 1, Primary Kangourou</p>
              </div>
            </div>
            <div style="margin-top:24px;">
              <a href="contact.html" class="btn btn-primary btn-sm">Enquire for Grades 1–3 →</a>
            </div>
          </div>
          <div>
            <div class="editorial-img-box">
              <img src="images/image-7.png" alt="Young elementary students writing foundation test paper in classroom">
              <div class="editorial-caption-bar">
                <span>Early Years Foundation Class</span>
                <small style="color:var(--orange);">Grades 1 – 3 Cohort</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STAGE 2: Development Stage (Grades 4–6) -->
      <div id="stage-development" class="grade-stage-panel" style="display:block;">
        <div class="editorial-split-reverse">
          <div>
            <div class="editorial-img-box">
              <img src="images/image-30.png" alt="Middle school students in uniform taking seated Olympiad practice test">
              <div class="editorial-caption-bar">
                <span>Concept Formalization</span>
                <small style="color:var(--orange);">Grades 4 – 6 Cohort</small>
              </div>
            </div>
          </div>
          <div>
            <div class="demo-badge">DEVELOPMENTAL STAGE 02</div>
            <h2 style="margin-top:10px;">Development Stage: Grades 4 – 6</h2>
            <p style="margin-top:14px;">
              <strong>Cognitive Focus:</strong> Transitioning from concrete arithmetic to formal algebraic notation, systematic geometry, and physical science laws.
            </p>
            <p style="margin-top:12px;">
              Students learn to organize multi-step calculations, decompose complex word problems into clear variable expressions, and understand the scientific method behind physical experiments.
            </p>
            <div class="grid-2x2" style="margin-top:20px; gap:16px;">
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--orange);">
                <strong>Subjects Covered:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">Algebra Basics, Euclidean Angles, Kinetic Physics, IEO Verbal</p>
              </div>
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--black);">
                <strong>Target Competitions:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">NMTC Primary, IMO Level 2, NSO, SpellBee</p>
              </div>
            </div>
            <div style="margin-top:24px;">
              <a href="contact.html" class="btn btn-primary btn-sm">Enquire for Grades 4–6 →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- STAGE 3: Advanced Foundation (Grades 7–8) -->
      <div id="stage-advanced" class="grade-stage-panel" style="display:block;">
        <div class="editorial-split">
          <div>
            <div class="demo-badge">DEVELOPMENTAL STAGE 03</div>
            <h2 style="margin-top:10px;">Advanced Foundation: Grades 7 – 8</h2>
            <p style="margin-top:14px;">
              <strong>Cognitive Focus:</strong> Rigorous mathematical proof construction, chemical equation dynamics, Newtonian mechanics, and formal deductive syllogisms.
            </p>
            <p style="margin-top:12px;">
              This is the crucial bridge to high-school competitive excellence. Students tackle past papers from PRMO, NMTC Sub-Junior, and NSEJS Stage 1 under timed conditions with comprehensive error log reviews.
            </p>
            <div class="grid-2x2" style="margin-top:20px; gap:16px;">
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--orange);">
                <strong>Subjects Covered:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">Number Theory, Congruence, Stoichiometry, Optics, PRMO Prep</p>
              </div>
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--black);">
                <strong>Target Competitions:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">PRMO, NMTC Sub-Junior, NSEJS, NSO Stage 2</p>
              </div>
            </div>
            <div style="margin-top:24px;">
              <a href="contact.html" class="btn btn-primary btn-sm">Enquire for Grades 7–8 →</a>
            </div>
          </div>
          <div>
            <div class="editorial-img-box">
              <img src="images/image-35.png" alt="Upper middle school coaching batch writing midterm Olympiad exam">
              <div class="editorial-caption-bar">
                <span>Advanced Proofs & Diagnostics</span>
                <small style="color:var(--orange);">Grades 7 – 8 Cohort</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STAGE 4: Competitive Preparation (Grades 9–10) -->
      <div id="stage-competitive" class="grade-stage-panel" style="display:block;">
        <div class="editorial-split-reverse">
          <div>
            <div class="editorial-img-box">
              <img src="images/image-36.png" alt="High school coaching students in seminar classroom writing competitive test with mentor">
              <div class="editorial-caption-bar">
                <span>National Competitive Sprints</span>
                <small style="color:var(--orange);">Grades 9 – 10 Cohort</small>
              </div>
            </div>
          </div>
          <div>
            <div class="demo-badge">DEVELOPMENTAL STAGE 04</div>
            <h2 style="margin-top:10px;">Competitive Preparation: Grades 9 – 10</h2>
            <p style="margin-top:14px;">
              <strong>Cognitive Focus:</strong> National Olympiad Stage 2 qualifying standards, RMO/INMO mathematical proofs, IJSO national camp preparation, and early foundation for JEE/NEET.
            </p>
            <p style="margin-top:12px;">
              Students learn advanced topics like calculus fundamentals, combinatorics, organic reaction mechanisms, and kinematics under the guidance of former Olympiad medalists.
            </p>
            <div class="grid-2x2" style="margin-top:20px; gap:16px;">
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--orange);">
                <strong>Subjects Covered:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">RMO Level Math, IJSO Physics & Chem, Advanced NTSE Aptitude</p>
              </div>
              <div style="background-color:var(--bg-soft); padding:16px; border-radius:var(--radius-sm); border-left:3px solid var(--black);">
                <strong>Target Competitions:</strong>
                <p style="font-size:0.84rem; margin-top:4px;">RMO, INMO, IJSO, NSEJS, NTSE National</p>
              </div>
            </div>
            <div style="margin-top:24px;">
              <a href="contact.html" class="btn btn-primary btn-sm">Enquire for Grades 9–10 →</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- CLASSROOM LIFE ACROSS THE GRADES (STRICT 4 CARDS) -->
  <section class="section section-soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">AUTHENTIC LEARNING ENVIRONMENTS</span>
        <h2>Classroom Life Across the Grades</h2>
        <p>Experience how our mentors adapt teaching methods, student participation, and technology from early primary discovery to secondary competitive mastery.</p>
      </div>

      <div class="grid-2x2">
        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 1 – 3</span>
            <img src="images/image-79.png" alt="Primary students enthusiastically raising their hands during an interactive classroom discussion">
          </div>
          <div class="program-card-body">
            <h3>Active Primary Participation & Curiosity</h3>
            <p>Joyful, high-energy classrooms where young minds enthusiastically raise hands, share observations, and celebrate problem-solving discoveries.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Foundation Stage</span>
              <a href="contact.html" class="btn-link">Explore Primary Cohort →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 2 – 4</span>
            <img src="images/image-81.png" alt="Young student with glasses drawing geometric concepts on interactive digital smartboard with mentor">
          </div>
          <div class="program-card-body">
            <h3>Interactive Smartboard Geometric Discovery</h3>
            <p>Young learners interact directly with digital touch displays, manipulating polygon angles and spatial coordinates alongside attentive mentors.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Visual Intuition</span>
              <a href="contact.html" class="btn-link">Explore Discovery Cohort →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 4 – 6</span>
            <img src="images/image-85.png" alt="Primary faculty guiding young female students at desk with printed Olympiad worksheets">
          </div>
          <div class="program-card-body">
            <h3>Desk-Side Mentoring & Graded Worksheets</h3>
            <p>Small-group table guidance where mentors review worksheet steps in real time, catching arithmetic missteps before bad habits form.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Development Stage</span>
              <a href="contact.html" class="btn-link">Explore Middle School Cohort →</a>
            </div>
          </div>
        </div>

        <div class="program-card">
          <div class="program-card-media">
            <span class="card-grade-pill">Grades 8 – 10</span>
            <img src="images/image-80.png" alt="Secondary students gathered around seminar table discussing advanced textbook problems">
          </div>
          <div class="program-card-body">
            <h3>Collaborative Seminar Problem Solving & RMO Sprints</h3>
            <p>High-school scholars engage in deep peer discussions, comparing proof pathways and tackling multi-layered past Olympiad papers.</p>
            <div class="card-footer-action">
              <span style="font-size:0.83rem; font-weight:700;">Competitive Stage</span>
              <a href="contact.html" class="btn-link">Explore Competitive Cohort →</a>
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
          <span class="eyebrow" style="color:var(--orange);">DIAGNOSTIC PLACEMENT</span>
          <h2 style="margin-top:8px;">Find the Exact Stage for Your Child</h2>
          <p style="max-width:620px;">
            Book our diagnostic assessment to match your child with their optimal peer cohort and mentor group.
          </p>
        </div>
        <div class="btn-group" style="flex-shrink:0;">
          <a href="contact.html" class="btn btn-primary">Schedule Evaluation →</a>
          <a href="programs.html" class="btn btn-outline-light">View All Programs</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Grade-Wise Learning Roadmap', 'grades', content);
}

// Write to files
fs.writeFileSync(path.join(rootDir, 'mathematics.html'), generateMathematics());
fs.writeFileSync(path.join(rootDir, 'science.html'), generateScience());
fs.writeFileSync(path.join(rootDir, 'reasoning.html'), generateReasoning());
fs.writeFileSync(path.join(rootDir, 'english.html'), generateEnglish());
fs.writeFileSync(path.join(rootDir, 'grades.html'), generateGrades());

console.log('Successfully generated mathematics.html, science.html, reasoning.html, english.html, grades.html');
