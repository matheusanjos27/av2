import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/user'

import firebaseApp from '../../services/firebase'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'


const Login = () => {
  const { signIn, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    const db = getFirestore(firebaseApp);

    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Usuário encontrado, realizar o login
      signIn(email, password);
      navigate("/dashboard");
    } else {
      setShowError(true);
    }
  }

  const closeModal = () => {
    setShowError(false);
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h1>Logar</h1>
      <div>
        <input
          type="text"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>

      {showError && (
        <div className="modal">
          <div className="modal-content">
            <h2>Erro</h2>
            <p>Usuário não encontrado.</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Login;
