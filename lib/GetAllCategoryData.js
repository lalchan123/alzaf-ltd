export default async function GetAllCategoryData() {
  const categoryData = await fetch('https://api.shope.com.bd/api/v1/public/hero-categories', {
    next: { revalidate: 200 },
  });
  return categoryData.json();
}
