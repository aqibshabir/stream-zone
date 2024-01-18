import { Actions } from "./actions";
import { Logo } from "./logo";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[40px] z-[50] bg-[#6c23ff] px-2 lg:px-4 flex justify-between items-center shadow-lg shadow-zinc-950">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};
