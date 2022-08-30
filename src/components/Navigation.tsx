import classNames from "classnames";
import { PropsWithChildren, useState } from "react";

type NavigationItemProps = {
  icon?: string;
  href: string;
  title: string;
};
const NavigationItem = ({ icon, title, href }: NavigationItemProps) => (
  <li>
    <a href={href} className="flex items-center">
      {icon && <i className={classNames("w-6 mr-2 fa-duotone text-center", icon)}></i>}
      <span className="text-lg">{title}</span>
    </a>
  </li>
);

type NavigationListProps = { direction?: "row" | "col"; isMobile?: boolean };
const NavigationList = ({
  direction = "row",
  isMobile = false,
  children,
}: PropsWithChildren<NavigationListProps>) => (
  <ul
    className={classNames(
      "gap-4",
      { "flex-col": direction === "col" },
      { 'flex sm:hidden': isMobile },
      { 'hidden sm:flex': !isMobile }
    )}
  >
    {children}
  </ul>
);

type Props = {};
export default function Navigation({}: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="flex w-full justify-start max-w-6xl mx-auto items-center px-6 py-6">
        <a href="/" className="mr-10 text-2xl font-semibold text-headline">
          Luke Bayliss
        </a>
        <NavigationList direction="row">
          <NavigationItem href="/posts" title="Posts" />
          <NavigationItem href="/experience" title="Experience" />
          <NavigationItem href="/projects" title="Projects" />
          <NavigationItem href="/rss.xml" title="RSS" />
        </NavigationList>
        <button className="sm:hidden ml-auto" onClick={handleOpenMenu}>
          <i className="text-2xl fa-duotone fa-bars hover:text-headline transition ease-in-out text-primary"></i>
        </button>
      </nav>
      <nav
        className={classNames(
          "bg-surface fixed h-screen right-0 top-0 bottom-0 w-screen z-10 overflow-y-auto transition ease-in-out px-6 py-6",
          { "translate-x-0": isOpen },
          { "translate-x-full": !isOpen }
        )}
      >
        <div className="flex mb-4">
          <a href="/" className="flex items-center text-xl font-semibold text-headline">
            <i className="fa-duotone fa-home mr-2"></i>
            <span>Home</span>
          </a>
          <button className="ml-auto" onClick={handleCloseMenu}>
            <i className="text-3xl fa-duotone fa-close hover:text-headline transition ease-in-out text-primary"></i>
          </button>
        </div>
        <NavigationList direction="col" isMobile>
          <NavigationItem href="/posts" title="Posts" icon="fa-block-quote" />
          <NavigationItem
            href="/experience"
            title="Experience"
            icon="fa-timeline"
          />
          <NavigationItem
            href="/projects"
            title="Projects"
            icon="fa-screwdriver-wrench"
          />
          <NavigationItem href="/rss.xml" title="RSS" icon="fa-rss" />
        </NavigationList>
      </nav>
    </>
  );
}
