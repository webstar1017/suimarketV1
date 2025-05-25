"use client"

import MarketDetailSkeleton from "@/components/skeletons/MarketDetailSkeleton";
import { useMarketData } from "@/hooks/useMarketData copy";
// import { useSuiWallet } from "@/hooks/useSuiWallet";
import { Box, Button, Card, Divider, Flex, Grid, NumberInput, Text } from "@mantine/core";
import { useParams } from "next/navigation";
import { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Image from "next/image";

function MarketList() {

    const params = useParams();
    const marketId = params.marketId as string;
    // const { marketData, isLoading, error } = useMarketData(marketId);
    const {isLoading} = useMarketData(marketId);

    // const { connected, account, executeTransaction } = useSuiWallet();
    // const [isResolving, setIsResolving] = useState(false);
    const [position, setPosition] = useState<boolean>(false);
    const [suiValue, setSuiValue] = useState<number | string>('');

    const options = {
        title: {
            text: 'SuiMarket',
            align: 'right',
            style: {
                color: "#666666"
            }
        },
        chart: {
            backgroundColor: "transparent"
        },
        xAxis: {
            labels: { enabled: true },
            lineWidth: 0,
            tickLength: 0
        },
        legend: {
            enabled: false // ensure legend is visible
        },
        series: [{
            data: [1, 2, 3]
        }]
    }

    return <Box mt={30}>
        {
            isLoading ? <MarketDetailSkeleton /> :
                <Grid>
                    <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
                        <Flex gap={20} align="center">
                            <Image src="/img/btc.png" alt="" width={80} height={80} />
                            <Text size="22px" fw={"bold"}>
                                Bitcoin Up or Down on May 25?
                            </Text>
                        </Flex>
                        <Box mt={30}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="fixed">
                            <Text size="18px" fw={"bold"}>Trade</Text>
                            <Divider mt={20} />
                            <Grid mt={20}>
                                <Grid.Col span={6}>
                                    <Button color={position ? "green" : "#eeeeee"} size="lg" w={"100%"}
                                        onClick={() => setPosition(true)}
                                    >Yes</Button>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Button color={position ? "#eeeeee" : "red"} size="lg" w={"100%"}
                                        onClick={() => setPosition(false)}
                                    >No</Button>
                                </Grid.Col>
                            </Grid>
                            <NumberInput
                                mt={20}
                                label="Amount (SUI)"
                                placeholder="0.00"
                                value={suiValue}
                                onChange={setSuiValue}
                            />
                        </Card>
                    </Grid.Col>
                </Grid>
        }
    </Box>
}

export default MarketList;