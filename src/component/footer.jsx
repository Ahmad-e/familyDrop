import Logo from '../images/images/logo.png';

export default function Footer (){
    return(
        <footer class="footer">
            <div class="footer-top">
                <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-footer f-about">
                        <div class="logo">
                        <a href="index.html">
                            <img className='logo' src={Logo} />
                        </a>
                        </div>
                        <p>
                        ابدأ رحلتك في تجارة الالكترونية اجعل من حلمك حقيقة لا تهكل هم
                        فمنصة فاملي دروب معك وشريكك للنجاح
                        </p>
                    </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                    <div class="row">
                        <div class="col-lg-4 col-6">
                        <div class="single-footer f-link">
                            <h3>روابط سريعة</h3>
                            <ul>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/customer/loginRegister"
                                >الرئيسية</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/customer/loginRegister"
                                >المتجر</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/customer/loginRegister"
                                >ملفي</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/customer/loginRegister"
                                >مدونة</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-lg-4 col-6">
                            
                        <div class="single-footer f-link">
                            <h3>الدعم</h3>
                            <ul>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/customer/loginRegister"
                                >تواصل معنا</a
                                >
                            </li>
                            <li>
                                <a href="https://www.familydroop.com/ar/privacy-policy"
                                >سياسة الخصوصية</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/terms-conditions"
                                >الشروط والأحكام</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/delivery-information"
                                >معلومات التوصيل</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://www.familydroop.com/ar/Return-and-exchange-policies"
                                >سياسة الاسترجاع</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-footer f-link">
                            <h3>العنوان</h3>
                            <ul>
                            <li>
                                <a href="mailto:info@familydroop.shop"
                                >info@familydroop.shop</a
                                >
                            </li>
                            <li>
                                <a dir="rtl" href="tel:+1(360)743-8461"
                                >+1(360)743-8461</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}