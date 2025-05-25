import { Badge, Box, Button, Card, Flex, Group, Image, Text, useMantineColorScheme } from "@mantine/core";
import { IconChartBar, IconChevronRight } from "@tabler/icons-react";
// import { FC } from "react";

// interface Props {

// }

const CategoryCard = () => {

    const { colorScheme } = useMantineColorScheme();

    return <Box p={18}>
        <Card shadow="sm" padding="lg" radius="md" withBorder bg={ colorScheme === "dark" ? "rgba(70, 78, 91, 0.5)" : "white" } >
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                    style={{ borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px" }}
                />
            </Card.Section>
            <Group justify="space-between" mt="30px" mb="xs" gap="20px">
                <Text fw={500} size="22px"
                >Politics</Text>
                <Text size="16px" style={{ lineHeight: "25px", wordSpacing: '2px' }}>Explore predictions on elections, policy changes, and global political events</Text>
                <Group>
                    <Badge color="#C2F2FD" size="md" p={10}>
                        <Flex
                            gap={10}
                            align="center"
                        >
                            <IconChartBar color="#076B81" size={18} />
                            <Text color="#076B81" size="16px" fw={400}>
                                2,000
                            </Text>
                        </Flex>
                    </Badge>
                    <Badge color="#E2BAF4" size="md" p={10}>
                        <Flex
                            gap={10}
                            align="center"
                        >
                            <IconChartBar color="#5C167D" size={18} />
                            <Text color="#5C167D" size="16px" fw={400}>
                                2,000
                            </Text>
                        </Flex>
                    </Badge>
                </Group>
                <Flex
                    justify="space-between"
                    mt={20}
                    pt={20}
                    style={{ borderTop: "1px solid #DCE7EE80" }}
                    w="100%"
                    align="center"
                >
                    <Text
                        color={colorScheme === "dark" ? "#B0B0B0" : "#B0B0B0"}
                    >
                        View Polls
                    </Text>
                    <Button color="#43505C" radius={30}>
                        <Group>
                            <Text>
                                Vote Now
                            </Text>
                            <IconChevronRight />
                        </Group>
                    </Button>
                </Flex>
            </Group>
        </Card>
    </Box>
}

export default CategoryCard;         