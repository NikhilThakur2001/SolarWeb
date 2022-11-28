import Navbar from "../../components/Navbar/Navbar";
import classes from "./Home.module.css";
import Product from "../products/Products";
import Contact from "../../components/ContactUs/Contact";
import image1 from "../../assets/8va_inverter.png";
import image2 from "../../assets/10va_inverter.png";
import image3 from "../../assets/mppt.png";
import image4 from "../../assets/3p_mppt.png";
import image5 from "../../assets/tubular_primary.png";
import { Dropdown } from "flowbite-react";


import form_img from "../../assets/Work.jpg";
import NameForm from "../../components/FormEnquiry/Form";
import Sites from "../../components/Sites/Sites";
import site1 from "../../assets/site1.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Home = () => {
  return (
    <div class="">
      {/*Nvabar section starts here*/}
      <div className={`${classes.topImageClass}  z-0`}>
        <div className={`${classes.belowDiv} pt-4 `}>
          <Navbar />
          <div className="flex flex-col justify-center items-center h-4/5  ">
            <div
              class="font-extrabold 
            px-3 text-3xl md:text-7xl flex flex-col gap-3 text-white "
            >
              <div
                className={`${classes.textShadow} animate__animated animate__fadeInLeft`}
              >
                Welcome to...
              </div>
              <div
                className={`${classes.textShadow} animate__animated animate__fadeInLeft`}
              >
                Galaxy Solar India
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Product Section starts here */}
      <div className="flex flex-col item-center justify-center" id="prod_sec">
        <div
          className={` flex justify-center py-24 text-5xl bg-slate-800	text-white ${classes.ourProduct} `}
        >
          <span class="animate__animated animate__fadeInLeft">
            Our Products
          </span>
        </div>
        <div
          className={`${classes.productSection} flex flex-row justify-evenly item-center flex-wrap gap-12 py-12 `}
        >
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                MICRO Inverters / UPS
                <br />
                (800VA - 1200VA)
              </h1>
            </span>
          </div>
          <div className={`flex justify-center w-screen items-center ${classes.customDrop}`} >
            <Dropdown
              className={`${classes.productDescriptionDrop} py-2 px-5`}
              id="productDescriptionDrop"
              label="Product Description"
              dismissOnClick={false}
              color="light"
              size={"medium"}
            >
              <Dropdown.Item>Product description</Dropdown.Item>
            </Dropdown>
          </div>
          <Product name="800VA 12V Inverter" description=" " imgP={image1} />
          <Product name="1000VA 12V Inverter" description=" " imgP={image1} />
          <Product name="1200VA 12V Inverter" description=" " imgP={image1} />
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                Solar PWM Home UPS/Inverter range
                <br />
                (1000VA - 3500VA)
              </h1>
            </span>
          </div>
          <Product name="1000VA 12V Inverter" description=" " imgP={image2} />
          <Product name="1500VA 12V Inverter" description=" " imgP={image2} />
          <Product name="1500VA 24V Inverter" description=" " imgP={image2} />
          <Product name="2000VA 24V Inverter" description=" " imgP={image2} />
          <Product name="2500VA 24V Inverter" description=" " imgP={image2} />
          <Product name="3500VA 24V Inverter" description=" " imgP={image2} />
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                Solar PWM Industrial Inverter/UPS range
                <br />
                (3.5K VA - 20K VA)
              </h1>
            </span>
          </div>
          <Product name="3.5K VA 48V Inverter" description=" " imgP={image2} />
          <Product name="4.5K VA 48V Inverter" description=" " imgP={image2} />
          <Product name="6K VA 48V Inverter" description=" " imgP={image2} />
          <Product name="6K 96V Inverter" description=" " imgP={image2} />
          <Product name="8K 96V Inverter" description=" " imgP={image2} />
          <Product name="8K 120V Inverter" description=" " imgP={image2} />
          <Product name="10K VA 120V Inverter" description=" " imgP={image2} />
          <Product name="10K VA 180V Inverter" description=" " imgP={image2} />
          <Product name="15K VA 240V Inverter" description=" " imgP={image2} />
          <Product name="20K VA 360V Inverter" description=" " imgP={image2} />
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                MPPT Solar Hybrid PCU
                <br />
                (3K VA - 20K VA)
              </h1>
            </span>
          </div>
          <Product name="3K VA 24V Inverter" description=" " imgP={image3} />
          <Product name="3K VA 48V Inverter" description=" " imgP={image3} />
          <Product name="4K VA 48V Inverter" description=" " imgP={image3} />
          <Product name="5K VA 48V Inverter" description=" " imgP={image3} />
          <Product name="5K VA 96V Inverter" description=" " imgP={image3} />
          <Product name="7.5K VA 96V Inverter" description="" imgP={image3} />
          <Product name="7.5K VA 120V Inverter" description="" imgP={image3} />
          <Product name="10K VA 120V Inverter" description=" " imgP={image3} />
          <Product name="15K VA 240V Inverter" description=" " imgP={image3} />
          <Product name="20K VA 360V Inverter" description="" imgP={image3} />
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                3 Phase MPPT Solar PCU
                <br />
                (10K VA - 40K VA)
              </h1>
            </span>
          </div>
          <Product name="10K VA 120V, Inverter" description=" " imgP={image4} />
          <Product name="10K VA 180V Inverter" description=" " imgP={image4} />
          <Product name="15K VA 240V Inverter" description=" " imgP={image4} />
          <Product name="20K VA 360V Inverter" description=" " imgP={image4} />
          <Product name="30K VA 360V Inverter" description="" imgP={image4} />
          <Product name="40K VA 360V Inverter" description=" " imgP={image4} />
          <div>
            <span class="flex justify-center w-screen p-8 text-center text-5xl bg-transparent text-white">
              <h1>
                Tall Tubular Bat teries
                <br />
                (150 AH - 300 AH)
              </h1>
            </span>
          </div>
          <Product
            name="150 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="165 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="180 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="200 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="230 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="260 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
          <Product
            name="300 AH Tubular Battery"
            description=" "
            imgP={image5}
          />
        </div>
      </div>
      {/*Sites section starts here */}
      <div>
        <div
          className={` flex justify-center py-24 text-5xl bg-slate-100	text-white ${classes.ourSite}`}
          id="site_sec"
        >
          <div>
            <div
              className={` flex justify-center pt-12 pb-5 text-5xl	text-slate-700 `}
            >
              <span class="animate__animated animate__zoomIn">Our Sites</span>
            </div>
          </div>
        </div>
        <div
          className={`${classes.siteSection} flex flex-col justify-center item-center flex-wrap gap-12 py-12 `}
        >
          <Sites
            name="Galaxy Solar India - Pune Branch"
            description="Saras Plaza, Talegaon Dabhade Station, Dist. Pune, 410507"
            imgS={site1}
          />

          <Sites name="More Sites Coming Soon" description=" " imgS={site1} />
        </div>
      </div>
      {/*Form Section starts here*/}
      <div>
        <div id="enquiry_sec">
          <div
            className={` flex justify-center pt-16 pb-5 text-5xl	text-slate-700 `}
          >
            <span class="animate__animated animate__zoomIn">Let's Connect</span>
          </div>
          <div className={` flex justify-center py-5 text-3xl	text-slate-500 `}>
            <span class="animate__animated animate__zoomIn">
              Make an enquiry
            </span>
          </div>
        </div>
        <div className="flex flex-row  justify-evenly gap-20 md:mx-auto py-6 w-3/5 ">
          <NameForm />
          <div className="w-2/5 animate__animated animate__fadeInRight">
            <img src={form_img} alt="form-image" />
          </div>
        </div>
      </div>
      {/*Contact Section starts here*/}
      <div id="contact_sec">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
