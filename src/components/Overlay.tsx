export interface IModalOverlay {
    modalOpened: boolean;
    onModalClose: () => void;
}

const Overlay = ({ modalOpened, onModalClose }: IModalOverlay) => {
  return (
    <div className={`
    fixed inset-x-0 inset-y-0 bg-overlay bg-cover bg-center
    transition-opacity duration-300 ease-linear
    ${modalOpened ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0'}
    `}
    onClick={ onModalClose }
    >
        <div className="w-full h-full backdrop-brightness-50"/>
    </div>
  )
}

export default Overlay
