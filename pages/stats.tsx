import { Prisma, PrismaClient, Tip } from "@prisma/client";
import { useState } from "react";
import styles from "../styles/stats.module.css";
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import { Chart, Doughnut, Pie } from "react-chartjs-2";

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
      offenseType: "Arson" || "arson",
    },
    
  });
  console.log("arson Tips: " + arsonTips.length)
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
      offenseType: "Criminal Mischief",
    },
  });
  const criminalMischeifArrest = await prisma.tip.findMany({
    where: {
      offenseType: "Criminal Mischief",
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
      robberyArrest: robberyArrest.length,
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



// const allTipData = (props) => ({
//   labels: ["Tips Submitted", "Tips Leading to Arrest"],
//   datasets: [
//     {
//       data: [props.totalTips, props.tipsWithArrest],
//       backgroundColor: ["#36A2EB", "#FF0000"],
//       hoverBackgroundColor: ["#6abbf0", "#FF6384", "#FFCE56"],
//     },
//   ],
// });
export default class TipDataCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTips: {
        labels: ["Tips Submitted", "Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.totalTips, props.tipsWithArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      arsonTips:{
        labels: ["Arson Tips Submitted", " Arson Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.arsonTips, props.arsonArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      assaultTips:{
        labels: ["Assault Tips Submitted", " Asssault Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.assaultTips, props.assaultArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      burglaryTips:{
        labels: ["Burglary Tips Submitted", " Burglary Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.burglaryTips, props.burglaryArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      childAbuseTips:{
        labels: ["Child Abuse Tips Submitted", "Child Abuse Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.childAbuseTips, props.childAbuseArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      childSexualImagesTips:{
        labels: ["Child Sexual Images Tips Submitted", "Child Sexual Images Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.childSexualImagesTips, props.childSexualImagesArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      civilIssueTips:{
        labels: ["Civil Issue Tips Submitted", "Civil Issue Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.civilIssueTips, props.civilIssueArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      computerCrimesTips:{
        labels: ["Computer Crimes Tips Submitted", "Computer Crimes Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.computerCrimesTips, props.computerCrimesArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      childAbuseTips:{
        labels: ["Assault Tips Submitted", " Asssault Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.childAbuseTips, props.childAbuseArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      covid19Tips:{
        labels: ["COVID-19 Tips Submitted", "COVID-19 Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.covid19Tips, props.covid19Arrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      criminalMischiefTips:{
        labels: ["Criminal Mischief Tips Submitted", "Criminal Mischief Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.criminalMischiefTips, props.criminalMischeifArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      criminalTrespassTips:{
        labels: ["Criminal Trespass Tips Submitted", "Criminal Trespass Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.criminalTrespassTips, props.criminalTrespassArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      disorderlyConductTips:{
        labels: ["Disorderly Conduct Tips Submitted", "Disorderly Conduct Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.disorderlyConductTips, props.disorderlyConductArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      dogBiteTips:{
        labels: ["Dog Bite Tips Submitted", "Dog Bite Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.dogBiteTips, props.dogBiteArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      elderAbuseTips:{
        labels: ["Elder Abuse Tips Submitted", "Elder Abuse Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.elderAbuseTips, props.elderAbuseArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      forgeryTips:{
        labels: ["Forgery Tips Submitted", "Forgery Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.forgeryTips, props.forgeryArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      harassmentTips:{
        labels: ["Harassment Tips Submitted", "Harassment Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.harassmentTips, props.harassmentArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      homicideTips:{
        labels: ["Homicide Tips Submitted", "Homicide Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.homicideTips, props.homicideArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      indecentExposureTips:{
        labels: ["Indecent Exposure Tips Submitted", "Indecent Exposure Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.indecentExposureTips, props.indecentExposureArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      missingPersonTips:{
        labels: ["Missing Person Tips Submitted", "Missing Person Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.missingPersonTips, props.missinsPersonArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      motorVehicleOffenseTips:{
        labels: ["Motor Vehicle Offenses Tips Submitted", "Motor Vehicle Offesnses Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.motorVehicleOffenseTips, props.motorVehicleOffenseArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      noiseComplaintTips:{
        labels: ["Noise Complaint Tips Submitted", "Noise Complaint Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.noiseComplaintTips, props.noiseComplaintArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      paroleViolationTips:{
        labels: ["Parole Violation Tips Submitted", "Parole Violation Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.paroleViolationTips, props.paroleViolationArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      policeInformationTips:{
        labels: ["Police Information Tips Submitted", "Police Information Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.policeInformationTips, props.policeInformationArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      prostitutionTips:{
        labels: ["Prostitution Tips Submitted", "Prostitution Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.prostitutionTips, props.prostitutionArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      publicPeaceOffenseTips:{
        labels: ["Public Peace Offense Tips Submitted", "Public Peace Offense Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.publicPeaceOffenseTips, props.publicPeaceOffenseArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      robberyTips:{
        labels: ["Robbery Tips Submitted", "Robbery Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.robberyTips, props.robberyArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      sexualAssaultTips:{
        labels: ["Sexual Assault Tips Submitted", "Sexual Asssault Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.sexualAssaultTips, props.sexualAssaultArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      suspiciousActivityTips:{
        labels: ["Suspicious Activity Tips Submitted", "Suspicious Activity Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.suspiciousActivityTips, props.suspiciousActivityArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      terrorismTips:{
        labels: ["Terrorism Tips Submitted", "Terrorism Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.terrorismTips, props.terrorismArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      theftTips:{
        labels: ["Theft Tips Submitted", "Theft Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.theftTips, props.theftArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      underageDrinkingTips:{
        labels: ["Underage Drinking Tips Submitted", "Underage Drinking Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.underageDrinkingTips, props.underageDrinkingArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      vehicleTheftTips:{
        labels: ["Vehicle Theft Tips Submitted", "Vehicle Theft Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.vehicleTheftTips, props.vehicleTheftArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      wantedPersonTips:{
        labels: ["Wanted Person Tips Submitted", "Wanted Person Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.wantedPersonTips, props.wantedPersonArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
      weaponsTips:{
        labels: ["Weapons Tips Submitted", "Weapons Tips Leading to Arrest"],
        datasets: [
          {
            data: [props.weaponsTips, props.weaponsArrest],
            backgroundColor: ["#36A2EB", "#FF0000"],
            hoverBackgroundColor: ["#6abbf0", "#FF6384"],
          },
        ],
      },
    };
  }


  // getInitialState() {
  //   return allTipData(this.props);
  // }

  // componentWillMount() {
  //   this.setState(allTipData(this.props));
  //   setInterval(() => {
  //     this.setState(allTipData(this.props));
  //   }, 10000);
  // }
  render() {
    return (
      
      <div>
        
         <div>
        <Pie className={styles.graphs} data={this.state.allTips} />
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.arsonTips} />
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.assaultTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.burglaryTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.childAbuseTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.childSexualImagesTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.civilIssueTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.computerCrimesTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.covid19Tips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.criminalMischiefTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.criminalTrespassTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.disorderlyConductTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.dogBiteTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.elderAbuseTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.forgeryTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.harassmentTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.homicideTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.indecentExposureTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.missingPersonTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.motorVehicleOffenseTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.noiseComplaintTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.paroleViolationTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.policeInformationTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.prostitutionTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.publicPeaceOffenseTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.robberyTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.sexualAssaultTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.suspiciousActivityTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.terrorismTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.theftTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.underageDrinkingTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.vehicleTheftTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.wantedPersonTips}/>
        </div>
        <div>
        <Pie className={styles.graphs} data={this.state.weaponsTips}/>
        </div>
      </div>
    );


    
  }
}
