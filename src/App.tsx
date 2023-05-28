import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import Home from "./pages/Home"
import PetListByStatusPage from "./pages/PetListByStatusPage"
import PetsByStatus from "./pages/PetsByStatus"
import AddPetPage from "./pages/AddPetPage"
import ViewPetPage from "./pages/ViewPetPage"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/pets" component={PetListByStatusPage} />
        <Route
          path="/pets/sold"
          component={() => <PetsByStatus status="sold" />}
          exact={true}
        />
        <Route
          path="/pets/pending"
          component={() => <PetsByStatus status="pending" />}
          exact={true}
        />
        <Route
          path="/pets/available"
          component={() => <PetsByStatus status="available" />}
          exact={true}
        />
        <Route path="/add-pet" component={AddPetPage} />
        <Route path="/pets/byId/:petId" component={ViewPetPage} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
