import React from 'react'
import { Card } from '@material-tailwind/react'
import { Header } from '@/widgets/layout'

export function WorkOrders() {
  return (
    <div className='mt-5'>
        <Card className="mt-3 p-3" style={{ height : '648px'}}> 
      <div className=' flex flex-row gap-3'>
      <input 
        type='text'
        placeholder='Search'
        className='border-none ring-gray-300 ring-2 rounded-2xl px-3 py-1 pr-5 pl-5 focus:ring-gray-500'
        />
        <p className='p-1 px-3 cursor-pointer rounded-2xl gray bg-gray-300 hover:bg-gray-400 '>Completion Date</p>
        <p className='p-1 px-3 cursor-pointer rounded-2xl gray bg-gray-300 hover:bg-gray-400'>Service Tasks</p>
        <p className='p-1 px-3 cursor-pointer rounded-2xl gray bg-gray-300 hover:bg-gray-400'>Work Order</p>
        <p className='p-1 px-3 cursor-pointer rounded-2xl font-semibold text-blue-600'>More Actions</p>
      </div>
      <div className='mt-4'>
        <table className='w-full text-sm'>
          <thead className='border-y text-left'>
            <tr className='px-3 py-5'>
              <th className='px-2 py-4'>Type</th>
              <th className='px-2 py-4'>Size</th>
              <th className='px-2 py-4'>From Location</th>
              <th className='px-2 py-4'>To Location</th>
              <th className='px-1 py-4'>Dimensions</th>
              <th className='px-2 py-4'>Temperature Control</th>
              <th className='px-2 py-4'>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='px-2 py-4'>Wood</td>
              <td className='px-2 py-4'>5T</td>
              <td className='px-2 py-4'>Bangalore</td>
              <td className='px-2 py-4'>
                Vizag
              </td>
              <td className='px-2 py-4'>-</td>
              <td className='px-6 py-4'>-</td>
              <td className='px-2 py-4'><span className="badge badge-secondary">05/06/2024</span></td>
            </tr>
            <tr className='border-b'>
              <td className='px-2 py-4'>Sand</td>
              <td className='px-2 py-4'>5T</td>
              <td className='px-2 py-4'>Vizag</td>
              <td className='px-2 py-4'>
              Bangalore
              </td>
              <td className='px-2 py-4'>-</td>
              <td className='px-6 py-4'>-</td>
              <td className='px-2 py-4'><span className="badge badge-secondary">20/06/2024</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      </Card>
    </div>
  )
}

export default WorkOrders