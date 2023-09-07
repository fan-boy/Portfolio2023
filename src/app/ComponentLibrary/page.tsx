import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='font-serif font-regular font-italic'>
          Is this new font?
      </h1>

      <h2 className='font-sans '>
        Is this quicksand?
      </h2>
    </main>
  )
}
