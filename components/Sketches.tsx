import React from 'react';

type SketchProps = {
    className?: string;
    style?: React.CSSProperties;
};

export const PillSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 100 44"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M 16 22 C 15 11, 28 6, 36 11 L 66 11 C 76 11, 84 14, 84 22 C 84 30, 76 34, 66 34 L 36 34 C 28 34, 17 33, 16 22 Z" />
        <line x1="50" y1="11" x2="50" y2="34" />
        <path d="M 22 19 l 5 0" opacity="0.55" />
        <path d="M 22 23 l 4 0" opacity="0.55" />
        <path d="M 22 27 l 5 0" opacity="0.55" />
    </svg>
);

export const ClockSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 64 64"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M 32 8 C 18 8, 7 19, 7 32 C 7 46, 18 57, 32 57 C 46 57, 57 46, 57 32 C 57 18, 46 8, 32 8 Z" />
        <line x1="32" y1="32" x2="32" y2="17" />
        <line x1="32" y1="32" x2="43" y2="36" />
        <line x1="32" y1="10" x2="32" y2="13" opacity="0.7" />
        <line x1="54" y1="32" x2="51" y2="32" opacity="0.7" />
        <line x1="32" y1="54" x2="32" y2="51" opacity="0.7" />
        <line x1="10" y1="32" x2="13" y2="32" opacity="0.7" />
    </svg>
);

export const PathSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 300 40"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
    >
        <path
            d="M 8 22 C 35 8, 55 34, 85 20 S 135 8, 165 22 S 215 34, 245 20 S 278 14, 292 22"
            strokeDasharray="2 5"
        />
    </svg>
);

export const PlantSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 64 86"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M 32 74 C 30 60, 34 44, 32 28" />
        <path d="M 32 48 C 22 44, 17 36, 19 28 C 27 30, 32 40, 32 48 Z" />
        <path d="M 32 38 C 42 32, 46 24, 43 16 C 35 19, 32 30, 32 38 Z" />
        <path d="M 14 74 C 24 76, 42 72, 52 75" opacity="0.7" />
    </svg>
);

export const HandSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 80 80"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M 22 68 C 18 58, 16 48, 18 36 C 19 30, 26 30, 26 36 L 26 42" />
        <path d="M 26 42 L 26 24 C 26 19, 33 19, 33 24 L 33 40" />
        <path d="M 33 40 L 33 20 C 33 15, 40 15, 40 20 L 40 40" />
        <path d="M 40 40 L 40 22 C 40 17, 47 17, 47 22 L 47 42" />
        <path d="M 47 42 L 47 32 C 47 27, 54 27, 54 32 L 54 48 C 54 60, 48 68, 40 72 C 34 74, 26 73, 22 68" />
    </svg>
);

export const WaveRule: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 220 16"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
    >
        <path d="M 4 8 Q 22 1, 40 8 T 76 8 T 112 8 T 148 8 T 184 8 T 216 8" />
    </svg>
);

export const ArrowSketch: React.FC<SketchProps> = ({ className, style }) => (
    <svg
        viewBox="0 0 60 24"
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M 4 12 C 18 10, 34 13, 52 12" />
        <path d="M 44 6 L 52 12 L 44 18" />
    </svg>
);
