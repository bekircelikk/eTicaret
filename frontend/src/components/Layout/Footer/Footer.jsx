
import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <Policy />
            <footer className="footer">
                <div className="subscribe-row">
                    <div className="container">
                        <div className="footer-row-wrapper">
                            <div className="footer-subscribe-wrapper">
                                <div className="footer-subscribe">
                                    <div className="footer-subscribe-top">
                                        <h3 className="subscribe-title">
                                            Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için abone olun.                                        </h3>
                                        <p className="subscribe-desc">
                                            İlk siparişinizde 10$ değerinde bir kuponu size e-postayla göndereceğiz
                                        </p>
                                    </div>
                                    <div className="footer-subscribe-bottom">
                                        <form>
                                            <input
                                                type="text"
                                                placeholder="Email adresinizi giriniz"
                                            />
                                            <button className="btn">Abone ol</button>
                                        </form>
                                        <p className="privacy-text">
                                            Abone olarak şunları kabul etmiş olursunuz:{" "}
                                            <a href="#">
                                                Terms & Conditions and Privacy & Cookies Policy.
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-wrapper">
                                <div className="footer-contact-top">
                                    <h3 className="contact-title">
                                        Yardıma ihtiyacınız mı var? <br />
                                        (+90) 555 456 78 90
                                    </h3>
                                    <p className="contact-desc">
                                        Çalışma saatleri 8:00 - 17:00
                                    </p>
                                </div>
                                <div className="footer-contact-bottom">
                                    <div className="download-app">
                                        <a href="#">
                                            <img src="/img/footer/app-store.png" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="/img/footer/google-play.png" alt="" />
                                        </a>
                                    </div>
                                    <p className="privacy-text">
                                        <strong></strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widgets-row">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="brand-info">
                                <div className="footer-logo">
                                    <a href="index.html" className="logo">
                                    </a>
                                </div>
                                <div className="footer-desc">
                                    <p>
                                        {" "}

                                    </p>
                                </div>
                                <div className="footer-contact">
                                    <p>
                                        <a href="tel:555 555 55 55">(+09) 555 456 78 90</a> –{" "}
                                        <a href="mailto:info@example.com">eticaret@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Bilgi</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="#">Gizlilik Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#">İade Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#">Kargo Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropshipping</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Hesap</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Panel</a>
                                    </li>
                                    <li>
                                        <a href="#">Siparişlerim</a>
                                    </li>
                                    <li>
                                        <a href="#">Favorilerim</a>
                                    </li>
                                    <li>
                                        <a href="#">Hesap Detayları</a>
                                    </li>
                                    <li>
                                        <a href="#">Siparişlerimi Takip Et</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Mağaza</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Ortaklık Programı</a>
                                    </li>
                                    <li>
                                        <a href="#">En Çok Satanlar</a>
                                    </li>
                                    <li>
                                        <a href="#">İndirim</a>
                                    </li>
                                    <li>
                                        <a href="#">Yeni Ürünler</a>
                                    </li>
                                    <li>
                                        <a href="#">Satıştaki Ürünler</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="widget-nav-menu">
                                <h4>Kategoriler</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Kadın</a>
                                    </li>
                                    <li>
                                        <a href="#">Erkek</a>
                                    </li>
                                    <li>
                                        <a href="#">Çantalar</a>
                                    </li>
                                    <li>
                                        <a href="#">Dış Giyim</a>
                                    </li>
                                    <li>
                                        <a href="#">Ayakkabılar</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-row">
                    <div className="container">
                        <div className="footer-copyright">
                            <div className="site-copyright">
                                <p>
                                    Copyright 2024 © E-TİCARET. Powered
                                    by Bekir Çelik.
                                </p>
                            </div>
                            <a href="#">
                                <img src="/img/footer/cards.png" alt="" />
                            </a>
                            <div className="footer-menu">
                                <ul className="footer-menu-list">
                                    <li className="list-item">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Terms and Conditions</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Returns Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;