import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../styles/roadmap.module.css";



const RoadMap = () => {
  return (
    <div className="container-fluid code pt-120 pb-50">
        <div className="container pt-120 text-white">
            <div className="row">
            <h3 className="display-6 text-white text-center mb-4">Roadmap per la piattaforma Ingressdefi </h3>
    <h3 className=" text-white text-center mb-4"> </h3>
            <div className={Style.timeline}>
  <div className={Style.container + ' ' + Style.left}>
    <div className={Style.date}>15 Dec</div>
    {/* <FontAwesomeIcon icon={faUserAlt} className={Style.icon} /> */}
    {/* <i class={Style.icon + ' ' + Style.fa+ ' ' +Style.faHome}></i> */}
    <div className= {Style.content}>
      <h2>Fase 1: Sviluppo e lancio iniziale</h2>
      <p>
        <ul>
            <li>Creazione white paper, versione 1;</li>
            <li>Sviluppo dell'infrastruttura tecnologica e della piattaforma NFT;</li>
            <li>Implementazione delle funzionalità di base: caricamento opere d'arte, creazione NFT, acquisto/vendita, profili personalizzati di ogni artista, spedizioni opere vendute;</li>
            <li>Lancio iniziale della piattaforma, evento con artisti e collezionisti.</li>
        </ul>
      </p>
    </div>
  </div>
  <div className={Style.container + ' ' + Style.right}>
    <div className={Style.date}>22 Oct</div>
    {/* <FontAwesomeIcon icon={faUserAlt} className={Style.icon} /> */}
    <div className={Style.content}>
      <h2>Fase 2: Espansione e miglioramento delle funzionalità</h2>
      <p>
        <ul>
            <li>
            Raccolta dei feedback degli utenti e analisi dei dati per identificare punti di forza e aree di miglioramento
            </li>
            <li>Aggiunta di funzionalità avanzate: aste e offerte al ribasso, booster-possibilità di aumentare la visibilità, caricamento opere in 3D, integrazione con servizi di pagamento sicuri e popolari, royali per gli artisti, garantendo che vengano correttamente ricompensati per il loro lavoro e incentivando la creazione di nuove opere di alta qualità.</li>
            <li>Ampliamento della base di utenti e attività di marketing per aumentare la visibilità della piattaforma.</li>
            <li>Presales token IDF, Whitelist</li>
            <li>ICO- Initial Coin Offering: emissione di un numero limitato di token digitali e la loro vendita agli imprenditori interessati.</li>
        </ul>
      </p>
    </div>
  </div>
  <div className={Style.container + ' ' + Style.left}>
    <div className={Style.date}>15 Dec</div>
    {/* <FontAwesomeIcon icon={faUserAlt} className={Style.icon} /> */}
    <div className= {Style.content}>
      <h2>Fase 3: Coinvolgimento della community e partnership</h2>
      <p>
        <ul>
            <li>Organizzazione di eventi virtuali, come mostre d'arte e incontri con gli artisti.</li>
            <li>Collaborazione con artisti, influencer e altre piattaforme NFT per aumentare l'ecosistema e la visibilità reciproca.</li>
            <li>Continua ottimizzazione delle funzionalità e dell'esperienza utente sulla base dei feedback della community.</li>
        </ul>
      </p>
    </div>
  </div>
  <div className={Style.container + ' ' + Style.right}>
    <div className={Style.date}>22 Oct</div>
    {/* <FontAwesomeIcon icon={faUserAlt} className={Style.icon} /> */}
    <div className={Style.content}>
      <h2>Fase 4: Espansione nel settore immobiliare</h2>
      <p>
        <ul>
            <li>Avvio di un nuovo ambito di crescita per la piattaforma, espandendoci nel settore immobiliare e offrendo NFT collegati a proprietà virtuali o fisiche.</li>
            <li>Creazione di partnership con sviluppatori immobiliari e agenti per portare l'arte digitale al mondo degli investimenti immobiliari.</li>
            <li>Offerta di esperienze uniche, come tour virtuali di proprietà, attraverso l'utilizzo di tecnologie all'avanguardia come la realtà virtuale e aumentata.</li>
        </ul>
      </p>
    </div>
  </div>
  



</div>
<p className="col-md-8 mx-auto pt-50 text-white text-center">
    La roadmap si conclude con il consolidamento della piattaforma NFT Art come un leader nel mercato dell'arte digitale. L'impegno continuo nell'innovazione e nell'offerta di esperienze uniche consoliderà la posizione della piattaforma come destinazione preferita per gli artisti, i collezionisti e gli appassionati di NFT.
    </p>
            </div>
        </div>
    </div>
  );
};

export default RoadMap;
