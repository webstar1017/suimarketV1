/**
 * Created by Pulao
 * date: 5/24/2025
 * description: In next js, all pages are passed when routing pages.
 */

"use client"

import { useCreateReducer } from "@/hooks/useCreateReducer";
import HomeContext from "@/state/index.context";
import { HomeInitialState, initialState } from "@/state/index.state";
import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC, ReactNode, useEffect, useState } from "react";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import MyHeader from "./Header";
// import MyFooter from "./Footer";
import Container from "./Main";
import Providers from "../Providers";
import useIsMobile from "@/hooks/useIsMobile";
import Navbar from "./Navbar";

interface Props {
    children: ReactNode,
}

const Layout: FC<Props> = ({ children }) => {

    const [isClient, setIsClient] = useState(false);
    const isMobile = useIsMobile();
    const [opened, { toggle }] = useDisclosure();

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        console.log(opened)
    }, [opened]);

    const contextValue = useCreateReducer<HomeInitialState>({
        initialState,
    });
    // const theme = createTheme({
    //     colors: {
    //     },
    // });

    return (
        isClient &&
        <HomeContext.Provider
            value={{
                ...contextValue,
            }}
        >
            <Providers>
                <MantineProvider
                    defaultColorScheme="dark"
                    theme={{
                        colors: {
                        },
                        components: {
                            Text: {
                                styles: () => ({
                                    root: {
                                        color: "white"
                                    }
                                })
                            },
                            NumberInput: {
                                styles: () => ({
                                    input: {
                                        backgroundColor: "transparent",
                                        borderColor: '#333741'
                                    }
                                })
                            },
                            Radio: {
                                styles: () => ({
                                    // radio: {
                                    //     backgroundColor: "transparent"
                                    // },
                                })
                            },
                            Menu: {
                                styles: () => ({
                                    dropdown: {
                                        backgroundColor: "#0c111d"
                                    },
                                    item: {
                                        padding: '10px 8px',
                                        fontSize: '16px',
                                        color: "white"
                                    }
                                })
                            }
                        }
                    }}
                >
                    <Notifications />
                    <AppShell
                        header={{ height: 129 }}
                        footer={{ height: 60 }}
                        navbar={{
                            width: 0,
                            breakpoint: 'sm',
                            collapsed: { mobile: !opened },
                        }}
                        padding="md"
                        withBorder={false}
                    >
                        <AppShell.Header
                        >
                            <MyHeader
                                openNavbar={opened}
                                toogleNavbar={toggle}
                            />
                        </AppShell.Header>
                        {
                            isMobile && <AppShell.Navbar p="md">
                                <Navbar />
                            </AppShell.Navbar>
                        }
                        <AppShell.Main
                            style={{ paddingLeft: '0px', paddingRight: '0px' }}
                        >
                            <Container>
                                {children}
                            </Container>
                        </AppShell.Main>
                        {/* <AppShell.Footer
                        >
                            <MyFooter />
                        </AppShell.Footer> */}
                    </AppShell>
                </MantineProvider>
            </Providers>
        </HomeContext.Provider>
    )
}

export default Layout;