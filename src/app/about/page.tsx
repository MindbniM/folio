import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    一名 C++ 开发者
                  </h2>
                  <p>
                    *******************后面再写*****************************
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <a href="https://www.lpdata.work" target="_blank" rel="noopener noreferrer">www.lpdata.work</a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Xi&apos;an</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <a href="mailto:mindbnim@foxmail.com">mindbnim@foxmail.com</a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email2 : <a href="mailto:mindbnim16@gmail.com">mindbnim16@gmail.com</a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Blog : <a href="https://blog.csdn.net/2301_77838258?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">CSDN Blog</a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        GitHub : <a href="https://github.com/MindbniM" target="_blank" rel="noopener noreferrer">github.com/MindbniM</a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                {/* 删除了技能部分 */}
              </div>
              {/* 删除了教育背景和工作经验部分 */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
