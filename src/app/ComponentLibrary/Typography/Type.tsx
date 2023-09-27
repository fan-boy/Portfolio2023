import { ElementType } from "react";

export interface Variants {
    heroText: "heroText",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "body",
    bodySmall: "body-small",
    small: "small"
}

type Variant =
    | "heroText"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "emphasized-body"
    | "body"
    | "body-small"
    | "small";

interface Props {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
    "heroText": "h1",
    h1: "h2",
    h2: "h3",
    h3: "h4",
    h4: "h5",
    h5: "h6",
    "emphasized-body": "p",
    body: "p",
    "body-small": "p",
    small: "span"
};

const sizes: Record<Variant, string> = {
    "heroText": "font-serif text-6xl md:text-8xl  font-normal non-italic",
    h1: "font-serif md:text-6xl  text-4xl",
    h2: "font-serif md:text-5xl  text-3xl",
    h3: "font-serif md:text-4xl  text-2xl",
    h4: "font-serif md:text-3xl text-xl",
    h5: "md:text-2xl font-bold text-lg",
    "emphasized-body": "font-sans text-md md:text-2xl",
    body: "font-sans text-lg sm:text-md",
    "body-small": "font-sans text-md sm:text-sm",
    small: "font-sans text-base sm:text-xs"
};

export const Type = ({ variant, children, className, as }: Props) => {
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};