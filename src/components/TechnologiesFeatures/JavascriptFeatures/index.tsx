import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import OtelNoFill from '@site/static/img/otel-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';

export class JavascriptFeatures
 extends React.Component {
  override render() {
    return <OpenFeatureTechnologiesPage 
      technology="JavaScript"
      iconDefinition={ faSquareJs }
      sdkRepoLink={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/js-sdk'
      }}
      artifact={{
        title: 'NPM',
        href: 'https://www.npmjs.com/package/@openfeature/js-sdk',
        instruction: 'npm install @openfeature/js-sdk',
        codeBlockLanguage: 'bash'
      }}
      providers={[
        {
          title: 'flagd Provider',
          description: 'A provider for flagd',
          href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd',
          svg: FlagdSvg
        },
        {
          title: 'Split Provider',
          description: 'The official Split provider for OpenFeature',
          href: 'https://github.com/splitio/split-openfeature-provider-js',
          svg: SplitSvg,
          }
      ]}
      hooks={[
        {
          title: 'OpenTelemetry Hook',
          description: 'A hook for OpenTelemetry integration',
          href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/hooks/open-telemetry',
          svg: OtelNoFill
        }
      ]}
      />;
  }
}
