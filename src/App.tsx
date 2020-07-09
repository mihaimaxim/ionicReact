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
   IonAlert,
} from '@ionic/react';

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
import BMIResult from './components/BMIResult';
import InputControl from './components/InputControl';

const App: React.FC = () => {
   const [calculatedBMI, updateBMI] = useState<number>();
   const [error, setError] = useState<boolean>();
   const [control, setControl] = useState<'mkg' | 'ftlbs'>('mkg');

   const heightInputRef = useRef<HTMLIonInputElement>(null);
   const weightInputRef = useRef<HTMLIonInputElement>(null);

   const calculateBMI = () => {
      const height = heightInputRef.current!.value;
      const weight = weightInputRef.current!.value;

      if (!height || !weight || height <= 0 || weight <= 0) {
         setError(true);
         return;
      }

      const heightConverter = control === 'mkg' ? 1 : 3.3;
      const weightConverter = control === 'mkg' ? 1 : 2.2;

      const convertedHeight = +height / heightConverter;
      const convertedWeight = +weight / weightConverter;

      const bmi = +convertedWeight / (+convertedHeight * +convertedHeight);

      updateBMI(bmi);
   };

   const clearError = () => {
      setError(false);
   };

   const selectedInputValueHandler = (selectedValue: 'mkg' | 'ftlbs') => {
      setControl(selectedValue);
   };

   const resetInputs = () => {
      heightInputRef.current!.value = '';
      weightInputRef.current!.value = '';
      updateBMI(undefined);
      setControl('mkg');
   };

   return (
      <React.Fragment>
         <IonAlert
            isOpen={!!error}
            onDidDismiss={() => setError(false)}
            header={'ALERT'}
            message={'Please enter a valid input number!'}
            buttons={[{ text: 'OK', handler: clearError }]}
         />
         <IonApp>
            <IonHeader>
               <IonToolbar color="primary">
                  <IonTitle>BMI Calculator</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
               <IonGrid className="ion-text-center ion-margin">
                  <InputControl
                     selectedValue={control}
                     onSelectedValue={selectedInputValueHandler}
                  />
                  <IonRow>
                     <IonCol>
                        <IonItem>
                           <IonLabel position="floating">
                              Your height (
                              {control === 'mkg' ? 'meters' : 'feet'})
                           </IonLabel>
                           <IonInput
                              type="number"
                              ref={heightInputRef}
                           ></IonInput>
                        </IonItem>
                     </IonCol>
                  </IonRow>
                  <IonRow>
                     <IonCol>
                        <IonItem>
                           <IonLabel position="floating">
                              Your weight ({control === 'mkg' ? 'kgs' : 'lbs'})
                           </IonLabel>
                           <IonInput
                              type="number"
                              ref={weightInputRef}
                           ></IonInput>
                        </IonItem>
                     </IonCol>
                  </IonRow>
                  <BMIButtons
                     onCalculate={calculateBMI}
                     onReset={resetInputs}
                  />
                  {calculatedBMI && <BMIResult theResult={calculatedBMI} />}
               </IonGrid>
            </IonContent>
         </IonApp>
      </React.Fragment>
   );
};

export default App;
