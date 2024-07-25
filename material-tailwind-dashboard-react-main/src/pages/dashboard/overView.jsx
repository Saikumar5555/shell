import React from 'react'
import { Card, CardBody, Typography } from '@material-tailwind/react';

export function OverView() {
  

  const products = [
    {name:'Name', details:'SR5'},
    {name:'Meter', details:'95,284 mi'},
    {name:'Status', details:'Active',history: 'history'},
    {name:'Group', details:'Austin',history: 'history'},
    {name:'Operator', details:'Lex Waters'},
    {name:'Type', details:'SUV'}

  ]
  return (
    <div className='mt-5'>
        <div className='mt-3 overflow-y-scroll max-h-[660px] rounded-md'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
            <Card className="p-4 " style={{ height : '500px'}}>  
              <div className='flex flex-row justify-between'>
                <Typography variant="h6">Cost of Ownership</Typography>
                <Typography variant="h6" className="text-blue-600">All Items</Typography>
              </div>
              <div className='mt-4 ms-3 p-3 border rounded flex justify-between'>
                <div className='ms-3'>
                  <Typography style={{ fontWeight: 500}}>Total Costs</Typography>
                  <Typography variant="h5">$372.22</Typography>
                </div>
                <div>
                  <Typography style={{ fontWeight: 500}}>Cost Per Meter</Typography>
                  <Typography variant="h5">$0.90 <span className='text-'>/ml</span></Typography>
                </div>
              </div>
            </Card>
            <Card className="p-4 mt-4" style={{ height : '400px'}}>
              <Typography variant="h6">Details</Typography>
              <div className='overflow-x-hidden'>
                <table className='w-full text-sm text-left text-gray-600'>
                  <thead className='text-lg text-gray-700 mb-5 '>
                    <tr>
                      <th>All Fields</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product,index) =>(
                      <tr key={index}
                      className='border-b '>
                        <th className='px-2 py-4'>{product.name}</th>
                        <th className='px-6 py-4'>{product.details}</th>
                        <th className='px-6 py-4 text-blue-600'>{product.history}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </Card>
            </div>
           <div>
            <Card className="p-4 h-60" style={{ height : "270px"}}>
              <div className='flex justify-between'>
                <Typography variant="h6">Open Issues</Typography>
                <div className="flex text-blue-600">
                  <Typography variant="h6" className="mr-4">+ Add Issue</Typography>
                  <Typography variant="h6">View All</Typography>
                </div>
              </div>
              
              <div className='mt-4 ms-3 border p-3 flex justify-between rounded-md'>
                <div>
                  <Typography style={{ fontWeight: 500}}>Overdue</Typography>
                  <Typography style = {{ fontWeight: 300}}>0</Typography>
                </div>
                <div>
                  <Typography style={{ fontWeight : 500}}>Open</Typography>
                  <Typography style = {{ fontWeight: 300}}>1</Typography>
                </div>
              </div>
              <div className='mt-5 p-3'>
                  <p style={{ fontWeight: 500}}><span className=' text-blue-600'>#20</span> - Flat tire</p>
                  <p className='text-gray-600'>Reported 32 minutes ag0 by <span>Bri P</span></p>
                  <p className='text-gray-600'>Nail in the back left tire. Slow leak</p>
                </div>
            </Card>
            <Card className="p-4 h-40 mt-4">
              <div className="flex justify-between">
              <Typography variant="h6">Service Reminders</Typography>
              <div className="flex gap-2 text-blue-600">
              <Typography variant="h6">+ Add Service Reminder</Typography>
              <Typography variant="h6">View All</Typography>
              </div>
              </div>
              <div className='flex mt-8 justify-center'>
                <p className='text-gray-600'>
                  There is no Service Reminders due soon for this Vehicle
                </p>
              </div>
            </Card>
            <Card className="p-4 h-60 mt-4">
              
              <div className="flex justify-between">
                <Typography variant="h6">Revewal Reminders</Typography>
                  <div className="flex gap-2">
                    <Typography variant="h6">+ Add Renewal Reminder</Typography>
                    <Typography variant="h6">View All</Typography>
                  </div>
              </div>

              <div className="mt-4 ms-3 p-3 border rounded-md flex justify-between">
                <div>
                  <Typography style={{ fontWeight : "400"}}>Overdue</Typography>
                  <Typography style={{ fontWeight : "400"}}>1</Typography>
                </div>
                <div>
                  <Typography style={{ fontWeight : "400"}}>Due Soon</Typography>
                  <Typography style={{ fontWeight : "400"}}>0</Typography>
                </div>
              </div>
              <div className='mt-5 p-3'>
                <p className='text-gray-600'>Emission test</p>
                <p className='text-red-600'>Overdue: 3 weeks age</p>
              </div>
            </Card>
            <Card className="p-4 h-40 mt-4">
              <div className="flex justify-between">
                <Typography variant="h6">Incomplete Work Orders</Typography>
                  <div className="flex gap-2">
                    <Typography variant="h6">+ Add Word Order</Typography>
                    <Typography variant="h6">View All</Typography>
                  </div>
              </div>
              <div className='flex mt-8 justify-center'>
                <p className='text-gray-600'>
                  There is no Work Orders active for this Vehicle
                </p>
              </div>
              
            </Card>
           </div>
          </div>
        </div>
    </div>
  )
}

export default OverView