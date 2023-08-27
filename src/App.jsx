import { useState } from 'react'
import Background from './components/Background'
import Content from './components/Content'
import ContextProvider from './ContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Background />
      <Content />
    </ContextProvider>
  )
}

export default App
