import { FC } from "react";

const TECH_TERM_PATTERN =
  /(React|TypeScript|Jest|Storybook|React Three Fiber|Firebase|GSAP|Framer Motion|Blender|gltfjsx|AWS Amplify Gen 2|Amazon Bedrock|Cognito|AppSync|Lambda|DynamoDB|Stripe|PostHog|ElevenLabs|TradingView|D3|Binance|WebGL|OGL|GLSL|Mailchimp|Blueshift|JavaScript|Shadcn UI|Next\.js|PHP|HTML|CSS)/g;

export function highlightTechTerms(text: string): string {
  return text.replace(
    TECH_TERM_PATTERN,
    '<span class="dark:text-emphasis font-medium">$1</span>'
  );
}

type HighlightedTextProps = {
  text: string;
};

export const HighlightedText: FC<HighlightedTextProps> = ({ text }) => {
  const highlighted = highlightTechTerms(text);

  if (highlighted === text) {
    return <>{text}</>;
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: highlighted,
      }}
    />
  );
};
