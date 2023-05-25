import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { SWRConfig } from "swr";

import AppSidebar from "@/components/AppSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
            }}
        >
            <div className={`${inter.className} flex flex-col h-screen`}>
                <div className="bg-gray-700 w-full text-white p-4">Frontend Test</div>
                <div className="flex w-full">
                    <AppSidebar />
                    <div className="p-4 w-full">
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>
        </SWRConfig>
    );
}
