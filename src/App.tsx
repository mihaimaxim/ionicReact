import React, { useRef, useState } from 'react';
import {
   IonApp,
   IonContent,
   IonTitle,
   IonToolbar,
   IonGrid,
   IonRow,
   IonCol,
   IonInput,
   IonItem,
   IonLabel,
   IonHeader,
   IonCard,
   IonCardContent,
} from '@ionic/react';

import BMIControls from './components/BMIButtons';

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
import BMIButtons from './components/BMIButtons';

const App: React.FC = () => {
   const [calculatedBMI, updateBMI] = useState<number>();

   const heightInputRef = useRef<HTMLIonInputElement>(null);
   const weightInputRef = useRef<HTMLIonInputElement>(null);

   const calculateBMI = () => {
      const height = heightInputRef.current!.value;
      const weight = weightInputRef.current!.value;

      if (!height || !weight) {
         return;
      }

      const bmi = +weight / (+height * +height);

      updateBMI(bmi);
   };

   const resetInputs = () => {
      heightInputRef.current!.value = '';
      weightInputRef.current!.value = '';
   };

   return (
      <IonApp>
         <IonHeader>
            <IonToolbar color="primary">
               <IonTitle>BMI Calculator</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding">
            <IonGrid className="ion-text-center ion-margin">
               <IonRow>
                  <IonCol>
                     <IonItem>
                        <IonLabel position="floating">Your height</IonLabel>
                        <IonInput ref={heightInputRef}></IonInput>
                     </IonItem>
                  </IonCol>
               </IonRow>
               <IonRow>
                  <IonCol>
                     <IonItem>
                        <IonLabel position="floating">Your weight</IonLabel>
                        <IonInput ref={weightInputRef}></IonInput>
                     </IonItem>
                  </IonCol>
               </IonRow>
               {/* <IonRow className="ion-margin">
                  <IonCol className="ion-text-left">
                     <IonButton onClick={calculateBMI}>
                        <IonIcon slot="start" icon={calculatorOutline} />
                        Calculate
                     </IonButton>
                  </IonCol>
                  <IonCol className="ion-text-right">
                     <IonButton onClick={resetInputs}>
                        <IonIcon slot="start" icon={refreshOutline} />
                        Reset
                     </IonButton>
                  </IonCol>
               </IonRow> */}
               <BMIButtons onCalculate={calculateBMI} onReset={resetInputs}/>
               {calculatedBMI && (
                  <IonRow>
                     <IonCard>
                        <IonCardContent>
                           <h2>{calculatedBMI}</h2>
                        </IonCardContent>
                     </IonCard>
                  </IonRow>
               )}
            </IonGrid>
         </IonContent>
      </IonApp>
   );
};

export default App;
