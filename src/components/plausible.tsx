import { init, PlausibleConfig, type PlausibleEventOptions, track } from "@plausible-analytics/tracker";
import { ClientOnly } from "@tanstack/solid-router";
import { mergeProps, onMount } from "solid-js";
import { isServer } from "solid-js/web";

export const Plausible = {
  Init: (props: PlausibleConfig) => (
    <ClientOnly>
      <PlausibleInit {...props} />
    </ClientOnly>
  ),

  Track: (props: PlausibleTrackProps) => (
    <ClientOnly>
      <PlausibleTrack {...props} />
    </ClientOnly>
  ),
};

const defprops: Partial<PlausibleConfig> = {
  endpoint: "/api/event",
};

const PlausibleInit = (props: PlausibleConfig) => {
  onMount(() => !isServer && init(mergeProps(props, defprops)));
  return null;
};

type PlausibleTrackProps = {
  eventName: string;
  opts?: PlausibleEventOptions;
};

const PlausibleTrack = (props: PlausibleTrackProps) => {
  onMount(() => track(props.eventName, props.opts ?? {}));
  return null;
};
