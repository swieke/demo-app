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
        return <Grid.Container  css={{  minHeight: "100vh" }} >
            {appData.resources.map((resource, index) => {
                console.log(resource)
                return <Grid xs={3} css={{padding: 30}}>
                    <AppCard resource={resource} index={index} />
                </Grid>
            })}
        </Grid.Container>
    }
}
