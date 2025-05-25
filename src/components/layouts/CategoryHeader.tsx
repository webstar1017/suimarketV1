import HomeContext from "@/state/index.context";
import { CATEGORIES } from "@/utils/consistant";
import { Group, Text, UnstyledButton } from "@mantine/core";
import { useContext } from "react";

interface CategoryType {
    name: string,
    page: string
}

function CategoryHeader() {
    
    const {
        state: { selectedCategory },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    return <Group
        align='center'
        justify='start'
        mt={20}
        gap={17}
    >
        {
            CATEGORIES.map((item: CategoryType, index: number) =>
                <UnstyledButton
                    onClick={() => 
                        homeDispatch({
                            "field": "selectedCategory",
                            "value": item.page
                        })
                    }
                    key={`header-category-${index}`}
                >
                    {
                        selectedCategory == item.page ? 
                        <Text color="rgba(38, 133, 241, 1)" fw={500}>{ item.name }</Text> :
                        <Text fw={500}>{ item.name }</Text>
                    }
                </UnstyledButton>
            )
        }
    </Group>
}

export default CategoryHeader;