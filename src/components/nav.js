import Link from "next/link";

const linksData = [
  { href: "/", text: "Home" },
  {
    href: "/rendering/withldprovider",
    text: "withLdProvider",
  },
  { href: "/rendering/asyncldprovider", text: "AsyncLDProvider" },
  { href: "/rendering/ldprovider", text: "ldProvider" },
  { href: "/rendering/server-side-rendering", text: "Server Rendering" },
  { href: "/rendering/static-site-generation", text: "Static Generation" },
];

const NavLinks = function () {
  return linksData.map((link) => {
    return (
      <li key={`li-${link.text}`}>
        <Link key={`link-${link.text}`} href={link.href}>
          {link.text}
        </Link>
      </li>
    );
  });
};

export default function Nav() {
  return (
    <div className='nav'>
      <ul>
        <NavLinks />
      </ul>
    </div>
  );
}
