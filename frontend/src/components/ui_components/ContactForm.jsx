import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const ContactForm = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  const location = useLocation();
  const {
    productId,
    productTitle,
    productDiscription,
    productImage,
    productPrice,
    productCategory,
  } = location.state || {};

  const [subject, setSubject] = useState("");

  useEffect(() => {
    setSubject(`${productTitle} - ${productId}-${formattedDate}`);
  }, [productId, productTitle, formattedDate]);

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content gap-4 lg:gap-8 flex-col lg:flex-row m-4 flex">
        {location.state ? (
          <>
            <div className="card h-[475px] bg-base-200 w-full shrink-0 shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 basis-1/2 justify-center flex items-center">
              <div className="card-body w-full flex flex-col justify-center items-center">
                <fieldset className="fieldset flex flex-col gap-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="floating-label basis-1/2">
                      <input
                        type="text"
                        className="input rounded-2xl w-full"
                        placeholder="Full Name"
                      />
                      <span>Full Name</span>
                    </label>

                    <label className="floating-label basis-1/2">
                      <input
                        type="tel"
                        className="input rounded-2xl w-full"
                        placeholder="Contact Number"
                      />
                      <span>Contact Number</span>
                    </label>
                  </div>

                  <label className="floating-label">
                    <input
                      type="email"
                      className="input rounded-2xl w-full"
                      placeholder="Email Address"
                    />
                    <span>Email Address</span>
                  </label>

                  <label className="floating-label">
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      name="Subject"
                      type="text"
                      className="input rounded-2xl w-full"
                      placeholder="Subject"
                      disabled
                    />
                    <span>Subject</span>
                  </label>

                  <label className="floating-label">
                    <textarea
                      className="textarea rounded-2xl w-full h-[150px] leading-relaxed"
                      placeholder="Message"
                    />
                    <span>Message</span>
                  </label>

                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn rounded-2xl btn-wide btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="lg:h-[475px] drop-shadow-2xl dark:drop-shadow-none drop-shadow-neutral-400 card overflow-hidden basis-1/2 border-0 dark:border-1 border-neutral-800 shrink-0">
              <img
                className="h-full w-full object-cover"
                src={productImage}
                alt={productTitle}
              />
            </div>
          </>
        ) : (
          <>
            <div className="card h-[475px] bg-base-200 w-full shrink-0 shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 basis-1/2 justify-center flex items-center">
              <div className="card-body w-full flex flex-col justify-center items-center">
                <fieldset className="fieldset flex flex-col gap-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="floating-label basis-1/2">
                      <input
                        type="text"
                        className="input rounded-2xl w-full"
                        placeholder="Full Name"
                      />
                      <span>Full Name</span>
                    </label>

                    <label className="floating-label basis-1/2">
                      <input
                        type="tel"
                        className="input rounded-2xl w-full"
                        placeholder="Contact Number"
                      />
                      <span>Contact Number</span>
                    </label>
                  </div>

                  <label className="floating-label">
                    <input
                      type="email"
                      className="input rounded-2xl w-full"
                      placeholder="Email Address"
                    />
                    <span>Email Address</span>
                  </label>

                  <label className="floating-label">
                    <input
                      type="text"
                      className="input rounded-2xl w-full"
                      placeholder="Subject"
                    />
                    <span>Subject</span>
                  </label>

                  <label className="floating-label">
                    <textarea
                      className="textarea rounded-2xl w-full h-[150px] leading-relaxed"
                      placeholder="Message"
                    />
                    <span>Message</span>
                  </label>

                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn rounded-2xl btn-wide btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex justify-center items-center lg:h-[475px] w-full drop-shadow-2xl dark:drop-shadow-none drop-shadow-neutral-400 card overflow-hidden basis-1/2 border-0 shrink-0">
              <svg
                className="w-full h-auto object-cover"
                version="1.1"
                viewBox="0 0 59.093 34.243"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    id="b"
                    x="-.18589"
                    y="-.28624"
                    width="1.314"
                    height="1.7017"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-color="rgb(0,0,0)"
                      flood-opacity=".25098"
                      in="SourceGraphic"
                      result="flood"
                    />
                    <feGaussianBlur
                      in="SourceGraphic"
                      result="blur"
                      stdDeviation="0.700000"
                    />
                    <feOffset
                      dx="-2.500000"
                      dy="2.500000"
                      in="blur"
                      result="offset"
                    />
                    <feComposite
                      in="flood"
                      in2="offset"
                      operator="in"
                      result="comp1"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="comp1"
                      result="fbSourceGraphic"
                    />
                    <feColorMatrix
                      in="fbSourceGraphic"
                      result="fbSourceGraphicAlpha"
                      values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                    />
                    <feFlood
                      flood-color="rgb(0,0,0)"
                      flood-opacity=".25098"
                      in="fbSourceGraphic"
                      result="flood"
                    />
                    <feGaussianBlur
                      in="fbSourceGraphic"
                      result="blur"
                      stdDeviation="0.700000"
                    />
                    <feOffset
                      dx="-2.500000"
                      dy="2.500000"
                      in="blur"
                      result="offset"
                    />
                    <feComposite
                      in="flood"
                      in2="offset"
                      operator="in"
                      result="comp1"
                    />
                    <feComposite
                      in="fbSourceGraphic"
                      in2="comp1"
                      result="comp2"
                    />
                  </filter>
                  <filter
                    id="a"
                    x="-.35257"
                    y="-.17293"
                    width="1.5253"
                    height="1.526"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-color="rgb(0,0,0)"
                      flood-opacity=".24706"
                      in="SourceGraphic"
                      result="flood"
                    />
                    <feGaussianBlur
                      in="SourceGraphic"
                      result="blur"
                      stdDeviation="1.000000"
                    />
                    <feOffset
                      dx="-2.500000"
                      dy="2.500000"
                      in="blur"
                      result="offset"
                    />
                    <feComposite
                      in="flood"
                      in2="offset"
                      operator="in"
                      result="comp1"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="comp1"
                      result="comp2"
                    />
                  </filter>
                </defs>
                <g
                  transform="translate(-18.862 -22.33)"
                  filter="url(#b)"
                  stroke-width="0"
                >
                  <path d="m27.222 28.095v13.868h3.3786v-6.1242l4.6622 6.1242h4.1289l-5.5712-7.0724 5.5764-6.796h-4.1357l-4.6607 6.0849v-6.0849z" />
                  <path d="m56.697 28.095v13.868h-3.3782v-8.3171l-3.1016 8.3171h-2.7263l-3.1214-8.3369v8.3369h-3.3782v-13.868h3.9906l3.8919 9.6012 3.8523-9.6012z" />
                  <g filter="url(#a)">
                    <path
                      d="m68.575 36.831q0 0.66703-0.35171 1.237-0.33958 0.55788-1.0187 0.92171-0.66703 0.35171-1.5887 0.38809v0.98235h-0.77618v-0.99448q-1.2855-0.10915-2.0739-0.76405-0.78831-0.66703-0.83682-1.807h2.2073q0.07277 0.72767 0.70341 0.93384v-1.9162q-0.94597-0.24256-1.516-0.47298-0.55788-0.23043-0.98235-0.7398-0.42447-0.50937-0.42447-1.3947 0-1.1036 0.81256-1.7707 0.82469-0.66703 2.1102-0.75192v-0.98235h0.77618v0.98235q1.2734 0.09702 2.0132 0.7398 0.7398 0.64277 0.82469 1.7828h-2.2194q-0.07277-0.6549-0.61852-0.84895v1.8798q1.0066 0.27894 1.5524 0.49724t0.97022 0.72767q0.4366 0.49724 0.4366 1.3704zm-4.463-3.7232q0 0.3032 0.18192 0.50937 0.19404 0.20617 0.54575 0.36383v-1.6858q-0.33958 0.06064-0.53362 0.26681-0.19404 0.19404-0.19404 0.54575zm1.5038 4.6571q0.36383-0.06064 0.57001-0.29107 0.2183-0.23043 0.2183-0.57001 0-0.31532-0.20617-0.50937-0.19404-0.20617-0.58213-0.35171z"
                      fill="none"
                      aria-label="$"
                    />
                    <path
                      className="fill-primary"
                      d="m65.265 28.09c-1.274 0-2.4449 0.29585-3.513 0.8878-1.0552 0.59195-1.898 1.416-2.5285 2.4712-0.61768 1.0552-0.92656 2.2449-0.92656 3.5703 0 1.3254 0.30887 2.5224 0.92656 3.5905 0.63055 1.0552 1.4733 1.8787 2.5285 2.4707 1.0681 0.59195 2.239 0.88832 3.513 0.88832s2.4392-0.29637 3.4944-0.88832 1.8912-1.4154 2.5089-2.4707c0.61768-1.0681 0.92656-2.265 0.92656-3.5905 0-1.3254-0.30888-2.5151-0.92656-3.5703-0.60482-1.0552-1.4408-1.8792-2.5089-2.4712-1.0552-0.59195-2.2204-0.8878-3.4944-0.8878zm-0.42581 1.6092h0.77618v0.98237c0.84895 0.06468 1.5201 0.31149 2.0133 0.74001 0.4932 0.42852 0.76816 1.0223 0.82476 1.7823h-2.2195c-0.04851-0.4366-0.25474-0.71916-0.61857-0.84853v1.8795c0.67107 0.18596 1.1885 0.35159 1.5524 0.49713s0.6875 0.38854 0.97048 0.72812c0.29107 0.33149 0.43667 0.78832 0.43667 1.3705 0 0.44469-0.11745 0.85661-0.35192 1.2366-0.22638 0.37192-0.56577 0.67935-1.0185 0.92191-0.44469 0.23447-0.97458 0.36384-1.5891 0.38809v0.98237h-0.77618v-0.99425c-0.85703-0.072768-1.5482-0.32769-2.0738-0.7643-0.52554-0.44469-0.8043-1.0471-0.83664-1.8071h2.2071c0.04851 0.48511 0.28289 0.79634 0.70332 0.93379v-1.9162c-0.63065-0.1617-1.1357-0.31922-1.5157-0.47284-0.37192-0.15362-0.69939-0.40043-0.98237-0.74001s-0.42478-0.80453-0.42478-1.3947c0-0.73575 0.27116-1.3257 0.81287-1.7704 0.54979-0.44469 1.2529-0.6953 2.1099-0.75189zm0 2.5952c-0.22639 0.04043-0.40394 0.12972-0.5333 0.26717-0.12936 0.12936-0.1943 0.31123-0.1943 0.5457 0 0.20213 0.06062 0.37156 0.1819 0.50901 0.12936 0.13745 0.31123 0.25869 0.5457 0.3638zm0.77618 3.7476v1.7224c0.24256-0.04043 0.43254-0.13784 0.56999-0.29146 0.14553-0.15362 0.21859-0.3436 0.21859-0.56999 0-0.21022-0.06874-0.37965-0.20619-0.50901-0.12936-0.13745-0.32367-0.25489-0.58239-0.35192z"
                    />
                  </g>
                  <g transform="translate(.047588)">
                    <path d="m32.072 43.563c-0.36887 0-0.70797 0.08598-1.0172 0.25738-0.30553 0.17139-0.54965 0.4098-0.73222 0.71533-0.17885 0.30553-0.26812 0.65034-0.26812 1.0341 0 0.38378 0.08928 0.72998 0.26812 1.0392 0.18257 0.30553 0.42669 0.54394 0.73222 0.71533 0.30925 0.1714 0.64836 0.25738 1.0172 0.25738 0.14159 0 0.28692-0.01521 0.43596-0.04503l0.50298 0.67645h1.1569l-0.86065-1.0341c0.24219-0.18257 0.43025-0.41147 0.56439-0.68719 0.13786-0.27945 0.20672-0.58672 0.20672-0.92205 0-0.38378-0.08928-0.72858-0.26812-1.0341-0.17512-0.30553-0.41734-0.54394-0.72659-0.71533-0.30553-0.1714-0.64273-0.25738-1.0116-0.25738zm0 0.86628c0.31298 0 0.56281 0.1045 0.74911 0.31315 0.19002 0.20493 0.28501 0.48088 0.28501 0.82739 0 0.34279-0.09498 0.61823-0.28501 0.82688-0.1863 0.20865-0.43612 0.31315-0.74911 0.31315-0.31671 0-0.56982-0.1026-0.75985-0.30752-0.1863-0.20865-0.27938-0.486-0.27938-0.83251 0-0.35024 0.09308-0.6281 0.27938-0.83302 0.19003-0.20493 0.44314-0.30752 0.75985-0.30752z" />
                    <path d="m35.618 43.563v2.3807q0 0.3571 0.17572 0.54983 0.17572 0.19272 0.51582 0.19272 0.3401 0 0.52149-0.19272 0.18139-0.19272 0.18139-0.54983v-2.3807h0.96928v2.375q0 0.53282-0.22673 0.90126-0.22673 0.36844-0.61218 0.5555-0.37978 0.18706-0.85025 0.18706t-0.84458-0.18139q-0.36844-0.18706-0.58384-0.5555-0.2154-0.37411-0.2154-0.90693v-2.375z" />
                    <path d="m39.624 43.563v4.0188h-0.97895v-4.0188z" />
                    <path d="m40.146 45.576q0-0.58456 0.25293-1.0398 0.25294-0.4609 0.7026-0.71384 0.45528-0.25856 1.0286-0.25856 0.7026 0 1.2028 0.37097t0.66887 1.0117h-1.0567q-0.11804-0.24731-0.33724-0.37659-0.21359-0.12928-0.489-0.12928-0.44404 0-0.71946 0.30914-0.27542 0.30914-0.27542 0.82625 0 0.51711 0.27542 0.82625 0.27542 0.30914 0.71946 0.30914 0.27542 0 0.489-0.12928 0.21921-0.12928 0.33724-0.37659h1.0567q-0.16862 0.64077-0.66887 1.0117-0.50025 0.36535-1.2028 0.36535-0.57332 0-1.0286-0.25293-0.44966-0.25856-0.7026-0.71384-0.25293-0.45528-0.25293-1.0398z" />
                    <path d="m44.597 43.563v4.0188h0.97906v-1.7747l1.351 1.7747h1.1965l-1.6145-2.0495 1.616-1.9694h-1.1984l-1.3506 1.7633v-1.7633z" />
                  </g>
                  <g transform="translate(-.047063)">
                    <path d="m49.578 45.576q0-0.58456 0.25293-1.0398 0.25294-0.4609 0.7026-0.71384 0.45528-0.25856 1.0286-0.25856 0.7026 0 1.2028 0.37097t0.66887 1.0117h-1.0567q-0.11804-0.24731-0.33724-0.37659-0.21359-0.12928-0.489-0.12928-0.44404 0-0.71946 0.30914-0.27542 0.30914-0.27542 0.82625 0 0.51711 0.27542 0.82625 0.27542 0.30914 0.71946 0.30914 0.27542 0 0.489-0.12928 0.21921-0.12928 0.33724-0.37659h1.0567q-0.16862 0.64077-0.66887 1.0117-0.50025 0.36535-1.2028 0.36535-0.57332 0-1.0286-0.25293-0.44966-0.25856-0.7026-0.71384-0.25293-0.45528-0.25293-1.0398z" />
                    <path d="m55.237 43.563-1.454 4.0187h1.0247l0.24059-0.70971h1.5001l0.24006 0.70971h1.0363l-1.454-4.0187zm0.56137 1.0819 0.49795 1.4713h-0.99065z" />
                    <path d="m59.615 47.564q-0.42848 0-0.76792-0.13912t-0.54533-0.41178q-0.20033-0.27266-0.21146-0.65662h1.0128q0.02226 0.21702 0.15024 0.33388 0.12799 0.11129 0.33388 0.11129 0.21146 0 0.33388-0.0946 0.12242-0.10016 0.12242-0.27266 0-0.14468-0.10016-0.23928-0.0946-0.0946-0.23928-0.15581-0.13912-0.06121-0.40065-0.13912-0.37839-0.11686-0.61767-0.23371-0.23928-0.11686-0.41178-0.345-0.1725-0.22815-0.1725-0.59541 0-0.54533 0.39509-0.85138 0.39509-0.31162 1.0295-0.31162 0.64549 0 1.0406 0.31162 0.39509 0.30605 0.42291 0.85695h-1.0295q-0.01113-0.1892-0.13912-0.29492-0.12799-0.11129-0.32831-0.11129-0.1725 0-0.27823 0.0946-0.10573 0.08903-0.10573 0.26154 0 0.1892 0.17807 0.29492 0.17807 0.10573 0.55646 0.22815 0.37839 0.12799 0.61211 0.24484 0.23928 0.11686 0.41178 0.33944 0.1725 0.22258 0.1725 0.57315 0 0.33388-0.1725 0.60654-0.16694 0.27266-0.48969 0.43404-0.32275 0.16137-0.76235 0.16137z" />
                    <path d="m65.155 43.563v4.0188h-0.97895v-1.6545h-1.5228v1.6545h-0.97895v-4.0188h0.97895v1.5743h1.5228v-1.5743z" />
                  </g>
                </g>
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
