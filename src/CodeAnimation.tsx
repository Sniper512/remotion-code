import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { CodeLine } from './CodeLine';

export const CodeAnimation: React.FC = () => {
    const frame = useCurrentFrame();

    const opacity = interpolate(frame, [0, 30], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'black',
                padding: '100px 0',
            }}
        >
            <div style={{
                display: 'flex',
                gap: 50,
                alignItems: 'flex-start',
            }}>
                <div style={{
                    backgroundColor: '#595f63',
                    width:"30%",
                    height:"100%"
                }}>
                    <h1 style={{
                        color: "white",
                        margin: 0,
                        fontSize: 48,
                        fontFamily: 'JetBrains Mono, monospace',
                    }}>
                        Hello world
                    </h1>
                </div>
                <div style={{ opacity }}>
                    <CodeLine
                        content={[
                            { text: 'function', color: '#569CD6' },
                            { text: ' ', color: '#D4D4D4' },
                            { text: 'helloWorld', color: '#4EC9B0' },
                            { text: '()', color: '#D4D4D4' },
                            { text: ' {', color: '#D4D4D4' },
                        ]}
                        delay={0}
                    />
                    <CodeLine
                        content={[
                            { text: '  ', color: '#D4D4D4' },
                            { text: 'console', color: '#4EC9B0' },
                            { text: '.', color: '#D4D4D4' },
                            { text: 'log', color: '#DCDCAA' },
                            { text: '(', color: '#D4D4D4' },
                            { text: "'Hello, Remotion!'", color: '#CE9178' },
                            { text: ');', color: '#D4D4D4' },
                        ]}
                        delay={30}
                    />
                    <CodeLine
                        content={[
                            { text: '}', color: '#D4D4D4' },
                        ]}
                        delay={60}
                    />
                </div>
            </div>
        </AbsoluteFill>
    );
};

