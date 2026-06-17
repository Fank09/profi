import { useEffect, useRef, useState } from 'react';
import {
  ArrowSquareOut,
  BookOpenTextIcon,
  Briefcase,
  CalendarBlank,
  CaretDown,
  CaretUp,
  Check,
  CheckCircle,
  CircleDashed,
  ClockCounterClockwise,
  EnvelopeSimple,
  FileText,
  GraduationCap,
  Heart,
  LinkedinLogo,
  List,
  MapPin,
  DotsThreeOutline,
  PencilSimple,
  Phone,
  Plus,
  Sparkle,
  Trash,
  TrendUp,
  UploadSimple,
  User,
  X,
} from '@phosphor-icons/react';
import { Chip } from './components/chip';
import { DeleteConfirmationModal } from './components/delete-confirmation-modal';
import { DiscardChangesModal } from './components/discard-changes-modal';
import { SaveToast } from './components/save-toast';
import { SideMenu } from './components/side-menu';
import { SideMenuMb } from './components/side-menu-mb';
import { ToggleSwitch } from './components/toggle-switch';
import profileImage from './assets/profile.png';

const avatarUrl = profileImage;

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

const editProfileTabs = tabs;

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

const editProfileFields = [
  {
    label: 'Full Name',
    required: true,
    value: 'Marie Brown',
  },
  {
    label: 'Email',
    required: true,
    value: 'mail@email.com',
    helper: 'Email Contact - editable without verification',
    icon: EnvelopeSimple,
  },
  {
    label: 'Phone',
    required: true,
    value: '099-1234-4578',
    icon: Phone,
  },
  {
    label: 'Date of Birth',
    value: '15/05/2000',
    icon: CalendarBlank,
  },
];

const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
const drivingLicenseOptions = ['None', 'Car', 'Motorcycle', 'Heavy Vehicle'];
const nationalityOptions = [
  'Japanese',
  'Thai',
  'American',
  'British',
  'Chinese',
  'French',
  'Italian',
  'Singaporean',
  'Korean',
  'Australian',
];
const educationLevelOptions = [
  'Bachlor Degree',
  'Master Degree',
  'PHD',
  'Diploma',
  'High School',
  'Associate Degree',
  'Professional Certificate',
  'Vocational Certificate',
  'Postgraduate Diploma',
  'none',
];
const englishLevelOptions = ['Basic', 'Conversational', 'Professional Working', 'Fluent', 'Native'];
const languageCertificationLanguageOptions = ['Japanese', 'French', 'Thai', 'Chinese', 'Italian'];
const languageCertificationLevelOptions = ['Basic', 'Conversational', 'Fluent', 'Native'];
const industryOptions = [
  'Engineering',
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Retail',
  'Manufacturing',
  'Hospitality',
  'Media',
  'Telecommunications',
];
const roleCategoryOptions = [
  'Product Design',
  'UX/UI Design',
  'Software Engineering',
  'Data & Analytics',
  'Marketing',
  'Sales',
  'Operations',
  'Human Resources',
  'Finance',
  'Customer Success',
];
const subRoleOptions = [
  'Product Designer',
  'UX Researcher',
  'UI Designer',
  'Frontend Developer',
  'Backend Developer',
  'Data Analyst',
  'Product Manager',
  'Brand Designer',
  'Marketing Specialist',
  'Project Manager',
];
const workLocationOptions = [
  'Bangkok',
  'Chonburi',
  'Rayong',
  'Chiang Mai',
  'Phuket',
  'Khon Kaen',
  'Remote',
  'Singapore',
  'Tokyo',
  'Hong Kong',
];
const employmentTypeOptions = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
  'Temporary',
  'Project-based',
  'Consultant',
  'Apprenticeship',
  'Volunteer',
];

const professionalSummary =
  'Creative digital designer with experience in UI/UX, branding, and visual design across web and mobile platforms. Skilled at turning complex ideas into clean, user-friendly experiences with a strong eye for detail, usability, and modern aesthetics.';

const latestCareerFields = [
  { label: 'Latest Job Title', required: true, value: 'Product Designer', helper: 'By default - resume parsed from latest job title' },
  { label: 'Latest Total Package', required: true, value: '50,000', suffix: 'THB' },
  { label: 'Phone', required: true, value: '099-1234-4578', icon: Phone },
  { label: 'Date of Birth', value: '15/05/2000', icon: CalendarBlank },
  { label: 'Expected Minimum Salary', value: '100,000', suffix: 'THB' },
];

const editableWorkExperienceRows = [
  {
    title: 'Product Designer at Matel Co.,Ltd.',
    meta: 'Jan 2025 - Current',
  },
  {
    title: 'Digital Designer at Puzzle Co.,Ltd.',
    meta: 'Feb 2023 - Jan 2025',
  },
];

const editSkillTags = [
  'UX Research',
  'Web Development',
  'Design Engineer',
  'CSS',
  'HTML',
  'AI Agents',
  'Codex',
  'Claude',
];

const initialPortfolioLinks = [{ id: 'portfolio-1', value: 'https://myportonline.com' }];
const portfolioUrlErrorMessage = 'Please enter a valid URL link.';

function isValidUrlLink(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return true;
  }

  try {
    const url = new URL(trimmedValue);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function getPortfolioUrlError(value) {
  return isValidUrlLink(value) ? '' : portfolioUrlErrorMessage;
}

function isBlank(value) {
  return !String(value ?? '').trim();
}

const educationEditRows = [
  {
    title: "Master's Degree of Multimedia",
    meta: 'Faculty of Technology • Wardiere University',
    period: '2006 - 2010',
    fields: [
      { label: 'Education Level', required: true, type: 'select', value: 'Master Degree', options: educationLevelOptions },
      { label: 'Institution / University', required: true, value: 'Wardiere University' },
      { label: 'Faculty', value: 'Faculty of Technology' },
      { label: 'Field of Study / Major', value: 'Multimedia' },
      { label: 'Start Year', value: '2006' },
      { label: 'End Year', value: '2010' },
      { label: 'GPAX', value: '4.00' },
    ],
    awards: "2020 Dean's List honoree and Vice President of the ACM Student Chapter.",
    description:
      "I successfully completed a Master's Degree in Multimedia, specializing in digital design, interactive media, visual communication, and user experience. Throughout my academic journey, I honed my creative and technical skills.",
  },
  {
    title: "Bachelor's Degree of Arts",
    meta: 'Faculty of Arts • Chulalongkorn University',
    period: '2000 - 2004',
  },
];

const languageProficiencyFields = [
  { label: 'English Level', required: true, type: 'select', value: 'Fluent', options: englishLevelOptions },
  { label: 'TOEIC Score', value: '990' },
];

const editableLanguages = [
  { id: 'language-1', language: 'Japanese', level: 'Conversational' },
  { id: 'language-2', language: 'French', level: 'Fluent' },
  { id: 'language-3', language: 'Thai', level: 'Native' },
  { id: 'language-4', language: 'Chinese', level: 'Basic' },
  { id: 'language-5', language: 'Korean', level: 'Professional Working' },
];

const languageCertificationRows = [
  {
    title: 'IELTS',
    meta: 'Year Obtained: 2020',
    fields: [
      { label: 'Certification / License', required: true, value: 'IELTS' },
      { label: 'Year Obtained', value: '2020' },
    ],
  },
  {
    title: 'JLPT',
    meta: 'Year Obtained: 2019',
    fields: [
      { label: 'Certification / License', required: true, value: 'JLPT' },
      { label: 'Year Obtained', value: '2019' },
    ],
  },
  {
    title: 'HSK',
    meta: 'Year Obtained: 2015',
    fields: [
      { label: 'Certification / License', required: true, value: 'HSK' },
      { label: 'Year Obtained', value: '2015' },
    ],
  },
];

const otherCertificationRows = [
  {
    title: 'Certificate of Multimedia',
    meta: 'Box Hill Institute of Arts',
    period: 'Year Obtained: 2019',
    fields: [
      { label: 'Certification / License', required: true, value: 'Certificate of Multimedia' },
      { label: 'Issued By', value: 'Box Hill Institute of Arts' },
      { label: 'Year Obtained', value: '2019' },
    ],
  },
  {
    title: 'Certificate of Business',
    meta: 'Maplewood College',
    period: 'Year Obtained: 2016',
    fields: [
      { label: 'Certification / License', required: true, value: 'Certificate of Business' },
      { label: 'Issued By', value: 'Maplewood College' },
      { label: 'Year Obtained', value: '2016' },
    ],
  },
];

const jobPreferenceChipGroups = [
  {
    key: 'jobSeekingStatus',
    label: 'Job Seeking Status',
    required: true,
    helper: 'Select your current job seeking status.',
    options: ['Actively looking', 'Open to offers', 'Not looking'],
    initialSelected: ['Actively looking'],
    multiple: false,
  },
  {
    key: 'openToContract',
    label: 'Open to contract?',
    required: true,
    helper: 'Select at least 1 type.',
    options: ['Yes', 'No'],
    initialSelected: ['Yes'],
    multiple: false,
  },
  {
    key: 'workMode',
    label: 'Work Mode',
    required: true,
    helper: 'Select at least 1 preferred work mode.',
    options: ['Onsite', 'Hybrid', 'Remote'],
    initialSelected: ['Hybrid', 'Remote'],
    multiple: true,
  },
  {
    key: 'preferredEmploymentType',
    label: 'Preferred Employment Type',
    helper: 'Select at least 1 employment type.',
    options: ['Full-time', 'Part-time', 'Contact', 'Freelance', 'Internship'],
    initialSelected: ['Full-time', 'Part-time', 'Freelance'],
    multiple: true,
  },
];

const jobPreferenceSelectFields = [
  {
    label: 'Preferred Sub Role Category',
    helper: 'Select all that apply',
    chips: ['Engineering', 'Sales', 'Other'],
    options: ['Engineering', 'Sales', 'Other', ...roleCategoryOptions],
    moreCount: 5,
  },
  {
    label: 'Preferred Work Location',
    required: true,
    helper: 'Select at least 1 preferred work location.',
    chips: ['Bangkok', 'Chonburi', 'Rayong'],
    options: workLocationOptions,
    moreCount: 5,
  },
  {
    label: 'Preferred Industry',
    helper: 'Select at least 1 industry.',
    chips: ['Engineering', 'Sales', 'Other'],
    options: ['Other', ...industryOptions],
    moreCount: 5,
  },
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
      { label: 'Education Level', value: 'Master Degree' },
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
      { label: 'Education Level', value: 'Bachlor Degree' },
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

const appBasePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const dashboardPath = `${appBasePath || ''}/`;
const profilePath = `${appBasePath || ''}/profile`;
const aiInterviewPath = `${appBasePath || ''}/ai-interview`;
const assessmentsPath = `${appBasePath || ''}/assessments`;
const profileViewsPath = `${appBasePath || ''}/profile-views`;
const accountSettingPath = `${appBasePath || ''}/account-setting`;
const editProfilePath = `${appBasePath || ''}/edit-profile`;
const editProfileTabSlugs = {
  'Basic Info': 'basic-info',
  'Work Experience': 'work-experience',
  Education: 'education',
  'Job Preferences': 'job-preferences',
};
const editProfileTabsBySlug = Object.entries(editProfileTabSlugs).reduce((tabsBySlug, [tab, slug]) => {
  tabsBySlug[slug] = tab;
  return tabsBySlug;
}, {});

function isEditProfilePath() {
  return window.location.pathname.replace(/\/$/, '') === editProfilePath.replace(/\/$/, '');
}

function isProfilePath() {
  return window.location.pathname.replace(/\/$/, '') === profilePath.replace(/\/$/, '');
}

function isAiInterviewPath() {
  return window.location.pathname.replace(/\/$/, '') === aiInterviewPath.replace(/\/$/, '');
}

function isAssessmentsPath() {
  return window.location.pathname.replace(/\/$/, '') === assessmentsPath.replace(/\/$/, '');
}

function isProfileViewsPath() {
  return window.location.pathname.replace(/\/$/, '') === profileViewsPath.replace(/\/$/, '');
}

function isAccountSettingPath() {
  return window.location.pathname.replace(/\/$/, '') === accountSettingPath.replace(/\/$/, '');
}

function getCurrentAppPage() {
  if (isEditProfilePath()) {
    return 'edit-profile';
  }

  if (isProfilePath()) {
    return 'profile';
  }

  if (isAiInterviewPath()) {
    return 'ai-interview';
  }

  if (isAssessmentsPath()) {
    return 'assessments';
  }

  if (isProfileViewsPath()) {
    return 'profile-views';
  }

  if (isAccountSettingPath()) {
    return 'account-setting';
  }

  return 'dashboard';
}

function getEditProfilePath(tab = 'Basic Info') {
  const slug = editProfileTabSlugs[tab] || editProfileTabSlugs['Basic Info'];
  return `${editProfilePath}?tab=${slug}`;
}

function getEditProfileTabFromLocation() {
  const tabSlug = new URLSearchParams(window.location.search).get('tab');
  return editProfileTabsBySlug[tabSlug] || 'Basic Info';
}

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

function ProfileHero({ onEditProfile }) {
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
      <button className="button button--primary" type="button" onClick={onEditProfile}>
        <span className="button__icon">
          <PencilSimple size={16} weight="regular" />
        </span>
        <span className="button__desktop-label">Edit Profile</span>
        <span className="button__mobile-label">Edit</span>
      </button>
    </section>
  );
}

function RequiredMark() {
  return (
    <span className="required-mark" aria-hidden="true">
      *
    </span>
  );
}

function FieldLabel({ children, required, hint }) {
  return (
    <label className="edit-field__label">
      <span>
        {children}
        {required ? <RequiredMark /> : null}
      </span>
      {hint ? <small>{hint}</small> : null}
    </label>
  );
}

const datePickerDays = Array.from({ length: 30 }, (_, index) => index + 1);

function DatePickerPopover({ onSelect }) {
  return (
    <div className="date-picker" role="dialog" aria-label="Choose date" onClick={(event) => event.stopPropagation()}>
      <div className="date-picker__header">
        <button type="button" aria-label="Previous month">
          <CaretDown size={14} weight="regular" />
        </button>
        <strong>September 2025</strong>
        <button type="button" aria-label="Next month">
          <CaretDown size={14} weight="regular" />
        </button>
      </div>
      <div className="date-picker__weekdays" aria-hidden="true">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
      <div className="date-picker__grid">
        {datePickerDays.map((day) => (
          <button
            className={day === 10 ? 'date-picker__day date-picker__day--selected' : 'date-picker__day'}
            type="button"
            key={day}
            onClick={() => onSelect(`Sep ${day}, 2025`)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

function TextInput({
  label,
  required = false,
  value,
  name,
  helper,
  icon: Icon,
  suffix,
  placeholder,
  disabled = false,
  datePicker = false,
  error,
  onValueChange,
  onEnter,
}) {
  const inputLabel = label || placeholder || value || 'Text input';
  const [inputValue, setInputValue] = useState(value || '');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const inputRef = useRef(null);
  const hasError = Boolean(error);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    if (disabled) {
      setDatePickerOpen(false);
    }
  }, [disabled]);

  function openDatePicker() {
    if (disabled || !datePicker) {
      return;
    }

    setDatePickerOpen(true);
  }

  return (
    <div className="edit-field">
      {label ? <FieldLabel required={required}>{label}</FieldLabel> : null}
      <div
        className={`edit-input${disabled ? ' edit-input--disabled' : ''}${datePicker ? ' edit-input--date' : ''}${hasError ? ' edit-input--error' : ''}`}
        onClick={openDatePicker}
      >
        {Icon ? <Icon size={20} weight="regular" /> : null}
        <input
          ref={inputRef}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          aria-label={inputLabel}
          aria-invalid={hasError || undefined}
          disabled={disabled}
          readOnly={datePicker}
          onChange={(event) => {
            setInputValue(event.target.value);
            onValueChange?.(event.target.value);
          }}
          onFocus={openDatePicker}
          onKeyDown={(event) => {
            if (!onEnter || event.key !== 'Enter' || event.nativeEvent.isComposing) {
              return;
            }

            event.preventDefault();
            const shouldClear = onEnter(inputValue);
            if (shouldClear) {
              setInputValue('');
              onValueChange?.('');
            }
          }}
        />
        {suffix ? <span className="edit-input__suffix">{suffix}</span> : null}
        {datePickerOpen ? (
          <DatePickerPopover
            onSelect={(selectedDate) => {
              setInputValue(selectedDate);
              onValueChange?.(selectedDate);
              setDatePickerOpen(false);
            }}
          />
        ) : null}
      </div>
      {error ? (
        <p className="edit-field__helper edit-field__helper--error">{error}</p>
      ) : helper ? (
        <p className="edit-field__helper">{helper}</p>
      ) : null}
    </div>
  );
}

function SelectInput({
  label,
  required = false,
  value,
  options = ['Japanese', 'Thai', 'American', 'British'],
  placeholder,
  helper,
  onValueChange,
}) {
  const [selectedValue, setSelectedValue] = useState(value ?? (placeholder ? '' : options[0] || ''));
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);
  const selectedLabel = selectedValue || placeholder || 'Select option';

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (!selectRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  function selectOption(option) {
    setSelectedValue(option);
    onValueChange?.(option);
    setOpen(false);
  }

  return (
    <div className="edit-field">
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="edit-select-wrapper" ref={selectRef}>
        <button
          className={`edit-select-control${selectedValue ? '' : ' edit-select-control--placeholder'}`}
          type="button"
          role="combobox"
          aria-label={label}
          aria-expanded={open}
          aria-controls={`${label.replace(/\s+/g, '-').toLowerCase()}-dropdown`}
          onClick={() => setOpen((currentOpen) => !currentOpen)}
        >
          <span className="edit-select__value">{selectedLabel}</span>
          <CaretDown className="edit-select-control__icon" size={18} weight="regular" aria-hidden="true" />
        </button>
        {open ? (
          <div
            className="edit-select-dropdown"
            id={`${label.replace(/\s+/g, '-').toLowerCase()}-dropdown`}
            role="listbox"
            aria-label={`${label} options`}
          >
            {options.map((option) => (
              <button
                className={`edit-select-dropdown__option${selectedValue === option ? ' edit-select-dropdown__option--selected' : ''}`}
                type="button"
                role="option"
                aria-selected={selectedValue === option}
                key={option}
                onClick={() => selectOption(option)}
              >
                <span>{option}</span>
                {selectedValue === option ? <Check size={14} weight="bold" /> : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {helper ? <p className="edit-field__helper">{helper}</p> : null}
    </div>
  );
}

function TextAreaInput({ label, required = false, value = '', helper, limit = 1000, onValueChange }) {
  const [textValue, setTextValue] = useState(value);
  const characterCount = textValue.length;
  const overLimitCount = characterCount - limit;
  const overLimit = overLimitCount > 0;
  const displayedCharacterCount = overLimit ? -overLimitCount : characterCount;
  const counterId = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-character-count`;

  return (
    <div className="edit-field edit-field--full">
      <FieldLabel required={required}>{label}</FieldLabel>
      {helper ? <p className="edit-field__helper edit-field__helper--before">{helper}</p> : null}
      <div className={`edit-textarea-control${overLimit ? ' edit-textarea-control--error' : ''}`}>
        <textarea
          aria-label={label}
          aria-describedby={counterId}
          aria-invalid={overLimit}
          value={textValue}
          onChange={(event) => {
            setTextValue(event.target.value);
            onValueChange?.(event.target.value);
          }}
        />
      </div>
      <span
        className={`edit-character-count${overLimit ? ' edit-character-count--error' : ''}`}
        id={counterId}
      >
        <span className="edit-character-count__current">{displayedCharacterCount}</span>
        <span className="edit-character-count__limit"> / {limit}</span>
      </span>
    </div>
  );
}

function OptionChip({ children, selected = false, onToggle }) {
  return (
    <button
      className={`select-chip${selected ? ' select-chip--selected' : ''}`}
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
    >
      {selected ? <CheckCircle size={16} weight="regular" /> : null}
      {children}
    </button>
  );
}

function EditSectionTitle({ heading, description }) {
  return (
    <div className="edit-section-title">
      <h2>{heading}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function EditBlockTitle({ heading, description }) {
  return (
    <div className="edit-block-title">
      <h3>{heading}</h3>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function EditableDetailsCard({ children, className = '' }) {
  return <article className={`edit-details-card${className ? ` ${className}` : ''}`}>{children}</article>;
}

function EditActionMenu({ label, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className="edit-action-menu"
      ref={menuRef}
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <button
        className="edit-icon-action"
        type="button"
        aria-label={`More actions for ${label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((currentOpen) => !currentOpen);
        }}
      >
        <DotsThreeOutline size={18} weight="fill" />
      </button>
      {open ? (
        <div className="edit-action-dropdown" role="menu" onClick={(event) => event.stopPropagation()}>
          <button
            className="edit-action-dropdown__item edit-action-dropdown__item--delete"
            type="button"
            role="menuitem"
            onClick={(event) => {
              event.stopPropagation();
              setOpen(false);
              onDelete?.();
            }}
          >
            <Trash size={16} weight="regular" />
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

function parseExperienceTitle(title) {
  const [role, company] = title.split(' at ');

  return {
    role: role || title,
    company: company || 'Company Name',
  };
}

function DesignCheckbox({ label, checked, onChange }) {
  return (
    <label className="checkbox-field">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span className="checkbox-field__box" aria-hidden="true">
        {checked ? <Check size={12} weight="bold" /> : null}
      </span>
      <span>{label}</span>
    </label>
  );
}

function EditableItemExpandedDetails({ item, type = 'default' }) {
  const experienceTitle = parseExperienceTitle(item.title);
  const [currentlyWorking, setCurrentlyWorking] = useState(true);

  if (type === 'work') {
    return (
      <div className="edit-list-item__details">
        <div className="edit-form-grid">
          <TextInput label="Job Title" value={experienceTitle.role} />
          <TextInput label="Company Name" value={experienceTitle.company} />
        </div>
        <TextAreaInput
          label="Responsibility"
          value={`• Collaborate with the broader development team to oversee website design, content management, SEO strategies, branding, and logo creation.
• Work together with the development team to handle website design, manage content, come up with SEO strategies, and create branding and logos.
• Team up with the dev crew to design the website, manage content, brainstorm SEO ideas, and whip up some cool branding and logos.`}
        />
        <MultiSelectInput
          label="Experience Industry"
          helper="Select all that apply"
          chips={['Engineering', 'Sales', 'Other']}
          options={['Other', ...industryOptions]}
        />
        <MultiSelectInput
          label="Role Category"
          helper="Select all that apply"
          chips={['Technology', 'Finance', 'Other']}
          options={['Other', ...roleCategoryOptions]}
        />
        <MultiSelectInput
          label="Subroles"
          helper="Filtered by role category above"
          chips={['Civil Engineer', 'Developer']}
          options={subRoleOptions}
        />
        <div className="edit-form-grid">
          <TextInput label="Start Date" value="Sep 2025" icon={CalendarBlank} datePicker />
          <TextInput
            label="End Date"
            placeholder="End date"
            icon={CalendarBlank}
            disabled={currentlyWorking}
            datePicker={!currentlyWorking}
          />
        </div>
        <DesignCheckbox
          label="I currently work here"
          checked={currentlyWorking}
          onChange={setCurrentlyWorking}
        />
      </div>
    );
  }

  if (item.fields?.length) {
    return (
      <div className="edit-list-item__details">
        <div className="edit-form-grid">
          {item.fields.map((field) =>
            field.type === 'select' ? (
              <SelectInput key={field.label} {...field} />
            ) : (
              <TextInput key={field.label} {...field} />
            ),
          )}
        </div>
        {item.awards ? <TextAreaInput label="Awards and Activities" value={item.awards} /> : null}
        {item.description ? <TextAreaInput label="Description" value={item.description} /> : null}
      </div>
    );
  }

  return (
    <div className="edit-list-item__details">
      <div className="edit-form-grid">
        <TextInput label="Title" value={item.title} />
        <TextInput label="Organization" value={item.meta || 'Organization Name'} />
      </div>
      <TextAreaInput
        label="Description"
        value="Demo editable details for this card. Update the title, organization, related notes, and dates using the same current input styling."
      />
      <div className="edit-form-grid">
        <TextInput label="Start Date" value={item.period?.split(' - ')[0] || 'Jan 2024'} icon={CalendarBlank} datePicker />
        <TextInput label="End Date" value={item.period?.split(' - ')[1] || 'Current'} icon={CalendarBlank} datePicker />
      </div>
    </div>
  );
}

function EditableListItem({
  title,
  meta,
  period,
  card = false,
  detailType = 'default',
  fields,
  awards,
  description,
  expanded = false,
  onToggle,
  onDelete,
}) {
  const item = { title, meta, period, fields, awards, description };

  function toggleExpanded() {
    onToggle?.();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpanded();
    }
  }

  return (
    <div
      className={`edit-list-item${card ? ' edit-list-item--card' : ''}${expanded ? ' edit-list-item--expanded' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={toggleExpanded}
      onKeyDown={handleKeyDown}
    >
      <div className="edit-list-item__summary">
        <div>
          <h4>{title}</h4>
          {meta ? <p>{meta}</p> : null}
          {period ? <p>{period}</p> : null}
        </div>
        <EditActionMenu label={title} onDelete={onDelete} />
      </div>
      {expanded ? (
        <div onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
          <EditableItemExpandedDetails item={item} type={detailType} />
        </div>
      ) : null}
    </div>
  );
}

function AddTextLink({ children, disabled = false, onClick }) {
  return (
    <button className="text-link edit-add-link" type="button" disabled={disabled} onClick={onClick}>
      <Plus size={16} weight="regular" />
      {children}
    </button>
  );
}

function SelectChipField({ label, required, helper, options, selected, onToggle }) {
  return (
    <div className="edit-field edit-field--full">
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="select-chip-row">
        {options.map((option) => (
          <OptionChip selected={selected.includes(option)} onToggle={() => onToggle(option)} key={option}>
            {option}
          </OptionChip>
        ))}
      </div>
      {helper ? <p className="edit-field__helper">{helper}</p> : null}
    </div>
  );
}

function MultiSelectInput({ label, required = false, chips = [], options, helper, onSelectionChange }) {
  const dropdownOptions = Array.from(new Set(options || chips));
  const [selectedChips, setSelectedChips] = useState(chips);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const [visibleChipLimit, setVisibleChipLimit] = useState(3);
  const visibleChips = selectedChips.slice(0, visibleChipLimit);
  const hiddenChipCount = Math.max(selectedChips.length - visibleChipLimit, 0);
  const filteredOptions = dropdownOptions.filter((option) =>
    option.toLowerCase().includes(searchValue.trim().toLowerCase()),
  );

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    function estimateChipWidth(chip) {
      return Math.min(220, chip.length * 7 + 42);
    }

    function updateVisibleChipLimit() {
      const inputWidth = inputRef.current?.getBoundingClientRect().width || 0;

      if (!inputWidth) {
        return;
      }

      if (window.matchMedia('(max-width: 560px)').matches) {
        setVisibleChipLimit(Math.min(3, selectedChips.length || 3));
        return;
      }

      const reservedWidth = 56;
      const overflowCounterWidth = selectedChips.length > 1 ? 44 : 0;
      const availableWidth = Math.max(0, inputWidth - reservedWidth);
      let usedWidth = 0;
      let nextVisibleCount = 0;

      selectedChips.forEach((chip, index) => {
        const remainingCount = selectedChips.length - (index + 1);
        const projectedWidth = usedWidth + estimateChipWidth(chip) + (index > 0 ? 4 : 0);
        const reservedOverflowWidth = remainingCount > 0 ? overflowCounterWidth : 0;

        if (projectedWidth + reservedOverflowWidth <= availableWidth) {
          usedWidth = projectedWidth;
          nextVisibleCount = index + 1;
        }
      });

      setVisibleChipLimit(Math.max(1, nextVisibleCount || Math.min(selectedChips.length, 1)));
    }

    updateVisibleChipLimit();

    const resizeObserver = new ResizeObserver(updateVisibleChipLimit);
    if (inputRef.current) {
      resizeObserver.observe(inputRef.current);
    }

    window.addEventListener('resize', updateVisibleChipLimit);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateVisibleChipLimit);
    };
  }, [selectedChips]);

  function toggleOption(option) {
    setSelectedChips((currentChips) => {
      const nextChips = currentChips.includes(option)
        ? currentChips.filter((chip) => chip !== option)
        : [...currentChips, option];

      onSelectionChange?.(nextChips);
      return nextChips;
    });
  }

  function removeChip(option) {
    setSelectedChips((currentChips) => {
      const nextChips = currentChips.filter((chip) => chip !== option);
      onSelectionChange?.(nextChips);
      return nextChips;
    });
  }

  return (
    <div className="edit-field edit-field--full">
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="edit-select-chip-wrapper" ref={dropdownRef}>
      <div
        ref={inputRef}
        className="edit-select-chip-input"
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="edit-select-chip-input__chips">
          {visibleChips.length ? (
            visibleChips.map((chip) => (
              <span className="mini-tag mini-tag--blue" key={chip}>
                {chip}
                <button
                  className="mini-tag__remove"
                  type="button"
                  aria-label={`Remove ${chip}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    removeChip(chip);
                  }}
                >
                  <X size={10} weight="regular" aria-hidden="true" />
                </button>
              </span>
            ))
          ) : (
            <span className="edit-select-chip-input__placeholder">Select options</span>
          )}
          {hiddenChipCount ? <span className="edit-select-chip-input__more">+ {hiddenChipCount}</span> : null}
        </span>
        <button
          className="edit-select-chip-input__arrow"
          type="button"
          aria-label={`Toggle ${label} options`}
          aria-expanded={open}
          onClick={(event) => {
            event.stopPropagation();
            setOpen((currentOpen) => !currentOpen);
          }}
        >
          <CaretDown size={18} weight="regular" aria-hidden="true" />
        </button>
      </div>
        {open ? (
          <div className="edit-select-dropdown" role="listbox" aria-label={`${label} options`}>
            <div className="edit-select-dropdown__search">
              <input
                value={searchValue}
                placeholder="Type to search"
                aria-label={`Search ${label} options`}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
            {filteredOptions.map((option) => (
              <button
                className={`edit-select-dropdown__option${selectedChips.includes(option) ? ' edit-select-dropdown__option--selected' : ''}`}
                type="button"
                role="option"
                aria-selected={selectedChips.includes(option)}
                key={option}
                onClick={() => toggleOption(option)}
              >
                <span>{option}</span>
                {selectedChips.includes(option) ? <Check size={14} weight="bold" /> : null}
              </button>
            ))}
            {!filteredOptions.length ? (
              <p className="edit-select-dropdown__empty">No options found</p>
            ) : null}
          </div>
        ) : null}
      </div>
      {helper ? <p className="edit-field__helper">{helper}</p> : null}
    </div>
  );
}

function BasicInfoEditForm({
  selectedGender,
  setSelectedGender,
  selectedLicenses,
  toggleLicense,
}) {
  const resumeInputRef = useRef(null);
  const [resumeFileName, setResumeFileName] = useState('Marie CV.pdf');

  function handleResumeFileChange(event) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setResumeFileName(selectedFile.name);
    }
  }

  return (
    <>
      <EditSectionTitle heading="Basic Information" description="กรุณากรอกข้อมูลส่วนตัว" />

      <div className="edit-upload-panel">
        <div className="edit-upload-panel__avatar">
          <img className="avatar avatar--edit" src={avatarUrl} alt="Marie Brown" />
          <button className="button button--outline-primary" type="button">
            Change
          </button>
        </div>

        <div className="edit-field">
          <FieldLabel required>Resume File</FieldLabel>
          <div className="edit-resume-row">
            <Chip label={resumeFileName} tone="blue" icon={FileText} className="edit-resume-chip" />
            <button className="text-link" type="button" onClick={() => resumeInputRef.current?.click()}>
              <UploadSimple size={16} weight="regular" />
              Reupload Resume
            </button>
            <input
              ref={resumeInputRef}
              className="visually-hidden"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleResumeFileChange}
            />
          </div>
        </div>
      </div>

      <div className="edit-form-grid">
        {editProfileFields.map((field) => (
          <TextInput key={field.label} {...field} />
        ))}

        <div className="edit-field">
          <FieldLabel>Gender</FieldLabel>
          <div className="select-chip-row">
            {genderOptions.map((option) => (
              <OptionChip
                selected={selectedGender === option}
                onToggle={() => setSelectedGender(option)}
                key={option}
              >
                {option}
              </OptionChip>
            ))}
          </div>
        </div>

        <SelectInput label="Nationality" value="Japanese" options={nationalityOptions} />

        <TextAreaInput label="Address" value="123 Sakura Lane, Tokyo, Japan" />

        <TextInput
          label="Line ID (แนะนำให้กรอก)"
          value="marielineid"
          helper="Used to contact you about job opportunities and related services. Additional consent may be requested later."
        />

        <div className="edit-field">
          <FieldLabel>LinkedIn URL</FieldLabel>
          <div className="edit-input">
            <LinkedinLogo size={20} weight="regular" />
            <input defaultValue="https://linkedin.com/in/mariebrown" aria-label="LinkedIn URL" />
          </div>
        </div>

        <div className="edit-field edit-field--full">
          <FieldLabel hint="(เลือกได้มากกว่า 1)">Driving License</FieldLabel>
          <div className="select-chip-row">
            {drivingLicenseOptions.map((option) => (
              <OptionChip
                selected={selectedLicenses.includes(option)}
                onToggle={() => toggleLicense(option)}
                key={option}
              >
                {option}
              </OptionChip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const emptyWorkExperienceForm = {
  jobTitle: '',
  companyName: '',
  responsibility: '',
  industry: '',
  roleCategory: '',
  subroles: '',
  startDate: '',
  endDate: '',
  currentlyWorking: false,
};

function AddWorkExperienceForm({ onCancel, onAdd }) {
  const [formValues, setFormValues] = useState(emptyWorkExperienceForm);
  const addDisabled =
    isBlank(formValues.jobTitle) ||
    isBlank(formValues.companyName) ||
    isBlank(formValues.responsibility) ||
    isBlank(formValues.industry) ||
    isBlank(formValues.roleCategory) ||
    isBlank(formValues.subroles) ||
    isBlank(formValues.startDate) ||
    (!formValues.currentlyWorking && isBlank(formValues.endDate));

  function updateField(field, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  function handleAdd() {
    if (addDisabled) {
      return;
    }

    onAdd(formValues);
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card">
      <div className="edit-form-grid">
        <TextInput
          label="Job Title"
          placeholder="e.g. Senior Marketing Manager"
          value={formValues.jobTitle}
          onValueChange={(value) => updateField('jobTitle', value)}
        />
        <TextInput
          label="Company Name"
          placeholder="e.g. ABC Company Limited"
          value={formValues.companyName}
          onValueChange={(value) => updateField('companyName', value)}
        />
      </div>

      <TextAreaInput
        label="Responsibility"
        value={formValues.responsibility}
        onValueChange={(value) => updateField('responsibility', value)}
      />

      <MultiSelectInput
        label="Experience Industry"
        helper="Select all that apply"
        chips={formValues.industry ? formValues.industry.split(', ') : []}
        options={industryOptions}
        onSelectionChange={(values) => updateField('industry', values.join(', '))}
      />
      <MultiSelectInput
        label="Role Category"
        helper="Select all that apply"
        chips={formValues.roleCategory ? formValues.roleCategory.split(', ') : []}
        options={roleCategoryOptions}
        onSelectionChange={(values) => updateField('roleCategory', values.join(', '))}
      />
      <MultiSelectInput
        label="Subroles"
        helper="Filtered by role category above"
        chips={formValues.subroles ? formValues.subroles.split(', ') : []}
        options={subRoleOptions}
        onSelectionChange={(values) => updateField('subroles', values.join(', '))}
      />

      <div className="edit-form-grid">
        <TextInput
          label="Start Date"
          placeholder="Start Date"
          icon={CalendarBlank}
          datePicker
          value={formValues.startDate}
          onValueChange={(value) => updateField('startDate', value)}
        />
        <TextInput
          label="End Date"
          placeholder="End Date"
          icon={CalendarBlank}
          datePicker={!formValues.currentlyWorking}
          disabled={formValues.currentlyWorking}
          value={formValues.endDate}
          onValueChange={(value) => updateField('endDate', value)}
        />
      </div>

      <DesignCheckbox
        label="I currently work here"
        checked={formValues.currentlyWorking}
        onChange={(checked) => updateField('currentlyWorking', checked)}
      />

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

const emptyEducationForm = {
  degreeTitle: '',
  institution: '',
  faculty: '',
  educationLevel: educationLevelOptions[0],
  gpax: '',
  major: '',
  startYear: '',
  graduateYear: '',
  awards: '',
  description: '',
};

function AddEducationForm({ onCancel, onAdd }) {
  const [formValues, setFormValues] = useState(emptyEducationForm);
  const addDisabled =
    isBlank(formValues.degreeTitle) ||
    isBlank(formValues.institution) ||
    isBlank(formValues.faculty) ||
    isBlank(formValues.educationLevel) ||
    isBlank(formValues.gpax) ||
    isBlank(formValues.major) ||
    isBlank(formValues.startYear) ||
    isBlank(formValues.graduateYear) ||
    isBlank(formValues.awards) ||
    isBlank(formValues.description);

  function updateField(field, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card">
      <div className="edit-form-grid">
        <TextInput
          label="Degree Title"
          placeholder="e.g. Bachelor's Degree in Engineering"
          value={formValues.degreeTitle}
          onValueChange={(value) => updateField('degreeTitle', value)}
        />
        <TextInput
          label="Institute / University (แนะนำให้กรอก)"
          placeholder="e.g. Chulalongkorn University"
          value={formValues.institution}
          onValueChange={(value) => updateField('institution', value)}
        />
        <TextInput
          label="Faculty"
          placeholder="Faculty of Technology"
          value={formValues.faculty}
          onValueChange={(value) => updateField('faculty', value)}
        />
        <div className="edit-form-grid edit-form-grid--nested">
          <SelectInput
            label="Education Level"
            options={educationLevelOptions}
            value={formValues.educationLevel}
            onValueChange={(value) => updateField('educationLevel', value)}
          />
          <TextInput
            label="GPAX"
            placeholder="e.g. 3.50"
            value={formValues.gpax}
            onValueChange={(value) => updateField('gpax', value)}
          />
        </div>
        <TextInput
          label="Field of Study / Major (แนะนำให้กรอก)"
          placeholder="e.g. Faculty of Engineering"
          value={formValues.major}
          onValueChange={(value) => updateField('major', value)}
        />
        <div className="edit-form-grid edit-form-grid--nested">
          <TextInput
            label="Start Year"
            placeholder="Select Year"
            icon={CalendarBlank}
            datePicker
            value={formValues.startYear}
            onValueChange={(value) => updateField('startYear', value)}
          />
          <TextInput
            label="Graduate Year"
            placeholder="Select Year"
            icon={CalendarBlank}
            datePicker
            value={formValues.graduateYear}
            onValueChange={(value) => updateField('graduateYear', value)}
          />
        </div>
      </div>

      <TextAreaInput
        label="Awards and Activities"
        value={formValues.awards}
        onValueChange={(value) => updateField('awards', value)}
      />
      <TextAreaInput
        label="Educational Description"
        value={formValues.description}
        onValueChange={(value) => updateField('description', value)}
      />

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={() => {
            if (!addDisabled) {
              onAdd(formValues);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

const emptyLanguageCertificationForm = {
  certification: '',
  yearObtained: '',
};

function AddLanguageCertificationForm({ onCancel, onAdd }) {
  const [formValues, setFormValues] = useState(emptyLanguageCertificationForm);
  const addDisabled = isBlank(formValues.certification) || isBlank(formValues.yearObtained);

  function updateField(field, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card">
      <div className="edit-form-grid">
        <TextInput
          label="Certification / License"
          placeholder="e.g. IELTS"
          value={formValues.certification}
          onValueChange={(value) => updateField('certification', value)}
        />
        <TextInput
          label="Year Obtained"
          placeholder="Select Year"
          icon={CalendarBlank}
          datePicker
          value={formValues.yearObtained}
          onValueChange={(value) => updateField('yearObtained', value)}
        />
      </div>

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={() => {
            if (!addDisabled) {
              onAdd(formValues);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

const emptyOtherCertificationForm = {
  certification: '',
  issuedBy: '',
  yearObtained: '',
};

function AddOtherCertificationForm({ onCancel, onAdd }) {
  const [formValues, setFormValues] = useState(emptyOtherCertificationForm);
  const addDisabled =
    isBlank(formValues.certification) || isBlank(formValues.issuedBy) || isBlank(formValues.yearObtained);

  function updateField(field, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card">
      <div className="edit-form-grid">
        <TextInput
          label="Certification / License"
          placeholder="e.g. Certificate of Multimedia"
          value={formValues.certification}
          onValueChange={(value) => updateField('certification', value)}
        />
        <TextInput
          label="Issued By"
          placeholder="e.g. Box Hill Institute of Arts"
          value={formValues.issuedBy}
          onValueChange={(value) => updateField('issuedBy', value)}
        />
        <TextInput
          label="Year Obtained"
          placeholder="Select Year"
          icon={CalendarBlank}
          datePicker
          value={formValues.yearObtained}
          onValueChange={(value) => updateField('yearObtained', value)}
        />
      </div>

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={() => {
            if (!addDisabled) {
              onAdd(formValues);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

const emptyOtherLanguageForm = {
  language: '',
  level: '',
};

function AddOtherLanguageForm({ onCancel, onAdd }) {
  const [formValues, setFormValues] = useState(emptyOtherLanguageForm);
  const addDisabled = isBlank(formValues.language) || isBlank(formValues.level);

  function updateField(field, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card edit-add-language-card">
      <div className="edit-form-grid">
        <SelectInput
          label="Language"
          options={languageCertificationLanguageOptions}
          value={formValues.language}
          placeholder="Select language"
          onValueChange={(value) => updateField('language', value)}
        />
        <SelectInput
          label="Proficiency Level"
          options={languageCertificationLevelOptions}
          value={formValues.level}
          placeholder="Select proficiency level"
          onValueChange={(value) => updateField('level', value)}
        />
      </div>

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={() => onAdd(formValues)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function AddPortfolioLinkForm({ onCancel, onAdd }) {
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const portfolioUrlError = getPortfolioUrlError(portfolioUrl);
  const addDisabled = isBlank(portfolioUrl) || Boolean(portfolioUrlError);

  function handleAdd() {
    if (addDisabled) {
      return;
    }

    onAdd(portfolioUrl.trim());
    setPortfolioUrl('');
  }

  return (
    <div className="edit-list-item edit-list-item--card edit-add-work-card edit-add-portfolio-card">
      <TextInput
        label="Portfolio URL"
        placeholder="https://portfolio.com"
        value={portfolioUrl}
        error={portfolioUrlError}
        onValueChange={setPortfolioUrl}
      />

      <div className="edit-add-work-card__actions">
        <button className="button button--outline-neutral button--compact" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="button button--primary button--compact"
          type="button"
          disabled={addDisabled}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function WorkExperienceEditForm() {
  const [expandedWorkItem, setExpandedWorkItem] = useState(null);
  const [workExperienceItems, setWorkExperienceItems] = useState(editableWorkExperienceRows);
  const [addingWorkExperience, setAddingWorkExperience] = useState(false);
  const [skillTags, setSkillTags] = useState(editSkillTags);
  const [removingSkillTags, setRemovingSkillTags] = useState([]);
  const [skillInputValue, setSkillInputValue] = useState('');
  const [portfolioLinks, setPortfolioLinks] = useState(initialPortfolioLinks);
  const [addingPortfolioLink, setAddingPortfolioLink] = useState(false);
  const [deleteRequest, setDeleteRequest] = useState(null);
  const [deleteToastVisible, setDeleteToastVisible] = useState(false);
  const skillLimitReached = skillTags.length >= 50;

  function requestDelete(itemLabel, onConfirm) {
    setDeleteRequest({ itemLabel, onConfirm });
  }

  function confirmDelete() {
    deleteRequest?.onConfirm();
    setDeleteRequest(null);
    setDeleteToastVisible(true);
  }

  useEffect(() => {
    if (!deleteToastVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setDeleteToastVisible(false);
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [deleteToastVisible]);

  function addSkillTag(rawSkill) {
    const nextSkill = rawSkill.trim();
    if (!nextSkill) {
      return false;
    }

    const skillExists = skillTags.some((tag) => tag.toLowerCase() === nextSkill.toLowerCase());
    if (skillExists) {
      return true;
    }

    if (skillLimitReached) {
      return false;
    }

    setSkillTags((currentTags) => [...currentTags, nextSkill]);
    return true;
  }

  function removeSkillTag(tagToRemove) {
    setSkillTags((currentTags) => currentTags.filter((tag) => tag !== tagToRemove));
  }

  function removeSkillTagWithEasing(tagToRemove) {
    if (removingSkillTags.includes(tagToRemove)) {
      return;
    }

    setRemovingSkillTags((currentTags) => [...currentTags, tagToRemove]);
    window.setTimeout(() => {
      removeSkillTag(tagToRemove);
      setRemovingSkillTags((currentTags) => currentTags.filter((tag) => tag !== tagToRemove));
    }, 180);
  }

  function submitSkillTag(rawSkill = skillInputValue) {
    const shouldClear = addSkillTag(rawSkill);
    if (shouldClear) {
      setSkillInputValue('');
    }

    return shouldClear;
  }

  function updatePortfolioLink(idToUpdate, value) {
    setPortfolioLinks((currentLinks) =>
      currentLinks.map((link) => (link.id === idToUpdate ? { ...link, value } : link)),
    );
  }

  function removePortfolioLink(idToRemove) {
    setPortfolioLinks((currentLinks) => currentLinks.filter((link) => link.id !== idToRemove));
  }

  function addPortfolioLink(url) {
    setPortfolioLinks((currentLinks) => [
      ...currentLinks,
      { id: `portfolio-${Date.now()}`, value: url },
    ]);
    setAddingPortfolioLink(false);
  }

  function handleAddWorkExperience(formValues) {
    const title = formValues.jobTitle.trim() || 'New Work Experience';
    const startDate = formValues.startDate.trim() || 'Start Date';
    const endDate = formValues.currentlyWorking ? 'Current' : formValues.endDate.trim() || 'End Date';
    const newItem = {
      id: `work-${Date.now()}`,
      title,
      meta: `${startDate} - ${endDate}`,
      fields: [
        { label: 'Job Title', value: formValues.jobTitle },
        { label: 'Company Name', value: formValues.companyName },
        { label: 'Experience Industry', value: formValues.industry },
        { label: 'Role Category', value: formValues.roleCategory },
        { label: 'Subroles', value: formValues.subroles },
        { label: 'Start Date', value: startDate },
        { label: 'End Date', value: endDate },
      ],
      description: formValues.responsibility,
    };

    setWorkExperienceItems((currentItems) => [newItem, ...currentItems]);
    setExpandedWorkItem(null);
    setAddingWorkExperience(false);
  }

  return (
    <>
      {deleteToastVisible ? <SaveToast message="Item deleted successfully." tone="error" /> : null}
      <EditSectionTitle heading="Career & Work Experience" description="กรุณากรอกข้อมูลส่วนตัว" />

      <EditableDetailsCard className="edit-details-card--padded">
        <EditBlockTitle heading="Latest Career Details" description="Lorem Ipsum" />
        <div className="edit-form-grid">
          <TextAreaInput
            label="Professional Summary"
            helper="Brief summary of your background and strengths."
            value={professionalSummary}
          />
          {latestCareerFields.map((field) => (
            <TextInput key={field.label} {...field} />
          ))}
        </div>
      </EditableDetailsCard>

      <section className="edit-section-block">
        <EditBlockTitle heading="Work Experience" description="Lorem" />
        <div className="edit-list">
          {workExperienceItems.map((item) => (
            <EditableListItem
              key={item.id || item.title}
              card
              detailType="work"
              expanded={expandedWorkItem === item.title}
              onToggle={() =>
                setExpandedWorkItem((currentItem) => (currentItem === item.title ? null : item.title))
              }
              onDelete={() =>
                requestDelete(item.title, () => {
                  setWorkExperienceItems((currentItems) =>
                    currentItems.filter((currentItem) => (currentItem.id || currentItem.title) !== (item.id || item.title)),
                  );
                  setExpandedWorkItem(null);
                })
              }
              {...item}
            />
          ))}
        </div>
        {addingWorkExperience ? (
          <AddWorkExperienceForm
            onCancel={() => setAddingWorkExperience(false)}
            onAdd={handleAddWorkExperience}
          />
        ) : null}
        <AddTextLink
          disabled={addingWorkExperience}
          onClick={() => {
            setExpandedWorkItem(null);
            setAddingWorkExperience(true);
          }}
        >
          add another work experience
        </AddTextLink>
      </section>

      <section className="edit-section-block">
        <EditBlockTitle heading="Skills" description="เพิ่มทักษะที่เกี่ยวข้อง" />
        <EditableDetailsCard className="edit-chip-card">
          <h4>Added Skills</h4>
          <div className="edit-chip-card__chips">
            {skillTags.map((tag) => (
              <span className={`mini-tag skill-chip${removingSkillTags.includes(tag) ? ' chip--removing' : ''}`} key={tag}>
                {tag}
                <button
                  className="mini-tag__remove"
                  type="button"
                  aria-label={`Remove ${tag}`}
                  onClick={() => removeSkillTagWithEasing(tag)}
                >
                  <X size={10} weight="regular" aria-hidden="true" />
                </button>
              </span>
            ))}
          </div>
          <span className="edit-chip-card__count">{skillTags.length} / 50 skills</span>
          <div className="skill-input-row">
            <TextInput
              label=""
              value={skillInputValue}
              placeholder="Search or type a skill"
              helper="Type a skill and press Enter"
              disabled={skillLimitReached}
              onValueChange={setSkillInputValue}
              onEnter={submitSkillTag}
            />
            <button
              className="button button--primary button--tiny"
              type="button"
              disabled={skillLimitReached}
              onClick={() => submitSkillTag()}
            >
              Add
            </button>
          </div>
        </EditableDetailsCard>
      </section>

      <section className="edit-section-block">
        <EditBlockTitle heading="Portfolio URL" description="เพิ่มทักษะที่เกี่ยวข้อง" />
        <EditableDetailsCard>
          <div className="edit-url-list">
            {portfolioLinks.map((link, index) => (
              <div className="edit-url-row" key={link.id}>
                <TextInput
                  label=""
                  value={link.value}
                  placeholder="https://portfolio.com"
                  error={getPortfolioUrlError(link.value)}
                  onValueChange={(value) => updatePortfolioLink(link.id, value)}
                />
                <button
                  className="edit-icon-action"
                  type="button"
                  aria-label={`Remove portfolio link ${index + 1}`}
                  onClick={() => requestDelete(link.value || `Portfolio link ${index + 1}`, () => removePortfolioLink(link.id))}
                >
                  <Trash size={18} weight="regular" />
                </button>
              </div>
            ))}
          </div>
          {addingPortfolioLink ? (
            <AddPortfolioLinkForm
              onCancel={() => setAddingPortfolioLink(false)}
              onAdd={addPortfolioLink}
            />
          ) : null}
          <AddTextLink disabled={addingPortfolioLink} onClick={() => setAddingPortfolioLink(true)}>
            add another portfolio link
          </AddTextLink>
        </EditableDetailsCard>
      </section>
      {deleteRequest ? (
        <DeleteConfirmationModal
          itemLabel={deleteRequest.itemLabel}
          onBack={() => setDeleteRequest(null)}
          onDelete={confirmDelete}
        />
      ) : null}
    </>
  );
}

function EducationEditForm() {
  const [expandedEducationItem, setExpandedEducationItem] = useState(null);
  const [educationItems, setEducationItems] = useState(educationEditRows);
  const [addingEducation, setAddingEducation] = useState(false);
  const [otherLanguages, setOtherLanguages] = useState(editableLanguages);
  const [removingOtherLanguageIds, setRemovingOtherLanguageIds] = useState([]);
  const [addingOtherLanguage, setAddingOtherLanguage] = useState(false);
  const [languageCertificationItems, setLanguageCertificationItems] = useState(
    languageCertificationRows.map((item, index) => ({
      ...item,
      id: `language-certification-${index + 1}`,
    })),
  );
  const [otherCertificationItems, setOtherCertificationItems] = useState(
    otherCertificationRows.map((item, index) => ({
      ...item,
      id: `other-certification-${index + 1}`,
    })),
  );
  const [addingLanguageCertification, setAddingLanguageCertification] = useState(false);
  const [addingOtherCertification, setAddingOtherCertification] = useState(false);
  const [expandedLanguageCertification, setExpandedLanguageCertification] = useState(null);
  const [expandedOtherCertification, setExpandedOtherCertification] = useState(null);
  const [deleteRequest, setDeleteRequest] = useState(null);
  const [deleteToastVisible, setDeleteToastVisible] = useState(false);

  function requestDelete(itemLabel, onConfirm) {
    setDeleteRequest({ itemLabel, onConfirm });
  }

  function confirmDelete() {
    deleteRequest?.onConfirm();
    setDeleteRequest(null);
    setDeleteToastVisible(true);
  }

  useEffect(() => {
    if (!deleteToastVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setDeleteToastVisible(false);
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [deleteToastVisible]);

  function handleAddEducation(formValues) {
    const title = formValues.degreeTitle.trim() || 'New Education';
    const institution = formValues.institution.trim() || 'Institution / University';
    const startYear = formValues.startYear.trim() || 'Start Year';
    const graduateYear = formValues.graduateYear.trim() || 'Graduate Year';
    const newItem = {
      id: `education-${Date.now()}`,
      title,
      meta: institution,
      period: `${startYear} - ${graduateYear}`,
      fields: [
        { label: 'Degree Title', value: formValues.degreeTitle },
        { label: 'Institution / University', value: formValues.institution },
        { label: 'Faculty', value: formValues.faculty },
        { label: 'Education Level', type: 'select', value: formValues.educationLevel, options: educationLevelOptions },
        { label: 'GPAX', value: formValues.gpax },
        { label: 'Field of Study / Major', value: formValues.major },
        { label: 'Start Year', value: startYear },
        { label: 'Graduate Year', value: graduateYear },
      ],
      awards: formValues.awards,
      description: formValues.description,
    };

    setEducationItems((currentItems) => [newItem, ...currentItems]);
    setExpandedEducationItem(null);
    setAddingEducation(false);
  }

  function removeOtherLanguage(languageIdToRemove) {
    setOtherLanguages((currentLanguages) =>
      currentLanguages.filter((languageItem) => languageItem.id !== languageIdToRemove),
    );
  }

  function removeOtherLanguageWithEasing(languageIdToRemove) {
    if (removingOtherLanguageIds.includes(languageIdToRemove)) {
      return;
    }

    setRemovingOtherLanguageIds((currentIds) => [...currentIds, languageIdToRemove]);
    window.setTimeout(() => {
      removeOtherLanguage(languageIdToRemove);
      setRemovingOtherLanguageIds((currentIds) => currentIds.filter((id) => id !== languageIdToRemove));
    }, 180);
  }

  function handleAddOtherLanguage(formValues) {
    setOtherLanguages((currentLanguages) => [
      ...currentLanguages,
      {
        id: `language-${Date.now()}`,
        language: formValues.language,
        level: formValues.level,
      },
    ]);
    setAddingOtherLanguage(false);
  }

  function handleAddLanguageCertification(formValues) {
    const certification = formValues.certification.trim();
    const yearObtained = formValues.yearObtained.trim();
    const newItem = {
      id: `language-certification-${Date.now()}`,
      title: certification,
      meta: `Year Obtained: ${yearObtained}`,
      fields: [
        { label: 'Certification / License', required: true, value: certification },
        { label: 'Year Obtained', value: yearObtained },
      ],
    };

    setLanguageCertificationItems((currentItems) => [newItem, ...currentItems]);
    setExpandedLanguageCertification(null);
    setAddingLanguageCertification(false);
  }

  function handleAddOtherCertification(formValues) {
    const certification = formValues.certification.trim();
    const issuedBy = formValues.issuedBy.trim();
    const yearObtained = formValues.yearObtained.trim();
    const newItem = {
      id: `other-certification-${Date.now()}`,
      title: certification,
      meta: issuedBy,
      period: `Year Obtained: ${yearObtained}`,
      fields: [
        { label: 'Certification / License', required: true, value: certification },
        { label: 'Issued By', value: issuedBy },
        { label: 'Year Obtained', value: yearObtained },
      ],
    };

    setOtherCertificationItems((currentItems) => [newItem, ...currentItems]);
    setExpandedOtherCertification(null);
    setAddingOtherCertification(false);
  }

  return (
    <>
      {deleteToastVisible ? <SaveToast message="Item deleted successfully." tone="error" /> : null}
      <EditSectionTitle heading="Education & Certifications" description="กรุณากรอกข้อมูลด้านประวัติการศึกษา" />

      <section className="edit-section-block">
        {educationItems.map((item) => {
          const itemKey = item.id || item.title;

          return (
            <EditableDetailsCard key={itemKey}>
              <EditableListItem
                {...item}
                expanded={expandedEducationItem === itemKey}
                onToggle={() =>
                  setExpandedEducationItem((currentItem) =>
                    currentItem === itemKey ? null : itemKey,
                  )
                }
                onDelete={() =>
                  requestDelete(item.title, () => {
                    setEducationItems((currentItems) =>
                      currentItems.filter((currentItem) => (currentItem.id || currentItem.title) !== itemKey),
                    );
                    setExpandedEducationItem(null);
                  })
                }
              />
            </EditableDetailsCard>
          );
        })}
        {addingEducation ? (
          <AddEducationForm
            onCancel={() => setAddingEducation(false)}
            onAdd={handleAddEducation}
          />
        ) : null}
        <AddTextLink
          disabled={addingEducation}
          onClick={() => {
            setExpandedEducationItem(null);
            setAddingEducation(true);
          }}
        >
          add another education
        </AddTextLink>
      </section>

      <section className="edit-section-block">
        <EditBlockTitle heading="Language Proficiency" description="Lorem" />
        <EditableDetailsCard>
          <div className="edit-form-grid">
            {languageProficiencyFields.map((field) =>
              field.type === 'select' ? (
                <SelectInput key={field.label} {...field} />
              ) : (
                <TextInput key={field.label} {...field} />
              ),
            )}
          </div>
          <div className="edit-field edit-field--full edit-language-chips-field">
            <FieldLabel>Other Languages</FieldLabel>
            <div className="edit-chip-card__chips other-language-chip-list">
              {otherLanguages.map(({ id, language, level }) => (
                <span
                  className={`mini-tag user-fill-data-chip other-language-chip${removingOtherLanguageIds.includes(id) ? ' chip--removing' : ''}`}
                  key={id}
                >
                  {language} / {level}
                  <button
                    className="mini-tag__remove"
                    type="button"
                    aria-label={`Remove ${language}`}
                    onClick={() => removeOtherLanguageWithEasing(id)}
                  >
                    <X size={10} weight="regular" aria-hidden="true" />
                  </button>
                </span>
              ))}
            </div>
            {addingOtherLanguage ? (
              <AddOtherLanguageForm
                onCancel={() => setAddingOtherLanguage(false)}
                onAdd={handleAddOtherLanguage}
              />
            ) : null}
            <AddTextLink disabled={addingOtherLanguage} onClick={() => setAddingOtherLanguage(true)}>
              add another language
            </AddTextLink>
          </div>
        </EditableDetailsCard>
      </section>

      <section className="edit-section-block">
        <EditBlockTitle heading="Certifications / Licenses" description="Lorem" />
        <EditBlockTitle heading="Language Certifications" />
        <div className="edit-list">
          {languageCertificationItems.map((item) => {
            const itemKey = item.id || item.title;

            return (
              <EditableListItem
                key={itemKey}
                card
                {...item}
                expanded={expandedLanguageCertification === itemKey}
                onToggle={() =>
                  setExpandedLanguageCertification((currentItem) =>
                    currentItem === itemKey ? null : itemKey,
                  )
                }
                onDelete={() =>
                  requestDelete(item.title, () => {
                    setLanguageCertificationItems((currentItems) =>
                      currentItems.filter((currentItem) => (currentItem.id || currentItem.title) !== itemKey),
                    );
                    setExpandedLanguageCertification(null);
                  })
                }
              />
            );
          })}
        </div>
        {addingLanguageCertification ? (
          <AddLanguageCertificationForm
            onCancel={() => setAddingLanguageCertification(false)}
            onAdd={handleAddLanguageCertification}
          />
        ) : null}
        <AddTextLink
          disabled={addingLanguageCertification}
          onClick={() => {
            setExpandedLanguageCertification(null);
            setAddingLanguageCertification(true);
          }}
        >
          add another language certification
        </AddTextLink>
      </section>

      <section className="edit-section-block">
        <EditBlockTitle heading="Other Certifications / Licenses" />
        <div className="edit-list">
          {otherCertificationItems.map((item) => {
            const itemKey = item.id || item.title;

            return (
              <EditableListItem
                key={itemKey}
                card
                {...item}
                expanded={expandedOtherCertification === itemKey}
                onToggle={() =>
                  setExpandedOtherCertification((currentItem) =>
                    currentItem === itemKey ? null : itemKey,
                  )
                }
                onDelete={() =>
                  requestDelete(item.title, () => {
                    setOtherCertificationItems((currentItems) =>
                      currentItems.filter((currentItem) => (currentItem.id || currentItem.title) !== itemKey),
                    );
                    setExpandedOtherCertification(null);
                  })
                }
              />
            );
          })}
        </div>
        {addingOtherCertification ? (
          <AddOtherCertificationForm
            onCancel={() => setAddingOtherCertification(false)}
            onAdd={handleAddOtherCertification}
          />
        ) : null}
        <AddTextLink
          disabled={addingOtherCertification}
          onClick={() => {
            setExpandedOtherCertification(null);
            setAddingOtherCertification(true);
          }}
        >
          add another certification or license
        </AddTextLink>
      </section>
      {deleteRequest ? (
        <DeleteConfirmationModal
          itemLabel={deleteRequest.itemLabel}
          onBack={() => setDeleteRequest(null)}
          onDelete={confirmDelete}
        />
      ) : null}
    </>
  );
}

function JobPreferencesEditForm({ selectedJobPreferences, onToggleJobPreference }) {
  return (
    <>
      <EditSectionTitle heading="Job Preferences & Visibility" description="กรุณากรอกข้อมูลด้านประวัติการศึกษา" />

      <EditableDetailsCard className="edit-details-card--padded">
        {jobPreferenceChipGroups.slice(0, 2).map((group) => (
          <SelectChipField
            key={group.key}
            label={group.label}
            required={group.required}
            helper={group.helper}
            options={group.options}
            selected={selectedJobPreferences[group.key]}
            onToggle={(option) => onToggleJobPreference(group, option)}
          />
        ))}

        <MultiSelectInput {...jobPreferenceSelectFields[0]} />

        <SelectChipField
          label={jobPreferenceChipGroups[2].label}
          required={jobPreferenceChipGroups[2].required}
          helper={jobPreferenceChipGroups[2].helper}
          options={jobPreferenceChipGroups[2].options}
          selected={selectedJobPreferences.workMode}
          onToggle={(option) => onToggleJobPreference(jobPreferenceChipGroups[2], option)}
        />

        {jobPreferenceSelectFields.slice(1).map((field) => (
          <MultiSelectInput key={field.label} {...field} />
        ))}

        <SelectChipField
          label={jobPreferenceChipGroups[3].label}
          helper={jobPreferenceChipGroups[3].helper}
          options={jobPreferenceChipGroups[3].options}
          selected={selectedJobPreferences.preferredEmploymentType}
          onToggle={(option) => onToggleJobPreference(jobPreferenceChipGroups[3], option)}
        />
      </EditableDetailsCard>
    </>
  );
}

function EditProfilePage({ initialTab = 'Basic Info', onClose }) {
  const [activeEditTab, setActiveEditTab] = useState(initialTab);
  const [selectedGender, setSelectedGender] = useState('Female');
  const [discardModalOpen, setDiscardModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedLicenses, setSelectedLicenses] = useState(['Car', 'Motorcycle']);
  const [selectedJobPreferences, setSelectedJobPreferences] = useState(() =>
    jobPreferenceChipGroups.reduce((selectedGroups, group) => {
      selectedGroups[group.key] = group.initialSelected;
      return selectedGroups;
    }, {}),
  );

  useEffect(() => {
    setActiveEditTab(initialTab);
  }, [initialTab]);

  function toggleLicense(option) {
    setSelectedLicenses((currentLicenses) => {
      if (option === 'None') {
        return currentLicenses.includes('None') ? [] : ['None'];
      }

      if (currentLicenses.includes(option)) {
        return currentLicenses.filter((license) => license !== option);
      }

      return [...currentLicenses.filter((license) => license !== 'None'), option];
    });
  }

  useEffect(() => {
    if (!toastVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastVisible(false);
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toastVisible]);

  function handleSubmit(event) {
    event.preventDefault();
    setToastVisible(true);
  }

  function toggleJobPreference(group, option) {
    setSelectedJobPreferences((currentPreferences) => {
      const selectedOptions = currentPreferences[group.key] || [];

      if (!group.multiple) {
        return {
          ...currentPreferences,
          [group.key]: [option],
        };
      }

      return {
        ...currentPreferences,
        [group.key]: selectedOptions.includes(option)
          ? selectedOptions.filter((selectedOption) => selectedOption !== option)
          : [...selectedOptions, option],
      };
    });
  }

  return (
    <>
      {toastVisible ? <SaveToast message="Save changes successfully" /> : null}
      <form className="edit-profile-page" aria-label="Edit profile" onSubmit={handleSubmit}>
        <section className="edit-profile-card">
          <header className="edit-profile-card__header">
            <h1>Edit Profile</h1>
          </header>

          <div className="tab-list edit-tab-list" aria-label="Edit profile sections">
            {editProfileTabs.map((tab, index) => {
              const TabIcon = getTabIcon(index);

              return (
                <button
                  className={`tab${activeEditTab === tab ? ' tab--active' : ''}`}
                  key={tab}
                  type="button"
                  onClick={() => setActiveEditTab(tab)}
                >
                  <span aria-hidden="true">
                    <TabIcon size={16} weight="regular" />
                  </span>
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="edit-tab-panel">
            {activeEditTab === 'Basic Info' ? (
              <BasicInfoEditForm
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                selectedLicenses={selectedLicenses}
                toggleLicense={toggleLicense}
              />
            ) : null}
            {activeEditTab === 'Work Experience' ? <WorkExperienceEditForm /> : null}
            {activeEditTab === 'Education' ? <EducationEditForm /> : null}
            {activeEditTab === 'Job Preferences' ? (
              <JobPreferencesEditForm
                selectedJobPreferences={selectedJobPreferences}
                onToggleJobPreference={toggleJobPreference}
              />
            ) : null}
          </div>
        </section>

        <footer className="edit-profile-actions">
          <button className="button button--outline-neutral" type="button" onClick={() => setDiscardModalOpen(true)}>
            Cancel
          </button>
          <button className="button button--primary" type="submit">
            Save
          </button>
        </footer>
      </form>
      {discardModalOpen ? (
        <DiscardChangesModal onClose={() => setDiscardModalOpen(false)} onDiscard={onClose} />
      ) : null}
    </>
  );
}

function AiInterviewBanner({ variant = 'default' }) {
  const isPageVariant = variant === 'page';

  return (
    <section
      className={`ai-banner${isPageVariant ? ' ai-banner--page' : ''}`}
      aria-label="AI interview practice"
    >
      <button className="ai-banner__close" type="button" aria-label="Dismiss AI interview prompt">
        <X size={14} weight="regular" />
      </button>
      <IconBubble tone="white">{Sparkle}</IconBubble>
      <div className="ai-banner__copy">
        <h2>
          <span className="desktop-copy">Boost Your Confidence with AI Interview Practice</span>
          <span className="mobile-copy">
            {isPageVariant ? 'Boost Your Confidence with AI Interview Practice' : 'Try AI Interview'}
          </span>
        </h2>
        <p>
          <span className="desktop-copy">
            Practice with AI-generated interview questions tailored to your role and experience.
          </span>
          <span className="mobile-copy">
            {isPageVariant
              ? 'Practice with AI-generated interview questions tailored to your role and experience.'
              : 'Answer a few questions and let companies get to know you better.'}
          </span>
        </p>
      </div>
      <button className="button button--gradient" type="button">
        Start AI Interview
      </button>
    </section>
  );
}

function AiInterviewPage() {
  return (
    <section className="ai-interview-page" aria-labelledby="ai-interview-title">
      <div className="ai-interview-page__header">
        <h1 id="ai-interview-title">AI Interview (Demo)</h1>
      </div>
      <AiInterviewBanner variant="page" />
    </section>
  );
}

const assessmentCards = [
  {
    title: 'UX/UI Design Assessment',
    meta: '20 questions • 25 min',
    description: 'Measure your product thinking, interface design judgement, and practical UX workflow.',
    status: 'Recommended',
    tone: 'blue',
  },
  {
    title: 'Frontend Fundamentals',
    meta: '18 questions • 20 min',
    description: 'Show employers your strength in responsive layout, accessibility, and web implementation.',
    status: 'Ready',
    tone: 'green',
  },
  {
    title: 'Communication Style',
    meta: '12 questions • 10 min',
    description: 'Highlight how you explain ideas, collaborate with teams, and handle feedback.',
    status: 'Optional',
    tone: 'neutral',
  },
];

function AssessmentsPage() {
  return (
    <section className="assessments-page" aria-labelledby="assessments-title">
      <header className="assessments-page__header">
        <h1 id="assessments-title">Assessments (Demo)</h1>
      </header>

      <section className="assessments-hero" aria-label="Assessments overview">
        <div className="assessments-hero__icon">
          <BookOpenTextIcon size={32} weight="regular" />
        </div>
        <div className="assessments-hero__copy">
          <Chip label="Coming soon" tone="blue" />
          <h2>Stand out with verified skills</h2>
          <p>
            Complete short assessments to help companies understand your strengths before the first interview.
          </p>
        </div>
        <button className="button button--gradient" type="button">
          Start Assessment
        </button>
      </section>

      <section className="assessments-summary-grid" aria-label="Assessment progress">
        <article className="overview-card assessments-summary-card">
          <div className="overview-card__copy">
            <Chip label="0" tone="blue" />
            Completed
          </div>
        </article>
        <article className="overview-card assessments-summary-card">
          <div className="overview-card__copy">
            <Chip label="3" tone="green" />
            Available
          </div>
        </article>
        <article className="overview-card assessments-summary-card">
          <div className="overview-card__copy">
            <Chip label="+15%" tone="purple" />
            Profile boost
          </div>
        </article>
      </section>

      <section className="assessments-list" aria-label="Available assessments">
        {assessmentCards.map((assessment) => (
          <article className="assessment-card" key={assessment.title}>
            <div className="assessment-card__icon" aria-hidden="true">
              <BookOpenTextIcon size={24} weight="regular" />
            </div>
            <div className="assessment-card__body">
              <div className="assessment-card__header">
                <div className="assessment-card__heading">
                  <div className="assessment-card__title-row">
                    <h2>{assessment.title}</h2>
                    <Chip label={assessment.status} tone={assessment.tone} />
                  </div>
                  <span>{assessment.meta}</span>
                </div>
              </div>
              <p>{assessment.description}</p>
            </div>
            <button className="button button--outline-neutral" type="button">
              View details
            </button>
          </article>
        ))}
      </section>
    </section>
  );
}

const profileViewers = [
  {
    company: 'Siam Digital Studio',
    role: 'Product Design Team',
    time: 'Viewed 2 hours ago',
    status: 'New',
    tone: 'blue',
  },
  {
    company: 'Bluewave Technology',
    role: 'Frontend Hiring Manager',
    time: 'Viewed yesterday',
    status: 'Interested',
    tone: 'green',
  },
  {
    company: 'Northstar Creative',
    role: 'Talent Acquisition',
    time: 'Viewed 3 days ago',
    status: 'Recruiter',
    tone: 'purple',
  },
];

function ProfileViewsPage() {
  return (
    <section className="profile-views-page" aria-labelledby="profile-views-title">
      <header className="profile-views-page__header">
        <h1 id="profile-views-title">Profile Views (Demo)</h1>
      </header>

      <section className="profile-views-hero" aria-label="Profile views overview">
        <div className="profile-views-hero__icon">
          <FileText size={32} weight="regular" />
        </div>
        <div className="profile-views-hero__copy">
          <Chip label="Updated today" tone="green" />
          <h2>See who viewed your profile</h2>
          <p>
            Track profile activity and understand which companies are paying attention to your experience.
          </p>
        </div>
        <button className="button button--gradient" type="button">
          Improve Profile
        </button>
      </section>

      <section className="profile-views-summary-grid" aria-label="Profile views summary">
        <article className="overview-card profile-views-summary-card">
          <div className="overview-card__copy">
            <Chip label="128" tone="blue" />
            Total views
          </div>
        </article>
        <article className="overview-card profile-views-summary-card">
          <div className="overview-card__copy">
            <Chip label="24" tone="green" />
            This week
          </div>
        </article>
        <article className="overview-card profile-views-summary-card">
          <div className="overview-card__copy">
            <Chip label="6" tone="purple" />
            Companies
          </div>
        </article>
      </section>

      <section className="profile-viewers-card" aria-labelledby="recent-profile-views-title">
        <div className="profile-viewers-card__header">
          <div>
            <h2 id="recent-profile-views-title">Recent Profile Views</h2>
            <p>Companies and recruiters who recently opened your profile.</p>
          </div>
          <Chip label="Last 7 days" tone="neutral" />
        </div>

        <div className="profile-viewers-list">
          {profileViewers.map((viewer) => (
            <article className="profile-viewer-row" key={viewer.company}>
              <div className="profile-viewer-row__icon" aria-hidden="true">
                <Briefcase size={24} weight="regular" />
              </div>
              <div className="profile-viewer-row__body">
                <div className="profile-viewer-row__title">
                  <h3>{viewer.company}</h3>
                  <Chip label={viewer.status} tone={viewer.tone} />
                </div>
                <p>{viewer.role}</p>
                <span>{viewer.time}</span>
              </div>
              <button className="button button--outline-neutral" type="button">
                View company
              </button>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function ProfileDetails({ onEditProfile }) {
  const [activeTab, setActiveTab] = useState('Basic Info');
  const activeSection = sectionCopyByTab[activeTab];

  return (
    <section className="profile-panel" id="profile">
      <div className="profile-panel__header">
        <h2>Profile</h2>
        <button className="button button--primary" type="button" onClick={() => onEditProfile?.('Basic Info')}>
          <span className="button__icon">
            <PencilSimple size={16} weight="regular" />
          </span>
          <span className="button__desktop-label">Edit Profile</span>
          <span className="button__mobile-label">Edit</span>
        </button>
      </div>
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
        <button type="button" aria-label={activeSection.editLabel} onClick={() => onEditProfile?.(activeTab)}>
          <PencilSimple className="section-heading__icon" size={24} weight="regular" />
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
        <button className="resume-chip-button" type="button">
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
                    <Chip label={experience.duration} tone="blue" className="duration-chip" />
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
            <span className="mini-tag skill-chip" key={tag}>
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
                    {education.duration ? (
                      <Chip label={education.duration} tone="blue" className="duration-chip" />
                    ) : null}
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
                <span className="mini-tag user-fill-data-chip other-language-chip" key={item.language}>
                  {item.language} / {item.level}
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

function ProfilePage({ onEditProfile }) {
  return (
    <section className="profile-page" aria-label="Profile preview">
      <StrengthPanel />
      <ProfileDetails onEditProfile={onEditProfile} />
    </section>
  );
}

function SettingIcon({ icon: Icon }) {
  return (
    <span className="account-setting-icon" aria-hidden="true">
      <Icon size={16} weight="regular" />
    </span>
  );
}

function AccountSettingPage() {
  const [deleteAccountVisible, setDeleteAccountVisible] = useState(true);
  const [deleteRequest, setDeleteRequest] = useState(null);
  const [deleteToastVisible, setDeleteToastVisible] = useState(false);

  function confirmDelete() {
    deleteRequest?.onConfirm();
    setDeleteRequest(null);
    setDeleteToastVisible(true);
  }

  useEffect(() => {
    if (!deleteToastVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setDeleteToastVisible(false);
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [deleteToastVisible]);

  return (
    <section className="account-setting-page" aria-labelledby="account-setting-title">
      {deleteToastVisible ? <SaveToast message="Item deleted successfully." tone="error" /> : null}
      <header className="account-setting-page__header">
        <h1 id="account-setting-title">Account Setting</h1>
        <p>Manage your account preference.</p>
      </header>

      <section className="settings-card account-card" aria-labelledby="account-card-title">
        <h2 id="account-card-title">Account</h2>
        <div className="settings-list">
          <div className="settings-row settings-row--account">
            <SettingIcon icon={EnvelopeSimple} />
            <div className="settings-row__body">
              <div className="settings-row__main">
                <div>
                  <h3>Email</h3>
                  <p className="settings-row__value">marie@email.com</p>
                </div>
                <Chip label="Verified" tone="green" icon={Check} className="settings-verified-chip" />
              </div>
              <p className="settings-row__helper">This email is linked to your account and cannot be changed.</p>
            </div>
          </div>

          {deleteAccountVisible ? (
            <>
              <div className="settings-divider" />

              <div className="settings-row settings-row--account">
                <SettingIcon icon={Trash} />
                <div className="settings-row__body">
                  <h3>Delete Your Account</h3>
                  <button
                    className="button settings-delete-button"
                    type="button"
                    onClick={() =>
                      setDeleteRequest({
                        itemLabel: 'Delete Your Account',
                        onConfirm: () => setDeleteAccountVisible(false),
                      })
                    }
                  >
                    Delete Account
                  </button>
                  <p className="settings-row__helper">
                    Deleting your account will permanently remove your access and personal information.
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="settings-card contact-card" aria-labelledby="contact-card-title">
        <h2 id="contact-card-title">Contact Us</h2>
        <div className="contact-list">
          <p>
            <SettingIcon icon={MapPin} />
            <span>123 Sukhumvit Road, Bangkok, Thailand</span>
          </p>
          <p>
            <SettingIcon icon={EnvelopeSimple} />
            <span>email@email.com</span>
          </p>
        </div>
        <div className="social-links" aria-label="Social channels">
          <a className="social-link social-link--facebook" href="#facebook" aria-label="Facebook">
            f
          </a>
          <a className="social-link social-link--line" href="#line" aria-label="LINE">
            LINE
          </a>
        </div>
      </section>
      {deleteRequest ? (
        <DeleteConfirmationModal
          itemLabel={deleteRequest.itemLabel}
          onBack={() => setDeleteRequest(null)}
          onDelete={confirmDelete}
        />
      ) : null}
    </section>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(() => getCurrentAppPage());
  const [editProfileTab, setEditProfileTab] = useState(() => getEditProfileTabFromLocation());
  const profileActive = activePage === 'profile' || activePage === 'edit-profile';
  const aiInterviewActive = activePage === 'ai-interview';
  const assessmentsActive = activePage === 'assessments';
  const profileViewsActive = activePage === 'profile-views';
  const accountSettingActive = activePage === 'account-setting';

  function navigateToDashboard() {
    setActivePage('dashboard');
    window.history.pushState(null, '', dashboardPath);
  }

  function navigateToProfile() {
    setActivePage('profile');
    window.history.pushState(null, '', profilePath);
  }

  function navigateToAiInterview() {
    setActivePage('ai-interview');
    window.history.pushState(null, '', aiInterviewPath);
  }

  function navigateToAssessments() {
    setActivePage('assessments');
    window.history.pushState(null, '', assessmentsPath);
  }

  function navigateToProfileViews() {
    setActivePage('profile-views');
    window.history.pushState(null, '', profileViewsPath);
  }

  function navigateToAccountSetting() {
    setActivePage('account-setting');
    window.history.pushState(null, '', accountSettingPath);
  }

  function navigateToEditProfile(tab = 'Basic Info') {
    const targetTab = editProfileTabSlugs[tab] ? tab : 'Basic Info';
    setEditProfileTab(targetTab);
    setActivePage('edit-profile');
    window.history.pushState(null, '', getEditProfilePath(targetTab));
  }

  function handleDashboardClick(event) {
    event?.preventDefault();
    navigateToDashboard();
  }

  function handleProfileClick(event) {
    event?.preventDefault();
    navigateToProfile();
  }

  function handleAiInterviewClick(event) {
    event?.preventDefault();
    navigateToAiInterview();
  }

  function handleAssessmentsClick(event) {
    event?.preventDefault();
    navigateToAssessments();
  }

  function handleProfileViewsClick(event) {
    event?.preventDefault();
    navigateToProfileViews();
  }

  function handleAccountSettingClick(event) {
    event?.preventDefault();
    navigateToAccountSetting();
  }

  useEffect(() => {
    function handlePopState() {
      setActivePage(getCurrentAppPage());
      setEditProfileTab(getEditProfileTabFromLocation());
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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
      <SideMenu
        profileActive={profileActive}
        aiInterviewActive={aiInterviewActive}
        assessmentsActive={assessmentsActive}
        profileViewsActive={profileViewsActive}
        accountSettingActive={accountSettingActive}
        onDashboardClick={handleDashboardClick}
        onProfileClick={handleProfileClick}
        onAiInterviewClick={handleAiInterviewClick}
        onAssessmentsClick={handleAssessmentsClick}
        onProfileViewsClick={handleProfileViewsClick}
        onAccountSettingClick={handleAccountSettingClick}
      />
      <SideMenuMb
        open={mobileMenuOpen}
        profileActive={profileActive}
        aiInterviewActive={aiInterviewActive}
        assessmentsActive={assessmentsActive}
        profileViewsActive={profileViewsActive}
        accountSettingActive={accountSettingActive}
        onClose={() => setMobileMenuOpen(false)}
        onDashboardClick={handleDashboardClick}
        onProfileClick={handleProfileClick}
        onAiInterviewClick={handleAiInterviewClick}
        onAssessmentsClick={handleAssessmentsClick}
        onProfileViewsClick={handleProfileViewsClick}
        onAccountSettingClick={handleAccountSettingClick}
      />

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
              <img
                src={`${import.meta.env.BASE_URL}images/logo-profi.png`}
                alt="ProFi Logo"
                className="logo-profi__image"
              />
            </span>
          </div>
          <img className="avatar avatar--small" src={avatarUrl} alt="Marie Brown account" />
        </nav>

        {activePage === 'edit-profile' ? (
          <EditProfilePage initialTab={editProfileTab} onClose={navigateToProfile} />
        ) : activePage === 'profile' ? (
          <ProfilePage onEditProfile={navigateToEditProfile} />
        ) : activePage === 'ai-interview' ? (
          <AiInterviewPage />
        ) : activePage === 'assessments' ? (
          <AssessmentsPage />
        ) : activePage === 'profile-views' ? (
          <ProfileViewsPage />
        ) : activePage === 'account-setting' ? (
          <AccountSettingPage />
        ) : (
          <>
            <ProfileHero onEditProfile={navigateToEditProfile} />

            <section className="overview-grid" aria-label="Profile status">
              {overviewCards.map((card) => (
                <OverviewCard key={card.label} {...card} />
              ))}
            </section>

            <AiInterviewBanner />

            <div className="profile-layout">
              <ProfileDetails onEditProfile={navigateToEditProfile} />
              <StrengthPanel />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
