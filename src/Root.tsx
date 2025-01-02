// import { Composition } from "remotion";
// import { Main } from "./Main";

// import { calculateMetadata } from "./calculate-metadata/calculate-metadata";
// import { schema } from "./calculate-metadata/schema";

// export const RemotionRoot = () => {
//   return (
//     <Composition
//       id="Main"
//       component={Main}
//       defaultProps={{
//         steps: null,
//         themeColors: null,
//         theme: "github-dark" as const,
//         codeWidth: null,
//         width: {
//           type: "auto",
//         },
//       }}
//       fps={40}
//       height={1080}
//       calculateMetadata={calculateMetadata}
//       schema={schema}
//     />
//   );
// };

import { Composition } from 'remotion';
import { CodeAnimation } from './CodeAnimation';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CodeAnimation"
        component={CodeAnimation}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

