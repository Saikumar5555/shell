import ProjectStastics from '@/data/ProjectStastics_cost'
import ProjectStastics_service from '@/data/ProjectStastics_service'
import React from 'react'

function Cost() {
  const fuel = [
    {
      tripId:10101,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
    {
      tripId:10102,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
    {
      tripId:10103,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
    {
      tripId:10104,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
    {
      tripId:10105,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
    {
      tripId:10106,
      date:"12-9-2022",
      speculativeCost:1200,
      actualCost:1000,
      savedCost:200,
      distance:"30Km"

    },
  ]
  return (
    <div>
        <ProjectStastics/>
        <div className='bg-white p-3 rounded-xl mt-3 overflow-scroll max-h-[350px]'>
              <table className='w-full text-sm '>
                <thead className=' text-left border-y text-gray-800'>
                  <tr className=''>
                    <th className='px-2 py-4'>TripId</th>
                    <th>Date of Trip</th>
                    <th>Speculative Cost</th>
                    <th>Actual Cost</th>
                    <th>Saved Cost</th>
                    <th>Distance</th>
                  </tr>
                </thead>
                
                {
            fuel.map((fuel,index) => (
              <tbody className='text-left text-gray-800'   key={index}>
                  <tr className='border-y' >
                    <td className='px-2 py-4'>
                      {fuel.tripId}
                    </td>
                    <td className='px-2 py-4'>
                      {fuel.date}
                    </td >
                    <td className='px-2 py-4'>
                      {fuel.speculativeCost}
                    </td>
                    <td className='px-2 py-4'>
                      {fuel.actualCost}
                    </td>
                    <td className='px-2 py-4'>
                      {fuel.savedCost}
                    </td>
                    <td className='px-2 py-4'>
                      {fuel.distance}
                    </td>
                  </tr>
                  </tbody>
                    ))
                  }
                  
                
              </table>
        </div>
        <div className='mt-4'>
          <ProjectStastics_service/>
        </div>
        
        <div className='mt-4 grid md:grid-cols-3 gap-3'>
          <div className='bg-white p-6 rounded-xl shadow-xl'>
            <div className='flex gap-2 items-center'>
            <h1 className='text-gray-800 text-md font-semibold'>Service 1 </h1>
            <p className='text-sm items-center'> (19-10-2021)</p>
            </div>
            <div className='mt-3'>
              <table className='text-gray-800'>
                <thead className='text-left text-sm'>
                  <tr className='border-b'>
                  <th className='px-2 py-2'></th>
                    <th className='px-2 py-2'>Components</th>
                    <th className='px-2 py-2'>Cost</th>
    
                  </tr>
                </thead>
                <tbody className='text-sm border-b'>
                  <tr className='border-b'>
                    <td>1</td>
                    <td className='px-2 py-2'>Oil and Filter Changes</td>
                    <td className='px-2 '>2934</td>
                  
                  </tr>
                  <tr className='border-b'>
                  <td>2</td>
                    <td className='px-2 py-2'>Tire Maintenance</td>
                    <td className='px-2 py-2'>10982</td>
                  
                  </tr>
                </tbody>
              </table>
              <div className='flex gap-3 text-sm mt-4'>
                  <h1 className='font-semibold text-gray-800'>Total Maintenance Time:</h1>
                  <p className='text-gray-800'>1day3hr20mins</p>
              </div>
              <div className='flex text-sm gap-2'>
              <h1 className='font-semibold text-gray-800'>Total Service Cost:</h1>
              <p className='text-gray-800'>13872</p>
              </div>
              
            </div>
            

          </div>
          <div className='bg-white p-6 rounded-xl  shadow-xl'>
            <div className='flex gap-2 items-center'>
            <h1 className='text-gray-800 text-md font-semibold'>Service 2 </h1>
            <p className='text-sm items-center'> (19-10-2021)</p>
            </div>
            <div className='mt-3'>
            <table className='text-gray-800'>
                <thead className='text-left text-sm'>
                  <tr className='border-b'>
                  <th className='px-2 py-2'></th>
                    <th className='px-2 py-2'>Components</th>
                    <th className='px-2 py-2'>Cost</th>
    
                  </tr>
                </thead>
                <tbody className='text-sm border-b'>
                  <tr className='border-b'>
                    <td>1</td>
                    <td className='px-2 py-2'>Oil and Filter Changes</td>
                    <td className='px-2 '>2934</td>
                  
                  </tr>
                  <tr className='border-b'>
                  <td>2</td>
                    <td className='px-2 py-2'>Tire Maintenance</td>
                    <td className='px-2 py-2'>10982</td>
                  
                  </tr>
                </tbody>
              </table>
              <div className='flex gap-3 text-sm mt-4'>
                  <h1 className='font-semibold text-gray-800'>Total Maintenance Time:</h1>
                  <p className='text-gray-800'>1day3hr20mins</p>
              </div>
              <div className='flex text-sm gap-2'>
              <h1 className='font-semibold text-gray-800'>Total Service Cost:</h1>
              <p className='text-gray-800'>13872</p>
              </div>
              
            </div>
            

          </div>
          <div className='bg-white p-6 rounded-xl  shadow-xl'>
            <div className='flex gap-2 items-center'>
            <h1 className='text-gray-800 text-md font-semibold'>Service 3 </h1>
            <p className='text-sm items-center'> (19-10-2021)</p>
            </div>
            <div className='mt-3'>
            <table className='text-gray-800'>
                <thead className='text-left text-sm'>
                  <tr className='border-b'>
                  <th className='px-2 py-2'></th>
                    <th className='px-2 py-2'>Components</th>
                    <th className='px-2 py-2'>Cost</th>
    
                  </tr>
                </thead>
                <tbody className='text-sm border-b'>
                  <tr className='border-b'>
                    <td>1</td>
                    <td className='px-2 py-2'>Oil and Filter Changes</td>
                    <td className='px-2 '>2934</td>
                  
                  </tr>
                  <tr className='border-b'>
                  <td>2</td>
                    <td className='px-2 py-2'>Tire Maintenance</td>
                    <td className='px-2 py-2'>10982</td>
                  
                  </tr>
                </tbody>
              </table>
              <div className='flex gap-3 text-sm mt-4'>
                  <h1 className='font-semibold text-gray-800'>Total Maintenance Time:</h1>
                  <p className='text-gray-800'>1day3hr20mins</p>
              </div>
              <div className='flex text-sm gap-2'>
              <h1 className='font-semibold text-gray-800'>Total Service Cost:</h1>
              <p className='text-gray-800'>13872</p>
              </div>
              
            </div>
            

          </div>

        </div>
        
    </div>
  )
}

export default Cost