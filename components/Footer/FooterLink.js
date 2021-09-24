import Link from 'next/link';


const FooterLink = ({ link, text }) => {
  return (
    <Link href={ link }>
      <a className="cursor-pointer text-gray-400 dark:text-gray-500 hover:text-menu-pink underline" >{ text }</a>
    </Link>
  );
};

export default FooterLink;