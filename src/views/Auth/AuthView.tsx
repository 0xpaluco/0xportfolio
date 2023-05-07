'use client';

import Link from "next/link";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function AuthView() {
  const { openConnectModal } = useConnectModal();

  return (
    <>
      <main className="grid min-h-fit place-items-center py-14 px-6 sm:py-32 lg:px-8">
        <div className="text-center bg-gray-50 shadow-md rounded-md p-8">
          <p className="text-base font-semibold text-c-primary">
            Unautenticated
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sorry, we can’t let you in.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Please Connect Your Wallet
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {openConnectModal && (
              <button
                onClick={openConnectModal}
                type="button"
                className="rounded-md bg-c-primary px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-c-d-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
              >
                Connect Wallet
              </button>
            )}

            <Link href="/" className="text-sm font-semibold text-gray-900">
              Go back home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}