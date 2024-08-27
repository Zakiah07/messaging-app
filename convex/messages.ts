import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const send = mutation({
  args: { content: v.string(), authorId: v.id("users"), chatId: v.id("chats") },
  handler: async (ctx, args) => {
    const { chatId, content, authorId } = args;
    await ctx.db.insert("messages", { chatId, content, authorId });
  },
});
