import Image from 'next/image'
import Navbar from '../../components/navbar'


export default function Home() {
  return (
    <div className='bg-blue-100 h-[100vh]'>
      <Navbar />
      <h1 className='text-green-100'>Homepage</h1>
    </div>
  )
}
