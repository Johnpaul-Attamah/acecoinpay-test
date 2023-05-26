import Clock from "./Clock"
import Logo from "./Logo"

const FormSection = () => {
  return (
    <section className='
    w-[65%] bg-[red]
    '
    >
        <header className='flex items-center justify-between'>
            <Logo />
            <Clock />
        </header>
        <form>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </form>
    </section>
  )
}

export default FormSection
