"use client"

import useIsMobile from "@/hooks/useIsMobile";
import { Box, Button, Flex, NumberInput, Select, Text, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from '@mantine/dates';
import { TransactionBlock } from "@mysten/sui.js/transactions";
import dayjs from 'dayjs';
import { CATEGORIES, CONTRACT_CONFIG, MARKET_CATEGORIES } from "@/utils/consistant";
import { useState } from "react";
import { useSuiWallet } from "@/hooks/useSuiWallet";
import { notifications } from "@mantine/notifications";
import classes from './Demo.module.css';

function CreateMarket() {
    const isMobile = useIsMobile();
    const categories = CATEGORIES.filter((item) => item.page !== "all");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { connected, executeTransaction } = useSuiWallet();
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { question: '', description: '', category: categories[1].page, initial_liquidity: 0, end_date: dayjs().format('YYYY-MM-DD') },
        validate: {
            question: (value: string) => (value.length < 10 ? 'Question must have at least 10 letters' : null),
            description: (value: string) => (value.length < 10 ? 'Description must have at least 10 letters' : null),
            initial_liquidity: (value: number) => (value <= 0 ? 'Enter a valid value.' : null)
        },
    });

    async function handleSubmit() {
        const values = form.getValues();
        if (!connected) {
            notifications.show({
                title: 'Warning',
                message: 'Please connect your wallet first',
                color: "yellow",
                classNames: classes,
            });
            return;
        }
        try {
            setIsLoading(true);

            const txb = new TransactionBlock();
            const endTimestamp = new Date(values.end_date).getTime();
            const liquidityAmount = Math.floor(values.initial_liquidity * 1_000_000_000);

            if (liquidityAmount > 1_000_000_000_000) {
                throw new Error("Initial liquidity amount is too high");
            }
            const coin = txb.splitCoins(txb.gas, [txb.pure(liquidityAmount)]);
            console.log("Transaction parameters:", {
                packageId: CONTRACT_CONFIG.PACKAGE_ID,
                module: CONTRACT_CONFIG.MARKET_MODULE,
                function: CONTRACT_CONFIG.MARKET_CREATE_FUNCTION,
                question: values.question,
                description: values.description,
                category: values.category,
                endTimestamp,
                liquidityAmount,
            });
            txb.moveCall({
                target: `${CONTRACT_CONFIG.PACKAGE_ID}::${CONTRACT_CONFIG.MARKET_MODULE}::${CONTRACT_CONFIG.MARKET_CREATE_FUNCTION}`,
                arguments: [
                    txb.pure(values.question),
                    txb.pure(values.description),
                    txb.pure(values.category),
                    txb.pure(endTimestamp),
                    coin,
                    txb.object("0x6")
                ],
            });
            txb.setGasBudget(50000000);
            const result = await executeTransaction(txb);
            console.log("Full transaction result:", result);
        } catch (error) {
            console.error("Market creation failed:", error);
            if (error instanceof Error) {
                console.error("Error details:", {
                    message: error.message,
                    stack: error.stack,
                    name: error.name
                });
            }
            notifications.show({
                title: 'Error',
                message: `Failed to create market: ${error instanceof Error ? error.message : "Unknown error"}`,
                color: "yellow",
                classNames: classes,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return <Box pt={30} style={{ width: isMobile ? "100%" : "750px", margin: "auto" }}>
        <Text size={isMobile ? "25px" : "35px"} fw={500} className="text-center">
            Create a Market
        </Text>
        <form onSubmit={form.onSubmit(() => {
            handleSubmit();
        })}>
            <Flex
                gap="20px"
                direction="column"
                mt={30}
            >
                <TextInput
                    label="Question"
                    placeholder="Will BTC exceed $100k by end of 2025?"
                    key={form.key('question')}
                    {...form.getInputProps('question')}
                />
                <Textarea
                    label="Description"
                    placeholder="Provide detailed resolution criteria..."
                    key={form.key('description')}
                    {...form.getInputProps('description')}
                />
                <DateInput
                    clearable
                    label="End Date"
                    placeholder="Enter Date"
                    w={'100%'}
                    key={form.key('end_date')}
                    {...form.getInputProps('end_date')}
                />

                <Box
                >
                    <Text size="14px" style={{ color: "" }}>
                        Categories
                    </Text>
                    <Flex
                        mt={10}
                    >
                        {/* <Select
                            data={
                                .map((item) => {
                                    return item.page
                                })
                            }
                            searchable
                            key={form.key('category')}
                            {...form.getInputProps('category')}
                        /> */}
                        <Select
                            data={
                                MARKET_CATEGORIES[0].childrens.map((item) => {
                                    return item.key
                                })
                            }
                            searchable
                            key={form.key('category')}
                            {...form.getInputProps('category')}
                        />
                    </Flex>
                </Box>
                <NumberInput
                    label="Initial Liquidity (SUI)"
                    placeholder="0.00"
                    prefix="SUI "
                    mb="md"
                    key={form.key('initial_liquidity')}
                    {...form.getInputProps('initial_liquidity')}
                />
                <Button color="rgba(38, 133, 241, 1)" size="md" type="submit" loading={isLoading} disabled={isLoading}>
                    Create Market
                </Button>
            </Flex>
        </form>
    </Box>
}

export default CreateMarket;