import { useLoginLogout } from './hooks/useLoginLogout';

function App() {
  const {login, logout} = useLoginLogout()

  return (
    <div>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default App
