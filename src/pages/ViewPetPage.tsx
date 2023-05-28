import React, { useEffect, useState } from "react"
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useParams } from "react-router-dom"
import { getPetById } from "../api/api"
import { Pet } from "../models/models"

const ViewPetPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>()
  const [pet, setPet] = useState<Pet | null>(null)

  const petIdParsed = parseInt(petId)

  useEffect(() => {
    getPetById(petIdParsed)
      .then((response) => {
        setPet(response)
      })
      .catch((error) => {
        console.error("Error fetching pet:", error)
      })
  }, [petId])

  console.log("pet", pet)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View Pet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {pet ? (
          <div>
            <h2>{pet.name}</h2>
            <p>Status: {pet.status}</p>
            <div>
              {pet.photoUrls.length > 0 ? (
                <img src={pet.photoUrls[0]} alt="Photo" />
              ) : (
                <p>No image available</p>
              )}
            </div>

            {/* Display other pet details as needed */}
          </div>
        ) : (
          <p>Loading pet...</p>
        )}
      </IonContent>
    </IonPage>
  )
}

export default ViewPetPage
