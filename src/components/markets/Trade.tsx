import { Box, Button, Flex, Grid, Group, NumberInput, Radio, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { useState } from "react";

function Trade() {

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
    const [selectedTradeTag, setSelectedTradeTag] = useState<string>(TRADE_TAGS[0].key);
    const [selectedTradeType, setSelectedTradeType] = useState<string>(TRADE_TYPE[0].key);

    return <Box>
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
        <Box
            className="border-2 border-dashed border-[#1F242F] rounded-[15px] bg-gradient-to-r from-[#080c16] via-[#0d1323] to-[#080c16] w-full mt-[32px]"
        >
            <div className="bg-gradient-to-r from-[#080c16] via-[#284f8a] to-[#080c16] m-auto h-[1px]">
            </div>
            <Flex justify="space-between" p={16} align="center">
                <Text className="" size="18px">Market Summary</Text>
                <Button variant="outline" color="#2E90FA" size="lg" pl={10} pr={10}>
                    <Flex gap={4} align="center">
                        <IconStar size={16} />
                        <Text size="16px">Generate</Text>
                    </Flex>
                </Button>
            </Flex>
        </Box>
    </Box>
}

export default Trade;