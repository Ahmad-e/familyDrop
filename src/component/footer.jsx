import { useEffect, useState } from 'react';
import Logo from '../images/images/logo.png';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from './loading';

export default function Footer (){

    const url = useSelector(state => state.apiURL);
    const [links,setLinks] = useState([]);
    const [load,setLoad] = useState(true);

    useEffect(()=>{
        axios.get(url+"showLinks").then(res => {
            console.log(res);
            setLinks(res.data.data);
            setLoad(false)
        }).catch(err => {
            console.log(err);
            setLoad(false)
        })
    },[]);

    return(
        <footer class="footer">
            <Loading loading={load}/>
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
                            {
                                links.map((el,key) =>
                                    <li>
                                        <a href={el.value}>{el.name}</a>
                                    </li>
                                )
                            }
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