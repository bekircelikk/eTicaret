import "./Policy.css";

const Policy = () => {
    return (
        <section className="policy">
            <div className="container">
                <ul className="policy-list">
                    <li className="policy-item">
                        <i className="bi bi-truck"></i>
                        <div className="policy-texts">
                            <strong>ÜCRETSİZ TESLİMAT</strong>
                            <span>59.89 $ dan İtibaren</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-headset"></i>
                        <div className="policy-texts">
                            <strong>7/24 DESTEK</strong>
                            <span>24 Saat Online</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-arrow-clockwise"></i>
                        <div className="policy-texts">
                            <strong>30 GÜN İADE</strong>
                            <span>30 Gün İçinde Kolayca İade Edin</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-credit-card"></i>
                        <div className="policy-texts">
                            <strong>ÖDEME YÖNTEMİ</strong>
                            <span>Güvenli Ödeme</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Policy;