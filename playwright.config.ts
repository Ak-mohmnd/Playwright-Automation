import { defineConfig, devices } from '@playwright/test';
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
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false, 
      },
      
    },
  ],
};

export default config;







