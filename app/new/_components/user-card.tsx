import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

interface UserCardProps {
  otherUser: Doc<"users">;
}

export const UserCard = ({ otherUser }: UserCardProps) => {
  const chat = useMutation(api.chats.getOrCreate);
  const router = useRouter();

  const handleClick = async () => {
    const chatId = await chat({ otherUserId: otherUser._id });
    router.push(`/${chatId}`);
  };

  return (
    <Card className="flex items-center justify-center bg-gray-100">
      <CardContent className="flex flex-col items-center justify-center p-4 gap-y-4 bg-gray-100">
        <div className="flex gap-5">
          <Avatar>
            <AvatarImage src={otherUser.imageUrl} />
            <AvatarFallback>{otherUser.fullName.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="items-center text-center flex font-semibold">
            {otherUser.fullName}
          </p>
        </div>
        <Button
          className="cursor-pointer"
          onClick={handleClick}
        >
          Send message
        </Button>
      </CardContent>
    </Card>
  );
};
