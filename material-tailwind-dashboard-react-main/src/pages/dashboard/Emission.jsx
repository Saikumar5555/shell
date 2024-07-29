import ProjectStastics from '@/data/ProjectStastics'
import React from 'react'

function Emission() {
  const emission=[
    {
      trip:'10101',
      fuel:'100',
      co2:"2,310",
      nox:"0.2",
      pm:'0.2',
      co:'2.3',
      hc:'0.05',
      so:'0.003'
    },
    {
      trip:'10102',
      fuel:'208',
      co2:"2,310",
      nox:"0.2",
      pm:'0.2',
      co:'2.3',
      hc:'0.05',
      so:'0.003'
    },
    {
      trip:'10103',
      fuel:'170',
      co2:"2,310",
      nox:"0.2",
      pm:'0.2',
      co:'2.3',
      hc:'0.05',
      so:'0.003'
    }
  ]
  return (
    <div>
        <div>
            <ProjectStastics/>
        </div>
        <div className='mt-4 bg-white p-3 rounded-md'>
          <table className='w-full text-left'>
            <thead className=''>
              <tr className='text-gray-800 text-sm border-y'>
                <th className='py-3 px-2'>TripId</th>
                <th className='py-3 px-2'>Fuel Consumed</th>
                <th className='py-3 px-2'>CO2</th>
                <th className='py-3 px-2'>NOx</th>
                <th className='py-3 px-2'>PM</th>
                <th className='py-3 px-2'>CO</th>
                <th className='py-3 px-2'>HC/VOCs</th>
                <th className='py-3 px-2'>SO2</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                emission.map((emission,index) =>(
                  <tr className='text-sm text-gray-800 border-b' key={index}>
                    <th className='py-3 ps-4'>{emission.trip}</th>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.fuel}</li>
                        <li className='text-xs text-gray-600'>liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2 items-center'>
                    <ul className='items-center'>
                        <li>{emission.co2}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.nox}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.pm}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.co}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.hc}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                    <td className='py-3 px-2'>
                    <ul className='items-center'>
                        <li>{emission.so}</li>
                        <li className='text-xs text-gray-600'>g/liters</li>
                      </ul>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Emission