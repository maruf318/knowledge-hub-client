import pic from "../../src/assets/book-plant.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <span className="">
          <img src={pic} alt="" />
        </span>
        <p className="font-bold">
          KnowledgeHub <br />
          Providing reliable books since 1989
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl">
            <FaXTwitter></FaXTwitter>
          </a>
          <a className="text-2xl">
            <FaFacebook></FaFacebook>
          </a>
          <a className="text-2xl">
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
