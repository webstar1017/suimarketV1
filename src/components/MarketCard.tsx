import MarketData from "@/types/MarketData";
import { Box, Card, Flex, Grid, Text, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
    data: MarketData
}

const MarketCard: FC<Props> = ({
    data
}) => {

    const { colorScheme } = useMantineColorScheme();
    const router = useRouter();

    return <Card withBorder bg={colorScheme === "dark" ? "rgba(70, 78, 91, 0.5)" : "white"} shadow="sm"  radius={20}>
        <Flex direction="column" gap="20px">
            <Flex gap={15} align="center">
                <Image src="/img/btc.png" alt="" width={40} height={40}/>
                <Text size="18px" fw={500}>{data.title}</Text>
            </Flex>
            <Grid>
                <Grid.Col span={6}
                >
                    <Box p={20}
                        bg={colorScheme === "dark" ? "rgba(86, 101, 126, 0.5)" : "rgba(86, 101, 126, 0.2"}
                        style={{borderRadius: '10px'}}
                    >
                        <Text size="20px" className="text-center" fw={600}>YES</Text>
                        <Text size="30px" className="text-center" fw={600} color="rgba(126, 157, 243, 1)" mt={10}>48%</Text>
                    </Box>
                </Grid.Col>
                <Grid.Col span={6}
                >
                    <Box
                        p={20}
                        bg={colorScheme === "dark" ? "rgba(86, 101, 126, 0.5)" : "rgba(86, 101, 126, 0.2)"}
                        style={{borderRadius: '10px'}}
                    >
                        <Text size="20px" className="text-center" fw={600}>No</Text>
                        <Text size="30px" className="text-center" fw={600} color="rgba(243, 123, 141, 1)" mt={10}>52%</Text>
                    </Box>
                </Grid.Col>
            </Grid>
            <Flex
                justify="space-between"
                align="center"
            >
                <Flex gap="10px" 
                    align="center"
                >
                    <Image src="/img/chartbar_icon.svg" alt="" width={20} height={20}/>
                    <Text color="rgba(171, 171, 171, 1)">$8.2M</Text>
                </Flex>
                <Flex gap="10px" 
                    align="center"
                >
                    <UnstyledButton>
                        <Image src="/img/vote_icon.svg" alt="" width={20} height={20}/>
                    </UnstyledButton>
                    <UnstyledButton
                        onClick={() => router.push(`/markets/${data.id}`)}
                    >
                        <Image src="/img/view_icon.svg" alt="" width={20} height={20}/>
                    </UnstyledButton>
                </Flex>
            </Flex>
        </Flex>
    </Card>
}

export default MarketCard;