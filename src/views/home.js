import React, {useState} from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import './home.css'


const Home = (props) => {

    // State for vote counts
    const [votes, setVotes] = useState([0, 0, 0]);

    // Function to handle vote increment
    const handleVote = (index) => {
      setVotes((prevVotes) => {
        const newVotes = [...prevVotes];
        newVotes[index] += 1;
        return newVotes;
      });
    };
  
    // Function to handle vote decrement
    const handleUnvote = (index) => {
      setVotes((prevVotes) => {
        const newVotes = [...prevVotes];
        if (newVotes[index] > 0) {
          newVotes[index] -= 1;
        }
        return newVotes;
      });
    };

  return (
    <div className="home-container">
      <Helmet>
        <title>Voting System</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">LPL T20 </h1>
            <h1 className="home-text01 HeadingThree">
              LANKAN PREMIER LEAUGE 2024
            </h1>
            <span className="home-text02 Medium">
              The Lankan Premier League (LPL) is a professional Twenty20 cricket
              league in Sri Lanka, featuring teams from different cities and
              regions.  
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="BUY TICKETS"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
            <div className="home-container04">
              <img
                src="/Replaced/sponsor-200h.png"
                alt="image"
                className="home-image"
              />
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/Replaced/bk-1500h.jpg" className="home-image01" />
      <section className="home-features">
        <h1 className="home-text03 HeadingOne">
          Vote for Your favourite Player
        </h1>
        <span className="home-text04">
          &quot;The inclusion of cricket player voting enhances transparency and
          fairness in the selection process, giving players a voice in shaping
          the future of the sport.&quot;
        </span>
      </section>
      <div className="home-players">
        <div className="home-container05">
          <div className="home-pricing-card">
            <h1 className="home-text05">{votes[0]}</h1>
            <button type="button" className="home-button button" onClick={() => handleVote(0)}>
              Vote
            </button>
            <button type="button" className="home-button1 button" onClick={() => handleUnvote(0)}>
              Unvote
            </button>
          </div>
          <div className="home-pricing-card1">
            <button type="button" className="home-button2 button" onClick={() => handleVote(1)}>
              Vote
            </button>
            <button type="button" className="home-button3 button" onClick={() => handleUnvote(1)}>
              Unvote
            </button>
            <h1 className="home-text06">{votes[1]}</h1>
          </div>
          <div className="home-pricing-card2">
            <button type="button" className="home-button4 button" onClick={() => handleVote(2)}>
              Vote
            </button>
            <button type="button" className="home-button5 button" onClick={() => handleUnvote(2)}>
              Unvote
            </button>
            <h1 className="home-text07">{votes[2]}</h1>
          </div>
        </div>
      </div>
      <section className="home-container06">
        <div className="home-container07">
          <h1 className="home-text08">Sri Lankan Premier League (LPL)</h1>
          <span className="home-text09">
            The Sri Lankan Premier League (LPL) is a professional Twenty20
            cricket league established in 2011 by Sri Lanka Cricket (SLC).
          </span>
        </div>
        <div className="home-container08">
          <div className="home-container09">
            <img
              alt="image"
              src="/Replaced/img1-600w.jpg"
              className="home-image02"
            />
            <span className="home-text10">
              <span>
                &quot;I want to give my six hours of serious cricket on the
                ground and then take whatever the result.&quot;
              </span>
              <br className="Small"></br>
              <span className="Small">- Sachin Tendulkar</span>
            </span>
            <div className="home-container10">
              <img
                alt="image"
                src="/Replaced/cup-1000w.jpg"
                className="home-image03"
              />
            </div>
          </div>
          <div className="home-container11">
            <img
              alt="image"
              src="/Replaced/img2-400h.jpg"
              className="home-image04"
            />
            <div className="home-container12">
              <h3 className="home-text14 HeadingTwo">
                LPL is a professional Twenty20 cricket league held in Sri Lanka.
              </h3>
              <p>
                <span>
                  It was established in 2011 by Sri Lanka Cricket (SLC) as a
                  franchise-based tournament, following the success of other
                  major T20 leagues around the world like the Indian Premier
                  League (IPL) and the Big Bash League (BBL).
                </span>
                <br></br>
                <br></br>
                <span>
                  The SLPL features both local and international cricketers,
                  with the participation of various franchise teams representing
                  different regions in Sri Lanka. The league aims to promote and
                  develop cricket in the country while providing a platform for
                  emerging talents to showcase their skills alongside
                  established players.
                </span>
                <br></br>
                <br></br>
                <span>
                  The format of the SLPL includes round-robin matches followed
                  by playoffs, leading to the final where the top two teams
                  compete for the championship title. The league attracts
                  cricket fans from across Sri Lanka and beyond, as they get to
                  witness exciting and high-quality cricketing action.
                </span>
                <br></br>
                <br></br>
                <span>
                  Over the years, the SLPL has seen notable cricketers from Sri
                  Lanka and around the world participate in the league, adding
                  to its competitiveness and appeal.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image05" />
        <div className="home-container13">
          <div className="home-container14">
            <div className="home-container15">
              <h2 className="home-text27">VICTORIOUS</h2>
              <p className="home-text28">BE A PART OF SOMETHING</p>
              <p className="home-text29">
                We are always on the lookout for talented individuals who are
                passionate about cricket and dedicated to driving success for
                our team. Join our dynamic and exciting team and contribute to
                the future of Sri Lankan cricket.
              </p>
              <p className="home-text30">SHAMMI SILVA</p>
              <p className="home-text31">PRESIDENT OF SRI LANKA CRICKET</p>
              <div className="home-container16">
                <img
                  alt="image"
                  src="/team-4-200h.jpg"
                  className="home-image06"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/team-3-200h.jpg"
                  className="home-image07"
                />
                <div className="home-container18"></div>
                <img
                  alt="image"
                  src="/Replaced/shammi-200w.png"
                  className="home-image08"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container19">
              <img
                alt="image"
                src="/Replaced/cricket%20logo-400h.jpg"
                className="home-image09"
              />
            </div>
          </div>
        </div>
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <div className="home-pricing">
        <div className="home-pricing1"></div>
      </div>
    </div>
  )
}

export default Home
