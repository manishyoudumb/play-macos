import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },

      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "/readme/macos.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/manishyoudumb/play-macos"
      },

      {
        id: "cube-solver",
        title: "Cube Solver",
        file: "/readme/justacube.md",
        icon: "i-bx:cube",
        excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
        link: "https://cube-keir.vercel.app"
      },
      {
        id: "play-maya",
        title: "Maya",
        file: "/readme/maya.md",
        icon: "i-ri:gamepad-line",
        excerpt: "That one minimalist LLM assistant I'd love to have at my place!",
        link: "https://github.com/manishyoudumb/play-maya"
      },
      {
        id: "rustytasks",
        title: "RustyTasks",
        file: "/readme/rustytasks.md",
        icon: "i-bx:cube",
        excerpt: "A command-line interface (CLI) application for managing todo lists....",
        link: "https://github.com/manishyoudumb/rustytasks"
      }
    ]
  }
];

export default bear;
