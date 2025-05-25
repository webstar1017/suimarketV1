"use client"

import { Box, Container, Flex } from "@mantine/core";
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode,
}

const Main: FC<Props> = ({ children }) => {
    return <Container size={1440}>
        <Flex
            justify='center'
            direction={'column'}
        >
            <Box>
                {children}
            </Box>
        </Flex>
    </Container>
}

export default Main;