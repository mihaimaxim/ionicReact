import React from 'react';
import { IonRow, IonCard, IonCardContent } from '@ionic/react';

const BMIResult: React.FC<{ theResult: number }> = (props) => {
   return (
      <IonRow>
         <IonCard>
            <IonCardContent>
               <h2>{props.theResult}</h2>
            </IonCardContent>
         </IonCard>
      </IonRow>
   );
};

export default BMIResult;
