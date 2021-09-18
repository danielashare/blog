
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','f44'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/how-to-send-multiple-commands-to-and-receive-output-from-the-same-bash-process',
    component: ComponentCreator('/how-to-send-multiple-commands-to-and-receive-output-from-the-same-bash-process','a9e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags','c13'),
    exact: true
  },
  {
    path: '/tags/bash',
    component: ComponentCreator('/tags/bash','a61'),
    exact: true
  },
  {
    path: '/tags/c',
    component: ComponentCreator('/tags/c','338'),
    exact: true
  },
  {
    path: '/tags/ipc',
    component: ComponentCreator('/tags/ipc','363'),
    exact: true
  },
  {
    path: '/tags/shell',
    component: ComponentCreator('/tags/shell','079'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
