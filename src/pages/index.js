import React from 'react';
import Layout from '../components/Layout';
import LinkButton from '../components/common/LinkButton';
import StoreTabs from '../components/StoreTabs';
// import Testimonials from '../components/Testimonials';
import { Hero, Welcome, FamiliesDiv, EveryLife } from '../styles/HomeStyles';
import StoreFront from '../images/store-front.png';

export default function Index() {
  return (
    <Layout>
      {/* <Hero>
        <div className="inner">
          <h2>Every Life is Worth Remembering</h2>
          <p>
            Let us help tell a story that will reflect the spirit of your loved
            one.
          </p>
          <LinkButton slug="/contact">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule an Appointment
            </>
          </LinkButton>
        </div>
      </Hero> */}
      <Welcome>
        <div className="row">
          <div className="welcome-text">
            <h3>Welcome to Zabel Monmuments</h3>
            {/* <p>
              Serving East Central Wisconsin since 1970, Zabel Monuments has
              been bringing comfort and personalized memorials to generations of
              caring families. Three generations of the Zabel family have worked
              as the designers, engravers and stone carvers in the Green Bay,
              Manitowoc and Sheboygan areas.
            </p> */}
            <p>
              Serving East Central Wisconsin since 1970, Zabel Monuments has
              been bringing comfort and personalized memorials to generations of
              caring families. Let us help you tell a story that will reflect
              the spirit of your loved one.
            </p>
            <div className="links">
              <LinkButton slug="/why-choose-us">Why Choose Us?</LinkButton>
              <LinkButton slug="faq">Frequently Asked Questions</LinkButton>
            </div>
          </div>
          <div className="stores">
            <StoreTabs />
          </div>
        </div>
      </Welcome>
      {/* <FamiliesDiv>
        <div className="inner">
          <div className="img">
            <img src={StoreFront} alt="Zabel Monuments Store" />
          </div>
          <div className="text">
            <h3>Families Trust Zabel Monuments</h3>
            <p>
              Three generations of the Zabel family have worked as the
              designers, engravers and stone carvers in the Green Bay, Manitowoc
              and Sheboygan areas.
            </p>
            <p>
              Families trust us and appreciate our old-fashioned integrity and
              award-winning artistry. We have a legacy and reputation for
              elegant craftsmanship, meticulous attention to detail, unique
              design, superior selection, and thoughtful consideration - all of
              which brightly stand out as our professionals work with families
              here at Zabel Monuments.
            </p>
          </div>
        </div>
      </FamiliesDiv> */}
      <EveryLife>
        <div className="inner">
          <h3>Every Life is Worth Remembering</h3>
          <div className="row">
            <div>
              <p>
                At Zabel Monuments, a cemetery memorial or headstone isn’t just
                chosen out of a catalog. It's designed to tell a story and
                reflect the spirit of those being memorialized.
              </p>
              <p>
                A memorial is one of the most personal purchases a family can
                make. Our family also understands and respects that this is an
                important part of the grieving and healing process after a
                death.
              </p>
            </div>
            <div>
              <p>
                As a society, we memorialize our loved ones because they have
                lived, not because they have died. We believe a memorial is more
                than just a headstone. It's a permanent tribute to those we
                love. It's a means for future generations to reflect on
                someone’s life. It can be dedicated in a cemetery, a private
                personal place, or a public setting.
              </p>
            </div>
          </div>
        </div>
      </EveryLife>
      {/* <Testimonials /> */}
    </Layout>
  );
}
