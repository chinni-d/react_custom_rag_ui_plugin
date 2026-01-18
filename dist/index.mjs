// src/ChatUI.tsx
import { useState as useState3, useEffect as useEffect2 } from "react";
import { Send, Sparkles, Loader2, User, RefreshCcw, X as X2 } from "lucide-react";

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx2 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/message-loading.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function MessageLoading() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-foreground",
      children: [
        /* @__PURE__ */ jsx3("circle", { cx: "4", cy: "12", r: "2", fill: "currentColor", children: /* @__PURE__ */ jsx3(
          "animate",
          {
            id: "spinner_qFRN",
            begin: "0;spinner_OcgL.end+0.25s",
            attributeName: "cy",
            calcMode: "spline",
            dur: "0.6s",
            values: "12;6;12",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
          }
        ) }),
        /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "2", fill: "currentColor", children: /* @__PURE__ */ jsx3(
          "animate",
          {
            begin: "spinner_qFRN.begin+0.1s",
            attributeName: "cy",
            calcMode: "spline",
            dur: "0.6s",
            values: "12;6;12",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
          }
        ) }),
        /* @__PURE__ */ jsx3("circle", { cx: "20", cy: "12", r: "2", fill: "currentColor", children: /* @__PURE__ */ jsx3(
          "animate",
          {
            id: "spinner_OcgL",
            begin: "spinner_qFRN.begin+0.2s",
            attributeName: "cy",
            calcMode: "spline",
            dur: "0.6s",
            values: "12;6;12",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
          }
        ) })
      ]
    }
  );
}

// src/components/ui/chat-bubble.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function ChatBubble({
  variant = "received",
  layout = "default",
  className,
  children
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: cn(
        "flex items-start gap-2 mb-4",
        variant === "sent" && "flex-row-reverse",
        className
      ),
      children
    }
  );
}
function ChatBubbleMessage({
  variant = "received",
  isLoading,
  className,
  children
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: cn(
        "rounded-[1.25rem] px-4 py-2 text-sm max-w-[85%]",
        variant === "sent" ? "bg-primary text-primary-foreground" : "bg-muted",
        className
      ),
      children: isLoading ? /* @__PURE__ */ jsx4("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx4(MessageLoading, {}) }) : children
    }
  );
}
function ChatBubbleAvatar({
  src,
  fallback = "AI",
  className
}) {
  return /* @__PURE__ */ jsxs2(Avatar, { className: cn("h-8 w-8", className), children: [
    src && /* @__PURE__ */ jsx4(AvatarImage, { src }),
    /* @__PURE__ */ jsx4(AvatarFallback, { children: fallback })
  ] });
}

// src/components/ui/chat-input.tsx
import * as React from "react";

// src/components/ui/textarea.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/chat-input.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var ChatInput = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    Textarea,
    {
      autoComplete: "off",
      ref,
      name: "message",
      className: cn(
        "max-h-12 px-4 py-3 bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md flex items-center h-16 resize-none",
        className
      ),
      ...props
    }
  )
);
ChatInput.displayName = "ChatInput";

// src/components/ui/expandable-chat.tsx
import { useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var chatConfig = {
  dimensions: {
    sm: "sm:max-w-sm sm:max-h-[500px]",
    md: "sm:max-w-md sm:max-h-[600px]",
    lg: "sm:max-w-lg sm:max-h-[700px]",
    xl: "sm:max-w-xl sm:max-h-[800px]",
    full: "sm:w-full sm:h-full"
  },
  positions: {
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5"
  },
  chatPositions: {
    "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
    "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0"
  },
  states: {
    open: "pointer-events-auto opacity-100 visible scale-100 translate-y-0",
    closed: "pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5"
  }
};
var ExpandableChat = ({
  className,
  position = "bottom-right",
  size = "md",
  icon,
  children,
  isOpen: controlledIsOpen,
  onOpenChange,
  ...props
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== void 0;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  const chatRef = useRef(null);
  const toggleChat = () => {
    const newState = !isOpen;
    if (isControlled && onOpenChange) {
      onOpenChange(newState);
    } else {
      setInternalIsOpen(newState);
    }
  };
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn(`fixed ${chatConfig.positions[position]} z-50`, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs3(
          "div",
          {
            ref: chatRef,
            className: cn(
              "flex flex-col bg-background dark:bg-zinc-900 sm:rounded-lg shadow-md overflow-hidden transition-all duration-250 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh] fixed inset-0 w-full h-full sm:inset-auto",
              chatConfig.chatPositions[position],
              chatConfig.dimensions[size],
              isOpen ? chatConfig.states.open : chatConfig.states.closed,
              className
            ),
            children: [
              children,
              /* @__PURE__ */ jsx7(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "absolute top-2 right-2 sm:hidden",
                  onClick: toggleChat,
                  children: /* @__PURE__ */ jsx7(X, { className: "h-4 w-4" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx7(
          ExpandableChatToggle,
          {
            icon,
            isOpen,
            toggleChat
          }
        )
      ]
    }
  );
};
ExpandableChat.displayName = "ExpandableChat";
var ExpandableChatHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx7(
  "div",
  {
    className: cn("flex items-center justify-between p-4 border-b", className),
    ...props
  }
);
ExpandableChatHeader.displayName = "ExpandableChatHeader";
var ExpandableChatBody = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx7("div", { className: cn("flex-grow overflow-y-auto", className), ...props });
ExpandableChatBody.displayName = "ExpandableChatBody";
var ExpandableChatFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx7("div", { className: cn("border-t p-4", className), ...props });
ExpandableChatFooter.displayName = "ExpandableChatFooter";
var ExpandableChatToggle = ({
  className,
  icon,
  isOpen,
  toggleChat,
  ...props
}) => /* @__PURE__ */ jsx7(
  Button,
  {
    variant: "default",
    onClick: toggleChat,
    className: cn(
      "w-16 h-16 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-black/30 transition-all duration-300 p-0 ring-0",
      !isOpen ? "!bg-transparent !border-0" : "",
      className
    ),
    ...props,
    children: isOpen ? /* @__PURE__ */ jsx7(X, { className: "h-6 w-6" }) : icon || /* @__PURE__ */ jsx7(MessageCircle, { className: "h-6 w-6" })
  }
);
ExpandableChatToggle.displayName = "ExpandableChatToggle";

// src/components/ui/chat-message-list.tsx
import * as React3 from "react";
import { ArrowDown } from "lucide-react";

// src/components/hooks/use-auto-scroll.ts
import { useCallback, useEffect, useRef as useRef2, useState as useState2 } from "react";
function useAutoScroll(options = {}) {
  const { offset = 20, smooth = false, content } = options;
  const scrollRef = useRef2(null);
  const lastContentHeight = useRef2(0);
  const userHasScrolled = useRef2(false);
  const [scrollState, setScrollState] = useState2({
    isAtBottom: true,
    autoScrollEnabled: true
  });
  const checkIsAtBottom = useCallback(
    (element) => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const distanceToBottom = Math.abs(
        scrollHeight - scrollTop - clientHeight
      );
      return distanceToBottom <= offset;
    },
    [offset]
  );
  const scrollToBottom = useCallback(
    (instant) => {
      if (!scrollRef.current) return;
      const targetScrollTop = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      if (instant) {
        scrollRef.current.scrollTop = targetScrollTop;
      } else {
        scrollRef.current.scrollTo({
          top: targetScrollTop,
          behavior: smooth ? "smooth" : "auto"
        });
      }
      setScrollState({
        isAtBottom: true,
        autoScrollEnabled: true
      });
      userHasScrolled.current = false;
    },
    [smooth]
  );
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const atBottom = checkIsAtBottom(scrollRef.current);
    setScrollState((prev) => ({
      isAtBottom: atBottom,
      // Re-enable auto-scroll if at the bottom
      autoScrollEnabled: atBottom ? true : prev.autoScrollEnabled
    }));
  }, [checkIsAtBottom]);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => element.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    const currentHeight = scrollElement.scrollHeight;
    const hasNewContent = currentHeight !== lastContentHeight.current;
    if (hasNewContent) {
      if (scrollState.autoScrollEnabled) {
        requestAnimationFrame(() => {
          scrollToBottom(lastContentHeight.current === 0);
        });
      }
      lastContentHeight.current = currentHeight;
    }
  }, [content, scrollState.autoScrollEnabled, scrollToBottom]);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const resizeObserver = new ResizeObserver(() => {
      if (scrollState.autoScrollEnabled) {
        scrollToBottom(true);
      }
    });
    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, [scrollState.autoScrollEnabled, scrollToBottom]);
  const disableAutoScroll = useCallback(() => {
    const atBottom = scrollRef.current ? checkIsAtBottom(scrollRef.current) : false;
    if (!atBottom) {
      userHasScrolled.current = true;
      setScrollState((prev) => ({
        ...prev,
        autoScrollEnabled: false
      }));
    }
  }, [checkIsAtBottom]);
  return {
    scrollRef,
    isAtBottom: scrollState.isAtBottom,
    autoScrollEnabled: scrollState.autoScrollEnabled,
    scrollToBottom: () => scrollToBottom(false),
    disableAutoScroll
  };
}

// src/components/ui/chat-message-list.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var ChatMessageList = React3.forwardRef(
  ({ className, children, smooth = false, ...props }, _ref) => {
    const {
      scrollRef,
      isAtBottom,
      autoScrollEnabled,
      scrollToBottom,
      disableAutoScroll
    } = useAutoScroll({
      smooth,
      content: children
    });
    return /* @__PURE__ */ jsxs4("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsx8(
        "div",
        {
          className: `flex flex-col w-full h-full p-4 overflow-y-auto ${className}`,
          ref: scrollRef,
          onWheel: disableAutoScroll,
          onTouchMove: disableAutoScroll,
          ...props,
          children: /* @__PURE__ */ jsx8("div", { className: "flex flex-col gap-6", children })
        }
      ),
      !isAtBottom && /* @__PURE__ */ jsx8(
        Button,
        {
          onClick: () => {
            scrollToBottom();
          },
          size: "icon",
          variant: "outline",
          className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 inline-flex rounded-full shadow-md",
          "aria-label": "Scroll to bottom",
          children: /* @__PURE__ */ jsx8(ArrowDown, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
ChatMessageList.displayName = "ChatMessageList";

// src/components/ui/shining-text.tsx
import { motion } from "framer-motion";
import { jsx as jsx9 } from "react/jsx-runtime";
function ShiningText({ text }) {
  return /* @__PURE__ */ jsx9(
    motion.div,
    {
      className: "bg-[linear-gradient(110deg,#9ca3af,35%,#fff,50%,#9ca3af,75%,#9ca3af)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent m-0 inline-block",
      initial: { backgroundPosition: "200% 0" },
      animate: { backgroundPosition: "-200% 0" },
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear"
      },
      children: text
    }
  );
}

// src/components/ui/moving-border.tsx
import {
  motion as motion2,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion";
import { useRef as useRef3 } from "react";
import { Fragment, jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function Button2({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return /* @__PURE__ */ jsxs5(
    Component,
    {
      className: cn(
        "bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",
        containerClassName
      ),
      style: {
        borderRadius
      },
      ...otherProps,
      children: [
        /* @__PURE__ */ jsx10(
          "div",
          {
            className: "absolute inset-0",
            style: { borderRadius: `calc(${borderRadius} * 0.96)` },
            children: /* @__PURE__ */ jsx10(MovingBorder, { duration, rx: "30%", ry: "30%", children: /* @__PURE__ */ jsx10(
              "div",
              {
                className: cn(
                  "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]",
                  borderClassName
                )
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx10(
          "div",
          {
            className: cn(
              "relative bg-background border border-border backdrop-blur-xl text-foreground flex items-center justify-center w-full h-full text-sm antialiased",
              className
            ),
            style: {
              borderRadius: `calc(${borderRadius} * 0.96)`
            },
            children
          }
        )
      ]
    }
  );
}
var MovingBorder = ({
  children,
  duration = 2e3,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef3(null);
  const progress = useMotionValue(0);
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set(time * pxPerMillisecond % length);
    }
  });
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
  return /* @__PURE__ */ jsxs5(Fragment, { children: [
    /* @__PURE__ */ jsx10(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: "absolute h-full w-full",
        width: "100%",
        height: "100%",
        ...otherProps,
        children: /* @__PURE__ */ jsx10(
          "rect",
          {
            fill: "none",
            width: "100%",
            height: "100%",
            rx,
            ry,
            ref: pathRef
          }
        )
      }
    ),
    /* @__PURE__ */ jsx10(
      motion2.div,
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform
        },
        children
      }
    )
  ] });
};

// src/ChatUI.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// src/assets.ts
var DEFAULT_LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QDWRXhpZgAASUkqAAgAAAADAA4BAgCMAAAAMgAAABoBBQABAAAAvgAAABsBBQABAAAAxgAAAAAAAABDdXRlIHNtaWxpbmcgcm9ib3QsIGNoYXQgYm90IHNheSBoaS5WZWN0b3IgbW9kZXJuIGZsYXQgY2FydG9vbiBjaGFyYWN0ZXIgaWxsdXN0cmF0aW9uLiBWb2ljZSBzdXBwb3J0IHNlcnZpY2UgYm90LiBWZWN0b3Igc3RvY2sgaWxsdXN0cmF0aW9uLiwBAAABAAAALAEAAAEAAAD/4QYPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEwNzMwNzYzMTIiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgcGx1czpEYXRhTWluaW5nPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3ZvY2FiL0RNSS1QUk9ISUJJVEVELUVYQ0VQVFNFQVJDSEVOR0lORUlOREVYSU5HIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+T2xla3NhbmRyIEhydXRzPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DdXRlIHNtaWxpbmcgcm9ib3QsIGNoYXQgYm90IHNheSBoaS5WZWN0b3IgbW9kZXJuIGZsYXQgY2FydG9vbiBjaGFyYWN0ZXIgaWxsdXN0cmF0aW9uLiBWb2ljZSBzdXBwb3J0IHNlcnZpY2UgYm90LiBWZWN0b3Igc3RvY2sgaWxsdXN0cmF0aW9uLjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEwNzMwNzYzMTItP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAN5QaG90b3No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";
var DEFAULT_SOUND = "data:audio/mpeg;base64,//vQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVV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";

// src/ChatUI.tsx
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
function ChatUI({
  endpoint,
  logoSrc = DEFAULT_LOGO,
  soundSrc = DEFAULT_SOUND,
  title = "AI Assistant",
  welcomeMessage = "Welcome to AI Assistant! \u{1F44B}",
  description = "I'm here to help you navigate our services. Feel free to ask me anything!",
  footerText = /* @__PURE__ */ jsxs6(Fragment2, { children: [
    "Developed by ",
    /* @__PURE__ */ jsx11("a", { href: "https://www.dmanikanta.me", target: "_blank", rel: "noopener noreferrer", className: "hover:underline hover:text-primary transition-colors", children: "Manikanta Darapureddy" }),
    " \u{1F49B}"
  ] }),
  inputPlaceholder = "Message"
}) {
  const [messages, setMessages] = useState3([]);
  const [input, setInput] = useState3("");
  const [isLoading, setIsLoading] = useState3(false);
  const [isInitialized, setIsInitialized] = useState3(false);
  useEffect2(() => {
    const savedMessages = localStorage.getItem("chat-history");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
    setIsInitialized(true);
  }, []);
  const [isChatOpen, setIsChatOpen] = useState3(false);
  const [showNotification, setShowNotification] = useState3(false);
  const [isDismissed, setIsDismissed] = useState3(false);
  useEffect2(() => {
    const timer = setTimeout(() => {
      if (!isDismissed && !isChatOpen) {
        setShowNotification(true);
        const audio = new Audio(soundSrc);
        audio.play().catch((error) => {
          if (error.name !== "NotAllowedError") {
            console.error("Error playing notification sound:", error);
          }
        });
      }
    }, 2e3);
    return () => clearTimeout(timer);
  }, [isChatOpen, isDismissed, soundSrc]);
  useEffect2(() => {
    if (isChatOpen) {
      setShowNotification(false);
      setIsDismissed(true);
    }
  }, [isChatOpen]);
  const handleDismissNotification = () => {
    setShowNotification(false);
    setIsDismissed(true);
  };
  useEffect2(() => {
    if (isInitialized) {
      localStorage.setItem("chat-history", JSON.stringify(messages));
    }
  }, [messages, isInitialized]);
  const handleReset = () => {
    setMessages([]);
    localStorage.removeItem("chat-history");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userQuestion = input.trim();
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: userQuestion
    };
    const history = messages.map((msg) => ({
      role: msg.role,
      content: msg.content
    }));
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (!endpoint) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Contact admin for api endpoint or check you have added correct endpoint or not contact developer at darapureddymanikanta8@gmail.com"
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: userQuestion,
          history,
          stream: true
        })
      });
      if (!response.body) {
        throw new Error("ReadableStream not supported.");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let aiResponse = "";
      let isFirstChunk = true;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        aiResponse += chunk;
        if (isFirstChunk) {
          isFirstChunk = false;
          setIsLoading(false);
          const botMessageId = (Date.now() + 1).toString();
          const botMessage = {
            id: botMessageId,
            role: "assistant",
            content: aiResponse
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          setMessages((prev) => {
            const updated = [...prev];
            const lastMsgIndex = updated.length - 1;
            if (lastMsgIndex >= 0 && updated[lastMsgIndex].role === "assistant") {
              updated[lastMsgIndex] = {
                ...updated[lastMsgIndex],
                content: aiResponse
              };
            }
            return updated;
          });
        }
      }
      const audio = new Audio(soundSrc);
      audio.play().catch((e2) => console.error("Error playing notification sound:", e2));
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: "I apologize, but I encountered an error. Please try again later."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx11("div", { id: "chat-ui-scope", children: /* @__PURE__ */ jsxs6(Fragment2, { children: [
    showNotification && !isChatOpen && /* @__PURE__ */ jsx11("div", { className: "fixed bottom-24 right-5 z-[9998] animate-in fade-in slide-in-from-bottom-5 duration-300", children: /* @__PURE__ */ jsxs6("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs6(
        Button2,
        {
          as: "div",
          borderRadius: "0.75rem",
          duration: 3e3,
          containerClassName: "w-72 sm:w-80 h-auto overflow-hidden rounded-xl bg-transparent",
          borderClassName: "bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]",
          className: "bg-background dark:bg-zinc-900 border dark:border-zinc-800 p-5 items-start justify-start flex-col w-full h-full text-foreground shadow-lg",
          children: [
            /* @__PURE__ */ jsxs6(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "absolute top-3 right-3 h-6 w-6 text-muted-foreground hover:text-foreground z-10",
                onClick: handleDismissNotification,
                children: [
                  /* @__PURE__ */ jsx11(X2, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Close" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs6("div", { className: "flex items-start gap-3 mb-4 w-full", children: [
              /* @__PURE__ */ jsx11("div", { className: "relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-background dark:ring-zinc-800", children: /* @__PURE__ */ jsx11(
                "img",
                {
                  src: logoSrc,
                  alt: "AI",
                  className: "object-cover h-full w-full"
                }
              ) }),
              /* @__PURE__ */ jsxs6("div", { className: "flex flex-col pt-0.5", children: [
                /* @__PURE__ */ jsx11("h3", { className: "font-bold text-sm leading-tight text-foreground", children: title }),
                /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                  /* @__PURE__ */ jsxs6("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsx11("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                    /* @__PURE__ */ jsx11("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })
                  ] }),
                  /* @__PURE__ */ jsx11("span", { className: "text-xs text-muted-foreground font-medium", children: "Online" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "w-full text-left", children: [
              /* @__PURE__ */ jsx11("p", { className: "text-sm font-medium text-foreground leading-snug", children: welcomeMessage }),
              /* @__PURE__ */ jsx11("p", { className: "text-sm text-muted-foreground leading-relaxed mt-2", children: description }),
              /* @__PURE__ */ jsx11(
                Button,
                {
                  className: "w-full mt-4 h-10 rounded-lg bg-[#535bf2] hover:bg-[#464ec9] text-white shadow-sm transition-all duration-200 font-medium",
                  onClick: () => setIsChatOpen(true),
                  children: "Start chatting"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx11("div", { className: "absolute -bottom-2 right-6 w-4 h-4 bg-background dark:bg-zinc-900 border-b border-r dark:border-zinc-800 transform rotate-45 z-0" })
    ] }) }),
    /* @__PURE__ */ jsxs6(
      ExpandableChat,
      {
        size: "lg",
        position: "bottom-right",
        isOpen: isChatOpen,
        onOpenChange: setIsChatOpen,
        icon: /* @__PURE__ */ jsx11("div", { className: "relative h-full w-full overflow-hidden rounded-full", children: /* @__PURE__ */ jsx11(
          "img",
          {
            src: logoSrc,
            alt: "AI",
            className: "object-cover h-full w-full"
          }
        ) }),
        children: [
          /* @__PURE__ */ jsxs6(ExpandableChatHeader, { className: "bg-muted/40 flex-col text-center justify-center border-b p-4 relative", children: [
            /* @__PURE__ */ jsxs6("h1", { className: "text-xl font-semibold flex items-center justify-center gap-2", children: [
              title,
              /* @__PURE__ */ jsx11(Sparkles, { className: "h-4 w-4 text-yellow-500 fill-yellow-500" })
            ] }),
            /* @__PURE__ */ jsxs6("p", { className: "text-sm text-muted-foreground flex items-center justify-center gap-1.5 pt-1", children: [
              /* @__PURE__ */ jsx11("span", { className: "flex h-2 w-2 rounded-full bg-green-500 animate-pulse" }),
              "Online and ready to help"
            ] }),
            /* @__PURE__ */ jsx11(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "absolute top-3 left-3 h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50 sm:top-5 sm:right-5 sm:left-auto",
                onClick: handleReset,
                title: "Reset Chat",
                children: /* @__PURE__ */ jsx11(RefreshCcw, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx11(ExpandableChatBody, { className: "bg-background/50", children: messages.length === 0 ? /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center justify-center h-full p-6 text-center animate-in fade-in duration-500", children: [
            /* @__PURE__ */ jsx11("div", { className: "bg-background rounded-full p-4 mb-6 shadow-md ring-1 ring-border/50", children: /* @__PURE__ */ jsx11("div", { className: "relative w-16 h-16 overflow-hidden rounded-full", children: /* @__PURE__ */ jsx11(
              "img",
              {
                src: logoSrc,
                alt: "AI Logo",
                className: "object-cover w-full h-full"
              }
            ) }) }),
            /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-bold mb-2 tracking-tight", children: title }),
            /* @__PURE__ */ jsxs6("p", { className: "text-muted-foreground text-sm", children: [
              "Welcome to ",
              title,
              " \u{1F49B}"
            ] })
          ] }) : /* @__PURE__ */ jsxs6(ChatMessageList, { children: [
            messages.map((message) => /* @__PURE__ */ jsxs6(
              ChatBubble,
              {
                variant: message.role === "user" ? "sent" : "received",
                children: [
                  /* @__PURE__ */ jsx11(
                    ChatBubbleAvatar,
                    {
                      className: "h-8 w-8 shrink-0",
                      src: message.role === "user" ? void 0 : logoSrc,
                      fallback: message.role === "user" ? /* @__PURE__ */ jsx11(User, { className: "h-4 w-4" }) : "AI"
                    }
                  ),
                  /* @__PURE__ */ jsx11(
                    ChatBubbleMessage,
                    {
                      variant: message.role === "user" ? "sent" : "received",
                      children: message.role === "user" ? message.content : /* @__PURE__ */ jsx11(
                        "div",
                        {
                          className: cn(
                            "prose dark:prose-invert text-sm break-words leading-normal max-w-none",
                            "prose-p:m-0 prose-ul:m-0 prose-ol:m-0 prose-li:m-0"
                          ),
                          children: /* @__PURE__ */ jsx11(
                            ReactMarkdown,
                            {
                              remarkPlugins: [remarkGfm],
                              components: {
                                ul: ({ node, ...props }) => /* @__PURE__ */ jsx11("ul", { className: "list-disc pl-4 my-1", ...props }),
                                ol: ({ node, ...props }) => /* @__PURE__ */ jsx11(
                                  "ol",
                                  {
                                    className: "list-decimal pl-4 my-1",
                                    ...props
                                  }
                                ),
                                li: ({ node, ...props }) => /* @__PURE__ */ jsx11("li", { className: "my-0.5 pl-1", ...props }),
                                p: ({ node, ...props }) => /* @__PURE__ */ jsx11("p", { className: "mb-2 last:mb-0", ...props }),
                                strong: ({ node, ...props }) => /* @__PURE__ */ jsx11(
                                  "span",
                                  {
                                    className: "font-bold text-foreground",
                                    ...props
                                  }
                                ),
                                a: ({ node, href, children, ...props }) => /* @__PURE__ */ jsx11(
                                  "a",
                                  {
                                    href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors break-all",
                                    ...props,
                                    children
                                  }
                                )
                              },
                              children: message.content
                            }
                          )
                        }
                      )
                    }
                  )
                ]
              },
              message.id
            )),
            isLoading && /* @__PURE__ */ jsxs6(ChatBubble, { variant: "received", children: [
              /* @__PURE__ */ jsx11(
                ChatBubbleAvatar,
                {
                  className: "h-8 w-8 shrink-0",
                  src: logoSrc,
                  fallback: "AI"
                }
              ),
              /* @__PURE__ */ jsxs6(ChatBubbleMessage, { className: "bg-transparent p-0 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx11(Sparkles, { className: "h-4 w-4 text-foreground/50" }),
                /* @__PURE__ */ jsx11(ShiningText, { text: "AI Assistant thinking..." })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs6(ExpandableChatFooter, { className: "bg-muted/40 p-3", children: [
            /* @__PURE__ */ jsxs6(
              "form",
              {
                onSubmit: handleSubmit,
                className: "relative rounded-3xl border bg-background focus-within:ring-1 focus-within:ring-ring p-1 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx11(
                    ChatInput,
                    {
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      placeholder: inputPlaceholder,
                      rows: 1,
                      className: "min-h-0 h-auto max-h-32 resize-none rounded-2xl bg-background border-0 px-3 py-2.5 shadow-none focus-visible:ring-0 text-base sm:text-sm",
                      onKeyDown: (e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit(e);
                        }
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between px-2 pb-1", children: [
                    /* @__PURE__ */ jsx11("div", { className: "flex items-center gap-2" }),
                    /* @__PURE__ */ jsxs6(
                      Button,
                      {
                        type: "submit",
                        size: "icon",
                        className: "h-8 w-8 rounded-full transition-all duration-200",
                        disabled: !input.trim() || isLoading,
                        children: [
                          isLoading ? /* @__PURE__ */ jsx11(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx11(Send, { className: "h-4 w-4" }),
                          /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Send" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx11("div", { className: "mt-2 text-center flex flex-col items-center justify-center gap-0.5", children: /* @__PURE__ */ jsx11("span", { className: "text-[10px] text-muted-foreground/60", children: footerText }) })
          ] })
        ]
      }
    )
  ] }) });
}
export {
  ChatUI
};
//# sourceMappingURL=index.mjs.map