import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "mhmmdfrhhnn@gmail.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/mhmmdfrhn22",
      Icon: SiGithub,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@fa2h4n",
      Icon: SiYoutube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/farhanfym/",
      Icon: SiInstagram,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/muhammad-farhan-abdullah-218b7b2b5",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
