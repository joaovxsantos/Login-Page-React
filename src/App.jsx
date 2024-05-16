import './App.css'
import Input from './assets/Components/Input'
import InteractiveButtons from './assets/Components/InteractiveButtons'

function App() {

  const dataInputs = [{
    type: "email",
    icon: "person-outline"
  },
  {
    type: "password",
    icon: "lock-closed-outline"
  }
  ]

  return (
    <>
      <div className="login-container">
        <h1>System Login</h1>
        {dataInputs.map((data) => <Input key={data.type} {...data} />)}
        <InteractiveButtons />
        <button type="submit" id="btn">Login</button>
        <span>Don't have an account? <a href="">register</a></span>
      </div>
    </>
  )
}

export default App
