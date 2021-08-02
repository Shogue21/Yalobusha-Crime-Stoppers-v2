import { Prisma, PrismaClient, Tip } from "@prisma/client";
import { useState } from "react";
import styles from "../styles/stats.module.css";
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const tips: Tip[] = await prisma.tip.findMany();
  const tipsWithArrest = await prisma.tip.findMany({
    where: {
      arrested: {
        equals: true,
      },
    },
  });
  const fullList = await prisma.tip.findMany();
  const arsonTips = await prisma.tip.findMany({
    where: {
      offenseType: "Arson",
    },
  });
  const arsonArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Arson",
      arrested: true,
    },
  });
  const assaultTips = await prisma.tip.findMany({
    where: {
      offenseType: "Assault",
    },
  });
  const assaultArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Assault",
      arrested: true,
    },
  });
  const burglaryTips = await prisma.tip.findMany({
    where: {
      offenseType: "Burglary",
    },
  });
  const burglaryArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Burglary",
      arrested: true,
    },
  });
  const childAbuseTips = await prisma.tip.findMany({
    where: {
      offenseType: "Child Abuse/Neglect",
    },
  });
  const childAbuseArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Child Abuse/Neglect",
      arrested: true,
    },
  });
  const civilIssueTips = await prisma.tip.findMany({
    where: {
      offenseType: "Civil Issue",
    },
  });
  const civilIssueArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Civil Issue",
      arrested: true,
    },
  });
  const childSexualImagesTips = await prisma.tip.findMany({
    where: {
      offenseType: "Child Sexual Images",
    },
  });
  const childSexualImagesArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Child Sexual Images",
      arrested: true,
    },
  });
  const computerCrimesTips = await prisma.tip.findMany({
    where: {
      offenseType: "Computer Crimes",
    },
  });
  const computerCrimesArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Computer Crimes",
      arrested: true,
    },
  });
  const covid19Tips = await prisma.tip.findMany({
    where: {
      offenseType: "Covid-19",
    },
  });
  const covid19Arrest = await prisma.tip.findMany({
    where: {
      offenseType: "Covid-19",
      arrested: true,
    },
  });
  const criminalMischiefTips = await prisma.tip.findMany({
    where: {
      offenseType: "Criminal Mischeif",
    },
  });
  const criminalMischeifArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Criminal Mischeif",
      arrested: true,
    },
  });
  const criminalTrespassTips = await prisma.tip.findMany({
    where: {
      offenseType: "Criminal Trespass",
    },
  });
  const criminalTrespassArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Criminal Trespass",
      arrested: true,
    },
  });
  const disorderlyConductTips = await prisma.tip.findMany({
    where: {
      offenseType: "Disorderly Conduct",
    },
  });
  const disorderlyConductArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Disorderly Conduct",
      arrested: true,
    },
  });
  const dogBiteTips = await prisma.tip.findMany({
    where: {
      offenseType: "Dog Bite",
    },
  });
  const dogBiteArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Dog Bite",
      arrested: true,
    },
  });
  const elderAbuseTips = await prisma.tip.findMany({
    where: {
      offenseType: "Elder Abuse / Neglect",
    },
  });
  const elderAbuseArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Elder Abuse / Neglect",
      arrested: true,
    },
  });
  const forgeryTips = await prisma.tip.findMany({
    where: {
      offenseType: "Forgery",
    },
  });
  const forgeryArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Forgery",
      arrested: true,
    },
  });
  const harassmentTips = await prisma.tip.findMany({
    where: {
      offenseType: "Harassment",
    },
  });
  const harassmentArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Harassment",
      arrested: true,
    },
  });
  const homicideTips = await prisma.tip.findMany({
    where: {
      offenseType: "Homicide",
    },
  });
  const homicideArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Homicide",
      arrested: true,
    },
  });
  const indecentExposureTips = await prisma.tip.findMany({
    where: {
      offenseType: "Indecent Exposure",
    },
  });
  const indecentExposureArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Indecent Exposure",
      arrested: true,
    },
  });
  const missingPersonTips = await prisma.tip.findMany({
    where: {
      offenseType: "Missing Person",
    },
  });
  const missinsPersonArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Missing Person",
      arrested: true,
    },
  });
  const motorVehicleOffenseTips = await prisma.tip.findMany({
    where: {
      offenseType: "Motor Vehicle Offenses",
    },
  });
  const motorVehicleOffenseArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Motor Vehicle Offenses",
      arrested: true,
    },
  });
  const noiseComplaintTips = await prisma.tip.findMany({
    where: {
      offenseType: "Noise Complaint",
    },
  });
  const noiseComplaintArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Noise Complaint",
      arrested: true,
    },
  });
  const paroleViolationTips = await prisma.tip.findMany({
    where: {
      offenseType: "Parole Violation",
    },
  });
  const paroleViolationArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Parole Violation",
      arrested: true,
    },
  });
  const policeInformationTips = await prisma.tip.findMany({
    where: {
      offenseType: "Police Information",
    },
  });
  const policeInformationArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Police Information",
      arrested: true,
    },
  });
  const prostitutionTips = await prisma.tip.findMany({
    where: {
      offenseType: "Prostitution",
    },
  });
  const prostitutionArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Prostitution",
      arrested: true,
    },
  });
  const publicPeaceOffenseTips = await prisma.tip.findMany({
    where: {
      offenseType: "Public Peace Offense",
    },
  });
  const publicPeaceOffenseArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Public Peace Offense",
      arrested: true,
    },
  });
  const robberyTips = await prisma.tip.findMany({
    where: {
      offenseType: "Robbery",
    },
  });
  const robberyArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Robbery",
      arrested: true,
    },
  });
  const sexualAssaultTips = await prisma.tip.findMany({
    where: {
      offenseType: "Sexual Assault",
    },
  });
  const sexualAssaultArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Sexual Assault",
      arrested: true,
    },
  });
  const suspiciousActivityTips = await prisma.tip.findMany({
    where: {
      offenseType: "Suspicious Activity",
    },
  });
  const suspiciousActivityArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Suspicious Activity",
      arrested: true,
    },
  });
  const terrorismTips = await prisma.tip.findMany({
    where: {
      offenseType: "Terrorism",
    },
  });
  const terrorismArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Terrorism",
      arrested: true,
    },
  });
  const theftTips = await prisma.tip.findMany({
    where: {
      offenseType: "Theft",
    },
  });
  const theftArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Theft",
      arrested: true,
    },
  });
  const underageDrinkingTips = await prisma.tip.findMany({
    where: {
      offenseType: "Underage Drinking Party",
    },
  });
  const underageDrinkingArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Underage Drinking Party",
      arrested: true,
    },
  });
  const vehicleTheftTips = await prisma.tip.findMany({
    where: {
      offenseType: "Vehicle Theft",
    },
  });
  const vehicleTheftArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Vehicle Theft",
      arrested: true,
    },
  });
  const wantedPersonTips = await prisma.tip.findMany({
    where: {
      offenseType: "Wanted Person",
    },
  });
  const wantedPersonArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Wanted Person",
      arrested: true,
    },
  });
  const weaponsTips = await prisma.tip.findMany({
    where: {
      offenseType: "Weapons",
    },
  });
  const weaponsArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Weapons",
      arrested: true,
    },
  });

  return {
    props: {
      initTips: tips,
      initPercent: (tipsWithArrest.length / fullList.length) * 100,
      initList: fullList,
      totalTips: fullList.length,
      tipsWithArrest: tipsWithArrest.length,
      arsonTips: arsonTips.length,
      arsonArrest: arsonArrest.length,
      assaultTips: assaultTips.length,
      assaultArrest: assaultArrest.length,
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
      harassmentTips: harassmentTips.length,
      harassmentArrest: harassmentArrest.length,
      homicideTips: homicideTips.length,
      homicideArrest: homicideArrest.length,
      indecentExposureTips: indecentExposureTips.length,
      indecentExposureArrest: indecentExposureArrest.length,
      missingPersonTips: missingPersonTips.length,
      missinsPersonArrest: missinsPersonArrest.length,
      motorVehicleOffenseTips: motorVehicleOffenseTips.length,
      motorVehicleOffenseArrest: motorVehicleOffenseArrest.length,
      noiseComplaintTips: noiseComplaintTips.length,
      noiseComplaintArrest: noiseComplaintArrest.length,
      paroleViolationTips: paroleViolationTips.length,
      paroleViolationArrest: paroleViolationArrest.length,
      policeInformationTips: policeInformationTips.length,
      policeInformationArrest: policeInformationArrest.length,
      prostitutionTips: prostitutionTips.length,
      prostitutionArrest: prostitutionArrest.length,
      publicPeaceOffenseTips: publicPeaceOffenseTips.length,
      publicPeaceOffenseArrest: publicPeaceOffenseArrest.length,
      robberyTips: robberyTips.length,
      sexualAssaultTips: sexualAssaultTips.length,
      sexualAssaultArrest: sexualAssaultArrest.length,
      suspiciousActivityTips: suspiciousActivityTips.length,
      suspiciousActivityArrest: suspiciousActivityArrest.length,
      terrorismTips: terrorismTips.length,
      terrorismArrest: terrorismArrest.length,
      theftTips: theftTips.length,
      theftArrest: theftArrest.length,
      underageDrinkingTips: underageDrinkingTips.length,
      underageDrinkingArrest: underageDrinkingArrest.length,
      vehicleTheftTips: vehicleTheftTips.length,
      vehicleTheftArrest: vehicleTheftArrest.length,
      wantedPersonTips: wantedPersonTips.length,
      wantedPersonArrest: wantedPersonArrest.length,
      weaponsTips: weaponsTips.length,
      weaponsArrest: weaponsArrest.length,
    },
  };
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: ["Tips Submitted", "Tips Leading to Arrest"],
  datasets: [
    {
      data: [],
      backgroundColor: ["#CCC", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
});

export default class DynamicDoughnut extends React.Component {
  getInitialState() {
    return getState();
  }

  componentWillMount() {
    setInterval(() => {
      this.setState(getState());
    }, 10000);
  }
  render() {
    return (
      <div>
        <h2>Dynamicly refreshed Doughnut Example</h2>
        <Doughnut data={this.state} width={400} height={400} />
      </div>
    );
  }
}
