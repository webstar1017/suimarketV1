"use client"

import Notification from "@/components/settings/Notification";
import Profile from "@/components/settings/Profile";
import Content from "@/components/settings/Content";
import { Button, Container, Flex, Grid, Text } from "@mantine/core";
import { useState } from "react";

function Settings() {
    const SETTING_COMPONENTS = [
        { name: "Profile", title: "Profile Settings", component: <Profile /> },
        { name: "Notifications", title: "Notifications Settings", component: <Notification /> }
    ];

    const [selectedSetting, setSelectedSetting] = useState<string>(SETTING_COMPONENTS[0].name);
    
    return (
        <Container w={2000} mt={30}>
            <Grid >
                <Grid.Col span={{ md: 3, sm: 12 }}>
                    <Flex direction="column" gap={10}>
                    {
                        SETTING_COMPONENTS.map((item, index) =>
                            <Button
                                variant={item.name === selectedSetting ? "light" : "transparent"}
                                className="cursor: pointer"
                                w={150}
                                onClick={() => {
                                    setSelectedSetting(item.name);
                                }}
                                justify="start"
                                key={`settings-${index}`}
                            >
                                <Text>{item.name}</Text>
                            </Button>
                        )
                    }
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ md: 9, sm: 12 }}>
                    <Content 
                        title={SETTING_COMPONENTS.filter((item) => item.name === selectedSetting)[0].title}
                        component={SETTING_COMPONENTS.filter((item) => item.name === selectedSetting)[0].component}
                    />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Settings;