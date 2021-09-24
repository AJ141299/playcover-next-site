import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ page, pageRoute }) => {
  const router = useRouter();
  const isActive = route => {
    if (route == router.pathname) {
      // active styles
      return 'border-[#f54399] px-5 py-1 text-[#f54399]';
    } else {
      // inactive styles
      return 'border-transparent px-5 py-1 hover:border-menu-pink';
    }
  };
  return (
    <Link href={ pageRoute }>
      <a
        className={
          'transition duration-200 border-2 rounded-full ease-out ' +
          isActive(pageRoute)
        }
      >
        { page }
      </a>
    </Link>
  );
};

export default NavLink;
