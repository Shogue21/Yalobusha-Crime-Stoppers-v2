import { getSession } from "next-auth/client"
import { Prisma, PrismaClient, Tip } from "@prisma/client";
import styles from '../styles/tips.module.css'

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
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Offense Type</th>
                            <th scope="col">Address</th>
                            <th scope="col">Nearest Intersection</th>
                            <th scope="col">Neighborhood</th>
                            <th scope="col">Arrested?</th>
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
