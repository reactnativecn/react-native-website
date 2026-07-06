/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ShowcaseData} from '@site/src/types';

import PartnersShowcase from './PartnersShowcase';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

import styles from './styles.module.css';

function Community() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields?.users as ShowcaseData)
    .flat()
    .filter(app => Boolean(app.pinned));

  return (
    <Section>
      <SectionTitle
        title="Meta 支持，社区驱动。"
        description={
          <>
            React Native 正被用于成千上万款应用，
            <br />
            你很可能已经用过其中之一。
          </>
        }
      />
      <div className={styles.featureContainer}>
        <ul className={styles.appList}>
          {apps.map((app, i) => {
            const imgSource = !app.icon.startsWith('http')
              ? useBaseUrl('img/showcase/' + app.icon)
              : app.icon;
            return (
              <li key={i} className="item">
                {app.infoLink ? (
                  <a
                    href={app.infoLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={imgSource} alt={app.name} />
                  </a>
                ) : (
                  <img src={imgSource} alt={app.name} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <a href={useBaseUrl(`showcase`)} className={styles.secondaryButton}>
        查看全部精选应用
      </a>
      <div className={styles.communityNote}>
        <p>
          Meta 在 2015 年发布了 React Native，并一直维护至今。
          <br />
          如今，React Native 也由来自世界各地的个人和公司共同贡献支持，包括：
        </p>
        <PartnersShowcase />
        <p>
          此外，我们的社区也在不断推出令人兴奋的新项目，并通过{' '}
          <a
            href="https://microsoft.github.io/react-native-windows/"
            target="_blank"
            rel="noopener noreferrer">
            React Native Windows
          </a>
          、{' '}
          <a
            href="https://microsoft.github.io/react-native-macos/"
            target="_blank"
            rel="noopener noreferrer">
            React Native macOS
          </a>{' '}
          和{' '}
          <a
            href="https://necolas.github.io/react-native-web/"
            target="_blank"
            rel="noopener noreferrer">
            React Native Web
          </a>{' '}
          等项目持续拓展 Android 与 iOS 之外的平台。
        </p>
      </div>
      <a
        href="https://github.com/react/react-native/blob/main/ECOSYSTEM.md"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondaryButton}>
        进一步了解生态系统
      </a>
    </Section>
  );
}

export default Community;
