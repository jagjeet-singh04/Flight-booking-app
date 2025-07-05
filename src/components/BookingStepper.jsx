import { FiCheck, FiUser, FiCreditCard, FiMap } from 'react-icons/fi'

const steps = [
  { id: '1', name: 'Flight Selection', icon: <FiMap /> },
  { id: '2', name: 'Passenger Details', icon: <FiUser /> },
  { id: '3', name: 'Payment', icon: <FiCreditCard /> },
  { id: '4', name: 'Confirmation', icon: <FiCheck /> },
]

const BookingStepper = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-12">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center 
            ${currentStep >= index + 1 ? 'bg-infinity-primary text-white' : 'bg-gray-800 text-gray-500'}`}>
            {step.icon}
          </div>
          <div className={`ml-2 ${currentStep >= index + 1 ? 'text-white' : 'text-gray-500'}`}>
            {step.name}
          </div>
          {index < steps.length - 1 && (
            <div className={`h-0.5 w-12 mx-2 ${currentStep > index + 1 ? 'bg-infinity-primary' : 'bg-gray-800'}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default BookingStepper