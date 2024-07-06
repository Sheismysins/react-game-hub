import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      <ListItem>
        <HStack>
          <Image boxSize={"32px"} borderRadius={8}></Image>
          <Button
            fontWeight={selectedGenre == null ? "bold" : ""}
            onClick={() => onSelectGenre(null)}
            fontSize="lg"
            variant={"link"}
          >
            All
          </Button>
        </HStack>
      </ListItem>
      {data.map((e) => (
        <ListItem key={e.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(e.image_background)}
            ></Image>
            <Button
              fontWeight={selectedGenre == e ? "bold" : ""}
              onClick={() => onSelectGenre(e)}
              key={e.id}
              fontSize="lg"
              variant={"link"}
            >
              {e.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
