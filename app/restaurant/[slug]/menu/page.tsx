import { prisma } from '@/app/prisma';
import Menu from '@/app/restaurant/[slug]/components/Menu';
import RestaurantNavBar from '@/app/restaurant/[slug]/components/RestaurantNavBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Milestones Grill (Toronto)',
};

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { items: true },
  });

  if (!restaurant) throw new Error();

  return restaurant.items;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
