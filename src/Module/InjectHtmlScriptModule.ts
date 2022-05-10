import { IsNullOrUndefined } from '../Object/ObjectExtensions';

/**
 * @experimental
 */
export const InjectHtmlScriptModule = (key: string, code: string) => {
  if (IsNullOrUndefined(window) || IsNullOrUndefined(document))
    throw new Error('DOM not available on this execution environment');

  const customScript = document.createElement('script');
  customScript.setAttribute('key', key);
  customScript.setAttribute('type', 'module');
  const inlineCustomScript = document.createTextNode(code);
  customScript.appendChild(inlineCustomScript);
  document.head.appendChild(customScript);
};
