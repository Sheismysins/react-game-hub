import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortBy: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortBy = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "released", label: "Released" },
    { value: "-metacritic", label: "Score" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: " + sortBy.find((e) => e.value == selectedSortOrder)?.label}
      </MenuButton>
      <MenuList>
        {sortBy.map((e) => (
          <MenuItem onClick={() => onSelectSortOrder(e.value)} key={e.value}>
            {e.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
