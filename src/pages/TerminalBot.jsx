import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const SONAR_API = "https://api.perplexity.ai/chat/completions";
const SONAR_KEY = import.meta.env.VITE_SONAR_API_KEY;

const TerminalBot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleKeyDown = async (e) => {
        if (e.key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        } else if (e.key.length === 1) {
            setInput((prev) => prev + e.key);
        } else if (e.key === 'Enter') {
            const userPrompt = input.trim();
            if (userPrompt) {
                setMessages(prev => [...prev, { role: 'user', content: userPrompt }]);
                setInput('');
                await getBotResponse(userPrompt);
            }
        }
    };

    const getBotResponse = async (prompt) => {
        setLoading(true);
        const payload = {
            model: "sonar-pro",
            response_format: { type: "text" },
            messages: [
                { role: "system", content: "You are a helpful terminal bot assistant. You have to answer all the queries in very short manner, very short, coincised text only." },
                ...messages,
                { role: "user", content: prompt }
            ]
        };

        try {
            const res = await fetch(SONAR_API, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${SONAR_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            // const reply = data.choices?.[0]?.message?.content || "⚠️ No response.";
const reply = data.choices?.[0]?.message?.content.replace(/\[\d+\]/g, '').trim() || "⚠️ No response.";
            setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ AI Error occurred.' }]);
            
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [input]);

    return (
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center font-mono text-[#ebdbb2]">
            <div className="w-5/6 h-[30px] p-4 bg-neutral-800 border-1 border-neutral-600 border-b-0 rounded-t-md flex justify-between items-center">
                <div className="left flex justify-center items-center gap-2">
                    <div>1</div>
                    <div>Terminal BoT</div>
                </div>
                <div className="right flex justify-center items-center gap-2">
                    <div className="w-[15px] h-[15px] rounded-full bg-red-400"></div>
                    <div className="w-[15px] h-[15px] rounded-full bg-orange-400"></div>
                    <div className="w-[15px] h-[15px] rounded-full bg-green-400"></div>
                </div>
            </div>
            <div className="w-5/6 h-5/6 bg-black border-1 border-neutral-600 rounded-b-md overflow-y-auto p-2">
                <div className="w-full text-3xl text-center"> TERMINAL BOT</div>

                {messages.map((msg, index) => (
                    <div key={index} className='ROW flex gap-2 items-start mt-2'>
                        <div className={`${msg.role === 'user' ? 'text-red-500' : 'text-green-500'}`}>
                            C:\Users\{msg.role === 'user' ? 'guest' : 'AI'}{">"}
                        </div>
                        <div className="AI_RESPONSE">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className='ROW flex gap-2 items-center mt-2'>
                        <div className="text-green-500">C:\Users\AI{">"}</div>
                        <div className="AI_RESPONSE animate-pulse text-neutral-400">Thinking...</div>
                    </div>
                )}

                <div className='ROW flex gap-2 items-center mt-2'>
                    <div className="USER text-red-500">C:\Users\guest{">"}</div>
                    <div className="flex items-center gap-1">
                        <span>$</span>
                        <span>{input}</span>
                        <span className="customAnim">|</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalBot;
