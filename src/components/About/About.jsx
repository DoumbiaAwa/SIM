import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="containe">
      <div className="rows">
        <div className="col-sm-4">
          <img src={require('./img/ab.jpg')} alt="" style={{width: 500, height: 400}} />
        </div>
        <div className="col-sm-6" >
          <p className='text-about'>
          Le système d’information des marchés en Guinée <b>(SIM-Guinée) </b>  est un dispositif qui a pour objectif de collecter régulièrement les informations sur les produits alimentaires au niveau des marchés urbains et ruraux (marchés de collecte, de gros ou de détail). Ces informations concernent, les prix et les quantités commercialisées des produits alimentaires. Elles sont diffusées auprès des acteurs publics (Etats) et privés (producteurs agricoles, commerçants, consommateurs). Les informations diffusées permettent d’aider les acteurs dans leurs orientations et prises de décision.
          <br />
          <br />

L’objectif principal de SIM-Guinée est de contribuer à alimenter les dispositifs publics de prévention de crise alimentaire <b> (alerte en cas de forte hausse des prix, par exemple) </b>en information actualisée pour permettre aux décideurs d’améliorer les prises de décisions, de définir, d’assurer le suivi et la mise en œuvre des politiques agricoles, commerciales et de la sécurité alimentaire et nutritionnelle.
Il s’agit d’un dispositif bâti sur les acquis du Système d’Information sur les prix des produits agricoles <b> (SIM-SIPAG) </b>, mis en place en 1993 par l’Etat Guinéen et la Communauté Economique Européenne <b>(CEE)</b>. Il a bénéficié d’un appui de la Banque Mondiale à travers le Programme de Productivité Agricole Ouest Africaine <b>(PPAAO)</b> en 2018.  
          </p>
        </div>
      </div>
    </div>
  )
}
