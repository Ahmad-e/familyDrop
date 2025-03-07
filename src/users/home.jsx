
import HomeSVG from "../svgs/home";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import { useState } from "react";

// import {useEffect} from 'react';

import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t } = useTranslation();
  const [collapsed1,setCollapsed1] = useState("")
  const [collapsed2,setCollapsed2] = useState("collapsed")
  const [collapsed3,setCollapsed3] = useState("collapsed")
  const [collapsed4,setCollapsed4] = useState("collapsed")
  const [collapsed5,setCollapsed5] = useState("collapsed")
  const [collapsed6,setCollapsed6] = useState("collapsed")
  function Open(i){
    if(i === 1){
      setCollapsed1((prev) => prev==="collapsed" ? "" : "collapsed");
    }else if(i === 2){
      setCollapsed2((prev) => prev==="collapsed" ? "" : "collapsed");
    }else if(i === 3){
      setCollapsed3((prev) => prev==="collapsed" ? "" : "collapsed");
    }else if(i === 4){
      setCollapsed4((prev) => prev==="collapsed" ? "" : "collapsed");
    }else if(i === 5){
      setCollapsed5((prev) => prev==="collapsed" ? "" : "collapsed");
    }else if(i === 6){
      setCollapsed6((prev) => prev==="collapsed" ? "" : "collapsed");
    }
  }

  return (
    
    <div>
      <section id="home" class="hero-area">
        <div class="container ">
          <div class="row align-items-center text-right px-12">
            <div class="col-lg-5 col-md-12 col-12 text-right">
              <div class="hero-content text-right">
                <h1 class="wow fadeInLeft" data-wow-delay=".4s">
                { t("landing.top_1") }
                </h1>
                <p class="wow fadeInLeft" data-wow-delay=".6s">
                { t("landing.top_2") }
                
                </p>
                <div class="button wow fadeInLeft" data-wow-delay=".8s">
                  <a
                    href="register"
                    class="btn"
                  >
                    <i class="lni lni-user"></i>{ t("header.regaster") }
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6 col-md-12 col-12 text-right">
              <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
                <HomeSVG />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">
                { t("landing.h_1") }
                </h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">
                  { t("landing.m_th1") }
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  { t("landing.m_th2") }
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-home d-flex justify-content-center align-items-center"><HomeRoundedIcon/></i>
                <h3>{ t("landing.m_3t") }</h3>
                <p>
                  { t("landing.m_3b") }
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-rocket d-flex justify-content-center align-items-center"><RocketLaunchRoundedIcon/></i>
                <h3>{ t("landing.m_1t") }</h3>
                <p>
                { t("landing.m_1b") }
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-graduation d-flex justify-content-center align-items-center"><SchoolRoundedIcon/></i>
                <h3>{ t("landing.m_4t") }</h3>
                <p>
                { t("landing.m_4b") }
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-support d-flex justify-content-center align-items-center"><SupportAgentRoundedIcon/></i>
                { t("landing.m_2t") }
                <p>
                { t("landing.m_2b") }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="our-achievement section">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
              <div class="title">
                <h2>{ t("landing.m_r_t") }</h2>
                <p>
                  { t("landing.m_r_b") }
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div class="row">
                <div class="col-6 col-md-4">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h3 class="counter">
                      <span id="secondo1" class="countup" cup-end="100">
                        100
                      </span>
                      %
                    </h3>
                    <p>{ t("landing.ok_t") }</p>
                  </div>
                </div>
                <div class="col-6 col-md-4">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h3 class="counter">
                      <span id="secondo2" class="countup" cup-end="30">
                        30
                      </span>{" "}
                      K
                    </h3>
                    <p>{ t("landing.h_t") }</p>
                  </div>
                </div>
                <div class="col-6 col-md-4">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h3 class="counter">
                      <span id="secondo3" class="countup" cup-end="30">
                        30
                      </span>
                      k+
                    </h3>
                    <p>{ t("landing.us_t") }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" class="pricing-table section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3 class="wow zoomIn text-center" data-wow-delay=".2s">
                { t("landing.total") }
                </h3>
                <h2 class="wow fadeInUp text-center" data-wow-delay=".4s">
                { t("landing.w_q") }
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12" style={{ minHeight: "500px" }}>
              <iframe
                class="w-100 h-100"
                src="https://www.youtube.com/embed/USASkCr5_VI?si=_N5hoSte0LmOg5z1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="section call-action">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-12">
              <div class="cta-content">
                <h2 class="wow fadeInUp" data-wow-delay=".2s">
                { t("landing.qs") }
                </h2>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed1}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        onClick={()=> Open(1)}
                      >
                        { t("landing.q_1") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class={`accordion-collapse ${collapsed1 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_1") }
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed2}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                        onClick={()=> Open(2)}
                      >
                        { t("landing.q_2") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class={`accordion-collapse ${collapsed2 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_2") }
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed3}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                        onClick={()=> Open(3)}
                      >
                        { t("landing.q_3") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class={`accordion-collapse ${collapsed3 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_3") }
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed4}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                        onClick={()=> Open(4)}
                      >
                        { t("landing.q_4") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      class={`accordion-collapse ${collapsed4 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_4") }
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay="1s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed5}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                        onClick={()=> Open(5)}
                      >
                        { t("landing.q_5") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      class={`accordion-collapse ${collapsed5 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_5") }
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${collapsed6}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                        onClick={()=> Open(6)}
                      >
                        { t("landing.q_6") }
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      class={`accordion-collapse ${collapsed6 === "collapsed" ? "collapse" : ""}`}
                    >
                      <div class="accordion-body text-secondary">
                      { t("landing.an_6") }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button wow fadeInUp" data-wow-delay=".6s">
                  <a
                    href="register"
                    class="btn"
                  >
                    { t("header.regaster") }
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
