import {useSession } from "next-auth/client"

const tips = () => {
    const [session, loading] = useSession();

    if (loading) {
        return <div>Loading...</div>
    }

if (session) {
        return (
            <div>
                View Tips, {session.user.username}
            </div>
        )
    } else {
        return <div>You aren't allowed here!</div>
    }
}

export default tips
