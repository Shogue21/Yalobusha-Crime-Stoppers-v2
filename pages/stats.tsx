import TipCard from "../components/statsView";
import { Prisma, PrismaClient, Tip } from "@prisma/client";
import {useState} from 'react'


const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tips: Tip[] = await prisma.tip.findMany();
    const tipsWithArrest = await prisma.tip.findMany({
        where: {
            arrested: {
                equals: true,
            },
        }
    })
    const fullList = await prisma.tip.findMany();
    const arsonTips = await prisma.tip.findMany({
        where: {
            offenseType: "arson",
        },
    })
    const arsonArrest = await prisma.tip.findMany({
        where: {
            offenseType: "arson",
            arrested: true,
        },

    })
    const assaultTips = await prisma.tip.findMany({
        where: {
            offenseType: "assualt",
        },
    })
    const assualtArrest = await prisma.tip.findMany({
        where: {
            offenseType: "assualt",
            arrested: true,
        },
    })
    const burglaryTips = await prisma.tip.findMany({
        where: {
            offenseType: "burglary",
        },
    })
    const burglaryArrest = await prisma.tip.findMany({
        where: {
            offenseType: "burglary",
            arrested: true,
        },
    })
    const childAbuseTips = await prisma.tip.findMany({
        where: {
            offenseType: "child abuse/neglect",
        },
    })
    const childAbuseArrest = await prisma.tip.findMany({
        where: {
            offenseType: "child abuse/neglect",
            arrested: true,
        },
    })
        const civilIssueTips = await prisma.tip.findMany({
        where: {
            offenseType: "civil issue",
        },
    })
    const civilIssueArrest = await prisma.tip.findMany({
        where: {
            offenseType: "civil issue",
            arrested: true,
        },
    })
    const childSexualImagesTips = await prisma.tip.findMany({
        where: {
            offenseType: "child sexual images",
        },
    })
    const childSexualImagesArrest = await prisma.tip.findMany({
        where: {
            offenseType: "child sexual images",
            arrested: true,
        },
    })
    const computerCrimesTips = await prisma.tip.findMany({
        where: {
            offenseType: "computer crimes",
        },
    })
    const computerCrimesArrest = await prisma.tip.findMany({
        where: {
            offenseType: "computer crimes",
            arrested: true,
        },
    })
    const covid19Tips = await prisma.tip.findMany({
        where: {
            offenseType: "covid-19",
        },
    })
    const covid19Arrest = await prisma.tip.findMany({
        where: {
            offenseType: "covid-19",
            arrested: true,
        },
    })
    const criminalMischiefTips = await prisma.tip.findMany({
        where: {
            offenseType: "criminal mischeif",
        },
    })
    const criminalMischeifArrest = await prisma.tip.findMany({
        where: {
            offenseType: "criminal mischeif",
            arrested: true,
        },
    })
    const criminalTrespassTips = await prisma.tip.findMany({
        where: {
            offenseType: "criminal trespass",
        },
    })
    const criminalTrespassArrest = await prisma.tip.findMany({
        where: {
            offenseType: "criminal trespass",
            arrested: true,
        },
    })
    const disorderlyConductTips = await prisma.tip.findMany({
        where: {
            offenseType: "disorderly conduct",
        },
    })
    const disorderlyConductArrest = await prisma.tip.findMany({
        where: {
            offenseType: "disorderly conduct",
            arrested: true,
        },
    })
    const dogBiteTips = await prisma.tip.findMany({
        where: {
            offenseType: "dog bite",
        },
    })
    const dogBiteArrest = await prisma.tip.findMany({
        where: {
            offenseType: "dog bite",
            arrested: true,
        },
    })
    const elderAbuseTips = await prisma.tip.findMany({
        where: {
            offenseType: "elder abuse / neglect",
        },
    })
    const elderAbuseArrest = await prisma.tip.findMany({
        where: {
            offenseType: "elder abuse / neglect",
            arrested: true,
        },
    })
    const forgeryTips = await prisma.tip.findMany({
        where: {
            offenseType: "forgery",
        },
    })
    const forgeryArrest = await prisma.tip.findMany({
        where: {
            offenseType: "forgery",
            arrested: true,
        },
    })

    return {
        props: {
            initTips: tips,
            initPercent: (tipsWithArrest.length/fullList.length) * 100,
            initList: fullList,
            totalTips: fullList.length,
            tipsWithArrest: tipsWithArrest.length,
            arsonTips: arsonTips.length,
            arsonArrest: arsonArrest.length,
            assaultTips: assaultTips.length,
            assualtArrest: assualtArrest.length,
            burglaryTips: burglaryTips.length,
            burglaryArrest: burglaryArrest.length,
            childAbuseTips: childAbuseTips.length,
            childAbuseArrest: childAbuseArrest.length,
            childSexualImagesTips: childSexualImagesTips.length,
            childSexualImagesArrest: childSexualImagesArrest.length,
            civilIssueTips: civilIssueTips.length,
            civilIssueArrest: civilIssueArrest.length,
            computerCrimesTips: computerCrimesTips.length,
            computerCrimesArrest: computerCrimesArrest.length,
            covid19Tips: covid19Arrest.length,
            covid19Arrest: covid19Arrest.length,
            criminalMischiefTips: criminalMischiefTips.length,
            criminalMischeifArrest: criminalMischeifArrest.length,
            criminalTrespassTips: criminalTrespassTips.length,
            criminalTrespassArrest: criminalTrespassArrest.length,
            disorderlyConductTips: disorderlyConductTips.length,
            disorderlyConductArrest: disorderlyConductArrest.length,
            dogBiteTips: dogBiteTips.length,
            dogBiteArrest: dogBiteArrest.length,
            elderAbuseTips: elderAbuseTips.length,
            elderAbuseArrest: elderAbuseArrest.length,
            forgeryTips: forgeryTips.length,
            forgeryArrest: forgeryArrest.length,    
        }
    }
}

export default function Index({initPercent, initList, totalTips, tipsWithArrest, arsonTips, arsonArrest }) {

    return (
        <div>
        <p>Tips Submitted: {totalTips}</p>
        <p>Tips leading to arrest: {tipsWithArrest}</p>
        <p>Arson Tips: {arsonTips}</p>
        <p>Arson Arrest: {arsonArrest}</p>
        
       
       <p></p>
       </div>
    )
  }
  
