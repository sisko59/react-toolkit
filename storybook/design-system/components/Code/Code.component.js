import React from 'react';
import pretty from 'pretty';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PREFIX } from '../../constants';
import './code.scss';

const Code = ({ template, setCopyFn, copied }) => (
  <>
    <div className={`${PREFIX}-code__wrapper-outer`}>
      <div className={`${PREFIX}-code__wrapper-middle`}>
        <div className={`${PREFIX}-code__wrapper-inner`}>
          <div
            className={`${PREFIX}-code__icon ${
              copied ? ` ${PREFIX}-code__icon--copied` : ''
            }`}
          >
            <CopyToClipboard text={template()} onCopy={setCopyFn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.3 488.3">
                <path d="M314.25 85.4h-227c-21.3 0-38.6 17.3-38.6 38.6v325.7c0 21.3 17.3 38.6 38.6 38.6h227c21.3 0 38.6-17.3 38.6-38.6V124c-.1-21.3-17.4-38.6-38.6-38.6zm11.5 364.2c0 6.4-5.2 11.6-11.6 11.6h-227c-6.4 0-11.6-5.2-11.6-11.6V124c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.6z" />
                <path d="M401.05 0h-227c-21.3 0-38.6 17.3-38.6 38.6 0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.7c0 6.4-5.2 11.6-11.6 11.6-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5c21.3 0 38.6-17.3 38.6-38.6V38.6c0-21.3-17.3-38.6-38.6-38.6z" />
              </svg>
            </CopyToClipboard>

            <span className={`${PREFIX}-code__icon-text`}>Copied</span>
          </div>
          <pre className="pre">
            <code className="html">{pretty(template())}</code>
          </pre>
        </div>
      </div>
    </div>
  </>
);

export default Code;
