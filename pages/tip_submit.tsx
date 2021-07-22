import { Prisma, PrismaClient, Tip } from "@prisma/client";
import {useState} from 'react'
import AddTipForm from "./../components/AddTipForm";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tips: Tip[] = await prisma.tip.findMany();
    return {
        props: {
            initTips: tips
        }
    }
}

async function saveTip(tip: Prisma.TipCreateInput) {
    const response = await fetch('./api/tips', {
        method: 'POST',
        body: JSON.stringify(tip)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    return await response.json();
}

const tip_submit = ({initTips}) => {
    const [tips, setTips] = useState<Tip[]>(initTips)
    return (
        <AddTipForm onSubmit={async (data, e) => {
            try {
                data = {
                       description: "man",
                       offenseType: "bad",
                       address: "123 main st",
                       nearestIntersection: "main and not main",
                      neighborhood: "hero",
                       references: "what",
                       id: "sdf6g47ebu"
                      }
                console.log(e)
                console.log(data)
                await saveTip(data); //saveTip broken?
                setTips([...tips, data]);
                e.target.reset();
            }
            catch (err) {
                console.log(err);
        
            }
        }}/>
    )
}

export default tip_submit
