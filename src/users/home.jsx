
import HomeSVG from "../svgs/home";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

// import {useEffect} from 'react';

export default function Home() {
  return (
    
    <div>
      <section id="home" class="hero-area">
        <div class="container">
          <div class="row align-items-center text-right">
            <div class="col-lg-5 col-md-12 col-12 text-right">
              <div class="hero-content text-right">
                <h1 class="wow fadeInLeft" data-wow-delay=".4s">
                  ابدأ رحلة تجارتك الأكترونية الأن مع فاملي دروب ب 6 دول
                </h1>
                <p class="wow fadeInLeft" data-wow-delay=".6s">
                  نوفر لجميع مسوقين لدينا كافة الخدمات تجارة الاكترونية لتلبي
                  طموحتاكم وحصول على مزيد من الأيرادات
                </p>
                <div class="button wow fadeInLeft" data-wow-delay=".8s">
                  <a
                    href="https://www.familydroop.com/ar/customer/loginRegister"
                    class="btn"
                  >
                    <i class="lni lni-user"></i> سجل دخول الآن
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
                  عن المنصة
                </h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">
                  تجارتك الأكترونية بأسهل طريقة
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  منصتنا توفر حلولًا مبتكرة تناسب الشباب الطموحين، ربات البيوت،
                  الموظفين، رواد الأعمال، وطلاب الجامعات. تتيح لك العمل من
                  المنزل تحقيق التوازن بين المسؤوليات الأسرية وزيادة الدخل
                  المالي. كما تقدم فرصًا مثالية لرواد الأعمال المحترفين لبناء
                  مشاريعهم الإلكترونية بدون تكاليف بدء عالية. لطلاب الجامعات،
                  نحن نوفر منصات لبناء خبرات قيمة وزيادة الدخل أثناء الدراسة.
                  انضم إلينا واستفد من مرونة العمل عبر الإنترنت!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-home d-flex justify-content-center align-items-center"><HomeRoundedIcon/></i>
                <h3>مرونة العمل من المنزل</h3>
                <p>
                  <span class="fw-bold">ربات البيوت والموظفين:</span> استمتع
                  بإدارة مسؤولياتك العائلية مع مرونة العمل من المنزل. زِد من
                  دخلك المالي وحقق الاستقرار المالي لأسرتك دون الحاجة للتخلي عن
                  واجباتك المنزلية.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-rocket d-flex justify-content-center align-items-center"><RocketLaunchRoundedIcon/></i>
                <h3>فرص لا محدودة لرواد الأعمال</h3>
                <p>
                  <span class="fw-bold">المحترفين ورواد الأعمال:</span> انطلق في
                  عالم التجارة الإلكترونية بدون تكاليف بدء باهظة. استثمر في
                  مهاراتك ووسع نطاق عملك بسهولة، دون الحاجة لرأس مال كبير.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-graduation d-flex justify-content-center align-items-center"><SchoolRoundedIcon/></i>
                <h3>بناء خبرات قيمة للطلاب</h3>
                <p>
                  <span class="fw-bold">طلاب الجامعات:</span> انطلق في رحلتك
                  الريادية أثناء دراستك! أنشئ مشروعاتك الخاصة عبر الإنترنت
                  بتكاليف منخفضة، وحقق دخلًا إضافيًا مع اكتساب مهارات قيمة يمكن
                  أن تعزز من مستقبلك المهني.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-support d-flex justify-content-center align-items-center"><SupportAgentRoundedIcon/></i>
                <h3>دعم مستمر وموارد تعليمية</h3>
                <p>
                  <span class="fw-bold">جميع المستخدمين:</span> احصل على دعم
                  مستمر وموارد تعليمية شاملة تعزز من مهاراتك في التجارة
                  الإلكترونية. من دروس وندوات عبر الإنترنت إلى مقالات وإرشادات،
                  نساعدك على تحقيق النجاح في مشروعك بسهولة وثقة.
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
                <h2>منصة تضمن لك النجاح</h2>
                <p>
                  نحن في فاملي دروب نضع نجاحك في صميم أولوياتنا. نوفر لك فريقاً
                  متكاملاً من الخبراء لدعمك في كل خطوة، مع أدوات تسويقية متطورة
                  وحلول لوجستية شاملة. نلتزم بتقديم خدمة عملاء متميزة على مدار
                  الساعة لضمان نمو وازدهار تجارتك الإلكترونية
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
                    <p>الرضا عن الخدمة</p>
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
                    <p>المستخدمين السعداء</p>
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
                    <p>العملاء</p>
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
                  منصة فاميلي دروب
                </h3>
                <h2 class="wow fadeInUp text-center" data-wow-delay=".4s">
                  ماذا نقدم لك في فاميلي دروب
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
                  الاسئلة الشائعة
                </h2>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        هل سوف احتاج الي راس مال لكي ابدا تجارتي مع مخزون ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        لن تحتاج الي راس مال فنحن نوفر لك المنتجات دون الحاجه
                        الي شراءها او تخزينها او شحنها
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        كيف استلم ارباحي في مخزون ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        مخزون يوفر لك اكثر من 10 طرق مختلفه لتحويل الارباح
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        هل يمكنني التسويق للمنتجات وانا خارج دول الخليج ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        نعم يمكنك ذلك ! لست بحاجه الي التواجد داخل الدوله التي
                        تسوق فيها يمكنك العمل من اي دوله
                      </div>
                    </div>
                  </div>

                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        هل يوجد حد ادني لسحب الارباح ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        لا يوجد حد ادني لسحب الارباح
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay="1s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        متي يتم تحويل ارباحي ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        يمكنك سحب ارباحك في خلال 24 ساعة بعد تسليم الطلب
                      </div>
                    </div>
                  </div>
                  <div
                    class="accordion-item bg-light fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        ما هي البلاد التي يدعمها مخزون ؟
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        في الوقت الحالي نوفر خدمة الدروب شيبنج في الامارات
                        والسعودية والاردن وسلطنة عمان
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button wow fadeInUp" data-wow-delay=".6s">
                  <a
                    href="https://www.familydroop.com/ar/customer/loginRegister"
                    class="btn"
                  >
                    سجل اللآن
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
