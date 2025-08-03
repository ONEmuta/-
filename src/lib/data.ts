import {
  Lightbulb,
  BookOpen,
  CalendarDays,
  Megaphone,
  Factory,
  Users,
  MapPin,
  History,
  Mail,
  Phone,
  Bus,
  Subway,
  Car,
  FileText,
  Handshake,
  Briefcase,
  GraduationCap,
  Award,
  MessageSquare,
  Book,
  Search,
  Paperclip,
  Image,
  PlayCircle,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Calendar,
  HardHat,
  Palette,
  Shirt,
  Scissors,
  Ruler,
  Hammer,
  Monitor,
  Printer,
  Camera,
  Mic,
  Speaker,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

// --- Mock Data ---

// Main Visual Carousel Data
export const carouselSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    headline: 'Empowering Fashion & Manufacturing Entrepreneurs',
    description: 'Your hub for growth, innovation, and community.',
    buttonText: 'Explore Programs',
    link: '/support-programs',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    headline: 'Unlock Your Potential with Expert Guidance',
    description: 'Tailored education and events for every stage of your business.',
    buttonText: 'Join an Event',
    link: '/education-events',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    headline: 'State-of-the-Art Facilities at Your Fingertips',
    description: 'Access advanced equipment and creative spaces.',
    buttonText: 'Reserve a Facility',
    link: '/facility-reservation',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    headline: 'Connect, Collaborate, Create',
    description: 'Join a vibrant community of innovators and industry leaders.',
    buttonText: 'Visit Community',
    link: '/community',
  },
];

// Quick Links Data
export const quickLinks = [
  {
    icon: Lightbulb,
    label: 'Support Programs',
    href: '/support-programs',
    description: 'Find funding, consulting, and mentorship.',
  },
  {
    icon: BookOpen,
    label: 'Education & Events',
    href: '/education-events',
    description: 'Workshops, seminars, and industry events.',
  },
  {
    icon: Factory,
    label: 'Facility Reservation',
    href: '/facility-reservation',
    description: 'Book equipment and creative spaces.',
  },
  {
    icon: Megaphone,
    label: 'Announcements',
    href: '/community?tab=announcements',
    description: 'Stay updated on the latest news.',
  },
  {
    icon: Users,
    label: 'About Us',
    href: '/about-us',
    description: 'Learn about our mission and team.',
  },
  {
    icon: Mail,
    label: 'Contact Us',
    href: '/about-us#contact',
    description: 'Get in touch with our team.',
  },
];

// Latest News Data
export const announcements = [
  { id: 1, title: 'New Mentorship Program Launched!', date: '2024-09-15', content: 'Details about the new mentorship program...' },
  { id: 2, title: 'Annual Fashion Tech Summit Announced', date: '2024-09-10', content: 'Information on the upcoming summit...' },
  { id: 3, title: 'Facility Maintenance Schedule Update', date: '2024-09-01', content: 'Important notice regarding facility access...' },
  { id: 4, title: 'Call for Applications: Startup Accelerator', date: '2024-08-28', content: 'Apply now for our next accelerator cohort...' },
  { id: 5, title: 'Holiday Operating Hours', date: '2024-08-20', content: 'Our revised hours for the upcoming holidays...' },
];

export const newPrograms = [
  { id: 1, title: 'Advanced Prototyping Workshop', date: '2024-09-20', content: 'Learn cutting-edge prototyping techniques.' },
  { id: 2, title: 'Sustainable Fashion Business Model', date: '2024-09-18', content: 'Develop eco-friendly business strategies.' },
  { id: 3, title: 'Digital Marketing for Small Businesses', date: '2024-09-12', content: 'Boost your online presence.' },
  { id: 4, title: 'Supply Chain Optimization Seminar', date: '2024-09-05', content: 'Streamline your production process.' },
  { id: 5, title: 'Legal Aspects of Fashion Business', date: '2024-08-30', content: 'Understand intellectual property and contracts.' },
];

// Ongoing Education/Events Data
export const ongoingEvents = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Fashion Design Masterclass',
    period: 'Sept 20 - Oct 20, 2024',
    link: '/education-events/1',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Textile Innovation Summit',
    period: 'Oct 5 - Oct 7, 2024',
    link: '/education-events/2',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Business Strategy for Creatives',
    period: 'Nov 1 - Nov 30, 2024',
    link: '/education-events/3',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: '3D Printing for Product Development',
    period: 'Dec 10 - Dec 15, 2024',
    link: '/education-events/4',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'E-commerce Essentials for Brands',
    period: 'Jan 15 - Feb 15, 2025',
    link: '/education-events/5',
  },
];

// Photo Gallery Data
export const galleryPhotos = [
  { id: 1, src: 'https://images.pexels.com/photos/3861966/pexels-photo-3861966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Workshop in progress' },
  { id: 2, src: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Fashion show backstage' },
  { id: 3, src: 'https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Product design session' },
  { id: 4, src: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Textile printing' },
  { id: 5, src: 'https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Mentorship meeting' },
  { id: 6, src: 'https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Networking event' },
  { id: 7, src: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Sewing workshop' },
  { id: 8, src: 'https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'CAD design' },
  { id: 9, src: 'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Fabric selection' },
  { id: 10, src: 'https://images.pexels.com/photos/3861977/pexels-photo-3861977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Finished product display' },
];

// Partners/Sponsors Logo Ticker Data
export const partnerLogos = [
  { id: 1, src: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 1' },
  { id: 2, src: 'https://images.pexels.com/photos/1036809/pexels-photo-1036809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 2' },
  { id: 3, src: 'https://images.pexels.com/photos/1036810/pexels-photo-1036810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 3' },
  { id: 4, src: 'https://images.pexels.com/photos/1036811/pexels-photo-1036811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 4' },
  { id: 5, src: 'https://images.pexels.com/photos/1036812/pexels-photo-1036812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 5' },
  { id: 6, src: 'https://images.pexels.com/photos/1036813/pexels-photo-1036813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 6' },
  { id: 7, src: 'https://images.pexels.com/photos/1036814/pexels-photo-1036814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 7' },
  { id: 8, src: 'https://images.pexels.com/photos/1036815/pexels-photo-1036815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Partner Logo 8' },
];

// About Us Data
export const aboutUsContent = {
  mission: {
    title: 'Our Mission & Vision',
    text: 'At the heart of the fashion and manufacturing industry, our center is dedicated to fostering innovation, growth, and sustainability for small businesses and aspiring entrepreneurs. We envision a vibrant ecosystem where creativity meets commerce, and every idea finds the support it needs to flourish.',
    image: 'https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  history: [
    { year: 2010, event: 'Center Established', description: 'Founded as a local initiative to support emerging designers.' },
    { year: 2015, event: 'Expanded to Manufacturing', description: 'Incorporated manufacturing support, including prototyping facilities.' },
    { year: 2018, event: 'Launched Digital Education', description: 'Introduced online courses and webinars for wider reach.' },
    { year: 2022, event: 'Community Platform Integration', description: 'Launched an interactive online platform for members.' },
    { year: 2024, event: 'Future Forward Initiative', description: 'Focus on sustainable practices and AI integration in fashion tech.' },
  ],
  team: [
    { name: 'Jane Doe', title: 'Director', image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'John Smith', title: 'Head of Programs', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Emily White', title: 'Community Manager', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'David Green', title: 'Technical Lead', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ],
  contact: {
    address: '123 Fashion Tech Ave, Innovate City, 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@fashionhub.org',
    transportation: {
      public: 'Nearest Subway: Innovate Station (Line A, B). Bus Routes: 101, 202.',
      parking: 'Limited on-site parking available. Public parking garage 2 blocks away.',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7765000000003!2d127.0276213153099!3d37.5665358797989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f2f2f2f2f2%3A0x357ca2f2f2f2f2f2!2sSeoul%20Fashion%20Center!5e0!3m2!1sen!2skr!4v1678901234567!5m2!1sen!2skr', // Example Google Maps embed URL
  },
  // New organizational details (This will be replaced by footerInfo for footer, but kept here for AboutUs page content)
  organizationDetails: {
    registrationName: '(사)동대문의류봉제협회',
    companyName: '이이비셀 주식회사',
    representative: '윤성로',
  },
};

// Support Programs Data
export const supportPrograms = [
  {
    id: 1,
    title: 'Startup Incubation Program',
    category: 'Prototyping',
    status: 'Open for Application',
    applicationPeriod: 'Sept 1 - Sept 30, 2024',
    thumbnail: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'A comprehensive incubation program for early-stage fashion and manufacturing startups, providing mentorship, resources, and networking opportunities.',
    eligibility: ['Early-stage startup (less than 2 years old)', 'Innovative business model', 'Commitment to growth'],
    howToApply: 'Submit online application form, business plan, and pitch deck.',
    requiredDocuments: ['Business Registration', 'Team CVs', 'Financial Projections'],
    applyLink: '#',
  },
  {
    id: 2,
    title: 'Expert Consulting Sessions',
    category: 'Consulting',
    status: 'Open for Application',
    applicationPeriod: 'Ongoing',
    thumbnail: 'https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'One-on-one consulting sessions with industry experts in areas like marketing, finance, legal, and production.',
    eligibility: ['Registered small business', 'Specific business challenge'],
    howToApply: 'Book a session through the online portal.',
    requiredDocuments: ['Business overview', 'Specific questions/challenges'],
    applyLink: '#',
  },
  {
    id: 3,
    title: 'Prototyping Grant Fund',
    category: 'Funding',
    status: 'Closed',
    applicationPeriod: 'July 1 - Aug 15, 2024',
    thumbnail: 'https://images.pexels.com/photos/3861956/pexels-photo-3861956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'Financial support for developing prototypes and samples for innovative products.',
    eligibility: ['Fashion or manufacturing business', 'Clear prototype development plan'],
    howToApply: 'Submit grant proposal and budget.',
    requiredDocuments: ['Project proposal', 'Detailed budget', 'Portfolio'],
    applyLink: '#',
  },
  {
    id: 4,
    title: 'Market Entry Support',
    category: 'Marketing',
    status: 'Open for Application',
    applicationPeriod: 'Oct 1 - Oct 31, 2024',
    thumbnail: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'Assistance with market research, branding, and distribution strategies for new markets.',
    eligibility: ['Established business looking to expand', 'Clear market entry strategy'],
    howToApply: 'Submit market entry plan.',
    requiredDocuments: ['Business plan', 'Market analysis'],
    applyLink: '#',
  },
  {
    id: 5,
    title: 'Sustainability Certification Program',
    category: 'Sustainability',
    status: 'Open for Application',
    applicationPeriod: 'Nov 1 - Nov 30, 2024',
    thumbnail: 'https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'Guidance and support to achieve sustainability certifications for your business operations and products.',
    eligibility: ['Commitment to sustainable practices', 'Willingness to undergo audit'],
    howToApply: 'Register interest and attend introductory workshop.',
    requiredDocuments: ['Environmental policy', 'Supply chain details'],
    applyLink: '#',
  },
];

// Education & Events Data
export const allEducationEvents = [
  {
    id: 1,
    title: 'Fashion Design Masterclass',
    instructor: 'Sarah Lee',
    dates: 'Sept 20 - Oct 20, 2024',
    capacity: 20,
    registered: 18,
    status: 'Open',
    type: 'Course',
    thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Module 1: Fundamentals of Design', 'Module 2: Advanced Pattern Making', 'Module 3: Digital Fashion Illustration'],
    materials: ['Sketchbook', 'Fabric samples', 'Adobe Creative Suite'],
    instructorBio: 'Sarah Lee is an award-winning fashion designer with over 15 years of experience in haute couture.',
    registerLink: '#',
  },
  {
    id: 2,
    title: 'Textile Innovation Summit',
    instructor: 'Various Speakers',
    dates: 'Oct 5 - Oct 7, 2024',
    capacity: 150,
    registered: 150,
    status: 'Closed',
    type: 'Event',
    thumbnail: 'https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Day 1: Sustainable Textiles', 'Day 2: Smart Fabrics', 'Day 3: Future of Manufacturing'],
    materials: ['Conference badge', 'Notebook'],
    instructorBio: 'Leading experts from textile science and industry.',
    registerLink: '#',
  },
  {
    id: 3,
    title: 'Business Strategy for Creatives',
    instructor: 'Mark Johnson',
    dates: 'Nov 1 - Nov 30, 2024',
    capacity: 30,
    registered: 25,
    status: 'Open',
    type: 'Course',
    thumbnail: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Module 1: Business Planning', 'Module 2: Financial Management', 'Module 3: Brand Building'],
    materials: ['Laptop', 'Business plan template'],
    instructorBio: 'Mark Johnson is a business consultant specializing in creative industries.',
    registerLink: '#',
  },
  {
    id: 4,
    title: '3D Printing for Product Development',
    instructor: 'Dr. Alex Kim',
    dates: 'Dec 10 - Dec 15, 2024',
    capacity: 15,
    registered: 15,
    status: 'Waiting List',
    type: 'Workshop',
    thumbnail: 'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Day 1: Introduction to 3D Printing', 'Day 2: Software & Design', 'Day 3: Hands-on Prototyping'],
    materials: ['3D printer access (provided)', 'Design software'],
    instructorBio: 'Dr. Alex Kim is a leading researcher in additive manufacturing.',
    registerLink: '#',
  },
  {
    id: 5,
    title: 'E-commerce Essentials for Brands',
    instructor: 'Jessica Chen',
    dates: 'Jan 15 - Feb 15, 2025',
    capacity: 40,
    registered: 30,
    status: 'Open',
    type: 'Course',
    thumbnail: 'https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Module 1: Platform Selection', 'Module 2: SEO & Marketing', 'Module 3: Logistics & Fulfillment'],
    materials: ['Laptop', 'E-commerce platform access'],
    instructorBio: 'Jessica Chen is an e-commerce strategist with a focus on fashion brands.',
    registerLink: '#',
  },
  {
    id: 6,
    title: 'Sustainable Sourcing Workshop',
    instructor: 'Dr. Lena Gupta',
    dates: 'Feb 20, 2025',
    capacity: 25,
    registered: 10,
    status: 'Open',
    type: 'Workshop',
    thumbnail: 'https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Ethical Supply Chains', 'Eco-friendly Materials', 'Certification Processes'],
    materials: ['Case studies', 'Supplier lists'],
    instructorBio: 'Dr. Lena Gupta is an expert in sustainable supply chain management.',
    registerLink: '#',
  },
  {
    id: 7,
    title: 'Intellectual Property for Designers',
    instructor: 'Attorney Lee',
    dates: 'Mar 5, 2025',
    capacity: 50,
    registered: 45,
    status: 'Open',
    type: 'Seminar',
    thumbnail: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    curriculum: ['Copyrights', 'Trademarks', 'Patents in Fashion'],
    materials: ['Legal templates', 'Q&A session'],
    instructorBio: 'Attorney Lee specializes in intellectual property law for creative industries.',
    registerLink: '#',
  },
];

// Community Data
export const communityPosts = {
  announcements: [
    { id: 1, title: 'Center Holiday Hours Update', author: 'Admin', date: '2024-09-25', views: 120, content: 'Details about holiday hours.' },
    { id: 2, title: 'New Partnership with Tech Innovators', author: 'Admin', date: '2024-09-20', views: 150, content: 'Exciting news about our new partners.' },
    { id: 3, title: 'Upcoming Maintenance Schedule', author: 'Admin', date: '2024-09-18', views: 90, content: 'Important facility maintenance info.' },
    { id: 4, title: 'Call for Volunteers: Annual Gala', author: 'Admin', date: '2024-09-10', views: 80, content: 'Join us for our annual fundraising gala.' },
    { id: 5, title: 'New Program: AI in Fashion Design', author: 'Admin', date: '2024-09-05', views: 200, content: 'Introducing our latest program.' },
  ],
  pressReleases: [
    { id: 1, title: 'Center Receives National Innovation Award', author: 'PR Team', date: '2024-09-22', views: 180, content: 'Our center recognized for its contributions.' },
    { id: 2, title: 'Local Designers Showcase at International Fair', author: 'PR Team', date: '2024-09-15', views: 110, content: 'Success stories from our members.' },
    { id: 3, title: 'Partnership with Global Fashion Council', author: 'PR Team', date: '2024-09-08', views: 130, content: 'Expanding our global network.' },
  ],
  faq: [
    { id: 1, title: 'How do I apply for a support program?', author: 'FAQ Admin', date: '2024-08-01', views: 50, content: 'Step-by-step guide to program applications.' },
    { id: 2, title: 'What are the facility operating hours?', author: 'FAQ Admin', date: '2024-08-01', views: 70, content: 'General operating hours and special schedules.' },
    { id: 3, title: 'Can I get mentorship for my startup?', author: 'FAQ Admin', date: '2024-08-01', views: 60, content: 'Information on our mentorship initiatives.' },
  ],
  resources: [
    { id: 1, title: 'Business Plan Template', author: 'Resource Team', date: '2024-07-10', views: 250, attachments: ['business_plan_template.pdf'], content: 'Downloadable template for your business plan.' },
    { id: 2, title: 'Marketing Strategy Guide', author: 'Resource Team', date: '2024-07-05', views: 180, attachments: ['marketing_guide.pdf'], content: 'A comprehensive guide to marketing your fashion brand.' },
    { id: 3, title: 'Legal Checklist for Startups', author: 'Resource Team', date: '2024-06-20', views: 100, attachments: ['legal_checklist.docx'], content: 'Essential legal considerations for new businesses.' },
  ],
};

// Facility & Equipment Reservation Data
export const facilities = [
  {
    id: 1,
    name: 'Prototyping Lab',
    description: 'Equipped with 3D printers, laser cutters, and advanced sewing machines.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    equipment: [
      { id: 101, name: 'Industrial Sewing Machine', icon: Scissors },
      { id: 102, name: '3D Printer (FDM)', icon: HardHat },
      { id: 103, name: 'Laser Cutter', icon: Ruler },
      { id: 104, name: 'Embroidery Machine', icon: Palette },
    ],
  },
  {
    id: 2,
    name: 'Photo Studio',
    description: 'Professional studio with lighting, backdrops, and camera equipment for product photography.',
    image: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    equipment: [
      { id: 201, name: 'DSLR Camera Kit', icon: Camera },
      { id: 202, name: 'Studio Lighting Set', icon: Lightbulb },
      { id: 203, name: 'Mannequins', icon: Shirt },
    ],
  },
  {
    id: 3,
    name: 'Co-working Space',
    description: 'Flexible desks and meeting rooms for collaborative work and brainstorming.',
    image: 'https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    equipment: [
      { id: 301, name: 'Projector', icon: Monitor },
      { id: 302, name: 'Whiteboard', icon: FileText },
      { id: 303, name: 'Conference Phone', icon: Phone },
    ],
  },
  {
    id: 4,
    name: 'Audio Production Booth',
    description: 'Sound-proof booth for podcasting, voice-overs, and music production.',
    image: 'https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    equipment: [
      { id: 401, name: 'Condenser Microphone', icon: Mic },
      { id: 402, name: 'Audio Interface', icon: Speaker },
      { id: 403, name: 'Studio Monitors', icon: Monitor },
    ],
  },
];

// Social Media Links
export const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

// 1. 새로운 내비게이션 링크 배열 (신규 추가)
export const navLinks = [
  { name: '협회소개', href: '/about' },
  { name: '장비소개', href: '/equipment' },
  { name: '공간소개', href: '/space' },
  { name: '프로그램', href: '/programs' },
  { name: '연관사업', href: '/related-business' },
  { name: '정보마당', href: '/information' },
  { name: '커뮤니티', href: '/community' },
  { name: '기타내용', href: '/etc' },
];

// 2. 푸터 정보 객체 (신규 추가)
export const footerInfo = {
  registrationName: '(사)동대문의류봉제협회',
  companyName: '이이비셀 주식회사',
  representative: '윤성로',
  address: '서울특별시 성북구 종암로 145, 3층', // sbsa.kr 정보 참조
  cuttingRoomPhone: '02-6227-4933',
  patternRoomPhone: '02-6227-4934',
  officePhone: '02-6227-4930',
  email: 'sungbuk23@naver.com',
  copyright: '© 2024 Dongdaemun Apparel & Sewing Association. All Rights Reserved.',
};

// 3. 기존 externalLinks (유지) - Updated as per user's prompt
export const externalLinks = {
  programs: {
    label: '전체 프로그램 보기',
    href: 'https://example.com/programs',
  },
  equipmentIntro: {
    label: '장비 상세 정보',
    href: '/equipment', // Changed to internal route
  },
  spaceIntro: {
    label: '공간 상세 정보',
    href: '/space', // Changed to internal route
  },
  relatedBusiness: {
    label: '연관사업 더보기',
    href: 'https://example.com/related-business',
  },
  otherContent: {
    label: '기타 자료실',
    href: 'https://example.com/other-content',
  },
};

// 장비 및 공간 데이터 타입 정의
export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specifications: string[]; // Changed to string[]
}

export interface Space {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  capacity: string;
  features: string[]; // Changed to string[]
}

// 보유 장비 데이터 [2, 3, 4, 6]
export const equipmentData: Equipment[] = [ // Corrected syntax
  {
    id: "E01",
    name: "CLOTHES CAD (YUKA) 시스템",
    category: "디지털 디자인",
    description: "의류 패턴 설계, 그레이딩, 마킹을 위한 전문 CAD 소프트웨어입니다. 디자인의 정확성과 생산 효율성을 극대화합니다.",
    imageUrl: "https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["패턴 디자인 및 수정", "자동 그레이딩", "요척 계산", "3D 가상 피팅 지원"],
  },
  {
    id: "E02",
    name: "자동 연단기 및 재단기 (CAM)",
    category: "자동 재단",
    description: "CAD로 생성된 마커 데이터를 기반으로 원단을 자동으로 연단하고 정밀하게 재단합니다. 대량 생산 시 균일한 품질을 보장하고 원단 소모를 최소화합니다.",
    imageUrl: "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["다양한 원단 대응 가능", "진공 흡착 방식", "높은 재단 정확도", "작업 시간 대폭 단축"],
  },
  {
    id: "E03",
    name: "고속 본봉사절미싱",
    category: "특종 봉제",
    description: "일반적인 봉제 작업에 사용되는 가장 기본적인 고속 재봉기입니다. 자동 사절 기능이 포함되어 생산성을 향상시킵니다.",
    imageUrl: "https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["자동 실 끊기 기능", "땀수 조절 기능", "안정적인 고속 운전", "다양한 원단 봉제"],
  },
  {
    id: "E04",
    name: "인터록/오버록 미싱",
    category: "특종 봉제",
    description: "원단의 가장자리를 깔끔하게 처리하거나 신축성 있는 원단을 봉제할 때 사용됩니다. 의류의 완성도를 높이는 필수 장비입니다.",
    imageUrl: "https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["3/4/5사 인터록", "원단 늘어짐 방지", "깔끔한 마감 처리", "니트, 다이마루 원단 특화"],
  },
  {
    id: "E05",
    name: "삼봉 미싱 (커버스티치)",
    category: "특종 봉제",
    description: "주로 티셔츠나 트레이닝복의 밑단, 소매단 처리에 사용되는 장비로, 신축성이 좋고 튼튼한 봉제선을 만듭니다.",
    imageUrl: "https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["두 줄 또는 세 줄 스티치", "신축성 있는 봉제", "장식 스티치 활용 가능", "의류 밑단 마감 전문"],
  },
  {
    id: "E06",
    name: "디지털 나염 프린터 (DTP)",
    category: "후가공",
    description: "컴퓨터 디자인을 원단에 직접 인쇄하는 디지털 텍스타일 프린터입니다. 다채로운 색상 표현이 가능하며, 소량 다품종 생산에 적합합니다.",
    imageUrl: "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: ["풀컬러 디자인 구현", "별도 제판 과정 불필요", "친환경 잉크 사용", "샘플 및 맞춤 제작 용이"],
  },
];

// 보유 공간 데이터 [2, 4, 5, 7]
export const spaceData: Space[] = [ // Corrected syntax
  {
    id: "S01",
    name: "스마트 교육장",
    category: "교육 및 회의",
    description: "최신 장비를 갖춘 교육장으로, 디지털 패션 교육 및 세미나에 최적화되어 있습니다. 실습 위주의 교육이 가능합니다.",
    imageUrl: "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "최대 20인",
    features: ["빔 프로젝터 및 스크린", "고성능 PC", "화이트보드", "무선 마이크"],
  },
  {
    id: "S02",
    name: "창업 인큐베이팅실",
    category: "창업 지원",
    description: "예비 창업가 및 초기 스타트업을 위한 독립된 사무 공간입니다. 사업에 집중할 수 있는 쾌적한 환경을 제공합니다.",
    imageUrl: "https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "1-4인 기업",
    features: ["개별 사무용 책상 및 의자", "초고속 인터넷", "공용 복합기 이용 가능", "24시간 이용 협의"],
  },
  {
    id: "S03",
    name: "공동 작업 공간 (Co-working Space)",
    category: "제작 및 협업",
    description: "다양한 봉제 장비와 넓은 작업 테이블이 구비된 개방형 공간입니다. 샘플 제작, 패턴 작업 등 자유로운 창작 활동을 지원합니다.",
    imageUrl: "https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "최대 15인",
    features: ["각종 특종 미싱 구비", "대형 재단 테이블", "스팀다리미 및 아이롱", "자유로운 좌석 이용"],
  },
  {
    id: "S04",
    name: "전시 및 판매 쇼룸",
    category: "판로 지원",
    description: "완성된 제품을 전시하고 바이어에게 선보일 수 있는 전문 쇼룸입니다. 촬영 및 라이브 커머스 진행도 가능합니다.",
    imageUrl: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "상담 및 전시 목적",
    features: ["이동식 행거 및 마네킹", "전문 조명 시스템", "제품 촬영용 배경지", "피팅룸 완비"],
  },
  {
    id: "S05",
    name: "다목적 회의실",
    category: "교육 및 회의",
    description: "소규모 미팅부터 바이어 상담, 내부 회의까지 다양한 목적에 맞춰 사용할 수 있는 프라이빗한 회의 공간입니다.",
    imageUrl: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "최대 8인",
    features: ["대형 모니터", "화상 회의 시스템", "무선 인터넷", "음료 제공"],
  },
  {
    id: "S06",
    name: "라운지 및 휴게 공간",
    category: "네트워킹",
    description: "편안한 분위기에서 휴식을 취하거나 다른 입주사 및 이용자들과 자유롭게 교류할 수 있는 커뮤니티 공간입니다.",
    imageUrl: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    capacity: "자유 이용",
    features: ["커피 및 차 제공", "편안한 소파와 테이블", "업계 전문 서적 비치", "네트워킹 행사 공간 활용"],
  },
];

// --- 신규 페이지 데이터 구조 및 내용 (추가) ---

// 4. 프로그램 데이터 타입 및 데이터 정의
export interface Program {
  id: string;
  type: '지원 사업' | '교육 및 행사'; // 탭 구분을 위한 타입
  title: string;
  description: string;
  period: string; // 모집 또는 진행 기간
  status: '모집중' | '마감' | '진행예정'; // 프로그램 상태
}

export const programsData: Program[] = [
  // 데이터 소스: sbsa.kr 교육 안내[1], SupportPrograms.tsx[1]
  {
    id: 'P01',
    type: '지원 사업',
    title: '경영 컨설팅 지원',
    description: '사업 전략, 마케팅, 재무 등 경영 전반에 대한 전문가의 1:1 맞춤형 컨설팅을 제공하여 사업의 성장을 돕습니다.',
    period: '상시 모집',
    status: '모집중',
  },
  {
    id: 'P02',
    type: '지원 사업',
    title: '정부 지원사업 계획서 작성 교육',
    description: '생성형 AI를 활용하여 정부 및 지자체의 지원 사업에 효과적으로 지원할 수 있도록 사업 계획서 작성법을 교육합니다.',
    period: '2025.01.23 ~ 2025.02.09',
    status: '마감',
  },
  {
    id: 'P03',
    type: '지원 사업',
    title: '공동 브랜드 "URZ" 참여사 모집',
    description: '협회의 공동 브랜드 "URZ"의 신규 시즌 제품 개발 및 생산에 참여할 회원사를 모집합니다. 공동 마케팅 및 판로 개척을 지원합니다.',
    period: '2025.08.01 ~ 2025.08.31',
    status: '진행예정',
  },
  {
    id: 'P04',
    type: '교육 및 행사',
    title: '봉제 전문가 양성과정 (8기)',
    description: '산업 현장에서 요구하는 최고 수준의 봉제 기술을 습득할 수 있는 전문가 양성 과정입니다. 실무 중심의 집중 교육을 제공합니다.',
    period: '2025.09.01 ~ 2025.09.15',
    status: '진행예정',
  },
  {
    id: 'P05',
    type: '교육 및 행사',
    title: 'StyleCAD 활용 패턴 제작 기초 과정',
    description: '디지털 패션의 필수 역량인 2D CAD(StyleCAD)를 활용한 패턴 제작 기초 교육을 통해 디지털 전환을 지원합니다.',
    period: '2025.07.21 ~ 2025.07.25',
    status: '마감',
  },
  {
    id: 'P06',
    type: '교육 및 행사',
    title: 'ESG 업사이클 기반 지속가능 패션 브랜드 런칭 과정',
    description: '친환경 및 지속가능성에 대한 시장의 요구에 부응하는 패션 브랜드를 런칭하고 기업의 ESG 역량을 강화하는 교육입니다.',
    period: '2025.08.25 ~ 2025.09.05',
    status: '모집중',
  },
];

// 5. 연관사업 데이터 타입 및 데이터 정의
export interface RelatedBusiness {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[]; // Corrected from string to string[]
  link: string;
}

export const relatedBusinessData: RelatedBusiness[] = [
  // 데이터 소스: sbsa.kr 연관사업[2], 산학협력 사례[3]
  {
    id: 'RB01',
    title: '공동 브랜드 "DDM-Originals" 런칭',
    description: '동대문 소공인들의 기술력과 최신 트렌드를 결합한 공동 브랜드를 런칭하여 고부가가치 상품을 개발하고 새로운 시장을 개척합니다.',
    imageUrl: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['공동 브랜드', '판로 개척', '고부가가치'],
    link: '#',
  },
  {
    id: 'RB02',
    title: '대학교 연계 산학협력 프로젝트',
    description: '국내 유수 대학의 패션디자인학과와 협력하여 학생들의 창의적인 아이디어를 회원사의 생산 기술력으로 실현하는 프로젝트를 진행합니다.',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['산학협력', '청년 인재', '신제품 개발'],
    link: '#',
  },
  {
    id: 'RB03',
    title: '지속가능 패션소재 공동구매 사업',
    description: '친환경, 리사이클 원단 등 지속가능한 패션 소재를 대량으로 공동 구매하여 회원사에게 합리적인 가격으로 공급하는 사업입니다.',
    imageUrl: 'https://images.pexels.com/photos/5703630/pexels-photo-5703630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['지속가능성', '친환경 소재', '원가 절감'],
    link: '#',
  },
];

// 6. 기타내용(연혁) 데이터 타입 및 데이터 정의
export interface HistoryEvent {
  year: string;
  event: string;
  description: string;
}

export const historyData: HistoryEvent[] = [
  // 데이터 소스: 기존 AboutUs.tsx의 history 객체 [1]
  {
    year: '2023',
    event: '협회 설립',
    description: '동대문 패션 및 제조 산업 소상공인 지원을 위한 (사)동대문의류봉제협회 공식 출범',
  },
  {
    year: '2024',
    event: '이이비셀 주식회사 운영사 선정',
    description: '전문성과 비전을 갖춘 이이비셀 주식회사가 협회 공식 운영사로 선정되어 체계적인 지원 사업 시작',
  },
  {
    year: '2025',
    event: '디지털 전환 지원 사업 개시',
    description: 'CAD/CAM 교육 및 자동 재단 시스템 지원을 통해 동대문 패션 제조의 디지털 혁신을 선도',
  },
];

// 7. 홈페이지 QuickLinks 데이터 타입 및 데이터 정의
export interface QuickLink {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}
