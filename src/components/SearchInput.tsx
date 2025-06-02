import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchInput() {
    return (
        <TextInput 
            w="40%"
            leftSection={<IconSearch size={14}/>}
            placeholder="Search markets"
        />
    )
}

export default SearchInput;