import React, { useState } from "react"
import { Card, Grid, Text, Row, Button } from "@nextui-org/react";

export default function AppCard({ resource, index }) {

    return (
        <Card  key={index}>
            <Card.Header>
                <Text size="$2xl" b>{resource['name']}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Text>
                    <b>guid:</b>{resource['guid']}
                </Text>
                <Text>
                    <b>Created at: </b> {resource['created_at']}
                </Text>
                <Text>
                    <b>Updated at:  </b> {resource['updated_at']}
                </Text>
                <Text>
                    <b>State:   </b> {resource['state']}
                </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                <Row fluid={true} justify="center" >
                    <Button size="sm" light>
                        Schedule
                    </Button>
                    {resource['state'] == 'STARTED' ? <Button size="sm" color="error">Stop</Button> : <Button size="sm" >Start</Button>}
                </Row>
            </Card.Footer>
        </Card>
    )

}