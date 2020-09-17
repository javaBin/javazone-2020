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
import {BuyTicketsPage} from "./pages/Tickets/BuyTicketsPage";
import {JourneyZonePage} from "./pages/JourneyZone/JourneyZone";
import {CoronaPage} from "./pages/Corona/Corona";
import {ProgramPage} from "./pages/Progam/ProgramPage";

const routes: NavRoute[] = [
  {title: 'Info', url: '/info', show: true},
  {title: 'Tickets', url: '/tickets', show: true},
  {title: 'Tickets', url: '/tickets/buy', show: false},
  {title: 'Speakers', url: '/speakers', show: true},
  {title: 'JourneyZone', url: '/journeyzone', show: false},
  {title: 'Partners', url: '/partners', show: true},
  {title: 'VR-Program', url: '/vr-program', show: true},
  {title: 'Kids', url: '/kids', show: false},
  {title: 'Frivillige', url: '/volunteers', show: false},
  {title: 'About', url: '/about', show: true},
  {title: 'Cookies', url: '/privacy-cookies', show: false},
  {title: 'Corona', url: '/corona', show: false},
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
          <Route exact path="/vr-program" component={ProgramPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/volunteers" component={VolunteersPage} />
          <Route exact path="/journeyzone" component={JourneyZonePage} />
          <Route exact path="/privacy-cookies" component={CookieInfoPage} />
          <Route exact path="/corona" component={CoronaPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer routes={routes} />
        <CookieDisclaimer>
          We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink color="pink" url="/privacy-cookies">cookie information page.</InlineLink>
        </CookieDisclaimer>
      </>
    </Router>
  );
}

export default App;
