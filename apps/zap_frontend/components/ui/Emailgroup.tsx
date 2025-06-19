"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function EmailGroup() {
  const [currentInput, setCurrentInput] = useState("");
  const [emailBuffer, setEmailBuffer] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[][]>([]);

  const handleAddEmailToBuffer = () => {
    const trimmed = currentInput.trim();
    if (validateEmail(trimmed) && !emailBuffer.includes(trimmed)) {
      setEmailBuffer([...emailBuffer, trimmed]);
      setCurrentInput("");
      handleAddGroup()
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddEmailToBuffer();
    }
  };

  const handleAddGroup = () => {
    if (emailBuffer.length === 0) return;
    setGroups([...groups, emailBuffer]);
    setEmailBuffer([]);
    setCurrentInput("");
  };

  const handleRemoveEmailFromGroup = (groupIndex: number, emailIndex: number) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex].splice(emailIndex, 1);
    if (updatedGroups[groupIndex].length === 0) {
      updatedGroups.splice(groupIndex, 1); // Remove entire group if empty
    }
    setGroups(updatedGroups);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="space-y-4">
      {/* All email groups displayed as clickable items */}
      {groups.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {groups.map((group, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <div className="cursor-pointer bg-muted px-4 py-2 rounded-md text-sm hover:bg-muted/70 transition">
                  Email Group {index + 1} ({group.length})
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  {group.map((email, emailIndex) => (
                    <div
                      key={emailIndex}
                      className="flex items-center justify-between bg-muted/50 px-2 py-1 rounded"
                    >
                      <span className="text-sm">{email}</span>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveEmailFromGroup(index, emailIndex)}
                      >
                        <XIcon className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      )}

      {/* Input + Buffer display */}
      {emailBuffer.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {emailBuffer.map((email, index) => (
            <span
              key={index}
              className="bg-muted text-sm px-3 py-1 rounded-full flex items-center gap-2"
            >
              {email}
              <button
                onClick={() =>
                  setEmailBuffer(emailBuffer.filter((_, i) => i !== index))
                }
              >
                <XIcon className="h-3 w-3 text-muted-foreground hover:text-red-500" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter email and press Enter"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
       
      </div>
    </div>
  );
}
