import Image from "next/image"

const Home = () => {
  return (
    <div className="">
      <div className={`bg-main bg-cover bg-no-repeat bg-center h-5/6`}>
        <p className="text-4xl text-white py-72 uppercase">
          A new old way to make wine.
        </p>
      </div>
      {Array.from({ length: 3 }, (_, k) => (
        <Image
          key={k}
          src="/rupestre-logo-v4.png"
          alt="rupestre-logo"
          height={682}
          width={2000}
        />
      ))}
    </div>
  )
}

export default Home
