import '@/app/globals.css'
import QuoteSlider from '@/components/Slider/Slider';

export default function Home() {
  const quotes = [
    {
      text: 'Read boRead booksRead booksRead booksRead booksRead booksRead booksRead booksoks',
    },
    {
      text: 'Readable books',
    },
    {
      text: 'Awaiting books',
    },
  ];

  return (
    <main className='container mx-auto flex justify-around items-center pt-40'>
      <div className="container w-2/5 text-center">
        <h2 className="text-7xl">Love read books?</h2>
        <h3 className="text-xl mt-5 pb-32">Lets add a few books and create some reviews! Enjoy!</h3>
        <QuoteSlider quotes={quotes} />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Add book
        </button>
      </div>
      <div className="container w-2/5 text-center">IMG</div>
    </main>
  )
}
