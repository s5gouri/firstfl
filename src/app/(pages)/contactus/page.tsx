/*eslint-disable*/

import Image from "next/image";
import mycss2 from "@/css/Contact.moule.css";
import "@/app/globals.css";
import JotFormEmbedonlyText from "@/components/JotFormEmbedonlyText";
export default function Page() {
  return (
    <div>
      <div className={`container-fluid ${mycss2.h}`}>
        <div className="row">
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
      <div className="container-fluid">
        <div className={`row  }`}>
          <div className={`col-12  mt-4`}>
            <h1 className="text-center ft fw-bolder">Contact Us</h1>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 centre text-center flex-column fs-5 mt-4">
            <div className="text-start  fw-bolder ps-2 bg-">Email:</div>
            agpackagingindia@gmail.com , agpackagingindia@gmail.com
          </div>
          <div className="col-12 centre mt-4 fs-5">
            <div className="text-center centre fw-bolder ps-2">Phone : </div>
            <div className=" text-center flex-wrap">
              +91-11-41645062 (100 Lines)
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-12">
            <h1 className="centre fs-5 fw-bolder">
              Website:
              <a
                href="http://www.agpackagingindia.com"
                className="text-primary"
              >
                www.agpackagingindia.com
              </a>
            </h1>
          </div>
        </div>
        <div className="row mt-4 mb-4" style={{ backgroundColor: "#dfdfdf" }}>
          <div className="col-md-6 mb-3">
            <div
              className="add ms-2 flex-column"
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "centre",
              }}
            >
              <div
                className="heading ft mb-4"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                MFG. Unit
              </div>
              <div className="mt-4 mb-4" style={{ opacity: "0.5" }}>
                B-95/1 Naraina indl. area , phase-1 , new delhi- 110028 India
              </div>
              <div
                className="mt-4 mb-4"
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                Contact Details
              </div>
              <div
                className="mt-4"
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                Name: Mr. Navank Arora
              </div>
              <div
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                Phone : 9711416164
              </div>
              <div
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                Name : Mr. Shashank Arora
              </div>
              <div
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                Phone : 9971965924
              </div>
            </div>
          </div>
          <div className="col-md-6 centre">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.520080368313!2d77.12417077199795!3d28.6333578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033ae72d5193%3A0xf9eb2e38b828c951!2sPrintworx%20India!5e0!3m2!1sen!2sin!4v1727914737615!5m2!1sen!2sin"
              style={{ border: "0", height: "400px", width: "90%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <JotFormEmbedonlyText />
        </div>
      </div>
    </div>
  );
}
