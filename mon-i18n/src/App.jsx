import { useState } from 'react'
import './App.css'

import Header from './pages/Header';
import './i18n'
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
    </>
  )
}

export default App
