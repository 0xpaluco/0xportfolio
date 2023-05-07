import { IdentificationIcon } from '@heroicons/react/24/solid'
import { Account } from '@components/Web3';

const ConnectWallet = () => {
  
    return (
        <div className="text-center">
          <IdentificationIcon className='mx-auto text-c-primary h-12 w-12'></IdentificationIcon>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Login</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by connecting a Wallet.</p>
          <div className="mt-6">
            
            <Account />
          </div>
          
        </div>
      )
}

export default ConnectWallet;