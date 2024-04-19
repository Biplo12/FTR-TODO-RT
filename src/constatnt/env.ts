export const isProd = process.env.NEXT_PUBLIC_DEV_MODE === "false";
export const isLocal = process.env.NEXT_PUBLIC_DEV_MODE === "true";

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === "true" ?? false;
