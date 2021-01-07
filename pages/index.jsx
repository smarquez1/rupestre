import Image from "next/image"

// import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="h-screen flex">
      <div className="self-center">
        <Image src="/rupestre-logo-v4.png" alt="rupestre-logo" height={682} width={2000} />
      </div>

      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"> */}
      {/*   <div className="flex-shrink-0"> */}
      {/*     <Image className="h-12 w-12" src="/rupestre-symbol.png" height={64} width={64} /> */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     <div className="text-xl font-medium text-black">ChitChat</div> */}
      {/*     <p className="text-gray-500">You have a new message!</p> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  )
}

export default Home
