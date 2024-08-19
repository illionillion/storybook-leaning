import { test, expect } from '@playwright/test';

test.describe('Card', () => {
  test('画像付きのCardが正常に描画されるか', async ({ page }) => {
    // Storybookの特定のStoryを表示
    await page.goto('http://localhost:6006/?path=/story/example-card--normal');

    // iframeの中に入る
    const frame = page.frameLocator('iframe#storybook-preview-iframe');

    // 画像が表示されているか確認
    const img = frame.getByRole('img', { name: 'カードの画像' });
    await expect(img).toBeVisible();

    // テキストが表示されているか確認
    const text = frame.getByText('Hello');
    await expect(text).toBeVisible();
  });

  test('画像なしのCardが正常に描画されるか', async ({ page }) => {
    // Storybookの特定のStoryを表示
    await page.goto('http://localhost:6006/?path=/story/example-card--without-image');

    // iframeの中に入る
    const frame = page.frameLocator('iframe#storybook-preview-iframe');

    // 画像が存在しないことを確認
    const img = frame.getByRole('img', { name: 'カードの画像' });
    await expect(img).toHaveCount(0); // 画像が存在しないことを確認

    // テキストが表示されているか確認
    const text = frame.getByText('Hello');
    await expect(text).toBeVisible();
  });
});
