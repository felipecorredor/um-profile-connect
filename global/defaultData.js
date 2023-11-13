const DEFAULT_VALUES = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  dateOfBirth: new Date().toLocaleString() + "",
  position: "Frontend Developer",
  description:
    "I am a dedicated professional with a strong background in software development. I have a passion for creating innovative solutions and thrive in collaborative team environments. My goal is to continue honing my skills and contributing to exciting projects in the tech industry.",
  semester: 2,
  skills: [
    {
      name: "React",
      name: "JavaScript",
    },
  ],
  educations: [
    {
      university: "Stanford University",
      degree: "Bachelor of Science in Computer Science",
      description:
        "My goal is to graduate with a Bachelor of Science in Computer Science from Stanford University, and leverage this knowledge to pursue a career in software development, where I can contribute to cutting-edge projects and innovation.",
    },
    {
      university: "Harvard Business School",
      degree: "Master of Business Administration (MBA)",
      description:
        "I aspire to complete my MBA at Harvard Business School, equipping myself with the skills and knowledge required to excel in the field of business and entrepreneurship. My goal is to lead and transform organizations, driving strategic growth and innovation.",
    },
  ],
  experiences: [
    {
      position: "Software Engineer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      typeEmployment: "full-time",
      description:
        "Seeking a challenging role as a Software Engineer at Tech Innovators Inc. to work on cutting-edge projects and contribute to the development of innovative software solutions.",
    },
    {
      position: "Marketing Manager",
      company: "Global Marketing Agency",
      location: "New York, NY",
      typeEmployment: "autonomous",
      description:
        "Looking for a Marketing Manager position at Global Marketing Agency. Excited to lead marketing campaigns and drive growth for clients while leveraging my strategic and creative skills.",
    },
  ],
};
