import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ page, pageRoute, close }) => {
  const router = useRouter();
  const isActive = route => {
    if (route == router.pathname) {
      // active styles
      return 'border-[#f54399] px-7 py-2 xl:px-5 xl:py-1 text-[#f54399]';
    } else {
      // inactive styles
      return 'border-transparent px-7 py-2 xl:px-5 xl:py-1 hover:text-[#f54399]';
    }
  };
  return (
    <div onClick={ close }>
      <Link href={ pageRoute }>
        <a
          className={
            'transition duration-200 rounded-full ease-out ' +
            isActive(pageRoute)
          }
        >
          { page }
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
