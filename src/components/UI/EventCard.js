import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, MapPin, Tag } from 'lucide-react';

const EventCard = ({ event, index }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
            {event.title}
          </h3>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(event.difficulty)}`}>
            {event.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span className="font-medium">{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-2 text-primary" />
            <span className="font-medium">{event.speaker}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span className="font-medium">{event.track}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <div className="p-6 pt-4">
          <div className="flex items-center mb-3">
            <Tag className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-gray-700">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="p-6 pt-0">
        <motion.button
          className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;