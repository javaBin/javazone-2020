import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { FrontPage } from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import { InfoPage } from './pages/Info/Info';
import { TicketsPage } from './pages/Tickets/Tickets';
import { PartnersPage } from './pages/Partners/Partners';
import { AboutUsPage } from './pages/About/About';
import { CookieInfoPage } from './pages/CookieInfo/CookieInfo';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';
import { InlineLink } from './components/InlineLink/InlineLink';
import { NotFoundPage } from './pages/NotFound/NotFound';
import {VolunteersPage} from "./pages/Volunteers/Volunteers";
import {SpeakersPage} from "./pages/Speakers/Speakers";
import {MonetaryPolicyPage} from "./pages/Speakers/MonetaryPolicy";
import {SpeakerTipsPage} from "./pages/Speakers/Tips";
import {AcademyPage} from "./pages/Academy/Academy";
import {AcademyRegistrationPage} from "./pages/Academy/AcademyRegistrationPage";
import {BuyTicketsPage} from "./pages/Tickets/BuyTicketsPage";

const routes: NavRoute[] = [
  {title: 'Info', url: '/info', show: true},
  {title: 'Tickets', url: '/tickets', show: true},
  {title: 'Tickets', url: '/tickets/buy', show: false},
  {title: 'Speakers', url: '/speakers', show: true},
  {title: 'Partners', url: '/partners', show: true},
  {title: 'Academy', url: '/academy', show: true},
  {title: 'Academy', url: '/academy/registration', show: false},
  {title: 'Kids', url: '/kids', show: false},
  {title: 'Frivillige', url: '/volunteers', show: true},
  {title: 'About', url: '/about', show: true},
  {title: 'Cookies', url: '/privacy-cookies', show: false},
  {title: 'Tips for Speakers', url: '/speakers/tips', show: false},
  {title: 'Monetary Policy', url: '/speakers/monetary-policy', show: false},
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-3676724-14');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <>
        <Navigation sticky routes={routes} />
        <Route component={ScrollToTop}/>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/info" component={InfoPage} />
          <Route exact path="/tickets" component={TicketsPage} />
          <Route exact path="/tickets/buy" component={BuyTicketsPage} />
          <Route exact path="/speakers" component={SpeakersPage} />
          <Route exact path="/speakers/tips" component={SpeakerTipsPage} />
          <Route exact path="/speakers/monetary-policy" component={MonetaryPolicyPage} />
          <Route exact path="/partners" component={PartnersPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/volunteers" component={VolunteersPage} />
          <Route exact path="/academy" component={AcademyPage} />
          <Route exact path="/academy/registration" component={AcademyRegistrationPage} />
          <Route exact path="/privacy-cookies" component={CookieInfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer routes={routes} />
        <CookieDisclaimer>
          We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink url="/privacy-cookies">cookie information page.</InlineLink>
        </CookieDisclaimer>
      </>
    </Router>
  );
}

export default App;
