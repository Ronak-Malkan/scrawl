import React from 'react';
import ReactDOM from 'react-dom';
import '../../style/landingPage.css';
import {useNavigate} from 'react-router-dom';

function LandingPage(){
  const navigate = useNavigate();

  let featuresFirstChild = {
    marginTop: "27px"
  }

  let featuresLastChild = {
    marginBottom: "27px"
  }

  function getStarted() {
    navigate(`/signUp`);
  }

  return(
    <div className='body'>
      <h1 className='scrawlTitle'>Scrawl</h1>
      <h3 className='subTitle'>Simple. Performant. Flexible</h3>
      <p className='description'>Scrawl lets you treat a document as a collection of blocks to hold anything.<br/>
Combine text + data. Ditch your stack of doc + sheet. </p>
      <div className='featureBox'>
      <p className='features' style={featuresFirstChild}>Supports Markdown</p><br/>
      <p className='features'>Use it Solo</p><br/>
      <p className='features'>Collaborate with others</p><br/>
      <p className='features' style={featuresLastChild}>Open Source</p><br/>
      </div>
      <div className='buttons'>
        <a className='landingPageButtons' href="https://github.com/scrawlapp">Find us on GitHub</a>
        <button className='landingPageButtons' onClick={getStarted}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage;