import foragrcollage1 from "./images/foragr-collage.png";
import foragrcollage2 from "./images/foragr-collage2.png";
import waves1 from "./images/waves1.png";
import wavescollage from "./images/waves-collage.png";
import melisande1 from "./images/melisande1.png";
import melisande2 from "./images/melisande2.png";

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
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "Successes",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "Next",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Successes",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Next",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Successes",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Next",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
