import Image from 'next/image'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="https://storyus-core.s3.eu-west-2.amazonaws.com/core/site/_v1/family-sunset-austria.jpg"
        alt="Picture of the author"
        width={650}
        height={480}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}



export default Home
