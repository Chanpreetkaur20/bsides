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
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
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

          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Highlights 2024 */}
          <div className="flex flex-col">
            <div className="bg-[#1a001f] rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="bg-[#7B2CBF] text-center py-4">
                <h4 className="text-white text-2xl md:text-3xl font-bold">
                  Highlights 2024
                </h4>
              </div>

              <div className="w-full h-[400px] md:h-[500px] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/XbxIg2zsRs4?list=TLGGuj0NtN87I5AwMTA5MjAyNQ&autoplay=1&mute=1&rel=0&modestbranding=1"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="BSides Agra 2024 Highlights">             </iframe>
              </div>

            </div>
          </div>

          {/* Right Column - About BSides Agra */}
          <div className="text-white">
            <h4 className="text-4xl md:text-5xl font-bold text-white mb-8 text-left">
              About BSides Agra
            </h4>

            <div className="space-y-6 text-left">
  <p className="text-lg md:text-xl leading-relaxed">
  BSides Agra is not just another cybersecurity conference — it’s<br />
  a rebellion carved in red stone. For the first time, the Taj city<br />
  becomes the arena where hacker grit collides with heritage,<br />
  and the underground rises to the spotlight. This is where<br />
  legends won’t just attend — They’ll be made.
  </p>


  <p className="text-lg md:text-xl leading-relaxed">
    At AGR0x01, we’re building a space for raw talks, war-room <br />
    style workshops, hacker villages, and a CTF that’s more battle <br />
    than game. This is for the self-taught, the late-night learners, <br />
    the ones who stayed up reading RFCs while the world scrolled reels, <br />
    and for the defenders who burn logs in SOCs while red teamers break <br />
    binaries. BSides Agra isn’t about suits, titles, or corporate polish — it’s <br /> 
    about community, chaos, and creation. Here, firewalls will fall, payloads will drop, 
    and minds will evolve. From heritage to hack, this is where India’s next wave of <br />
    cybersecurity culture begins.
  </p>
</div>

          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-white text-5xl md:text-6xl font-bold mb-2">
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
            <div className="text-white text-lg uppercase font-semibold">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-white text-5xl md:text-6xl font-bold mb-2">
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
            <div className="text-white text-lg uppercase font-semibold">Sponsors & Partners</div>
          </div>
          <div className="text-center">
            <div className="text-white text-5xl md:text-6xl font-bold mb-2">
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
            <div className="text-white text-lg uppercase font-semibold">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-white text-5xl md:text-6xl font-bold mb-2">
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
            <div className="text-white text-lg uppercase font-semibold">Digital Impressions</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
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
          <div className="flex justify-center space-x-8">
            <a href="https://discord.gg/94VQPustG4" target="_blank" rel="noopener noreferrer">
            <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-lg transition-colors">
              JOIN US
            </button>
            </a>
            <button className="border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
