import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I'm knowledgeable about many topics related to baseball analytics and am here to make your life easier as you explore the complex world of sabermetrics.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 3000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Sorry, I got a little long-winded there. Let me take a breather.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
