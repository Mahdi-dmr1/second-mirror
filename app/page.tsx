"use client"
import {useEffect, useRef} from "react";

const Page = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log('Message received from iframe:', event.data);
        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const sendMessageToIframe = () => {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('Hello from parent!', '*');
        }
    };

    return(
        <div className="h-dvh w-full flex justify-center items-center">
          <div className="w-full bg-gray-500 flex flex-col justify-center h-full items-center">
              <p className="text-black">This is the second page</p>
              <button onClick={sendMessageToIframe} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Send Message to Iframe</button>
              <iframe ref={iframeRef} className="h-full w-full" src="https://first-mirror.vercel.app/" />
          </div>
        </div>
    )
}

export default Page;

