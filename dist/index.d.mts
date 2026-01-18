import * as react_jsx_runtime from 'react/jsx-runtime';

interface ChatUIProps {
    endpoint: string;
    logoSrc?: string;
    soundSrc?: string;
    title?: string;
    welcomeMessage?: string;
    description?: string;
    footerText?: React.ReactNode;
    inputPlaceholder?: string;
}
declare function ChatUI({ endpoint, logoSrc, soundSrc, title, welcomeMessage, description, footerText, inputPlaceholder, }: ChatUIProps): react_jsx_runtime.JSX.Element;

export { ChatUI, type ChatUIProps };
