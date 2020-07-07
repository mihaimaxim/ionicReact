import React from 'react';
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from '@ionic/react';

const InputsComponent: React.FC = () => {
   return (
      <>
         <IonRow>
            <IonCol>
               <IonItem>
                  <IonLabel position="floating">Your height</IonLabel>
                  <IonInput></IonInput>
               </IonItem>
            </IonCol>
         </IonRow>
         <IonRow>
            <IonCol>
               <IonItem>
                  <IonLabel position="floating">Your weight</IonLabel>
                  <IonInput></IonInput>
               </IonItem>
            </IonCol>
         </IonRow>
      </>
   );
};

export default InputsComponent;
