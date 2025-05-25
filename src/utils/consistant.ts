export const APP_TITLE:string = "";
export const APP_DESCRIPTION:string = "";
export const CATEGORIES = [
    {name: "All", page: "all"},
    {name: "New", page: "new"},
    {name: "Trending", page: "trending"},
    {name: "Business", page: "business"},
    {name: "Creator", page: "creator"},
    {name: "Sports", page: "sports"},
    {name: "Crypto", page: "crypto"},
    {name: "Politics", page: "politics"},
];

export const HEADER_PAGES = [
    {name: "Markets", page: "markets"},
    {name: "Portfolio", page: "portfolio"},
    {name: "Create Market", page: "create-market"},
];

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
  