import "./CampaignItem.css";

const CampaignItem = () => {
    return (
        <div className="campaign-item">
            <h3 className="campaign-title">
                Moda Ayı <br />
                Alışverişe başla
                <br/>
                
            </h3>
            <a href="#" className="btn btn-primary">
                Hepsini Gör
                <i className="bi bi-arrow-right"></i>
            </a>

        </div>
    );
};

export default CampaignItem;