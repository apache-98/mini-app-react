import { useMovie } from "../hooks/useMovie.jsx"
import { Card } from 'antd';
const { Meta } = Card;


export function Movie() {

  const { movie } = useMovie();

  console.log("peliculas desde componentes", movie)



  return (
    <>

      <section className="border m-[100px] grid grid-cols-4 gap-6 pb-4 mb-12">
        {
          movie.map((item) => (
            <Card
              key={movie.id}
              hoverable
              style={{ width: 240 }}
              cover={<img src={item.image} alt="imagen" className="w-[300px] h-[350px] object-contain" />}
            >
              <Meta title={item.title} description="www.instagram.com" />
            </Card>

          ))
        }

      </section>

    </>
  )
}
