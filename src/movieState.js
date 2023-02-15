import foragr from "./images/foragr.png";
import theracer from "./images/theracer-small.png";
import goodtimes from "./images/goodtimes-small.png";
import athlete2 from "./images/athlete2.png";
import theracer2 from "./images/the-racer2.jpg";
import goodtimes2 from "./images/good-times2.jpg";

export const movieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: goodtimes,
      mainImgAlt: "boxer taking a rest",
      secondaryImg: athlete2,
      secondaryImgAlt: "shirtless boxers recovering",
      url: "/work/waves",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      mainImgAlt:
        "couple embracing under a pine tree, boats in the water behind them",
      url: "/work/melisandeyoga",
      secondaryImg: goodtimes2,
      secondaryImgAlt: "couple playfully embracing in a hay field in autumn",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Foragr",
      mainImg: foragr,
      mainImgAlt:
        "landing page with a woodsy background and invitation to begin",
      url: "/work/foragr",
      secondaryImg: theracer2,
      secondaryImgAlt:
        "motorcyclist speeding along under arena lights, past dawn",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
