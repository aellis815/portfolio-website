import { LiaBusinessTimeSolid } from 'react-icons/lia'
import { FaMotorcycle } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface ProfessionalButtonProps {
  isChecked: boolean
  handleCheckboxChange: () => void
}

const ProfessionalButton: React.FC<ProfessionalButtonProps> = ({ isChecked, handleCheckboxChange }) => {

  return (
    <>
      <label className='themeSwitcher shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 m-1'>
       
          <motion.input
            type='checkbox'
            className='sr-only'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${!isChecked ? 'text-primary bg-gradient-to-br from-[#D62828] to-[#F77F00] ' : 'text-body-color text-[#000000]'
            }`}
        >
          <LiaBusinessTimeSolid className='h-5 w-5 mr-2' />
          Professional
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isChecked ? 'text-primary bg-[#D62828]' : 'text-body-color text-[#000000]'
            }`}
        >
          <FaMotorcycle className='h-5 w-5 mr-2' />
          Personal
        </span>
      </label>
    </>
  )
}


export default ProfessionalButton