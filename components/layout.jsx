import Head from "next/head";
export default function Layout({ children, background, home, isNav, metaInfo }) {
  return (
    <div className={`layout-container ${isNav ? "nav-layout" : ""}`}>
      <Head>
        <meta
          name="description"
          content="QTMA hires 12 Developers, 4 Product Manager, 4 Designers, 8 Business Analysts to complete our product teams. We also hire various operating roles. Applications include a written application and interview with the incoming Co - Chairs."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>QTMA</title>
        <meta name="og:title" content={"QTMA"} />
      </Head>
      <main style={{ backgroundColor: background, borderBottomRightRadius: home ? "35rem" : "" }}>
        {children}
      </main>
    </div>
  );
}
