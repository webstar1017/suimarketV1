import { CATEGORIES, HEADER_PAGES } from "@/utils/consistant";
import { UnstyledButton, Container, Flex, Image, useMantineColorScheme, Text, Burger, Box, Modal, Menu } from "@mantine/core";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import WalletConnect from "../WalletConnect";
import useIsMobile from "@/hooks/useIsMobile";
import { useDisclosure } from "@mantine/hooks";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { usePathname } from "next/navigation";

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
    const [selectedPage, setSelectedPage] = useState<string>("");
    const { colorScheme } = useMantineColorScheme();
    const pathname = usePathname();
    const isMobile = useIsMobile();
    // const router = useRouter();
    useEffect(() => {
        console.log(pathname);
        setSelectedPage(pathname);
    }, [pathname])
    
    return <header>
        <Box
            style={{ height: "75px", borderBottom: '1px solid #1F242F', background: `${colorScheme === "dark" ? '#0c111d' : "white"}` }}
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
                            <Image src="/img/logo.svg" style={{ width: 160 }} alt="" />
                        </Link>
                        <Flex
                            gap="20px"
                            align='center'
                            justify="center"
                            h={64}
                        >
                            {
                                !isMobile && HEADER_PAGES.map((item, index) => (
                                    <Link href={`/${item.page}`} key={`header-${index}`}>
                                        {
                                            selectedPage.indexOf(item.page) > -1 ?
                                                <Text size="16px" style={{ color: "rgba(38, 133, 241, 1)" }} className="bold-text">{item.name}</Text> :
                                                <Text size="16px" fw={500} style={{ color: "#CECFD2d" }}>{item.name}</Text>
                                        }
                                    </Link>
                                ))
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
                                    {/* <IconMenu2 /> */}
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
                                {/* <Menu.Item >
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
                                </Menu.Item> */}
                            </Menu.Dropdown>
                        </Menu>
                    </Flex>
                </Flex>
            </Container>
        </Box>
        {
            selectedPage != "/" &&
            <Box
                style={{ borderBottom: '1px solid #2E90FA' }}
                className="h-[64px] bg-[#0c111d]"
            >
                <Container size={1440} h="100%">
                    <Flex
                        gap="28px"
                        align='center'
                        justify="center"
                        h={64}
                    >
                        {
                            CATEGORIES.map((item, index) => (
                                <Link href={`/${item.page}`} key={`header-${index}`}>
                                    {
                                        selectedPage.indexOf(item.page) > -1 ?
                                            <Text style={{ color: "rgba(38, 133, 241, 1)" }} size="16px" className="bold-text">{item.name}</Text> :
                                            <Text size="16px" fw={500} style={{ color: "#CECFD2d" }} className="hover:text-[rgba(38, 133, 241, 1)]">{item.name}</Text>
                                    }
                                </Link>
                            ))
                        }
                    </Flex>
                </Container>
            </Box>
        }

        <Modal opened={opened} onClose={close} centered withCloseButton={false}>
            {
                authType === "login" ? <Login /> : <SignUp />
            }
        </Modal>
    </header>
}

export default MyHeader;