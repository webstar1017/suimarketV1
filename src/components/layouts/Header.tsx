import HomeContext from "@/state/index.context";
import { HEADER_PAGES } from "@/utils/consistant";
import { UnstyledButton, Container, Flex, Image, useMantineColorScheme, Text, Burger, Box, Modal, Menu, Switch } from "@mantine/core";
import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { FC, useContext, useState } from "react";
import WalletConnect from "../WalletConnect";
import useIsMobile from "@/hooks/useIsMobile";
import { useDisclosure } from "@mantine/hooks";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

interface Props {
    openNavbar: boolean
    toogleNavbar: () => void
}

const MyHeader: FC<Props> = ({
    openNavbar,
    toogleNavbar
}) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [authType, setAuthType] = useState("login");
    const {
        state: { selectedPage }
    } = useContext(HomeContext);
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const isMobile = useIsMobile();
    const mainLinks = HEADER_PAGES.map((item, index) => (
        <Link href={`/${item.page}`} key={`header-${index}`}>
            {
                item.page === selectedPage ?
                    <Text color="rgba(38, 133, 241, 1)" size="18px" fw={500}>{item.name}</Text> :
                    <Text size="18px" fw={500} className="hover:text-[rgba(38, 133, 241, 1)]">{item.name}</Text>
            }
        </Link>
    ));

    return <header>
        <Box
            style={{ height: "75px", background: `${colorScheme === "dark" ? '#181B20' : "white"}`, boxShadow: '0 4px 4px 0 rgba(38, 133, 241, 0.2), 0 6px 20px 0 rgba(38, 133, 241, 0.19)' }}
            w='100%'
        >
            <Container size={1440} h="100%">
                <Flex
                    justify={'space-between'}
                    h={'100%'}
                    w={'100%'}
                    align='center'

                >
                    <Flex
                        align='center'
                        gap="20px"
                    >
                        <Burger
                            opened={openNavbar}
                            onClick={toogleNavbar}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Link href="/">
                            <Image src="/img/logo.svg" style={{ width: 160 }} alt=""/>
                        </Link>
                        <Flex gap="20px" align='center'>
                            {
                                !isMobile && mainLinks
                            }
                        </Flex>
                    </Flex>
                    <Flex
                        gap={20}
                        align='center'
                    >
                        {
                            !isMobile && <WalletConnect />
                        }
                        <Menu shadow="md" width={200} closeOnItemClick={false} trigger="click-hover" position="bottom-end"
                        >
                            <Menu.Target>
                                <UnstyledButton
                                >
                                    <IconMenu2 />
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    onClick={() => {
                                        setAuthType("login");
                                        open();
                                    }}
                                >
                                    Log In
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() => {
                                        setAuthType("signup");
                                        open();
                                    }}
                                >
                                    Sign Up
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item >
                                    <Flex justify="space-between" align="center">
                                        Dark Mode
                                        <Switch
                                            checked={colorScheme === "dark" ? true : false}
                                            onChange={(event) => event.currentTarget.checked ? setColorScheme("dark") : setColorScheme("light")}
                                            color="blue"
                                            size="md"
                                            thumbIcon={
                                                colorScheme === "dark" ? (
                                                    <IconMoon size={12} color="var(--mantine-color-gray-6)" stroke={3} />
                                                ) : (
                                                    <IconSun size={12} color="var(--mantine-color-blue-6)" stroke={3} />
                                                )
                                            }
                                        />
                                    </Flex>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Flex>
                </Flex>
            </Container>
        </Box>
        <Modal opened={opened} onClose={close}  centered withCloseButton={false}>
            {
                authType === "login" ? <Login /> : <SignUp />
            }
        </Modal>
    </header>
}

export default MyHeader;