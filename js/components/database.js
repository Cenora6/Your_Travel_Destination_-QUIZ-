import firebase from "./../../config/firebase";

const addHistory = (places, email) => {

    places.forEach( name => {
        firebase.firestore().collection("history").add({
            place: name,
            email: email
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    })
};

export default addHistory;