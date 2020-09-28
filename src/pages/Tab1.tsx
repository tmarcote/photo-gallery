import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonCheckbox, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Suscribe Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Please provide your information</IonItemDivider>
          <IonItem>
            <IonInput type="text" placeholder="Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="email" placeholder="Email"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>I want to recieve information.</IonLabel>
            <IonCheckbox checked slot="start" />
          </IonItem>
        </IonList>
        <div style={{paddingTop: "30px"}}></div>
        <IonButton expand="block">Suscribe</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
