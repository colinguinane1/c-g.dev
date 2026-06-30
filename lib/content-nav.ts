export function getAdjacentContent<
  T extends { slug: string; metadata: { title: string } },
>(items: T[], slug: string) {
  const index = items.findIndex((item) => item.slug === slug);

  return {
    index,
    prev: index > 0 ? items[index - 1] : undefined,
    next: index < items.length - 1 ? items[index + 1] : undefined,
  };
}
