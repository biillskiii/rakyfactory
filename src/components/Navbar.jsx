import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Logo from "../assets/logo.png"
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  const isPathActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#about" className={isPathActive("#about")}>
          What We Do
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#" className="flex items-center">
          Testimonials
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#" className="flex items-center">
          How it Works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#" className="flex items-center">
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#" className="flex items-center">
          FAQ
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="w-full h-fulll py-2 px-4 lg:px-8 lg:py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className=" text-2xl cursor-pointer py-1.5 font-bold text-black flex items-center gap-x-3"
        >
          <img src={Logo} width={30} alt="" />
          Rakyfactory
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden bg-[#7A5AE1] rounded-md p-3 lg:inline-block font-semibold"
        >
          <span className="text-white ">Join Waitlist</span>
        </Button>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <GrClose size={25} /> : <GiHamburgerMenu size={25} color="black" />}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 text-white bg-[#7A5AE1] rounded-sm">
            <span>Join Waitlist</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
