import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    amb,
    ts,
    carrent,
    shoestore,
    taskify,
    chatters,
    electronic,
    memories,
    jobit,
    tripguide,
    threejs,
    solidity,
    nextjs,
    cplus,
    python,
    native,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front end Developer",
      icon: creator,
    },
    {
      title: "Block chain Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },

    {
      name: "cplus",
      icon: cplus,
    },
  
  ];
  
  const experiences = [
    {
      title: "Blockchain Developer",
      company_name: "Teckstack",
      icon: ts,
      iconBg: "#383E56",
      date: "Sept 2022 - Jan 2023",
      points: [
        "Developed Aztec Curve Swap Bridge as a blockchain dev intern and tested the bridge, while also documenting the code and its functionality.",
        "Designed and implemented a new Bridge for Curve, enabling ETH/DAI/OTHER TOKENS swapping via Curve pools, by studying existing bridges and utilizing previous experience with blockchain development.",
        "Created comprehensive tests for both Aztec Curve Swap Bridge and the new Curve Bridge, utilizing Forge(Foundry) to ensure their proper functioning.",
        "Developed a Uniswap LP (Liquidity Provider) Bridge and a Collateral plugin for wsOHM, showcasing versatility and proficiency in various blockchain development tasks.",
      ],
    },
    {
      title: "Next.js Developer",
      company_name: "Add My Brand",
      icon: amb,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Socials",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: memories,
      source_code_link: "https://github.com/Harmeet135/Socials",
    },
    {
      name: "electronic",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity.io",
        
          color: "green-text-gradient",
        },
        // {
        //   name: "Django",
        //   color: "pink-text-gradient",
        // },
      ],
      image: electronic,
      source_code_link: "https://github.com/Harmeet135/Electonic-market-place",
    },
    {
      name: "chatters",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: chatters,
      source_code_link: "https://github.com/Harmeet135/Chatters",
    },
    {
      name: "Task/Gaols",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: native,
      source_code_link: "https://github.com/Harmeet135/Goals-APP",
    },
    {
      name: "Spring Summer",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Redux-saga",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: shoestore,
      source_code_link: "https://github.com/Harmeet135/Shoestore",
    },
    {
      name: "Taskify",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Redux-saga",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: taskify,
      source_code_link: "https://github.com/Harmeet135/Taskify",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };