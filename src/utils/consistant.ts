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
    { name: "Trump", page: "crypto" },
];

export const HEADER_PAGES = [
    { name: "Markets", page: "markets" },
    // { name: "Portfolio", page: "portfolio" },
    // { name: "Create Market", page: "create-market" },
];

export const MARKET_CATEGORIES = [
    { name: "All", "key": "all" },
    { name: "Breaking News", "key": "breaking_news" },
    { name: "Geopolitics", "key": "geopolitics" },
    { name: "Trump Presidency", "key": "trump" },
    { name: "NBA Playoffs", "key": "nba" },
    { name: "Trade War", "key": "trade" },
    { name: "Pland", "key": "pland" },
    { name: "Presidency", "key": "presidency" },
    { name: "Syria", "key": "syria" },
    { name: "Ethereum", "key": "ethereum" },
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

