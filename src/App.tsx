import React, { useState } from "react";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import Nav from "./Components/Header/nav";
import SearchBar from "./Components/SearchBar/SearchBar";
import Result from "./Components/Result/Result";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [Value, setValue] = useState("");

  const theme = useMantineTheme();

  console.log(Value);

  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: darkTheme ? "dark" : "light" }}
    >
      <div className="w-2/4 p-8 m-auto">
        <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <SearchBar Value={Value} setValue={setValue} />
        <Result Value={Value} setValue={setValue} />
      </div>
    </MantineProvider>
  );
}
