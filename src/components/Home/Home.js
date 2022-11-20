import Navbar from "../../components/Navbar/Navbar";
import classes from "./Home.module.css";
import Product from "../products/Products";
import Contact from "../../components/ContactUs/Contact";
import image1 from "../../assets/soalarPanel-01.jpeg";
import form_img from "../../assets/Work.jpg";
import Form from "../../components/FormEnquiry/Form";
import Sites from "../../components/Sites/Sites";
import site1 from "../../assets/site1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div class="">
      <div className={`${classes.topImageClass}  z-0`}>
        <div className={`${classes.belowDiv} pt-4 `}>
          <Navbar />
          <div className="flex flex-col justify-center items-center h-4/5  ">
            <div class="font-extrabold px-3 text-3xl md:text-5xl flex flex-col gap-3 text-white ">
              <div
                className={`${classes.textShadow} animate__animated animate__fadeInLeft`}
              >
                Welcome to...
              </div>
              <div
                className={`${classes.textShadow} animate__animated animate__fadeInLeft`}
              >
                Galaxy Solar Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <Product
            name="apple"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
          <Product
            name="orange"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
          <Product
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
          <Product
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
          <Product
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
          <Product
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgP={image1}
          />
        </div>
      </div>
      {/*Sites section starts here */}
      <div>
        <div
          className={` flex justify-center py-24 text-5xl bg-slate-100	text-white ${classes.ourSite}` } id="site_sec"
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
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgS={site1}
          />

          <Sites
            name="afjkadsf"
            description="sourjfadkfjkajds      kfhdasfj kadshfkjadsh fjadhfj hadsjfhjadhdsafjh"
            imgS={site1}
          />
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
          <Form />
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
