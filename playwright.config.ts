import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: [['html', { outputFolder: 'test-results/html' }]],
    use: {
        // Run tests in headless mode
        headless: false,
        screenshot: 'only-on-failure',
      },
    
    testDir: './tests',
    timeout: 30000,

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // },
  ],
};

export default config;







