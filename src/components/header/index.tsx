'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useToggle } from 'react-use';

import AnimatedLink, { AnimatedLinkProps } from '@/components/AnimatedLink';
import Container from '@/components/container';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Separator } from '../ui/separator';

export default function Header() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden h-[94px] items-center bg-black lg:flex">
        <Container className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-x-[45px] xl:gap-x-[93px]">
            <div className="flex items-center gap-x-6 xl:gap-x-12">
              <NavItems />
            </div>
            <div className="flex items-center gap-x-[15px]">
              <ActionCTAs />
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex h-14 items-center bg-black md:h-18 lg:hidden">
        <Container className="flex items-center justify-between">
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="hidden items-center gap-x-[15px] md:flex">
            <ActionCTAs />
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <Container className="fixed top-14 right-0 left-0 z-50 bg-black pb-10 md:top-18 lg:hidden">
          <div className="flex flex-col gap-y-4">
            <NavItems />
          </div>
          <Separator className="mt-8 bg-white/40 md:hidden" />
          <div className="mt-8 flex flex-col gap-y-6 md:hidden">
            <ActionCTAs />
          </div>
        </Container>
      )}
    </>
  );
}

// Navigation items component
function NavItems() {
  return (
    <>
      <NavItem href="#">Platform</NavItem>
      <NavItem href="#">Solutions</NavItem>
      <NavItem href="#">Pricing</NavItem>
      <NavItem href="#">Customers</NavItem>
      <NavItem href="#">Events</NavItem>
    </>
  );
}

// Navigation item component
function NavItem(props: AnimatedLinkProps) {
  return <AnimatedLink className="text-white/70" underlineClassName="bg-white/70" {...props} />;
}

// Mobile menu component
function MobileMenu({
  isMenuOpen = false,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: (arg?: boolean) => void;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => toggleMenu()}
      className="relative -ml-2 flex h-9 w-9 items-center justify-center [&_svg]:size-5"
    >
      <span
        className={`absolute transition-all duration-300 ${
          isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
        }`}
      >
        <Menu className="text-white" />
      </span>
      <span
        className={cn(
          'absolute transition-all duration-300',
          isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
        )}
      >
        <X className="text-white" />
      </span>
    </Button>
  );
}

function ActionCTAs() {
  return (
    <>
      <Button
        variant="outline"
        className="h-11 w-full max-xl:text-[16px] sm:w-[140px] md:w-[120px] xl:w-[140px]"
      >
        Login
      </Button>
      <Button className="h-11 w-full max-xl:text-[16px] sm:w-[140px] md:w-[120px] xl:w-[140px]">
        Get a Demo
      </Button>
    </>
  );
}
