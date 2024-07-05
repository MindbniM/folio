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
                    I am Your name a <span>Your Expertise</span>
                  </h2>
                  <p>
                    Hi! My name is Your Name. I am a your expertise, and I am
                    very passionate and dedicated to my work. With 1 years
                    experience as a your expertise, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.lpdata.work</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Xi&apos;an</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>mindbnim@foxmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email2 : <span>mindbnim16@gmail.com</span>
                      </p>
                    </div>
                    
                    <div className="info-item padd-15">
                      <p>
                        Blog : <span>https://blog.csdn.net/2301_77838258?spm=1000.2115.3001.5343</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        GitHub : <span>https://github.com/MindbniM</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
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
