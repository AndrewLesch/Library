import Link from "next/link";

export default function Header () {
  return (
    <header>
      <Link href="/books">Книги</Link>
      <Link href="/">Главная</Link>
    </header>
  )
}