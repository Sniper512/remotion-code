import { useCurrentFrame, spring } from 'remotion';
import { FPS } from './constants';

interface WordProps {
    text: string;
    color: string;
}

interface CodeLineProps {
    content: WordProps[];
    delay: number;
}

export const CodeLine: React.FC<CodeLineProps> = ({ content, delay }) => {
    const frame = useCurrentFrame();
    const opacity = spring({
        frame: frame - delay,
        fps: FPS,
        from: 0,
        to: 1,
        config: {
            damping: 100,
            stiffness: 10,
            mass: 0.5,
        },
    });

    return (
        <div
            style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 40,
                marginBottom: 10,
                opacity,
                display: 'flex',
                flexWrap: 'wrap' as const,
                gap: '0.5rem',
            }}
        >
            {content.map((word, index) => (
                <span
                    key={index}
                    style={{
                        color: word.color,
                    }}
                >
                    {word.text}
                </span>
            ))}
        </div>
    );
};

