import { Box, Container, Flex, Text } from "@mantine/core";

const MyFooter = () => {
    return <Box
        bg="#0c111d"
        h={384}
    >
        <Container size={1440}>
            <Flex direction="column" gap={32} align="center" justify="center" h={216}>
                <img src={'/img/logo.svg'} />
                <Flex align="center" gap={32}>
                    <Text size="16px" style={{color: "#94969C"}}>About us</Text>
                    <Text size="16px" style={{color: "#94969C"}}>Guides and Articles</Text>
                    <Text size="16px" style={{color: "#94969C"}}>How it works</Text>
                </Flex>
            </Flex>
        </Container>
    </Box>        
}

export default MyFooter;