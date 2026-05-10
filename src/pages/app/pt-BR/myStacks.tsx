import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@/components/pageTitle';
import { SectionTitle } from '@/components/sectionTitle';
import { StackItem } from '@/components/stackPage/stackItem';
import { CategoryProps, sortedStacksList, StacksProps } from '@/utils/stacks';

export function MyStacks() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setCategories(sortedStacksList);
  }, []);

  const filterStacks = (items: StacksProps[]) => {
    if (!search) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  };

  return (
    <>
      <div>
        <PageTitle text={t('stacks.pageTitle')} />
        <span className="block">{t('stacks.description')}</span>
        <div className="mt-6 flex w-full items-center justify-between rounded border bg-transparent px-4 py-2 text-sm font-normal">
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            name="search"
            placeholder={t('stacks.searchPlaceholder')}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Search size={20} />
        </div>
      </div>

      {categories.map((category) => {
        const filteredItems = filterStacks(category.items);

        if (!filteredItems.length) return null;

        return (
          <div className="mt-10" key={category.titleKey}>
            <SectionTitle text={t(category.titleKey)} />
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.map((stack, index) => (
                <StackItem
                  image={stack.image}
                  name={stack.name}
                  key={stack.name}
                  url={stack.url}
                  delay={0.07 * index}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
