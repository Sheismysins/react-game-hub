import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 75
      ? "green"
      : score > 60
      ? "yellow"
      : score > 45
      ? "orange"
      : "red";

  return (
    <Badge backgroundColor={color} borderRadius={6} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
