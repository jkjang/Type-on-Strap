import React from 'react';
import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-2 text-primary">{config.fullName}</h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·<a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            지금 현재는 Web Front-End 파트에서 글로벌 플랫폼 개발을 하고 있으며, <br />
            2021년에 15년차가 되는 개발자 입니다. <br />
            "나의 주변 사람들 성장을 위해 필요한 사람! 본인보다 상대방을 생각하고 <br />
            상대방의 성공과 행복이 저에게 기쁨이 되고 서로 성장하고 배려할 수 있는 사람이
            되겠습니다."
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a target="_blank" key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-1">원더피플</h3>
              <div className="subheading mb-3">Global Platform.</div>
              <p>...</p>
              <div className="subheading mb-3">Arean M.</div>
              <p>
                총 5개월간 1인 개발을 하게 되었으며, 시간이 촉박하여 매일 새벽 2시에 퇴근하며 열심히
                일하여 게임을 오픈하는데 일조하였음.
              </p>
              <ul>
                <li>아레나M 운영툴 개발</li>
                <li>진행 기간 : 2018.9 ~ 2019.01</li>
                <li>멤버 : 1명(1인 개발)</li>
                <li>개발 내용</li>
                <ul>
                  <li>운영툴</li>
                  <ul>
                    <li>이벤트 관리</li>
                    <li>토너먼트 관리</li>
                    <li>키워드 쿠폰 관리</li>
                    <li>랜덤 쿠폰 관리</li>
                    <li>접속 보상</li>
                    <li>친구 초대 이벤트</li>
                    <li>계정 관리</li>
                    <li>결제 조회</li>
                    <li>토너먼트 조회</li>
                    <li>동시접속자 관리</li>
                    <li>아이템 발송</li>
                    <li>게임중 우편</li>
                    <li>점검중 우편</li>
                    <li>메시지 발송</li>
                    <li>인게임 롤링 공지</li>
                    <li>광고성 푸시</li>
                    <li>기획 테이블</li>
                  </ul>
                  <li>통계툴</li>
                  <ul>
                    <li>대시보드</li>
                    <li>기본 지표</li>
                    <li>KPI</li>
                    <li>잔존율</li>
                    <li>인앱결제 상품</li>
                    <li>마켓별 매출</li>
                    <li>게임 지표</li>
                    <li>재화량 통계</li>
                    <li>BJ 통계</li>
                    <li>플레이 통계</li>
                    <li>시간대별 통계</li>
                  </ul>
                  <li>점검툴</li>
                  <ul>
                    <li>점검 관리</li>
                    <li>앱 버전 관리</li>
                    <li>동시접속자 관리</li>
                  </ul>
                </ul>
                <li>개발 환경</li>
                <ul>
                  <li>FrontEnd</li>
                  <ul>
                    <li>React</li>
                  </ul>
                  <li>BackEnd</li>
                  <ul>
                    <li>NodeJS</li>
                  </ul>
                  <li>DATABASE</li>
                  <ul>
                    <li>MYSQL</li>
                    <li>Redis : Pub Sub으로 게임서버와 통신하여 점검. </li>
                  </ul>
                  <li>Web Server</li>
                  <ul>
                    <li>NGINX</li>
                  </ul>
                </ul>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018-06 ~ 현재</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                test. Override the digital divide with additional clickthroughs from DevOps.
                Nanotechnology immersion along the information highway will close the loop on
                focusing solely on the bottom line.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to establish a
                framework. Taking seamless key performance indicators offline to maximise the long
                tail. Keeping your eye on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play networks.
                Dynamically procrastinate B2C users after installed base benefits. Dramatically
                visualize customer directed convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being outdoors. In the winter,
            I am an avid skier and novice ice climber. During the warmer months here in Colorado, I
            enjoy mountain biking, free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
            shows, I am an aspiring chef, and I spend a large amount of my free time exploring the
            latest technology advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
