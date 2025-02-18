/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { FC } from 'react';

import { KibanaContextProvider, KibanaThemeProvider } from '@kbn/kibana-react-plugin/public';
import { I18nProvider } from '@kbn/i18n-react';

import { getCoreStart } from '../kibana_services';

import { AiopsApp } from './app';

/**
 * Spec used for lazy loading in the ML plugin
 */
export type ExplainLogRateSpikesSpec = typeof ExplainLogRateSpikes;

export const ExplainLogRateSpikes: FC = () => {
  const coreStart = getCoreStart();

  return (
    <KibanaThemeProvider theme$={coreStart.theme.theme$}>
      <KibanaContextProvider services={coreStart}>
        <I18nProvider>
          <AiopsApp />
        </I18nProvider>
      </KibanaContextProvider>
    </KibanaThemeProvider>
  );
};
