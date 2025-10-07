import React from 'react';
import CardSwap, { Card } from './CardSwap'; // Update path if needed
import GlassCard from './GlassCard/GlassCard';
 // Update path if needed

const SpeakerCardSwap = ({ speakers }) => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
        width={320}
        height={400}
      >
        {speakers.map((speaker) => (
          <Card key={speaker.id}>
            <GlassCard className="text-white bg-black/50">
              <div className="mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=400&background=000&color=fff&bold=true`;
                  }}
                />
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-sm">{speaker.title}</p>
                <p className="text-sm text-gray-400">{speaker.company}</p>
              </div>
              <p className="text-sm text-gray-300">{speaker.bio}</p>
            </GlassCard>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
};

export default SpeakerCardSwap;
