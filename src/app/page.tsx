import Link from 'next/link';

import QuoteSlider from '@/components/Slider';

import '@/app/globals.css';

export default function Home() {
  const quotes = [
    {
      text: 'Read books. Add some books which you read in past time',
    },
    {
      text: 'Readable books. Add some books which you read in current time',
    },
    {
      text: 'Awaiting books. Add some books which you want to read in feature',
    },
  ];

  return (
    <main className="container mx-auto flex justify-around items-center pt-40">
      <div className="container w-2/5 text-center">
        <h2 className="text-7xl">Love read books?</h2>
        <h3 className="text-xl mt-5 pb-32">
          Lets add a few books and create some reviews! Enjoy!
        </h3>
        <QuoteSlider quotes={quotes} />
        <button
          className="bg-blue-500
          hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          <Link href="/book-form">Add book</Link>
        </button>
      </div>
      <div className="container w-2/5 text-center">IMG</div>
    </main>
  );
}
