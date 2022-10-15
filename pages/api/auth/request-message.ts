// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from 'next-connect'
import { cors } from "@middleware";
import { ApiRequest, ApiResponse } from '@/types';
import { assert, catchAPIErrors, onError, testPromise} from '@helpers/api';
import { requestMessage } from '@helpers/auth';

type Data = {
  hello: string
}

export const config = {
  api: {
    externalResolver: true,
  },
}

const handler = nc<ApiRequest, ApiResponse>({ onError, attachParams: true });

handler
  .use(cors)
  .get(
    async (req, res) => {
      
      const hello = assert(req.query, "hello" )
      res.status(201).json({ hello })
  })
  .post(
      async (req, res) => {
      assert(req.body, "address" )
      assert(req.body, "chain" )
      assert(req.body, "network" )

      const { address, chain, network } = req.body;

      console.log('api');
      console.log(address);
      console.log(chain);
      console.log(network);
      
      const message = await catchAPIErrors(requestMessage(address, chain, network))
      res.status(200).json(message);
  })


export default handler;