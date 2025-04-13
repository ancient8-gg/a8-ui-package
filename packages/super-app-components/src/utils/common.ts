export const isBrowser = typeof window !== 'undefined'

export function onEvent<
  T extends Window | Document | HTMLElement | EventTarget,
>(
  target: T | null,
  event: string,
  callback: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions | boolean,
) {
  if (target && target.addEventListener) {
    target.addEventListener(event, callback, options)
  }
}

export function offEvent<
  T extends Window | Document | HTMLElement | EventTarget,
>(
  target: T | null,
  event: string,
  callback: EventListenerOrEventListenerObject,
  options?: EventListenerOptions | boolean,
) {
  if (target && target.removeEventListener) {
    target.removeEventListener(event, callback, options)
  }
}
