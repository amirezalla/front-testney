import "../styles/globals.css";
import '../i18n';



//INTRNAL IMPORT

import { NavBar, Footer,Top } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

 

const MyApp = ({ Component, pageProps }) => (

      <NFTMarketplaceProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        
      </NFTMarketplaceProvider>
);

export default MyApp;
