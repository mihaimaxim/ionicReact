import React from 'react';
import {
   IonApp,
   IonContent,
   IonTitle,
   IonToolbar,
   IonGrid,
   IonRow,
   IonCol,
   IonInput,
   IonButton,
   IonItem,
   IonLabel,
   IonHeader,
   IonCard,
   IonCardContent,
   IonIcon,
} from '@ionic/react';

import { calculatorOutline, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InputsComponent from './components/inputs';

const App: React.FC = () => (
   <IonApp>
      <IonHeader>
         <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
         </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
         <IonGrid className="ion-text-center ion-margin">
            <InputsComponent />
            <IonRow className="ion-margin">
               <IonCol className="ion-text-left">
                  <IonButton>
                     <IonIcon slot="start" icon={calculatorOutline} />
                     Calculate
                  </IonButton>
               </IonCol>
               <IonCol className="ion-text-right">
                  <IonButton>
                     <IonIcon slot="start" icon={refreshOutline} />
                     Reset
                  </IonButton>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCard>
                  <IonCardContent></IonCardContent>
               </IonCard>
            </IonRow>
         </IonGrid>
      </IonContent>
   </IonApp>
);

export default App;
