import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-top">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d33.4585411!3d39.8693928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4081e07b65c583c3%3A0x2aecb21bdc1d7762!2sYeni%C5%9Fehir%2C%20Mimar%20Sinan%20Cd.%2024%20af%2C%2033010%20Yeni%C5%9Fehir%2FK%C4%B1r%C4%B1kkale!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
                        width="100%"
                        height="500"
                        style={{
                            border: "0",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="container">
                    <div className="contact-titles">
                        <h4>Bizimle İletişime Geçin</h4>
                        <h2>Bize Ulaşın</h2>
                        <p>
                            İletişim bilgileri buraya yazılacak.
                        </p>

                    </div>
                    <div className="contact-elements">
                        <form className="contact-form">
                            <div className="">
                                <label>
                                    İsminiz
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    E-posta adresiniz
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    Konu
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    Mesajınız
                                    <span>*</span>
                                </label>
                                <textarea
                                    id="author"
                                    name="author"
                                    type="text"
                                    defaultValue=""
                                    size="30"
                                    required=""
                                ></textarea>
                            </div>
                            <button className="btn btn-sm form-button">Mesajı Gönder</button>
                        </form>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong> PalasLife</strong>
                                    <p className="contact-street">
                                        mimar sinan caddesi no 24 palaslife apartı
                                    </p>
                                    <a href="tel:Phone: +1 1234 567 88">Telefon: 0555 456 78 90</a>
                                    <a href="mailto:Email: contact@example.com">
                                        Email: e-ticaret@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong>Çalışma Saatleri</strong>
                                    <p className="contact-date">Pazartesi - Cuma : 9:00 - 17:00</p>
                                    <p>Hafta Sonları Kapalı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;