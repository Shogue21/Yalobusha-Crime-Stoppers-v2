import type { NextApiRequest, NextApiResponse } from 'next';
import {PrismaClient, Prisma} from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(404).json({message: "Method does not exist"});
    }

    try {
        console.log(req.body)
        const tip: Prisma.TipCreateInput = JSON.parse(req.body);
        const savedTip = await prisma.tip.create({ data: tip });
        res.status(200).json(savedTip);
      } catch (err) {
          console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
    
      }
    };

    
