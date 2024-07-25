import React from 'react';
import {Card} from '@material-tailwind/react'

export function ServiceHistory() {
  return (
    
    <div className='mt-5'>
      <Card className="mt-3 p-3 h-700" style={{ height : '648px'}}> 
      <div className='flex gap-3'>
        <input 
        type='text'
        placeholder='Search'
        className='border-none ring-gray-300 ring-2 rounded-2xl px-3 py-1 pr-5 pl-5 focus:ring-gray-500'
        />
        <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'> Completion Date</p>
        <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'>Service Tasks</p>
        <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'>Work Order</p>
        <p className='p-1 text-blue-600  rounded-2xl px-6 cursor-pointer font-semibold'>More Action</p>
    </div>
      <div className='mt-7'>
        <table className='w-full text-sm'>
          <thead className='border-y text-left'>
            <tr className='px-3 py-5'>
              <th className='px-2 py-4'>Work Order</th>
              <th className='px-2 py-4'>Completed</th>
              <th className='px-2 py-4'>Meter</th>
              <th className='px-2 py-4'>Service Tasks</th>
              <th className='px-1 py-4'>Issuses</th>
              <th className='px-2 py-4'>Vendor</th>
              <th className='px-2 py-4'>Labels</th>
              <th className='px-2 py-4'>Total</th>
              <th className='px-2 py-4'>Watchers</th>

            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='px-2 py-4'>-</td>
              <td className='px-2 py-4'>05/16/2022</td>
              <td className='px-2 py-4'>95,284 mi</td>
              <td className='px-2 py-4'>
                <ul>
                  <li>Tire Rotation</li>
                  <li>Engine Oil & Filter Replacement</li>
                  <li>Brake Inspection</li>
                  <li>Windshield Washer Fluid Level Inspect</li>
                  <li>Cabin Air Filter Replacement</li>
                  <li>Engine Air Filter Replacement</li>
                </ul>
              </td>
              <td className='px-2 py-4'>-</td>
              <td className='px-2 py-4'>-</td>
              <td className='px-2 py-4'><span className="badge badge-secondary">Preventative Maintenance</span></td>
              <td className='px-2 py-4'>$280.90</td>
              <td className='px-2 py-4'>2 watchers</td>
            </tr>
          </tbody>
        </table>
      </div>
      </Card>
    </div>
  );
}

export default ServiceHistory;
