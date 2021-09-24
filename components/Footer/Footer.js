import FooterLink from "./FooterLink";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 px-14 bg-white dark:bg-nav-footer text-gray-400 dark:text-gray-500 mt-10">
      <div className="flex justify-between items-center">
        <section className="flex space-x-4">
          <FooterLink text="Legal Notice" link="/legal_notice" />
          <FooterLink text="Copyright Claims" link="mailto:alex@playcover.me" />
        </section>

        <p>Copyright © 2021 Alexandr Dorofeev. All rights reserved.</p>

        {/* icons */ }
        <div className="flex space-x-4 items-center">
          {/* discord */ }
          <a target="_blank" href="https://discord.gg/FYVuF6CNzP">
            <FaDiscord color="#5c6bc0" size="35px" />
          </a>

          {/* twitter */ }
          <a target="_blank" href="https://twitter.com/playcoverapp">
            <FaTwitter color="#1da1f2" size="35px" />

          </a>

          {/* github */ }
          <a target="_blank" href="https://github.com/Letscoder/PlayCover">
            <div className="text-gray-900 dark:text-gray-200">
              <FaGithub size="35px" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
