/**
 * Resolves an image filename from `src/assets/images` or `src/assets/reference` to the URL Astro generates
 * during development and production builds.
 *
 * Add Orion images to `src/assets/images` and pass only their filename,
 * for example: `assetUrl('living-room.jpg')`.
 */
const localAssets = import.meta.glob(
  [
    '/src/assets/images/*.{jpg,jpeg,png,webp,svg}',
    '/src/assets/reference/*.{jpg,jpeg,png,webp,svg}'
  ],
  { eager: true, import: 'default' }
);

type ImportedAsset = string | { src: string };

export function assetUrl(filename: string): string {
  const asset = (
    localAssets[`/src/assets/images/${filename}`] ??
    localAssets[`/src/assets/reference/${filename}`]
  ) as ImportedAsset | undefined;

  return typeof asset === 'string' ? asset : asset?.src ?? '';
}
