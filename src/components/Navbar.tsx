import Link from "next/link";
import mycss1 from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className={`z-3 navbar navbar-expand-lg bg-body-light bg-light ${mycss1.h}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src={"/logo.png"} height={50} width={100} alt="hii" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/aboutus"
              >
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Group Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/customorders"
              >
                Custom Order
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/contactus"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
