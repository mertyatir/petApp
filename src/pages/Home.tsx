import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Petstore App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" routerLink="/pets">
          View Pets by Status
        </IonButton>
        <IonButton expand="full" routerLink="/add-pet">
          Add new pet
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Home
