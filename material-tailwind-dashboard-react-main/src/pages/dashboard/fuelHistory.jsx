import React from 'react'
import {Card} from '@material-tailwind/react'
import { Header } from '@/widgets/layout'

export function FuelHistory() {
  return (
    <div className='mt-5'>
        {/* <Header/> */}
        <Card className="mt-3 p-3" style={{height : '648px'}}>
            <div className='flex gap-3'>
                <input 
                type='text'
                placeholder='Search'
                className='border-none ring-gray-300 ring-2 rounded-2xl px-3 py-1 pr-5 pl-5 focus:ring-gray-500'
                />
                <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'>Date</p>
                <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'>Vendor</p>
                <p className='p-1 bg-gray-300 rounded-2xl px-6 hover:bg-gray-400 cursor-pointer'>Fuel Entry Fuel Trasaction</p>
                <p className='p-1 text-blue-600  rounded-2xl px-6 cursor-pointer font-semibold'>More Action</p>
            </div>
            <div className='mt-4'>
                <table className='text-sm w-full text-left'>
                    <thead className='border-y'>
                        <tr>
                            <th className='px-2 py-2'>Date</th>
                            <th  className='px-2 py-2'>Vendor</th>
                            <th className='px-2 py-2'>Meter Entery</th>
                            <th className='px-2 py-2'>Usage</th>
                            <th className='px-2 py-2'>Volume</th>
                            <th className='px-2 py-2'>Total</th>
                            <th className='px-2 py-2'>Fuel Economy</th>
                            <th className='px-2 py-2'>Cost per Meter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <th className='px-2 py-4'>Sun,May 15,2024 08:20am</th>
                            <td className='px-2 py-4'>-</td>
                            <td className='px-2 py-4'>95,129 mi</td>
                            <td className='px-2 py-3'>
                                <ul>
                                    <li>117.0</li>
                                    <li>miles</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>13.517</li>
                                    <li>galons</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>$57.33</li>
                                    <li>$4.24/galon</li>
                                </ul>
                            </td>
                            <td  className='px-4 py-3'>
                                <ul>
                                    <li>8.66</li>
                                    <li>MOG (US)</li>
                                </ul>
                            </td>
                            <td  className='px-5 py-3'>
                                <ul>
                                    <li>$0.49</li>
                                    <li>/mile</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className='border-b'>
                            <th className='px-2 py-4'>Mon,May 16,2024 08:20am</th>
                            <td className='px-2 py-4'>-</td>
                            <td className='px-2 py-4'>95,129 mi</td>
                            <td className='px-2 py-3'>
                                <ul>
                                    <li>117.0</li>
                                    <li>miles</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>13.517</li>
                                    <li>galons</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>$57.33</li>
                                    <li>$4.24/galon</li>
                                </ul>
                            </td>
                            <td  className='px-4 py-3'>
                                <ul>
                                    <li>8.66</li>
                                    <li>MOG (US)</li>
                                </ul>
                            </td>
                            <td  className='px-5 py-3'>
                                <ul>
                                    <li>$0.49</li>
                                    <li>/mile</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className='border-b'>
                            <th className='px-2 py-4'>Tue,May 17,2024 08:20am</th>
                            <td className='px-2 py-4'>-</td>
                            <td className='px-2 py-4'>95,129 mi</td>
                            <td className='px-2 py-3'>
                                <ul>
                                    <li>117.0</li>
                                    <li>miles</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>13.517</li>
                                    <li>galons</li>
                                </ul>
                            </td>
                            <td  className='px-2 py-3'>
                                <ul>
                                    <li>$57.33</li>
                                    <li>$4.24/galon</li>
                                </ul>
                            </td>
                            <td  className='px-4 py-3'>
                                <ul>
                                    <li>8.66</li>
                                    <li>MOG (US)</li>
                                </ul>
                            </td>
                            <td  className='px-5 py-3'>
                                <ul>
                                    <li>$0.49</li>
                                    <li>/mile</li>
                                </ul>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </Card>
    </div>
  )
}

export default FuelHistory