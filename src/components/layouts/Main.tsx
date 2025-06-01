"use client"

import { Box, Container, Flex } from "@mantine/core";
import { FC, ReactNode } from "react";
import MyFooter from "./Footer";

interface Props {
    children: ReactNode,
}

const Main: FC<Props> = ({ children }) => {
    return <Box mih={500}>
        <Container size={1440}>
            <Flex
                justify='center'
                direction={'column'}
            >
                <Box mb={40}>
                    {children}
                </Box>
            </Flex>
        </Container>
        <MyFooter />
    </Box>
}

export default Main;