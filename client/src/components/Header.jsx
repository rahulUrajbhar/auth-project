import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex items-center justify-between max-w-full p-2 px-20'>
            <Link to='/'>
               <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ui className='flex list-none gap-10'>
              <Link to='/'>
                <li>Home</li>
              </Link> 
              <Link to='/about'>   
                <li>About</li>
              </Link>
              <Link to='/sign-in'>   
                <li>Sign In</li>
              </Link>
            </ui>
        </div>
    </div>
  )
}
