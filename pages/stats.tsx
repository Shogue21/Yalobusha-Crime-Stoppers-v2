import { Prisma, PrismaClient, Tip } from "@prisma/client";
import { useState } from "react";
import styles from "../styles/stats.module.css";
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

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

export default function Index({
  initPercent,
  initList,
  totalTips,
  tipsWithArrest,
  arsonTips,
  arsonArrest,
  assaultTips,
  assaultArrest,
  burglaryTips,
  burglaryArrest,
  childAbuseTips,
  childAbuseArrest,
  childSexualImagesTips,
  childSexualImagesArrest,
  civilIssueTips,
  civilIssueArrest,
  computerCrimesTips,
  computerCrimesArrest,
  covid19Tips,
  covid19Arrest,
  criminalMischiefTips,
  criminalMischeifArrest,
  criminalTrespassTips,
  criminalTrespassArrest,
  disorderlyConductTips,
  disorderlyConductArrest,
  dogBiteTips,
  dogBiteArrest,
  elderAbuseTips,
  elderAbuseArrest,
  forgeryTips,
  forgeryArrest,
  harassmentTips,
  harassmentArrest,
  homicideTips,
  homicideArrest,
  indecentExposureTips,
  indecentExposureArrest,
  missingPersonTips,
  missinsPersonArrest,
  motorVehicleOffenseTips,
  motorVehicleOffenseArrest,
  noiseComplaintTips,
  noiseComplaintArrest,
  paroleViolationTips,
  paroleViolationArrest,
  policeInformationTips,
  policeInformationArrest,
  prostitutionTips,
  prostitutionArrest,
  publicPeaceOffenseTips,
  publicPeaceOffenseArrest,
  robberyTips,
  robberyArrest,
  sexualAssaultTips,
  sexualAssaultArrest,
  suspiciousActivityTips,
  suspiciousActivityArrest,
  terrorismTips,
  terrorismArrest,
  theftTips,
  theftArrest,
  underageDrinkingTips,
  underageDrinkingArrest,
  vehicleTheftTips,
  vehicleTheftArrest,
  wantedPersonTips,
  wantedPersonArrest,
  weaponsTips,
  weaponsArrest,
}) {
  return (
    <div className={`${styles.stats} ${styles.overlay} ${styles.carousel}`}>
      <div id="carosuel_slide1" tabIndex="0" className={styles.carousel_slide}>
        <p>Tips Submitted: {totalTips}</p>
        <p>Tips leading to arrests: {tipsWithArrest}</p>
        <p>Arson Tips: {arsonTips}</p>
        <p>Arson Arrests: {arsonArrest}</p>
        <p>Assualt Tips: {assaultTips}</p>
        <p>Assault Arrests: {assaultArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide11" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide2" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide2" tabIndex="0" className={styles.carousel_slide}>
        <p>Burglary Tips: {burglaryTips}</p>
        <p>Burglary Arrests: {burglaryArrest}</p>
        <p>Child Abuse/Neglect Tips: {childAbuseTips}</p>
        <p>Child Abuse/Neglect Arrests: {childAbuseArrest}</p>
        <p>Child Sexual Images Tips: {childSexualImagesTips}</p>
        <p>Child Sexual Images Arrests: {childSexualImagesArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide1" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide3" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide3" tabIndex="0" className={styles.carosuel_slide}>
        <p>Civil Issue Tips: {civilIssueTips}</p>
        <p>Civil Issue Arrests: {civilIssueArrest}</p>
        <p>Computer Crime Tips: {computerCrimesTips}</p>
        <p>Computer Crime Arrests: {computerCrimesArrest}</p>
        <p>Covid-19 Tips: {covid19Tips}</p>
        <p>Covid-19 Arrests: {covid19Arrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide2" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide4" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide4" tabIndex="0" className={styles.carousel_slide}>
        <p>Criminal Mischeif Tips: {criminalMischiefTips}</p>
        <p>Criminal Mischief Arrests: {criminalMischeifArrest}</p>
        <p>Criminal Trespass Tips: {criminalTrespassTips}</p>
        <p>Cirminal Trespass Arrests: {criminalTrespassArrest}</p>
        <p>Disorderly Conduct Tips: {disorderlyConductTips}</p>
        <p>Disorderly Conduct Arrests: {disorderlyConductArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide3" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide5" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide5" tabIndex="0" className={styles.carousel_slide}>
        <p>Dog Bite Tips: {dogBiteTips}</p>
        <p>Dog Bite Arrests: {dogBiteArrest}</p>
        <p>Elder Abuse/Neglect Tips: {elderAbuseTips}</p>
        <p>Elder Abuse/Neglect Arrests: {elderAbuseArrest}</p>
        <p>Harassment Tips: {harassmentTips}</p>
        <p>Harassment Arrests: {harassmentArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide4" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide6" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide6" tabIndex="0" classname={styles.carousel_slide}>
        <p>Homicide Tips: {homicideTips}</p>
        <p>Homicide Arrests: {homicideArrest}</p>
        <p>Indecent Exposure Tips: {indecentExposureTips}</p>
        <p>Indecent Exposure Arrests: {indecentExposureArrest}</p>
        <p>Missing Person Tips: {missingPersonTips}</p>
        <p>Missing Person Arrests: {missinsPersonArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide5" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide7" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide7" tabIndex="0" className={styles.carousel_slide}>
        <p>Motor Vehicle Offenses Tips: {motorVehicleOffenseTips}</p>
        <p>Motor Vehicle Offenses Arrests: {motorVehicleOffenseArrest}</p>
        <p>Noise Complaint Tips: {noiseComplaintTips}</p>
        <p>Noise Complaint Arrests: {noiseComplaintArrest}</p>
        <p>Parole Violation Tips: {paroleViolationTips}</p>
        <p>Parole Violation Arrests: {paroleViolationArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide6" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide8" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide8" tabIndex="0" className={styles.carousel_slide}>
        <p>Police Information Tips: {policeInformationTips}</p>
        <p>Police Information Arrests: {policeInformationArrest} </p>
        <p>Prostitution Tips: {prostitutionTips}</p>
        <p>Prostitution Arrests: {prostitutionArrest}</p>
        <p>Public Peace Offense Tips: {publicPeaceOffenseTips}</p>
        <p>Public Peace Offense Arrests: {publicPeaceOffenseArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide7" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide9" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide9" tabIndex="0" className={styles.carousel_slide}>
        <p>Robbery Tips: {robberyTips}</p>
        <p>Robbery Arrests: {robberyArrest}</p>
        <p>Sexual Assault Tips: {sexualAssaultTips}</p>
        <p>Sexual Assault Arrests: {sexualAssaultArrest}</p>
        <p>Suspicious Activity Tips: {suspiciousActivityTips}</p>
        <p>Suspicious Activity Arrests: {suspiciousActivityArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide8" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide10" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide10" tabIndex="0" className={styles.carousel_slide}>
        <p>Terrorism Tips: {terrorismTips}</p>
        <p>Terrorism Arrests: {terrorismArrest}</p>
        <p>Theft Tips: {theftTips}</p>
        <p>Theft Arrests: {theftArrest}</p>
        <p>Underage Drinking Party Tips: {underageDrinkingTips}</p>
        <p>Underage Drinking Party Arrests: {underageDrinkingArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide9" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide11" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <div id="carousel_slide11" tabIndex="0" className={styles.carousel_slide}>
        <p>Vehicle Theft Tips: {vehicleTheftTips}</p>
        <p>Vehicle Theft Arrests: {vehicleTheftArrest}</p>
        <p>Wanted Person Tips: {wantedPersonTips}</p>
        <p>Wanted Person Arrests: {wantedPersonArrest}</p>
        <p>Weapon Tips: {weaponsTips}</p>
        <p>Weapon Arrests: {weaponsArrest}</p>
        <div className={styles.carousel__snapper}>
          <a href="#carousel__slide10" className={styles.carousel__prev}>
            Go to last slide
          </a>
          <a href="#carousel__slide1" className={styles.carousel__next}>
            Go to next slide
          </a>
        </div>
      </div>

      <aside className={styles.carousel__navigation}>
    <ol className={styles.carousel__navigation_list}>
      <li className={styles.carousel__navigation_item}>
        <a href="#carousel__slide1"
           className={styles.carousel__navigation_button}>Go to slide 1</a>
      </li>
      <li className={styles.carousel__navigation_item}>
        <a href="#carousel__slide2"
           className={styles.carousel__navigation_button}>Go to slide 2</a>
      </li>
      <li className={styles.carousel__navigation_item}>
        <a href="#carousel__slide3"
           className={styles.carousel__navigation_button}>Go to slide 3</a>
      </li>
      <li className={styles.carousel__navigation_item}>
        <a href="#carousel__slide4"
           className={styles.carousel__navigation_button}>Go to slide 4</a>
      </li>
    </ol>
  </aside>
    </div>
  );
}
