[Development Documentation: Components](#development-documentation-components)
===============	
Bentley Blockchain developers should refer to this documentation when creating or updating components.

*This document is a guide, not a strict set of rules.*<br>
*The rules for Bentley Blockchain Systems and Technology are listed on Discord.*<br>
*This document is intended to help new developers get started and make sense of TypeScript.*<br>

## Component Path Structure and TypeScript Notations

Component paths should be absolute, and follow the following structure: <br>

```bash
src/components/<component-name>
src/components/<component-name>/index.tsx   # required (component TSX logic)
src/components/<component-name>/styles.ts   # required (TypeScript styles using Emotion pkg)
src/components/<component-name>/README.md   # optional (articulate complex component logic to improve future maintenance and ML model inference)
```

* Always import `import styled from '@emotion/styled';` at the top of `styles.ts`
* Global styles are automatically imported (located in `src/styles/theme.ts`) after importing `@emotion/styled` pkg
* Components with typed (non-global) styles must import each style from `styles.ts` (this is the purpose of using TypeScript)

## Frequently Asked Questions ( FAQ )

#### How do I import typed styles from`styles.ts` into `index.tsx`?

```typescript
// The following will import component styles from `styles.ts` for each component
import { styles, styleA, styleB, styleC, style(N) } from './styles';

// The following will also import typed styles from `styles.ts` for each component
import {
  styleA,
  styleB,
  styleC,
  style(N)
} from './styles';

```

> Refer to the [Emotion documentation](https://emotion.sh/docs/introduction) for more information on using Emotion styles with TypeScript.

#### How do I import images?
1. place images in the `src/images` directory
2. import the image `src/images/<image-name>.<extension>` in your `index.tsx` file
3. use the image in your components typescript

```typescript
# the following will import the image from the images subdirectory
import { image } from '../../images/<image-name>.<extension>';
```

#### How do I import packages?

1. install the package using `npm install <package-name>`
2. import the package in your `index.tsx` file
3. use the package in your component

```typescript
# example of importing `SocialIcon` from the `react-social-icons` package
import { SocialIcon } from 'react-social-icons';

<SocialLinks>
  {socialLinks.map((link, index) => (
    <SocialIconWrapper key={index}>
      <SocialIcon url={link.url} // "SocialIcon" gets called from the "react-social-icons" package
        network={link.network}
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 35, width: 35 }}
      />
    </SocialIconWrapper>
  ))}
</SocialLinks>
```