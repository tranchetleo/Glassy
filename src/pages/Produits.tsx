import background from '../assets/images/background2.jpg';
import bestSeller1 from '../assets/images/best-seller1.jpg';
import bestSeller2 from '../assets/images/best-seller2.jpg';
import bestSeller3 from '../assets/images/best-seller3.jpg';
import produit1 from '../assets/images/produit1.jpg';
import produit2 from '../assets/images/produit2.jpg';
import produit3 from '../assets/images/produit3.jpg';
import produit4 from '../assets/images/produit4.jpg';
import produit5 from '../assets/images/produit5.jpg';
import produit6 from '../assets/images/produit6.jpg';
import produit7 from '../assets/images/produit7.jpg';
import produit8 from '../assets/images/produit8.jpg';

const Produits = () => {
    return (
        <>
            <div id="Accueil" style={{backgroundImage: `url(${background}`}}>
                <div className="glassy">
                    <h1>Produits Skin Care</h1>
                </div>
                <button>
                    <a href="">v Scroll pour voir les produits v</a>
                </button>
            </div>
            <div id='BestSellers'>
                <div className="col3">
                    <div className="produit">
                        <a href="/produits">
                            <img src={bestSeller1} alt="" />
                            <p>
                                <strong>Crème Hydratante</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={bestSeller2} alt="" />
                            <p>
                                <strong>Coffret Glassy</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={bestSeller3} alt="" />
                            <p>
                            <strong>Duo Lotion/After Sun</strong><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="col3">
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit1} alt="" />
                            <p>
                                <strong>Crème Hydratante</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit2} alt="" />
                            <p>
                                <strong>Coffret Glassy</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit3} alt="" />
                            <p>
                            <strong>Duo Lotion/After Sun</strong><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="col3">
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit4} alt="" />
                            <p>
                                <strong>Crème Hydratante</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit5} alt="" />
                            <p>
                                <strong>Coffret Glassy</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit6} alt="" />
                            <p>
                            <strong>Duo Lotion/After Sun</strong><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="col2">
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit7} alt="" />
                            <p>
                                <strong>Crème Hydratante</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="/produits">
                            <img src={produit8} alt="" />
                            <p>
                                <strong>Coffret Glassy</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produits;