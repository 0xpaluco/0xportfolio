import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils'

const config = {
    domain: process.env.APP_DOMAIN!,
    statement: 'Please sign this message to confirm your identity.',
    uri: process.env.NEXTAUTH_URL!,
    timeout: 60,
};

export declare enum AuthNetwork {
    EVM = "evm"
}

export const requestMessage = async (address: string, chain: string, network: string) => {
    
    const data = {
        address,
        chain: EvmChain.create(chain).hex,
        network: network,
        ...config,
    };

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    return await Moralis.Auth.requestMessage(data);
}

export const getUser = async (message: string, signature: string) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const { address, profileId } = (
    await Moralis.Auth.verify({ message, signature, network: 'evm' })
    ).raw;
    const user = { address, profileId, signature };
    return user;
}
