import { Prisma, PrismaClient, Tip } from "@prisma/client";
import {useState} from 'react'
import AddTipForm from "./../components/AddTipForm";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tips: Tip[] = await prisma.tip.findMany();
    const experiment = await prisma.tip.findMany({
        where: {
            neighborhood: {
                contains: 'water valley'
            },
        }
    })
    console.log(experiment);
    return {
        props: {
            initTips: tips
        }
    }
}

async function saveTip(tip: Prisma.TipCreateInput) {
    const response = await fetch('./api/tips', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
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
                    description: e.target.description.value,
                    offenseType: e.target.offenseType.value,
                    address: e.target.address.value,
                    nearestIntersection: e.target.intersection.value,
                    neighborhood: e.target.neighborhood.value,
                    references: e.target.references.value,
                }

                
                data = JSON.stringify(data)
                await saveTip(data);
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
