"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

const items = [
  {
    header: "What is the payment schedule?",
    content:
      "Usually clients cover 30% deposit while placing the order. The rest of the 70% must be payed in the day of delivery.",
  },
  {
    header: "Is shipping included in the price?",
    content: "Yes, shipping is included.",
  },
  {
    header: "Do you provide design services as well?",
    content:
      "Yes, we have our great team of interior and furniture designers that can provide you professional design services.",
  },
  {
    header:
      "Who will be my main point of contact during the design or ordering process?",
    content:
      "You will be in touch with our project manager. Manager will help you with any issue according your order.",
  },
  {
    header:
      "Do you provide installation services or do I need to find my own contractor?",
    content: "We provide installation services.",
  },
  {
    header: "Can I get help with measurement?",
    content: "Yes, our team help you with all steps according your order.",
  },
  {
    header:
      "Can I get a cost estimate before starting the design or ordering process?",
    content:
      "After discussing your project, you can get a free estimate according your wishes and budget.",
  },
];

export const FAQ = () => (
  <section className="max-w-[800px] mx-auto mb-24">
    <h2 className="mb-14 text-3xl text-white text-center uppercase font-light">
      FAQ
    </h2>

    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      className={clsx("space-y-4 w-full")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="rounded-lg focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none w-full"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between px-4 py-2 text-left dark:bg-gray-800"
              )}
            >
              <span className="text-lg font-medium text-white dark:text-white">
                {header}
              </span>

              <ChevronDownIcon
                className={clsx(
                  "ml-2 h-5 w-5 shrink-0 text-white ease-in-out dark:text-white",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className="pt-1 w-full rounded-b-lg px-4 pb-3 dark:bg-gray-800">
            <div className="text-md text-white dark:white font-thin">
              {content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  </section>
);
