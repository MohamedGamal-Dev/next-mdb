import Link from 'next/link';
import { MdBurstMode } from 'react-icons/md';
import classNames from 'classnames';

import { useToggle } from '@/utils';
import { navList } from '@/routes';

export const HeaderNavbar = () => {
  const [status, toggle] = useToggle(false);

  return (
    <nav className="p-3 bg-zinc-900 border-zinc-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="#" className="flex items-center">
          <MdBurstMode className="w-auto h-8 mr-2 sm:h-10 fill-white" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            NEXT-MDB
          </span>
        </Link>

        <button
          type="button"
          className={classNames(
            'inline-flex items-center p-2 ml-3 text-sm rounded-lg  focus:outline-none ',
            'text-zinc-400 hover:bg-zinc-700',
            'md:hidden'
          )}
          data-collapse-toggle="main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          onClick={toggle}
        >
          <span className="sr-only">Open main menu</span>

          {status ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div
          className={classNames('w-full md:block md:w-auto', {
            ' hidden': !status,
          })}
          id="main-navbar"
        >
          <div
            className={classNames(
              'flex flex-col mt-4 rounded-lg',
              'bg-zinc-900 border-zinc-800',
              'md:flex-row md:space-x-0 md:mt-0 md:text-sm md:font-medium',
              'md:border-0 md:bg-transparent'
            )}
          >
            {navList.map((page) => {
              const { title, to } = page;
              return (
                <Link
                  href={to}
                  className="py-2 pl-3 pr-4 text-white rounded bg-transparent hover:bg-black/10 "
                  key={title}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
