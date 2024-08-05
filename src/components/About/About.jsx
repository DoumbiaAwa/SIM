import React from 'react'
import './About.css'
export default function About() {
  return (
    <div>


   <div className='contenu'>
    <p className='propos'>
Le système d’information des marchés en Guinée (SIM-Guinée) est un dispositif qui a pour objectif de collecter régulièrement les informations sur les produits alimentaires au niveau des marchés urbains et ruraux (marchés de collecte, de gros ou de détail). Ces informations concernent, les prix et les quantités commercialisées des produits alimentaires. Elles sont diffusées auprès des acteurs publics (Etats) et privés (producteurs agricoles, commerçants, consommateurs). Les informations diffusées permettent d’aider les acteurs dans leurs orientations et prises de décision.
Le dispositif SIM-Guinée a vu le jour suite à l’avènement de la COVID-19, dans le but d’organiser la riposte afin de minimiser ses effets sur la sécurité alimentaire et sur les productions agricoles. Les acteurs publics (Ministères de l’Agriculture, Elevage, Pêche, Aquaculture et l’Economie Maritime, Commerce, Economie et Finance, Santé, etc.) et les Institutions internationale (Banque Mondiale, PAM, FAO, USAID, JICA etc.), ont initié la mise en place de ce dispositif de suivi des prix des produits alimentaires pour combler le besoin d’informations fiables et actualisées afin d’identifier les actions à entreprendre et coordonner les interventions.
L’objectif principal de SIM-Guinée est de contribuer à alimenter les dispositifs publics de prévention de crise alimentaire (alerte en cas de forte hausse des prix, par exemple) en information actualisée pour permettre aux décideurs d’améliorer les prises de décisions, de définir, d’assurer le suivi et la mise en œuvre des politiques agricoles, commerciales et de la sécurité alimentaire et nutritionnelle.
Il s’agit d’un dispositif bâti sur les acquis du Système d’Information sur les prix des produits agricoles (SIM-SIPAG), mis en place en 1993 par l’Etat Guinéen et la Communauté Economique Européenne (CEE). Il a bénéficié d’un appui de la Banque Mondiale à travers le Programme de Productivité Agricole Ouest Africaine (PPAAO) en 2018.
Depuis mai 2019, un effort d’harmonisation des différents dispositifs de suivi des prix des produits agricoles a été initié sous la direction de l’ANASA avec l’appui technique du PAM. Ce dispositif harmonisé regroupe : l’Agence Nationale des Statistiques Agricoles et Alimentaires (ANASA), le Système d’Information des Produits Agricoles de Guinée (SIPAG), le BSD du Ministère de l’agriculture, l’Institut National de la Statistique (Ministère du plan et développement économique), le BSD du Ministère du Commerce, le BSD du Ministère de l’Elevage et SIM Bétail, Ministère des Pêches et Economie Maritime et des institutions internationales (Banque Mondiale, PAM, FAO, AFD, CILSS).
Cette plateforme couvre 100 points de collectes dont 71 marchés agricoles (urbains et ruraux) répartis entre les 33 Préfectures et la zone spéciale de Conakry, 6 débarcadères pour les produits halieutiques, 6 postes transfrontaliers pour les produits importés/exportés et 17 marchés à bétails.
Les principales données qui sont collectées et remontées à une fréquence hebdomadaire portent respectivement sur :
 se sont déroulés du 23 au 26 Avril 2024 dans les régions administratives de Boké, Kindia, Labé, Kankan et Nzérékoré. Avec la participation des autorités locales des administrateur de marchés et des agents de collecte de données.
    </p>
        
        
</div>
    {/* slider */}
       
    <div className="col-md-12 col-lg-5" style={{position: 'absolute', top: 200, right: 30}}>
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={require('./img/slide1.jpeg')} className="img-fluid w-400 h-400 bg-secondary rounded" alt="First slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide2.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide3.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide4.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide5.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide6.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/slide7.jpeg')} className="img-fluid w-400 h-400 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                            {/* slider fin */}

    </div>
  )
}
