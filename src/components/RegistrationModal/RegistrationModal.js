import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building, MapPin, Calendar, CreditCard, Check } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    city: '',
    country: 'India',
    
    // Registration Options
    registrationType: 'conference', // conference, training, both
    dietaryRequirements: '',
    tshirtSize: 'M',
    
    // Payment
    paymentMethod: 'card'
  });

  const registrationTypes = [
    {
      id: 'conference',
      name: 'Conference Only',
      dates: 'March 15-16, 2025',
      price: '₹2,999',
      originalPrice: '₹3,999',
      features: [
        'Access to all conference sessions',
        'Networking opportunities',
        'Conference materials',
        'Lunch and refreshments',
        'BSides Agra t-shirt'
      ]
    },
    {
      id: 'training',
      name: 'Training Only',
      dates: 'March 13-14, 2025',
      price: '₹7,999',
      originalPrice: '₹9,999',
      features: [
        'Hands-on training sessions',
        'Expert instructors',
        'Training materials',
        'Certificate of completion',
        'Lunch and refreshments'
      ]
    },
    {
      id: 'both',
      name: 'Training + Conference',
      dates: 'March 13-16, 2025',
      price: '₹9,999',
      originalPrice: '₹12,999',
      features: [
        'All training benefits',
        'All conference benefits',
        'Priority seating',
        'Exclusive networking events',
        'Special BSides Agra swag'
      ],
      popular: true
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Register for BSides Agra 2025</h2>
              <p className="text-gray-600 mt-1">Step {currentStep} of 3</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step < currentStep ? <Check size={16} /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Registration Type</span>
              <span>Personal Info</span>
              <span>Payment</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Registration Type */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Registration Type</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {registrationTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                        formData.registrationType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData({ ...formData, registrationType: type.id })}
                    >
                      {type.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{type.dates}</p>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-primary">{type.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{type.originalPrice}</span>
                        </div>
                        
                        <ul className="text-sm text-gray-600 space-y-2">
                          {type.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      T-Shirt Size
                    </label>
                    <select
                      name="tshirtSize"
                      value={formData.tshirtSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Requirements (Optional)
                  </label>
                  <textarea
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please let us know about any dietary restrictions or allergies..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Payment Information</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Order Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Registration Type:</span>
                      <span className="font-medium">
                        {registrationTypes.find(t => t.id === formData.registrationType)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">
                        {registrationTypes.find(t => t.id === formData.registrationType)?.price}
                      </span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">
                          {registrationTypes.find(t => t.id === formData.registrationType)?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h4>
                  <p className="text-gray-600 mb-6">
                    You will be redirected to our secure payment gateway to complete your registration.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary px-8 py-3"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary px-8 py-3"
                >
                  Complete Registration
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegistrationModal;