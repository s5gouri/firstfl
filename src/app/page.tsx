import Image from "next/image";
import styles from "@/css/Simple.module.css"; // Adjust path based on your project structure
import OurClients from "@/components/OurClients";
import "@/app/globals.css";
export default function Home() {
  return (
    <div>
      <div className={`container-fluid ${styles.h}`}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={"/test.png"}
                height={700}
                width={1500}
                alt="hii"
                className="img-fluid"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.centeredText}`}
              >
                <h2>First slide label</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={"/test.png"}
                height={700}
                width={1500}
                alt="hii"
                className="img-fluid"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.centeredText}`}
              >
                <h2>Second slide label</h2>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={"/test.png"}
                height={700}
                width={1500}
                alt="hii"
                className="img-fluid"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.centeredText}`}
              >
                <h2>Third slide label</h2>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-6 mt-3">
            <div
              className={`text-center ft ${styles.textTransition} ${styles.heada1}`}
            >
              India’s leading sustainable packaging company
            </div>
          </div>
          <div className="col-md-6 flex-column">
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Innovative player in the flexible packaging industry
            </div>{" "}
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Leader in the paperboard packaging industry{" "}
            </div>{" "}
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Over 30 years of consistent growth{" "}
            </div>{" "}
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Over $140million in annual turnover{" "}
            </div>{" "}
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Pan-India manufacturing base
            </div>{" "}
            <div className="p-3 opacity-50 fs-4  border-bottom border-3">
              Innovative player in the flexible packaging industry
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4 mt-4">
          <Image
            src={"/TEST1.png"}
            height={400}
            width={1300}
            alt="hii"
            className="img-fluid"
          />
        </div>
        <div className="row mb-4 mt-4">
          <div className="col-12">
            <h1
              className={`text-center ft fw-bolder mb-4  ${styles.textTransition}`}
            >
              Some Of Our Clients
            </h1>
          </div>
          <div className="col-12">
            <OurClients />
          </div>
        </div>
      </div>
    </div>
  );
}
