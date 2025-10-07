'use client'

import React from 'react'
import DecryptedText from '../DecryptedText/DecryptedText'
import Particles from '../Particles/Particles'   
import '../SplashCursor/TextType'

const About = () => {
  return (
    <section id="about" className="relative py-16 bg-black min-h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#00ffcc", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            <DecryptedText
              text="BSides Agra 2025"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              speed={40}
              revealDirection="start"
            />
          </h2>

          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 sm:mb-10">
            <div style={{ marginTop: '4rem' }}></div>
            <DecryptedText
              text="WHERE HACKERS MEET HERITAGE"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />
          </h3>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Highlights 2024 */}
          <div className="flex flex-col">
            <div className="rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="text-center py-3 sm:py-4">
                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  Highlights 2024
                </h4>
              </div>

              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/XbxIg2zsRs4?autoplay=1&mute=1&loop=1&playlist=XbxIg2zsRs4"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  >    
                  </iframe>
              </div>

            </div>
          </div>

          {/* Right Column - About BSides Agra */}
          <div className="text-white pr-0 lg:pr-6 xl:pr-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-left">
              About BSides Agra
            </h4>

            <div className="space-y-4 sm:space-y-6 text-left">
  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
  BSides Agra is not just another cybersecurity conference — it’s 
            a rebellion carved in red stone. For the first time, 
              the Taj city becomes the arena where hacker grit collides 
              with heritage, and the underground rises to the spotlight. 
                This is where legends won’t just attend — they’ll be made.
  </p>


  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
    At AGR0x01, we’re building a space for raw talks, war-room style workshops, 
    hacker villages, and a CTF that’s more battle than game. This is 
    for the self-taught, the late-night learners, the ones who stayed up 
    reading RFCs while the world scrolled reels, and for the defenders who 
    burn logs in SOCs while red teamers break binaries. BSides Agra isn’t about suits, 
    titles, or corporate polish — it’s about community, chaos, and creation. Here, 
    firewalls will fall, payloads will drop, and minds will evolve. From heritage to hack, 
    this is where India’s next wave of cybersecurity culture begins.
  </p>
</div>

          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <DecryptedText
              text="228"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />

            </div>
            <div className="text-white text-sm sm:text-base lg:text-lg uppercase font-semibold">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <DecryptedText
              text="50+"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />
              </div>
            <div className="text-white text-sm sm:text-base lg:text-lg uppercase font-semibold">Sponsors & Partners</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <DecryptedText
              text="4K+"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />
              </div>
            <div className="text-white text-sm sm:text-base lg:text-lg uppercase font-semibold">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <DecryptedText
              text="9M+"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />
              </div>
            <div className="text-white text-sm sm:text-base lg:text-lg uppercase font-semibold">Digital Impressions</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            <DecryptedText
              text="JOIN THE COMMUNITY"
              className="text-white"
              encryptedClassName="text-green-400"
              sequential
              animateOn="view"
              speed={40}
              revealDirection="start"
            />
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <a href="https://discord.gg/94VQPustG4" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors">
              JOIN US
            </button>
            </a>
            <button className="w-full sm:w-auto border border-white hover:bg-white/10 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
