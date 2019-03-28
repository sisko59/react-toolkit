import React from 'react';
import iconDownload from '../../assets/icons/download.svg';
import { PREFIX } from '../../constants';
import './download.scss';

const DownloadFile = ({ label, filename, link }) => (
  <li className={`${PREFIX}-download__file`}>
    <a href={link} className={`${PREFIX}-download__link`}>
      <img src={iconDownload} alt="download" />
      <span className={`${PREFIX}-download__link-label`}>{label}</span>
      <span className={`${PREFIX}-download__link-file`}>{filename}</span>
    </a>
  </li>
);

const Download = () => (
  <div className={`${PREFIX}-download`}>
    <h2 className={`${PREFIX}-download__title`}>Downloads</h2>
    <p>Gel all types of components in our kits</p>
    <ul className={`${PREFIX}-download__list`}>
      <DownloadFile
        label="Sketch file"
        filename="https://sketch.cloud/s/vLxl4/JxMPxk"
        link="https://sketch.cloud/s/vLxl4/JxMPxk"
      />
      <DownloadFile
        label="Zeplin access"
        filename="button zeplin"
        link="https://app.zeplin.io/project/59ad658bd9d7360e21635b66/screen/59ad66c0652c60a6249978fd"
      />
    </ul>
  </div>
);

export default Download;
