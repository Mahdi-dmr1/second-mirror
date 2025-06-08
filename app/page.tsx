const Page = () => {
  return(
      <div className="h-dvh w-full flex justify-center items-center">
        <div className="w-1/3 bg-gray-500 flex flex-col justify-center h-full items-center">
            <p className="text-black">This is the second page</p>
            <iframe className="h-full" src="https://first-mirror.vercel.app/" />
        </div>
      </div>
  )
}

export default Page;