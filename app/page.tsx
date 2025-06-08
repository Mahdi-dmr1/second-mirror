"use client"
import {useEffect} from "react";

const Page = () => {
    useEffect(() => {
        console.log("page");
        window.addEventListener('message', (event) => {
            if (event.origin === 'https://first-mirror.vercel.app/') {
                console.log('Message received from iframe:', event.data);
            }
        });
        return () => {
            window.removeEventListener('message', () => {});
        };
    }, []);

  return(
      <div className="h-dvh w-full flex justify-center items-center">
        <div className="w-full bg-gray-500 flex flex-col justify-center h-full items-center">
            <p className="text-black">This is the second page</p>
            <iframe className="h-full w-full" src="https://first-mirror.vercel.app/" />
        </div>
      </div>
  )
}

export default Page;