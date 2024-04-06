import React from "react";
import { NavListType, Navbar } from "@repo/ui";

const navList: NavListType[] = [
  { value: "Home", url: "/" },
  { value: "Add Report", url: "/doctor/add-report" },
  { value: "Verify Report", url: "/doctor/varify-report" },
  { value: "Patient Report", url: "/doctor/patient-report" }
]

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="relative min-h-screen w-full">
        <video
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-100 brightness-50"
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          <source src="/a.mp4" type="video/mp4" />
        </video>

        <Navbar navList={navList} title="Blockefy" />
        <div className="mt-28 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1 m-20">
            <h1
              style={{
                color: "white",
                marginBottom: "1rem",
                fontSize: 70,
                fontFamily: "Tahoma, Geneva, sans-serif",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              <span className="animate-letter">W</span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.1s" }}
              >
                e
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.2s" }}
              >
                l
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.3s" }}
              >
                c
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.4s" }}
              >
                o
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.5s" }}
              >
                m
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.6s" }}
              >
                e
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.7s" }}
              >
                {" "}
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.8s" }}
              >
                t
              </span>
              <span
                className="animate-letter"
                style={{ animationDelay: "0.9s" }}
              >
                o
              </span>
              <span className="animate-letter" style={{ animationDelay: "1s" }}>
                {" "}
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.1s" }}
              >
                B
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.2s" }}
              >
                l
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.3s" }}
              >
                o
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.4s" }}
              >
                c
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.5s" }}
              >
                k
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.6s" }}
              >
                e
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.7s" }}
              >
                f
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.8s" }}
              >
                i
              </span>
              <span
                className="animate-letter"
                style={{ color: "green", animationDelay: "1.8s" }}
              >
                !
              </span>
            </h1>

            <h1
              style={{
                color: "white",
                marginBottom: "1rem",
                fontSize: 50,
                fontFamily: "Bookman Old Style, serif",
              }}
            >
              Connecting Healthcare with Innovation
            </h1>
            <p
              className="text-lg text-white mb-7 md:pr-16 xl:pr-28"
              style={{ fontFamily: "Times New Roman, serif", fontSize: 20 }}
            >
              Experience seamless access to your medical records
            </p>

            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row mb-5">
              <a
                className="!bg-white text-black rounded-lg py-3 px-6 flex justify-center items-center gap-3"
                href="./login"
                style={{ fontFamily: "Tahoma, Geneva, sans-serif" }}
              >
                Login
              </a>
            </div>
          </div>
          <div className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-30 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-[-1rem]">
            <img
              src="doc1.png"
              alt="Document Image"
              style={{ height: "500px", width: "500px", objectFit: "cover" }}
              className="-translate-x-10"
            />
          </div>
        </div>
        <div
          style={{ width: "45%", height: "100%" }}
          className="mx-3 lg:mx-10 mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md translate-x-[770px] -translate-y-80"
        >
          <div>
            <div className="flex justify-left">
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{
                  fontSize: 30,
                  fontFamily: "Trebuchet MS, sans-serif",
                  color: "green",
                }}
              >
                Healthcare
              </h3>
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ fontSize: 30, fontFamily: "Trebuchet MS, sans-serif" }}
              >
                App
              </h3>
            </div>
            <p
              className="text-gray-500 font-normal"
              style={{
                textAlign: "justify",
                width: "100%",
                fontFamily: "Times New Roman, serif",
              }}
            >
              At Blockify we Pioneering Healthcare Solutions with Blockchain
              Technology to increase security. Our platform leverages blockchain
              to revolutionize healthcare, empowering patients, optimizing
              processes, and ensuring secure and transparent medical record
              management for all.
            </p>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="container py-240 sm:py-3"
      >
        <div className="bg-muted/50  py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              alt=""
              className="w-[300px] object-contain rounded-lg"
              src="cap2.png"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <div className="flex justify-center">
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      fontSize: 60,
                      fontFamily: "Trebuchet MS, sans-serif",
                      color: "green",
                    }}
                  >
                    About &nbsp;
                  </h2>
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      fontSize: 60,
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    Us
                  </h2>
                </div>

                <br />
                <p
                  className="text-xl text-muted-foreground mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We aim to transform the healthcare industry by leveraging the
                  power of blockchain technology. Our mission is to provide
                  secure, transparent, and efficient solutions for managing
                  medical records, ensuring patient privacy and trust.
                </p>
                <h2
                  className="text-xl text-muted-foreground mt-4 "
                  style={{ fontWeight: "bold" }}
                >
                  Why Blockchain?
                </h2>
                <p
                  className="text-xl text-muted-foreground mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Blockchain technology offers unparalleled security and
                  transparency, making it ideal for storing sensitive medical
                  data. By decentralizing data storage and enabling immutable
                  record-keeping, we can revolutionize how healthcare
                  information is managed and accessed.
                </p>
                <h2
                  className="text-xl text-muted-foreground mt-4"
                  style={{ fontWeight: "bold" }}
                >
                  Our Team
                </h2>
                <p
                  className="text-xl text-muted-foreground mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Meet the dedicated professionals behind our platform. Our team
                  consists of experts in healthcare, blockchain technology, and
                  software development, working together to create innovative
                  solutions that improve patient outcomes and streamline
                  healthcare processes.
                </p>
              </div>
              {/* <div className="flex justify-center items-center mt-4">
  <img src="/instagram.svg" alt="Instagram" className="w-10 h-10 mr-4" />
  <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
