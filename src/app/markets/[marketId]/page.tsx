"use client"

import MarketDetailSkeleton from "@/components/skeletons/MarketDetailSkeleton";
import { useMarketData } from "@/hooks/useMarketData copy";
// import { useSuiWallet } from "@/hooks/useSuiWallet";
import { Box, Button, Flex, Grid, Group, NumberInput, Radio, Table, Text } from "@mantine/core";
import { useParams } from "next/navigation";
import React, {useState } from "react";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import Image from "next/image";
import { IconClock, IconSearch, IconTrophy } from "@tabler/icons-react";
// import { formatAddress } from "@/utils/global";
import useIsMobile from "@/hooks/useIsMobile";

function MarketList() {

    const TABLE_TAGS = [
        { name: "Unsolved", key: "unsolved" },
        { name: "Resolved", key: "resolved" }
    ];
    const TRADE_TAGS = [
        { name: "Buy", key: "buy" },
        { name: "Sell", key: "sell" }
    ];
    const TRADE_TYPE = [
        { name: "Market", key: "market" },
        { name: "Limit", key: "limit" },
        { name: "Merge", key: "merge" },
        { name: "Split", key: "split" },
    ];
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
    const [selectedTableTag, setSelectedTableTag] = useState<string>(TABLE_TAGS[0].key);
    const [selectedTradeTag, setSelectedTradeTag] = useState<string>(TRADE_TAGS[0].key);
    const [selectedTradeType, setSelectedTradeType] = useState<string>(TRADE_TYPE[0].key);
    // const [selectedTrade, setSelectedTrade] = useState<string>(TRADES[0].key);

    const isMobile = useIsMobile();

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
                                <Box className="border border-[#1F242F] rounded-[15px] bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full h-[345px]">
                                    <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
                                    </div>
                                </Box>
                                <Box
                                    style={{ border: '1px solid #333741' }}
                                >
                                    <Flex
                                        direction={isMobile ? "column" : "row"}
                                    >
                                        {
                                            TABLE_TAGS.map((item, index) =>
                                                <Box key={`table-tag-${index}`} p={0} w={isMobile ? "100%" : "50%"}>
                                                    <Flex
                                                        h={44} w="100%" justify="center" align="center"
                                                        bg={selectedTableTag === item.key ? "rgba(46, 144, 250, 0.4)" : "transparent"}
                                                        style={{
                                                            borderBottom: `2px solid ${selectedTableTag === item.key ? "rgba(46, 144, 250, 1)" : "#333741"}`
                                                        }}
                                                        className="cursor-pointer"
                                                        onClick={() => setSelectedTableTag(item.key)}
                                                    >
                                                        <Text
                                                            style={{
                                                                color: selectedTableTag === item.key ? "white" : "#94969C",
                                                            }}
                                                        >{item.name}</Text>
                                                    </Flex>
                                                </Box>
                                            )
                                        }
                                    </Flex>
                                    <Table verticalSpacing="md"
                                    >
                                        <Table.Thead>
                                            <Table.Tr bg="#1F242F">
                                                <Table.Th><Text size="12px" style={{ color: "#94969C" }}>Outcome</Text></Table.Th>
                                                <Table.Th><Text size="12px" style={{ color: "#94969C" }}>Change</Text></Table.Th>
                                                <Table.Th><Text size="12px" style={{ color: "#94969C" }}>Actions</Text></Table.Th>
                                            </Table.Tr>
                                        </Table.Thead>
                                        <Table.Tbody>
                                            <Table.Tr >
                                                <Table.Td colSpan={4} rowSpan={7} p={0}>
                                                    <Box className="bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full h-[400px]">
                                                        <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
                                                        </div>
                                                        <Flex align="center" justify="center" gap={10} h={400} direction="column">
                                                            <Box
                                                                p={12}
                                                                className="border border-[#333741] rounded-[10]"
                                                            >
                                                                <IconSearch size={24} />
                                                            </Box>

                                                            <Text style={{ color: "#F5F5F6" }}>No acitvity found</Text>
                                                            <Text style={{ color: "#94969C" }} size="14px">
                                                                {`Looks like it's empty. Your data will appear here when available.`}
                                                            </Text>
                                                        </Flex>
                                                    </Box>
                                                </Table.Td>
                                            </Table.Tr>
                                        </Table.Tbody>
                                    </Table>
                                </Box>
                                <Box
                                    className="border-2 border-dashed border-[#1F242F] rounded-[15px] bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full"
                                >
                                    <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
                                    </div>
                                    <Box p={16}>
                                        <Text size="24px">Rules</Text>
                                        <Flex gap={8} direction="column" mt={20}>
                                            <Text style={{ color: "#94969C", lineHeight: '20px' }} size="14px">
                                                {`This market will resolve to “Yes” if the Indiana Pacers win the 2024-2025 NBA Championship. Otherwise, this market will resolve to “No”.`}
                                            </Text>
                                            <Text style={{ color: "#94969C", lineHeight: '20px' }} className="leading-[22px]" size="14px">
                                                {`This market will resolve to “No” if it becomes impossible for this team to become 2024-25 NBA Champion based off the rules of the NBA.`}
                                            </Text>
                                            <Text style={{ color: "#94969C", lineHeight: '20px' }} className="leading-[22px]" size="14px">
                                                {`The resolution source for this market will be information from the NBA.`}
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={{ sm: 12, md: 4 }}>
                            <Box className="border border-[#1F242F] rounded-[15px] bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full">
                                <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
                                </div>
                                <Flex p={14} gap={24} direction="column">
                                    <Flex>
                                        <Group gap={8} align="center">
                                            <Box w={64} h={64} className="rounded-[10]" bg="rgba(46, 144, 250, 0.4)">

                                            </Box>
                                            <Text size="18px">
                                                Indiana Pacers
                                            </Text>
                                        </Group>
                                    </Flex>
                                    <Flex gap={16} direction="column">
                                        <Flex
                                        >
                                            {
                                                TRADE_TAGS.map((item, index) =>
                                                    <Box key={`table-tag-${index}`} p={0} w={"100%"}>
                                                        <Flex
                                                            h={44} w="100%" justify="center" align="center"
                                                            bg={selectedTradeTag === item.key ? "rgba(46, 144, 250, 0.4)" : "transparent"}
                                                            style={{
                                                                borderBottom: `2px solid ${selectedTradeTag === item.key ? "rgba(46, 144, 250, 1)" : "#333741"}`
                                                            }}
                                                            className="cursor-pointer"
                                                            onClick={() => setSelectedTradeTag(item.key)}
                                                        >
                                                            <Text
                                                                style={{
                                                                    color: selectedTradeTag === item.key ? "white" : "#94969C",
                                                                }}
                                                            >{item.name}</Text>
                                                        </Flex>
                                                    </Box>
                                                )
                                            }
                                        </Flex>
                                        <Flex justify="space-between">
                                            {
                                                TRADE_TYPE.map((item, index) =>
                                                    <Radio
                                                        key={`trade-type-${index}`}
                                                        label={item.name}
                                                        checked={item.key === selectedTradeType ? true : false}
                                                        onChange={(event) => {
                                                            if (event.target.value == "on") {
                                                                setSelectedTradeType(item.key)
                                                            }
                                                        }}
                                                    />
                                                )
                                            }
                                        </Flex>
                                        <NumberInput
                                            label="Amount"
                                            placeholder="$ 0"
                                            prefix="$"
                                        />
                                        <Grid>
                                            <Grid.Col span={6}>
                                                <Button color="#074D3133" w="100%"
                                                >
                                                    <Flex
                                                        gap={6}
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <Text size="15px" style={{ color: "#47CD89" }} className="bold-text"
                                                        >Buy Yes</Text>
                                                    </Flex>
                                                </Button>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Button color="#D92D2033" w="100%">
                                                    <Flex
                                                        gap={6}
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <Text size="15px" style={{ color: "#F97066" }} className="bold-text">Buy No</Text>
                                                    </Flex>
                                                </Button>
                                            </Grid.Col>
                                        </Grid>
                                    </Flex>
                                    <Button color="#1570EF">
                                        Login To Trade
                                    </Button>
                                </Flex>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Box>

        }
    </Box>
}

// interface CardItemType {
//     icon: {
//         component: React.ReactElement,
//         bg: string
//     },
//     title: string,
//     value: string
// }

// const CardItem: FC<CardItemType> = ({ icon, title, value }) => {
//     return <Box className="border border-[#1F242F] rounded-[15px] bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full">
//         <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
//         </div>
//         <Box
//             p={16}
//         >
//             <Flex direction="column" gap="16px">
//                 <Box
//                     p={10}
//                     bg={icon.bg}
//                     w={45}
//                     className="rounded-md"
//                 >
//                     {icon.component}
//                 </Box>
//                 <Text style={{ color: "#94969C" }} size="14px">
//                     {title}
//                 </Text>
//                 <Text size="24px" className="bold-text">
//                     ${value}
//                 </Text>
//             </Flex>
//         </Box>
//     </Box>
// }

export default MarketList;