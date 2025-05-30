export const APP_TITLE: string = "";
export const APP_DESCRIPTION: string = "";
export const CATEGORIES = [
    { name: "All", page: "all" },
    { name: "New", page: "new" },
    { name: "Trending", page: "trending" },
    { name: "Business", page: "business" },
    { name: "Creator", page: "creator" },
    { name: "Sports", page: "sports" },
    { name: "WordEconomy", page: "crypto" },
    { name: "Trump", page: "trump" },
];

export const HEADER_PAGES = [
    // { name: "Markets", page: "markets" },
    // { name: "Portfolio", page: "portfolio" },
    // { name: "Create Market", page: "create-market" },
];

export const MARKET_CATEGORIES = [
    {
        name: "Trending", key: "trending", childrens: [
            { name: "All", key: "all" },
            { name: "Breaking News", key: "trending_breaking_news" },
            { name: "Trade War", key: "trending_trade_war" },
            { name: "Geopolitics", key: "trending_geopolitics" },
            { name: "Trump Presidency", key: "trending_trump_presidency" },
        ]
    },
    {
        name: "Crypto", key: "new", childrens: [
            { name: "All", key: "all" },
            { name: "Featured", key: "new_featured" },
            { name: "Hit Price", key: "new_hit_price" },
            { name: "MicroStrategy", key: "new_microstratgy" },
            { name: "Stablecoins", key: "new_stablecoins" },
        ]
    }
]

export const CONTRACT_CONFIG = {
    PACKAGE_ID: "0x3343293d4e3bb3345ed4b1ebf76ae70e2c7332ca7ba17a4158097cf2862a86cc",
    MARKET_MODULE: "sui_market",
    MARKET_CREATE_FUNCTION: "create_market_with_pool",
    MARKET_BUY_FUNCTION: "buy_position",
    MARKET_SELL_FUNCTION: "sell_position",
    MARKET_RESOLVE_FUNCTION: "resolve_market",

    // Add any other contract-related constants here
    SUI_TYPE: "0x2::sui::SUI",

    // Network-specific constants
    TESTNET_CLOCK_ID: "0x6",
};

