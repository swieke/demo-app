import React, { Component } from "react"
import { Button, Grid, Input } from '@nextui-org/react';
import { useState } from "react";
import { signIn } from 'next-auth/react'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleChange = event => {
        if (event.target.name == 'email') setEmail(event.target.value)
        else if (event.target.name == 'password') setPassword(event.target.value)
    }

    const renderForm = () => {
        return <form>
            <Grid.Container alignItems="center" gap={4} css={{ backgroundColor: '#FFF', borderRadius: 20, width: '20vw' }}>
                <Grid xs={12}>
                    <Input bordered fullWidth name="email" labelPlaceholder="Email" onChange={handleChange} />
                </Grid>
                <Grid xs={12}>
                    <Input bordered fullWidth name="password" type="password" labelPlaceholder="Password" onChange={handleChange} />
                </Grid>
                <Grid xs={12}>
                    <Grid.Container alignContent="center" alignItems="center" justify="center" >
                        <Button auto shadow type="submit" onClick={signIn}>Login</Button>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </form>

    }


    return (
        <Grid.Container justify="center" alignItems="center" css={{ minHeight: '100vh', }}>
            <Grid>
                {renderForm()}
            </Grid>
        </Grid.Container>
    )
}

export default LoginForm