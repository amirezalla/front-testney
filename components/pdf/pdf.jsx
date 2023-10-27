import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector";

const PDFViewer = () => {
  const { t } = useTranslation();

    const handleOpenPDF = () => {
      window.open('/EnWP.pdf', '_blank'); // Replace with the actual PDF file path
    };
    const handleOpenPDFIT = () => {
      window.open('/itWP.pdf', '_blank'); // Replace with the actual PDF file path
    };
  
    return (
     
       <div className="d-flex justify-content-between" >
        {/* <button onClick={handleOpenPDF} className="btn w-50 ">{t('download white paper')} In English</button><span></span>
        <button onClick={handleOpenPDFIT} className='btn w-50 ml-md-2'>{t('download white paper')} In Italian</button> */}
      </div>
      
    );
  };
  
  export default PDFViewer;
  