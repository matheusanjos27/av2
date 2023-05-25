import { Link } from 'react-router-dom'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'

import firebaseApp from '../../services/firebase'

import { getFirestore, addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'

const Dashboard = () => {
    const { signOut, user } = useContext(UserContext);

    const [message, setMessage] = useState("");

    const db = getFirestore(firebaseApp);

    const handleAdd = async function () {
        const message_json = {
            message,
            email: user.email
        };

        await addDoc(collection(db, "messages"), message_json);
        setMessage("");
    };

    return (
        <>
            <h2>Bem-vindo, {user.username}!</h2>
            <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} />
            <h1>Dashboard</h1>
            <Link to="/game">JOGAR!</Link>
            <div onClick={() => signOut()}>Deslogar</div>
        </>
    );
};

export default Dashboard;
