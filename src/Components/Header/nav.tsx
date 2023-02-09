import React, { useState } from "react";
import { Switch, Group, useMantineTheme, MantineProvider } from "@mantine/core";
import { IconSun, IconMoonStars, IconBook2 } from "@tabler/icons-react";

interface Props {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<any>>;
}

export default function nav({ darkTheme, setDarkTheme }: Props) {
  const theme = useMantineTheme();
  return (
    <nav className="flex justify-between py-6">
      <IconBook2 className="scale-150" />
      <Switch
        size="md"
        color={theme.colorScheme === "dark" ? "gray" : "dark"}
        onLabel={<IconSun />}
        offLabel={<IconMoonStars />}
        className="p-"
        onClick={() => setDarkTheme(!darkTheme)}
      />
    </nav>
  );
}
