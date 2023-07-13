/* This example requires Tailwind CSS v2.0+ */
'use client';

import { Blockie } from '@components/shared';
import { classNames } from '@helpers/ui';
import { getEllipsisTxt } from '@helpers/formater';
import Head from 'next/head';
import { ERC20Balance, NFTBalance } from '@components/Web3';
import { ERC20Token } from '@/types';

export interface PortfolioProps {
  address: string;
  ens?: string;
  nativeBalance: string;
  tokenBalances: Array<ERC20Token>;
  nftBalances: Array<any>
}


export default function Portfolio(props: PortfolioProps) {

    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <Banner address={props.address} ens={props.ens} />
            <ERC20Balance address={props.address} tokens={props.tokenBalances} />
            <NFTBalance address={props.address} tokens={props.nftBalances} />
        </div>
    )
}

interface BannerProps {
  address: string;
  ens?: string;
}

function Banner(props: BannerProps) {

  const account = props.address
  const name = props.ens


  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <Blockie address={account || ""} currentWallet={true} className="h-16 w-16 rounded-full"></Blockie>
            <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}

        <div className="pt-1.5">
          <h1 className={classNames(name ? "text-2xl font-bold text-gray-900": "hidden")}>{name}</h1>
          <h1 className={classNames(!name ? "text-2xl font-bold text-gray-900": "hidden")}>{getEllipsisTxt(account, 6)} </h1>
          <p className={classNames(name ? "text-sm font-medium text-gray-500 cursor-copy": "hidden")}>
            {getEllipsisTxt(account, 16)}
          </p>
        </div>
      </div>

    </div>
  )
}




