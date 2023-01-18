import AppCard from "../components/AppCard"
import React, { useEffect, useState } from "react"
import { Grid } from '@nextui-org/react';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Apps() {

    const [appData, setData] = useState(null)
    const { data: session, status } = useSession()
    const router = useRouter();


    useEffect(() => {
        if (status === 'unauthenticated') {
            console.log(status)
            router.push('/api/auth/signin')
        }
    }, [session, status])


    useEffect(() => {
        fetch('/api/get/apps').then((res) => res.json()).then((appData) => {
            setData(appData)
        })
    }, []);

    if (appData && appData.resources) {
        return <Grid.Container justify="center" css={{ paddingTop: "10vh", minHeight: "100vh", maxWidth: "90vw" }} >
            {appData.resources.map((resource, index) => {
                console.log(resource)
                return <Grid xs={4} css={{ mh: 350, margin: 10 }}>
                    <AppCard resource={resource} index={index} />
                </Grid>
            })}
        </Grid.Container>
    }
}
