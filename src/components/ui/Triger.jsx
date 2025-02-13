'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetContent = React.forwardRef(({ className, side = 'right', children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed bg-white shadow-lg transition-transform duration-300 ease-in-out',
        side === 'right' ? 'right-0 top-0 h-full w-64 translate-x-full' : '',
        side === 'left' ? 'left-0 top-0 h-full w-64 -translate-x-full' : '',
        side === 'top' ? 'top-0 left-0 w-full h-64 -translate-y-full' : '',
        side === 'bottom' ? 'bottom-0 left-0 w-full h-64 translate-y-full' : '',
        'data-[state=open]:translate-x-0 data-[state=open]:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = 'SheetContent';

export { Sheet, SheetTrigger, SheetContent };