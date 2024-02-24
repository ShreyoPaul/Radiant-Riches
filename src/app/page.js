import styles from "./page.module.css";

import { GoInfo } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";

import card_img from '@/assets/card_img.png'
import Card from "@/components/Card";
import Relative_card from "@/components/Relative_card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import card_data from "@/data";
import { relative_card_data } from "@/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* NAVBAR  */}
        {/* <div className={styles.navbar_wrp}>
          <div className={styles.navbar}>
            <div className={styles.search_bar}>
              <div className={styles.search_logo}>
                <CiSearch />
              </div>
              <input type="text" />
            </div>
            <div className={styles.option_wrp} >
              <div className={styles.option}>Categories</div>
              <div className={styles.option}>Website Builders</div>
              <div className={styles.option}>Today's deals</div>
            </div>
          </div>
        </div> */}
        <Navbar />

        <div className={styles.main_body}>
          <div className={styles.section_1}>
            <div className={styles.section_heaading}>Best Website builders in the US</div>
            <hr className={styles.hr1} />
            <div className={styles.heading_dtls}>
              <div className={styles.heading_dtl_left}>
                <div className={styles.dtl_left_1}>
                  <div className={styles.dlts_icons}>
                    <CiCircleCheck />
                  </div>
                  <div>
                    Last Updated - February 22, 2020
                  </div>
                </div>
                <div className={styles.dtl_left_2}>
                  <div className={styles.dlts_icons}>
                    <GoInfo />
                  </div>
                  <div>
                    Advertising Disclosure
                  </div>
                </div>
              </div>
              <div className={styles.heading_dtl_right}>
                <div>Top Content</div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
            </div>
            <hr className={styles.hr1} />
            <div className={styles.tags}>
              <div className={styles.tag}>Tools</div>
              <div className={styles.tag}>AWS Builder</div>
              <div className={styles.tag}>Start Build</div>
              <div className={styles.tag}>Build Supplies</div>
              <div className={styles.tag}>Tooling</div>
              <div className={styles.tag}>BlueHosting</div>
            </div>
            <div className={styles.navigations}>
              <div className={styles.navigation_txt}>Home</div>
              <div className={styles.arrow}><FaGreaterThan /></div>
              <div className={styles.navigation_txt}>Hosting for all</div>
              <div className={styles.arrow}><FaGreaterThan /></div>
              <div className={styles.navigation_txt}>Hosting</div>
              <div className={styles.arrow}><FaGreaterThan /></div>
              <div className={styles.navigation_txt}>Hosting6</div>
              <div className={styles.arrow}><FaGreaterThan /></div>
              <div>Hosting5</div>
            </div>
          </div>

          {/* CARD CONTAINER  */}
          <div className={styles.section_2}>
            {/* <div className={styles.card}>
              <div className={styles.part1}>
                <div className={styles.best_choice}>
                  <div className={styles.trophy}><GoTrophy /></div>
                  <div>Best Choice</div>
                </div>
                <div className={styles.numbering}>2</div>
                <div className={styles.image_wrp}>
                  <Image src={card_img} alt="card_img" />
                  <div>Builder 1</div>
                </div>
              </div>
              <div className={styles.part2}>
                <div className={styles.part2_1}>
                  <span className={styles.heading_1}>WixPro 72-Inch Responsive Website Builder: </span>
                  Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)

                </div>
                <div className={styles.part2_2}>
                  <div className={styles.heading_2}>Main highlights</div>
                  <div className={styles.part2_txt}>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                  </div>
                  {
                    <div className={styles.color_list}>
                      <div className={styles.color_list_item}>
                        <span>9.9</span> Cool
                      </div>
                    </div>
                  }
                  {
                    <div className={styles.transparent_wrp}>
                      <div className={styles.transparent_h}>
                        Why we love it
                      </div>
                      <div className={styles.transparent_list_wrp}>
                        <div className={styles.transparent_list}>
                          <span className={styles.check}>
                            <FaCheck />
                          </span> Documentation
                        </div>
                      </div>
                    </div>
                  }

                </div>
                <div className={styles.show_more}>Show More</div>
              </div>
              <div className={styles.part3}>
                <div className={styles.rating_wrp}>
                  <div className={styles.rating}>9.1</div>
                  <div>Very Good</div>
                  <div className={styles.stars}>
                    <div className={styles.star}><FaStar /></div>
                    <div className={styles.star}><FaStar /></div>
                    <div className={styles.star}><FaStar /></div>
                    <div className={styles.star}><FaStar /></div>
                    <div className={styles.star}><FaStar /></div>
                  </div>
                </div>
                <div className={styles.view_button}>View</div>
              </div>
            </div> */}
            {
              card_data.map((data, idx) => {
                return <Card data={data} key={idx} num={idx + 1} />
              })
            }

          </div>

          {/* RELATED DEALS CARD  */}
          <div className={styles.section_3}>
            <div className={styles.sec3_heading}>Related deals you might like for</div>
            <div className={styles.related_card_container}>

              {/* <div className={styles.related_card}>
                <div className={styles.related_card_img_wrp} >
                  <Image src={card_img} alt={"card_img"} className={styles.related_card_img} />
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_tags}>
                    <div className={styles.card_tag}>
                      20% off
                    </div>
                    <div className={styles.card_tag}>
                      Limited time
                    </div>
                  </div>
                  <div className={styles.title}>
                    Webbuilder 1
                  </div>
                  <div className={styles.txt}>
                    Computer  Modern clasic with wix support
                  </div>
                  <div className={styles.price_wrp}>
                    <div className={styles.curr_price}>$39.96</div>
                    <div className={styles.prev_price}>$39.96</div>
                    <div className={styles.price_off}>(20% off)</div>
                  </div>
                  <div className={styles.view_deal}>View Deal</div>
                </div>
              </div> */}
              {
                relative_card_data.map((data, idx) => {
                  return <Relative_card data={data} key={idx} />
                })
              }

            </div>
          </div>

          {/* SIGNUP  */}
          <div className={styles.signup_wrp}>
            <div className={styles.signup_txt}>Sign up and get exclusive special deals</div>
            <div className={styles.signup}>Sign Up</div>
          </div>
        </div>

        {/* FOOTER  */}
        <Footer />

      </div>
    </main>
  );
}
