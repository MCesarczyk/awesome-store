'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParameter = (key: string) => {
  const search = useSearchParams();
  const searchParams = new URLSearchParams(search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const search = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return ({ key, value }: { key: string; value: string | undefined }) => {
    const searchParams = new URLSearchParams(search);

    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router.push(`${pathname}?${searchParams.toString()}`);
  };
};
