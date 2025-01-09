/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  //username: "thulieblack",
  title: "Hi there!",
  subTitle: emoji(
    "Welcome! I'm Thulisile [pronounced To-lee-c-leh] or Thulie in short. I am an open-source fanatic, a community builder, a technical writer, and a Python programmer. Here, you will find my contact details and what I have done and am currently working on. Please feel free to reach out to me💜!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thulieblack",
  linkedin: "https://www.linkedin.com/in/v-thulisile-sibanda/",
  gmail: "sibanda.thulie@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// About Section

const aboutSection = {
  title: "About Me",
  subTitle: "My passion for open-source has led me to become a leader and expand my skills. With a blend of technical and communication expertise, I love creating sustainable solutions for communities. ",
  skills: [
    emoji(
      "Apart from my role as a Senior Community Manager at AsyncAPI Initiative, I am a member of the Technical Steering Committee, and I organize the AsyncAPI Conf and chair the Working Group, which enables me to bring together enthusiasts and experts to share insights and foster collaboration."
    ),
    emoji("As a community builder, I also have the privilege of being a Mentor and project maintainer, while also focusing on developing educational content."),
    emoji(
      "⚡ The future is open source, and companies, users, and orgs need to invest in and support open-source projects and maintainers. By providing funding, we can ensure the growth and sustainability of open-source projects, paving the way for a more collaborative and innovative future."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  display: true // Set false to hide this section, defaults to true
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Community Manager",
      company: "AsyncAPI Initiative",
      companylogo: require("./assets/images/asyncapi.jpg"),
      date: "February 2023 – Present",
      desc: "I am responsible for setting and addressing our annual community goals aligned with the project's mission. This includes collaborating with community builders, contributors, and maintainers to create a welcoming and inclusive environment.",
      descBullets: [
        "I also lead initiatives to boost community engagement, organizing the AsyncAPI Conference and monitoring community feedback to help us assess our progress and make necessary adjustments.",
        "Additionally, I help develop educational resources to assist all members in navigating the open-source landscape and coordinate with program leaders to align community initiatives with ongoing development efforts and promote sustainable practices."
      ]
    },
    {
      role: "Technical Content Writer",
      company: "Turing.com",
      companylogo: require("./assets/images/turing.jpeg"),
      date: "February 2022 – Dec 2022",
      desc: "Developing content for blogs, articles, and company website.",
      descBullets: [
        "Applying SEO best practices to increase traffic to the company website.",
        "Writing impactful articles to capture the attention of the target audience.",
        "Work with software developers and different teams to develop content that appeals to the audience.",
        "Edit, proofread and polish articles to improve content readability."
      ]
    },
    {
      role: "Junior Data Scientist",
      company: "Patworc",
      companylogo: require("./assets/images/patworc.webp"),
      date: "September 2021 – February 2022",
      desc: "Using data science technologies combined with NLP to analyze patents and scientific articles in order to contextualize their similarities or differences."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  subtitle: "Open Source Projects I actively maintain",
  projects: [
    {
      image: require("./assets/images/asyncapi.jpg"),
      projectName: "AsyncAPI Conference",
      projectDesc: "Website for the AsyncAPI Conference",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://conference.asyncapi.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/asyncapi.jpg"),
      projectName: "AsyncAPI Community",
      projectDesc: "AsyncAPI community-related stuff",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.asyncapi.com/community"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      //image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      //image: require("./assets/images/......webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      // image: require("./assets/images/...webp"),
      imageAlt: "",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write beginner friendly articles and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE WHENEVER I CAN 😅"
  ),

  talks: [
    {
      title: "The State of AsyncAPI Initiative",
      subtitle: "AsyncAPI Online Conf 2024",
      slides_url: "https://www.youtube.com/live/0wl6GwXwVks?si=Sy2VxJE2ZLCslusL",
      event_url: "https://conference.2024.asyncapi.com/venue/Online"
    },
    {
      title: "Get Paid For Open Source",
      subtitle: "GitHub Africa",
      //slides_url: "",
      event_url: "https://www.meetup.com/github-africa/events/287451742/"
    },
    {
      title: "Career Empowerment and Embracing Equity in Tech",
      subtitle: "IWD",
      slides_url: "https://www.youtube.com/live/IboLZzLU40o?si=1DhRvccAfEMcs1Jh",
      //event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
    
  ],
  
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",


  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  email_address: "sibanda.thulie@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  aboutSection,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
