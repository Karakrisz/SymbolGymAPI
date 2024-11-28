import { b as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData } from './asyncData-3SaHMhLB.mjs';

async function fetchPosts() {
  const config = useRuntimeConfig();
  const { data: itemsPost } = await useAsyncData(
    "posts",
    () => $fetch(`${config.public.apiBaseUrl}/json-posts`)
  );
  return itemsPost;
}
function truncateContent(content, maxLength) {
  const textContent = content.replace(/<[^>]*>/g, "");
  if (textContent.length <= maxLength) {
    return textContent;
  }
  return textContent.slice(0, maxLength) + "...";
}

export { fetchPosts as f, truncateContent as t };
//# sourceMappingURL=utils-DXUiE5mz.mjs.map
