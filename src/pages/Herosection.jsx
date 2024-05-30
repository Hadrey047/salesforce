import React from 'react'
import './Herosection.css'


function Herosection() {
  return (
  <div>
    <div className='hero-container'>
      <div className='hero-text'>
        <h1><span className='s-hero'>Salesforce</span> Made Simple</h1>
        <p>Join the Salesforce Saturday weekly email. 
          Every Saturday,<br/> you'll get 1 actionable tip 
          on Salesforce technology or career<br/>
           growth related to the Salesforce Industry.
        </p>    
        <form>
            <input type="text" name="email" placeholder='Email' />
            <button className='btn' type='submit'>Join Free</button>
        </form>
      </div>                                                                                                                                                                                                                                                                                                                                                                   
    </div>

    <div>
      <h1>THenekekek</h1>
    </div>

    <div className='hero-container2'>
      <div className='about-me'>
        <h1><span className='s-hero'>ABOUT ME</span></h1>
        <p>In the last decade I went from<br/>
           struggling poker player to a 13x<br/>
           Certified Developer & Architect.<br/>
           <br/>
            Now I help thousands of students<br/>
             improve their Salesforce technical skills.
        </p>    
        <button className='btn'>Read My Story</button>
      </div>                                                                                                                                                                                                                                                                                                                                                                   
    </div>

    <div className='section4'>
      <div className='section4-p'>
        <h1 className='head'>1</h1>
        <h3>SALESFORCE SATURDAYS</h3>
        <p>Every Saturday, you'll get 1 <br/>
        actionable tip on Salesforce<br/> 
        technology or career growth related<br/>
         to the Salesforce industry.</p>
        <button >Join Newsletter</button>
      </div>
      <div className='section4-p'>
        <h1>2</h1>
        <h3>DEEP-DIVE DIGITAL COURSES</h3>
        <p>Self-paced courses that teach you<br/>
        key Salesforce technical skills, provide<br/> 
        career tips, and help you earn more.<br/>
        </p>
        <button >View Courses</button>
      </div>
      <div className='section4-p'>
        <h1>3</h1>
        <h3>1:1 CONSULTING</h3>
        <p>Enjoy my style? Work with me one on<br/>
        one to solve a specific problem, or<br/> 
        develop a solution roadmap for your<br/>
        environment.
        </p>
        <button >View Courses</button>
      </div>
    </div>

    <div className='section-5'>
      <h1>Latest from Me</h1>
    </div>

    <div className='section-6'>
    <div className='section6-text'>
        <h1><span className='s-hero'>Salesforce</span> Made Simple</h1>
        <p>Join the Salesforce Saturday newsletter. Every Saturday, you'll get 1<br/> 
        actionable tip on Salesforce technology or career growth for your Salesforce<br/>
        Career.
        </p>    
        <form>
            <input type="text" name="email" placeholder='Email' />
            <button className='btn' type='submit'>Join Free</button>
        </form>
      </div>       
    </div>

</div>
  )
}

export default Herosection