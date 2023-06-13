import Link from "next/link";

export default function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/rendering/static-rendering'>Static Rendering</Link>
        </li>
        <li>
          <Link href='/rendering/server-side-rendering'>
            Server Side Rendering
          </Link>
        </li>
        <li>
          <Link href='/rendering/static-site-generation'>
            Static Site Generation
          </Link>
        </li>
      </ul>
    </div>
  );
}
