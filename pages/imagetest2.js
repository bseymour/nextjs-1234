import Image from 'next/image'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="https://cdn-o7.outfit7.com/wp-content/uploads/2021/05/banner_3_NEW.png"
        alt="Picture of the author"
        width={1800}
        height={492}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}



export default Home
