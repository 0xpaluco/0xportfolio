import Moralis from 'moralis';

const config = {
    domain: process.env.APP_DOMAIN,
    statement: 'Please sign this message to confirm your identity.',
    uri: process.env.NEXTAUTH_URL,
    timeout: 60,
};

export const requestMessage = async (address: string, chain: string, network: string) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    return await Moralis.Auth.requestMessage({
            address,
            chain,
            network,
            ...config,
        });
}

export const getUser = async (message: string, signature: string) => {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const { address, profileId } = (
    await Moralis.Auth.verify({ message, signature, network: 'evm' })
    ).raw;
    const user = { address, profileId, signature };
    return user;
}
