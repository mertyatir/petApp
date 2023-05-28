import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/react"
import { useState } from "react"
import { addPet } from "../api/api"

const AddPetPage: React.FC = () => {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [id, setId] = useState("")
  const [image, setImage] = useState("")

  const handleAddPet = () => {
    const newPet = {
      name,
      status,
      photoUrls: [image],
      id,
    }

    addPet(newPet)
      .then((response) => {
        console.log("New pet added:", response)
        // Clear input fields after successful addition
        setName("")
        setStatus("")
      })
      .catch((error) => {
        console.error("Error adding pet:", error)
      })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Pet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Name"
          value={name}
          onIonChange={(e) => setName(e.detail.value!)}
        ></IonInput>
        <IonInput
          placeholder="Id"
          value={id}
          onIonChange={(e) => setId(e.detail.value!)}
        ></IonInput>
        <IonSelect
          placeholder="Status"
          value={status}
          onIonChange={(e) => setStatus(e.detail.value)}
        >
          <IonSelectOption value="available">Available</IonSelectOption>
          <IonSelectOption value="pending">Pending</IonSelectOption>
          <IonSelectOption value="sold">Sold</IonSelectOption>
        </IonSelect>

        <IonInput
          placeholder="imageUrl"
          value={image}
          onIonChange={(e) => setImage(e.detail.value!)}
        ></IonInput>

        <IonButton expand="full" onClick={handleAddPet}>
          Add Pet
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default AddPetPage
