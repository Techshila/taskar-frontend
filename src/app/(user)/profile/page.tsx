import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { USER } from '@/utils/dummyData';
import { _ADDRESS } from '@/types';

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/User');
  }
  let defaultAddress: string = '';
  USER.addresses
    .map((address) => address)
    .filter((address) => {
      if (address.defaultAddress) {
        defaultAddress =
          address.street + ', ' + address.city + ', ' + address.state + ' - ' + address.pinCode;
      }
    })[0];

  const otherAddresses = USER.addresses.filter((address) => !address.defaultAddress);

  return (
    //   <div>
    //     <h1>User Session</h1>
    //     <p>{session?.user?.email}</p>
    //   </div>
    <div className='my-5 flex-col justify-center'>
      <h1 className='text-3xl font-bold flex justify-center'>My Profile</h1>
      <div className='flex justify-center my-5'>
        <img src={USER.avatar} alt={''} className='rounded-full w-40 h-40 z-10' />
      </div>

      <div className='border-2 rounded-3xl mx-4 my-2 px-6 pb-1 pt-16 border-green-800 transform -translate-y-20'>
        <div className='flex justify-center items-baseline'>
          <div className='text-4xl text-green-700 font-bold'>
            {USER.firstName} {USER.lastName}{' '}
          </div>{' '}
          <div className='text-xl text-green-600'>&nbsp;(@{USER.username})</div>
        </div>
        <div className='text-xl flex justify-center py-1'>
          <div className='text-green-700 font-bold'>Role:&nbsp;</div>{' '}
          <div className='text-green-600'>
            {USER.isCEO ? 'CEO' : USER.isStoreManager ? 'Store Manager' : 'User'}
          </div>
        </div>
        <div className='flex text-lg py-3 justify-between'>
          <div className='flex'>
            <div className='text-green-700 font-bold'>Email Address:&nbsp;</div>{' '}
            <div className='text-green-600'>{USER.email}</div>
          </div>
          <div className='flex'>
            <div className='text-green-700 font-bold'>Phone No:&nbsp;</div>{' '}
            <div className='text-green-600'>{USER.phoneNumber}</div>
          </div>
        </div>
        <div className='text-lg py-3 flex'>
          <div className='text-green-700 font-bold'>Default Address: &nbsp;</div>{' '}
          <div className='text-green-600'>
            {defaultAddress !== '' ? defaultAddress : 'No Default Address Found'}
          </div>
        </div>
        <div className='text-lg py-3'>
          <div className='text-green-700 font-bold'>Other Addresses:</div>
          <ul>
            {otherAddresses.map((address: _ADDRESS, index: number) => {
              return (
                <li className='py-1 text-green-600' key={index}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {address.street}, {address.city}, {address.state} - {address.pinCode}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Member;
