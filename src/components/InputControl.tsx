import React from 'react';
import {
   IonRow,
   IonCol,
   IonSegment,
   IonSegmentButton,
   IonLabel,
} from '@ionic/react';

const InputControl: React.FC<{
   selectedValue: 'mkg' | 'ftlbs';
   onSelectedValue: (value: 'mkg' | 'ftlbs') => void;
}> = (props) => {
   const inputChangeHandler = (event: CustomEvent) => {
       props.onSelectedValue(event.detail.value)
   }
   return (
      <IonRow>
         <IonCol>
            <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
               <IonSegmentButton value="mkg">
                  <IonLabel>kg/m</IonLabel>
               </IonSegmentButton>
               <IonSegmentButton value="ftlbs">
                  <IonLabel>ft/lbs</IonLabel>
               </IonSegmentButton>
            </IonSegment>
         </IonCol>
      </IonRow>
   );
};

export default InputControl;
