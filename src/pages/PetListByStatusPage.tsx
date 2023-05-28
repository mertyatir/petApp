import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react"
import { useEffect, useState } from "react"
import { getInventory } from "../api/api"

import { PetStatus } from "../models/models"

const PetListByStatusPage: React.FC = () => {
  const [pets, setPets] = useState<any[]>([])

  useEffect(() => {
    // Fetch the pet inventory
    getInventory()
      .then((response) => {
        const petsData = Object.entries(response).map(([name, count]) => ({
          name,
          count,
        }))
        setPets(petsData)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pet List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {pets.map((pet, index) => {
            // Check if the pet status is in the PetStatus enum
            if (Object.values(PetStatus).includes(pet.name)) {
              return (
                <IonItem key={index}>
                  <IonButton expand="full" routerLink={`/pets/${pet.name}`}>
                    {pet.name}
                  </IonButton>
                  <IonLabel slot="end">{pet.count}</IonLabel>
                </IonItem>
              )
            }
            return null // Skip rendering if the pet status is not in the PetStatus enum
          })}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default PetListByStatusPage
