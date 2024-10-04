import Image from "next/image";
import styles from "@/css/Products.module.css"; // Assuming you have custom styles
import "@/app/globals.css"; // Assuming you have global styles
export default function Page() {
  return (
    <div>
      <div className="container-fluid position-relative">
        <div className="row">
          {/* Image */}
          <Image
            src={"/test.png"}
            height={400}
            width={1500}
            alt="hii"
            className="img-fluid w-100 mb-3"
          />
          {/* Text Overlay */}
          <div
            className={`position-absolute top-50 start-50 translate-middle text-center ${styles.overlayText}`}
          >
            <h1 className="text-white display-1 fw-bold textTransition">
              Products We Offer
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Folding Cartons and Fluorescent cartons
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Blister Packs
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Pillows
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Catalogues
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Brouchers
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Wallet Packs
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Luxury Rigid Boxes
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Display-cum-Dispensers
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Gift/Fancy Boxes
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Paper/Board carry Bags
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              Self Adhesive Labels
            </h1>
          </div>
        </div>
        <div className="row centre">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-center   textTransition ${styles.a1}`}>
              A pan-india presence. Supplying to FMCG, Food & Beverage, Liquor,
              Pharmaceuticals and other industries
            </h1>
          </div>
        </div>{" "}
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
        <div className="row centre border-bottom border-2">
          <div className="col-md-5 mt-4 mb-2">
            <h1 className={`text-start fw-bold   textTransition ${styles.a2} `}>
              Monocartoons
            </h1>
            <h1 className={`text-start    ${styles.a3}`}>
              Highest quality machinery & process makes us India’s leading
              carton packaging company
            </h1>
          </div>
          <div className="col-md-5 mt-4 mb-2">
            <Image
              src={"/prod1.png"}
              height={400}
              width={100}
              alt="hii"
              className="img-fluid w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row centre">
          <div className="col-10 mt-4 mb-2">
            <h1 className="text-center ft fw-bolder textTransition">
              And Many More Services...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
