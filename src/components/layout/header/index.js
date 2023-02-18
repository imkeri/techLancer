/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import NextLink from 'next/link'
import Image from "next/legacy/image";
import { Popover, Transition, Menu } from '@headlessui/react'
// import '../../../../public/css/Header/header.css';
import { marketing, applicationUi, ecommerce } from '../../../constants/navbarElements'
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';

const solutions = [
  {
    name: 'Blogs',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Videos',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Sales Academy',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
  {
    name: 'Contact',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
 

  const token = Cookies.get('token')
  console.log("tokem:::",token)
  
  
  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4  sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
          <div>
            <NextLink href="/" className="flex">

              <span className="sr-only">DriverSales</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="../../img/Main Logo.png"
                alt=""
              />
            </NextLink>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3DC0DF]">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center">

            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <div
                      className={classNames(
                        open ? 'text-[#000000]' : 'text-[#000000]',
                        'group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] text-[18px] font-medium hover:text-gray-900 border-b-2 border-[#fff] hover:border-b-2 hover:border-[#3DC0DF]',
                      )}
                    >
                      <span>Blogs</span>

                    </div>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <div
                      className={classNames(
                        open ? 'text-[#000000]' : 'text-[#000000]',
                        'group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px]  text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]',
                      )}
                    >
                      <span>Videos</span>

                    </div>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <div
                      className={classNames(
                        open ? 'text-[#000000]' : 'text-[#000000]',
                        'group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]',
                      )}
                    >
                      <span><NextLink href='/sales-academy' className='no-underline text-[#000] hover:text-gray-700'>Sales Academy</NextLink></span>

                    </div>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <div
                      className={classNames(
                        open ? 'text-[#000000]' : 'text-[#000000]',
                        'group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]',
                      )}
                    >
                      <span>Contact</span>

                    </div>
                  </>
                )}
              </Popover>

            </Popover.Group>
            <div className="flex  items-center lg:ml-12">
            {/* <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-white rounded-full overflow-hidden flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span className="sr-only">Open user menu</span>
                      {auth.user?.photoURL ? (
                        <Image
                          src={auth.user.photoURL}
                          height={32}
                          width={32}
                          alt="profile-photo"
                        />
                      ) : (
                        <svg
                          className="h-8 w-8 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute z-50 right-0 mt-5 w-48 rounded-lg shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => {
                            if (item.name === 'Sign out') {
                              return (
                                (<NextLink
                                  href={item.href}
                                  onClick={(e) => signOut(e)}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                  )}>

                                  {item.name}

                                </NextLink>)
                              );
                            } else {
                              return (
                                (<NextLink
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                  )}>

                                  {item.name}

                                </NextLink>)
                              );
                            }
                          }}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              <NextLink
                    href="#"
                    className=" text-[14px] text-[#3DC0DF] xl:text-[18px] lg:text-[15px]  md:text-[10px]text-[18px] font-extrabold xl:px-[15px] xl:py-[6px] xl:block md:hidden block border-2 border-[#3DC0DF] rounded-[5px] hover:bg-[#3DC0DF] hover:text-[#fff]">

                    SALES TALENT

                  </NextLink>
                  <NextLink
                    href="/company"
                    className="text-[14px] ml-[10px] text-[#fff] xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] font-extrabold xl:px-[15px] xl:py-[6px] xl:py-[6px] xl:block md:hidden block border-2 bg-[#3DC0DF] border-[#3DC0DF] rounded-[5px] hover:bg-[#fff] hover:text-[#3DC0DF]">

                    COMPANY

                  </NextLink>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="../img/Main Logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3DC0DF]">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50 uppercase"
                      >

                        <div className="ml-4 text-base font-medium text-gray-900 uppercase">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>

                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-4">
                <NextLink
                  href="/components"
                  className="rounded-lg  py-2  hover:bg-[#3DC0DF] flex justify-center text-[14px] text-[#3DC0DF] font-extrabold px-[20px] py-[6px] border-2 border-[#3DC0DF] rounded-[10px]  hover:text-[#FFF]">

                  SALES TALENT

                </NextLink>
              </div>
              <div className="mt-6">
                <NextLink
                  href="company"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#3DC0DF] hover:bg-[#FFF]">

                  COMPANY
                </NextLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
