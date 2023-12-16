import OpenAI from "openai";
const openai = new OpenAI ({apiKey: "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", dangerouslyAllowBrowser: true});

export async function sendMsgToOpenAI(message) {
    const res = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.choices[0].text;
}