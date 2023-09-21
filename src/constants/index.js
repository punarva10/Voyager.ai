import {
  budget,
  carrent,
  discount,
  friends,
  jobit,
  personalise,
  tripguide,
  chatgpt,
  article,
  reel
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "working",
      title: "How it works",
    },
    {
      id: "waitlist",
      title: "Waitlist",
    },
  ];
  
  const services = [
    {
      title: "Travel with your budget",
      icon: budget,
    },
    {
      title: "Find cool Friends to go on Trips with",
      icon: friends,
    },
    {
      title: "Personalise your Trips",
      icon: personalise,
    },
    {
      title: "Get Great Discounts!",
      icon: discount,
    },
  ];
  
  const projects = [
    {
      name: "AI + LLM's",
      description:
        "Or in simple terms, our very own chatgpt. We combine results from multiple large language models to gather the most accurate information and give it to you.",
      tags: [
        {
          name: "AIforTravel",
          color: "blue-text-gradient",
        },
        {
          name: "chatgpt",
          color: "green-text-gradient",
        },
        {
          name: "AIbestie",
          color: "pink-text-gradient",
        },
      ],
      image: chatgpt,
    },
    {
      name: "Travel blogs and articles",
      description:
        "Let's be real. Who reads articles? So we collected as many travel articles and blogs as we could find and fed all that data into our model.",
      tags: [
        {
          name: "Jaiwriters",
          color: "blue-text-gradient",
        },
        {
          name: "letAIdothework",
          color: "green-text-gradient",
        },
        {
          name: "travelnews",
          color: "pink-text-gradient",
        },
      ],
      image: article,
    },
    {
      name: "Social Media content",
      description:
        "How many reels from all those travel influencers have we saved and never gone back to? We scrape all of that data just to make sure you dont miss out on ANYTHING.",
      tags: [
        {
          name: "savedreels",
          color: "blue-text-gradient",
        },
        {
          name: "travelcontent",
          color: "green-text-gradient",
        },
        {
          name: "influencer",
          color: "pink-text-gradient",
        },
      ],
      image: reel,
    },
  ];
  
  export { projects, services };
  