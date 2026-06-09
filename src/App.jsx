import { useEffect, useRef, useState } from 'react';
import {
  ArrowSquareOut,
  Briefcase,
  CaretDown,
  CaretUp,
  CheckCircle,
  CircleDashed,
  ClockCounterClockwise,
  FileText,
  GraduationCap,
  Heart,
  List,
  MapPin,
  PencilSimple,
  Sparkle,
  TrendUp,
  User,
  X,
} from '@phosphor-icons/react';
import { Chip } from './components/chip';
import { SideMenu } from './components/side-menu';
import { SideMenuMb } from './components/side-menu-mb';

const avatarUrl = 'https://www.figma.com/api/mcp/asset/ef459c2a-bea2-4e86-8f0c-436f8d5fdcef';

const overviewCards = [
  {
    icon: TrendUp,
    iconTone: 'purple',
    value: '59%',
    mobileValue: '59%',
    chipTone: 'purple',
    label: 'Profile Strength',
  },
  {
    icon: Sparkle,
    iconTone: 'green',
    value: 'Completed',
    mobileValue: 'Completed',
    chipTone: 'green',
    label: 'AI Interview',
  },
  {
    icon: Briefcase,
    iconTone: 'blue',
    value: 'Actively Looking',
    mobileValue: 'Active',
    chipTone: 'green',
    label: 'Job Seeking Status',
  },
];

const tabs = ['Basic Info', 'Work Experience', 'Education', 'Job Preferences'];

const personalDetails = [
  { label: 'Name', value: 'Marie Brown' },
  { label: 'Email', value: 'mail@email.com' },
  { label: 'Phone', value: '099-1234-4578' },
  { label: 'Date of Birth', value: '15th May 2000' },
  { label: 'Gender', value: 'Female' },
  { label: 'Nationality', value: 'Japanese' },
  { label: 'Address', value: '123 Sakura Lane, Tokyo, Japan' },
  { label: 'LINE ID', value: 'marielineid' },
  { label: 'LinkedIn', value: 'https://linkedin.com/in/mariebrown', link: true },
  { label: 'Driving License', value: 'Car   Motorcycle', tags: ['Car', 'Motorcycle'] },
];

const careerDetails = [
  { label: 'Latest Job Title', value: 'Product Designer' },
  { label: 'Total Years of Experience', value: '15 years 4 months' },
  { label: 'Total Package', value: '50,000 THB/month' },
  { label: 'Expected Minimum Salary', value: '100,000 THB/month' },
];

const workExperiences = [
  {
    company: 'Product Designer at Matel Co.,Ltd.',
    period: 'Jan 2025 - Current',
    duration: '5 mo',
    open: true,
    responsibilities: [
      'Collaborate with the broader development team to oversee website design, content management, SEO strategies, branding, and logo creation.',
      'Work together with the whole dev team to handle website design, manage content, and shape brand systems.',
    ],
    meta: [
      { label: 'Experience Industry', tags: ['Engineering', 'Sales', 'Other'] },
      { label: 'Role Category', tags: ['Engineering', 'Sales', 'Other'] },
      { label: 'Sub Roles', tags: ['Civil Engineer', 'Developer'] },
    ],
  },
  {
    company: 'Digital Designer at Puzle Co.,Ltd.',
    period: 'Feb 2023 - Jan 2025',
    duration: '1 yr 5 mo',
    responsibilities: [
      'Designed campaign landing pages, presentation visuals, and responsive product marketing assets for cross-functional launches.',
      'Partnered with product and content teams to keep brand execution consistent across web, email, and social touchpoints.',
    ],
    meta: [
      { label: 'Experience Industry', tags: ['Technology', 'Marketing', 'Design'] },
      { label: 'Role Category', tags: ['Creative', 'Product Design'] },
      { label: 'Sub Roles', tags: ['Digital Designer', 'Visual Designer'] },
    ],
  },
];

const skillTags = [
  'UX Research',
  'Web Development',
  'Design Engineer',
  'CSS',
  'HTML',
  'AI Agents',
  'Claude',
  'Codex',
];

const educationHistory = [
  {
    degree: "Master's Degree of Multimedia",
    faculty: 'Faculty of Technology - Wardiere University',
    period: '2006 - 2010',
    duration: '5 yr',
    open: true,
    meta: [
      { label: 'Education Level', value: "Master's Degree" },
      { label: 'Field of Study / Major', value: 'Multimedia' },
      { label: 'GPAX', value: '4.00' },
    ],
    summaries: [
      {
        label: 'Awards and Activities',
        text: "2020 Dean's List honoree and Vice President of the ACM Student Chapter.",
      },
      {
        label: 'Educational Description',
        text:
          "I successfully completed a Master's Degree in Multimedia, specializing in digital design, interactive media, visual communication, and user experience. Throughout my academic journey, I honed my creative and technical skills.",
        link: 'education-description',
      },
    ],
  },
  {
    degree: "Bachelor's Degree of Arts",
    faculty: 'Faculty of Arts - Chulalongkorn University',
    period: '2000 - 2004',
    meta: [
      { label: 'Education Level', value: "Bachelor's Degree" },
      { label: 'Field of Study / Major', value: 'Arts' },
      { label: 'GPAX', value: '3.78' },
    ],
    summaries: [
      {
        label: 'Awards and Activities',
        text: 'Active member of the visual arts club with coursework focused on communication, media, and creative production.',
      },
      {
        label: 'Educational Description',
        text:
          'Completed foundational studies in arts, visual storytelling, and communication. Built a strong creative base that later supported multimedia and product design work.',
        link: 'bachelor-education-description',
      },
    ],
  },
];

const languageDetails = [
  { label: 'English Level', value: 'Fluent' },
  { label: 'TOEIC Score', value: '990' },
];

const otherLanguages = [
  { language: 'Japanese', level: 'Conversational', tone: 'green' },
  { language: 'French', level: 'Fluent', tone: 'blue' },
  { language: 'Thai', level: 'Native', tone: 'purple' },
  { language: 'Chinese', level: 'Basic', tone: 'neutral' },
  { language: 'Korean', level: 'Professional Working', tone: 'yellow' },
];

const languageCertifications = [
  { name: 'IELTS', score: 'Score / Level: 7.0' },
  { name: 'JLPT', score: 'Score / Level: N2' },
  { name: 'HSK', score: 'Score / Level: 4' },
];

const otherCertifications = [
  {
    name: 'Certificate of Multimedia',
    issuer: 'Box Hill Institute of Arts',
    year: 'Year Obtained: 2019',
  },
  {
    name: 'Certificate of Business',
    issuer: 'Maplewood College',
    year: 'Year Obtained: 2016',
  },
];

const jobPreferences = [
  { label: 'Job Seeking Status', values: ['Actively looking'], tone: 'green' },
  { label: 'Open to contract?', values: ['Yes'], tone: 'green' },
  { label: 'Preferred Sub Role Category', values: ['Engineering', 'Sales', 'Other'] },
  { label: 'Work Mode', values: ['Hybrid', 'Remote'] },
  { label: 'Preferred Work Location', values: ['Bangkok', 'Chonburi', 'Rayong'] },
  { label: 'Preferred Industry', values: ['Engineering', 'Sales', 'Other'] },
  { label: 'Preferred Employment Type', values: ['Full-time', 'Part-time', 'Freelance'] },
];

const strengthItems = [
  { label: 'Basic Info', value: 100, complete: true },
  { label: 'Experience', value: 75 },
  { label: 'Education', value: 60 },
  { label: 'Job Preference', value: 20 },
];

const sectionCopyByTab = {
  'Basic Info': {
    heading: 'Basic Information',
    editLabel: 'Edit basic information',
  },
  'Work Experience': {
    heading: 'Career & Work Experience',
    editLabel: 'Edit career and work experience',
  },
  Education: {
    heading: 'Education & Certifications',
    editLabel: 'Edit education and certifications',
  },
  'Job Preferences': {
    heading: 'Job Preferences & Visibility',
    editLabel: 'Edit job preferences and visibility',
  },
};

function getTabIcon(index) {
  if (index === 0) {
    return User;
  }

  if (index === 1) {
    return Briefcase;
  }

  if (index === 2) {
    return GraduationCap;
  }

  return Heart;
}

function IconBubble({ tone = 'blue', children }) {
  const Icon = children;

  return (
    <span className={`icon-bubble icon-bubble--${tone}`}>
      {Icon ? <Icon size={24} weight="regular" /> : null}
    </span>
  );
}

function OverviewCard({ icon, iconTone, value, mobileValue, chipTone, label }) {
  return (
    <article className="overview-card">
      <IconBubble tone={iconTone}>{icon}</IconBubble>
      <div className="overview-card__copy">
        <Chip label={value} tone={chipTone} className="overview-card__value" />
        {mobileValue ? <Chip label={mobileValue} tone={chipTone} className="overview-card__mobile-value" /> : null}
        <p>{label}</p>
      </div>
    </article>
  );
}

function ProfileHero() {
  return (
    <section className="profile-hero" aria-label="Profile summary">
      <div className="profile-hero__identity">
        <img className="avatar avatar--large" src={avatarUrl} alt="Marie Brown" />
        <div>
          <h1>Marie Brown</h1>
          <p className="profile-hero__role">Product Designer</p>
          <div className="profile-hero__meta">
            <span className="inline-icon-text">
              <MapPin size={16} weight="regular" />
              Bangkok, Thailand
            </span>
            <Chip label="Resume Uploaded" tone="blue" icon={FileText} />
          </div>
        </div>
      </div>
      <button className="button button--primary" type="button">
        <span className="button__icon">
          <PencilSimple size={16} weight="regular" />
        </span>
        <span className="button__desktop-label">Edit Profile</span>
        <span className="button__mobile-label">Edit</span>
      </button>
    </section>
  );
}

function AiInterviewBanner() {
  return (
    <section className="ai-banner" aria-label="AI interview practice">
      <button className="ai-banner__close" type="button" aria-label="Dismiss AI interview prompt">
        <X size={14} weight="regular" />
      </button>
      <IconBubble tone="white">{Sparkle}</IconBubble>
      <div className="ai-banner__copy">
        <h2>
          <span className="desktop-copy">Boost Your Confidence with AI Interview Practice</span>
          <span className="mobile-copy">Try AI Interview</span>
        </h2>
        <p>
          <span className="desktop-copy">
            Practice with AI-generated interview questions tailored to your role and experience.
          </span>
          <span className="mobile-copy">
            Answer a few questions and let companies get to know you better.
          </span>
        </p>
      </div>
      <button className="button button--gradient" type="button">
        Start AI Interview
      </button>
    </section>
  );
}

function ProfileDetails() {
  const [activeTab, setActiveTab] = useState('Basic Info');
  const activeSection = sectionCopyByTab[activeTab];

  return (
    <section className="profile-panel" id="profile">
      <h2>Profile</h2>
      <div className="tab-list" aria-label="Profile sections">
        {tabs.map((tab, index) => (
          <button
            className={`tab${activeTab === tab ? ' tab--active' : ''}`}
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
          >
            <span aria-hidden="true">
              {(() => {
                const TabIcon = getTabIcon(index);
                return <TabIcon size={16} weight="regular" />;
              })()}
            </span>
            {tab}
          </button>
        ))}
      </div>

      <div className="section-heading">
        <h3>{activeSection.heading}</h3>
        <button type="button" aria-label={activeSection.editLabel}>
          <PencilSimple size={16} weight="regular" />
        </button>
      </div>

      {activeTab === 'Basic Info' ? <BasicInfoDetails /> : null}
      {activeTab === 'Work Experience' ? <WorkExperienceDetails /> : null}
      {activeTab === 'Education' ? <EducationDetails /> : null}
      {activeTab === 'Job Preferences' ? <JobPreferencesDetails /> : null}
    </section>
  );
}

function BasicInfoDetails() {
  return (
    <article className="details-card">
      <div className="details-card__header">
        <h4>Personal Details</h4>
      </div>
      <div className="details-card__profile-row">
        <img className="avatar avatar--medium" src={avatarUrl} alt="" />
        <button className="button button--mint" type="button">
          <FileText size={14} weight="regular" />
          View my resume
        </button>
      </div>
      <dl className="details-grid">
        {personalDetails.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              {item.tags ? (
                <span className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="mini-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </span>
              ) : item.link ? (
                <a className="text-link" href="https://linkedin.com/in/mariebrown">
                  {item.value}
                  <ArrowSquareOut size={16} weight="regular" />
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function ExpandableContent({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return undefined;
    }

    function measureOverflow() {
      if (expanded) {
        return;
      }

      setCanExpand(content.scrollHeight > content.clientHeight + 1);
    }

    measureOverflow();

    const resizeObserver = new ResizeObserver(measureOverflow);
    resizeObserver.observe(content);

    window.addEventListener('resize', measureOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureOverflow);
    };
  }, [children, expanded]);

  return (
    <div className="expandable-text">
      <div
        className={`expandable-text__content${expanded ? ' expandable-text__content--expanded' : ''}`}
        ref={contentRef}
      >
        {children}
      </div>
      {canExpand || expanded ? (
        <button
          className="text-link text-link--toggle"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((currentExpanded) => !currentExpanded)}
        >
          {expanded ? 'See less' : 'See more'}
        </button>
      ) : null}
    </div>
  );
}

function WorkExperienceDetails() {
  const [expandedCompany, setExpandedCompany] = useState(null);

  return (
    <article className="details-card work-details-card">
      <section className="work-section">
        <div className="details-card__header">
          <h4>Latest Career Details</h4>
        </div>

        <div className="summary-stack">
          <article className="summary-box summary-box--ai">
            <div className="summary-box__header">
              <span>AI Interview Summary</span>
              <Chip label="Prescreened by AI" tone="blue" />
            </div>
            <ExpandableContent>
              <p>
                ผู้สมัครมี background เป็น web developer ที่มีประสบการณ์ประมาณ 5 ปี มีความถนัดด้าน UX/UI,
                dashboard และ frontend development รวมถึงสนใจใช้ AI workflow ในการทำงาน
              </p>
            </ExpandableContent>
          </article>

          <article className="summary-box">
            <div className="summary-box__header">
              <span>Professional Summary</span>
            </div>
            <ExpandableContent>
              <p>
                Creative digital designer with experience in UI/UX, branding, and visual design across
                web and mobile platforms. Skilled at turning complex ideas into clear, user-friendly
                experiences with a strong eye for detail, usability, and modern aesthetics.
              </p>
            </ExpandableContent>
          </article>
        </div>

        <dl className="work-info-grid">
          {careerDetails.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="work-section">
        <h4>Work Experience</h4>
        <div className="experience-list">
          {workExperiences.map((experience) => (
            <article className="experience-card" key={experience.company}>
              <button
                className="experience-card__header"
                type="button"
                aria-expanded={expandedCompany === experience.company}
                onClick={() =>
                  setExpandedCompany((currentCompany) =>
                    currentCompany === experience.company ? null : experience.company,
                  )
                }
              >
                <div>
                  <h5>{experience.company}</h5>
                  <p>
                    {experience.period}
                    <Chip label={experience.duration} tone="green" />
                  </p>
                </div>
                {expandedCompany === experience.company ? (
                  <CaretUp size={16} weight="regular" />
                ) : (
                  <CaretDown size={16} weight="regular" />
                )}
              </button>

              {expandedCompany === experience.company ? (
                <div className="experience-card__body">
                  <div className="responsibilities-box">
                    <p>Responsibilities</p>
                    <ExpandableContent>
                      <ul>
                        {experience.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </ExpandableContent>
                  </div>

                  {experience.meta.map((group) => (
                    <div className="experience-meta" key={group.label}>
                      <p>{group.label}</p>
                      <span className="tag-row">
                        {group.tags.map((tag) => (
                          <span className="mini-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <h4>Skills</h4>
        <div className="skills-box">
          {skillTags.map((tag) => (
            <span className="mini-tag mini-tag--blue" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="work-section">
        <h4>Portfolio URL</h4>
        <div className="portfolio-box">
          <a className="text-link" href="https://portfolio.com">
            https://portfolio.com
            <ArrowSquareOut size={16} weight="regular" />
          </a>
        </div>
      </section>
    </article>
  );
}

function EducationDetails() {
  const [expandedDegree, setExpandedDegree] = useState(null);

  return (
    <article className="details-card work-details-card education-details-card">
      <section className="work-section">
        <div className="experience-list">
          {educationHistory.map((education) => (
            <article className="experience-card education-card" key={education.degree}>
              <button
                className="experience-card__header"
                type="button"
                aria-expanded={expandedDegree === education.degree}
                onClick={() =>
                  setExpandedDegree((currentDegree) =>
                    currentDegree === education.degree ? null : education.degree,
                  )
                }
              >
                <div>
                  <h5>{education.degree}</h5>
                  <p>{education.faculty}</p>
                  <p>
                    {education.period}
                    {education.duration ? <Chip label={education.duration} tone="green" /> : null}
                  </p>
                </div>
                {expandedDegree === education.degree ? (
                  <CaretUp size={16} weight="regular" />
                ) : (
                  <CaretDown size={16} weight="regular" />
                )}
              </button>

              {expandedDegree === education.degree ? (
                <div className="experience-card__body">
                  <dl className="work-info-grid education-meta-grid">
                    {education.meta.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {education.summaries.map((summary) => (
                    <article className="summary-box" key={summary.label}>
                      <div className="summary-box__header">
                        <span>{summary.label}</span>
                      </div>
                      <ExpandableContent>
                        <p>{summary.text}</p>
                      </ExpandableContent>
                    </article>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <h4>Language Proficiency</h4>
        <div className="language-card">
          <dl className="work-info-grid language-grid">
            {languageDetails.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="experience-meta">
            <p>Other Languages</p>
            <span className="tag-row language-tags">
              {otherLanguages.map((item) => (
                <span className="mini-tag language-tag" key={item.language}>
                  {item.language}
                  <span className={`language-tag__level language-tag__level--${item.tone}`}>
                    {item.level}
                  </span>
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section className="work-section">
        <h4>Certifications / Licenses</h4>
        <div className="certification-stack">
          <article className="certification-card">
            <h5>Language Certifications</h5>
            <div className="certification-list">
              {languageCertifications.map((certificate) => (
                <div className="certification-item certification-item--inline" key={certificate.name}>
                  <strong>{certificate.name}</strong>
                  <span className="mini-tag mini-tag--blue">{certificate.score}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="certification-card">
            <h5>Other Certifications / Licenses</h5>
            <div className="certification-list">
              {otherCertifications.map((certificate) => (
                <div className="certification-item" key={certificate.name}>
                  <strong>{certificate.name}</strong>
                  <span>{certificate.issuer}</span>
                  <small>{certificate.year}</small>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}

function JobPreferencesDetails() {
  return (
    <article className="details-card preference-card">
      <div className="preference-grid">
        {jobPreferences.map((preference) => (
          <section className="preference-field" key={preference.label}>
            <p>{preference.label}</p>
            <span className="tag-row">
              {preference.values.map((value) =>
                preference.tone ? (
                  <Chip label={value} tone={preference.tone} key={value} />
                ) : (
                  <span className="mini-tag" key={value}>
                    {value}
                  </span>
                ),
              )}
            </span>
          </section>
        ))}
      </div>
    </article>
  );
}

function StrengthPanel() {
  return (
    <aside className="strength-card" aria-label="Profile strength">
      <div className="strength-card__header">
        <IconBubble tone="gray">{User}</IconBubble>
        <div>
          <h2>Profile Strength</h2>
          <p className="inline-icon-text">
            <ClockCounterClockwise size={12} weight="regular" />
            2 days ago
          </p>
        </div>
        <Chip label="59%" tone="purple" />
      </div>
      <div className="strength-list">
        {strengthItems.map((item) => (
          <div className="strength-item" key={item.label}>
            <div className="strength-item__row">
              <span className="inline-icon-text">
                {item.complete ? (
                  <CheckCircle className="inline-icon-text__check" size={16} weight="fill" />
                ) : (
                  <CircleDashed size={16} weight="regular" />
                )}
                {item.label}
              </span>
              <span>{item.value}%</span>
            </div>
            <div className="strength-track">
              <span style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', mobileMenuOpen);

    return () => {
      document.body.classList.remove('is-menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="app-shell">
      <SideMenu />
      <SideMenuMb open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="content" id="dashboard">
        <nav className="top-nav" aria-label="Account">
          <div className="mobile-nav__brand">
            <button
              className="menu-button"
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <List size={24} weight="regular" />
            </button>
            <span className="mobile-nav__logo">
              <img src="/images/logo-profi.png" alt="ProFi Logo" className="logo-profi__image" />
            </span>
          </div>
          <img className="avatar avatar--small" src={avatarUrl} alt="Marie Brown account" />
        </nav>

        <ProfileHero />

        <section className="overview-grid" aria-label="Profile status">
          {overviewCards.map((card) => (
            <OverviewCard key={card.label} {...card} />
          ))}
        </section>

        <AiInterviewBanner />

        <div className="profile-layout">
          <ProfileDetails />
          <StrengthPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
