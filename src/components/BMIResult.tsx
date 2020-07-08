import React from 'react';
import { IonRow, IonCard, IonCardContent, IonCol } from '@ionic/react';

const BMIResult: React.FC<{ theResult: number }> = (props) => {
   return (
      <IonRow>
         <IonCol>
            <IonCard>
               <IonCardContent className="ion-text-center">
                  <h2>{props.theResult.toFixed(1)}</h2>
               </IonCardContent>
            </IonCard>
         </IonCol>
      </IonRow>
   );
};

export default BMIResult;
