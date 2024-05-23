import { useInView } from "framer-motion";
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useRef,
  type RefObject,
  useEffect,
  useState,
} from "react";

type BubbleAnimationContext = {
  // TODO: Would prefer this type be more generic
  inViewTriggerElement?: RefObject<HTMLHeadingElement>;
  triggerBubbleAnimation?: boolean;
};

const BubbleAnimationContext = createContext<BubbleAnimationContext>({});

export default function BubbleAnimationProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const inViewTriggerElement = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(inViewTriggerElement!, { once: true });
  const [triggerBubbleAnimation, setTriggerBubbleAnimation] = useState(false);

  // TODO: Revisit using framer motion hook more efficiently
  useEffect(() => {
    if (isInView) {
      setTriggerBubbleAnimation(true);
      // TODO: This is kind of weird, try to rework
      setTimeout(() => {
        const htmlElem = document.getElementsByTagName("html").item(0);
        const bodyElem = document.getElementsByTagName("body").item(0);
        const rootElem = document.getElementById("root")
        if(htmlElem) {
          htmlElem.removeAttribute('style')
        }
        if(bodyElem) {
          bodyElem.removeAttribute('style')
        }
        if(rootElem) {
          rootElem.removeAttribute('style')
        }
      }, 50)
    }
  }, [isInView]);

  const value = useMemo(
    () => ({
      inViewTriggerElement,
      triggerBubbleAnimation,
    }),
    [inViewTriggerElement, triggerBubbleAnimation],
  );

  return (
    <BubbleAnimationContext.Provider value={value}>
      {children}
    </BubbleAnimationContext.Provider>
  );
}

export const useBubbleAnimationProvider = (): BubbleAnimationContext =>
  useContext(BubbleAnimationContext);
