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
import { findPetsByStatus } from "../api/api"
import { Link } from "react-router-dom"

const PetsByStatus: React.FC<{ status: string }> = ({ status }) => {
  const [pets, setPets] = useState<any[]>([])

  useEffect(() => {
    // Fetch pets by status
    findPetsByStatus(status)
      .then((response) => {
        setPets(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [status])

  console.log("pets:", pets)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{status} pets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {pets.map((pet, index) => (
            <IonItem key={index}>
              <Link to={`/pets/byId/${pet.id}`}>
                <IonButton expand="full">{pet.name}</IonButton>
              </Link>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default PetsByStatus
