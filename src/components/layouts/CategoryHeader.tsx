import HomeContext from "@/state/index.context";
import {MARKET_CATEGORIES } from "@/utils/consistant";
import { Flex, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconChevronUp, IconDroplet, IconFilter, IconHourglass, IconLighter, IconStar, IconTrendingUp } from "@tabler/icons-react";
import { useContext, useState } from "react";
import "react-multi-carousel/lib/styles.css";

export const FILTER_OPTIONS = [
    {
        name: "Sort by", childrens: [
            { name: "24hr Volume", icon: <IconTrendingUp color="#94969C" size={16} />, key: "24hr_volume" },
            { name: "Total Volume", icon: <IconLighter color="#94969C" size={16} />, key: "totla_volume" },
            { name: "Liquidity", icon: <IconDroplet color="#94969C" size={16} />, key: "liquidity" },
            { name: "Newest", icon: <IconStar color="#94969C" size={16} />, key: "newest" },
            { name: "End Soon", icon: <IconHourglass color="#94969C" size={16} />, key: "end_soon" },
            { name: "Competitive", icon: <IconHourglass color="#94969C" size={16} />, key: "competitive" }
        ]
    },
    {
        name: "Frequency", childrens: [

        ]
    }
];


// interface CategoryType {
//     name: string,
//     page: string
// }

function CategoryHeader() {
    // const [fitler, setFilter] = useState<string>("");
    const [openedFilter, setOpenedFilter] = useState<boolean>(false);

    const {
        state: { selectedCategory, selectedSubCategory },
        dispatch: homeDispatch
    } = useContext(HomeContext);
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };
    return <Group
        align='center'
        justify='start'
        mt={20}
        gap={17}
    >
        <Menu width={200} position="bottom-start"
            opened={openedFilter} onChange={setOpenedFilter}
        >
            <Menu.Target>
                <Flex
                    justify="space-between"
                    className="
                        border-1 border-blue-500 rounded-md
                        transition duration-300
                        hover:ring-2 hover:ring-blue-400 hover:ring-opacity-20
                        hover:outline-none    
                        cursor-pointer
                    "
                    pt={14}
                    pb={14}
                    pl={16}
                    pr={19}
                    align="center"
                    miw={200}
                >
                    <Flex
                        gap={8}
                        align="center"
                    >
                        <IconFilter size={18} color="#94969C" />
                        <Text size="16px">
                            Filters
                        </Text>
                    </Flex>
                    {
                        openedFilter ? <IconChevronUp color="#94969C" /> : <IconChevronDown color="#94969C" />
                    }
                </Flex>
            </Menu.Target>
            <Menu.Dropdown
            >
                {
                    FILTER_OPTIONS.map((item, index) =>
                        item.childrens.length === 0 ? <Menu.Item key={`filter-${index}`}>{item.name}</Menu.Item> :
                            <Menu.Sub key={`filter-${index}`}>
                                <Menu.Sub.Target>
                                    <Menu.Sub.Item>{item.name}</Menu.Sub.Item>
                                </Menu.Sub.Target>
                                <Menu.Sub.Dropdown>
                                    {
                                        item.childrens.map((sub_item, sub_index) =>
                                            <Menu.Item w={200} key={`{filter-${index}}-${sub_index}`}>
                                                <Group>
                                                    {sub_item.icon}
                                                    <Text size="16px">{sub_item.name}</Text>
                                                </Group>
                                            </Menu.Item>
                                        )
                                    }
                                </Menu.Sub.Dropdown>
                            </Menu.Sub>

                    )
                }
            </Menu.Dropdown>
        </Menu>
        {/* <Carousel 
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel> */}

        {
            MARKET_CATEGORIES.filter(item => item.key === selectedCategory)[0].childrens.map((item, index: number) =>
                <UnstyledButton
                    onClick={() => {
                        homeDispatch({
                            field: "selectedSubCategory",
                            value: item.key
                        })
                    }}
                    key={`header-category-${index}`}
                >
                    {
                        selectedSubCategory === item.key ?
                            <Text style={{color: "rgba(38, 133, 241, 1)"}} fw={500} size="14px">{item.name}</Text> :
                            <Text fw={500} size="14px" style={{ color: "#CECFD2" }}>{item.name}</Text>
                    }
                </UnstyledButton>
            )
        }
    </Group>
}

export default CategoryHeader;