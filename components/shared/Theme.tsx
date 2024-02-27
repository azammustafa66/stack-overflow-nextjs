'use client';

import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import { toggle } from '@/redux/features/theme/themeSlice';

export default function Theme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeReducer.mode);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger>
          {theme === 'light' ? (
            <Image
              src={'/assets/icons/sun.svg'}
              width={20}
              height={20}
              alt='active-theme'
              onClick={() => dispatch(toggle())}
            />
          ) : (
            <Image
              src={'/assets/icons/moon.svg'}
              width={20}
              height={20}
              alt='active-theme'
              onClick={() => dispatch(toggle())}
            />
          )}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
