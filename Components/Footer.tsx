import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#8acce0] text-black">
            <hr className="border-t border-black my-4" />

      <div className="py-4 px-4 flex flex-col m-4">
        <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mb-2">
          <div className="sub_footer-links-div">
            <h3 className="font-bold leading-5 mb-1">Platform Name</h3>
            <Link className="text-sm" href={`/`}>
              Home
            </Link>
            <br />
            <Link className="text-sm" href={`/`}>
              About Us
            </Link>
            <br />
            <Link className="text-sm" href={`/`}>
              Services
            </Link>
          </div>
          <div className="sub_footer-links-div">
            <h3 className="font-bold leading-5 mb-1">Resources</h3>
            <Link className="text-sm" href={`/`}>
              Testimonials
            </Link>
            <br />
          </div>
          <div className="sub_footer-links-div">
            <h3 className="font-bold leading-5 mb-1">Partners</h3>
            <Link className="text-sm" href={`https://theinnovationmaster.com/`}>
              The Innovation Masters
            </Link>
            <br />
          </div>
          <div className="w-[150px] m-1 flex justify-start flex-col text-black">
            <h3>Follow Us</h3>
            <div className="flex flex-row ">
              <p>
                <FaFacebook size={26} color="#000" />
              </p>
              <p>
                <FaInstagram size={26} color="#000" />
              </p>
              <p>
                <FaLinkedin size={26} color="#000" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          color: "#000000",
          paddingBottom: 8,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} Your Educational Platform | All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
