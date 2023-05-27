import { useState } from 'react'
import Overlay from './components/Overlay'
import Payments from './components/Payments'
import PayForm from './components/PayForm';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => setModalIsOpen(false);

  return (
    <>
      <Payments onModalOpen={handleModalOpen}/>
      <Overlay 
        modalOpened={modalIsOpen}
        onModalClose={handleModalClose}
      />
      <PayForm 
        modalOpened={modalIsOpen}
        onModalClose={handleModalClose}
      />
    </>
  )
}

export default App
