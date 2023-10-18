import { ElementType } from "react";

export interface FontTypes{
    serif:"font-serif",
    sans:"font-sans"
}

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

type FontType = 
    | "font-serif"
    | "font-sans";

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
    fontType?: FontType;
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
    small: "small"
};

const sizes: Record<Variant, string> = {
    "heroText": "font-serif text-6xl md:text-8xl  font-normal non-italic",
    h1: "font-serif md:text-6xl  text-4xl",
    h2: "font-serif md:text-5xl  text-3xl",
    h3: "font-serif md:text-4xl  text-2xl",
    h4: "font-serif md:text-3xl text-xl",
    h5: "font-serif md:text-2xl font-bold text-lg",
    "emphasized-body": "font-sans not-italic text-md md:text-2xl",
    body: "font-sans md:text-lg text-md",
    "body-small": "font-sans text-md sm:text-sm",
    small: "font-sans text-xxs sm:text-xs"
};

export const Type = ({ variant, children, className,fontType, as }: Props) => {
    const sizeClasses = sizes[variant];
    if(fontType && fontType.length > 0 ){
       sizeClasses.replace("font-sans", fontType);
       sizeClasses.replace("font-serif", fontType);
       
    }
    const Tag = as || tags[variant];

    return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};