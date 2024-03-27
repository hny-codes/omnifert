import Logo from '../../assets/home/logo.png';
import Cart from '../../assets/home/cart.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='bg-[--clr-white-01] relative py-4'>
      <div className='px-4 flex justify-between lg:justify-normal items-center max-w-[--max-width] mx-auto'>
        <a href='/' className='lg:mr-32' aria-label='home'>
          <img src={Logo.src} alt='' className='w-3/4 lg:w-full' />
        </a>
        <div className='flex items-center justify-between gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger className='border-2 py-1 px-2 border-[--clr-green-01] rounded-xl lg:hidden'>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col gap-2 text-center'>
              <a href='/' className='py-2'>
                Home
              </a>
              <a href='/about' className='py-2'>
                About Us
              </a>

              {/* Products */}
              <DropdownMenu>
                <DropdownMenuTrigger className='py-2 flex items-center justify-center gap-2'>
                  Products{' '}
                  <svg
                    width='12'
                    height='7'
                    viewBox='0 0 12 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.46753 6.75293L0.897217 2.20605C0.686279 1.97168 0.686279 1.62012 0.897217 1.40918L1.43628 0.870117C1.64722 0.65918 1.99878 0.65918 2.23315 0.870117L5.86597 4.47949L9.47534 0.870117C9.70972 0.65918 10.0613 0.65918 10.2722 0.870117L10.8113 1.40918C11.0222 1.62012 11.0222 1.97168 10.8113 2.20605L6.24097 6.75293C6.03003 6.96387 5.67847 6.96387 5.46753 6.75293Z'
                      fill='#0D3C00'
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-4 text-center'>
                  <a href='/shop' className='font-bold text-[--clr-green-01]'>
                    Shop All
                  </a>
                  <a href='/'>Product 1</a>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Media */}
              <DropdownMenu>
                <DropdownMenuTrigger className='py-2 flex items-center justify-center gap-2'>
                  Media{' '}
                  <svg
                    width='12'
                    height='7'
                    viewBox='0 0 12 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.46753 6.75293L0.897217 2.20605C0.686279 1.97168 0.686279 1.62012 0.897217 1.40918L1.43628 0.870117C1.64722 0.65918 1.99878 0.65918 2.23315 0.870117L5.86597 4.47949L9.47534 0.870117C9.70972 0.65918 10.0613 0.65918 10.2722 0.870117L10.8113 1.40918C11.0222 1.62012 11.0222 1.97168 10.8113 2.20605L6.24097 6.75293C6.03003 6.96387 5.67847 6.96387 5.46753 6.75293Z'
                      fill='#0D3C00'
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-4 text-center'>
                  <a href='/media' className='font-bold text-[--clr-green-01]'>
                    All Media
                  </a>
                  <a href='/'>Media 1</a>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* News & Articles */}
              <DropdownMenu>
                <DropdownMenuTrigger className='py-2 flex items-center justify-center gap-2'>
                  News & Articles{' '}
                  <svg
                    width='12'
                    height='7'
                    viewBox='0 0 12 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.46753 6.75293L0.897217 2.20605C0.686279 1.97168 0.686279 1.62012 0.897217 1.40918L1.43628 0.870117C1.64722 0.65918 1.99878 0.65918 2.23315 0.870117L5.86597 4.47949L9.47534 0.870117C9.70972 0.65918 10.0613 0.65918 10.2722 0.870117L10.8113 1.40918C11.0222 1.62012 11.0222 1.97168 10.8113 2.20605L6.24097 6.75293C6.03003 6.96387 5.67847 6.96387 5.46753 6.75293Z'
                      fill='#0D3C00'
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-4 text-center'>
                  <a href='/news' className='font-bold text-[--clr-green-01]'>
                    All News
                  </a>
                  <a href='/'>News 1</a>
                  <a href='/'>News 2</a>
                  <a href='/'>News 3</a>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href='/' className='py-2'>
                Contact Us
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className='hidden lg:flex items-center gap-6'>
            <a href='/' className='link'>
              Home
            </a>
            <a href='/about' className='link'>
              About Us
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='menu'>
                      <li>
                        <NavigationMenuLink>
                          <a
                            href='/shop'
                            className='font-bold hover:text-[--clr-green-01]'
                          >
                            Shop All
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a href='/' className='menu-item'>
                            Product 1
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='menu'>
                      <li>
                        <NavigationMenuLink>
                          <a
                            href='/'
                            className='font-bold hover:text-[--clr-green-01]'
                          >
                            All Media
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a href='/' className='menu-item'>
                            Media 1
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>News & Media</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='menu'>
                      <li>
                        <NavigationMenuLink>
                          <a
                            href='/'
                            className='font-bold hover:text-[--clr-green-01]'
                          >
                            All News & Media
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a href='/' className='menu-item'>
                            Article 1
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a href='/' className='menu-item'>
                            Article 2
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a href='/' className='menu-item'>
                            Article 3
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href='contact' className='link'>
              Contact Us
            </a>
          </div>
          <div className='lg:ml-8'>
            <img src={Cart.src} alt='cart' />
          </div>
        </div>
      </div>
    </nav>
  );
}
