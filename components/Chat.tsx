"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Card,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
import { ScrollArea } from "./ui/scroll-area";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, error } = useChat();
  return (
    <div className="flex bg-[#121212] min-h-screen items-center justify-center">
      <Card className="w-[440px] bg-slate-50">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle className="underline decoration-[#ba110c] underline-offset-1">
            Chatbot AI
          </CardTitle>
          <CardDescription>Ask any question you want</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[640px] w-full  pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-3">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>GB</AvatarFallback>
                    <AvatarImage src="https://github.com/Gwhiite.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="./ollama.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "User" : "AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="How can I help you ?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Chat;
