/* eslint-disable */
import mycss2 from "@/css/Contact.moule.css";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/css/Products.module.css"; // Assuming you have custom styles

import mycss1 from "@/css/About.module.css";
export default function Page() {
  return (
    <div>
      <div className="container-fluid mb-4">
        <div className="row mb-4">
          <div className="d-flex justify-content-center">
            <Image
              src={"/test.png"}
              height={500}
              width={1500}
              alt="hii"
              className={`${mycss2.responsiveImage} mb-3`}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row centre">
          <div className="col-10">
            <h1
              className={`text-start text-danger textTransition  ${mycss1.hed}`}
            >
              We are pleased to introduce ourselves as a Leading Printing House
              based in North India since over two decades
            </h1>
          </div>
          <div className="col-9 flex-column">
            <div className={`text-start mb-4 mt-4  ${mycss1.simple}`}>
              Our main focus/expertise lies in commertial Printing , Packaging
              along with Folding Carton Terminology across industries, mainly
              Pharmaceuticals , Liquor and Food and Beverages.
            </div>
            <div className={`text-start mb-4 mt-4  ${mycss1.simple}`}>
              We offer a full/Comprehencive range of packaging innovative
              solutions which turn an/any ordinary/raw pack into an attractive
              and valuable sales tool
            </div>
            <div className={`text-start mb-4 mt-4  ${mycss1.simple}`}>
              End-to-end services starting from printing on new materials till
              Add-on Printing / Packaging services are offered.
            </div>
            <div className={`text-start mb-4 mt-4  ${mycss1.simple}`}>
              New materials Printing includes services such as Merallized,
              Holographic and Transparent Substraits and Speciality Coatings
            </div>{" "}
            <div className={`text-start mb-4 mt-4  ${mycss1.simple}`}>
              Add-on services like Classic Foiling, Embossing and various
              coatings including the very latest Dripoff Effect.
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative">
        <div className="row">
          {/* Image */}
          <Image
            src={"/test.png"} // Replace with the correct path to your image
            height={400}
            width={1500}
            alt="Mission Image"
            className={`${mycss2.responsiveImage} mb-3`}
          />
          {/* Text Overlay */}
          <div
            className={`position-absolute top-50 start-50 translate-middle text-center ${styles.overlayText}`}
          >
            <div
              className={`text-white fw-bold fs-1 mb-4 mt-4 ${mycss1.a1}`} // Makes heading larger
            >
              Mission Statement
            </div>
            <p className="text-white fs-4 mb-3">
              {" "}
              {/* Makes middle content larger */}
              – We aspire to be India's most admired packaging company <br />
              – We aim to maintain and acquire customers and contribute to their
              success <br />
              – To drive long-term profitable growth <br />– To get it right the
              first time, every time!
            </p>
            <p className="text-white fw-bold fs-5">
              {" "}
              {/* Slightly smaller for footer */}
              Saket Kanoria <br />
              Managing Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
