import Link from "next/link";
import users from "./users"

export default function Home() {
  return (
  
    <div className="container">
      
      <nav>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <h1>Si Hazem</h1>
      
    </div>
  );
}
