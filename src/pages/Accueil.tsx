import Contact from '../components/Contact';
import background from '../assets/images/background.jpg';
import creme from '../assets/images/Crème Hydratante.jpg';
import lotion from '../assets/images/lotion.jpg';
import serum from '../assets/images/serum.jpg';
import bestSeller1 from '../assets/images/best-seller1.jpg';
import bestSeller2 from '../assets/images/best-seller2.jpg';
import bestSeller3 from '../assets/images/best-seller3.jpg';


const Accueil = () => {
    return (
        <>
            <div id="Accueil" style={{backgroundImage: `url(${background}`}}>
                <div className="glassy">
                    <h1>GLASSY SKIN CARE</h1>
                </div>
                <button>
                    <a href="">Voir les produits</a>
                </button>
            </div>
            <div className="col2">
                <div className="glassy w60 ma">
                    <h2>Crème Hydratante</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente molestias voluptatum aspernatur quis est facilis aut velit eos itaque, dignissimos quas laboriosam illo voluptates debitis accusantium, deserunt sit quae.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas cum ducimus ut, ipsum praesentium unde soluta. Accusamus ipsam nulla, perspiciatis itaque laudantium nesciunt at aliquid eos dolorem error voluptate nemo!</p>
                    <button>
                        <a href="">
                            être informé des nouveautés
                        </a>
                    </button>
                </div>
                <div id="Creme" style={{backgroundImage: `url(${creme}`}}>
                    <a href="" className="link">Voir les fiches produit {'>'}</a>
                </div>
            </div>
            <div className="col2">
                <div id="Lotion" style={{backgroundImage: `url(${lotion}`}}>
                    <a href="" className="link">Voir les fiches produit {'>'}</a>
                </div>
                <div id="Serum" style={{backgroundImage: `url(${serum}`}}>
                    <a href="" className="link">Voir les fiches produit {'>'}</a>
                </div>
            </div>
            <div id='BestSellers'>
                <div className="glassy">
                    <h2>Meilleurs ventes</h2>
                </div>
                <div className="col3">
                    <div className="produit">
                        <a href="">
                            <img src={bestSeller1} alt="" />
                            <p>
                                <strong>Crème Hydratante</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="">
                            <img src={bestSeller2} alt="" />
                            <p>
                                <strong>Coffret Glassy</strong><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                    <div className="produit">
                        <a href="">
                            <img src={bestSeller3} alt="" />
                            <p>
                            <strong>Duo Lotion/After Sun</strong><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </a>
                    </div>
                </div>
                <button>
                    <a href="">Voir tout les produits</a>
                </button>
            </div>
            <Contact />
        </>
    );
}

export default Accueil;