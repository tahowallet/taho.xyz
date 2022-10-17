import {v4 as uuidv4} from 'uuid';

// eslint-disable-next-line
export const POSTHOG_API_KEY = process.env.GATSBY_POSTHOG_API_KEY

const retrievedUUID = typeof window !== 'undefined' ? localStorage.getItem('UUID') : null

export function posthogEvent(eventName:string) {
  if (typeof window !== 'undefined') {
    //log to check if UUID is already present
    if (retrievedUUID) {
      var date = new Date;
      date.setDate(date.getDate() + 30);
      document.cookie = "UUID=" + retrievedUUID + ";expires=" + date

      fetch("https://app.posthog.com/capture/", {
        method: "POST",
        body: JSON.stringify({
          api_key: POSTHOG_API_KEY,
          event: eventName,
          properties: {
            distinct_id: retrievedUUID,
            data: "This adds posthog events to Tally extension",
            current_url: window.location.href,
            $lib: window.location.href,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // eslint-disable-next-line no-console
      console.log("UUID:", retrievedUUID)
    }

    //If not present, generate a new one and put it in storage.
    if (retrievedUUID === null)
    {
      let setUUID = uuidv4();
      localStorage.setItem('UUID', setUUID)

      var date = new Date;
      date.setDate(date.getDate() + 30);
      document.cookie = "UUID=" + setUUID + ";expires=" + date

      fetch("https://app.posthog.com/capture/", {
        method: "POST",
        body: JSON.stringify({
          api_key: POSTHOG_API_KEY,
          event: eventName,
          properties: {
            distinct_id: setUUID,
            data: "This adds posthog events to Tally extension",
            current_url: window.location.href,
            $lib: window.location.href,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // eslint-disable-next-line no-console
      console.log("new UUID:", setUUID)
    }
  }
}
