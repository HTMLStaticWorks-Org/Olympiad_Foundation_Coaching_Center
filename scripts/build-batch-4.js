const fs = require('fs');
const path = require('path');
const { wrapHtml, rootDir } = require('./common');

// ============================================================================
// 15. CONTACT US (contact.html)
// ============================================================================
function generateContact() {
  const content = `
  <!-- HERO -->
  <section class="page-hero">
    <img src="images/image-18.png" alt="Parent academic counseling desk with institute counselors" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content text-center">
        <div class="breadcrumb justify-center">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span>Contact Us</span>
        </div>
        <span class="eyebrow" style="color:var(--orange);">DELHI & BENGALURU CAMPUSES • ADMISSIONS OPEN</span>
        <h1 style="color:var(--white); margin-top:8px;">Contact Admissions & Campus Centers</h1>
        <p class="lead" style="margin-top:14px; max-width:780px; margin-inline:auto;">
          Have questions about program eligibility, grade diagnostic testing, or batch timings? Our admissions counselors and subject heads are ready to assist you.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 1: DIRECT CONTACT CHANNELS (Phone, Email, Campuses, Hours with Professional Icons) -->
  <section class="section section-soft" style="padding-bottom:32px;">
    <div class="container">
      <div class="section-head text-center">
        <span class="eyebrow">DIRECT CONTACT CHANNELS</span>
        <h2>Reach Our Academic Desk Across Channels</h2>
        <p style="max-width:720px; margin-inline:auto;">
          Connect directly with our admissions officers, schedule a personalized diagnostic evaluation, or visit our interactive learning campuses.
        </p>
      </div>

      <div class="contact-cards-grid">
        <!-- Phone Support Card -->
        <div class="contact-info-card">
          <div class="contact-icon-bubble">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <h3>Phone Inquiries</h3>
          <p>Direct telephone guidance for grade diagnostic slots and admissions.</p>
          <div class="contact-primary-val">
            <a href="tel:+9101149208800" class="contact-highlight-link">+91 (011) 4920-8800</a>
          </div>
          <div class="contact-info-lines">
            <span class="contact-sub-info">Delhi: +91 (011) 4920-8800</span>
            <span class="contact-sub-info">Bengaluru: +91 (080) 6120-4400</span>
          </div>
          <span class="contact-timing-pill">Mon–Sat • 8:30 AM – 7:30 PM</span>
        </div>

        <!-- Email Admissions Card -->
        <div class="contact-info-card">
          <div class="contact-icon-bubble">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>Email Admissions</h3>
          <p>Submit prior student scorecards or request tailored scholarship criteria.</p>
          <div class="contact-primary-val">
            <a href="mailto:admissions@pragyanolympiad.edu.in" class="contact-highlight-link">admissions@pragyan.edu.in</a>
          </div>
          <div class="contact-info-lines">
            <span class="contact-sub-info">Delhi: delhi@pragyan.edu.in</span>
            <span class="contact-sub-info">Bengaluru: blr@pragyan.edu.in</span>
          </div>
          <span class="contact-timing-pill">Guaranteed Response in 2 Hrs</span>
        </div>

        <!-- Head Centers Card -->
        <div class="contact-info-card">
          <div class="contact-icon-bubble">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>Head Centers</h3>
          <p>Two urban coaching academies with smart lecture halls & testing labs.</p>
          <div class="contact-primary-val">
            <span class="contact-highlight-link" style="color:var(--text-dark);">Delhi NCR & Bengaluru</span>
          </div>
          <div class="contact-info-lines">
            <span class="contact-sub-info">Delhi: Pragyan Tower, South Campus</span>
            <span class="contact-sub-info">Bengaluru: Koramangala Ring Road</span>
          </div>
          <a href="#campusMapSection" class="contact-timing-pill" style="text-decoration:none; cursor:pointer;">View Campus Map Below ↓</a>
        </div>

        <!-- Operating Hours Card -->
        <div class="contact-info-card">
          <div class="contact-icon-bubble">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>Walk-in Hours</h3>
          <p>Visit our admissions office in person for campus tours & diagnostic mocks.</p>
          <div class="contact-primary-val">
            <span class="contact-highlight-link" style="color:var(--text-dark);">8:30 AM – 7:30 PM</span>
          </div>
          <div class="contact-info-lines">
            <span class="contact-sub-info">Mon – Sat: Regular Admissions</span>
            <span class="contact-sub-info">Sunday: 9:00 AM – 2:00 PM (Mocks)</span>
          </div>
          <span class="contact-timing-pill">Walk-ins Warmly Welcome</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: CONTACT FORM & CAMPUS DETAILS SPLIT -->
  <section class="section">
    <div class="container editorial-split">
      <div>
        <span class="eyebrow">ENQUIRY FORM</span>
        <h2 style="margin-top:10px;">Book a Diagnostic Test or Campus Visit</h2>
        <p style="margin-top:12px; margin-bottom:24px;">
          Submit your details below to schedule your child's 90-minute Olympiad aptitude evaluation.
        </p>

        <form id="contactEnquiryForm" class="form-card" data-validate="true">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label" for="parentName">Parent / Guardian Name *</label>
              <input type="text" id="parentName" name="parentName" class="form-control" placeholder="e.g. Ramesh Chandra" required>
              <span class="form-error" id="err-parentName"></span>
            </div>

            <div class="form-group">
              <label class="form-label" for="studentName">Student Name *</label>
              <input type="text" id="studentName" name="studentName" class="form-control" placeholder="e.g. Aditya Chandra" required>
              <span class="form-error" id="err-studentName"></span>
            </div>

            <div class="form-group">
              <label class="form-label" for="email">Email Address *</label>
              <input type="email" id="email" name="email" class="form-control" placeholder="parent@example.com" required>
              <span class="form-error" id="err-email"></span>
            </div>

            <div class="form-group">
              <label class="form-label" for="mobile">Mobile Number (10 digits) *</label>
              <input type="tel" id="mobile" name="mobile" class="form-control" placeholder="9876543210" required>
              <span class="form-error" id="err-mobile"></span>
            </div>

            <div class="form-group">
              <label class="form-label" for="gradeSelect">Student's Current Grade *</label>
              <select id="gradeSelect" name="gradeSelect" class="form-control" required>
                <option value="">Select Grade</option>
                <option value="1">Grade 1 (Foundation)</option>
                <option value="2">Grade 2 (Foundation)</option>
                <option value="3">Grade 3 (Foundation)</option>
                <option value="4">Grade 4 (Development)</option>
                <option value="5">Grade 5 (Development)</option>
                <option value="6">Grade 6 (Development)</option>
                <option value="7">Grade 7 (Advanced Foundation)</option>
                <option value="8">Grade 8 (Advanced Foundation)</option>
                <option value="9">Grade 9 (Competitive Prep)</option>
                <option value="10">Grade 10 (Competitive Prep)</option>
              </select>
              <span class="form-error" id="err-gradeSelect"></span>
            </div>

            <div class="form-group">
              <label class="form-label" for="programSelect">Interested Program *</label>
              <select id="programSelect" name="programSelect" class="form-control" required>
                <option value="">Select Primary Track</option>
                <option value="all">Comprehensive 4-Subject Foundation</option>
                <option value="math">Mathematics Olympiad Specialization</option>
                <option value="science">Science Olympiad Specialization</option>
                <option value="reasoning">Logical Reasoning & Mental Ability</option>
                <option value="english">English Olympiad Specialization</option>
              </select>
              <span class="form-error" id="err-programSelect"></span>
            </div>

            <div class="form-group full">
              <label class="form-label" for="preferredTime">Preferred Contact Window</label>
              <select id="preferredTime" name="preferredTime" class="form-control">
                <option value="morning">Morning (9:30 AM – 12:30 PM)</option>
                <option value="afternoon">Afternoon (1:30 PM – 4:30 PM)</option>
                <option value="evening">Evening (5:00 PM – 7:30 PM)</option>
              </select>
            </div>

            <div class="form-group full">
              <label class="form-label" for="message">Specific Questions or Prior Olympiad Scores</label>
              <textarea id="message" name="message" class="form-control" rows="3" placeholder="Share your child's academic background or specific goals..."></textarea>
            </div>
          </div>

          <div style="margin-top:18px;">
            <button type="submit" class="btn btn-primary" style="width:100%;">Submit Admission Enquiry →</button>
          </div>
          <div class="form-status" role="status"></div>
        </form>
      </div>

      <div>
        <span class="eyebrow">CAMPUS INFORMATION</span>
        <h3 style="margin-top:10px;">National Centers & Office Hours</h3>
        <div style="margin-top:18px; display:flex; flex-direction:column; gap:16px;">
          <!-- Delhi NCR Card -->
          <div class="campus-contact-card card-delhi">
            <div class="campus-contact-header">
              <div class="campus-title-wrap">
                <span class="campus-badge-orange">NATIONAL HEADQUARTERS</span>
                <h4>Delhi NCR Head Center</h4>
              </div>
            </div>
            <div class="contact-card-detail">
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>Pragyan Tower, 42 Institutional Enclave, South Campus Road, New Delhi 110049</span>
              </div>
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>Phone: <a href="tel:+9101149208800" class="contact-link">+91 (011) 4920-8800</a></span>
              </div>
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span>Email: <a href="mailto:delhi@pragyanolympiad.edu.in" class="contact-link">delhi@pragyanolympiad.edu.in</a></span>
              </div>
            </div>
          </div>

          <!-- Bengaluru Campus Card -->
          <div class="campus-contact-card card-blr">
            <div class="campus-contact-header">
              <div class="campus-title-wrap">
                <span class="campus-badge-dark">SOUTH TECH CAMPUS</span>
                <h4>Bengaluru Innovation Campus</h4>
              </div>
            </div>
            <div class="contact-card-detail">
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>78 Koramangala Industrial Ring Road, 4th Block, Bengaluru 560034</span>
              </div>
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>Phone: <a href="tel:+9108061204400" class="contact-link">+91 (080) 6120-4400</a></span>
              </div>
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span>Email: <a href="mailto:blr@pragyanolympiad.edu.in" class="contact-link">blr@pragyanolympiad.edu.in</a></span>
              </div>
            </div>
          </div>

          <!-- Administrative Hours Card -->
          <div class="campus-contact-card card-hours">
            <div class="campus-contact-header">
              <div class="campus-title-wrap">
                <span class="campus-badge-grey">OPERATING HOURS</span>
                <h4>Administrative & Counseling Hours</h4>
              </div>
            </div>
            <div class="contact-card-detail">
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span><strong>Monday – Saturday:</strong> 8:30 AM – 7:30 PM</span>
              </div>
              <div class="contact-detail-row">
                <span class="contact-icon-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </span>
                <span><strong>Sunday:</strong> 9:00 AM – 2:00 PM (Scheduled Diagnostic Tests Only)</span>
              </div>
            </div>
          </div>

          <!-- Immediate Guidance Helpdesk Card -->
          <div class="campus-contact-card" style="border-left:4px solid var(--orange); background:rgba(244,119,33,0.04);">
            <div class="campus-contact-header">
              <div class="campus-title-wrap">
                <span class="campus-badge-orange">INSTANT GUIDANCE</span>
                <h4>Need Immediate Advice?</h4>
              </div>
            </div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">
              Our academic counselors assist parents with grade diagnostic slots, curriculum roadmaps, and fee schedules.
            </p>
            <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
              <a href="tel:+9101149208800" class="btn btn-primary btn-sm">Direct Call: +91 (011) 4920-8800</a>
              <a href="#contactFaqSection" class="btn btn-outline-dark btn-sm">Read Admission FAQs ↓</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: CAMPUS MAP & DIRECTIONS SECTION -->
  <section class="section section-soft" id="campusMapSection">
    <div class="container">
      <div class="section-head text-center">
        <span class="eyebrow">CAMPUS REACH & ACCESSIBILITY</span>
        <h2>Interactive Campus Map & Directions</h2>
        <p style="max-width:740px; margin-inline:auto;">
          Visit our modern coaching facilities in New Delhi and Bengaluru. Both campuses are equipped with amphitheater lecture rooms, smart testing suites, and dedicated visitor parking.
        </p>
      </div>

      <div class="map-layout-grid">
        <div class="map-embed-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.665386762335!2d77.16524355!3d28.55018695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df69e46a5b9%3A0x6b8c9d123456789!2sSouth%20Campus%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="440" 
            style="border:0; display:block;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            title="Pragyan Olympiad Academy Campus Map">
          </iframe>
          <div class="map-live-tag">
            <span class="live-dot"></span>
            <span>Pragyan Tower • South Campus Road • Open Today for Walk-ins</span>
          </div>
        </div>

        <div class="map-location-sidebar">
          <!-- Delhi Navigation Card -->
          <div class="location-nav-card is-active">
            <div class="location-nav-badge">NATIONAL HEADQUARTERS</div>
            <h4>Delhi NCR Center</h4>
            <p class="location-nav-addr">
              Pragyan Tower, 42 Institutional Enclave, South Campus Road, New Delhi 110049
            </p>
            <div class="transit-info-list">
              <div class="transit-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="9" y1="19" x2="7" y2="22"/><line x1="15" y1="19" x2="17" y2="22"/></svg>
                <span>Durgabai Deshmukh South Campus Metro: <strong>350m walk</strong></span>
              </div>
              <div class="transit-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                <span>Free on-site parking for visiting parents</span>
              </div>
            </div>
            <div class="location-actions">
              <a href="https://maps.google.com/?q=South+Campus+New+Delhi" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">Get Driving Directions ↗</a>
              <a href="tel:+9101149208800" class="btn btn-primary btn-sm">Call Center</a>
            </div>
          </div>

          <!-- Bengaluru Navigation Card -->
          <div class="location-nav-card">
            <div class="location-nav-badge" style="background:rgba(36,36,36,0.08); color:var(--black);">SOUTH CAMPUS</div>
            <h4>Bengaluru Innovation Hub</h4>
            <p class="location-nav-addr">
              78 Koramangala Industrial Ring Road, 4th Block, Bengaluru 560034
            </p>
            <div class="transit-info-list">
              <div class="transit-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="9" y1="19" x2="7" y2="22"/><line x1="15" y1="19" x2="17" y2="22"/></svg>
                <span>Near Sony World Signal / Koramangala 4th Block Club</span>
              </div>
              <div class="transit-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                <span>Dedicated student drop-off & diagnostic testing bay</span>
              </div>
            </div>
            <div class="location-actions">
              <a href="https://maps.google.com/?q=Koramangala+Bengaluru" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">Get Driving Directions ↗</a>
              <a href="tel:+9108061204400" class="btn btn-primary btn-sm">Call Center</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: FREQUENTLY ASKED QUESTIONS (Below Map Section) -->
  <section class="section" id="contactFaqSection">
    <div class="container" style="max-width:860px;">
      <div class="section-head text-center">
        <span class="eyebrow">COMMON ADMISSION QUERIES</span>
        <h2>Frequently Asked Questions</h2>
        <p style="max-width:680px; margin-inline:auto;">
          Clear, transparent answers to help parents and scholars choose the right foundation roadmap and examination schedule.
        </p>
      </div>

      <div class="accordion" data-single="true" style="margin-top:32px;">
        <!-- Question 1 -->
        <div class="accordion-item is-open">
          <button class="accordion-trigger" type="button" aria-expanded="true">
            <span>What does the 90-minute diagnostic evaluation cover?</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="accordion-panel">
            <p>
              The 90-minute test evaluates numerical agility, pattern recognition, spatial reasoning, and conceptual comprehension appropriate for the child's grade, generating a comprehensive 6-page aptitude diagnostic scorecard.
            </p>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="accordion-item">
          <button class="accordion-trigger" type="button" aria-expanded="false">
            <span>Are weekend and weekday evening batches available?</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="accordion-panel">
            <p>
              Yes. We offer both Weekend Cohorts (Saturday–Sunday) and Weekday Evening Batches (Tue–Thu–Fri, 5:00 PM – 7:30 PM) to ensure zero conflict with standard school schedules.
            </p>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="accordion-item">
          <button class="accordion-trigger" type="button" aria-expanded="false">
            <span>How are students placed into competitive cohorts?</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="accordion-panel">
            <p>
              Following the baseline evaluation, students enter peer-matched cohorts: <em>Foundation Sprint</em> (core conceptual axioms), <em>State Olympiad Cohort</em> (timed problem solving), and <em>National Achievers Circle</em> (advanced non-routine proofs). Cohorts are recalibrated quarterly.
            </p>
          </div>
        </div>

        <!-- Question 4 -->
        <div class="accordion-item">
          <button class="accordion-trigger" type="button" aria-expanded="false">
            <span>Can parents observe live classes or meet faculty mentors?</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="accordion-panel">
            <p>
              Yes. Prospective parents may attend scheduled open classroom lectures. For enrolled scholars, we conduct monthly parent-educator conferences with metric scorecards, and parents can schedule 1-on-1 consultations with Subject Heads anytime.
            </p>
          </div>
        </div>

        <!-- Question 5 -->
        <div class="accordion-item">
          <button class="accordion-trigger" type="button" aria-expanded="false">
            <span>What study materials and digital portal resources are provided?</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="accordion-panel">
            <p>
              Enrolled scholars receive printed visual concept modules, 18-year solved past Olympiad archives (IMO, NSO, PRMO, IEO), 3-tier graded question banks, and unlimited 24/7 access to our Digital Learning Portal with 1,500+ printable worksheets and mock tests.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-cta-box text-center" style="margin-top:36px; padding:24px; background:var(--bg-soft); border-radius:var(--radius-md); border:1px solid var(--border-color);">
        <p style="font-size:0.92rem; color:var(--text-muted); margin-bottom:12px;">
          Have additional queries regarding admission criteria or scholarships? Our senior academic counselors are here to help.
        </p>
        <div class="btn-group justify-center">
          <a href="tel:+9101149208800" class="btn btn-primary btn-sm">Call Academic Desk: +91 (011) 4920-8800</a>
          <a href="mailto:admissions@pragyanolympiad.edu.in" class="btn btn-outline-dark btn-sm">Email Admissions</a>
        </div>
      </div>
    </div>
  </section>
  `;

  return wrapHtml('Contact Admissions', 'contact', content);
}

// ============================================================================
// 16. STUDENT LOGIN (login.html)
// ============================================================================
function generateLogin() {
  const content = `
  <div class="auth-page-wrapper">
    <!-- Top-Right Theme and RTL Buttons -->
    <div class="auth-top-bar">
      <button type="button" class="nav-icon-btn theme-toggle" aria-label="Toggle Theme" title="Toggle Light / Dark Theme">
        <svg class="theme-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button type="button" class="nav-icon-btn rtl-toggle" aria-label="Toggle Text Direction" title="Switch Text Direction (RTL / LTR)">
        <svg class="rtl-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M16 3l4 4-4 4"/><path d="M20 17H4M8 13l-4 4 4 4"/></svg>
      </button>
    </div>

    <!-- Centered Card Box -->
    <div class="auth-card-box">
      <!-- Website Branding Inside Card -->
      <div class="auth-card-brand">
        <a href="index.html" style="display:inline-flex; align-items:center; gap:12px; text-decoration:none;">
          <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" class="auth-brand-logo-img">
          <div style="text-align:left;">
            <span class="auth-brand-name">PRAGYAN</span>
            <span class="auth-brand-sub">Olympiad Academy</span>
          </div>
        </a>
      </div>

      <div style="text-align:center; margin-bottom:24px;">
        <span class="eyebrow" style="color:var(--orange);">PORTAL ACCESS</span>
        <h2 style="margin-top:6px; font-size:1.6rem;">Student &amp; Parent Login</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-top:4px;">Enter your credentials to continue to your dashboard.</p>
      </div>

      <form id="loginForm" class="form-card" data-validate="true" data-success-msg="Authentication verified. Redirecting to Student Dashboard...">
        <div class="form-group" style="margin-bottom:16px;">
          <label class="form-label" for="loginId">Student ID or Registered Email *</label>
          <input type="text" id="loginId" name="loginId" class="form-control" placeholder="e.g. PRAG-2026-8812 or parent@email.com" required>
          <span class="form-error" id="err-loginId"></span>
        </div>

        <div class="form-group" style="margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label class="form-label" for="password">Password *</label>
            <a href="contact.html" style="font-size:0.78rem; font-weight:700; color:var(--orange-deep);">Forgot Password?</a>
          </div>
          <div class="password-wrap">
            <input type="password" id="password" name="password" class="form-control" placeholder="Enter your password" required>
            <button type="button" class="password-toggle">Show</button>
          </div>
          <span class="form-error" id="err-password"></span>
        </div>

        <div style="display:flex; align-items:center; gap:8px; margin-bottom:20px; font-size:0.86rem;">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Remember my login on this device</label>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%;">Login to Dashboard →</button>
        <div class="form-status" role="status"></div>

        <!-- Professional Google & Apple Buttons Below CTA -->
        <div class="auth-divider">
          <span></span>
          <span class="auth-divider-text">Or continue with</span>
          <span></span>
        </div>

        <div class="auth-social-grid">
          <button type="button" class="btn-social btn-google" aria-label="Sign in with Google">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.14 0 9.89 0 12s.45 3.86 1.24 5.42l4.04-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Google</span>
          </button>
          <button type="button" class="btn-social btn-apple" aria-label="Sign in with Apple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.06 1.72-.93 2.74 1 .08 2-.5 2.62-1.24"/>
            </svg>
            <span>Apple</span>
          </button>
        </div>

        <div style="text-align:center; font-size:0.86rem; color:var(--text-muted);">
          Don't have an enrolled portal ID? <a href="register.html" style="color:var(--orange-deep); font-weight:700;">Register as New Student</a>
        </div>
      </form>
    </div>
  </div>
  `;

  return wrapHtml('Student Portal Login', 'login', content, { noHeader: true, noFooter: true });
}

// ============================================================================
// 17. STUDENT REGISTRATION (register.html)
// ============================================================================
function generateRegister() {
  const content = `
  <div class="auth-page-wrapper">
    <!-- Top-Right Theme and RTL Buttons -->
    <div class="auth-top-bar">
      <button type="button" class="nav-icon-btn theme-toggle" aria-label="Toggle Theme" title="Toggle Light / Dark Theme">
        <svg class="theme-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button type="button" class="nav-icon-btn rtl-toggle" aria-label="Toggle Text Direction" title="Switch Text Direction (RTL / LTR)">
        <svg class="rtl-icon-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M16 3l4 4-4 4"/><path d="M20 17H4M8 13l-4 4 4 4"/></svg>
      </button>
    </div>

    <!-- Centered Card Box -->
    <div class="auth-card-box auth-register-box">
      <!-- Website Branding Inside Card -->
      <div class="auth-card-brand">
        <a href="index.html" style="display:inline-flex; align-items:center; gap:12px; text-decoration:none;">
          <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" class="auth-brand-logo-img">
          <div style="text-align:left;">
            <span class="auth-brand-name">PRAGYAN</span>
            <span class="auth-brand-sub">Olympiad Academy</span>
          </div>
        </a>
      </div>

      <div style="text-align:center; margin-bottom:24px;">
        <span class="eyebrow" style="color:var(--orange);">PORTAL REGISTRATION</span>
        <h2 style="margin-top:6px; font-size:1.6rem;">Student Registration</h2>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-top:4px;">Complete the form below to initialize your student portal profile.</p>
      </div>

      <form id="registerForm" class="form-card" data-validate="true" data-success-msg="Registration successful! Redirecting to your student dashboard...">
        <!-- Form Inputs Arranged in One-by-One Vertical Alignment -->
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div class="form-group">
            <label class="form-label" for="regStudentName">Student Full Name *</label>
            <input type="text" id="regStudentName" name="studentName" class="form-control" placeholder="Aditya Sharma" required>
            <span class="form-error" id="err-studentName"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="regParentName">Parent / Guardian Name *</label>
            <input type="text" id="regParentName" name="parentName" class="form-control" placeholder="Dr. S. Sharma" required>
            <span class="form-error" id="err-parentName"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="regEmail">Email Address *</label>
            <input type="email" id="regEmail" name="email" class="form-control" placeholder="parent@email.com" required>
            <span class="form-error" id="err-email"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="regMobile">Mobile Number (10 digits) *</label>
            <input type="tel" id="regMobile" name="mobile" class="form-control" placeholder="9876543210" required>
            <span class="form-error" id="err-mobile"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="regGrade">Current School Grade *</label>
            <select id="regGrade" name="grade" class="form-control" required>
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
            </select>
            <span class="form-error" id="err-grade"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="regStudentId">Student ID (Optional)</label>
            <input type="text" id="regStudentId" name="studentId" class="form-control" placeholder="Leave blank to auto-generate">
          </div>

          <div class="form-group">
            <label class="form-label" for="regPassword">Create Password (min 6 chars) *</label>
            <div class="password-wrap">
              <input type="password" id="regPassword" name="password" class="form-control" placeholder="••••••••" required minlength="6">
              <button type="button" class="password-toggle">Show</button>
            </div>
            <span class="form-error" id="err-password"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="confirmPassword">Confirm Password *</label>
            <div class="password-wrap">
              <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="••••••••" required minlength="6">
              <button type="button" class="password-toggle">Show</button>
            </div>
            <span class="form-error" id="err-confirmPassword"></span>
          </div>
        </div>

        <div style="margin-top:20px;">
          <button type="submit" class="btn btn-primary" style="width:100%;">Create Student Account →</button>
        </div>
        <div class="form-status" role="status"></div>

        <!-- Professional Google & Apple Buttons Below CTA -->
        <div class="auth-divider">
          <span></span>
          <span class="auth-divider-text">Or continue with</span>
          <span></span>
        </div>

        <div class="auth-social-grid">
          <button type="button" class="btn-social btn-google" aria-label="Sign up with Google">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.14 0 9.89 0 12s.45 3.86 1.24 5.42l4.04-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Google</span>
          </button>
          <button type="button" class="btn-social btn-apple" aria-label="Sign up with Apple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.06 1.72-.93 2.74 1 .08 2-.5 2.62-1.24"/>
            </svg>
            <span>Apple</span>
          </button>
        </div>

        <!-- Clean One-by-One Bottom Navigation Links -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px; margin-top:16px; text-align:center; font-size:0.86rem;">
          <div>
            <span style="color:var(--text-muted);">Already have an account?</span>
            <a href="login.html" style="color:var(--orange-deep); font-weight:700; margin-left:4px;">Sign in to Portal</a>
          </div>
          <div>
            <a href="contact.html" style="color:var(--text-muted); font-size:0.82rem; text-decoration:none;">Need admissions guidance? <span style="color:var(--orange); font-weight:600;">Contact Us</span></a>
          </div>
        </div>
      </form>
    </div>
  </div>
  `;

  return wrapHtml('Student Portal Registration', 'register', content, { noHeader: true, noFooter: true });
}

// ============================================================================
// 18. STUDENT DASHBOARD (dashboard.html)
// ============================================================================
function generateDashboard() {
  const content = `
  <div class="portal-mobile-bar">
    <div style="display:flex; align-items:center; gap:10px;">
      <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" style="height:34px; width:auto; max-width:50px; object-fit:contain;">
      <span style="font-weight:700; font-size:0.95rem;">Pragyan Portal</span>
    </div>
    <button class="portal-sidebar-toggle btn btn-sm btn-outline-light" aria-label="Toggle navigation menu">Menu</button>
  </div>

  <div class="portal-shell">
    <!-- DASHBOARD SIDEBAR -->
    <aside class="portal-sidebar" aria-label="Dashboard Sidebar">
      <!-- Portal Brand Header -->
      <div style="padding: 4px 6px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 12px;">
        <a href="index.html" class="brand-logo" style="text-decoration:none; display:inline-flex; align-items:center; gap:10px;">
          <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" class="portal-brand-logo-img">
          <div class="brand-text">
            <span class="brand-title" style="color:#FFFFFF; font-size:1rem; font-weight:800; letter-spacing:0.5px;">PRAGYAN</span>
            <span class="brand-sub" style="font-size:0.62rem; color:var(--text-on-dark-muted); display:block; letter-spacing:0.3px;">STUDENT PORTAL</span>
          </div>
        </a>
      </div>

      <div class="portal-student-mini">
        <strong>Rohan Sundaram</strong>
        <span>Grade 8 • IMO & NSO Scholar</span>
        <div style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-top:2px;">ID: PRAG-2026-4409</div>
      </div>

      <!-- IN-PAGE NAVIGATION (Displays related section inside dashboard) -->
      <nav style="display:flex; flex-direction:column; gap:4px;" class="portal-nav-group">
        <a href="#overview" class="portal-nav-link is-active" data-tab="overview">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <span>Overview</span>
        </a>
        <a href="#programs" class="portal-nav-link" data-tab="programs">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <span>My Programs</span>
        </a>
        <a href="#practice-tests" class="portal-nav-link" data-tab="practice-tests">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span>Practice Tests</span>
        </a>
        <a href="#performance" class="portal-nav-link" data-tab="performance">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <span>My Results & Analytics</span>
        </a>
        <a href="#resources" class="portal-nav-link" data-tab="resources">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>Study Resources</span>
        </a>
        <a href="#schedule" class="portal-nav-link" data-tab="schedule">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>Class Schedule</span>
        </a>
        <a href="#mentor-support" class="portal-nav-link" data-tab="mentor-support">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Mentor Support</span>
        </a>
      </nav>

      <!-- SIDEBAR FOOTER: Settings (Theme & RTL) above, Logout down -->
      <div class="portal-sidebar-footer">
        <div class="portal-settings-row">
          <span style="font-size:0.75rem; color:var(--text-on-dark-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Theme & Direction</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <!-- Theme Toggle Button -->
            <button type="button" class="nav-icon-btn theme-toggle" aria-label="Toggle Theme" title="Toggle Light / Dark Theme" style="width:34px; height:34px; border-radius:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); color:#FFFFFF; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;">
              <svg class="theme-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <!-- RTL Toggle Button -->
            <button type="button" class="nav-icon-btn rtl-toggle" aria-label="Toggle Text Direction" title="Switch Text Direction (RTL / LTR)" style="width:34px; height:34px; border-radius:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); color:#FFFFFF; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;">
              <svg class="rtl-icon-svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M16 3l4 4-4 4"/><path d="M20 17H4M8 13l-4 4 4 4"/></svg>
            </button>
          </div>
        </div>

        <!-- Logout Button (Down, navigating to Home 1: index.html) -->
        <a href="index.html" class="portal-nav-link portal-logout-btn" title="Logout and return to Home 1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span>Logout</span>
        </a>
      </div>
    </aside>

    <!-- MAIN DASHBOARD CONTENT AREA (Contains all 7 tab sections inside dashboard) -->
    <main class="portal-main">

      <!-- ===================================================================
           TAB 1: OVERVIEW (Active Default)
           =================================================================== -->
      <section id="tab-overview" class="portal-tab-content is-active" aria-label="Overview Dashboard">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px; margin-bottom:28px;">
          <div>
            <div class="demo-badge">STUDENT LEARNING DASHBOARD</div>
            <h1 style="margin-top:6px; font-size:1.9rem;">Welcome back, Rohan!</h1>
            <p style="font-size:0.92rem; color:var(--text-muted);">You have completed 18 of 24 planned foundation milestones for this term.</p>
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-top:4px;">
            <button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests" onclick="switchDashboardTab('practice-tests'); return false;" style="cursor:pointer;">Launch Mock Test →</button>
            <button type="button" class="btn btn-outline btn-sm" data-tab-target="schedule" onclick="switchDashboardTab('schedule'); return false;" style="cursor:pointer;">View Timetable</button>
          </div>
        </div>

        <!-- 4 KPI WIDGETS -->
        <div class="kpi-grid-4">
          <div class="kpi-widget">
            <div class="kpi-val">18</div>
            <div class="kpi-lbl">Tests Attempted</div>
            <div class="progress-track"><div class="progress-fill" style="width:75%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">89.4%</div>
            <div class="kpi-lbl">Overall Accuracy</div>
            <div class="progress-track"><div class="progress-fill" style="width:89%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">98.2</div>
            <div class="kpi-lbl">National Percentile</div>
            <div class="progress-track"><div class="progress-fill" style="width:98%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">14 Days</div>
            <div class="kpi-lbl">Daily Practice Streak</div>
            <div class="progress-track"><div class="progress-fill" style="width:90%;"></div></div>
          </div>
        </div>

        <!-- SUBJECT PERFORMANCE CARDS -->
        <div style="margin-bottom:28px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
            <h3 style="font-size:1.25rem;">Subject-Wise Performance Breakdown</h3>
            <select id="dashboardSubjectFilter" class="filter-select">
              <option value="all">All 4 Subjects</option>
              <option value="math">Mathematics Only</option>
              <option value="science">Science Only</option>
              <option value="reasoning">Logical Reasoning Only</option>
              <option value="english">English Only</option>
            </select>
          </div>

          <div class="grid-2x2">
            <div class="portal-panel subject-kpi-card" data-subject="math">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong>Mathematics Olympiad</strong>
                <span style="font-family:var(--font-display); font-weight:800; color:var(--orange-deep);">94.0%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:94%;"></div></div>
              <p style="font-size:0.83rem; color:var(--text-muted); margin-top:8px;">
                Mastered: Euclidean Geometry, Polynomial Roots. Focus: Modulo Arithmetic speed.
              </p>
            </div>

            <div class="portal-panel subject-kpi-card" data-subject="science">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong>Science Olympiad</strong>
                <span style="font-family:var(--font-display); font-weight:800; color:var(--orange-deep);">88.5%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:88%;"></div></div>
              <p style="font-size:0.83rem; color:var(--text-muted); margin-top:8px;">
                Mastered: Ray Optics, Chemical Equations. Focus: Projectile kinematics vectors.
              </p>
            </div>

            <div class="portal-panel subject-kpi-card" data-subject="reasoning">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong>Logical Reasoning</strong>
                <span style="font-family:var(--font-display); font-weight:800; color:var(--orange-deep);">92.2%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:92%;"></div></div>
              <p style="font-size:0.83rem; color:var(--text-muted); margin-top:8px;">
                Mastered: Matrix Grids, Cube Folding. Focus: Syllogistic deduction.
              </p>
            </div>

            <div class="portal-panel subject-kpi-card" data-subject="english">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong>English Olympiad (IEO)</strong>
                <span style="font-family:var(--font-display); font-weight:800; color:var(--orange-deep);">84.0%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:84%;"></div></div>
              <p style="font-size:0.83rem; color:var(--text-muted); margin-top:8px;">
                Mastered: Reading speed. Focus: Etymological prefixes & Greek roots.
              </p>
            </div>
          </div>
        </div>

        <!-- UPCOMING TESTS & RECENT RESULTS SPLIT -->
        <div class="dashboard-split">
          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:14px;">Upcoming Practice Tests</h3>
            <div class="table-wrap">
              <table class="academic-table" style="min-width:480px;">
                <thead>
                  <tr>
                    <th>Test Title</th>
                    <th>Date & Time</th>
                    <th>Duration</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>All-India IMO Mock #05</strong></td>
                    <td>Nov 15, 2026 • 10:00 AM</td>
                    <td>60 Mins</td>
                    <td><button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests" onclick="switchDashboardTab('practice-tests'); return false;" style="cursor:pointer;">Start Test</button></td>
                  </tr>
                  <tr>
                    <td><strong>Physics Kinematics Sprint</strong></td>
                    <td>Nov 18, 2026 • 04:30 PM</td>
                    <td>45 Mins</td>
                    <td><button type="button" class="btn btn-outline btn-sm" data-tab-target="practice-tests" onclick="switchDashboardTab('practice-tests'); return false;" style="cursor:pointer;">Register</button></td>
                  </tr>
                  <tr>
                    <td><strong>Mental Ability Benchmark 3</strong></td>
                    <td>Nov 22, 2026 • 11:00 AM</td>
                    <td>50 Mins</td>
                    <td><button type="button" class="btn btn-outline btn-sm" data-tab-target="practice-tests" onclick="switchDashboardTab('practice-tests'); return false;" style="cursor:pointer;">Register</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:14px;">Recent Notifications</h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="padding:10px 12px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid var(--orange);">
                <strong style="font-size:0.88rem; display:block;">PRMO Doubt Clinic Added</strong>
                <span style="font-size:0.78rem; color:var(--text-muted);">Prof. Namboodiri live session: Friday 5:00 PM</span>
              </div>
              <div style="padding:10px 12px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid var(--black);">
                <strong style="font-size:0.88rem; display:block;">IMO Mock #04 Scores Released</strong>
                <span style="font-size:0.78rem; color:var(--text-muted);">You ranked #4 in Delhi Zonal Batch (56/60).</span>
              </div>
              <div style="padding:10px 12px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid var(--grey-mid);">
                <strong style="font-size:0.88rem; display:block;">New Worksheets Uploaded</strong>
                <span style="font-size:0.78rem; color:var(--text-muted);">Coordinate Geometry Level 3 challenge bank.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 2: MY PROGRAMS (In-Page View)
           =================================================================== -->
      <section id="tab-programs" class="portal-tab-content" aria-label="My Enrolled Programs">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">ACADEMIC ENROLLMENTS</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">My Enrolled Academic Programs</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Manage your active curriculum tracks, syllabus milestones, and faculty cohort batches for 2026.</p>
        </div>

        <!-- ENROLLMENT METRICS -->
        <div class="kpi-grid-4">
          <div class="kpi-widget">
            <div class="kpi-val">4 Programs</div>
            <div class="kpi-lbl">Active Enrolled Tracks</div>
            <div class="progress-track"><div class="progress-fill" style="width:100%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">78.5%</div>
            <div class="kpi-lbl">Avg Syllabus Progress</div>
            <div class="progress-track"><div class="progress-fill" style="width:78%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">4 Mentors</div>
            <div class="kpi-lbl">Assigned Faculty Leads</div>
            <div class="progress-track"><div class="progress-fill" style="width:100%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">Dec 12</div>
            <div class="kpi-lbl">Next Term Evaluation</div>
            <div class="progress-track"><div class="progress-fill" style="width:65%;"></div></div>
          </div>
        </div>

        <!-- 4 PROGRAM CARDS -->
        <div class="grid-2x2">
          <!-- Program 1 -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge" style="background:rgba(255,94,14,0.12); color:var(--orange-deep); font-weight:700;">PRIMARY OLYMPIAD TRACK</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">Batch #DEL-2026-M8</span>
              </div>
              <h3 style="font-size:1.25rem;">PRMO & Pre-RMO Foundation Batch (Grade 8 Elite)</h3>
              <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
                Rigorous mathematical proof constructions, non-routine Euclidean geometry, Diophantine equations, and polynomial roots.
              </p>
              <div style="margin-top:14px; font-size:0.82rem; color:var(--text-muted);">
                <strong>Mentor Lead:</strong> Prof. R. K. Namboodiri (IIT Bombay • 22 Yrs Exp)<br>
                <strong>Timings:</strong> Mon & Thu • 5:00 PM – 6:30 PM (Aryabhata Amphitheatre)
              </div>
              <div style="margin-top:14px;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                  <span>Syllabus Coverage</span>
                  <strong>78% (22/28 Modules)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:78%;"></div></div>
              </div>
            </div>
            <div style="display:flex; gap:10px; padding-top:12px; border-top:1px solid var(--grey-light);">
              <button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests">Practice Math Mock →</button>
              <button type="button" class="btn btn-outline btn-sm" data-tab-target="resources">Module Notes</button>
            </div>
          </div>

          <!-- Program 2 -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success); font-weight:700;">SCIENCE SPECIALIZATION</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">Batch #DEL-2026-S8</span>
              </div>
              <h3 style="font-size:1.25rem;">NSO National Science Olympiad Accelerator</h3>
              <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
                Conceptual mechanics, thin lens optics, kinetic equilibrium, reaction stoichiometry, and cellular biology diagnostics.
              </p>
              <div style="margin-top:14px; font-size:0.82rem; color:var(--text-muted);">
                <strong>Mentor Lead:</strong> Dr. Suniti Banerjee (IISc Bangalore • 16 Yrs Exp)<br>
                <strong>Timings:</strong> Tue • 5:00 PM – 6:30 PM (Raman Physics Lab)
              </div>
              <div style="margin-top:14px;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                  <span>Syllabus Coverage</span>
                  <strong>65% (16/24 Modules)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:65%;"></div></div>
              </div>
            </div>
            <div style="display:flex; gap:10px; padding-top:12px; border-top:1px solid var(--grey-light);">
              <button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests">Practice Science Mock →</button>
              <button type="button" class="btn btn-outline btn-sm" data-tab-target="resources">Module Notes</button>
            </div>
          </div>

          <!-- Program 3 -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge" style="background:rgba(217,119,6,0.12); color:var(--warning); font-weight:700;">SPEED & LOGIC BENCHMARK</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">Batch #PAN-2026-R8</span>
              </div>
              <h3 style="font-size:1.25rem;">Mental Ability & Logical Reasoning Masterclass</h3>
              <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
                Non-verbal matrix grids, folding cubes, syllogistic deductions, algorithmic coding sequences, and speed puzzles.
              </p>
              <div style="margin-top:14px; font-size:0.82rem; color:var(--text-muted);">
                <strong>Mentor Lead:</strong> Maheshwar Trivedi (Cognitive Psychology • 14 Yrs Exp)<br>
                <strong>Timings:</strong> Wed • 4:30 PM – 6:00 PM (Turing Hall)
              </div>
              <div style="margin-top:14px;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                  <span>Syllabus Coverage</span>
                  <strong>85% (17/20 Modules)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:85%;"></div></div>
              </div>
            </div>
            <div style="display:flex; gap:10px; padding-top:12px; border-top:1px solid var(--grey-light);">
              <button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests">Practice Logic Mock →</button>
              <button type="button" class="btn btn-outline btn-sm" data-tab-target="resources">Module Notes</button>
            </div>
          </div>

          <!-- Program 4 -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge" style="background:rgba(0,102,204,0.12); color:#0066CC; font-weight:700;">LANGUAGE & SYNTAX</span>
                <span style="font-size:0.75rem; color:var(--text-muted);">Batch #DEL-2026-E8</span>
              </div>
              <h3 style="font-size:1.25rem;">International English Olympiad (IEO) Achievers Sprint</h3>
              <p style="font-size:0.86rem; color:var(--text-muted); margin-top:6px;">
                Etymological vocabulary roots, syntactic grammar nuances, inferential reading speed, and spoken expression analysis.
              </p>
              <div style="margin-top:14px; font-size:0.82rem; color:var(--text-muted);">
                <strong>Mentor Lead:</strong> Anuradha Sen Sharma (JNU Linguistics • 18 Yrs Exp)<br>
                <strong>Timings:</strong> Sat • 11:30 AM – 1:00 PM (Seminar Room 2)
              </div>
              <div style="margin-top:14px;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                  <span>Syllabus Coverage</span>
                  <strong>50% (10/20 Modules)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:50%;"></div></div>
              </div>
            </div>
            <div style="display:flex; gap:10px; padding-top:12px; border-top:1px solid var(--grey-light);">
              <button type="button" class="btn btn-primary btn-sm" data-tab-target="practice-tests">Practice IEO Mock →</button>
              <button type="button" class="btn btn-outline btn-sm" data-tab-target="resources">Module Notes</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 3: PRACTICE TESTS (In-Page View)
           =================================================================== -->
      <section id="tab-practice-tests" class="portal-tab-content" aria-label="Practice Tests and Mock Exams">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">TEST SIMULATION & BENCHMARKS</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">Practice Tests & Mock Exam Workspace</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Attempt timed diagnostic tests, topic-level problem sets, and All-India level benchmarks.</p>
        </div>

        <!-- 4 LIVE / SCHEDULED MOCK TESTS -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px; margin-bottom:32px;">
          <!-- Test 1 -->
          <div class="portal-panel" style="border-top:3.5px solid var(--orange);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:rgba(255,94,14,0.14); color:var(--orange-deep); font-weight:700;">LIVE MOCK TEST</span>
              <span style="font-size:0.78rem; color:var(--text-muted);">Tier 1 National</span>
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:6px;">All-India IMO Mock Benchmark #05</h3>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">30 Non-Routine Olympiad Questions • Euclidean Geometry, Polynomials & Modulo Arithmetic.</p>
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:14px; background:var(--bg-soft); padding:8px 12px; border-radius:6px;">
              <span><strong>Duration:</strong> 60 Mins</span>
              <span><strong>Marking:</strong> +3 / -1</span>
              <span><strong>Questions:</strong> 30</span>
            </div>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%;" onclick="alert('Starting All-India IMO Mock #05 exam simulation environment...');">Launch Test Environment →</button>
          </div>

          <!-- Test 2 -->
          <div class="portal-panel" style="border-top:3.5px solid var(--success);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:rgba(31,138,76,0.14); color:var(--success); font-weight:700;">LIVE SCIENCE TEST</span>
              <span style="font-size:0.78rem; color:var(--text-muted);">NSEJS Stage 1</span>
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:6px;">NSEJS Physics Rapid Diagnostic #03</h3>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">25 Problems • Geometric Optics, Vector Kinematics & Energy Work Theorems.</p>
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:14px; background:var(--bg-soft); padding:8px 12px; border-radius:6px;">
              <span><strong>Duration:</strong> 45 Mins</span>
              <span><strong>Marking:</strong> +4 / -1</span>
              <span><strong>Questions:</strong> 25</span>
            </div>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%;" onclick="alert('Starting NSEJS Physics Rapid Diagnostic #03 simulation environment...');">Launch Test Environment →</button>
          </div>

          <!-- Test 3 -->
          <div class="portal-panel" style="border-top:3.5px solid var(--black);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:rgba(0,0,0,0.08); color:var(--black); font-weight:700;">TOPIC BENCHMARK</span>
              <span style="font-size:0.78rem; color:var(--text-muted);">Mental Ability</span>
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:6px;">Logical Reasoning Benchmark 4</h3>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">35 Matrix & Spatial Reasoning Benchmarks • Non-verbal figure analysis.</p>
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:14px; background:var(--bg-soft); padding:8px 12px; border-radius:6px;">
              <span><strong>Duration:</strong> 50 Mins</span>
              <span><strong>Marking:</strong> +1 / 0</span>
              <span><strong>Questions:</strong> 35</span>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%;" onclick="alert('Starting Logical Reasoning Benchmark 4...');">Take Benchmark →</button>
          </div>

          <!-- Test 4 -->
          <div class="portal-panel" style="border-top:3.5px solid var(--grey-mid);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:rgba(0,102,204,0.12); color:#0066CC; font-weight:700;">SUBJECTIVE DRILL</span>
              <span style="font-size:0.78rem; color:var(--text-muted);">PRMO Prep</span>
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:6px;">PRMO Number Theory Problem Set B</h3>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">15 Deep Challenge Proofs • Modular arithmetic & Chinese Remainder Theorem.</p>
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:14px; background:var(--bg-soft); padding:8px 12px; border-radius:6px;">
              <span><strong>Duration:</strong> 45 Mins</span>
              <span><strong>Marking:</strong> Subjective</span>
              <span><strong>Questions:</strong> 15</span>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%;" onclick="alert('Starting PRMO Number Theory Problem Set B...');">Take Problem Set →</button>
          </div>
        </div>

        <!-- PAST TEST RESULTS LOG -->
        <div class="portal-panel">
          <h3 style="font-size:1.15rem; margin-bottom:14px;">Recent Completed Assessments</h3>
          <div class="table-wrap">
            <table class="academic-table" style="min-width:600px;">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Date Taken</th>
                  <th>Score</th>
                  <th>Accuracy</th>
                  <th>Zonal Standing</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>All-India IMO Mock #04</strong></td>
                  <td>Nov 08, 2026</td>
                  <td><strong style="color:var(--orange-deep);">56 / 60</strong></td>
                  <td>93.3%</td>
                  <td><span class="badge" style="background:rgba(255,94,14,0.12); color:var(--orange-deep);">Rank #4</span></td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing detailed answer key and solutions for IMO Mock #04...');">View Solutions</button></td>
                </tr>
                <tr>
                  <td><strong>Science Olympiad Diagnostic #02</strong></td>
                  <td>Nov 02, 2026</td>
                  <td><strong style="color:var(--orange-deep);">44 / 50</strong></td>
                  <td>88.0%</td>
                  <td><span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success);">Rank #9</span></td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing detailed answer key and solutions for Science Diagnostic #02...');">View Solutions</button></td>
                </tr>
                <tr>
                  <td><strong>Logical Reasoning Benchmark 3</strong></td>
                  <td>Oct 26, 2026</td>
                  <td><strong style="color:var(--orange-deep);">47 / 50</strong></td>
                  <td>94.0%</td>
                  <td><span class="badge" style="background:rgba(255,94,14,0.12); color:var(--orange-deep);">Rank #3</span></td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing detailed answer key and solutions for Logic Benchmark 3...');">View Solutions</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 4: RESULTS & ANALYTICS (In-Page View)
           =================================================================== -->
      <section id="tab-performance" class="portal-tab-content" aria-label="Results and Analytics">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">ACADEMIC DIAGNOSTICS</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">Performance Analytics & Growth Trajectory</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Continuous assessment metrics tracking cognitive speed, problem accuracy, and national percentile standing.</p>
        </div>

        <!-- 4 CORE ANALYTICS KPIS -->
        <div class="kpi-grid-4">
          <div class="kpi-widget">
            <div class="kpi-val">89.4%</div>
            <div class="kpi-lbl">Overall Accuracy (+4.2%)</div>
            <div class="progress-track"><div class="progress-fill" style="width:89%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">52 Sec</div>
            <div class="kpi-lbl">Average Speed / Question</div>
            <div class="progress-track"><div class="progress-fill" style="width:82%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">#42</div>
            <div class="kpi-lbl">All-India National Rank</div>
            <div class="progress-track"><div class="progress-fill" style="width:96%;"></div></div>
          </div>
          <div class="kpi-widget">
            <div class="kpi-val">1,420</div>
            <div class="kpi-lbl">Questions Solved</div>
            <div class="progress-track"><div class="progress-fill" style="width:71%;"></div></div>
          </div>
        </div>

        <!-- TOPIC MASTERY BREAKDOWN -->
        <div class="dashboard-split" style="margin-bottom:28px;">
          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:16px;">Core Topic Proficiency Matrix</h3>
            <div style="display:flex; flex-direction:column; gap:14px;">
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Euclidean Geometry & Cyclic Quads</span>
                  <strong style="color:var(--success);">96% (Mastered)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:96%; background:var(--success);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Polynomial Roots & Factoring</span>
                  <strong style="color:var(--success);">92% (Mastered)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:92%; background:var(--success);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Matrix Figure Logic & Spatial Cubes</span>
                  <strong style="color:var(--success);">95% (Mastered)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:95%; background:var(--success);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Ray Optics & Thin Lens Aberrations</span>
                  <strong style="color:var(--orange-deep);">91% (Mastered)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:91%; background:var(--orange-deep);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Classical Kinematics & Vectors</span>
                  <strong style="color:var(--warning);">84% (Proficient)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:84%; background:var(--warning);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:0.86rem; margin-bottom:4px;">
                  <span>Modular Arithmetic & Number Theory</span>
                  <strong style="color:var(--danger);">78% (Focus Needed)</strong>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:78%; background:var(--danger);"></div></div>
              </div>
            </div>
          </div>

          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:14px;">Faculty Diagnostic Recommendations</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="padding:14px; border-radius:8px; background:var(--bg-soft); border-left:3.5px solid var(--orange);">
                <strong style="font-size:0.9rem; color:var(--text-main); display:block;">Prof. Namboodiri's Speed Recommendation</strong>
                <p style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
                  "Rohan's geometric deduction is among the top 1% nationwide. We recommend spending 25 minutes daily on modulo arithmetic shortcuts to shave 15 seconds off PRMO Section B questions."
                </p>
              </div>
              <div style="padding:14px; border-radius:8px; background:var(--bg-soft); border-left:3.5px solid var(--success);">
                <strong style="font-size:0.9rem; color:var(--text-main); display:block;">Dr. Suniti Banerjee's Laboratory Note</strong>
                <p style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
                  "Excellent grasp of ray tracing and refractive indices. Proceed to multi-lens optical configurations and experimental optics worksheet #04 before the upcoming mock."
                </p>
              </div>
              <div style="padding:14px; border-radius:8px; background:var(--bg-soft); border-left:3.5px solid var(--black);">
                <strong style="font-size:0.9rem; color:var(--text-main); display:block;">Maheshwar Trivedi's Cognitive Benchmark</strong>
                <p style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
                  "Clock and calendar puzzle accuracy reached 100% on the benchmark. Ready to unlock advanced syllogisms and Venn diagram deduction banks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 5: STUDY RESOURCES (In-Page View)
           =================================================================== -->
      <section id="tab-resources" class="portal-tab-content" aria-label="Study Resources and Vault">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">CURATED LEARNING VAULT</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">Study Resources & Problem Banks</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Download faculty-authored non-routine problem sets, comprehensive formula compendiums, and replay recorded masterclasses.</p>
        </div>

        <!-- 9 DOWNLOADABLE / STREAMABLE RESOURCE CARDS (3x3 ALIGNMENT) -->
        <div class="resources-grid-3x3">
          <!-- Resource 1 (Row 1, Col 1) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(255,94,14,0.12); color:var(--orange-deep); font-weight:700;">MATHEMATICS PDF</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">PRMO Euclidean Geometry Problem Vault</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">120 curated non-routine Olympiad problems with complete geometric proofs, auxiliary line hints, and angle chasing solutions.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 4.2 MB • Updated for 2026 Batch</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading PRMO Euclidean Geometry Problem Vault (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 2 (Row 1, Col 2) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(255,94,14,0.12); color:var(--orange-deep); font-weight:700;">FORMULA COMPENDIUM</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Comprehensive Olympiad Formula Sheet</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">Axiomatic formulas for Algebra, Number Theory, Geometry, Combinatorics, and modular arithmetic benchmarks.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 2.8 MB • Quick Reference Guide</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading Olympiad Formula Sheet (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 3 (Row 1, Col 3) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success); font-weight:700;">SCIENCE WORKBOOK</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">NSEJS Mechanics & Optics Practice Vault</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">85 multi-step conceptual physics problems with experimental ray diagrams, laboratory data tables, and step-by-step solutions.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 5.6 MB • Stage 1 & 2 Syllabus</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading NSEJS Mechanics & Optics Practice Vault (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 4 (Row 2, Col 1) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(217,119,6,0.12); color:var(--warning); font-weight:700;">LOGIC HANDBOOK</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Spatial Reasoning & Matrix Patterns</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">60 non-verbal figure matrices, cube transformation diagrams, direction sense shortcuts, and algorithmic syllogisms.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 3.4 MB • NTSE & NMMS Benchmark</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading Spatial Reasoning & Matrix Patterns Handbook (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 5 (Row 2, Col 2) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(14,142,165,0.12); color:#0E8EA5; font-weight:700;">CHEMISTRY VAULT</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Inorganic Reactions & Stoichiometry Workbook</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">75 multi-concept problems covering mole concepts, oxidation-reduction titration curves, and molecular orbital models.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 3.9 MB • NSO & IJSO Chemistry Prep</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading Inorganic Reactions & Stoichiometry Workbook (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 6 (Row 2, Col 3) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(124,58,237,0.12); color:#7C3AED; font-weight:700;">ENGLISH LANGUAGE GUIDE</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">IEO Etymological Lexicon & Reading Compendium</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">500+ classical Latin & Greek roots, syntactical error detection drills, and rapid inferential comprehension passages.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Size: 3.1 MB • International English Olympiad</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Downloading IEO Etymological Lexicon (PDF)...');">Download PDF Document ↓</button>
          </div>

          <!-- Resource 7 (Row 3, Col 1) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(0,102,204,0.12); color:#0066CC; font-weight:700;">RECORDED MASTERCLASS</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Modulo Arithmetic & Diophantine Equations</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">90-minute live masterclass recording by Prof. R. K. Namboodiri covering non-routine integer divisibility problems.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Duration: 92 Mins • High Definition Video</div>
            </div>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Opening Recorded Masterclass Video Player...');">Watch Video Recording ▶</button>
          </div>

          <!-- Resource 8 (Row 3, Col 2) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(0,102,204,0.12); color:#0066CC; font-weight:700;">RECORDED MASTERCLASS</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Ray Optics & Thin Lens Formulations</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">80-minute lecture archive by Dr. Suniti Banerjee with live optical bench derivations and refractive index experiments.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Duration: 84 Mins • High Definition Video</div>
            </div>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Opening Recorded Masterclass Video Player...');">Watch Video Recording ▶</button>
          </div>

          <!-- Resource 9 (Row 3, Col 3) -->
          <div class="portal-panel" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(0,102,204,0.12); color:#0066CC; font-weight:700;">RECORDED MASTERCLASS</span>
              <h3 style="font-size:1.15rem; margin-top:8px;">Algorithmic Logic & Spatial Transformation</h3>
              <p style="font-size:0.84rem; color:var(--text-muted); margin-top:6px; line-height:1.5;">75-minute masterclass archive by Maheshwar Trivedi deconstructing 3D folding cubes and complex non-verbal matrix sequences.</p>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:10px;">Duration: 78 Mins • High Definition Video</div>
            </div>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%; cursor:pointer;" onclick="alert('Opening Recorded Masterclass Video Player...');">Watch Video Recording ▶</button>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 6: CLASS SCHEDULE (In-Page View)
           =================================================================== -->
      <section id="tab-schedule" class="portal-tab-content" aria-label="Class Schedule and Timetable">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">TIMETABLE & LECTURES</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">Weekly Live Lecture Schedule</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Personalized lecture timetable, laboratory sessions, and 1-on-1 faculty doubt clearance hours.</p>
        </div>

        <!-- UPCOMING CLASS CALLOUT -->
        <div class="portal-panel" style="margin-bottom:28px; background:linear-gradient(135deg, rgba(255,94,14,0.08) 0%, rgba(255,94,14,0.02) 100%); border-left:4px solid var(--orange);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div>
              <span class="badge" style="background:rgba(255,94,14,0.16); color:var(--orange-deep); font-weight:700;">NEXT SCHEDULED SESSION</span>
              <h3 style="font-size:1.3rem; margin-top:6px;">Euclidean Geometry: Angle Chasing & Cyclic Quadrilaterals</h3>
              <p style="font-size:0.88rem; color:var(--text-muted); margin-top:4px;">
                Prof. R. K. Namboodiri • Today, 5:00 PM – 6:30 PM • Room: Aryabhata Amphitheatre
              </p>
            </div>
            <button type="button" class="btn btn-primary" onclick="alert('Connecting to Virtual Live Amphitheatre...');">Join Live Lecture →</button>
          </div>
        </div>

        <!-- WEEKLY TIMETABLE TABLE -->
        <div class="portal-panel">
          <h3 style="font-size:1.15rem; margin-bottom:14px;">Weekly Schedule (Monday through Saturday)</h3>
          <div class="table-wrap">
            <table class="academic-table" style="min-width:680px;">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Timing</th>
                  <th>Subject & Topic</th>
                  <th>Session Type</th>
                  <th>Faculty Mentor</th>
                  <th>Location / Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monday</strong></td>
                  <td>05:00 PM – 06:30 PM</td>
                  <td>Mathematics: Euclidean Geometry</td>
                  <td>Live Lecture & Proofs</td>
                  <td>Prof. R. K. Namboodiri</td>
                  <td>Aryabhata Amphitheatre</td>
                </tr>
                <tr>
                  <td><strong>Tuesday</strong></td>
                  <td>05:00 PM – 06:30 PM</td>
                  <td>Science: Mechanics & Ray Optics</td>
                  <td>Practical Demonstration</td>
                  <td>Dr. Suniti Banerjee</td>
                  <td>Raman Physics Lab</td>
                </tr>
                <tr>
                  <td><strong>Wednesday</strong></td>
                  <td>04:30 PM – 06:00 PM</td>
                  <td>Logical Reasoning: Matrix Puzzles</td>
                  <td>Speed Strategy Clinic</td>
                  <td>Maheshwar Trivedi</td>
                  <td>Turing Hall</td>
                </tr>
                <tr>
                  <td><strong>Thursday</strong></td>
                  <td>05:00 PM – 06:30 PM</td>
                  <td>Mathematics: Number Theory & Modulo</td>
                  <td>Problem Solving Sprint</td>
                  <td>Prof. R. K. Namboodiri</td>
                  <td>Aryabhata Amphitheatre</td>
                </tr>
                <tr>
                  <td><strong>Friday</strong></td>
                  <td>05:00 PM – 06:00 PM</td>
                  <td>1-on-1 Academic Doubt Clearance</td>
                  <td>Doubt Resolution Clinic</td>
                  <td>Senior Faculty Cohort</td>
                  <td>Mentorship Wing Room 4</td>
                </tr>
                <tr>
                  <td><strong>Saturday</strong></td>
                  <td>10:00 AM – 11:30 AM</td>
                  <td>All-India Weekly Diagnostic Mock Exam</td>
                  <td>Proctored Online Mock</td>
                  <td>Olympiad Exam Board</td>
                  <td>Testing Portal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           TAB 7: MENTOR SUPPORT (In-Page View)
           =================================================================== -->
      <section id="tab-mentor-support" class="portal-tab-content" aria-label="Mentor Support and Doubt Clearance">
        <div style="margin-bottom:28px;">
          <div class="demo-badge">DOUBT CLEARANCE & ADVISORY</div>
          <h1 style="margin-top:6px; font-size:1.9rem;">Mentor Support & Faculty Guidance</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Submit academic questions directly to subject leads or book a 1-on-1 problem-solving session.</p>
        </div>

        <div class="dashboard-split" style="margin-bottom:28px;">
          <!-- SUBMIT A DOUBT FORM -->
          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:14px;">Submit an Academic Doubt</h3>
            <form id="mentorDoubtForm" onsubmit="event.preventDefault(); alert('Your academic query has been submitted to your assigned mentor. Response will be posted within 4 hours.'); this.reset();">
              <div class="form-group" style="margin-bottom:14px;">
                <label class="form-label" for="doubtSubject">Subject Discipline *</label>
                <select id="doubtSubject" class="form-control" required>
                  <option value="">Select Subject</option>
                  <option value="math">Mathematics (Prof. R. K. Namboodiri)</option>
                  <option value="physics">Physics (Dr. Suniti Banerjee)</option>
                  <option value="chemistry">Chemistry (Venkatesh Raman)</option>
                  <option value="reasoning">Logical Reasoning (Maheshwar Trivedi)</option>
                  <option value="english">English (Anuradha Sen Sharma)</option>
                </select>
              </div>

              <div class="form-group" style="margin-bottom:14px;">
                <label class="form-label" for="doubtTopic">Problem Topic / Theorem *</label>
                <input type="text" id="doubtTopic" class="form-control" placeholder="e.g. Diophantine equations or Angle Bisector Theorem" required>
              </div>

              <div class="form-group" style="margin-bottom:16px;">
                <label class="form-label" for="doubtQuestion">Describe Your Query in Detail *</label>
                <textarea id="doubtQuestion" class="form-control" rows="4" placeholder="Explain the specific step or concept where you need guidance..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width:100%;">Submit Question to Mentor →</button>
            </form>
          </div>

          <!-- ASSIGNED MENTORS & OFFICE HOURS -->
          <div class="portal-panel">
            <h3 style="font-size:1.15rem; margin-bottom:14px;">Assigned Mentors & Office Hours</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="padding:12px 14px; border-radius:8px; background:var(--bg-soft); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:0.92rem; display:block;">Prof. R. K. Namboodiri</strong>
                  <span style="font-size:0.78rem; color:var(--text-muted);">Head of Mathematics • IIT Bombay</span>
                  <div style="font-size:0.75rem; color:var(--orange-deep); margin-top:2px;">Office Hours: Mon & Wed 4:00 PM – 6:00 PM</div>
                </div>
                <button type="button" class="btn btn-outline btn-sm" onclick="alert('Booking 1-on-1 slot with Prof. Namboodiri...');">Book Slot</button>
              </div>

              <div style="padding:12px 14px; border-radius:8px; background:var(--bg-soft); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:0.92rem; display:block;">Dr. Suniti Banerjee</strong>
                  <span style="font-size:0.78rem; color:var(--text-muted);">Dean of Physical Sciences • IISc Bangalore</span>
                  <div style="font-size:0.75rem; color:var(--orange-deep); margin-top:2px;">Office Hours: Tue & Thu 3:30 PM – 5:30 PM</div>
                </div>
                <button type="button" class="btn btn-outline btn-sm" onclick="alert('Booking 1-on-1 slot with Dr. Suniti Banerjee...');">Book Slot</button>
              </div>

              <div style="padding:12px 14px; border-radius:8px; background:var(--bg-soft); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:0.92rem; display:block;">Maheshwar Trivedi</strong>
                  <span style="font-size:0.78rem; color:var(--text-muted);">Director of Reasoning • Cognitive Psychology</span>
                  <div style="font-size:0.75rem; color:var(--orange-deep); margin-top:2px;">Office Hours: Wed & Fri 5:00 PM – 7:00 PM</div>
                </div>
                <button type="button" class="btn btn-outline btn-sm" onclick="alert('Booking 1-on-1 slot with Maheshwar Trivedi...');">Book Slot</button>
              </div>
            </div>
          </div>
        </div>

        <!-- RECENT DOUBT TICKETS -->
        <div class="portal-panel">
          <h3 style="font-size:1.15rem; margin-bottom:14px;">Recent Doubt Tickets & Mentor Replies</h3>
          <div class="table-wrap">
            <table class="academic-table" style="min-width:620px;">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Topic</th>
                  <th>Assigned Mentor</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>#DBT-441</strong></td>
                  <td>Chinese Remainder Theorem modulo coprime ambiguity</td>
                  <td>Prof. R. K. Namboodiri</td>
                  <td><span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success);">Answered</span></td>
                  <td>Nov 11, 2026</td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing Prof. Namboodiri\'s detailed step-by-step mathematical proof solution...');">View Solution</button></td>
                </tr>
                <tr>
                  <td><strong>#DBT-438</strong></td>
                  <td>Sign conventions for diverging meniscus in thin lens</td>
                  <td>Dr. Suniti Banerjee</td>
                  <td><span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success);">Answered</span></td>
                  <td>Nov 07, 2026</td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing Dr. Banerjee\'s ray diagram explanation...');">View Solution</button></td>
                </tr>
                <tr>
                  <td><strong>#DBT-429</strong></td>
                  <td>Non-verbal figure matrix diagonal rotation rule</td>
                  <td>Maheshwar Trivedi</td>
                  <td><span class="badge" style="background:rgba(31,138,76,0.12); color:var(--success);">Answered</span></td>
                  <td>Oct 30, 2026</td>
                  <td><button type="button" class="btn btn-outline btn-sm" onclick="alert('Viewing Maheshwar Trivedi\'s pattern matrix breakdown...');">View Solution</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  </div>

  <script>
    (function() {
      window.switchDashboardTab = function(targetTabId) {
        if (!targetTabId) return;
        var cleanId = String(targetTabId).replace('#', '').replace('tab-', '').trim();
        var targetSection = document.getElementById('tab-' + cleanId);
        if (!targetSection) return;

        var portalNavLinks = document.querySelectorAll('.portal-nav-link[data-tab]');
        var portalTabContents = document.querySelectorAll('.portal-tab-content');
        var sidebar = document.querySelector('.portal-sidebar');

        portalNavLinks.forEach(function(link) {
          if (link.getAttribute('data-tab') === cleanId) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });

        portalTabContents.forEach(function(section) {
          section.classList.remove('is-active');
        });
        targetSection.classList.add('is-active');

        if (sidebar) {
          sidebar.classList.remove('is-open');
        }

        try {
          if (history.pushState) {
            history.pushState(null, null, '#' + cleanId);
          } else {
            location.hash = cleanId;
          }
        } catch (e) {}

        var mainEl = document.querySelector('.portal-main');
        if (mainEl && window.innerWidth <= 991) {
          mainEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      document.addEventListener('DOMContentLoaded', function() {
        var initialHash = window.location.hash.replace('#', '').replace('tab-', '');
        if (initialHash && document.getElementById('tab-' + initialHash)) {
          window.switchDashboardTab(initialHash);
        }
      });
    })();
  </script>
  `;

  return wrapHtml('Student Dashboard', 'dashboard', content, { noHeader: true, noFooter: true });
}

// ============================================================================
// 19. PRACTICE TESTS (practice-tests.html)
// ============================================================================
function generatePracticeTests() {
  const content = `
  <!-- PAGE HERO -->
  <section class="page-hero-soft">
    <div class="container">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span class="breadcrumb-sep">/</span>
        <a href="dashboard.html">Student Portal</a>
        <span class="breadcrumb-sep">/</span>
        <span>Practice Examination Engine</span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
          <span class="eyebrow" style="color:var(--orange-deep);">ACTIVE SIMULATOR</span>
          <h1>All-India Olympiad Foundation Mock Test</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Simulated timed test calibrated with auto-scoring and detailed cognitive explanations.</p>
        </div>
        <div style="background-color:var(--black); color:var(--white); padding:10px 22px; border-radius:var(--radius-md); display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.78rem; text-transform:uppercase; font-weight:800; color:var(--orange);">Time Remaining:</span>
          <span id="examTimer" style="font-family:var(--font-display); font-size:1.4rem; font-weight:800; color:var(--white);">20:00</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEST APPLICATION SHELL -->
  <section class="section" id="practiceExamApp" style="padding-top:32px;">
    <div class="container test-workspace">
      <!-- QUESTION WORKSPACE -->
      <div class="portal-panel" style="padding:32px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--grey-light); padding-bottom:14px; margin-bottom:18px;">
          <div>
            <span id="examQSubject" class="demo-badge">Mathematics</span>
            <span id="examQIndex" style="font-weight:700; font-size:0.88rem; margin-left:10px;">Question 1 of 6</span>
          </div>
          <button id="examReview" type="button" class="btn btn-outline btn-sm" style="font-size:0.8rem;">
            ⚑ Mark for Review
          </button>
        </div>

        <div style="min-height:120px;">
          <h2 id="examQText" style="font-size:1.25rem; line-height:1.5; font-weight:700; color:var(--black);">
            Loading question...
          </h2>
        </div>

        <div id="examOptionsList" style="display:flex; flex-direction:column; gap:12px; margin-top:24px;">
          <!-- Populated by JS -->
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:36px; padding-top:18px; border-top:1px solid var(--grey-light); flex-wrap:wrap; gap:12px;">
          <button id="examPrev" type="button" class="btn btn-outline btn-sm">← Previous Question</button>
          <div style="display:flex; gap:10px;">
            <button id="examNext" type="button" class="btn btn-dark btn-sm">Next Question →</button>
            <button id="examSubmit" type="button" class="btn btn-primary btn-sm">Submit Exam Now</button>
          </div>
        </div>
      </div>

      <!-- QUESTION PALETTE & LEGEND -->
      <div class="portal-panel">
        <h3 style="font-size:1.05rem; margin-bottom:14px;">Question Palette</h3>
        <div id="examPalette" class="q-palette-grid">
          <!-- Populated by JS: buttons 1..6 -->
        </div>

        <div style="border-top:1px solid var(--grey-light); margin-top:20px; padding-top:16px;">
          <small style="text-transform:uppercase; font-size:0.72rem; font-weight:800; color:var(--text-muted); display:block; margin-bottom:10px;">Palette Legend</small>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:0.78rem;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:14px; height:14px; border-radius:3px; background-color:var(--success); display:inline-block;"></span>
              <span>Answered</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:14px; height:14px; border-radius:3px; background-color:var(--orange); display:inline-block;"></span>
              <span>Marked for Review</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:14px; height:14px; border-radius:3px; border:1.5px solid var(--black); display:inline-block;"></span>
              <span>Current Question</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RESULT MODAL -->
  <div id="examResultModal" class="modal-backdrop">
    <div class="modal-box">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--grey-light); padding-bottom:14px;">
        <h3 style="font-size:1.3rem;">Test Performance Summary</h3>
        <button id="closeResultModal" class="btn btn-sm" style="font-size:1.2rem; font-weight:800;">✕</button>
      </div>

      <div style="text-align:center; padding:24px 0 16px;">
        <span style="font-size:0.8rem; text-transform:uppercase; font-weight:800; color:var(--text-muted);">Overall Score</span>
        <div id="resScorePct" style="font-family:var(--font-display); font-size:3.2rem; font-weight:800; color:var(--orange); line-height:1;">--%</div>
      </div>

      <div class="stats-grid-4" style="margin-bottom:24px; text-align:center;">
        <div style="background-color:var(--bg-soft); padding:10px; border-radius:6px;">
          <strong id="resCorrect" style="color:var(--success); font-size:1.2rem;">0</strong>
          <small style="display:block; font-size:0.72rem;">Correct</small>
        </div>
        <div style="background-color:var(--bg-soft); padding:10px; border-radius:6px;">
          <strong id="resIncorrect" style="color:var(--danger); font-size:1.2rem;">0</strong>
          <small style="display:block; font-size:0.72rem;">Incorrect</small>
        </div>
        <div style="background-color:var(--bg-soft); padding:10px; border-radius:6px;">
          <strong id="resUnanswered" style="color:var(--text-muted); font-size:1.2rem;">0</strong>
          <small style="display:block; font-size:0.72rem;">Unanswered</small>
        </div>
        <div style="background-color:var(--bg-soft); padding:10px; border-radius:6px;">
          <strong id="resTimeSpent" style="font-size:1.2rem;">--</strong>
          <small style="display:block; font-size:0.72rem;">Time Spent</small>
        </div>
      </div>

      <h4 style="margin-bottom:12px;">Detailed Question Breakdown</h4>
      <div id="resDetailedAnalysis" style="max-height:280px; overflow-y:auto;">
        <!-- Populated by JS -->
      </div>

      <div style="margin-top:20px; display:flex; gap:10px; justify-content:flex-end;">
        <a href="performance.html" class="btn btn-primary btn-sm">View Analytics Dashboard →</a>
      </div>
    </div>
  </div>
  `;

  return wrapHtml('Practice Mock Test Engine', 'tests', content);
}

// ============================================================================
// 20. TEST RESULTS & PERFORMANCE (performance.html)
// ============================================================================
function generatePerformance() {
  const content = `
  <div class="portal-shell">
    <aside class="portal-sidebar" aria-label="Portal Navigation">
      <!-- Portal Brand Header -->
      <div style="padding: 4px 6px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 12px;">
        <a href="index.html" class="brand-logo" style="text-decoration:none; display:inline-flex; align-items:center; gap:10px;">
          <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" class="portal-brand-logo-img">
          <div class="brand-text">
            <span class="brand-title" style="color:#FFFFFF; font-size:1rem; font-weight:800; letter-spacing:0.5px;">PRAGYAN</span>
            <span class="brand-sub" style="font-size:0.62rem; color:var(--text-on-dark-muted); display:block; letter-spacing:0.3px;">STUDENT PORTAL</span>
          </div>
        </a>
      </div>

      <div class="portal-student-mini">
        <strong>Rohan Sundaram</strong>
        <span>Grade 8 • IMO & NSO Scholar</span>
        <div style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-top:2px;">ID: PRAG-2026-4409</div>
      </div>
      <nav style="display:flex; flex-direction:column; gap:4px;">
        <a href="dashboard.html" class="portal-nav-link">Overview</a>
        <a href="practice-tests.html" class="portal-nav-link">Practice Tests</a>
        <a href="performance.html" class="portal-nav-link is-active">Performance Analytics</a>
        <a href="schedule.html" class="portal-nav-link">Class Schedule</a>
        <a href="resources.html" class="portal-nav-link">Study Resources</a>
        <a href="login.html" class="portal-nav-link" style="color:#E85D04; margin-top:16px;">Logout</a>
      </nav>
    </aside>

    <main class="portal-main">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:28px;">
        <div>
          <span class="eyebrow">DIAGNOSTIC INTELLIGENCE</span>
          <h1 style="margin-top:6px; font-size:1.9rem;">Performance & Results Analytics</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Comprehensive accuracy, pacing, and chapter-wise mastery records.</p>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="alert('Download Complete PDF Diagnostic Card: Rohan Sundaram (Nov 2026). Demo PDF Generated.')">
          📥 Download PDF Report
        </button>
      </div>

      <div class="kpi-grid-4">
        <div class="kpi-widget">
          <div class="kpi-val">98.2</div>
          <div class="kpi-lbl">National Percentile</div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">91.6%</div>
          <div class="kpi-lbl">Concept Accuracy</div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">42s</div>
          <div class="kpi-lbl">Avg Response Speed</div>
        </div>
        <div class="kpi-widget">
          <div class="kpi-val">Top 1%</div>
          <div class="kpi-lbl">Geometry Proofs Tier</div>
        </div>
      </div>

      <!-- RECENT TEST HISTORY TABLE -->
      <div class="portal-panel" style="margin-bottom:28px;">
        <h3 style="font-size:1.15rem; margin-bottom:14px;">Recent Test History & Scores</h3>
        <div class="table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Test Identifier</th>
                <th>Subject Area</th>
                <th>Date Taken</th>
                <th>Score</th>
                <th>Accuracy</th>
                <th>Percentile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>All-India Mock IMO #04</strong></td>
                <td>Mathematics</td>
                <td>Nov 08, 2026</td>
                <td>56 / 60</td>
                <td>93.3%</td>
                <td>99.1 %ile</td>
                <td><span class="demo-badge">Rank 04 Zonal</span></td>
              </tr>
              <tr>
                <td><strong>NSO National Stage 1 Mock</strong></td>
                <td>Science</td>
                <td>Nov 01, 2026</td>
                <td>52 / 60</td>
                <td>86.6%</td>
                <td>97.4 %ile</td>
                <td><span class="demo-badge">Rank 12 State</span></td>
              </tr>
              <tr>
                <td><strong>Mental Ability MAT-03</strong></td>
                <td>Logical Reasoning</td>
                <td>Oct 25, 2026</td>
                <td>94 / 100</td>
                <td>94.0%</td>
                <td>98.8 %ile</td>
                <td><span class="demo-badge">Rank 06 Zonal</span></td>
              </tr>
              <tr>
                <td><strong>IEO Comprehensive Mock</strong></td>
                <td>English</td>
                <td>Oct 18, 2026</td>
                <td>46 / 50</td>
                <td>92.0%</td>
                <td>96.5 %ile</td>
                <td><span class="demo-badge">Rank 18 State</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- STRENGTHS & WEAKNESSES SPLIT -->
      <div class="grid-2x2" style="gap:24px;">
        <div class="portal-panel" style="border-left:4px solid var(--success);">
          <span class="eyebrow" style="color:var(--success);">DEMONSTRATED STRENGTHS</span>
          <h4 style="margin-top:6px; margin-bottom:12px;">Highest Performing Modules</h4>
          <ul style="font-size:0.88rem; display:flex; flex-direction:column; gap:8px;">
            <li>✓ <strong>Euclidean Proofs & Cyclic Polygons:</strong> 98% accuracy, average 35s speed.</li>
            <li>✓ <strong>Number Theory & Modular Inverses:</strong> 95% accuracy, zero calculation slips.</li>
            <li>✓ <strong>Spatial Cube Rotations:</strong> 100% accuracy in recent three assessments.</li>
          </ul>
        </div>

        <div class="portal-panel" style="border-left:4px solid var(--orange);">
          <span class="eyebrow" style="color:var(--orange);">AREAS FOR REFINEMENT</span>
          <h4 style="margin-top:6px; margin-bottom:12px;">Recommended Review Targets</h4>
          <ul style="font-size:0.88rem; display:flex; flex-direction:column; gap:8px;">
            <li>▲ <strong>Projectile Kinematics (2D Vectors):</strong> Review relative velocity formulas.</li>
            <li>▲ <strong>Greek/Latin Etymology Stems:</strong> Review IEO Vocabulary Handbook Ch. 4.</li>
            <li>▲ <strong>Negative Marking Caution:</strong> 2 unanswered questions preferable to rushed guesses.</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  `;

  return wrapHtml('Student Performance & Analytics', 'performance', content);
}

// ============================================================================
// 21. STUDENT SCHEDULE (schedule.html)
// ============================================================================
function generateSchedule() {
  const content = `
  <div class="portal-shell">
    <aside class="portal-sidebar" aria-label="Portal Navigation">
      <!-- Portal Brand Header -->
      <div style="padding: 4px 6px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 12px;">
        <a href="index.html" class="brand-logo" style="text-decoration:none; display:inline-flex; align-items:center; gap:10px;">
          <img src="images/logo.png" alt="Pragyan Olympiad Academy Logo" class="portal-brand-logo-img">
          <div class="brand-text">
            <span class="brand-title" style="color:#FFFFFF; font-size:1rem; font-weight:800; letter-spacing:0.5px;">PRAGYAN</span>
            <span class="brand-sub" style="font-size:0.62rem; color:var(--text-on-dark-muted); display:block; letter-spacing:0.3px;">STUDENT PORTAL</span>
          </div>
        </a>
      </div>

      <div class="portal-student-mini">
        <strong>Rohan Sundaram</strong>
        <span>Grade 8 • IMO & NSO Scholar</span>
        <div style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-top:2px;">ID: PRAG-2026-4409</div>
      </div>
      <nav style="display:flex; flex-direction:column; gap:4px;">
        <a href="dashboard.html" class="portal-nav-link">Overview</a>
        <a href="practice-tests.html" class="portal-nav-link">Practice Tests</a>
        <a href="performance.html" class="portal-nav-link">Performance Analytics</a>
        <a href="schedule.html" class="portal-nav-link is-active">Class Schedule</a>
        <a href="resources.html" class="portal-nav-link">Study Resources</a>
        <a href="login.html" class="portal-nav-link" style="color:#E85D04; margin-top:16px;">Logout</a>
      </nav>
    </aside>

    <main class="portal-main">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:28px;">
        <div>
          <span class="eyebrow">ACADEMIC TIMETABLE</span>
          <h1 style="margin-top:6px; font-size:1.9rem;">Class Schedule & Examination Dates</h1>
          <p style="font-size:0.92rem; color:var(--text-muted);">Interactive calendar for November 2026. Click any date to view scheduled events.</p>
        </div>
        <div class="btn-group">
          <a href="practice-tests.html" class="btn btn-primary btn-sm">Upcoming Tests</a>
        </div>
      </div>

      <!-- CALENDAR WIDGET & DAY EVENTS SPLIT -->
      <div id="scheduleCalendarApp" class="dashboard-split">
        <div class="portal-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 id="calMonthTitle" style="font-size:1.2rem;">November 2026</h3>
            <span class="demo-badge">Current Academic Term</span>
          </div>

          <div class="calendar-grid">
            <div class="cal-day-head">Sun</div>
            <div class="cal-day-head">Mon</div>
            <div class="cal-day-head">Tue</div>
            <div class="cal-day-head">Wed</div>
            <div class="cal-day-head">Thu</div>
            <div class="cal-day-head">Fri</div>
            <div class="cal-day-head">Sat</div>
          </div>

          <div id="calGridBody" class="calendar-grid" style="margin-top:6px;">
            <!-- Populated by JS: Days 1..30 -->
          </div>
        </div>

        <div class="portal-panel" id="selectedDayEvents">
          <div style="font-family:var(--font-display); font-weight:800; font-size:1.05rem; margin-bottom:10px;">
            Today: November 12, 2026
          </div>
          <div style="padding:12px 14px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid var(--orange); margin-bottom:10px;">
            <div style="font-weight:700;">Coordinate Geometry Seminar</div>
            <div style="font-size:0.82rem; color:var(--text-muted);">04:30 PM – 06:00 PM • Lecture Hall 2</div>
          </div>
          <div style="padding:12px 14px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid var(--black);">
            <div style="font-weight:700;">Desk-Side Doubt Clinic</div>
            <div style="font-size:0.82rem; color:var(--text-muted);">06:15 PM – 07:15 PM • Faculty Suite</div>
          </div>
        </div>
      </div>

      <!-- WEEKLY SCHEDULE TIMETABLE -->
      <div class="portal-panel" style="margin-top:28px;">
        <h3 style="font-size:1.15rem; margin-bottom:14px;">Weekly Recurring Timetable (Grade 8 Cohort)</h3>
        <div class="table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>04:30 PM – 06:00 PM</th>
                <th>06:15 PM – 07:15 PM</th>
                <th>Faculty Lead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tuesday</strong></td>
                <td>Mathematics: Euclidean Geometry</td>
                <td>Doubt Resolution Clinic</td>
                <td>Prof. R. K. Namboodiri</td>
              </tr>
              <tr>
                <td><strong>Thursday</strong></td>
                <td>Science: Mechanics & Ray Optics</td>
                <td>Practical Demonstration</td>
                <td>Dr. Suniti Banerjee</td>
              </tr>
              <tr>
                <td><strong>Friday</strong></td>
                <td>Logical Reasoning & MAT Puzzles</td>
                <td>Speed Strategy Clinic</td>
                <td>Maheshwar Trivedi</td>
              </tr>
              <tr>
                <td><strong>Saturday</strong></td>
                <td>English Olympiad: Lexicon & Syntax</td>
                <td>Weekly Diagnostic Test</td>
                <td>Anuradha Sen Sharma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  `;

  return wrapHtml('Student Schedule & Timetable', 'schedule', content);
}

// Write files
fs.writeFileSync(path.join(rootDir, 'contact.html'), generateContact());
fs.writeFileSync(path.join(rootDir, 'login.html'), generateLogin());
fs.writeFileSync(path.join(rootDir, 'register.html'), generateRegister());
fs.writeFileSync(path.join(rootDir, 'dashboard.html'), generateDashboard());
fs.writeFileSync(path.join(rootDir, 'practice-tests.html'), generatePracticeTests());
fs.writeFileSync(path.join(rootDir, 'performance.html'), generatePerformance());
fs.writeFileSync(path.join(rootDir, 'schedule.html'), generateSchedule());

console.log('Successfully generated contact.html, login.html, register.html, dashboard.html, practice-tests.html, performance.html, schedule.html');

