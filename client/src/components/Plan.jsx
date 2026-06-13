// import React from 'react'
// import{PricingTable} from '@clerk/react'

// const Plan = () => {
//   return (
//     <div className='max-w-5xl mx-auto px-4 py-20'>

//         <div className='text-center mb-12'>
//             <h2 className='text-slate-700 text-[42px]
//             font-semibold'>Choose your plan</h2>
//             <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow. find the perfect 
//                 plan for your content creation needs.
//             </p>

//         </div>

//         <div className='max-w-4xl max-auto'>
//             <PricingTable />
//         </div>

//     </div>
//   )
// }

// export default Plan
import React from 'react'
import { PricingTable } from '@clerk/react'

const Plan = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-24'>

        <div className='text-center mb-16'>
            <h2 className='text-slate-800 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4'>
              Choose your plan
            </h2>

            <p className='text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto'>
              Start for free and scale up as you grow. Find the perfect
              plan for your content creation needs.
            </p>
        </div>

        <div className='max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 md:p-8 border border-slate-100'>
            <PricingTable />
        </div>

    </div>
  )
}

export default Plan