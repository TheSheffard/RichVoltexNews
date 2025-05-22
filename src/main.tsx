import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './index.css'
import { HomePage } from './Pages/HomePage'
import { SportPage } from './Pages/SportPage'
import { PoliticsPage } from './Pages/PoliticsPage'
import { EconomyPage } from './Pages/EconomyPage'
import { BusinessPage } from './Pages/BusinessPage'
import { FeaturesPage } from './Pages/FeaturesPage'
import { Navbar } from './Components/NavComp/NavComp'
import { NewsDetails } from './Pages/DisplayNews'
import { Footer } from './Pages/Footer'
import { Disclaimer } from './Pages/Disclaimer'
import { TermsOfUse } from './Pages/TermsOfUse'
import { PrivacyPolicy } from './Pages/Privacy'
import { ContactUs } from './Pages/ContactUs'
import { GeneralPage } from './Pages/General'
import { ScrollToTop } from './Components/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='mt-20'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sport' element={<SportPage />} />
          <Route path='/polities' element={<PoliticsPage />} />
          <Route path='/economy' element={<EconomyPage />} />
          <Route path='/business' element={<BusinessPage />} />
          <Route path='/general' element={<GeneralPage />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
