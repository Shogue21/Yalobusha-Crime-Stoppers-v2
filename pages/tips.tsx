import { getSession } from "next-auth/client"
import { Prisma, PrismaClient, Tip } from "@prisma/client";
import styles from '../styles/tips.module.css'
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps(ctx) {
    const tips: Tip[] = await prisma.tip.findMany();

    return {
      props: {
        session: await getSession(ctx),
        allTips: tips
      }
    }
  }

const tips = ({session, allTips}) => {
    const [sorted, setSorted] = useState(false);
    const [sortedReverse, setSortedReverse] = useState(false);

    const sortTable = (column) => {
        if ((!sorted && !sortedReverse) || (!sorted && sortedReverse)) {
            setSorted(true);
            setSortedReverse(false);
            allTips.sort(function(a, b) {
                var itemA;
                var itemB;
                switch (column) {
                    case "offenseType":
                        itemA = a.offenseType.toUpperCase();
                        itemB = b.offenseType.toUpperCase();
                        break;
                    case "address":
                        itemA = a.address.toUpperCase();
                        itemB = b.address.toUpperCase();
                        break;
                    case "nearestIntersection":
                        itemA = a.nearestIntersection.toUpperCase();
                        itemB = b.nearestIntersection.toUpperCase();
                        break;
                    case "neighborhood":
                        itemA = a.neighborhood.toUpperCase();
                        itemB = b.neighborhood.toUpperCase();
                        break;
                    case "arrested":
                        itemA = a.arrested;
                        itemB = b.arrested;
                        if (itemA == false) {
                            itemA = "No"
                        } else if (itemA == true) {
                            itemA = "Yes"
                        } else if (itemB == false) {
                            itemB = "No"
                        } else if (itemB == true) {
                            itemB = "Yes"
                        }
                        break;
                }
                return itemA.localeCompare(itemB);
              });
        } else if (sorted && !sortedReverse) {
            setSorted(false);
            setSortedReverse(true);
            allTips.sort(function(a, b) {
                var itemA;
                var itemB;
                switch (column) {
                    case "offenseType":
                        itemA = a.offenseType.toUpperCase();
                        itemB = b.offenseType.toUpperCase();
                        break;
                    case "address":
                        itemA = a.address.toUpperCase();
                        itemB = b.address.toUpperCase();
                        break;
                    case "nearestIntersection":
                        itemA = a.nearestIntersection.toUpperCase();
                        itemB = b.nearestIntersection.toUpperCase();
                        break;
                    case "neighborhood":
                        itemA = a.neighborhood.toUpperCase();
                        itemB = b.neighborhood.toUpperCase();
                        break;
                    case "arrested":
                        itemA = a.arrested;
                        itemB = b.arrested;
                        if (itemA == false) {
                            itemA = "No"
                        } else if (itemA == true) {
                            itemA = "Yes"
                        } else if (itemB == false) {
                            itemB = "No"
                        } else if (itemB == true) {
                            itemB = "Yes"
                        }
                        break;
                }
                return itemA.localeCompare(itemB)
              }).reverse();
        }
        return allTips;
    }

    const renderTips = () => {
        return allTips.map(tip => 
            <tr key={tip.id}>
                <td>{tip.description}</td>
                <td>{tip.offenseType}</td>
                <td>{tip.address}</td>
                <td>{tip.nearestIntersection}</td>
                <td>{tip.neighborhood}</td>
                <td>{tip.arrested ? "Yes" : "No"}</td>
            </tr>
        );
    }

    if (session) {
            return (
                <div className={`${styles.body} table-responsive`}>
                    <table className="table table-sm table-striped table-hover sortable">
                        <thead>
                            <tr>
                            <th scope="col">Description</th>
                            <th onClick={() => {
                                allTips = sortTable('offenseType')
                                console.log("offense")
                                }} scope="col">Offense Type</th>
                            <th onClick={() => {
                                allTips = sortTable('address')
                                console.log("address")
                                }} scope="col">Address</th>
                            <th onClick={() => {
                                allTips = sortTable('nearestIntersection')
                                console.log("intersection")
                                }} scope="col">Nearest Intersection</th>
                            <th onClick={() => {
                                allTips = sortTable('neighborhood')
                                console.log("neighborhood")
                                }} scope="col">Neighborhood</th>
                            <th onClick={() => {
                                allTips = sortTable('arrested')
                                console.log("arrested")
                                }} scope="col">Arrested?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTips()}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <div className={styles.vh75}>You aren't allowed here!</div>
        }
    }

export default tips
