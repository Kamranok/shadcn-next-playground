
import React from "react"

import { AlertDestructive } from "./AlertDestructiveDemo"
import { AlertDialogDemo } from "./AlertDialogDemo"
import { AspectRatioDemo } from "./AspectRatioDemo"
import { AvatarDemo } from "./AvatarDemo"
import { BadgeDemo } from "./BadgeDemo"
import { BreadcrumbDemo } from "./BreadcrumbDemo"
import { CalendarDemo } from "./CalenderDemo"
import { CardDemo } from "./CardDemo"
import { CardWithForm } from "./CardWithFormDemo"
import { CheckboxDemo } from "./CheckboxDemo"
import { DatePickerDemo } from "./DatePickerDemo"
import { DropdownMenuDemo } from "./DropDownMenuDemo"
import { NavigationMenuDemo } from "./NavigationMenuDemo"
import { TableDemo } from "./TableDemo"
import { DrawerDemo } from "./DrawerDemo"
import { ProgressDemo } from "./ProgressDemo"
import { RadioGroupDemo } from "./RadioGroupDemo"
import { ResizableDemo } from "./ResizableDemo"
import { ScrollAreaDemo } from "./ScrollAreaDemo"
import { SeparatorDemo } from "./SeparatorDemo"
import { SheetDemo } from "./SheetDemo"
import { SonnerDemo } from "./SonnerDemo"
import { SwitchDemo } from "./SwitchDemo"
import { TabsDemo } from "./TabsDemo"
import { TextareaDemo } from "./TextareaDemo"
import { ToastDemo } from "./ToastDemo"
import { ToggleDemo } from "./ToggleDemo"
import { ToggleGroupDemo } from "./ToggleGroupDemo"
import { TooltipDemo } from "./TooltipDemo"

export default function ShadcnFullUiDemo() {
  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <CalendarDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <DatePickerDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <TableDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <AvatarDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <CardWithForm />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <NavigationMenuDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <AvatarDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <DropdownMenuDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <CardDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <CheckboxDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <AlertDestructive />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <AlertDialogDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        {/* <AspectRatioDemo /> */}
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <BadgeDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <BreadcrumbDemo />
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        {/* <DrawerDemo /> */}
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <ProgressDemo/>
      </section>
      <section className="container gap-6 pb-8 pt-6 md:py-10">
        <RadioGroupDemo/>
      </section>
      {/* <section className="container gap-6 pb-8 pt-6 md:py-10">
        <ResizableDemo/>
        </section> */}
        <section className="container gap-6 pb-8 pt-6 md:py-10">
          <ScrollAreaDemo/>
        </section>
        <section className="container gap-6 pb-8 pt-6 md:py-10">
          <SeparatorDemo/>
        </section>
        <section className="container gap-6 pb-8 pt-6 md:py-10">
          <SheetDemo/>
        </section>
        {/* <section className="container gap-6 pb-8 pt-6 md:py-10">
          <SonnerDemo/>
          </section> */}
          <section className="container gap-6 pb-8 pt-6 md:py-10">
            <SwitchDemo/>
          </section>
          <section className="container gap-6 pb-8 pt-6 md:py-10">
            <TabsDemo/>
          </section>
          <section className="container gap-6 pb-8 pt-6 md:py-10">
            <TextareaDemo/>
          </section>
          {/* <section className="container gap-6 pb-8 pt-6 md:py-10">
            <ToastDemo/>
            </section> */}
            <section className="container gap-6 pb-8 pt-6 md:py-10">
              <ToggleDemo/>
            </section>
            {/* <section className="container gap-6 pb-8 pt-6 md:py-10">
              <ToggleGroupDemo/>
              </section> */}
              <section className="container gap-6 pb-8 pt-6 md:py-10">
                <TooltipDemo/>
              </section>
    </div>
  )
}
