import foragrcollage1 from "./images/foragrcollage1.webp";
import foragrcollage2 from "./images/foragr-collage2.webp";
import waves1 from "./images/waves1.webp";
import wavescollage from "./images/waves-collage.webp";
import melisande1 from "./images/melisande1.webp";
import melisande2 from "./images/melisande2.webp";

export const projectState = () => {
  return [
    {
      title: "Waves",
      mainImg: waves1,
      mainImgAlt: "simple desktop view of miminalist music player",
      secondaryImg: wavescollage,
      secondaryImgAlt: "mobile view of minimalist music player",
      url: "/work/waves",
      repoLink: "https://github.com/evvrit/music-player",
      siteLink: "https://waveywaves.herokuapp.com/",
      technologies: [
        { icon: ["fab", "react"], name: "React" },
        { icon: ["fab", "git"], name: "Git" },
        { icon: ["fab", "sass"], name: "Sass" },
        { icon: ["fab", "js"], name: "Javascript" },
        { icon: ["fab", "github"], name: "Github" },
        { icon: ["fab", "html5"], name: "HTML5" },
      ],
      herokuInclude: true,
      details: [
        {
          title: "Challenges",
          description:
            "Avoiding redundant state variables, working with outdated information",
        },
        {
          title: "Successes",
          description:
            "Implemented autoplay and skip-track features, added pretty style touches while keeping the design sleek",
        },
        {
          title: "Next",
          description:
            "Incorporating more song libraries with option to select genre",
        },
      ],
    },
    {
      title: "Melisande Yoga",
      mainImg: melisande2,
      mainImgAlt: "types of yoga classes",
      url: "/work/melisandeyoga",
      secondaryImg: melisande1,
      secondaryImgAlt: "private classes booking info",
      siteLink: "https://melisandeyoga.ca/",
      technologies: [
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "wordpress"], name: "Wordpress" },
        { icon: ["fab", "html5"], name: "HTML5" },
        { icon: ["fab", "elementor"], name: "Elementor" },
      ],
      details: [
        {
          title: "Challenges",
          description:
            "Communicating technical concepts to the client, adapting to changing client vision",
        },
        {
          title: "Successes",
          description:
            "Improved the user experience and increased user engagement with the client's online platform",
        },
        {
          title: "Next",
          description:
            "Refine the UI with more consistent design, replace arketa video library management with a custom-built system",
        },
      ],
    },
    {
      title: "Foragr",
      mainImg: foragrcollage1,
      mainImgAlt:
        "mobile view series with full size map, cache details, and form to add a cache",
      url: "/work/foragr",
      secondaryImg: foragrcollage2,
      secondaryImgAlt:
        "mobile view series with landing page, profile, and species details",
      siteLink: "https://forag-r.herokuapp.com/",
      repoLink: "https://github.com/evvrit/foragr",
      technologies: [
        { icon: ["fab", "git"], name: "Git" },
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "sass"], name: "Sass" },
        { icon: ["fab", "js"], name: "Javascript" },
        { icon: ["fab", "github"], name: "Github" },
        { icon: ["fab", "html5"], name: "HTML5" },
      ],
      railsInclude: true,
      herokuInclude: true,
      details: [
        {
          title: "Challenges",
          description:
            "Creating a drop-pin feature on the map that would work for a mock-mobile demo, working with others under a time crunch",
        },
        {
          title: "Successes",
          description:
            "A fairly complex multi-model bookmarking feature with dynamic rendering, a mobile-responsive design",
        },
        {
          title: "Next",
          description:
            "Optimising performance, eliminating empty space, and adding fun cross-user interactivity features!",
        },
      ],
    },
  ];
};
