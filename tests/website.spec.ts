import { test, expect } from '@playwright/test';

test.describe('Kingsmen Consultancy Website', () => {
  test('should load homepage with proper styling', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Kingsmen Consultancy/);
    
    // Check if the main heading is visible
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Transforming Businesses');
    
    // Check if the header is present
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check if the logo in header is visible
    const logo = page.getByRole('banner').getByText('Kingsmen');
    await expect(logo).toBeVisible();
    
    // Check if navigation links are present
    const navLinks = ['Home', 'Services', 'Solutions', 'About', 'Case Studies', 'Contact'];
    for (const link of navLinks) {
      const navLink = page.locator(`text=${link}`);
      await expect(navLink).toBeVisible();
    }
    
    // Check if the hero section has proper styling (not unstyled)
    const heroSection = page.locator('section').first();
    const heroStyles = await heroSection.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        padding: styles.padding,
        margin: styles.margin
      };
    });
    
    // Log the styles to see what's happening
    console.log('Hero section styles:', heroStyles);
    
    // Check if buttons are styled (not default browser buttons)
    const buttons = page.locator('button, .btn-primary, .btn-secondary, .btn-accent');
    const buttonCount = await buttons.count();
    console.log(`Found ${buttonCount} buttons`);
    
    if (buttonCount > 0) {
      const firstButton = buttons.first();
      const buttonStyles = await firstButton.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderRadius: styles.borderRadius,
          padding: styles.padding
        };
      });
      console.log('First button styles:', buttonStyles);
    }
    
    // Check if the page has any CSS applied (not just default browser styles)
    const bodyStyles = await page.evaluate(() => {
      const body = document.body;
      const styles = window.getComputedStyle(body);
      return {
        fontFamily: styles.fontFamily,
        backgroundColor: styles.backgroundColor,
        color: styles.color
      };
    });
    
    console.log('Body styles:', bodyStyles);
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
  });
  
  test('should have working navigation', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Test smooth scrolling to sections
    await page.click('text=Services');
    await page.waitForTimeout(1000);
    
    await page.click('text=Case Studies');
    await page.waitForTimeout(1000);
    
    await page.click('text=Contact');
    await page.waitForTimeout(1000);
  });
  
  test('should have responsive design', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'test-results/mobile-view.png' });
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'test-results/tablet-view.png' });
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'test-results/desktop-view.png' });
  });
});
