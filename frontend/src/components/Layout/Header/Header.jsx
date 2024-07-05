import { useContext } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
    const { cartItems } = useContext(CartContext);
    const user = localStorage.getItem("user");
    const { pathname } = useLocation();

    return (
        <header>
            <div className="global-notification">
                <div className="container">
                    <p>
                        TÜM YAZ ÜRÜNLERİNDEN KARGO - %50 İNDİRİMLİ!
                        <a href="shop.html"> ŞİMDİ ALIŞVERİŞE BAŞLA</a>
                    </p>
                </div>
            </div>
            <div className="header-row">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-mobile">
                            <i className="bi bi-list" id="btn-menu"></i>
                        </div>
                        <div className="header-left">
                            <Link to={"/"} className="logo">
                            <img src="/img/Logo.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="header-center" id="sidebar">
                            <nav className="navigation">
                                <ul className="menu-list">
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/"}
                                            className={`menu-link ${pathname === "/" && "active"}`}
                                        >
                                            EV&YAŞAM
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <ul className="menu-dropdown-content">
                                                <li>
                                                    <a href="#">Ev Temizlik</a>
                                                </li>
                                                <li>
                                                    <a href="#">Ev Koleksiyon</a>
                                                </li>
                                                <li>
                                                    <a href="#">Minimal Ev Ürünleri</a>
                                                </li>
                                                <li>
                                                    <a href="#">Modern</a>
                                                </li>
                                                <li>
                                                    <a href="#">Benzersiz Ev Ürünleri</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-list-item megamenu-wrapper">
                                        <Link
                                            to={"/shop"}
                                            className={`menu-link ${pathname === "/shop" && "active"
                                                }`}
                                        >
                                            ALIŞVERİŞ
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <div className="menu-dropdown-megamenu">
                                                <div className="megamenu-links">
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">
                                                            Alışveriş
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Yazlık Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Tüm Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Kategoriler</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Abonelere Özel</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Alışveriş Listesi</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">
                                                            Filtrele
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Kadın Kıyafert</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Erkek Kıyafet</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Telefonlar</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Saatler</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                    </div>
                                                </div>
                                                <div className="megamenu-single">
                                                    <a href="#">
                                                        <img src="/img/mega-menu.jpg" alt="" />
                                                    </a>
                                                    <h3 className="megamenu-single-title">
                                                        Üyelere özel ürünleri keşfedin
                                                    </h3>
                                                    <h4 className="megamenu-single-subtitle">
                                                        Hemen şimdi alışverişe başlayın
                                                    </h4>
                                                    <a
                                                        href="#"
                                                        className="megamenu-single-button btn btn-sm"
                                                    >
                                                        Şimdi Keşfet
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/blog"}
                                            className={`menu-link ${pathname === "/blog" && "active"
                                                }`}
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/contact"}
                                            className={`menu-link ${pathname === "/contact" && "active"
                                                }`}
                                        >
                                            İLETİŞİM
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <i className="bi-x-circle" id="close-sidebar"></i>
                        </div>
                        <div className="header-right">
                            <div className="header-right-links">
                                <Link to={"/auth"} className="header-account">
                                    <i className="bi bi-person"></i>
                                </Link>
                                <button
                                    className="search-button"
                                    onClick={() => setIsSearchShow(true)}
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a> */}
                                <div className="header-cart">
                                    <Link to={"/cart"} className="header-cart-link">
                                        <i className="bi bi-bag"></i>
                                        <span className="header-cart-count">
                                            {cartItems.length}
                                        </span>
                                    </Link>
                                </div>
                                {user && (
                                    <button
                                        className="search-button"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Çıkış yapmak istediğinize emin misiniz?"
                                                )
                                            ) {
                                                {
                                                    localStorage.removeItem("user");
                                                    window.location.href = "/";
                                                }
                                            }
                                        }}
                                    >
                                        <i className="bi bi-box-arrow-right"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

Header.propTypes = {
    setIsSearchShow: Proptypes.func,
};