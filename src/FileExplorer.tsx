import { useCurrentFrame, spring } from 'remotion';
import { FPS } from './constants';

interface FileProps {
    name: string;
    isOpen?: boolean;
    indent?: number;
    isFolder?: boolean;
    isExpanded?: boolean;
}

const File: React.FC<FileProps> = ({ name, isOpen, indent = 0, isFolder, isExpanded }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: `${indent * 20}px`,
                backgroundColor: isOpen ? '#37373D' : 'transparent',
                height: 24,
                color: '#D4D4D4',
                fontSize: 14,
                fontFamily: 'JetBrains Mono, monospace',
            }}
        >
            {isFolder && (
                <span style={{ marginRight: 4, color: '#D4D4D4' }}>
                    {isExpanded ? '▼' : '▶'}
                </span>
            )}
            <span>{name}</span>
        </div>
    );
};

interface FileExplorerProps {
    currentFile: string;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ currentFile }) => {
    const frame = useCurrentFrame();
    const opacity = spring({
        frame,
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
                width: 250,
                backgroundColor: '#252526',
                height: '100%',
                opacity,
            }}
        >
            <File isFolder isExpanded name="app" />
            <File isFolder isExpanded name="_lib" indent={1} />
            <File name="definitions.ts" indent={2} />
            <File name="session.ts" indent={2} isOpen={currentFile === 'session.ts'} />
            <File isFolder isExpanded name="signup" indent={1} />
            <File name="actions.ts" indent={2} />
            <File name="form.tsx" indent={2} />
        </div>
    );
};
