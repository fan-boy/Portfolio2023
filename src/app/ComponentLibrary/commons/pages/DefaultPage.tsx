import { propagateServerField } from "next/dist/server/lib/render-server";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/Navbar";


type theme =
  | "light"
  | "dark"

export default function DefaultPage({
  children,
  selected,
}: {
  children: React.ReactNode,
  selected: string,
}) {
  return (
    <>
      <Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </Head>
      <main className={`flex flex-col "`}>

        <Navbar selected={selected} />
        {children}
        <Footer />
      </main>
    </>
  )
}
