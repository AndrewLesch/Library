type Props = {
  params : {
    id: string;
  }
}

export function generateMetadata ({params : {id} }: Props) {
  return {
    title : id,
  }
}

export default function ReadBook ({params : {id}} : Props) {
  return <h1>Book 1 {id}</h1>
}