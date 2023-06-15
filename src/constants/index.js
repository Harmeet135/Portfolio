import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html1,
    css1,
    express1,
    firebase1,
    git1,
    mongodb1,
    python1,
    nextjs1,
    react1,
    nodejs1,
    cplus1,
    solidity1,
    tailwind1,
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
    shoestore,
    taskify,
    chatters,
    electronic,
    memories,
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
    {
      id: "resume",
      title: "Resume",
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

  const tech = [
    {
      name: "HTML 5",
      icon: html1,
    },
    {
      name: "css 3",
      icon: css1,
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
      name: "react1",
      icon: react1,
    },
    {
      name: "tailwind1",
      icon: tailwind1,
    },
    {
      name: "nodejs1",
      icon: nodejs1,
    },
    {
      name: "mongodb1",
      icon: mongodb1,
    },
    {
      name: "python1",
      icon: python1,
    },
    {
      name: "git1",
      icon: git1,
    },
    {
      name: "firebase1",
      icon: firebase1,
    },
    {
      name: "express1",
      icon: express1,
    },
  
    {
      name: "nextjs1",
      icon: nextjs1,
    },
    {
      name: "solidity1",
      icon: solidity1,
    },
    {
      name: "cplus1",
      icon: cplus1,
    },
  
   
  ]

  
  const experiences = [
    {
      title: "Next.js Developer",
      company_name: "Add My Brand",
      icon: amb,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
  
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product.",
  //     name: "xyz",
  //     designation: "CFO",
  //     company: "Teckstack",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },

  // ];
  
  const projects = [
    {
      name: "Socials",
      description:
        "Socials is a user-friendly web application that allows you to effortlessly share your thoughts, experiences, and moments with the world. You can log in, upload and delete posts, add descriptions and hashtags, and keep track of creation time for each post.",
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
      name: "E - mart ",
      description:
        "E-Mart is a cutting-edge web application that brings the convenience of online shopping to your fingertips. With E-Mart, you can explore a vast collection of electronic products, purchase items with ease, and discover recommended and best-selling products tailored to your interests.",
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
      name: "Chatters",
      description:
        "Web-based platform that dynamic provies platform for individuals to create their own rooms, join existing ones, and connect with their know ones from around the world.",
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
      name: "Task Tracker",
      description:
        "TaskTracker is a convenient and efficient mobile application designed to help you stay organized and manage your tasks effectively. With TaskTracker, you can easily create, track, and mark tasks as completed, ensuring that you stay on top of your responsibilities and achieve your goals.",
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
        "Taskify is a powerful and interactive web application built upon the foundation of TaskTracker. With Taskify, not only can you effectively manage your tasks, but you can also experience the convenience of dragging tasks from the active list to the completed list, and vice versa. Taskify enhances your task management experience with a dynamic interface and seamless task transitions.",
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
  
  export { services, technologies, experiences,  projects , tech };