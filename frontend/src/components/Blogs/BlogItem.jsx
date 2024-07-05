import "./BlogItem.css"

const BlogItem = () => {
    return (
        <><><li className="blog-item">
            <a href="#" className="blog-image">
                <img src="/img/blogs/blog1.jpg" alt="" />
            </a>
            <div className="blog-info">
                <div className="blog-info-top">
                    <span>26 mart 2024 </span>-<span>0 Yorum</span>
                </div>
                <div className="blog-info-center">
                    <a href="#">Kadın şık elbiseler</a>
                </div>
                <div className="blog-info-bottom">
                    <a href="#">Devamını Oku</a>
                </div>
            </div>
        </li><li className="blog-item">
                <a href="#" className="blog-image">
                    <img src="/img/blogs/blog2.jpg" alt="" />
                </a>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span>26 mart 2024 </span>-<span>0 Yorum</span>
                    </div>
                    <div className="blog-info-center">
                        <a href="#">Kadın şık elbiseler</a>
                    </div>
                    <div className="blog-info-bottom">
                        <a href="#">Devamını Oku</a>
                    </div>
                </div>
            </li></><li className="blog-item">
                <a href="#" className="blog-image">
                    <img src="/img/blogs/blog3.jpg" alt="" />
                </a>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span>26 mart 2024 </span>-<span>0 Yorum</span>
                    </div>
                    <div className="blog-info-center">
                        <a href="#">Kadın şık elbiseler</a>
                    </div>
                    <div className="blog-info-bottom">
                        <a href="#">Devamını Oku</a>
                    </div>
                </div>
            </li></>
    );
};

export default BlogItem;