"use client"

import MarketDetailSkeleton from "@/components/skeletons/MarketDetailSkeleton";
import { useMarketData } from "@/hooks/useMarketData copy";
// import { useSuiWallet } from "@/hooks/useSuiWallet";
import { Box, Flex, Grid, Text } from "@mantine/core";
import { useParams } from "next/navigation";
import React from "react";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import Image from "next/image";
import { IconClock, IconTrophy } from "@tabler/icons-react";
// import { formatAddress } from "@/utils/global";
import Graph from "@/components/markets/Graph";
import Resolved from "@/components/markets/Resoved";
import Trade from "@/components/markets/Trade";

function Details() {
    // const TRADES = [
    //     { name: "Yes", key: "yes" },
    //     { name: "Yes", key: "no" },
    // ]

    const params = useParams();
    const marketId = params.marketId as string;
    const { isLoading } = useMarketData(marketId);
    // const { connected, account, executeTransaction } = useSuiWallet();
    // const [isResolving, setIsResolving] = useState(false);
    // const [position, setPosition] = useState<boolean>(false);
    // const [suiValue, setSuiValue] = useState<number | string>('');
    
    // const [selectedTrade, setSelectedTrade] = useState<string>(TRADES[0].key);

    return <Box mt={30}>
        {
            isLoading ? <MarketDetailSkeleton /> :
                <Box>
                    <Flex gap={20}>
                        <Image src="/img/btc_large.png" alt="" width={89} height={88} />
                        <Flex direction="column" gap={15}>
                            <Text size="24px">NBA Champion</Text>
                            <Flex gap={10}>
                                <Flex gap={5} align="center">
                                    <IconTrophy size={16} color="#CECFD2" />
                                    <Text size="14px" style={{ color: "#CECFD2" }}>
                                        $1,233,232,223 Vol.
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <IconClock size={16} color="#CECFD2" />
                                    <Text style={{ color: "#CECFD2" }}>
                                        Jun 23, 2025
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Grid mt={20}>
                        <Grid.Col span={{ sm: 12, md: 8 }} >
                            <Flex direction="column" gap="32px">
                                <Graph />
                                <Resolved />
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={{ sm: 12, md: 4 }}>
                            <Trade />
                        </Grid.Col>
                    </Grid>
                </Box>

        }
    </Box>
}

export default Details;