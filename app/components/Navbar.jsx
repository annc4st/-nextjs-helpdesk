import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/code-logo.svg'

export default function Navbar() {
  return (
    <nav>
    <Image src={Logo} alt='Helpdesk code logo' 
        width={70} quality={100}
        placeholder="empty"
    />
    <h1>Helpdesk</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
    <Link href="/tickets/create">Add Ticket</Link>
      
    </nav>
  )
}
