import TipCard from "../components/statsView";
import { Prisma, PrismaClient, Tip } from "@prisma/client";
import {useState} from 'react'


const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tips: Tip[] = await prisma.tip.findMany();
    const experiment = await prisma.tip.findMany({
        where: {
            arrested: {
                equals: true,
            },
        }
    })
    const fullList = await prisma.tip.findMany();
    console.log(experiment);
    console.log(experiment.length)
    console.log(fullList.length)
    console.log((experiment.length/fullList.length)*100 + "% of tips lead to arrest")
    return {
        props: {
            initTips: tips
        }
    }
}

export default function Index({ initialContacts }) {
    return (
       <p>Stuff is here</p>
    )
  }
  
