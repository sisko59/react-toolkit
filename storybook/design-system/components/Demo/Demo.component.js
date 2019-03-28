import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';
import Code from 'components/Code';
import { PREFIX } from '../../constants';
import './demo.scss';
import iconCSS from '../../assets/icons/css3.svg';
import iconHTML from '../../assets/icons/html5.svg';
import iconEye from '../../assets/icons/eye.svg';
import DemoToggleButton from './DemoToggleButton';
import WithIframe from '../Iframe/withIframe';

const Demo = ({
  template,
  title,
  importcss,
  isExpanded,
  classExpanded,
  toggleExpandFn,
  className,
  iframeMode = Boolean(false),
  children
}) => (
  <div className={`${PREFIX}-demo`}>
    <h2 className={`${PREFIX}-demo__title`}>{title}</h2>
    <Tabs>
      <TabList>
        <Tab>
          <img
            className={`${PREFIX}-demo__icon`}
            alt="See Live Demo"
            src={iconEye}
          />
        </Tab>
        <Tab>
          <img
            className={`${PREFIX}-demo__icon`}
            alt="HTML Code"
            src={iconHTML}
          />
        </Tab>
        <Tab>
          <img
            className={`${PREFIX}-demo__icon`}
            alt="SASS Imports"
            src={iconCSS}
          />
        </Tab>
      </TabList>
      <TabPanel>
        <div className={classExpanded}>
          <DemoToggleButton
            toggleExpand={toggleExpandFn}
            isExpanded={isExpanded}
          />
          <WithIframe condition={iframeMode}>
            <div
              className={className}
              dangerouslySetInnerHTML={{ __html: template() }}
            />
            {children}
          </WithIframe>
        </div>
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <pre className={`${PREFIX}-demo__css`}>
          <code className="hljs css">
            <ReactMarkdown source={importcss} />
          </code>
        </pre>
      </TabPanel>
    </Tabs>
  </div>
);

export default Demo;
