import { Box, Flex, Grid, Text, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useMarkets } from "@/hooks/useMarketData";
import MarketData from "@/types/MarketData";
import MarketCard from "../MarketCard";
// import useIsMobile from "@/hooks/useIsMobile";
import CardSkeleton from "../skeletons/CardSkeleton";

export default function Popular() {

    const { colorScheme } = useMantineColorScheme();
    const { markets, isLoading } = useMarkets();
    const topMarkets = markets
        ? markets
            .sort((a, b) => {
                // Extract numeric value from volume string (e.g. "$24,532" -> 24532)
                const volumeA = parseFloat(a.volume.replace(/[^0-9.]/g, ""));
                const volumeB = parseFloat(b.volume.replace(/[^0-9.]/g, ""));
                return volumeB - volumeA;
            })
            .slice(0, 3)
        : [];

    return <Box>
        <Flex
            justify='space-between'
            align='center'
            pb={20}
            style={{ borderBottom: `1px solid ${colorScheme === "dark" ? "rgba(67, 80, 92, 1)" : "rgba(220, 231, 238, 0.72)"}` }}
        >
            <Text size="32px" fw={500}>
                Popular Markets
            </Text>
            <Flex
                gap={12}
                align='center'
            >
                <Link href="/markets">
                    <UnstyledButton >
                        <Text size="18px">View Markets</Text>
                    </UnstyledButton>
                </Link>
                <Flex
                    w={26}
                    h={26}
                    style={{ borderRadius: '26px', cursor: 'pointer', border: '1px solid ' + colorScheme === "dark" ? "#43505C" : "#333333" }}
                    bg={colorScheme === "dark" ? '#333333' : "white"}
                    align="center"
                    justify='center'
                >
                    <IconPlus size={20} />
                </Flex>
            </Flex>
        </Flex>
        <Box
            mt={20}
        >
            {
                isLoading ? <CardSkeleton /> :
                    topMarkets.length === 0 ?
                        <Text className="text-center">No markets available yet. Be the first to create one!</Text> :
                        <Grid>
                            {
                                topMarkets.map((item: MarketData, index: number) =>
                                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }} key={`marketcard-${index}`}>
                                        <MarketCard
                                            data={item}
                                        />
                                    </Grid.Col>
                                )
                            }
                        </Grid>

            }
        </Box>
    </Box>
}

