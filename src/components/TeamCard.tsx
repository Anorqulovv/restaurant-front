import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

const TeamCard = ({ memberImg,firstName,lastName,position,}: {
  memberImg: string | StaticImport
  firstName: string
  lastName: string
  position: string
}) => {
  return (
    <div className="text-center flex flex-col items-center">
      {/* Outer circle */}
      <div className="w-65 h-65 rounded-full border border-black flex items-center justify-center">
          <Image src={`https://anorkhulov.uz/${memberImg}`} alt="Member" width={220} height={220} className="w-full h-full object-cover rounded-full" />
      </div>
      {/* Name */}
      <h1 className="mt-4 text-[22px] font-bold">
        {firstName} {lastName}
      </h1>
      {/* Position */}
      <p className="text-[18px] text-gray-600">
        {position}
      </p>
    </div>
  )
}

export default TeamCard