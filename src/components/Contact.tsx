import contact from '../assets/images/contact.jpg';
import newsletter from '../assets/images/newsletter.jpg';

const Contact = () => {
    return(
        <>
            <div className="col2">
                <div className="glassy w60 ma">
                    <h2>Contact</h2>
                    <div className='contact'>
                        <a href="mailto:glassy@skin.care">
                            <img src="https://img.icons8.com/?size=30&id=53383&format=png&color=6b3d24" alt="" />
                            glassy@skin.care
                        </a>
                    </div>
                    <div className='contact'>
                        <a href="https://maps.app.goo.gl/GUgEDf4QjQPgRkWR8">
                            <img src="https://img.icons8.com/?size=30&id=53388&format=png&color=6b3d24" alt="" />
                            9 rue du Slay, 44000
                        </a>
                    </div>
                    <div className='contact'>
                        <a href="tel:+330123456789">
                            <img src="https://img.icons8.com/?size=30&id=9659&format=png&color=6b3d24" alt="" />
                            01.23.45.67.89
                        </a>
                    </div>
                    <div className='contact'>
                        <a href="https://www.instagram.com/">
                            <img src="https://img.icons8.com/?size=30&id=32292&format=png&color=6b3d24" alt="" />
                            Glassy_Skin_Care
                        </a>
                    </div>
                </div>
                <div id="Creme" style={{backgroundImage: `url(${contact}`}}>
                </div>
            </div>
            <div className="col2">
                <div id="Creme" style={{backgroundImage: `url(${newsletter}`}}>
                </div>
                <div className="glassy w60 ma newsletter">
                    <h2>Newsletter</h2>
                    <p>Recevez des conseils beauté exclusifs, des offres spéciales et les dernières nouveautés. Rejoignez-nous pour une peau éclatante et saine ! 🌿💧</p>
                    <form action="">
                    <input type="email" name="" id="" placeholder='Adresse email'/>
                    <input type="tel" name="" id="" placeholder='Numéro de téléphone'/>
                    <button type='submit'>S'inscrire à la Newsletter</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;