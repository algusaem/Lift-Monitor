import { Card } from "@mantine/core";

const CardItem = ({ children, ...rest }) => (
  <Card padding="lg" radius="md" withBorder {...rest}>
    {children}
  </Card>
);

export default CardItem;
