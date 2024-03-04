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
    php,
    vue,
    mysql,
    amb,
    ts,
    ttm,
    Ttm,
    colordetection,
    taskify,
    chatters,
    electronic,
    memories,
    hyperslice,
    django,
    cypress,
    stripe,
    supabase,
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
    {
      name: "VueJs",
      icon: vue,
    },
    // {
    //   name: "php",
    //   icon: php,
    // },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "stripe",
      icon: stripe,
    },
    {
      name: "supabase",
      icon: supabase,
    },
      
  ]

  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "The Tech Musketeers",
      icon: ttm,
      iconBg: "#E6DEDD",
      date: "April 2023 - Sept 2023",
      points: [
        "Successfully integrated Stripe payment methods, broadening the spectrum of secure and user-friendly payment choices .",
        "Implemented a robust pagination system and advanced search functionalities, elevating the user experience .",
        "Diagnosed and effectively resolved intricate technical issues, ensuring uninterrupted platform operation and elevating user satisfaction through seamless functionality.",
        "Successfully implemented a promocode redeeming system, enhancing user engagement and marketing capabilities.",
      ],
    },
    {
      title: "Next.js Developer",
      company_name: "Add My Brand",
      icon: amb,
     
      iconBg: "linear-gradient(28deg, rgba(72,176,228,1) 16%, rgba(253,29,243,1) 34%, rgba(223,67,162,1) 72%, rgba(179,98,43,1) 92%)" ,    
      // iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
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

  
  const projects = [
    {
      "name": "Cypress: Real-time Collaboration Web App",
      "description": "Cypress is a collaboration platform, enabling real-time, simultaneous document editing and project management for teams. It combines live cursor tracking, secure authentication, and efficient subscription handling through Stripe to provide a seamless user experience. ",
      "tags": [
        {
          "name": "Next.js",
          "color": "blue-text-gradient"
        },
        {
          "name": "Supabase",
          "color": "green-text-gradient"
        },
        {
          "name": "TypeScript",
          "color": "pink-text-gradient"
        },
        {
          "name": "Stripe",
          "color": "yellow-text-gradient"
        },
        {
          "name": "Sockets",
          "color": "orange-text-gradient"
        },
        {
          "name": "Tailwind CSS",
          "color": "blue-text-gradient"
        }
      ],
      "image": cypress, 
      "source_code_link": "https://github.com/Harmeet135/cypress" 
    },
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
      name: "Strip Color Detection",
      description:
        "Strip Color Detection allows users to upload urine strip images and quickly extracts and analyzes the colors from the uploaded images for medical professionals and individuals monitoring their health.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJs",
          color: "yellow-text-gradient",
        },
      ],
      image: colordetection,
      source_code_link: "https://github.com/Harmeet135/Strip-Color-Detection",
    },
    {
      name: "HyperSlice",
      description:
        "Hyperslice is a web application that functions as a link shortener, enabling users to create short and manageable links for longer URLs. The name Hyperslice is derived from the first word in HTTP, which stands for Hypertext Transfer Protocol, the foundation of data communication on the World Wide Web, and slice, referencing the action of dividing or cutting a link to make it shorter.",
      tags: [
        {
          name: "VueJs 3",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: hyperslice,
      source_code_link: "https://github.com/Harmeet135/link_shortener",
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
      ],
      image: electronic,
      source_code_link: "https://github.com/Harmeet135/Electonic-market-place",
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
  
  export { services, experiences,  projects , tech };