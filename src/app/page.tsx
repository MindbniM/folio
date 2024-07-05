import Head from 'next/head';

export default async function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Your Website Title</title>
      </Head>
      <main>
        <section className="home section" id="home">
          <div className="container">
            <div className="intro">
              <img
                src="/imgs/MindbniM.png"
                alt="Profile"
                className="shadow-dark"
              />
              <h1>MindbniM</h1>
              <div className="social-links">
                <a href="https://github.com/MindbniM" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" />
                </a>
                <a href="https://blog.csdn.net/2301_77838258?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-rss" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
