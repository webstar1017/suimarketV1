"use client"

import { Box, Container, Flex } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import MyFooter from "./Footer";
import { useParams } from "next/navigation";

interface Props {
    children: ReactNode,
}

const Main: FC<Props> = ({ children }) => {
    
    const params = useParams();
    const [path, setPath] = useState<string>("");
    useEffect(() => {
        setPath(window.location.pathname);
    }, [params])

    return <Box>
        <Container size={path.indexOf("rewards") > -1 ? "100%" : 1440} mt={path.indexOf("rewards") > -1 ? '0px' : '30px'} >
            <Flex
                justify='center'
                direction={'column'}
            >
                <Box mb={80}>
                    {children}
                </Box>
            </Flex>
        </Container>
        <MyFooter />
    </Box>
}

export default Main;