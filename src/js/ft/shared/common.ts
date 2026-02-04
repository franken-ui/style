import React from 'react';
import { createRoot } from 'react-dom/client';

export const cn = (
  ...args: (string | string[] | false | null | undefined)[]
): string =>
  [
    ...new Set(
      args.flatMap(a =>
        a ? (typeof a === 'string' ? a.split(/\s+/) : a) : [],
      ),
    ),
  ].join(' ');

export const render = (
  selector: string,
  Component: React.ComponentType<any>,
  defaultProps: Record<string, any> = {},
) => {
  document.querySelectorAll(selector).forEach(container => {
    const configScript = container.querySelector('script[data-fn="props"]');
    const template = container.querySelector('template[data-fn="template"]');

    let props = { ...defaultProps };

    if (configScript) {
      try {
        const parsed = JSON.parse(configScript.textContent || '{}');
        props = { ...props, ...parsed };
      } catch (error) {
        console.error(`Failed to parse ${selector} config:`, error);
      }
    }

    if (template) {
      try {
        const children = (template as HTMLTemplateElement).innerHTML.trim();
        if (children && props.children === undefined) {
          props = { ...props, children };
        }
      } catch (error) {
        // ignore template errors
      }
    }

    const root = createRoot(container as HTMLElement);
    root.render(React.createElement(Component, props));
  });
};
