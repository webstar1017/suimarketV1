"use client"

import CategoryHeader from "@/components/layouts/CategoryHeader";
import MarketCard from "@/components/MarketCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import { useMarkets } from "@/hooks/useMarketData copy";
import HomeContext from "@/state/index.context";
import MarketData from "@/types/MarketData";
import { Box, Grid, Text } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import 'react-multi-carousel/lib/styles.css';

function Markets() {
    const { markets, isLoading } = useMarkets();
    const [filteredMarkets, setFilteredMarkets] = useState<MarketData[]>([]);

    const {
        state: { selectedCategory }
    } = useContext(HomeContext);

    useEffect(() => {
        if (markets) {
            if (selectedCategory == "all") {
                setFilteredMarkets(markets);
            } else {
                setFilteredMarkets(
                    markets.filter((market) =>
                        market.category.toLowerCase() === selectedCategory.toLowerCase()
                    )
                );
            }
        }
    }, [selectedCategory, markets])

    return <Box>
        <CategoryHeader
        />
        <Box mt={40}>
            {
                isLoading ? <CardSkeleton /> :
                    filteredMarkets.length === 0 ?
                        <Text className="text-center">No markets available yet. Be the first to create one!</Text> :
                        <Grid>
                            {
                                filteredMarkets.map((item: MarketData, index: number) =>
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

export default Markets;