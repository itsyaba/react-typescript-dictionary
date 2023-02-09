import React, { useState } from "react";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface Props {
  Value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

export default function SearchBar({ Value, setValue }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = e.target.value;
      setValue(res);
  };

  return (
    <div>
      <Input
        size="xl"
        value={Value}
        onChange={(e) => handleInputChange(e)}
        rightSection={<IconSearch />}
        autoFocus
        placeholder="Start Typing..."
        variant="filled"
      />
    </div>
  );
}
