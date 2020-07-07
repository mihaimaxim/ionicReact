import React from "react";
import {
  IonApp,
  IonContent,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonToolbar color="primary">
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput>Your height</IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput>Your height</IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-left">Calculate</IonCol>
            <IonCol className="ion-text-right">Reset</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
